import React from 'react'
import CategoryGallery from '@/components/filmer/filmkatalog/category-gallery'
import  videos from '@/cypress/fixtures/videos.json'

describe('<Category />', () => {
  it('mounts', () => {
    cy.fixture('videos').as('videos')
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CategoryGallery videos={videos}/>)
  })
})