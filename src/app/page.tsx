import PastLaunches from '@/components/PastLaunches'
import { Suspense } from 'react'
import { getPastLaunches } from '../queries'


export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const data = await getPastLaunches()

  const page = searchParams['page'] ?? '1'
  const per_page = searchParams['per_page'] ?? '3'
  const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...
  const end = start + Number(per_page) // 5, 10, 15 ...

  const entriesPerPage = data.docs.slice(start, end)
  const totalLaunches = data.totalDocs
  const totalPages = data.totalPages

  return (
    <main className='flex min-h-screen flex-col items-center p-4'>
      <Suspense fallback={'Loading...'}>
        <PastLaunches
          entriesPerPage={entriesPerPage}
          totalLaunches={totalLaunches}
          totalPages={totalPages}
        />
      </Suspense>
    </main>
  )
}
