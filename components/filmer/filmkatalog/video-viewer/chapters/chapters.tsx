
import Image from 'next/image'
import thumb from '@/lib/thumb'
import { MediaPlayerInstance }from '@vidstack/react'
import Chapter from './chapter'
import { RefObject } from 'react';

type ChaptersProps = {
  video: Video,
  player: RefObject<MediaPlayerInstance>
}

const chapters = ({video, player}: ChaptersProps) => {
  // scrollbar-thin scrollbar-thumb-rose-600 scrollbar-track-gray-900
  const { fileName } = video
  const chapters = video.chapters.items

    function skipToChapter(_: any, start: number) {
    player.current!.currentTime = start // chapter.posterTime
  }
     //nav horizontal scroll overflow-x-auto h-full scrollbar-thin scrollbar-thumb-rose-600 scrollbar-track-gray-900
    // ul horizontal scroll whitespace-nowrap h-full
  return (
    <>

    {/* <nav className="aspect-min14/12:h-scroll-chapters-nav">
      <ul className="aspect-min14/12:h-scroll-chapters-ul">
        {chapters.map((chapter, index) => (
          <li className="bg-red-700 aspect-min14/12:inline" key={index}>
            <Chapter video={video} chapter={chapter} player={player}/>
          </li>
        ))}
      </ul>
    </nav> */}

    <nav className="aspect-max14/12:v-scroll-chapters-nav    aspect-min14/12:h-scroll-chapters-nav">
      <ul className="aspect-max14/12:v-scroll-chapters-ul   aspect-min14/12:h-scroll-chapters-ul">
        {chapters.map((chapter, index) => (
          <li className="aspect-max14/12:v-scroll-chapters-li  aspect-min14/12:h-scroll-chapters-li" key="{index}">
            <Chapter video={video} chapter={chapter} player={player}/>
          </li>
        ))}
      </ul>
    </nav>

    {/* <nav className="v-scroll-chapters-nav">
      <ul className="v-scroll-chapters-ul">
        {chapters.map((chapter, index) => (
          <li className="v-scroll-chapters-li" key="{index}">
            <Chapter video={video} chapter={chapter} player={player}/>
          </li>
        ))}
      </ul>
    </nav> */}


    {/* <nav className="bg-slate-300 overflow-y-auto h-full w-screen">
      <div className="columns-2">
      {chapters.map((chapter, index) => (
        <div className="aspect-video" key="{index}">
          <Chapter video={video} chapter={chapter} player={player}/>
        </div>
      ))}
      </div>
    </nav> */}
    

  </>
  )
}

export default chapters