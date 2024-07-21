'use client'
import React, { useState } from 'react'
import LaunchCard from './LaunchCard'
import { type Launch } from '@/types'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

// TODO: implement Story 3 - Show More Launches (optional), try with Pagination component https://ui.shadcn.com/docs/components/pagination
// TODO: continue with Pagination

const PastLaunches = ({ entriesPerPage, totalLaunches, totalPages }: any) => {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()

  let filteredLaunches = entriesPerPage.filter(
    (launch: Launch) =>
      launch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      launch?.details?.toLowerCase().includes(searchTerm.toLowerCase())
  )
  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '3'

  return (
    <>
      <h1 className='text-4xl font-bold my-4 text-center'>
        List of Past Launches
      </h1>

      <input
        placeholder='Search this page...'
        className='flex h-10 w-4/5 sm:w-1/3 rounded-md border border-input text-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <p className='my-2 text-xs'>{totalLaunches} total launches</p>
      <p className='my-2 text-xs'>
        {entriesPerPage.length} launches in this page
      </p>

      <div className='grid gap-4 w-min'>
        {filteredLaunches.map((item: Launch, key: number) => (
          <LaunchCard
            key={key}
            name={item.name}
            details={item.details}
            date_local={new Date(item.date_local)}
            rocket={item.rocket}
            links={item.links}></LaunchCard>
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            {/* TODO: disable previous and next buttones accordingly, shouldn't be possible to go to page -1 for example */}
            <PaginationPrevious
              href='#'
              onClick={() => {
                router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`)
              }}
            />
          </PaginationItem>

          {/* TODO: chequear cual es el valor correcto para lenght para tener el numero correcto de botones mostrados */}
          {Array.from({ length: totalPages / Number(per_page) }, (_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href='#'
                onClick={() => {
                  router.push(`/?page=${index}&per_page=${per_page}`)
                }}
                isActive={Number(page) === index}>
                {index}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              href='#'
              onClick={() => {
                router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`)
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  )
}

export default PastLaunches
