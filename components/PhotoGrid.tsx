import React from "react";
import type { AlbumImage } from "../types";

const galleryData: AlbumImage[] = [
  {
    id: 1,
    title: "Giang & Thúy",
    imageUrl:
      "https://studiocenter.vnwordpress.net/wp-content/uploads/2020/05/BIAAAA-570x684.jpg",
  },
  {
    id: 2,
    title: "Hoàng & Hạnh",
    imageUrl:
      "https://studiocenter.vnwordpress.net/wp-content/uploads/2020/05/BIAAAA-570x684.jpg",
  },
  {
    id: 3,
    title: "Luân & Trúc",
    imageUrl:
      "https://studiocenter.vnwordpress.net/wp-content/uploads/2020/05/BIAAAA-570x684.jpg",
  },
  {
    id: 4,
    title: "Nam & Liên",
    imageUrl:
      "https://studiocenter.vnwordpress.net/wp-content/uploads/2020/05/BIAAAA-570x684.jpg",
  },
  {
    id: 5,
    title: "Phong & Hoàng",
    imageUrl:
      "https://studiocenter.vnwordpress.net/wp-content/uploads/2020/05/BIAAAA-570x684.jpg",
  },
  {
    id: 6,
    title: "Sơn & Yến",
    imageUrl:
      "https://studiocenter.vnwordpress.net/wp-content/uploads/2020/05/BIAAAA-570x684.jpg",
  },
  {
    id: 7,
    title: "Tâm & Anh",
    imageUrl:
      "https://studiocenter.vnwordpress.net/wp-content/uploads/2020/05/BIAAAA-570x684.jpg",
  },
  {
    id: 8,
    title: "Tess & Andy",
    imageUrl:
      "https://studiocenter.vnwordpress.net/wp-content/uploads/2020/05/BIAAAA-570x684.jpg",
  },
  {
    id: 9,
    title: "Thuận & Thủy",
    imageUrl:
      "https://studiocenter.vnwordpress.net/wp-content/uploads/2020/05/BIAAAA-570x684.jpg",
  },
];

const PhotoCard: React.FC<{ item: AlbumImage }> = ({ item }) => (
  <div className="text-center group">
    <div className="bg-white p-1 border border-gray-200/80 rounded-sm shadow-sm group-hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-auto object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <h3 className="mt-4 text-gray-700 font-semibold font-serif italic text-lg">
      {item.title}
    </h3>
  </div>
);

const PhotoGrid: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {galleryData.map((item) => (
            <PhotoCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGrid;
