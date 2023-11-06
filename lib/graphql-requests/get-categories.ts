import { CategoriesQuery } from './queries'

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT as string
const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY as string

type Category = {
  id: string
  name: string
  rank: number
  slug: string
}

export default async  function getCategories() {
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': GRAPHQL_API_KEY,
      },
      body: JSON.stringify({
        query: CategoriesQuery
      })
    });
    const  body = await response.json();
    const categories = body.data.listCategorys.items
    const filteredCategories = categories.filter((category: Category) => category.name !== "Ikke valgt")
    filteredCategories.sort((a:Category, b: Category) => a.rank - b.rank);
    return filteredCategories
  } catch (error) {
    console.error(error);
  }
}