import { useState } from "react";
import { useAuth } from "../components/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { FaBalanceScale } from "react-icons/fa";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch {
      setError("بيانات الدخول غير صحيحة. يرجى المحاولة مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#2C2C2C] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-gray-800">
          <div className="text-center mb-8">
            <FaBalanceScale className="w-16 h-16 text-[#c2a27c] mx-auto mb-4" />
            <h1 className="text-2xl font-bold">تسجيل الدخول</h1>
            <p className="text-gray-500 mt-2">للموظفين والمحامين</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                required
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:border-[#c2a27c] focus:ring-1 focus:ring-[#c2a27c] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                كلمة المرور
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:border-[#c2a27c] focus:ring-1 focus:ring-[#c2a27c] focus:outline-none"
              />
            </div>
            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#c2a27c] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-70"
            >
              {loading ? "جاري الدخول..." : "دخول"}
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            <Link to="/" className="text-[#c2a27c] hover:underline">
              العودة للرئيسية
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
