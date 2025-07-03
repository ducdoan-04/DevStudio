import React, { useState, useEffect } from "react";

const ScrollToTopIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
);

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
          <div className="text-center text-sm text-gray-500">
            <p>
              Thiết kế bởi{" "}
              <a href="#" className="font-semibold brand-red hover:underline">
                Dev VN
              </a>
            </p>
          </div>
        </div>
      </footer>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 h-12 w-12 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg hover:bg-brand-red-dark transition-all"
          aria-label="Go to top"
        >
          <ScrollToTopIcon />
        </button>
      )}
    </>
  );
};

export default Footer;
