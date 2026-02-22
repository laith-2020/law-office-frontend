import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes, FaBalanceScale } from "react-icons/fa";

const navLinks = [
  { label: "الرئيسية", href: "/", hash: "#home" },
  { label: "خدماتنا", href: "/", hash: "#services" },
  { label: "من نحن", href: "/", hash: "#about" },
  { label: "مقالات", href: "/", hash: "#articles" },
  { label: "اتصل بنا", href: "/", hash: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-[#2C2C2C] text-white border-b border-gray-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: Phone & Search */}
          <div className="flex items-center gap-2 md:gap-3 order-1 md:order-1">
            <a
              href="tel:00962795864644"
              className="flex items-center gap-2 bg-gray-600/60 hover:bg-gray-600 rounded-full px-3 py-2 md:px-4 md:py-2 text-sm md:text-base transition"
            >
              <span dir="ltr">00962795864644</span>
            </a>
            <button
              aria-label="بحث"
              className="p-2 rounded-full hover:bg-gray-600/60 transition"
            >
              <FaSearch className="text-lg" />
            </button>
          </div>

          {/* Center: Logo */}
          <div className="flex items-center gap-2 md:gap-3 order-3 md:order-2 absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0">
            <FaBalanceScale className="w-8 h-8 md:w-10 md:h-10 text-[#c2a27c] shrink-0" />
            <div>
              <div className="text-[#c2a27c] font-bold text-base md:text-lg">
                الديري للمحاماه والاستشارات القانونية
              </div>
              <div className="text-[#c2a27c] text-[10px] md:text-xs font-medium tracking-wider">
                AL DAREE
              </div>
            </div>
          </div>

          {/* Right: Navigation Links */}
          <div className="order-2 md:order-3 flex items-center">
            <ul className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href + (link.hash || "")}
                    className={`block px-4 py-2 rounded-lg text-sm lg:text-base transition ${
                      location.pathname === "/" && link.hash === "#home"
                        ? "bg-[#c2a27c]/20 text-[#c2a27c] font-medium"
                        : "hover:bg-gray-600/60 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/login"
                  className="block px-4 py-2 rounded-lg text-sm lg:text-base hover:bg-gray-600/60 transition"
                >
                  تسجيل الدخول
                </Link>
              </li>
            </ul>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-600/60"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href + (link.hash || "")}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg hover:bg-gray-600/60"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-gray-600/60"
                >
                  تسجيل الدخول
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
