const stats = [
  { title: "قضية رابحة", value: "120+" },
  { title: "سنوات خبرة", value: "10+" },
  { title: "عملاء سعداء", value: "500+" },
];

export default function Stats() {
  return (
    <section className="py-12 md:py-16 bg-[#2C2C2C] border-t border-gray-700/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-[#c2a27c] mb-2">
                {s.value}
              </h3>
              <p className="text-gray-400 text-lg">{s.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
