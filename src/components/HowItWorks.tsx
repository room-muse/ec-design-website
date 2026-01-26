import nordicCatalogImage from 'figma:asset/82b2338933980396d50d81e8c232e8d9dc0704ae.png';
import catalogBrowseImage from 'figma:asset/0ed43e4dd98e3ba524b6c6ae77c0d233aa069a58.png';
import floorPlanUploadedScreen from 'figma:asset/bb1c5a7c71e6354b3765279a0ccfc4f2af0e4ced.png';
import demoGif from 'figma:asset/2182b0d5ef5a7be9fd80eb665b84eba0e2ae95e1.png';

const steps = [
  {
    number: '01',
    title: 'Connect your catalog',
    description: 'Upload via CSV or API. We map products into a design-ready library.',
    details: ['Product images & specs', 'Pricing & availability', 'Real-time sync'],
    visual: nordicCatalogImage,
    alt: 'Furniture catalog collection',
    type: 'image' as const,
  },
  {
    number: '02',
    title: 'Customers design with your products',
    description: 'Upload floor plans or scan rooms, then drag and drop your furniture to visualize and compare.',
    details: ['Drag & drop interface', 'Real-time 3D preview', 'Multiple room styles'],
    visual: catalogBrowseImage,
    alt: 'Browse and select furniture products',
    type: 'image' as const,
  },
  {
    number: '03',
    title: 'Drive traffic and measure performance',
    description: 'Shoppers click "Shop on Brand Site" to purchase. Track engagement and conversion in real-time.',
    details: ['Direct product links', 'Analytics dashboard', 'Conversion tracking'],
    visual: null,
    alt: 'Analytics dashboard',
    type: 'dashboard' as const,
  },
  {
    number: '04',
    title: 'See it in action',
    description: 'Watch how customers transform empty rooms into beautifully designed spaces using your furniture catalog.',
    details: ['Interactive floor plans', 'AR visualization', 'Seamless shopping experience'],
    visual: null,
    alt: 'Product demo video',
    type: 'video' as const,
  },
];

function DashboardPreview() {
  return (
    <div className="w-full max-w-[600px] mx-auto">
      <div className="w-full bg-white/90 backdrop-blur-md rounded-2xl border border-[#E8E4DE] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="border-b border-[#E8E4DE] px-6 py-4 bg-gradient-to-r from-white/50 to-transparent">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-[#7D6B5A] mb-1">Analytics Dashboard</div>
              <div className="text-lg text-[#2B2520] font-medium">Performance Overview</div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#9B826A]/10 rounded-lg border border-[#9B826A]/20">
              <div className="w-1.5 h-1.5 rounded-full bg-[#9B826A] animate-pulse" />
              <span className="text-xs text-[#9B826A] font-medium">Live</span>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { label: 'Total views', value: '24,582', change: '+12.3%' },
              { label: 'Product clicks', value: '8,429', change: '+18.7%' },
              { label: 'Avg. session', value: '4:32', change: '+2:14' },
              { label: 'Conversion', value: '5.2%', change: '+1.8%' },
            ].map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-[#FDFCFB] rounded-xl p-4 border border-[#E8E4DE]">
                <div className="text-2xl text-[#2B2520] font-medium mb-1">{metric.value}</div>
                <div className="text-xs text-[#7D6B5A] mb-2">{metric.label}</div>
                <div className="inline-flex items-center gap-1 text-xs text-green-600 font-medium">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  {metric.change}
                </div>
              </div>
            ))}
          </div>

          {/* Chart Preview */}
          <div className="bg-gradient-to-br from-white to-[#FDFCFB] rounded-xl p-4 border border-[#E8E4DE]">
            <div className="text-sm text-[#2B2520] font-medium mb-4">Top products</div>
            <div className="space-y-3">
              {[
                { name: 'Modern Leather Sofa', width: '92%' },
                { name: 'Oak Coffee Table', width: '85%' },
                { name: 'Minimalist Armchair', width: '78%' },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-[#2B2520]">{item.name}</span>
                  </div>
                  <div className="h-2 bg-[#F5F2ED] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#9B826A] rounded-full"
                      style={{ width: item.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoPreview() {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full max-w-[780px]">
        {/* Background Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-radial from-[#9B826A]/20 via-[#9B826A]/5 to-transparent rounded-full blur-2xl" />
        </div>

        {/* Phone Mockup Container */}
        <div className="relative bg-white/40 backdrop-blur-sm rounded-xl p-2 border border-white/60 shadow-2xl">
          <div className="bg-white rounded-xl border-[8px] border-[#2B2520] shadow-xl overflow-hidden">
            <img 
              src={demoGif} 
              alt="RoomMuse app demo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-gradient-to-b from-[#F8F6F3] via-[#F5F1EB] to-[#F8F6F3]">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-[#9B826A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-[#D4A574]/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-[1400px] mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-[#2B2520] mb-4 tracking-tight font-medium">
            How it works
          </h2>
          <p className="text-lg text-[#7D6B5A]">
            From catalog to conversion in four simple steps
          </p>
        </div>

        {/* Vertical List */}
        <div className="max-w-[1200px] mx-auto space-y-20">
          {steps.map((step, index) => (
            <div key={index} className={`grid gap-12 items-center lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#9B826A] to-[#8A7159] flex items-center justify-center shadow-lg shadow-[#9B826A]/20">
                    <span className="text-xl text-white font-medium">{step.number}</span>
                  </div>
                  <h3 className="text-3xl text-[#2B2520] tracking-tight font-medium">
                    {step.title}
                  </h3>
                </div>
                <p className="text-lg text-[#7D6B5A] leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Feature List */}
                <div className="space-y-3">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#9B826A]" />
                      <span className="text-[#5A4F45]">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className={`relative flex justify-center items-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                {step.type === 'image' && (
                  <div className="relative">
                    {/* Background Glow */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[400px] h-[400px] bg-gradient-radial from-[#9B826A]/20 via-[#9B826A]/5 to-transparent rounded-full blur-2xl" />
                    </div>

                    {/* Image Container */}
                    <div className="relative bg-white/40 backdrop-blur-sm rounded-2xl p-3 border border-white/60 shadow-2xl">
                      <img 
                        src={step.visual} 
                        alt={step.alt}
                        className="w-full max-w-[500px] max-h-[500px] object-contain rounded-xl shadow-xl"
                      />
                    </div>
                  </div>
                )}

                {step.type === 'dashboard' && (
                  <div className="relative w-full">
                    {/* Background Glow */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[400px] h-[400px] bg-gradient-radial from-[#9B826A]/20 via-[#9B826A]/5 to-transparent rounded-full blur-2xl" />
                    </div>
                    <DashboardPreview />
                  </div>
                )}

                {step.type === 'video' && (
                  <div className="relative w-full flex items-center justify-center">
                    {/* Background Glow */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[500px] h-[500px] bg-gradient-radial from-[#9B826A]/20 via-[#9B826A]/5 to-transparent rounded-full blur-2xl" />
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