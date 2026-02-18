import nordicCatalogImage from 'figma:asset/b2bcfd473c78e0b613c49d368bae09322ddfbdb7.png';
import catalogBrowseImage from 'figma:asset/0ed43e4dd98e3ba524b6c6ae77c0d233aa069a58.png';
import floorPlanUploadedScreen from 'figma:asset/bb1c5a7c71e6354b3765279a0ccfc4f2af0e4ced.png';

const productImage = 'https://oqjbo0fegrwntnm9.public.blob.vercel-storage.com/4541c55b704c752fe831a7dc2efee132b1d39b3d.png';
const sofaImage = 'https://oqjbo0fegrwntnm9.public.blob.vercel-storage.com/87e295d54a8a507d1736a48d499a75171c31eb35.png';
import inventoryGif from 'figma:asset/9eb474bcb37a08419246973b1550a8767ab3d898.png';
import arPluginGif from 'figma:asset/384b4dceed8e0db577a15d3ded340dbdb122bd90.png';
import { AnalyticsDashboard } from './AnalyticsDashboard';

const steps = [
  {
    number: '01',
    title: 'Connect your catalog',
    description: 'Upload products individually or in bulk via CSV. We map products into a design-ready library.',
    details: ['Product images & dimensions', 'Real-time sync'],
    visual: inventoryGif,
    alt: 'Furniture catalog collection',
    type: 'image' as const,
  },
  {
    number: '02',
    title: 'Add AR to your website',
    description: 'Install our lightweight plugin on your product pages. A "View in AR" button appears on each furniture detail page. Customers click the button and scan a QR code to launch AR instantly on their phone.',
    details: [],
    visual: arPluginGif,
    alt: 'AR plugin on product page',
    type: 'image' as const,
  },
  {
    number: '03',
    title: 'See it in action',
    description: 'Watch how customers transform empty rooms into beautifully designed spaces using your furniture catalog.',
    details: ['Interactive floor plans', 'AR visualization', 'Seamless shopping experience'],
    visual: null,
    alt: 'Product demo video',
    type: 'video' as const,
  },
];

function VideoPreview() {
  return (
    <div className="w-full flex justify-center">
      <div className="relative">
        {/* Background Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-radial from-[#BF964B]/30 to-[#BF964B]/20 blur-3xl scale-110 rounded-[3rem]" />
        </div>

        {/* Sofa Product Image */}
        <img 
          src={sofaImage} 
          alt="RoomMuse product showcase"
          className="relative w-full max-w-[280px] drop-shadow-2xl rounded-3xl border-[8px] border-[#121212]"
        />
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-[#FFFFFF] py-40">
      <div className="relative max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl text-[#0A0A0A] mb-4 leading-[1.15]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, letterSpacing: '-0.02em' }}>
            How it works
          </h2>
          <p className="text-lg text-[#6B6B6B] leading-[1.6]">
            From catalog to conversion in four simple steps
          </p>
        </div>

        {/* Vertical List */}
        <div className="max-w-[1200px] mx-auto space-y-20">
          {steps.map((step, index) => (
            <div key={index} className={`grid gap-16 items-center lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''} ${step.type === 'video' || step.type === 'dashboard' ? 'min-h-[500px]' : ''}`}>
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-lg bg-[#BF964B] flex items-center justify-center shadow-lg shadow-[#BF964B]/30">
                    <span className="text-xl text-white font-medium">{step.number}</span>
                  </div>
                  <h3 className="text-3xl text-[#121212] tracking-tight font-medium">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xl text-[#6F746B] leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Feature List */}
                {step.details.length > 0 && (
                  <div className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E]" />
                        <span className="text-[#6F746B] text-lg font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Visual */}
              <div className={`relative flex justify-center ${step.type === 'video' || step.type === 'dashboard' ? 'items-start' : 'items-center'} ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                {step.type === 'image' && (
                  <div className="relative w-full flex justify-center">
                    {/* Background Glow */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full bg-gradient-radial from-[#BF964B]/30 to-[#BF964B]/20 blur-3xl scale-110 rounded-[3rem]" />
                    </div>

                    {/* Image with Border - Larger and object-cover to crop margins */}
                    <img 
                      src={step.visual} 
                      alt={step.alt}
                      className="relative w-full max-w-[750px] drop-shadow-2xl rounded-3xl border-[8px] border-[#121212] object-cover"
                      style={{ aspectRatio: '16/10' }}
                    />
                  </div>
                )}

                {step.type === 'dashboard' && (
                  <div className="relative w-full flex justify-center">
                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2">
                      <div className="w-[400px] h-[400px] bg-gradient-radial from-[#BF964B]/20 via-[#BF964B]/5 to-transparent rounded-full blur-2xl" />
                    </div>
                    <div className="relative w-full max-w-[850px]">
                      <AnalyticsDashboard />
                    </div>
                  </div>
                )}

                {step.type === 'video' && (
                  <div className="relative w-full flex items-start justify-center">
                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2">
                      <div className="w-[500px] h-[500px] bg-gradient-radial from-[#BF964B]/20 via-[#BF964B]/5 to-transparent rounded-full blur-2xl" />
                    </div>
                    <VideoPreview />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}