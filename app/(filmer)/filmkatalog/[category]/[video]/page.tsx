import Viewer from "@/components/filmer/filmkatalog/video-viewer/viewer"

import getCategories from '@/lib/graphql-requests/get-categories'


export async function generateStaticParams() {
  const categories = await getCategories();
 
  const params = categories.map((category: Category) => 
    category.videos.items.map((video: Video) => ({
      video: encodeURI(video.slug),
      category: encodeURI(category.slug)
    }))
  );

  return params.flat();
}


const VideoViewer = ({params}: {params: {video: string}}) => {
  return (
    <Viewer videoSlug={decodeURI(params.video)}/>
  )
}

export default VideoViewer