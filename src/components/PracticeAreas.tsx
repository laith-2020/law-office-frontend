import {
  FaShoppingCart,
  FaBaby,
  FaHome,
  FaUserShield,
  FaBalanceScale,
  FaLandmark,
} from "react-icons/fa";
import justiceBg from "../assets/justice.jpg";

const practiceAreas = [
  {
    icon: FaShoppingCart,
    title: "النفقة بأنواعها",
    desc: "نقدم خدمات قانونية متخصصة في قضايا النفقة الشرعية والزوجية والأولاد، مع متابعة دقيقة لحصولك على حقوقك.",
  },
  {
    icon: FaBaby,
    title: "الحضانة",
    desc: "استشارات وتمثيل قانوني في قضايا الحضانة وحقوق الأطفال، مع الحرص على مصلحتهم الفضلى.",
  },
  {
    icon: FaHome,
    title: "قضايا الطلاق بأنواعه",
    desc: "نختص في جميع أنواع الطلاق الشرعي مع إجراءات قانونية سليمة ومراعاة لكل التفاصيل.",
  },
  {
    icon: FaUserShield,
    title: "تقدير المؤخر",
    desc: "مساعدة في تقدير وحساب المؤخر الشرعي والمطالبة به وفقاً لأحكام الشريعة والقانون.",
  },
  {
    icon: FaBalanceScale,
    title: "التفريق للشقاق والنزاع",
    desc: "تمثيلكم في دعاوى التفريق للشقاق والنزاع مع إثبات الأسباب والمطالبة بالحقوق.",
  },
  {
    icon: FaLandmark,
    title: "إثبات الزواج أو الطلاق",
    desc: "إجراءات تسجيل وإثبات الزواج والطلاق في المحاكم ووزارة العدل والجهات المختصة.",
  },
];

export default function PracticeAreas() {
  return (
    <section className="relative py-16 md:py-24 text-white overflow-hidden">
      {/* Background with architectural image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${justiceBg})` }}
      />
      <div className="absolute inset-0 bg-[#2C2C2C]/90" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            مجالات الممارسة القانونية
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            نقدم خدمات قانونية متخصصة في القضايا الشرعية والأسرية، مع متابعة
            دقيقة، خبرة موثوقة، وتفاصيل قانونية تحمي حقوقك وتحقق العدالة لك
            ولعائلتك.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {practiceAreas.map((item, i) => (
            <div
              key={i}
              className="text-center p-6 md:p-8 rounded-lg hover:bg-white/5 transition"
            >
              <item.icon className="w-12 h-12 md:w-14 md:h-14 text-[#c2a27c] mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
