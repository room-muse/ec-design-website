import { BarChart3, Eye, Settings, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { DashboardPreview } from './DashboardPreview';

const features = [
  {
    icon: Settings,
    title: 'Brand Customization',
    description: 'Control every aspect of your room designs—from wall colors to lighting—to match your brand aesthetic.',
  },
  {
    icon: Eye,
    title: 'Product Visibility',
    description: 'Feature hero products, create curated collections, and highlight seasonal items with flexible room configurations.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Track which products get the most interaction, time spent in rooms, and conversion paths to optimize your strategy.',
  },
  {
    icon: Download,
    title: 'Export & Share',
    description: 'Download high-quality renders for marketing materials or let customers share their favorite room designs.',
  },
];

export function BrandControls() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <h2 className="text-4xl lg:text-5xl text-[#2C2416] mb-6">
              Brand Controls & Analytics
            </h2>
            <p className="text-xl text-[#5C4F3D] leading-relaxed mb-8">
              Maintain complete control over your brand presentation while gaining insights into customer preferences and behavior.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#F5E6D3] to-[#E8DFD3] flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#2C2416]" />
                  </div>
                  <div>
                    <h4 className="text-lg text-[#2C2416] mb-2">{feature.title}</h4>
                    <p className="text-[#5C4F3D]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574]/20 to-[#C69563]/20 rounded-3xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzY4NzMxODg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Beautiful bedroom interior"
                className="w-full h-auto"
              />
            </div>
            {/* Analytics Overlay */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-[#E8DFD3]">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="w-5 h-5 text-[#D4A574]" />
                <span className="text-sm text-[#2C2416]">Room Analytics</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl text-[#2C2416]">12.4k</span>
                <span className="text-sm text-[#5C4F3D]">views this week</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Preview Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl text-[#2C2416] mb-4">
              Your Partner Dashboard
            </h3>
            <p className="text-lg text-[#5C4F3D] max-w-2xl mx-auto">
              A powerful yet intuitive dashboard to manage your catalog, track performance, and optimize your 3D room experiences.
            </p>
          </div>
          <DashboardPreview />
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 p-8 rounded-2xl bg-gradient-to-br from-[#FAFAF8] to-white border border-[#E8DFD3]">
          <div className="text-center">
            <div className="text-4xl text-[#2C2416] mb-2">Real-time</div>
            <div className="text-[#5C4F3D]">Data Synchronization</div>
          </div>
          <div className="text-center border-l border-r border-[#E8DFD3]">
            <div className="text-4xl text-[#2C2416] mb-2">Unlimited</div>
            <div className="text-[#5C4F3D]">Product Updates</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-[#2C2416] mb-2">Custom</div>
            <div className="text-[#5C4F3D]">Reporting Dashboards</div>
          </div>
        </div>
      </div>
    </section>
  );
}