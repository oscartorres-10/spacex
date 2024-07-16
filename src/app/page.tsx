import PastLaunches from '@/components/PastLaunches'
import { Suspense } from 'react'
import { getPastLaunches } from '../queries'

export default async function Home() {
  const data = await getPastLaunches()
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <Suspense fallback={'Loading...'}>
        <PastLaunches data={data} />
      </Suspense>
    </main>
  )
}
