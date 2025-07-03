import React from "react";

const LocationIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
  </svg>
);
const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);
const EmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);
const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
  </svg>
);

const ContactContent: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12 uppercase tracking-wider">
          Thông tin liên hệ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}
          <div>
            <ul className="space-y-6 text-gray-600">
              <li className="flex items-start">
                <LocationIcon className="w-6 h-6 mr-4 mt-1 text-brand-red flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800">Phòng tuyển sinh:</h3>
                  <p>
                    Phòng 106, Giảng đường B3 – Số 1 Tôn Thất Tùng, Đống Đa, Hà
                    Nội
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="w-6 h-6 mr-4 mt-1 text-brand-red flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800">Hotline:</h3>
                  <p>0248 565 6989</p>
                </div>
              </li>
              <li className="flex items-start">
                <EmailIcon className="w-6 h-6 mr-4 mt-1 text-brand-red flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800">Email:</h3>
                  <p>viendactaoyduoc@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <ClockIcon className="w-6 h-6 mr-4 mt-1 text-brand-red flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800">Giờ làm việc:</h3>
                  <p>Thứ 2 – thứ 7: 8h00 – 20h30</p>
                  <p>Chủ nhật: Nghỉ</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Gửi thông tin cho chúng tôi
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Họ và tên
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Họ và tên"
                  className="w-full px-4 py-3 bg-gray-100 border-transparent rounded-md focus:ring-brand-red focus:border-brand-red focus:bg-white"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Số điện thoại"
                  className="w-full px-4 py-3 bg-gray-100 border-transparent rounded-md focus:ring-brand-red focus:border-brand-red focus:bg-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Nhập yêu cầu của bạn
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Nhập yêu cầu của bạn"
                  className="w-full px-4 py-3 bg-gray-100 border-transparent rounded-md focus:ring-brand-red focus:border-brand-red focus:bg-white"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-brand-red text-white font-bold py-3 px-6 rounded-md hover:bg-brand-red-dark transition-colors"
                >
                  Gửi đi
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 sm:mt-24">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.592511475138!2d105.8291993153835!3d21.0089849938096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac7df3c4e339%3A0x647184f4756b3b5!2zMSBUw7RuIFRo4bqldCBUw7luZywgS2ltIExpw6puLCDEkOG7kW5nIMSQYSwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1655823758301!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
