import { TrendingUp, Package, Share2, BarChart3 } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increase conversion',
    description: 'Customers make confident purchase decisions when they see products in context.',
    stat: '+142%',
    statLabel: 'avg. increase'
  },
  {
    icon: Package,
    title: 'Reduce returns',
    description: 'Realistic visualization minimizes sizing and style mismatches.',
    stat: '-37%',
    statLabel: 'fewer returns'
  },
  {
    icon: Share2,
    title: 'New distribution channel',
    description: 'Reach customers through curated room designs and shoppable experiences.',
    stat: '3.2M',
    statLabel: 'monthly visitors'
  },
  {
    icon: BarChart3,
    title: 'Measurable performance',
    description: 'Track clicks, conversions, and engagement across your entire catalog.',
    stat: '100%',
    statLabel: 'visibility'
  },
];

export function Value() {
  return (
    <section className="relative bg-white">
      <div className="max-w-[1400px] mx-auto px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#2B2520] mb-4 tracking-tight font-medium">
            Why brands partner with RoomMuse
          </h2>
          <p className="text-lg text-[#7D6B5A]">
            Proven results from furniture brands transforming their digital experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-[#F8F6F3] rounded-2xl p-6 border border-[#E8E4DE] hover:border-[#9B826A]/30 hover:shadow-xl hover:shadow-[#9B826A]/5 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9B826A] to-[#8A7159] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-[#9B826A]/20">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl text-[#2B2520] mb-2 font-medium">
                  {benefit.title}
                </h3>
                <p className="text-[#7D6B5A] leading-relaxed mb-4 text-sm">
                  {benefit.description}
                </p>

                {/* Stat Badge */}
                <div className="inline-flex items-baseline gap-2 px-3 py-1.5 bg-[#9B826A]/10 rounded-lg border border-[#9B826A]/20">
                  <span className="text-lg font-medium text-[#9B826A]">{benefit.stat}</span>
                  <span className="text-xs text-[#7D6B5A]">{benefit.statLabel}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
