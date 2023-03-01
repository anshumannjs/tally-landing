import './App.css';
import Navigation from './Components/Navigation';
import HeroSection from './Pages/Home page/HeroSection';
import Partners from './Pages/Home page/Partners';
import RatingComponent from './Pages/Home page/RatingComponent';
import ExploreFeature from './Pages/Home page/ExploreFeature';
import ExploreFeatureCards from './Pages/Home page/ExploreFeatureCards';
import CardsSection from './Pages/Home page/CardsSection';
import Integration from './Pages/Home page/Integration';
import TestimonialSection from './Pages/Home page/TestimonialSection';
import FaqComponent from './Components/FaqComponent';
import Footer1 from './Components/Footer1';
import Footer2 from './Components/Footer2';

import './Whitney-Book.otf'

function App() {
  return (
    <div className='fontFamily'>
      <Navigation></Navigation>
      <HeroSection></HeroSection>
      <Partners></Partners>
      <RatingComponent></RatingComponent>
      <ExploreFeature></ExploreFeature>
      {/* <ExploreFeatureCards></ExploreFeatureCards> */}
      <CardsSection />
      <Integration />
      <TestimonialSection />
      <FaqComponent />
      <Footer2 />
    </div>
  );
}

export default App;
