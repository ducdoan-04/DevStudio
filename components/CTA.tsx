import React from 'react';

const BirdSeparatorIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="50" height="25" viewBox="0 0 50 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M22.5 13C22.5 11.9 23.4 11 24.5 11C25.6 11 26.5 11.9 26.5 13C26.5 14.1 25.6 15 24.5 15C23.4 15 22.5 14.1 22.5 13Z" fill="#D14D59"/>
        <path d="M19 13C19 11.9 19.9 11 21 11H22C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11V12.5C18 13.35 17.35 14 16.5 14H15.5C14.7 14 14.05 13.35 14.05 12.5C14.05 11.65 14.7 11 15.5 11H17C17 9.35 15.65 8 14 8C12.35 8 11 9.35 11 11V12.5C11 14.45 12.55 16 14.5 16H16.5C17.9 16 19.1 14.9 19.1 13.5L19 13Z" fill="#D14D59"/>
        <path d="M31 13C31 11.9 30.1 11 29 11H28C28 9.9 28.9 9 30 9C31.1 9 32 9.9 32 11V12.5C32 13.35 32.65 14 33.5 14H34.5C35.3 14 35.95 13.35 35.95 12.5C35.95 11.65 35.3 11 34.5 11H33C33 9.35 34.35 8 36 8C37.65 8 39 9.35 39 11V12.5C39 14.45 37.45 16 35.5 16H33.5C32.1 16 30.9 14.9 30.9 13.5L31 13Z" fill="#D14D59"/>
    </svg>
);


const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="font-script text-5xl brand-red">Liên hệ</h2>
            <BirdSeparatorIcon className="mx-auto mt-2" />
            <p className="mt-4 max-w-3xl mx-auto text-gray-500">
                Hãy liên hệ ngay với chúng tôi để nhận được những thông tin tư vấn về chi phí dịch vụ, cùng nhiều ưu đãi hấp dẫn dành cho bạn!
            </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 bg-brand-red text-white">
                    <h3 className="font-script text-4xl text-white">Wedding Planer</h3>
                    <ul className="mt-8 space-y-4 text-white/90">
                        <li className="flex items-start">
                            <span className="mt-1 w-5 h-5 mr-3shrink-0">&#9906;</span>
                            <span>25A Trần Nguyên Hãn – Nha Trang</span>
                        </li>
                        <li className="flex items-start">
                             <span className="mt-1 w-5 h-5 mr-3 shrink-0">&#9742;</span>
                            <span>Hotline: 091 353 3457 – 09 1425 2542</span>
                        </li>
                         <li className="flex items-start">
                             <span className="mt-1 w-5 h-5 mr-3 shrink-0">&#9993;</span>
                            <span>Email: zinzinfood@gmail.com</span>
                        </li>
                         <li className="flex items-start">
                             <span className="mt-1 w-5 h-5 mr-3 shrink-0">&#128279;</span>
                            <span>Facebook: fb.com/zinzinzinfood</span>
                        </li>
                    </ul>
                </div>
                <div className="p-8 md:p-12 bg-gray-50">
                    <h3 className="text-2xl font-bold text-gray-800">Gửi thông tin cho chúng tôi</h3>
                    <form className="mt-6 space-y-4">
                        <div>
                            <label htmlFor="name" className="sr-only">Họ và tên</label>
                            <input type="text" id="name" placeholder="Họ và tên" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-red focus:border-brand-red" />
                        </div>
                         <div>
                            <label htmlFor="phone" className="sr-only">Số điện thoại</label>
                            <input type="tel" id="phone" placeholder="Số điện thoại" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-red focus:border-brand-red" />
                        </div>
                         <div>
                            <label htmlFor="message" className="sr-only">Nhập yêu cầu của bạn</label>
                            <textarea id="message" rows={4} placeholder="Nhập yêu cầu của bạn" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-red focus:border-brand-red"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-brand-red text-white font-bold py-3 px-6 rounded-md hover:bg-brand-red-dark transition-colors">
                                Gửi đi
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
