"use client"
import { useState, useEffect } from 'react';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import Image from 'next/image';
import { thumb } from './thumbs';

import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import styles from './catalog-styles.module.css';

interface VideoCatalogProps {
  categories: Category[];
}

export default function VideoCatalog({ categories }: VideoCatalogProps) {
  const [slidesPerView, setSlidesPerView] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setSlidesPerView(5);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 300) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(2);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ul className={styles['catalog-list']}>
      {categories.map((category) => {
        const videos = category.videos.items;

        return (
          <li key={category.id} className={styles['catalog-item']}>
            <Link href={`/filmkatalog/${category.slug}`}>
              <h2 className={styles['catalog-title']}>{category.name}</h2>
            </Link>
            <div className={styles['catalog-carousel']}>
              <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView={slidesPerView}
                spaceBetween={20}
              >
                {videos.map((video) => (
                  <SwiperSlide key={video.id}>
                    <span className={styles['catalog-video-link']}>
                    <Link href={`/film/${video.slug}`}>
                      
                        <div className={styles['catalog-video-frame']}>
                          <Image
                            src={thumb(video.fileName, video.posterTime, '400')}
                            alt={video.title}
                            width="200"
                            height="112"
                            sizes="(max-width: 1200px) 250px"
                            quality="70"
                          />
                          <h4 className={styles['catalog-video-title']}>{video.title}</h4>
                        </div>
                      
                    </Link>
                    </span>
                  </SwiperSlide>
                ))}
                
              </Swiper>
            </div>
          </li>
        );
      })}
    </ul>
  );
}