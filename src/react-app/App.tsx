import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import AboutPage from "@/react-app/pages/About";
import ServicesPage from "@/react-app/pages/Services";
import NewsPage from "@/react-app/pages/News";
import ContactPage from "@/react-app/pages/Contact";
import Navigation from "@/react-app/components/Navigation";
import Footer from "@/react-app/components/Footer";
import WhatsAppButton from "@/react-app/components/WhatsAppButton";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}
