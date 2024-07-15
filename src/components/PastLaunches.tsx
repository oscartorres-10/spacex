import React from 'react'
import Launch from './Launch'
import { getPastLaunches } from '../queries'

const PastLaunches = async () => {
  const data = await getPastLaunches()

  return (
    <>
      <h1 className='text-4xl font-bold'>List of Past Launches</h1>
      {data.docs.map((item: any, key: number) => (
        <Launch
          key={key}
          name={item.name}
          details={item.details}
          date_local={new Date(item.date_local)}
          rocket={item.rocket}></Launch>
      ))}
    </>
  )
}

export default PastLaunches
