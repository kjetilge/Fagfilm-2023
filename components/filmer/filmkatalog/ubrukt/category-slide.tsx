
import React from 'react';
import Image from 'next/image';
import { thumb } from '../thumbs';

interface CategoryVideoProps {
  video: Video;
}

// usage: https://github.com/maxmarinich/react-alice-carousel
export default function CategorySlide ({ video }: CategoryVideoProps) {
  const thumbUrl = thumb(video.fileName, video.posterTime, '400')
  return (
    <div>
      <Image
        src={thumbUrl}
        alt={video.title}
        width={500}
        height={200}
        sizes="(max-width: 1200px) 400px"
        quality="70"
      />
      <h3>{video.title}</h3>
    </div>
  );
}