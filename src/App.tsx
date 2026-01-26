import { Hero } from "./components/Hero";
import { Value } from "./components/Value";
import { HowItWorks } from "./components/HowItWorks";
import { Analytics } from "./components/Analytics";
import { Integration } from "./components/Integration";
import { LeadForm } from "./components/LeadForm";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      <Hero />
      <Value />
      <HowItWorks />
      <Analytics />
      <Integration />
      <LeadForm />
      <About />
      <Footer />
    </div>
  );
}