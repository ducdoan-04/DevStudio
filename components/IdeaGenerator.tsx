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
      "https://phindumpwedding.vn/wp-content/uploads/2024/08/z5698385531187_a552fbfb44b2f9d5d4a0c9f8d030ac6e.jpg?auto=compress&cs=tinysrgb&w=800",
    isLarge: true,
    date: "03",
    month: "Th9",
  },
  {
    id: 2,
    title: "Nên chụp ảnh cưới ngoại trời hay chụp trong studio ?",
    excerpt: "",
    imageUrl:
      "https://file.hstatic.net/200000054678/file/chup-anh-cuoi-studio__10__9c66d22698f74d2b91a3f98d87f863cd.jpg?auto=compress&cs=tinysrgb&w=400",
    isLarge: false,
    date: "03",
    month: "Th9",
  },
  {
    id: 3,
    title: "Giờ đón dâu và những điều cần biết để hôn nhân hạnh phúc",
    excerpt: "",
    imageUrl:
      "https://cdn.vjshop.vn/tin-tuc/tao-dang-chup-anh-cuoi/tao-dang-chup-anh-cuoi-kieu-tro-chuyen-1.jpg?auto=compress&cs=tinysrgb&w=400",
    isLarge: false,
    date: "03",
    month: "Th9",
  },
  {
    id: 4,
    title: "Nên gửi thiệp mời cưới trước bao lâu là thích hợp ?",
    excerpt: "",
    imageUrl:
      "https://i.pinimg.com/originals/41/46/70/4146703d5141d5a56299a2e4145491dd.jpg?auto=compress&cs=tinysrgb&w=400",
    isLarge: false,
    date: "03",
    month: "Th9",
  },
  {
    id: 5,
    title: "180+ địa điểm chụp ảnh cưới đẹp nhất ở 3 miền Bắc Trung Nam",
    excerpt: "",
    imageUrl:
      "https://cdn2.tuoitre.vn/thumb_w/480/471584752817336320/2024/2/28/queen-of-tears-2-17091163424201631739961.jpeg?auto=compress&cs=tinysrgb&w=400",
    isLarge: false,
    date: "14",
    month: "Th5",
  },
];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="group flex flex-col h-full">
    <div className="relative overflow-hidden mb-4">
      <a href="#" className="block">
        <img
          src={post.imageUrl}
          alt={post.title}
          className={`w-full object-cover rounded-sm transition-transform duration-300 group-hover:scale-105 ${
            post.isLarge ? "aspect-[4/3]" : "aspect-[3/2]"
          }`}
        />
      </a>
      <div className="absolute top-2.5 left-2.5 bg-white text-center rounded-sm w-12 h-12 flex flex-col justify-center items-center border-2 border-brand-red">
        <span className="block font-bold text-xl brand-red leading-tight">
          {post.date}
        </span>
        <span className="block text-xs uppercase text-gray-500 leading-tight">
          {post.month}
        </span>
      </div>
    </div>
    <div className="text-left flex-grow flex flex-col">
      <h3
        className={`font-semibold text-gray-800 hover:brand-red transition-colors ${
          post.isLarge ? "text-xl" : "text-base"
        }`}
      >
        <a href="#">{post.title}</a>
      </h3>
      {post.isLarge && (
        <p className="mt-2 text-gray-500 text-sm flex-grow">{post.excerpt}</p>
      )}
    </div>
  </div>
);

const Blog: React.FC = () => {
  const largePost = blogData.find((p) => p.isLarge);
  const smallPosts = blogData.filter((p) => !p.isLarge);

  return (
    <section id="blog" className="py-16 sm:py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-script text-5xl brand-red">Cẩm nang cưới</h2>
          <BirdSeparatorIcon className="mx-auto mt-2" />
          <p className="mt-4 max-w-2xl mx-auto text-gray-500">
            Hãy cùng Wedding Planer chắp cánh cho tình yêu của 2 bạn ngay hôm
            nay
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {largePost && <BlogCard post={largePost} />}
          <div className="grid grid-cols-2 gap-6">
            {smallPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
