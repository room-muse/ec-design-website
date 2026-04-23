import { Button } from "./ui/button";
import floorPlanScreen from "figma:asset/bb1c5a7c71e6354b3765279a0ccfc4f2af0e4ced.png";
import logoImage from "../assets/logo.svg";
import videoSrc from "figma:asset/prodhack_main_1080.mp4";
export function Hero() {
  return (
    <section className="relative bg-[#FFFFFF] overflow-x-hidden">
      {/* Navigation */}
      <nav className="relative border-b border-[#E6E6E6] bg-white/80 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-5 flex items-center justify-between">
          <img src={logoImage} alt="RoomMuse" className="h-6" />
          <div className="flex items-center gap-4 sm:gap-8">
            <a
              href="#how-it-works"
              className="hidden sm:block text-[#0A0A0A] hover:text-[#2D4A3E] transition-colors text-sm font-medium relative group"
            >
              How it works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2D4A3E] group-hover:w-full transition-all" />
            </a>
            <a
              href="#integration"
              className="hidden sm:block text-[#0A0A0A] hover:text-[#2D4A3E] transition-colors text-sm font-medium relative group"
            >
              Integration
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2D4A3E] group-hover:w-full transition-all" />
            </a>
            <Button
              onClick={() =>
                document
                  .getElementById("lead-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-[#0A0A0A] hover:bg-[#FAFAFA] border border-[#BCAB87] rounded px-4 sm:px-6 h-9 sm:h-10 text-sm shadow-lg shadow-black/5 transition-all font-medium"
            >
              <span className="sm:hidden">Contact</span>
              <span className="hidden sm:inline">Contact Sales</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 pt-16 sm:pt-32 pb-20 sm:pb-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#E6E6E6] bg-white/60 backdrop-blur-sm rounded-full text-sm text-[#6F746B] mb-8">
              <div className="w-2 h-2 rounded-full bg-[#BCAB87] animate-pulse" />
              For Furniture Brands & Retailers
            </div>
            <h1
              className="text-4xl lg:text-5xl text-[#0A0A0A] mb-6 leading-[1.12] tracking-tight"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
            >
              Let customers see products in their own space
            </h1>
            <p className="text-xl lg:text-2xl text-[#6B6B6B] mb-10 leading-[1.5] max-w-[560px] font-medium">
              RoomMuse is a B2B AR plugin that lets furniture brands embed
              "view-in-room" experiences while capturing and analyzing placement
              and engagement data
            </p>
            <div className="flex items-center gap-4">
              <Button
                size="lg"
                onClick={() =>
                  document
                    .getElementById("lead-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-[#BCAB87] text-white hover:bg-[#A67F3D] rounded px-8 h-12 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 transition-all"
              >
                Get in Touch
              </Button>
              <a
                href="#how-it-works"
                className="text-[#121212] hover:text-[#6F746B] transition-colors font-medium flex items-center gap-2 group"
              >
                See how it works
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Trust Metrics */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-[#2D4A3E]/10">
              <div>
                <div className="text-2xl text-[#0A0A0A] font-semibold mb-1">
                  2.4x
                </div>
                <div className="text-sm text-[#6F746B]">
                  Avg. conversion lift
                </div>
              </div>
              <div>
                <div className="text-2xl text-[#0A0A0A] font-semibold mb-1">
                  -37%
                </div>
                <div className="text-sm text-[#6F746B]">
                  Product Returns rate
                </div>
              </div>
              <div>
                <div className="text-2xl text-[#0A0A0A] font-semibold mb-1">
                  4:32
                </div>
                <div className="text-sm text-[#6F746B]">
                  Avg. engagement time
                </div>
              </div>
            </div>
          </div>

          {/* Right: Phone Mockup with Depth Layers */}
          <div className="relative lg:h-[700px] flex items-center justify-center">
            {/* Background Layer - Sofa Product Image with Glow */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#BCAB87]/20 to-[#BCAB87]/10 blur-3xl scale-110 rounded-[3rem]" />

              {/* Video */}
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="relative w-full max-w-[280px] drop-shadow-2xl rounded-3xl border-[8px] border-[#121212] object-cover"
                aria-label="RoomMuse product showcase"
              />

              {/* Floating Badge */}
              <div className="hidden sm:block absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0A0A0A] px-6 py-3 rounded-full shadow-xl border border-[#0A0A0A]/20 whitespace-nowrap">
                <div className="text-sm text-white font-semibold">
                  ✨ Visualize Your Room in AR
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
