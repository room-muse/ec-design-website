import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Value } from "./components/Value";
import { HowItWorks } from "./components/HowItWorks";
import { Integration } from "./components/Integration";
import { LeadForm } from "./components/LeadForm";
import { Footer } from "./components/Footer";
import Demo from "./pages/Demo";

function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      <Hero />
      <Value />
      <HowItWorks />
      <Integration />
      <LeadForm />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  );
}