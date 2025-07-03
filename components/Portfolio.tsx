import React from "react";
import type { AlbumImage } from "../types";

const BirdSeparatorIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="50"
    height="25"
    viewBox="0 0 50 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.5 13C22.5 11.9 23.4 11 24.5 11C25.6 11 26.5 11.9 26.5 13C26.5 14.1 25.6 15 24.5 15C23.4 15 22.5 14.1 22.5 13Z"
      fill="#D14D59"
    />
    <path
      d="M19 13C19 11.9 19.9 11 21 11H22C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11V12.5C18 13.35 17.35 14 16.5 14H15.5C14.7 14 14.05 13.35 14.05 12.5C14.05 11.65 14.7 11 15.5 11H17C17 9.35 15.65 8 14 8C12.35 8 11 9.35 11 11V12.5C11 14.45 12.55 16 14.5 16H16.5C17.9 16 19.1 14.9 19.1 13.5L19 13Z"
      fill="#D14D59"
    />
    <path
      d="M31 13C31 11.9 30.1 11 29 11H28C28 9.9 28.9 9 30 9C31.1 9 32 9.9 32 11V12.5C32 13.35 32.65 14 33.5 14H34.5C35.3 14 35.95 13.35 35.95 12.5C35.95 11.65 35.3 11 34.5 11H33C33 9.35 34.35 8 36 8C37.65 8 39 9.35 39 11V12.5C39 14.45 37.45 16 35.5 16H33.5C32.1 16 30.9 14.9 30.9 13.5L31 13Z"
      fill="#D14D59"
    />
  </svg>
);

const albumData: AlbumImage[] = [
  {
    id: 1,
    title: "Love in the mountains",
    imageUrl:
      "https://images.pexels.com/photos/3206093/pexels-photo-3206093.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "A tender moment",
    imageUrl:
      "https://images.pexels.com/photos/1024989/pexels-photo-1024989.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Urban romance",
    imageUrl:
      "https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "Seaside vows",
    imageUrl:
      "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    title: "Golden hour bliss",
    imageUrl:
      "https://images.pexels.com/photos/1024989/pexels-photo-1024989.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    title: "First dance",
    imageUrl:
      "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    title: "Country charm",
    imageUrl:
      "https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    title: "Forever starts now",
    imageUrl:
      "https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const AlbumCard: React.FC<{ item: AlbumImage }> = ({ item }) => (
  <div className="group relative overflow-hidden bg-gray-100">
    <img
      src={item.imageUrl}
      alt={item.title}
      className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
);

const Album: React.FC = () => {
  return (
    <section id="album" className="py-16 sm:py-10 bg-white">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-script text-5xl brand-red">Album ảnh cưới</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500">
            Sự tinh tế thể hiện ở từng chi tiết được chăm chút cẩn thận
          </p>
          <BirdSeparatorIcon className="mx-auto mt-2" />
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {albumData.map((item) => (
            <AlbumCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Album;
