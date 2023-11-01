
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

  const { fileName } = video
  const chapters = video.chapters.items

    function skipToChapter(_: any, start: number) {
    player.current!.currentTime = start
  }

  return (
    <>
    {/* aspect media queriers are defined in tailwing.config.js */}
    {/* on aspects larger than aspect-min20/12 swith to vertical scroller to the right of player */}

    {/* <nav className={`aspect-max14/12:v-scroll-chapters-nav  aspect-min14/12:h-scroll-chapters-nav`}>
      <ul className="aspect-max14/12:v-scroll-chapters-ul aspect-min14/12:h-scroll-chapters-ul">
        {chapters.map((chapter, index) => (
          <li className="aspect-max14/12:v-scroll-chapters-li  aspect-min14/12:h-scroll-chapters-li" key="{index}">
            <Chapter video={video} chapter={chapter} player={player}/>
          </li>
        ))}
      </ul>
    </nav> */}

    {/* <div className="v-scroll-chapters-nav-right @container">
      <p className="v-scroll-chapters-ul-right @[100px]:bg-red-200 bg-indigo-600">TEKS</p>
      <ul className="v-scroll-chapters-ul-right">
        {chapters.map((chapter, index) => (
          <li className="v-scroll-chapters-li" key="{index}">
            <Chapter video={video} chapter={chapter} player={player}/>
          </li>
        ))}
      </ul>
    </div> */}


      {/* @[400px]:columns-2 @[800px]:columns-3 */}
      <ul className="h-scroll-chapters-ul ">
        {chapters.map((chapter, index) => (
          <li className="aspect-video inline-block h-full @container" key="{index}">
            <Chapter video={video} chapter={chapter} player={player}/>
          </li>
        ))}
      </ul>


    {/* working right side chapter nav */}
    {/* @[400px]:columns-2 @[800px]:columns-3 */}
    {/* <nav className="chapters-nav-r @container">
      <ul className="">
        {chapters.map((chapter, index) => (
          <li className="aspect-video" key="{index}">
            <Chapter video={video} chapter={chapter} player={player}/>
          </li>
        ))}
      </ul>
    </nav> */}

  </>
  )
}

export default chapters