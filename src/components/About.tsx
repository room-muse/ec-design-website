import cmuLogo from 'figma:asset/147ae3818526359e2f2c0cea9237de3c0e0b2a05.png';
import projectOlympusLogo from 'figma:asset/d6d48e9265cdae5b34f9a28835dee497fd515fd9.png';
import { ExternalLink } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-[#F8F6F3] to-white py-24">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#9B826A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#D4A574]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-[#2B2520] mb-4 tracking-tight font-medium">
            About EC Design
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#9B826A] to-[#D4A574] mx-auto rounded-full" />
        </div>

        {/* Content Card */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-white/80 p-12 max-w-[900px] mx-auto">
          {/* Description */}
          <p className="text-xl text-[#2B2520] leading-relaxed text-center mb-12">
            Backed by Carnegie Mellon University's Swartz Center for Entrepreneurship, 
            <span className="font-medium text-[#9B826A]"> EC Design</span> bridges the gap between creativity, technology, 
            and commerce to make design accessible to everyone.
          </p>

          {/* Logos - Horizontal Layout */}
          <div className="flex justify-center items-center gap-12 mb-12">
            <div className="bg-white rounded-2xl p-6 border border-[#E8E4DE]">
              <img 
                src={cmuLogo} 
                alt="Carnegie Mellon University Swartz Center for Entrepreneurship"
                className="h-20 w-auto object-contain"
              />
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8E4DE]">
              <img 
                src={projectOlympusLogo} 
                alt="Carnegie Mellon University Project Olympus"
                className="h-20 w-auto object-contain"
              />
            </div>
          </div>

          {/* LinkedIn Link */}
          <div className="flex justify-center mb-8">
            <a 
              href="https://www.linkedin.com/company/109528242/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-xl hover:bg-[#004182] transition-all font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Follow us on LinkedIn
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Footer Note */}
          <div className="pt-8 border-t border-[#E8E4DE]">
            <p className="text-center text-sm text-[#7D6B5A]">
              RoomMuse is a product of EC Design, developed through Carnegie Mellon's entrepreneurship ecosystem
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}