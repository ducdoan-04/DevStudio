import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Testimonials'; // Repurposed for Services
import WhyChooseUs from './components/WhyChooseUs';
import Invitations from './components/Pricing'; // Repurposed for Invitations
import Album from './components/Portfolio'; // Repurposed for Album
import Blog from './components/IdeaGenerator'; // Repurposed for Blog
import About from './components/About';
import Contact from './components/CTA'; // Repurposed for Contact
import Footer from './components/Footer';

const FloralLeft = () => (
  <img src="https://i.imgur.com/gKIIv79.png" alt="Floral decoration" className="floral-left" />
);

const FloralRight = () => (
  <img src="https://i.imgur.com/gKIIv79.png" alt="Floral decoration" className="floral-right" />
);


const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-600 font-sans relative overflow-x-hidden">
      <FloralLeft />
      <FloralRight />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Invitations />
        <Album />
        <Blog />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
