import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaWhatsapp } from "react-icons/fa";
import api from "../api/api";

const services = [
  { value: "", label: "اختر الخدمة" },
  { value: "divorce", label: "قضايا الطلاق بأنواعه" },
  { value: "custody", label: "الحضانة" },
  { value: "alimony", label: "النفقة" },
  { value: "proof", label: "إثبات الزواج أو الطلاق" },
  { value: "separation", label: "التفريق للشقاق والنزاع" },
  { value: "other", label: "غيرها" },
];

const OFFICE_ADDRESS = "الزرقاء - الازرق الجنوبي - الشارع العام";
// const CONTACT_EMAIL = "mr.layth_2011@hotmail.com";
const CONTACT_EMAIL = "maheraldairy32@gmail.com";
const CONTACT_PHONE = "0795864644";
const WORKING_HOURS = "السبت - الخميس 8AM - 8PM";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "0795864644",
    email: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [validationError, setValidationError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitStatus("idle");
    setValidationError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.service) {
      setValidationError(true);
      setSubmitStatus("idle");
      return;
    }
    setValidationError(false);

    setLoading(true);
    setSubmitStatus("idle");

    try {
      await api.post("/contact", {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
        message: formData.message,
      });
      setSubmitStatus("success");
      setFormData({ name: "", phone: CONTACT_PHONE, email: "", service: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-20 bg-[#2C2C2C] text-white"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden text-gray-800">
          <div className="grid lg:grid-cols-2 min-h-[500px]">
            {/* Left: Form */}
            <div className="p-6 sm:p-8 md:p-10">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    الاسم *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="ضع اسمك هنا"
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:border-[#c2a27c] focus:ring-1 focus:ring-[#c2a27c] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    رقم الهاتف *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0795864644"
                    required
                    dir="ltr"
                    className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:border-[#c2a27c] focus:ring-1 focus:ring-[#c2a27c] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    البريد الالكتروني *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@yahoo.com"
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:border-[#c2a27c] focus:ring-1 focus:ring-[#c2a27c] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    الخدمة *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:border-[#c2a27c] focus:ring-1 focus:ring-[#c2a27c] focus:outline-none"
                  >
                    {services.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    التفاصيل
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="أضف تفاصيل إضافية..."
                    rows={4}
                    className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:border-[#c2a27c] focus:ring-1 focus:ring-[#c2a27c] focus:outline-none resize-none"
                  />
                </div>
                {submitStatus === "success" && (
                  <p className="text-green-600 text-sm">تم إرسال طلبك بنجاح. سنتواصل معك قريباً.</p>
                )}
                {validationError && (
                  <p className="text-red-600 text-sm">يرجى ملء جميع الحقول المطلوبة.</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-600 text-sm">
                    حدث خطأ. يرجى التواصل عبر واتساب أو الهاتف، أو المحاولة لاحقاً.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 bg-[#c2a27c] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-70"
                >
                  {loading ? "جاري الإرسال..." : "إرسال"}
                </button>
              </form>
            </div>

            {/* Right: Contact Info */}
            <div className="bg-[#f8f6f3] p-6 sm:p-8 md:p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
                  احجز استشارتك الشخصية الآن
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <FaMapMarkerAlt className="w-6 h-6 text-[#c2a27c] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-800">المكتب</p>
                      <p className="text-gray-600">{OFFICE_ADDRESS}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <FaEnvelope className="w-6 h-6 text-[#c2a27c] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-800">للتواصل</p>
                      <p className="text-gray-600">
                        <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[#c2a27c]">
                          {CONTACT_EMAIL}
                        </a>
                      </p>
                      <p className="text-gray-600" dir="ltr">
                        {CONTACT_PHONE}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <FaClock className="w-6 h-6 text-[#c2a27c] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-800">أوقات الدوام</p>
                      <p className="text-gray-600">{WORKING_HOURS}</p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/962795864644"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 w-fit bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
              >
                <FaWhatsapp className="w-6 h-6" />
                <span>تواصل عبر واتساب</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
