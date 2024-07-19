import PastLaunches from '@/components/PastLaunches'
import { Suspense } from 'react'
import { getAllLaunches, getPastLaunches } from '../queries'

export default async function Home() {
  const data = await getPastLaunches()
  // const data = await getAllLaunches()
  return (
    <main className='flex min-h-screen flex-col items-center p-4'>
      <Suspense fallback={'Loading...'}>
        <PastLaunches data={data} />
      </Suspense>
    </main>
  )
}
