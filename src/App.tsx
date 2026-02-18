import { Hero } from "./components/Hero";
import { Value } from "./components/Value";
import { HowItWorks } from "./components/HowItWorks";
import { Integration } from "./components/Integration";
import { LeadForm } from "./components/LeadForm";
import { Footer } from "./components/Footer";

export default function App() {
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