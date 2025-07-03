import React from "react";
import type { Invitation } from "../types";

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

const invitationData: Invitation[] = [
  {
    id: 1,
    title: "Thiệp pastel",
    imageUrl:
      "https://studiocenter.vnwordpress.net/wp-content/uploads/2020/09/9-1-570x684.jpg",
  },
  {
    id: 2,
    title: "Thiệp cẩm hồng",
    imageUrl:
      "https://studiocenter.vnwordpress.net/wp-content/uploads/2020/09/9-1-570x684.jpg",
  },
  {
    id: 3,
    title: "Thiệp hồng tím",
    imageUrl:
      "https://studiocenter.vnwordpress.net/wp-content/uploads/2020/09/9-1-570x684.jpg",
  },
  {
    id: 4,
    title: "Thiệp hoa lá bày",
    imageUrl:
      "https://studiocenter.vnwordpress.net/wp-content/uploads/2020/09/9-1-570x684.jpg",
  },
  {
    id: 5,
    title: "Thiệp hoa hồng xinh",
    imageUrl:
      "https://studiocenter.vnwordpress.net/wp-content/uploads/2020/09/9-1-570x684.jpg",
  },
  {
    id: 6,
    title: "Thiệp cổ trướng",
    imageUrl:
      "https://studiocenter.vnwordpress.net/wp-content/uploads/2020/09/9-1-570x684.jpg",
  },
  {
    id: 7,
    title: "Thiệp hoa mùa xuân",
    imageUrl:
      "https://studiocenter.vnwordpress.net/wp-content/uploads/2020/09/9-1-570x684.jpg",
  },
  {
    id: 8,
    title: "Thiệp hoa",
    imageUrl:
      "https://studiocenter.vnwordpress.net/wp-content/uploads/2020/09/9-1-570x684.jpg",
  },
];

const InvitationCard: React.FC<{ item: Invitation }> = ({ item }) => (
  <div className="text-center group">
    <div className="bg-white p-2 border border-gray-200 rounded-lg shadow-sm group-hover:shadow-lg transition-shadow duration-300">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-auto object-contain rounded-md"
      />
    </div>
    <h3 className="mt-4 text-gray-700 font-semibold">{item.title}</h3>
  </div>
);

const Invitations: React.FC = () => {
  return (
    <section id="invitations" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-script text-5xl brand-red">Thiệp cưới</h2>
          <BirdSeparatorIcon className="mx-auto mt-2" />
          <p className="mt-4 max-w-2xl mx-auto text-gray-500">
            Những mẫu thiệp cưới mới nhất được Wedding Planer cập nhật & thiết
            kế theo xu hướng hiện đại độc đáo
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {invitationData.map((item) => (
            <InvitationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Invitations;
