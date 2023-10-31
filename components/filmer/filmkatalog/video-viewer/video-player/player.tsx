
'use client'
import './player.css';

import { useEffect, useRef, useState } from 'react';

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

const serverUrl = 'https://dmup9golsctl.cloudfront.net'

type PlayerProps = {
  video: Video
}


function Player({ video }: PlayerProps) {
  const {fileName, posterTime, title} = video
  const posterUrl = thumb(fileName, posterTime, '1920')
  const videoUrl = `${serverUrl}/${fileName}`

  let player = useRef<MediaPlayerInstance>(null),
    [src, setSrc] = useState('');

  useEffect(() => {
    // Initialize src.
    changeSource('video');

    // Subscribe to state updates.
    return player.current!.subscribe(({ paused, viewType }) => {
      // console.log('is paused?', '->', paused);
      // console.log('is audio view?', '->', viewType === 'audio');
    });
  }); //, []

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

  function changeSource(type: string) {
    // const muxPlaybackId = 'VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU';
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
      <div className="flex flex-col h-screen">
        <main className="-mb-2">
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
                alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
              />
              {textTracks.map((track) => (
                <Track {...track} key={track.src} />
              ))}
            </MediaProvider>

            {/* Layouts */}
            <DefaultAudioLayout icons={defaultLayoutIcons} />
            <DefaultVideoLayout
              icons={defaultLayoutIcons}
              thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"
            />
          </MediaPlayer>
        </main>
        <Chapters video={video} player={player}/>
      </div>
    </>
  );
}

export default Player;