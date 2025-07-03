import React from "react";
import GalleryHero from "../components/GalleryHero";
import ContactContent from "../components/ContactContent";
import Contact from "../components/CTA";

const ContactPage: React.FC = () => {
  return (
    <div className="pt-36">
      <GalleryHero title="Liên Hệ" />
      <ContactContent />
      <Contact />
    </div>
  );
};

export default ContactPage;
