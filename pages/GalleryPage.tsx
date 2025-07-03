import React from 'react';
import GalleryHero from '../components/GalleryHero';
import PhotoGrid from '../components/PhotoGrid';
import Contact from '../components/CTA';

const GalleryPage: React.FC = () => {
  return (
    <div className="pt-36">
      <GalleryHero />
      <PhotoGrid />
      <Contact />
    </div>
  );
};

export default GalleryPage;
