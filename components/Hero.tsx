import React from 'react';

const WavyLine = () => (
    <svg width="61" height="9" viewBox="0 0 61 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
        <path d="M1 4.5C1 4.5 5.875 0.5 10.75 4.5C15.625 8.5 20.5 4.5 25.375 4.5C30.25 4.5 35.125 8.5 40 4.5C44.875 0.5 49.75 4.5 54.625 4.5C59.5 4.5 60 4.5 60 4.5" stroke="#D14D59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white bg-gray-500" style={{ minHeight: '600px' }}>
      <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
      <img 
        src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        alt="Wedding couple" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="relative z-20 px-4 mt-24">
        <h2 className="font-script text-white text-6xl md:text-7xl" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.3)'}}>Happy</h2>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[0.2em] text-white" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
          Valentine's Day
        </h1>
        <div className="mt-6 inline-block">
            <div className="bg-brand-red text-white py-2 px-6">
                <p className="font-semibold tracking-wider">ƯU ĐÃI DÀNH CHO CÁC CẶP ĐÔI</p>
            </div>
        </div>
        <p className="mt-4 text-white text-lg tracking-widest font-light" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.5)'}}>
          10.02.2020 - 20.03.2020
        </p>
        <div className="mt-4">
            <WavyLine />
        </div>
      </div>
    </section>
  );
};

export default Hero;
