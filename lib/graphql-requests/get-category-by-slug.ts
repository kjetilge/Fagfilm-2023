import { CategoryBySlugQuery } from './queries'

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT as string
const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY as string

export default async  function getCategoryBySlug(categorySlug: string) {
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': GRAPHQL_API_KEY,
      },
      body: JSON.stringify({
        query: CategoryBySlugQuery,
        variables: {slug: categorySlug}
      })
    });
    const body = await response.json();
    const category = body.data?.listCategorys.items[0]
    return category
    // const category = data?.listCategorys.items[0]
    // return category
  } catch (error) {
    console.error(error);
  }
}