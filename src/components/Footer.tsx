import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import justiceBg from "../assets/justice.jpg";

export default function Footer() {
  return (
    <footer className="relative text-gray-300 pt-20 pb-6 bg-[#2C2C2C]">
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${justiceBg})` }}
      />
      <div className="relative z-10 container mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 text-right">
          {/* About Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              الديري للمحاماه والاستشارات القانونية
            </h3>
            <p className="text-gray-400 leading-loose">
              مكتب قانوني متخصص في القضايا الشرعية والأسرية، نقدم استشارات
              ومتابعة قانونية باحترافية وسرية، بخبرة قضائية داخل المحاكم
              ووزارة العدل الأردنية.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 transition"
                aria-label="فيسبوك"
              >
                <FaFacebookF className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg md:text-xl font-semibold mb-4">
              نظرة عامة:
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-[#c2a27c] transition">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#c2a27c] transition">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#c2a27c] transition">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#articles" className="hover:text-[#c2a27c] transition">
                  مقالات
                </a>
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <div className="inline-block bg-gray-500/30 text-white px-4 py-2 rounded-lg text-sm font-medium mb-4">
              عنوان المكتب
            </div>
            <p className="text-gray-400">
الزرقاء - الازرق الجنوبي - الشارع العام
            </p>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
          حقوق النشر لعام {new Date().getFullYear()} محفوظة لموقع الديري للمحاماه والاستشارات القانونية
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/962795864644"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-green-500 shadow-lg hover:scale-110 hover:bg-green-600 transition"
        aria-label="واتساب"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>
    </footer>
  );
}
