import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import PracticeAreas from "./components/PracticeAreas";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";

function HomePage() {
  return (
    <div className="min-h-screen bg-[#2C2C2C]">
      <Navbar />
      <Hero />
      <Services />
      <PracticeAreas />
      <Stats />
      <About />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
