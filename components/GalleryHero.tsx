import React from "react";

const GalleryHero: React.FC = () => {
  return (
    <section className="relative h-64 flex items-center justify-center text-center text-white bg-gray-500">
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <img
        src="https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Wedding details"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 px-4">
        <h1
          className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-white"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
        >
          DEV Studio
        </h1>
      </div>
    </section>
  );
};

export default GalleryHero;
