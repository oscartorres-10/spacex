import React from 'react'
import { formatRelative } from 'date-fns'
import { type Launch } from '../types'

const LaunchCard = ({ name, details, date_local, rocket, links }: Launch) => {
  const isoDate = date_local.toISOString().slice(0, 10)
  // the dates currently appearing are many years in the past so the relative date doesn't seem so obvious, but it's doing it.
  const relativeDate = formatRelative(isoDate, new Date())

  return (
    <>
      <article className='grid gap-4 rounded-sm m-4 p-2 border w-1/3 border-gray-500 font-mono'>
        <div>
          <p className='font-bold text-2xl'>{name} </p>
          <p className='font-extralight'>
            {details ? details : 'No description'}
          </p>
        </div>
        <div className='flex gap-2 justify-between items-center mt-6'>
          <p>Launch date:</p>
          <p className='text-sm font-mono'>{relativeDate}</p>
        </div>
        {/* <p className=''>{rocket}</p> */}

        {/* TODO: to play video on hover we need to follow YouTube Frame API reference: https://developers.google.com/youtube/iframe_api_reference#Getting_Started 
        we should be able to call the playback controls like `player.playVideo()`
        */}
        <iframe
          className='justify-self-center'
          width='460'
          height='215'
          src={`https://www.youtube-nocookie.com/embed/${links.youtube_id}`}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen></iframe>
      </article>
    </>
  )
}

export default LaunchCard
