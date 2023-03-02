import React from 'react'
import ExploreFeature from './ExploreFeature'
import CardsSection from './CardsSection'
import Integration from './Integration'
import TestimonialSection from './TestimonialSection'
import FaqComponent from '../../Components/FaqComponent'
import Footer2 from '../../Components/Footer2'
import '../../App.css'
import NavbarHerosection from './NavbarHerosection'
import PrivacyPolicy from '../../Components/PrivacyPolicy'
import TermsCondition from '../../Components/TermsCondition'

import '../../Whitney-Book.otf'


export default function HomePage() {
  console.log(window.location)
  return (
    <div className='fontFamily'>
        <div>
          <NavbarHerosection />
          <ExploreFeature></ExploreFeature>
          <CardsSection />
        
          <TestimonialSection />
          <FaqComponent />
          <Footer2 />
        </div>
      {
        (window.location.href=='https://anshumannjs.github.io/tally-landing/privacyPolicy')?
        <PrivacyPolicy />
        :""
      }
      {
        (window.location.href=='https://anshumannjs.github.io/tally-landing/termsCondition')?
        <TermsCondition />
        :""
      }
    </div>
  )
}
