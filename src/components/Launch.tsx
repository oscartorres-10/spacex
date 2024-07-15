import React from 'react'
import { formatRelative } from 'date-fns'

type Props = {
  name: string
  details: string
  date_local: Date
  rocket: string
}

const Launch = ({ name, details, date_local, rocket }: Props) => {
  const isoDate = date_local.toISOString().slice(0, 10)
  // the dates currently appearing are many years in the past so the relative date doesn't seem so obvious, but it's doing it.
  const relativeDate = formatRelative(isoDate, new Date())
  return (
    <>
      <div className='grid grid-rows-2 gap-2 border-dashed border-blue-500 rounded-sm m-4 p-2 border w-full'>
        <p className='flex gap-2 justify-between'>
          <span className='font-bold'>{name}</span>
          {/* <span className='text-sm'>{isoDate}</span> */}
          <span className='text-sm'>{relativeDate}</span>
        </p>
        <p className=''>{details ? details : 'No description'}</p>
        {/* <p className=''>{rocket}</p> */}
      </div>
    </>
  )
}

export default Launch
