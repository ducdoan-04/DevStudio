import React from 'react';

const BirdSeparatorIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="50" height="25" viewBox="0 0 50 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M22.5 13C22.5 11.9 23.4 11 24.5 11C25.6 11 26.5 11.9 26.5 13C26.5 14.1 25.6 15 24.5 15C23.4 15 22.5 14.1 22.5 13Z" fill="#D14D59"/>
        <path d="M19 13C19 11.9 19.9 11 21 11H22C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11V12.5C18 13.35 17.35 14 16.5 14H15.5C14.7 14 14.05 13.35 14.05 12.5C14.05 11.65 14.7 11 15.5 11H17C17 9.35 15.65 8 14 8C12.35 8 11 9.35 11 11V12.5C11 14.45 12.55 16 14.5 16H16.5C17.9 16 19.1 14.9 19.1 13.5L19 13Z" fill="#D14D59"/>
        <path d="M31 13C31 11.9 30.1 11 29 11H28C28 9.9 28.9 9 30 9C31.1 9 32 9.9 32 11V12.5C32 13.35 32.65 14 33.5 14H34.5C35.3 14 35.95 13.35 35.95 12.5C35.95 11.65 35.3 11 34.5 11H33C33 9.35 34.35 8 36 8C37.65 8 39 9.35 39 11V12.5C39 14.45 37.45 16 35.5 16H33.5C32.1 16 30.9 14.9 30.9 13.5L31 13Z" fill="#D14D59"/>
    </svg>
);


const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="font-script text-5xl brand-red">Wedding Planer</h2>
            <BirdSeparatorIcon className="mx-auto mt-2" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-gray-600 leading-relaxed">
              Chúng tôi là một thương hiệu uy tín – chất lượng. Tiền 10 năm kinh nghiệm trong nghề, với đội ngũ nhân viên năng động, nhiệt tình, tận tâm, được đào tạo chuyên nghiệp, luôn giữ phương châm “Hạnh phúc của bạn là hạnh phúc của chúng tôi”. Đây là tâm niệm ngay từ những ngày đầu thành lập và được thể hiện trong từng khâu, từng hoạt động của chúng tôi. Hãy trải nghiệm dịch vụ của chúng tôi và tận hưởng niềm vui trọn vẹn trong ngày hạnh phúc!
            </p>
            <div className="mt-8">
              <a href="#contact" className="inline-block border-2 border-brand-red brand-red font-bold text-sm uppercase tracking-wider px-8 py-3 hover:bg-brand-red hover:text-white transition-colors duration-300">
                Xem thêm
              </a>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.pexels.com/photos/3779792/pexels-photo-3779792.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Couple smiling" className="rounded-full shadow-lg mx-auto w-[400px] h-[400px] object-cover"/>
             <img src="https://i.imgur.com/83a0X9Y.png" alt="Floral Accent" className="absolute -bottom-8 -right-8 w-40 opacity-80" />
              <img src="https://i.imgur.com/83a0X9Y.png" alt="Floral Accent" className="absolute -top-8 -left-8 w-40 opacity-80 transform -scale-x-100 -scale-y-100" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
