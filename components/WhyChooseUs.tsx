import React from 'react';

const BirdSeparatorIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="50" height="25" viewBox="0 0 50 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M22.5 13C22.5 11.9 23.4 11 24.5 11C25.6 11 26.5 11.9 26.5 13C26.5 14.1 25.6 15 24.5 15C23.4 15 22.5 14.1 22.5 13Z" fill="#D14D59"/>
        <path d="M19 13C19 11.9 19.9 11 21 11H22C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11V12.5C18 13.35 17.35 14 16.5 14H15.5C14.7 14 14.05 13.35 14.05 12.5C14.05 11.65 14.7 11 15.5 11H17C17 9.35 15.65 8 14 8C12.35 8 11 9.35 11 11V12.5C11 14.45 12.55 16 14.5 16H16.5C17.9 16 19.1 14.9 19.1 13.5L19 13Z" fill="#D14D59"/>
        <path d="M31 13C31 11.9 30.1 11 29 11H28C28 9.9 28.9 9 30 9C31.1 9 32 9.9 32 11V12.5C32 13.35 32.65 14 33.5 14H34.5C35.3 14 35.95 13.35 35.95 12.5C35.95 11.65 35.3 11 34.5 11H33C33 9.35 34.35 8 36 8C37.65 8 39 9.35 39 11V12.5C39 14.45 37.45 16 35.5 16H33.5C32.1 16 30.9 14.9 30.9 13.5L31 13Z" fill="#D14D59"/>
    </svg>
);
const LightbulbIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const PriceTagIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1h4a1 1 0 011 1v10a1 1 0 01-1 1h-4v-1M6 12a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2z" /></svg>;
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>;
const ShieldIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="text-center p-8 bg-brand-red rounded-lg text-white">
    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white/20 mx-auto text-white">
      {icon}
    </div>
    <h3 className="mt-6 text-xl font-bold text-white uppercase">{title}</h3>
    <p className="mt-2 text-base text-white/80">{description}</p>
  </div>
);

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <LightbulbIcon />,
      title: 'THIẾT KẾ SÁNG TẠO',
      description: 'Luôn luôn cập nhật các xu hướng bằng những thiết kế mới lạ, được đặt hàng riêng và các gói dịch vụ cưới hỏi có yêu cầu riêng'
    },
    {
      icon: <PriceTagIcon />,
      title: 'GIÁ CẢ HỢP LÝ',
      description: 'Có nhiều gói trang trí phong phú với các mức giá, cạnh tranh trên thị trường phù hợp với ngân sách của bạn'
    },
    {
      icon: <HeartIcon />,
      title: 'LÀM VIỆC TẬN TÂM',
      description: 'Chúng tôi luôn lắng nghe và thấu hiểu để đáp ứng tối đa những yêu cầu, tiểu tiết và thay đổi đột xuất trong quá trình thực hiện'
    },
     {
      icon: <ShieldIcon />,
      title: 'UY TÍN LÀ VÀNG',
      description: 'Wedding Planer khẳng định vị trí hàng đầu với chúng tôi sẽ được phục vụ đúng với cam kết và còn nhiều hơn thế nữa'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#f9f5f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight brand-red">
            Tại sao nên chọn Wedding Planer
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-500">
            Rất nhiều khách hàng đến với chúng tôi trong sự băn khoăn và chúng tôi đã trao lại nụ cười viên mãn
          </p>
          <BirdSeparatorIcon className="mx-auto mt-4" />
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
