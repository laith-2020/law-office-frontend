import { FaGavel, FaUsers, FaCoins } from "react-icons/fa";

const services = [
  {
    icon: FaGavel,
    title: "احصل على استشارتك القانونية",
    desc: "نقدم استشارات قانونية وشرعية دقيقة تساعدك على فهم موقفك القانوني واتخاذ القرار المناسب بثقة.",
  },
  {
    icon: FaUsers,
    title: "فريق مختص وذو خبرة",
    desc: "نحن نضع بين يديك خبرة طويلة في القضاء الشرعي والعمل في وزارة العدل، لتكون في أيد قانونية متمكنة.",
  },
  {
    icon: FaCoins,
    title: "أسعار مناسبة ومخفضة",
    desc: "نؤمن بأن العدالة يجب أن تكون في متناول الجميع، لذلك نقدم خدماتنا برسوم تنافسية ومتوازنة.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-[#f5f5f0] text-gray-800"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-right">
            الاستشارة القانونية والدعم المتكامل
          </h2>
          <p className="text-gray-600 text-right leading-relaxed">
            نقدم لك خبرة قانونية متخصصة في القضايا الشرعية والأسرية، مع متابعة
            دقيقة وتوجيه واضح في كل خطوة من خطواتك القانونية، لنضمن لك حقوقك
            وتفهمك الكامل لإجراءات الدعوى.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white p-6 sm:p-8 shadow-md rounded-lg text-right"
            >
              <s.icon className="text-2xl text-gray-700 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
