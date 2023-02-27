import './App.css';
import Navigation from './Components/Navigation';
import HeroSection from './Pages/Home page/HeroSection';
import Partners from './Pages/Home page/Partners';
import RatingComponent from './Pages/Home page/RatingComponent';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <HeroSection></HeroSection>
      <Partners></Partners>
      <RatingComponent></RatingComponent>
    </div>
  );
}

export default App;
