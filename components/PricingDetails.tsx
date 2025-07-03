import React from "react";
import type { PricingSection, PricingPackage } from "../types";

const pricingData: PricingSection[] = [
  {
    id: "phim-truong",
    mainTitle: "A. GÓI CHỤP HÌNH CƯỚI PHIM TRƯỜNG",
    studioInfo: {
      logoUrl: "./uploads/logo/hdmedia.png",
      details: [
        "Địa chỉ: 150 Hồ Văn Huê, Phường 9, Quận Phú Nhuận, HCM",
        "Hotline: 097 8888 750 - Zalo: 097 8888 750",
        "Facebook: facebook.com/devstudiovn",
        "Website: devstudio.vn",
      ],
    },
    packages: [
      {
        title: "TRỌN GÓI ALBUM PHIM TRƯỜNG ALIBABA",
        price: "3.900.000 VNĐ",
        services: [
          "CÔ DÂU: 2 SOIRE + HY PHỤC/ÁO DÀI/ĐỒ TỰ DO",
          "CHÚ RỂ: 2 VEST + HY PHỤC/ÁO DÀI/ĐỒ TỰ DO",
          "Photo + Makeup (trang điểm và làm tóc theo từng trang phục)",
          "Đã bao gồm phí vào cổng phim trường",
          "01 Album size (30x30) 20 trang hoặc size (25x25) 30 trang chất liệu Photobook công nghệ Hàn Quốc",
        ],
        products: [
          "01 Hình cổng lớn ép gỗ cao cấp size (60x90)",
          "10 Ảnh trang trí (13x18)",
          "Slide trình chiếu nhà hàng chất lượng cao",
          "File ảnh đã chỉnh sửa và toàn bộ file gốc",
        ],
      },
      {
        title: "TRỌN GÓI ALBUM PHIM TRƯỜNG L’AMOUR",
        price: "4.900.000 VNĐ",
        services: [
          "CÔ DÂU: 2 SOIRE + HY PHỤC/ÁO DÀI/ĐỒ TỰ DO",
          "CHÚ RỂ: 2 VEST + HY PHỤC/ÁO DÀI/ĐỒ TỰ DO",
          "Photo + Makeup (trang điểm và làm tóc theo từng trang phục)",
          "Đã bao gồm phí xe ô tô di chuyển, phí vào phim trường",
          "01 Album size (30x30) 20 trang hoặc size (25x25) 30 trang chất liệu Photobook công nghệ Hàn Quốc (Bìa MICA)",
        ],
        products: [
          "01 Hình cổng lớn Pha Lê Tráng Gương cao cấp size (60x90)",
          "10 Ảnh trang trí (13x18)",
          "Slide trình chiếu nhà hàng chất lượng cao",
          "File ảnh đã chỉnh sửa và toàn bộ file gốc",
        ],
      },
      {
        title: "TRỌN GÓI ALBUM PHIM TRƯỜNG PARIS",
        price: "5.900.000 VNĐ",
        services: [
          "CÔ DÂU: 3 SOIRE + HY PHỤC/ÁO DÀI/ĐỒ TỰ DO",
          "CHÚ RỂ: 2 VEST + HY PHỤC/ÁO DÀI/ĐỒ TỰ DO",
          "Photo + Makeup (trang điểm và làm tóc theo từng trang phục)",
          "Đã bao gồm phí xe ô tô di chuyển, phí vào phim trường",
          "01 Album size (30x30) 20 trang hoặc size (25x25) 30 trang chất liệu Photobook công nghệ Hàn Quốc (Bìa MICA)",
        ],
        products: [
          "01 Hình cổng lớn Pha Lê Tráng Gương cao cấp size (60x90)",
          "10 Ảnh trang trí (13x18)",
          "Slide trình chiếu nhà hàng chất lượng cao",
          "File ảnh đã chỉnh sửa và toàn bộ file gốc",
        ],
      },
    ],
    finalNote: "Cam Kết Không Phát Sinh Thêm Bất Kì Chi Phí Nào Khác !",
  },
  {
    id: "studio-han-quoc",
    mainTitle: "1. GÓI CHỤP STUDIO HÀN QUỐC CỦA DEV STUDIO : 3.500.000đ",
    studioInfo: {
      logoUrl: "./uploads/logo/hdmedia.png",
      details: [
        "Địa chỉ: 150 Hồ Văn Huê, Phường 9, Quận Phú Nhuận, HCM",
        "Hotline: 097 8888 750 - Zalo: 097 8888 750",
        "Facebook: facebook.com/ahihistudiovn",
        "Website: ahihistudio.vn",
      ],
    },
    packagesWithImages: [
      {
        title: "TRỌN GÓI ALBUM STUDIO HÀN QUỐC",
        price: "3.500.000 VNĐ",
        services: [
          "CÔ DÂU: 2 SOIRE + HY PHỤC/ ÁO DÀI/ ĐỒ TỰ DO",
          "CHÚ RỂ: 2 VEST + HY PHỤC/ ÁO DÀI/ ĐỒ TỰ DO",
          "Photo + Makeup (trang điểm và làm tóc theo từng trang phục)",
        ],
        products: [
          "01 Album size (30x30) 20 trang hoặc size (25x25) 30 trang chất liệu Photobook công nghệ Hàn Quốc",
          "01 Hình cổng lớn ép gỗ size (60x90)",
          "10 Ảnh trang trí (13x18)",
          "Slide trình chiếu nhà hàng chất lượng cao",
          "File ảnh đã chỉnh sửa và toàn bộ file gốc",
        ],
        image:
          "https://ahihistudio.vn/wp-content/uploads/2019/08/4N2B0481-3-1-1024x683.jpg",
        description:
          "Chụp ảnh cưới theo phong cách Hàn Quốc đang là xu hướng được nhiều cặp đôi lựa chọn hiện nay. Những style chụp lãng mạng cùng những concept độc đáo, lãng mạn sẽ giúp các cặp đôi có được những khoảnh khắc ngọt ngào trong ngày quan trọng này.",
      },
    ],
    finalNote: "Cam kết không phát sinh thêm bất kì chi phí nào khác!",
  },
];

