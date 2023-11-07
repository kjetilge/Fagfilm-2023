import NotFound from "@/components/shared/not-found";
import getVideoBySlug from "@/lib/graphql-requests/get-video-by-slug";
import { thumb }from '../../../../lib/thumb'
import Player from './video-player/player';

import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options"
import IkkeLoggetInn from "@/app/(hjemmesider)/ikke-logget-inn/page";
import { redirect } from 'next/navigation'

type VideoProps = {
  videoSlug: string | undefined;
}

async function Viewer({ videoSlug }: VideoProps) {
  const session = await getServerSession(authOptions)

  if (!session) {
   //  return <IkkeLoggetInn />
   redirect("/ikke-logget-inn")
  }

  if (!videoSlug) {
    return <NotFound />
  }

  console.log('videoSlug i video.tsx: ', videoSlug)

  const video = await getVideoBySlug(videoSlug)

  if (!video) {
    return <NotFound />
  }
  const {fileName, posterTime} = video

  return (
    <Player video={video}/>
  )
}

export default Viewer