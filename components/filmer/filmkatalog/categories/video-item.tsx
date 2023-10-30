
import Link from "next/link";
import Image from "next/image";
import thumb from '@/lib/thumb'

type VideoItemProps = {
  video: Video
  categorySlug: string
}
const VideoItem = ({video, categorySlug}: VideoItemProps) => {
  const thumbUrl = thumb(video.fileName, video.posterTime, '800')
  return (
    <Link href={`/filmkatalog/${categorySlug}/${video.slug}`}>
      <div className="bg-zinc-800 h-full rounded-lg overflow-hidden">
      <Image
        src={thumbUrl}
        width={800}
        height={800}
        style={{
          objectFit: 'cover',
        }}
        alt="Forhåndsvisningsbile av video"
      />
      <h3 className="p-2">{video.title}</h3>
      </div>
    </Link>
  )
}

export default VideoItem

// fileName:String, time: number, width: string