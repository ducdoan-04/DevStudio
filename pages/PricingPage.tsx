import React from "react";
import GalleryHero from "../components/GalleryHero";
import PricingDetails from "../components/PricingDetails";
import Contact from "../components/CTA";

const PricingPage: React.FC = () => {
  return (
    <div className="pt-36">
      <GalleryHero title="Báo giá của chúng tôi" />
      <PricingDetails />
      <Contact />
    </div>
  );
};

export default PricingPage;
