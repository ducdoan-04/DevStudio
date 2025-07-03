import React from "react";
import GalleryHero from "../components/GalleryHero";
import Invitations from "../components/Pricing";
import Contact from "../components/CTA";

const InvitationsPage: React.FC = () => {
  return (
    <div className="pt-36">
      <GalleryHero title="Thiệp Cưới" />
      <Invitations />
      <Contact />
    </div>
  );
};

export default InvitationsPage;
