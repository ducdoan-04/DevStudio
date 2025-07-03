import React from "react";

const AboutIntro: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://studiocenter.vnwordpress.net/wp-content/uploads/2020/08/DSC3641-oo7ibaeyuzogs43nvx2pypw005ir2odvkin3a9g1lc.jpg"
              alt="Wedding venue interior"
              className="w-full h-auto object-cover shadow-lg rounded"
            />
          </div>
          <div className="text-gray-600">
            <h2 className="font-script text-5xl brand-red">Giới thiệu</h2>
            <h3 className="text-4xl font-bold text-gray-800 mt-1">
              Về chúng tôi
            </h3>
            <p className="mt-6 font-semibold italic">
              Meraki [may-rah-kee], in Greek means doing something with soul,
              creativity and love; to put something of yourself into your work.
            </p>
            <p className="mt-4 leading-relaxed">
              Since the first planning in 2016, every wedding crafted by Meraki
              is a unique experience that was delivered beautifully. We offer
              tailor-made full-service wedding planning that bring the most
              intimate moments out of every event, reflecting the personality
              and the essence of each client, whether elopements or large-scale
              weddings.
            </p>
            <p className="mt-4 leading-relaxed">
              Base in Ho Chi Minh City, we work mainly with client from US, UK,
              Australia, New Zealand, Vietnam Germany and world-wide guests to
              plan and arrange travelling itinerary when it comes to a wedding.
              We also travel to other Phu Quoc, Da Nang and other locations
              regularly to expand local knowledge well as to update our
              connection with a wide range of vendors. Our vision is to
              establish Meraki Wedding Planner team as the leading service for
              intimate weddings in Vietnam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
