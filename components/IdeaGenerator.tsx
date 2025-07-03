import React from "react";
import type { BlogPost } from "../types";

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

const blogData: BlogPost[] = [
  {
    id: 1,
    title: "Cô dâu nổi bật với 3 tone màu trang điểm tự nhiên",
    excerpt:
      "Trang điểm cô dâu tone nude nhẹ nhàng sẽ mang đến cho cô dâu vẻ đẹp dịu dàng, trong veo với làn da căng bóng mịn màng tự nhiên như “mặt mộc”. Style makeup này...",
    imageUrl:
      "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=600",
    isLarge: true,
    date: "03",
    month: "Thg",
  },
  {
    id: 2,
    title: "Nên chụp ảnh cưới ngoại trời hay chụp trong studio ?",
    excerpt: "",
    imageUrl:
      "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=400",
    isLarge: false,
    date: "03",
    month: "Thg",
  },
  {
    id: 3,
    title: "Giờ đón dâu và những điều cần biết để hôn nhân hạnh phúc",
    excerpt: "",
    imageUrl:
      "https://images.pexels.com/photos/1024989/pexels-photo-1024989.jpeg?auto=compress&cs=tinysrgb&w=400",
    isLarge: false,
    date: "03",
    month: "Thg",
  },
  {
    id: 4,
    title: "Nên gửi thiệp mời cưới trước bao lâu là thích hợp ?",
    excerpt: "",
    imageUrl:
      "https://images.pexels.com/photos/3206093/pexels-photo-3206093.jpeg?auto=compress&cs=tinysrgb&w=400",
    isLarge: false,
    date: "03",
    month: "Thg",
  },
  {
    id: 5,
    title: "180+ địa điểm chụp ảnh cưới đẹp nhất ở 3 miền Bắc Trung Nam",
    excerpt: "",
    imageUrl:
      "https://images.pexels.com/photos/3206093/pexels-photo-3206093.jpeg?auto=compress&cs=tinysrgb&w=400",
    isLarge: false,
    date: "14",
    month: "Thg",
  },
];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div
    className={`group relative overflow-hidden rounded-lg shadow-md ${
      post.isLarge ? "lg:col-span-2 lg:row-span-2" : ""
    }`}
  >
    <img
      src={post.imageUrl}
      alt={post.title}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    <div className="absolute top-4 left-4 bg-white/90 text-center rounded-md w-14 h-14 flex flex-col justify-center items-center">
      <span className="block font-bold text-2xl brand-red">{post.date}</span>
      <span className="block text-xs uppercase text-gray-500">
        {post.month}
      </span>
    </div>
    <div className="absolute bottom-0 p-6 text-white">
      <h3 className={`font-semibold ${post.isLarge ? "text-2xl" : "text-lg"}`}>
        {post.title}
      </h3>
      {post.isLarge && (
        <p className="mt-2 text-white/80 text-sm hidden md:block">
          {post.excerpt}
        </p>
      )}
    </div>
    <a href="#" className="absolute inset-0"></a>
  </div>
);

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-script text-5xl brand-red">Cẩm nang cưới</h2>
          <BirdSeparatorIcon className="mx-auto mt-2" />
          <p className="mt-4 max-w-2xl mx-auto text-gray-500">
            Hãy cùng Wedding Planer chắp cánh cho tình yêu của 2 bạn ngay hôm
            nay
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {blogData.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
