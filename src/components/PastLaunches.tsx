'use client'
import React, { useState } from 'react'
import LaunchCard from './LaunchCard'
import { type Launch } from '@/types'

// TODO: implement Story 3 - Show More Launches (optional)
// i'm not able to get the launches/query API to give me different results based on limit and sort, so I can't get the pagination. I tried removing the Next.js cache (https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#caching-data) to see if that was the issue but no success. I'm seeing in Postman that the API do work, so the issue is somewhere else.
// will move to Story 4 to continue advancing and then come back to this

const PastLaunches = (data: any) => {
  const [searchTerm, setSearchTerm] = useState('')
  let filteredLaunches = data.data.docs.filter(
    // let filteredLaunches = data.data.filter(
    (launch) =>
      launch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      launch?.details?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <h1 className='text-4xl font-bold my-4 text-center'>
        List of Past Launches
      </h1>
      <input
        placeholder='Search...'
        className='flex h-10 w-4/5 sm:w-1/3 rounded-md border border-input text-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <p className='my-2 text-xs'>{data.data.docs.length} total launches</p>
      {/* <p className='my-2'>{data.data.length} total launches</p> */}

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
    </>
  )
}

export default PastLaunches
