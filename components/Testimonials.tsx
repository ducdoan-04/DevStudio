import React from 'react';
import type { Service } from '../types';

const BirdSeparatorIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="50" height="25" viewBox="0 0 50 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M22.5 13C22.5 11.9 23.4 11 24.5 11C25.6 11 26.5 11.9 26.5 13C26.5 14.1 25.6 15 24.5 15C23.4 15 22.5 14.1 22.5 13Z" fill="#D14D59"/>
        <path d="M19 13C19 11.9 19.9 11 21 11H22C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11V12.5C18 13.35 17.35 14 16.5 14H15.5C14.7 14 14.05 13.35 14.05 12.5C14.05 11.65 14.7 11 15.5 11H17C17 9.35 15.65 8 14 8C12.35 8 11 9.35 11 11V12.5C11 14.45 12.55 16 14.5 16H16.5C17.9 16 19.1 14.9 19.1 13.5L19 13Z" fill="#D14D59"/>
        <path d="M31 13C31 11.9 30.1 11 29 11H28C28 9.9 28.9 9 30 9C31.1 9 32 9.9 32 11V12.5C32 13.35 32.65 14 33.5 14H34.5C35.3 14 35.95 13.35 35.95 12.5C35.95 11.65 35.3 11 34.5 11H33C33 9.35 34.35 8 36 8C37.65 8 39 9.35 39 11V12.5C39 14.45 37.45 16 35.5 16H33.5C32.1 16 30.9 14.9 30.9 13.5L31 13Z" fill="#D14D59"/>
    </svg>
);

const serviceData: Service[] = [
  { id: 1, title: 'THUÊ XE CƯỚI', description: 'Một trong những khâu mà bạn không thể thiếu trong việc chuẩn bị cho ngày cưới trọng đại sắp tới của mình là thuê xe cưới', imageUrl: 'https://images.pexels.com/photos/1402407/pexels-photo-1402407.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 2, title: 'THUÊ THIẾT BỊ BÀN GHẾ', description: 'Quý khách có thể chọn theo các gói hàng loạt hạng mục riêng lẻ cho sự kiện của mình như gói trang trí backdrop và bàn Gallery', imageUrl: 'https://images.pexels.com/photos/226140/pexels-photo-226140.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 3, title: 'QUAY PHIM - CHỤP ẢNH', description: 'Nhiếp ảnh không chỉ là chụp một tấm ảnh, mà dừng ảnh động để vẻ nét tận dân dã, ảnh cưới lưu lại những khoảnh khắc đẹp', imageUrl: 'https://images.pexels.com/photos/3779791/pexels-photo-3779791.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 4, title: 'TRANG TRÍ CƯỚI HỎI', description: 'Dịch vụ trang trí đám cưới, tiệc cưới hỏi: trang trí phòng tân, bàn ghế, background, bánh cưới, lối đi, cổng hoa...', imageUrl: 'https://images.pexels.com/photos/1128783/pexels-photo-1128783.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 5, title: 'NHÂN SỰ – ÁO CƯỚI – ÁO DÀI', description: 'Thái độ phục vụ: thân thiện, chuyên nghiệp. Chụp ảnh với cô dâu chú rể. Thời gian luôn luôn đúng hẹn', imageUrl: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 6, title: 'TRANG ĐIỂM CÔ DÂU', description: 'Bên cạnh chiếc váy cưới lộng lẫy, vóc dáng yêu kiều, làn tóc bồng bềnh, thì make up là một trong những điểm nhấn', imageUrl: 'https://images.pexels.com/photos/295771/pexels-photo-295771.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const ServiceCard: React.FC<{ item: Service }> = ({ item }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
    <img className="w-full h-56 object-cover" src={item.imageUrl} alt={item.title} />
    <div className="p-6 text-center">
      <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
      <p className="mt-2 text-sm text-gray-500">{item.description}</p>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-script text-5xl brand-red">Dịch vụ chúng tôi cung cấp</h2>
           <BirdSeparatorIcon className="mx-auto mt-2" />
          <p className="mt-4 max-w-2xl mx-auto text-gray-500">
            Hiểu lần đầu là bỡ ngỡ, Wedding Planer sẽ sát cánh cùng bạn làm nên lần đầu thật trọn vẹn
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map(item => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