const StudioInfo: React.FC<{ info: PricingSection["studioInfo"] }> = ({
  info,
}) => {
  if (!info) return null;
  return (
    <div className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6 my-8 p-4 bg-gray-50 rounded-lg">
      <img
        src={info.logoUrl}
        alt="Studio Logo"
        className="w-24 h-24 object-contain flex-shrink-0"
      />
      <div>
        <h4 className="font-bold text-lg text-gray-800">DEV STUDIO</h4>
        {info.details.map((line, index) => (
          <p key={index} className="text-sm text-gray-600">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

const PackageCard: React.FC<{ pkg: PricingPackage }> = ({ pkg }) => (
  <div className="mb-10">
    <h3 className="text-xl font-bold text-amber-600 text-center uppercase">
      {pkg.title}
    </h3>
    <p className="text-2xl font-bold text-amber-600 text-center mb-6">
      {pkg.price}
    </p>
    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
      <div>
        <h4 className="font-bold mb-2 text-gray-700">Dịch vụ bao gồm:</h4>
        <ul className="space-y-1 text-gray-600">
          {pkg.services.map((item, i) => (
            <li key={i}>- {item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-2 text-gray-700">Sản phẩm nhận được:</h4>
        <ul className="space-y-1 text-gray-600">
          {pkg.products.map((item, i) => (
            <li key={i}>- {item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const PricingDetails: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {pricingData.map((section) => (
          <section key={section.id} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-brand-red pb-2 mb-4">
              {section.mainTitle}
            </h2>
            <StudioInfo info={section.studioInfo} />

            {section.packages?.map((pkg, i) => (
              <PackageCard key={i} pkg={pkg} />
            ))}

            {section.packagesWithImages?.map((pkg, i) => (
              <div key={i} className="mb-10">
                <PackageCard pkg={pkg} />
                {pkg.image && (
                  <div className="mt-8">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="rounded-lg shadow-md mb-4"
                    />
                    <p className="text-center text-gray-600 italic">
                      {pkg.description}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {section.finalNote && (
              <p className="text-center font-bold brand-red text-lg mt-8">
                {section.finalNote}
              </p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default PricingDetails;
