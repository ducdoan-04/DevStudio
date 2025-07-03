import React, { useState, useEffect } from "react";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.81C10.44 7.31 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
  </svg>
);
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
  </svg>
);
const YouTubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.08C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,12.84 21.94,13.5 21.88,14.08C21.8,14.93 21.71,15.53 21.56,16C21.31,16.88 20.73,17.47 19.88,17.7C19.29,17.85 18.23,18 16.69,18.1C15.15,18.2 13.8,18.25 12.6,18.25L12,18.25C10.2,18.25 8.85,18.2 7.31,18.1C5.77,18 4.71,17.85 4.13,17.7C3.27,17.47 2.69,16.88 2.44,16C2.31,15.53 2.22,14.93 2.16,14.08C2.09,13.29 2.06,12.54 2.06,11.84L2,11.16C2,10.36 2.06,9.68 2.12,9.08C2.2,8.23 2.29,7.63 2.44,7.17C2.69,6.29 3.27,5.71 4.13,5.46C4.71,5.31 5.77,5.2 7.31,5.15C8.85,5.08 10.2,5.04 11.4,5.04L12,5.04C13.8,5.04 15.15,5.08 16.69,5.15C18.23,5.2 19.29,5.31 19.88,5.46C20.73,5.71 21.31,6.29 21.56,7.17Z" />
  </svg>
);

interface NavLink {
  name: string;
  type: "page" | "anchor";
  target: string;
}

const Header: React.FC<{
  setPage: (page: string) => void;
  currentPage: string;
}> = ({ setPage, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const onGalleryPage = currentPage === "gallery";

  useEffect(() => {
    const handleScroll = () => {
      // On gallery page, the trigger point is lower to account for the top bar
      const scrollThreshold = onGalleryPage ? 48 : 20;
      setIsScrolled(window.scrollY > scrollThreshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onGalleryPage]);

  const handleNavClick = (e: React.MouseEvent, link: NavLink) => {
    e.preventDefault();
    if (link.type === "page") {
      if (currentPage !== link.target) {
        setPage(link.target);
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    } else if (link.type === "anchor") {
      if (currentPage !== "home") {
        setPage("home");
        setTimeout(() => {
          document
            .querySelector(link.target)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document
          .querySelector(link.target)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const leftLinks: NavLink[] = [
    { name: "TRANG CHỦ", type: "page", target: "home" },
    { name: "GIỚI THIỆU", type: "page", target: "about" },
    { name: "ẢNH CƯỚI", type: "page", target: "gallery" },
  ];
  const rightLinks: NavLink[] = [
    { name: "THIỆP CƯỚI", type: "anchor", target: "#invitations" },
    { name: "BẢNG GIÁ", type: "anchor", target: "#contact" },
    { name: "LIÊN HỆ", type: "anchor", target: "#contact" },
  ];

  const NavItem: React.FC<{ link: NavLink }> = ({ link }) => {
    const isActive =
      (link.type === "page" && currentPage === link.target) ||
      (link.name === "TRANG CHỦ" && currentPage === "home");
    return (
      <a
        href={link.type === "anchor" ? link.target : "#"}
        onClick={(e) => handleNavClick(e, link)}
        className={`text-gray-500 hover:brand-red text-sm font-bold tracking-wider transition-colors cursor-pointer ${
          isActive ? "brand-red" : ""
        }`}
      >
        {link.name}
      </a>
    );
  };

  return (
    <header
      className={`fixed left-0 w-full z-40 transition-all duration-300 ${
        onGalleryPage ? "top-12" : "top-0"
      } ${
        isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-white/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 relative">
          <nav className="hidden md:flex items-center space-x-6">
            {leftLinks.map((link) => (
              <NavItem key={link.name} link={link} />
            ))}
          </nav>

          <a
            href="#"
            onClick={(e) =>
              handleNavClick(e, {
                name: "TRANG CHỦ",
                type: "page",
                target: "home",
              })
            }
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer"
          >
            <div className="font-script brand-red text-4xl">Wedding</div>
            <div className="text-sm font-bold tracking-[0.4em] text-gray-700 -mt-2">
              PLANER
            </div>
          </a>

          <div className="flex items-center">
            <nav className="hidden md:flex items-center space-x-6">
              {rightLinks.map((link) => (
                <NavItem key={link.name} link={link} />
              ))}
            </nav>
            <div className="flex items-center space-x-3 ml-6">
              <a href="#" className="text-gray-500 hover:brand-red">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:brand-red">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:brand-red">
                <YouTubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button could be added here */}
          <div className="md:hidden flex-1"></div>
          <div className="md:hidden flex-1 text-right">
            <button className="text-gray-700">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
