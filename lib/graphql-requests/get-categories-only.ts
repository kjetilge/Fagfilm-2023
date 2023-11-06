import { CategoryBySlugQuery } from './queries'
import { CategoriesOnlyQuery } from './queries'

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT as string
const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY as string

export default async  function getCategoriesOnly() {
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': GRAPHQL_API_KEY,
      },
      body: JSON.stringify({
        query: CategoriesOnlyQuery
      })
    });
    const body = await response.json();
    const category = body.data?.listCategorys.items
    console.log()
    return category
  } catch (error) {
    console.error(error);
  }
}