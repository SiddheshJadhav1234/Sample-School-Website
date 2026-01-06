import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import AboutPreview from '../components/Home/AboutPreview';
import OurJourneyTimeline from '../components/Home/OurJourneyTimeline';
import MissionVisionCards from '../components/Home/MissionVisionCards';
import FacilitiesSlider from '../components/Home/FacilitiesSlider';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import PrincipalMessage from '../components/Home/PrincipalMessage';
import Testimonials from '../components/Home/Testimonials';
import GetStartedCTA from '../components/Home/GetStartedCTA';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutPreview />
      <OurJourneyTimeline />
      <MissionVisionCards />
      <FacilitiesSlider />
      <WhyChooseUs />
      <PrincipalMessage />
      <Testimonials />
      <GetStartedCTA />
    </div>
  );
};

export default HomePage;