'use client'
import VideoItem from './video-item'
import Link from 'next/link'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from "styled-components";
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'

// use this in stead https://github.com/YIZHUANG/react-multi-carousel
// https://github.com/leandrowd/react-responsive-carousel

// with Slider: https://www.npmjs.com/package/pure-react-carousel
// https://github.com/express-labs/pure-react-carousel#readme // a WCAG-accessible carousel.
// Styling: https://codesandbox.io/s/nostalgic-mayer-cwtyg8?file=/src/App.js:212-251



type VideoItemProps = {
  videoItems: Video[];
  category: Category;
}

const VideoCarousel = ({videoItems, category}: VideoItemProps) => {

  return (
    <CarouselWrapper>
      <CarouselProvider
        className="relative"
        naturalSlideWidth={16}
        naturalSlideHeight={8}
        totalSlides={videoItems.length}
        visibleSlides={5.32}
        step={5}
        infinite={true}
      >
        <div className="absolute top-0 z-10">
          <ButtonBack>
            <div className="relative h-full">
              <ChevronLeftIcon className="h-10 w-10 text-white" />
              <div className="bg-black opacity-0 hover:opacity-30 min-h-full">..</div>
            </div>
          </ButtonBack>
        </div>

        <ButtonNext className="absolute top-0 right-0 z-10 h-full opacity-10 hover:opacity-100">
            <>
              <div className="h-full w-16">
                <div className="z-10 bg-black opacity-30 hover:opacity-60 h-full">
                    <div>&nbsp;</div>
                </div>
              </div>
              <ChevronRightIcon className="absolute z-10 top-[25%] pt-[0.5vw] right-0 h-16 w-16 text-white" />
            </>
        </ButtonNext>
        
        <Slider className="">
          {videoItems.map((video, index) => {
              return (
                <Slide index={index} key={index} className="">
                  <VideoItem video={video} categorySlug={category.slug}/>
                </Slide>
              )
            })
          }
        </Slider>

      </CarouselProvider>
    </CarouselWrapper>
  )
  
}

export default VideoCarousel


const CarouselWrapper = styled.div`
  &.carousel-container {
    margin: 12px auto;
    max-width: 272px;
    filter: drop-shadow(0px 12px 30px rgba(50, 50, 50, 0.2));

    /* Total-width (including margin) + 1 additional margin */
    @media (min-width: 832px) {
      max-width: 704px;
    }

    @media (min-width: 1088px) {
      max-width: 960px;
    }

    @media (min-width: 1272px) {
      max-width: 1152px;
    }

    @media (min-width: 1504px) {
      max-width: 1344px;
    }
  }
  .carousel__inner-slide {
    width: calc(100% - 0.4vw);
    margin-left: 0.2vw;
  }
`;