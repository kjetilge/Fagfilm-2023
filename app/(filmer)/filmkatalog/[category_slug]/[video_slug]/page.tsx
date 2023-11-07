import Viewer from "@/components/filmer/filmkatalog/video-viewer/viewer"

const VideoViewer = ({params}: {params: {video_slug: string}}) => {
  return (
    <Viewer videoSlug={params.video_slug}/>
  )
}

export default VideoViewer