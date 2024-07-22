hi 👋🏼

this is a small project from a frontend technical assessment i had in an interview a while ago, i wanted to practice and spinned up a Next.js app for it

# i learnt about

- simple data fetching from a [REST API](https://github.com/r-spacex/SpaceX-API)
- server side pagination
  - used [Next.js `useSearchParams`](https://nextjs.org/docs/app/api-reference/functions/use-search-params), a nice way to manage data as an alternative to using state on the client, one great benefit is you are able to save and share that URL
  - used [Pagination](https://ui.shadcn.com/docs/components/pagination) component from [shadcn/ui](https://ui.shadcn.com)

# other resources used

i always try to get an overview of the problem to solve first so i watched a couple of videos:

- [My New Favorite Pagination Method](https://www.youtube.com/watch?v=SXmni_7B0r4)
- [My Updated Way of Adding Pagination w/ Next.js 14, Tailwind CSS and shadcn/ui](https://www.youtube.com/watch?v=1DtJDGwdMQs)

# user stories

for reference, the title of the User Stories were:

- 1 - List of Past Launches (required)
- 2 - Search a Past Launch (required)
- 3 - Show More Launches (optional)
- 4 - Display video (optional)

# improvements

possible improvements could be:

- adding a nice UI to select the number of results per page the user wants and the limit of launches (currently not accessible to the user at all, only done in `queries.tsx` file)
- standarizing alignment of launch cards as it differs between launches that have no description and others that have longer descriptions, it's noticeable when you change pages

<br>

<details>
  <summary>other details of the project</summary>

  <br>

  This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

  First, run the development server:

  ```bash
  npm run dev
  # or
  yarn dev
  # or
  pnpm dev
  # or
  bun dev
  ```

  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

  You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

  This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

  To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

  You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

  The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

  Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
</details>
