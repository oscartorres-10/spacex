'use client'
import React, { useState } from 'react'
import LaunchCard from './LaunchCard'
import { type Launch } from '@/types'

const PastLaunches = (data: any) => {
  const [searchTerm, setSearchTerm] = useState('')
  let filteredLaunches: Launch[] = data.data.docs.filter(
    (launch: Launch) =>
      launch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      launch?.details?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <h1 className='text-4xl font-bold my-4'>List of Past Launches</h1>
      <input
        placeholder='Search...'
        className='flex h-10 w-1/3 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      {filteredLaunches.map((item: Launch, key: number) => (
        <LaunchCard
          key={key}
          name={item.name}
          details={item.details}
          date_local={new Date(item.date_local)}
          rocket={item.rocket}></LaunchCard>
      ))}
    </>
  )
}

export default PastLaunches
