'use client'
import React, { useState } from 'react'
import LaunchCard from './LaunchCard'
import { type Launch } from '@/types'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import Link from 'next/link'

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

      <div className='flex gap-2 items-center'>
        <p className='my-2 text-xs'>{totalLaunches} total launches</p>·
        <p className='my-2 text-xs'>
          {entriesPerPage.length} launches in page {page}
        </p>
      </div>

      <div className='flex gap-4 w-screen overflow-y-scroll'>
        {filteredLaunches.length === 0 ? (
          <p className='mx-auto my-28'>
            No launches found. Select another page or{' '}
            <Link href={`/?page=1&per_page=${per_page}`} className='underline'>
              start from the beginning
            </Link>
            .
          </p>
        ) : (
          filteredLaunches.map((item: Launch, key: number) => (
            <LaunchCard
              key={key}
              name={item.name}
              details={item.details}
              date_local={new Date(item.date_local)}
              rocket={item.rocket}
              links={item.links}></LaunchCard>
          ))
        )}
      </div>

      <Pagination>
        <PaginationContent className='overflow-scroll'>
          <PaginationItem>
            <button
              disabled={Number(page) <= 1}
              className='disabled:cursor-not-allowed disabled:opacity-75'>
              <PaginationPrevious
                onClick={() => {
                  router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`)
                }}
              />
            </button>
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem key={index + 1}>
              <button>
                <PaginationLink
                  onClick={() => {
                    router.push(`/?page=${index + 1}&per_page=${per_page}`)
                  }}
                  isActive={Number(page) === index + 1}>
                  {index + 1}
                </PaginationLink>
              </button>
            </PaginationItem>
          ))}

          <PaginationItem>
            <button
              disabled={Number(page) >= totalPages}
              className='disabled:cursor-not-allowed disabled:opacity-75'>
              <PaginationNext
                onClick={() => {
                  router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`)
                }}
              />
            </button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  )
}

export default PastLaunches
