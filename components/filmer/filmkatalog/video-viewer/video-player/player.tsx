
'use client'
import './player.css';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeftIcon } from '@radix-ui/react-icons'
// import BackButton from '@/components/shared/back-button';

import {
  isHLSProvider,
  MediaPlayer,
  MediaProvider,
  Poster,
  Track,
  type MediaCanPlayDetail,
  type MediaCanPlayEvent,
  type MediaPlayerInstance,
  type MediaProviderAdapter,
  type MediaProviderChangeEvent,
} from '@vidstack/react';

import {
  DefaultAudioLayout,
  defaultLayoutIcons,
  DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default';

import { textTracks } from './tracks';
import { thumb }from '@/lib/thumb'
import Chapters from '../chapters/chapters'
import createSubtitleTrackFromSlug from '@/lib/create-subtitle-track-from-slug';

const serverUrl = 'https://dmup9golsctl.cloudfront.net'

type PlayerProps = {
  video: Video
}


function Player({ video }: PlayerProps) {
  const {fileName, posterTime, title} = video
  const posterUrl = thumb(fileName, posterTime, '1920')
  const videoUrl = `${serverUrl}/${fileName}`
  const [subtitleTrack, setSubtitleTrack] = useState<SubtitleTrack | null>(null);


  let player = useRef<MediaPlayerInstance>(null),
    [src, setSrc] = useState('');

  useEffect(() => {
    // Initialize src.
    changeSource('video');
    const fetchSubtitleTrack = async () => {
      const track = await createSubtitleTrackFromSlug(slug);
      setSubtitleTrack(track);
    };

    fetchSubtitleTrack();
    // Subscribe to state updates.
    return player.current!.subscribe(({ paused, viewType }) => {
      // console.log('is paused?', '->', paused);
      // console.log('is audio view?', '->', viewType === 'audio');
    });

  },[video.slug]); //, []

  function onProviderChange(
    provider: MediaProviderAdapter | null,
    nativeEvent: MediaProviderChangeEvent,
  ) {
    // We can configure provider's here.
    if (isHLSProvider(provider)) {
      provider.config = {};
    }
  }

  // We can listen for the `can-play` event to be notified when the player is ready.
  function onCanPlay(detail: MediaCanPlayDetail, nativeEvent: MediaCanPlayEvent) {
    // ...
  }

  async function changeSource(type: string) {
    // const muxPlaybackId = 'VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU';
    try {
      // subtitles = await createSubtitleTrackFromSlug(video.slug)
      // console.log('subtitleTrack: ', subtitles)
    } catch (error) {
      console.log('error: ', error)
    }

    switch (type) {
      case 'video':
        setSrc(videoUrl.toString());
        break;
      case 'hls':
        // setSrc(`https://stream.mux.com/${muxPlaybackId}.m3u8`);
        break;
    }
  }
  return (
    <>

      {/* <BackButton className="absolute top-0 left-0 z-10 p-3 ml-4">
        <ArrowLeftIcon className="h-10 w-10 text-white" />
      </BackButton> */}
{/* aspect-min20/12:flex-row */}
      {/* on large aspects use flex-row and padding on top in the beginnening so that top nav is on dark background */}
      {/* use aspect-min20/12:mt-[68px] only for a small aspect range in the switch between bottom and side chapters */}
      <div className="flex flex-col h-screen wide-desktop-aspects:flex-row">

        {/* the player gets win height when win aspect > 20/12   -mb-2 overflow-hidden aspect-min20/12:player-size-from-wh */}
        {/* bruk leading-[0rem]  for å fjerne space mellom player og nav. -mb-1.5 har ikke effekt ? */}
        
        <main className="leading-[0rem] flex-none aspect-max20/12: aspect-min20/12:player-size-from-wh aspect-min20/12:flex-none aspect-min20/12:overflow-hidden"> 
          <MediaPlayer
            aspectRatio="16/9"
            className="player"
            title={title}
            src={src}
            onProviderChange={onProviderChange}
            onCanPlay={onCanPlay}
            ref={player}
          >
            <MediaPlayer
              aspectRatio="16/9"
              className="player"
              title={title}
              src={src}
              onProviderChange={onProviderChange}
              onCanPlay={onCanPlay}
              ref={player}
            >
              <MediaProvider>
                <Poster
                  className="vds-poster"
                  src={posterUrl}
                  alt="Illustrasjonsbilde for videoen"
                />
                {subtitleTrack && subtitleTrack.src && <Track {...subtitleTrack} />}
              </MediaProvider>

              {/* Layouts */}

              <DefaultVideoLayout
                icons={defaultLayoutIcons}
                // thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"
              />
            </MediaPlayer>
        </main>
        {/*  */}
        <Chapters video={video} player={player}/>
        {/* <div className="h-40 w-10 bg-red-400">K</div> */}
      </div>
    </>
  );
}

export default Player;