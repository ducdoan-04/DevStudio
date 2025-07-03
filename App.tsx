import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import InvitationsPage from "./pages/InvitationsPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import TopBar from "./components/TopBar";

const FloralLeft = () => (
  <img
    src="https://i.imgur.com/gKIIv79.png"
    alt="Floral decoration"
    className="floral-left"
  />
);

const FloralRight = () => (
  <img
    src="https://i.imgur.com/gKIIv79.png"
    alt="Floral decoration"
    className="floral-right"
  />
);

const App: React.FC = () => {
  const [page, setPage] = useState("home");

  return (
    <div className="bg-white text-gray-600 font-sans relative overflow-x-hidden">
      {page === "home" && (
        <>
          <FloralLeft />
          <FloralRight />
        </>
      )}
      <TopBar
        show={
          page === "about" ||
          page === "gallery" ||
          page === "invitations" ||
          page === "pricing" ||
          page === "contact"
        }
      />
      <Header setPage={setPage} currentPage={page} />
      <main>
        {page === "home" && <HomePage />}
        {page === "about" && <AboutPage />}
        {page === "gallery" && <GalleryPage />}
        {page === "invitations" && <InvitationsPage />}
        {page === "pricing" && <PricingPage />}
        {page === "contact" && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
