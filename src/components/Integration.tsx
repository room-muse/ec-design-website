import { Upload, Link2, Image, Boxes } from 'lucide-react';

export function Integration() {
  return (
    <section id="integration" className="relative bg-gradient-to-br from-[#F8F6F3] via-[#F5F1EB] to-[#EDE7DD]">
      <div className="max-w-[1400px] mx-auto px-8 py-20">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#2B2520] mb-4 tracking-tight font-medium">
              Simple integration
            </h2>
            <p className="text-lg text-[#7D6B5A]">
              Get started quickly with flexible integration options
            </p>
          </div>
          
          {/* Integration Methods */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                icon: Upload,
                title: 'CSV Upload',
                description: 'Bulk upload your catalog with a simple spreadsheet',
              },
              {
                icon: Link2,
                title: 'API Sync',
                description: 'Real-time sync with your product management system',
              },
              {
                icon: Image,
                title: 'Image Assets',
                description: 'High-resolution product images and optional 3D models',
              },
              {
                icon: Boxes,
                title: 'Product Links',
                description: 'Direct links back to your product pages',
              },
            ].map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E8E4DE] hover:border-[#9B826A]/30 hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9B826A] to-[#8A7159] flex items-center justify-center mb-4 shadow-lg shadow-[#9B826A]/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg text-[#2B2520] font-medium mb-2">
                    {method.title}
                  </h3>
                  <p className="text-[#7D6B5A] text-sm leading-relaxed">
                    {method.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Requirements Card */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-[#E8E4DE] shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#9B826A]/10 to-transparent px-8 py-6 border-b border-[#E8E4DE]">
              <h3 className="text-xl text-[#2B2520] font-medium">What you'll need</h3>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  'Product catalog (CSV or API access)',
                  'Product images (high resolution)',
                  'Pricing and availability data',
                  'Product page URLs',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-lg bg-[#9B826A]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#9B826A]/20 transition-colors">
                      <svg className="w-4 h-4 text-[#9B826A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#5A4F45] pt-0.5">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#F8F6F3] to-transparent px-8 py-5 border-t border-[#E8E4DE]">
              <p className="text-sm text-[#7D6B5A]">
                <span className="font-medium text-[#2B2520]">Quick setup:</span> Start with a pilot. Go live quickly with full onboarding support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
