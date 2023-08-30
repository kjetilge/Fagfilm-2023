"use client"

// One way to solve this would be to hide the carousel with opacity: 0;
// until Embla has initialized. Alternatively, you can add opacity: 0;
// to all the slides if you still want to display the carousel arrows and dots until Embla has initialized.
// There are probably other ways to do it but I think you get the idea.
// sandbox: https://codesandbox.io/s/suspicious-burnell-mfs1q

import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide" key={1}>
                <div className="embla__slide__number">
                  <span>{1 + 1}</span>
                </div>
                <img
                  className="embla__slide__img"
                  src="/images/slide-1.jpg"
                  alt="Your alt text"
                />
            </div>
            <div className="embla__slide" key={1}>
                <div className="embla__slide__number">
                  <span>{1 + 1}</span>
                </div>
                <img
                  className="embla__slide__img"
                  src="/images/slide-2.jpg"
                  alt="Your alt text"
                />
            </div>
            <div className="embla__slide" key={1}>
                <div className="embla__slide__number">
                  <span>{1 + 1}</span>
                </div>
                <img
                  className="embla__slide__img"
                  src="/images/slide-3.jpg"
                  alt="Your alt text"
                />
            </div>
            <div className="embla__slide" key={1}>
                <div className="embla__slide__number">
                  <span>{1 + 1}</span>
                </div>
                <img
                  className="embla__slide__img"
                  src="/images/slide-4.jpg"
                  alt="Your alt text"
                />
            </div>
        </div>
      </div>

      <div className="embla__buttons">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  )
}

export default EmblaCarousel
