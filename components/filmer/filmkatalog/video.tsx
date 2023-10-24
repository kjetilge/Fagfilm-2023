import NotFound from "@/components/shared/not-found";
import getVideoBySlug from "@/lib/graphql-requests/get-video-by-slug";
import { thumb }from './thumbs'

type VideoProps = {
  videoSlug: string | undefined;
}

async function Video({ videoSlug }: VideoProps) {
  if (!videoSlug) {
    return <NotFound />
  }
  console.log('videoSlug i video.tsx: ', videoSlug)
  const video = await getVideoBySlug( videoSlug)
  const {fileName, posterTime} = video
  const thumbnailUrl = thumb(fileName, posterTime, '240') // fileName:String, time: number, width: string
  
  return (
    <div>
      <h2>Video tittel: {video.title}</h2>
      <img src={thumbnailUrl} alt="" />
    </div>
  )
}

export default Video