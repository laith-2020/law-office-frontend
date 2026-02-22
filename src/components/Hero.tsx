import heroBg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white pt-16 md:pt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#2C2C2C]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          لأن العدالة حقك الطبيعي
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          استشارات قانونية وشرعية من محام خبير في قضايا الطلاق والنفقة والحضانة،
          بخبرة تتجاوز 10 اعوام في القضاء الشرعي ووزارة العدل الأردنية
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-[#c2a27c] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition text-center"
          >
            احجز استشارتك الآن
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto border border-[#c2a27c] text-white px-8 py-3 rounded-lg hover:bg-[#c2a27c]/20 transition text-center"
          >
            اعرف المزيد
          </a>
        </div>
      </div>
    </section>
  );
}
