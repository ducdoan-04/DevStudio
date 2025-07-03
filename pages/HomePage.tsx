import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import Invitations from '../components/Pricing';
import Album from '../components/Portfolio';
import Blog from '../components/IdeaGenerator';
import About from '../components/About';
import Contact from '../components/CTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Invitations />
      <Album />
      <Blog />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
