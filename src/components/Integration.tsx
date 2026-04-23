import { Upload, Link2, Image, Boxes } from 'lucide-react';

export function Integration() {
  return (
    <section id="integration" className="relative bg-[#F5F5F5] py-40">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl text-[#0A0A0A] mb-4 leading-[1.15]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, letterSpacing: '-0.02em' }}>
            Simple integration
          </h2>
        </div>
        
        {/* Integration Methods */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {integrationMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="bg-[#FFFFFF] rounded-lg p-6 border border-[#E6E6E6] hover:border-[#2D4A3E]/30 shadow-[0_8px_20px_rgba(10,10,10,0.06)] hover:shadow-[0_12px_28px_rgba(10,10,10,0.10)] transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#BCAB87] border border-[#BCAB87] shadow-[0_4px_12px_rgba(188,171,135,0.2)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-[#0A0A0A] font-medium mb-2">
                  {method.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-[1.6]">
                  {method.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const integrationMethods = [
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
];