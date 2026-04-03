import { Activity, Undo2, Users, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Activity,
    title: 'Increase conversion',
    description: 'Customers make confident purchase decisions when they see products in context.',
    stat: '+142%',
    statLabel: 'avg. increase'
  },
  {
    icon: Undo2,
    title: 'Reduce returns',
    description: 'Realistic visualization minimizes sizing and style mismatches.',
    stat: '-37%',
    statLabel: 'fewer returns'
  },
  {
    icon: Users,
    title: 'New distribution channel',
    description: 'Reach customers through curated room designs and shoppable experiences.',
    stat: '3.2M',
    statLabel: 'monthly visitors'
  },
  {
    icon: TrendingUp,
    title: 'Measurable performance',
    description: 'Track clicks, conversions, and engagement across your entire catalog.',
    stat: '100%',
    statLabel: 'visibility'
  },
];

export function Value() {
  return (
    <section className="relative bg-[#454343] py-40">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl text-[#FFFFFF] mb-4 leading-[1.15]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, letterSpacing: '-0.02em' }}>
            Why brands partner with RoomMuse
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-[#FFFFFF] rounded-lg p-8 border border-[#E6E6E6] hover:border-[#2D4A3E]/30 shadow-[0_8px_20px_rgba(10,10,10,0.06)] hover:shadow-[0_12px_28px_rgba(10,10,10,0.10)] transition-all flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-[#bcab87] border border-[#bcab87] shadow-[0_4px_12px_rgba(188,171,135,0.2)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl text-[#0A0A0A] mb-2 font-semibold">
                  {benefit.title}
                </h3>
                <p className="text-[#6B6B6B] leading-[1.6] mb-4 text-sm flex-grow">
                  {benefit.description}
                </p>

                {/* Stat Badge - aligned to bottom */}
                <div className="inline-flex items-baseline gap-2 px-3 py-2 bg-[#FAFAFA] border border-[#E6E6E6] rounded-md w-fit">
                  <span className="text-lg font-semibold text-[#bcab87]">{benefit.stat}</span>
                  <span className="text-xs text-[#6B6B6B]">{benefit.statLabel}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}