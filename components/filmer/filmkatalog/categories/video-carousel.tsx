'use client'
import VideoItem from './video-item'
import Link from 'next/link'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from "styled-components";
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
      naturalSlideWidth={32}
      naturalSlideHeight={23}
      totalSlides={videoItems.length}
      visibleSlides={5}
      step={5}
      >
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
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
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

  /* This class is found in Slide from pure-react-carousel */
  /* We need to override it to add space between slides */
  .carousel__inner-slide {
    /* width: 100% - margin */
    width: calc(100% - 16px);
    /* margin-left: margin/2 */
    /* margin is required to adjust positioning as the width is diminished*/
    margin-left: 8px;

    @media (min-width: 1272px) {
      width: calc(100% - 24px);
      margin-left: 12px;
    }

    @media (min-width: 1272px) {
      width: calc(100% - 32px);
      margin-left: 16px;
    }
  }
`;