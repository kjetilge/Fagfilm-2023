import NotFound from "@/components/shared/not-found";
import getVideoBySlug from "@/lib/graphql-requests/get-video-by-slug";
import { thumb }from '../../../../lib/thumb'
import Player from './video-player/player';
type VideoProps = {
  videoSlug: string | undefined;
}

async function Viewer({ videoSlug }: VideoProps) {
  if (!videoSlug) {
    return <NotFound />
  }
  // console.log('videoSlug i video.tsx: ', videoSlug)
  const video = await getVideoBySlug( videoSlug)
  const {fileName, posterTime} = video

  return (
    <Player video={video}/>
  )
}

export default Viewer