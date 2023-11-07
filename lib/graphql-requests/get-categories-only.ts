import { CategoryBySlugQuery } from './queries'
import { CategoriesOnlyQuery } from './queries'

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT as string
const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY as string

type Category = {
  id: string
  name: string
  rank: number
  slug: string
}

export default async  function getCategoriesOnly() {
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      cache: 'force-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': GRAPHQL_API_KEY,
      },
      body: JSON.stringify({
        query: CategoriesOnlyQuery
      })
    });
    const  body = await response.json();
    const categories = body.data.listCategorys.items
    const filteredCategories = categories.filter((category: Category) => category.name !== "Ikke valgt")
    filteredCategories.sort((a: Category, b: Category) => a.name.localeCompare(b.name));
    return filteredCategories
  } catch (error) {
    console.error(error);
  }
}