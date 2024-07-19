export async function getPastLaunches() {
  const body = {
    query: {},
    options: {
      limit: 3,
      sort: {
        date_local: 'asc',
      },
    },
  }
  // the sorting doesn't seem to be working, i'm not sure if the API blocked me and it's serving always the same data but it's not reflecting when I change either the sort or the limit
  // FIXED the issue was i wasn't sending the headers in the request, and Next.js cached an initial request i did and was showing always the same with 10 total launches, this confused me a bit, now the limit and sort reflect correctly when i change them
  const res = await fetch('https://api.spacexdata.com/v4/launches/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export async function getAllLaunches() {
  const res = await fetch('https://api.spacexdata.com/v5/launches', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export async function getOneRocket(id: string) {
  const res = await fetch(`https://api.spacexdata.com/v4/rockets/:${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
