import { Button } from './ui/button';
import appIntroScreen from 'figma:asset/075a78fa8149d809d3a4004b6fb24b070a9e1267.png';
import floorPlanScreen from 'figma:asset/bb1c5a7c71e6354b3765279a0ccfc4f2af0e4ced.png';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#F8F6F3] via-[#F5F1EB] to-[#EDE7DD] overflow-hidden">
      {/* Gradient Spotlight Effect */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-[#D4A574]/20 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[#9B826A]/10 via-transparent to-transparent blur-3xl" />
      
      {/* Navigation */}
      <nav className="relative border-b border-[#D9D3CA]/50 bg-white/80 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-8 py-5 flex items-center justify-between">
          <div className="text-2xl tracking-tight text-[#2B2520] font-medium">RoomMuse</div>
          <div className="flex items-center gap-8">
            <a href="#how-it-works" className="text-[#2B2520] hover:text-[#7D6B5A] transition-colors text-sm font-medium">
              How it works
            </a>
            <a href="#analytics" className="text-[#2B2520] hover:text-[#7D6B5A] transition-colors text-sm font-medium">
              Analytics
            </a>
            <a href="#integration" className="text-[#2B2520] hover:text-[#7D6B5A] transition-colors text-sm font-medium">
              Integration
            </a>
            <Button 
              onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#9B826A] text-white hover:bg-[#8A7159] rounded-lg px-6 h-10 shadow-lg shadow-[#9B826A]/20"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative max-w-[1400px] mx-auto px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#D9D3CA]/50 bg-white/60 backdrop-blur-sm rounded-full text-sm text-[#7D6B5A] mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#9B826A] animate-pulse" />
              For Furniture Brands & Retailers
            </div>
            <h1 className="text-5xl lg:text-6xl text-[#2B2520] mb-6 leading-[1.08] tracking-tight font-medium">
              Let customers try your furniture in-room before they buy
            </h1>
            <p className="text-xl text-[#5A4F45]/80 mb-10 leading-relaxed max-w-[560px]">
              Shoppable room experiences that increase conversion and reduce returns. Customers design with your products, then click through to purchase.
            </p>
            <div className="flex items-center gap-4">
              <Button 
                size="lg" 
                onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#9B826A] text-white hover:bg-[#8A7159] rounded-lg px-8 h-12 shadow-xl shadow-[#9B826A]/25 hover:shadow-2xl hover:shadow-[#9B826A]/30 transition-all"
              >
                Get in Touch
              </Button>
              <a href="#how-it-works" className="text-[#2B2520] hover:text-[#7D6B5A] transition-colors font-medium flex items-center gap-2 group">
                See how it works
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Trust Metrics */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-[#D9D3CA]/50">
              <div>
                <div className="text-2xl text-[#2B2520] font-medium mb-1">2.4x</div>
                <div className="text-sm text-[#7D6B5A]">Avg. conversion lift</div>
              </div>
              <div>
                <div className="text-2xl text-[#2B2520] font-medium mb-1">-37%</div>
                <div className="text-sm text-[#7D6B5A]">Reduction in returns</div>
              </div>
              <div>
                <div className="text-2xl text-[#2B2520] font-medium mb-1">4:32</div>
                <div className="text-sm text-[#7D6B5A]">Avg. engagement time</div>
              </div>
            </div>
          </div>

          {/* Right: Phone Mockup with Depth Layers */}
          <div className="relative lg:h-[700px] flex items-center justify-center">
            {/* Background Layer - Blurred Dashboard */}
            <div className="absolute inset-0 flex items-center justify-end opacity-20 scale-95 blur-sm">
              <div className="w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl p-6 border border-[#D9D3CA]">
                <div className="space-y-4">
                  <div className="h-8 bg-gradient-to-r from-[#D4CEC4] to-[#E8E4DE] rounded" />
                  <div className="h-32 bg-gradient-to-br from-[#EDE9E3] to-[#D4CEC4] rounded" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-[#F5F2ED] rounded" />
                    <div className="h-24 bg-[#F5F2ED] rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Midground Layer - Second Phone (Subtle) */}
            <div className="absolute top-20 -right-8 opacity-30 scale-90 rotate-6">
              <img 
                src={floorPlanScreen} 
                alt="Floor plan feature" 
                className="w-[280px] drop-shadow-2xl rounded-[2.5rem] border-[6px] border-white"
              />
            </div>

            {/* Foreground Layer - Main Phone */}
            <div className="relative z-20">
              <div className="relative">
                {/* Glow Effect Behind Phone */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574]/40 to-[#9B826A]/40 blur-3xl scale-110 rounded-[3rem]" />
                
                <img 
                  src={appIntroScreen} 
                  alt="RoomMuse mobile app" 
                  className="relative w-full max-w-[340px] drop-shadow-2xl rounded-[2.8rem] border-[8px] border-[#2B2520]"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-6 py-3 rounded-full shadow-xl border border-[#D9D3CA]/50 whitespace-nowrap">
                  <div className="text-sm text-[#2B2520] font-medium">✨ AI-Powered Room Design</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}