import React from 'react'
import Navigation from '../../Components/Navigation'
import HeroSection from './HeroSection'
import Partners from './Partners'
import RatingComponent from './RatingComponent'
import ExploreFeature from './ExploreFeature'
import CardsSection from './CardsSection'
import Integration from './Integration'
import TestimonialSection from './TestimonialSection'
import FaqComponent from '../../Components/FaqComponent'
import Footer2 from '../../Components/Footer2'
import '../../App.css'

import '../../Whitney-Book.otf'


export default function HomePage() {
  return (
    <div className='fontFamily'>
      <Navigation></Navigation>
      <HeroSection></HeroSection>
      <Partners></Partners>
      <RatingComponent></RatingComponent>
      <ExploreFeature></ExploreFeature>
      <CardsSection />
      <Integration />
      <TestimonialSection />
      <FaqComponent />
      <Footer2 />
    </div>
  )
}
