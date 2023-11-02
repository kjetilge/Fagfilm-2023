import Image from 'next/image'
import thumb from '@/lib/thumb'
import { MediaPlayerInstance }from '@vidstack/react'
import { useRef } from 'react';
import { RefObject } from 'react';

type ChapterProps = {
  video: Video,
  chapter: Chapter,
  player: RefObject<MediaPlayerInstance>
}

const Chapter = ({ video, chapter, player }: ChapterProps) => {
  const { fileName } = video
  const chapters = video.chapters.items

  function skipToChapter(_: any, start: number) {
    player.current!.currentTime = start // chapter.posterTime
  }

  return (
    <>
      <button onClick={(event)=>skipToChapter(event, chapter.start)} className="h-scroll-chapter-button">
          <Image
            src={thumb(fileName, chapter.posterTime, '600')}
            alt="Illustrasjonbilde til videoen"
            sizes="100vw"
            width={480}
            height={270}
            className="scroller-image"
          />

          <div className="chapter-title-container">
            <h2 className="chapter-title">
                {chapter.title}
            </h2>
          </div>
      </button>

    </>
  )
}

export default Chapter