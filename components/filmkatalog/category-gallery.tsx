import "react-alice-carousel/lib/alice-carousel.css";
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// import { Video } from '@/prisma/client';

interface CategoryVideosProps {
  videos: Video[];
}

// const handleDragStart = (e) => e.preventDefault();

// usage: https://github.com/maxmarinich/react-alice-carousel
export default function CategoryGallery ({ videos }: CategoryVideosProps) {
  return (
    <AliceCarousel mouseTracking items={videos} />
  );
}
