import React from 'react';
import AboutIntro from '../components/AboutIntro';
import Team from '../components/Team';
import Contact from '../components/CTA';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24">
      <AboutIntro />
      <Team />
      <Contact />
    </div>
  );
};

export default AboutPage;
