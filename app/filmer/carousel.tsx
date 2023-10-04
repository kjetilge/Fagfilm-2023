'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
// import { Video, Category } from './types'
import { thumb } from './thumbs'
import UseEmblaCarousel from 'embla-carousel-react'
import 'swiper/css';
import { Pagination } from 'swiper/modules';

export default function videosCatalog({ categories }: { categories: Category[] }) {
  const [emblaRef] = UseEmblaCarousel()

  return (
      <ul>
        {categories.map( category => {
          const videos = category.videos.items

          return (

            <li key={category.id}>

              {/* A category of video thumbs in an Embla Carousel */}

              <a href={`/filmkatalog/${category.slug}`}>{category.name}</a>

              <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                  {videos.map((video) => (
                    <div className="embla__container" key={video.id}>
                        {/* <h2>{video.title}</h2> */}
                        <Image
                          src={thumb(video.fileName, video.posterTime, '800')} alt={video.title}
                          width="200"
                          height="112"
                          sizes="(max-width: 1200px) 300px"
                          quality="30"
                        />
                        {/* <img src={thumb(video.fileName, video.posterTime, '300')} alt={video.title}/>                       */}
                    </div>
                  ))}
                </div>
              </div>
            </li>
          )
        })}
      </ul>
  )
}