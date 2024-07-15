export async function getPastLaunches() {
  // the sorting doesn't seem to be working, i'm not sure if the API blocked me and it's serving always the same date but it's not reflecting when I change either the sort or the limit
  const res = await fetch('https://api.spacexdata.com/v4/launches/query', {
    method: 'POST',
    body: `{ 
      "query": {}, 
      "options": {
        "limit": 5,
        "sort": {
          "date_local": "desc"
        }
      } 
    }`,
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
