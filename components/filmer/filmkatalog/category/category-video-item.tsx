import Link from "next/link";
import Image from "next/image";
import thumb from '@/lib/thumb'

type VideoItemProps = {
  video: Video
  categorySlug: string
}

const CategoryVideoItem = ({video, categorySlug}: VideoItemProps) => {
  const thumbUrl = thumb(video.fileName, video.posterTime, '800')
  return (
    <div className="rounded-lg overflow-hidden">
      <Link href={`/filmkatalog/${categorySlug}/${video.slug}`}>
          <div className="h-full">
            <Image
              src={thumbUrl}
              width={800}
              height={800}
              style={{
                objectFit: 'cover',
              }}
              alt="Forhåndsvisningsbile av video"
            />
          </div>
        
          <div className="absolute bottom-0 w-full">
            <div className="mix-blend-multiply bg-gradient-to-t from-sky-800 w-full pb-[4vw]">
              &nbsp;
            </div>
          </div>
          <h3 className="z-50 absolute left-[1vw] bottom-[0.7vw] text-[0.9vw] font-bold text-white">{video.title}</h3>
      </Link>
    </div>
  )
}

export default CategoryVideoItem