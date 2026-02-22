const articles = [
  {
    title: "كيف تختار المحامي المناسب",
    date: "10 فبراير 2026",
  },
  {
    title: "فهم حقوقك القانونية",
    date: "25 يناير 2026",
  },
  {
    title: "دليل الاستشارة القانونية الأولية",
    date: "15 يناير 2026",
  },
];

export default function Articles() {
  return (
    <section
      id="articles"
      className="py-16 md:py-24 bg-[#1a1a1a] text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          أحدث المقالات
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <article
              key={i}
              className="bg-[#2C2C2C] p-6 rounded-lg border border-gray-700/50 hover:border-[#c2a27c]/50 transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#c2a27c]">
                {a.title}
              </h3>
              <p className="text-gray-500 text-sm">{a.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
