import { VideoBySlugQuery } from './queries'

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT as string
const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY as string

export default async  function getVideoBySlug(videoSlug: string) {
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      cache: 'force-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': GRAPHQL_API_KEY,
      },
      body: JSON.stringify({
        query: VideoBySlugQuery,
        variables: {slug: videoSlug}
      })
    });
    const body = await response.json();
    const video = body.data?.listVideos.items[0]
    return video
  } catch (error) {
    console.error(error);
  }
}