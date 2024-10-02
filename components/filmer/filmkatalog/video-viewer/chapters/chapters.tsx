
import Image from 'next/image'
import thumb from '@/lib/thumb'
import { MediaPlayerInstance }from '@vidstack/react'
import Chapter from './chapter'
import { RefObject } from 'react';

type ChaptersProps = {
  video: Video,
  player: RefObject<MediaPlayerInstance>
}
type ChapterDisplayProps = {
  chapters: Chapter[]
}

const chapters = ({video, player}: ChaptersProps) => {

  const { fileName } = video
  const chapters = video.chapters.items

  function skipToChapter(_: any, start: number) {
    player.current!.currentTime = start
  }


  return (
    <>
    {/* aspect media queriers are defined in tailwing.config.js */}
    {/* on aspects larger than wide-desktop-aspects swith to vertical scroller to the RIGHT of player */}

    <div className="hidden wide-desktop-aspects:grid grid-cols-1 ultra-wide-desktop-aspects:grid-cols-2 gap-1 overflow-y-auto w-full">
      {chapters.map((chapter, index) => (
        <div className="" key={index}>
          <div className="bg-slate-400 w-1920 h-1280 aspect-video">
            <Chapter video={video} chapter={chapter} player={player}/>
          </div>
        </div>
      ))}
    </div>


    {/* Working v scroll under player */}
    <div className="grid grid-cols-3 gap-1 overflow-y-auto w-full wide-desktop-aspects:hidden">
      {chapters.map((chapter, index) => (
        <div className="" key={index}>
          <div className="bg-slate-400 w-1920 h-1280 aspect-video">
            <Chapter video={video} chapter={chapter} player={player}/>
          </div>
        </div>
      ))}
    </div>


  </>
  )
}

export default chapters