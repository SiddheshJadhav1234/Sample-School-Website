import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import AcademicsPage from "./Pages/AcademicsPage";
import AdmissionsPage from "./Pages/AdmissionsPage";
import GalleryPage from "./Pages/GalleryPage";
import ContactPage from "./Pages/ContactPage";
import DynamicDashboard from "./Pages/Dashboard/DynamicDashboard";
import ScrollToTop from "./components/Common/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-gray-50">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dashboard" element={<DynamicDashboard />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
