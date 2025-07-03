import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

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
      <FloralLeft />
      <FloralRight />
      <Header setPage={setPage} currentPage={page} />
      <main>
        {page === "home" && <HomePage />}
        {page === "about" && <AboutPage />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
