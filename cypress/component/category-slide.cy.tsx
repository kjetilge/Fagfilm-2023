import React from 'react'
import CategorySlide from '@/components/filmkatalog/category-slide'
const video = { "title": "Diplomat", "categoryId": "2", "slug": "diplomat", "posterTime": 0, "fileName": "diplomaat-Af4DIYjvB.mp4", "id": "1c6d08d1-6bd6-4685-81de-28884e6c21e0", "chapters": { "items": [ { "title": "Hva gjør en diplomat?", "start": 15.696331, "posterTime": 19.120117 }, { "title": "Konsulære saker", "start": 60.836605, "posterTime": 60.836605 }, { "title": "Hvorfor diplomat?", "start": 185.547377, "posterTime": 185.547377 }, { "title": "Energi", "start": 278.505507, "posterTime": 278.505507 }, { "title": "Spesielt med dette yrket", "start": 333.382711, "posterTime": 337.125251 }, { "title": "Hvordan blir man diplomat?", "start": 419.140333, "posterTime": 423.254143 }, { "title": "Aspirantkurset", "start": 453.66717, "posterTime": 462.070775 }, { "title": "Min karrierevei", "start": 487.400324, "posterTime": 476.37266 }, { "title": " Vielse", "start": 613.449878, "posterTime": 614.187641 }, { "title": "Passer for", "start": 648.999761, "posterTime": 661.012618 }, { "title": "Når har jeg lyktes i jobben?", "start": 728.540896, "posterTime": 728.540896 } ] } }
import Image from 'next/image';
import { thumb } from '@/components/filmkatalog/thumbs';

describe('<Category />', () => {
  it('mounts', () => {
    const file = thumb(video.fileName, video.posterTime, '400')
    const small = {
      width: '600px',
      // height: '100px',
      color: 'green'
    }

    cy.readFile('assets/hest.jpg', null).then((img) => {
      cy.fixture('videos').as('videos')
      // Intercept requests to Next.js backend image endpoint
      cy.intercept('_next/image*', {
        statusCode: 200,
        headers: { 'Content-Type': 'image/png' },
        body: img.buffer,
      })

      cy.mount(<div style={small}><CategorySlide video={video}/></div>)
    })

    
    // see: https://on.cypress.io/mounting-react
    
  })
})