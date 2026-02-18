import { Package, TrendingUp, Shield, Zap } from 'lucide-react';

const values = [
  {
    icon: Package,
    title: 'Showcase Your Entire Catalog',
    description: 'Transform product listings into immersive 3D environments where customers can explore your furniture in context, driving higher conversion rates.',
  },
  {
    icon: TrendingUp,
    title: 'Boost Sales & Reduce Returns',
    description: 'Help customers make confident purchase decisions with realistic visualizations, leading to fewer returns and increased customer satisfaction.',
  },
  {
    icon: Shield,
    title: 'Maintain Brand Control',
    description: 'Customize room styles, color palettes, and product placements to align perfectly with your brand identity and aesthetic standards.',
  },
  {
    icon: Zap,
    title: 'Seamless Integration',
    description: 'Connect your existing product catalog through our API or CSV upload. Go live in days, not months, with dedicated onboarding support.',
  },
];

export function ValueProposition() {
  return (
    <section id="value" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-[#2C2416] mb-6">
            Value for Furniture Brands
          </h2>
          <p className="text-xl text-[#5C4F3D] max-w-3xl mx-auto">
            Deliver the in-store experience online. Give your customers the confidence to buy furniture they'll love.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-[#FAFAF8] to-white border border-[#E8DFD3] hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F5E6D3] to-[#E8DFD3] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-7 h-7 text-[#2C2416]" />
              </div>
              <h3 className="text-2xl text-[#2C2416] mb-4">{value.title}</h3>
              <p className="text-[#5C4F3D] leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
