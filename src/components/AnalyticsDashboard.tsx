import { Eye, MousePointerClick, Clock, Sparkles } from 'lucide-react';

export function AnalyticsDashboard() {
  return (
    <div className="relative max-w-[1100px] mx-auto">
      {/* Glass Container */}
      <div className="relative bg-[#FAFAFA] rounded-3xl border border-[#E6E6E6] shadow-[0_8px_20px_rgba(10,10,10,0.06)] overflow-hidden">
        {/* Header */}
        <div className="border-b border-[#E5E2DB] px-6 py-4 bg-[#FAFAFA]">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-[#6F746B] mb-0.5">Analytics Dashboard</div>
              <div className="text-lg text-[#121212] font-medium">Performance Overview</div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#E8F0ED] rounded-xl border border-[#2D4A3E]/20">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E] animate-pulse" />
              <span className="text-xs text-[#2D4A3E] font-medium">Live</span>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="p-6">
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {[
              { icon: Eye, label: 'Total views', value: '24,582', change: '+12.3%' },
              { icon: MousePointerClick, label: 'Product clicks', value: '8,429', change: '+18.7%' },
              { icon: Clock, label: 'Avg. session', value: '4:32', change: '+2:14' },
              { icon: Sparkles, label: 'Conversion rate', value: '5.2%', change: '+1.8%' },
            ].map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="relative bg-[#FAFAFA] rounded-2xl p-4 border border-[#E6E6E6] group-hover:border-[#0A0A0A]/30 group-hover:shadow-lg transition-all h-full flex flex-col">
                    <div className="w-8 h-8 rounded-xl bg-[#0A0A0A] flex items-center justify-center mb-3 shadow-lg">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-2xl text-[#121212] font-medium mb-0.5">{metric.value}</div>
                    <div className="text-xs text-[#6F746B] mb-1.5 h-8 flex items-start">{metric.label}</div>
                    <div className="inline-flex items-center gap-1 text-xs text-green-600 font-medium mt-auto">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                      {metric.change}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Charts Section */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Top Room Styles */}
            <div className="bg-[#FAFAFA] rounded-2xl p-5 border border-[#E6E6E6]">
              <h3 className="text-base text-[#121212] font-medium mb-4">Top room styles</h3>
              <div className="space-y-3">
                {[
                  { name: 'Modern Minimalist', engagement: 92, color: 'bg-[#bcab87]' },
                  { name: 'Scandinavian Cozy', engagement: 85, color: 'bg-[#CCA55C]' },
                  { name: 'Industrial Loft', engagement: 78, color: 'bg-[#D9B46D]' },
                  { name: 'Mid-Century Modern', engagement: 71, color: 'bg-[#E6C37E]' },
                ].map((style, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs text-[#121212] font-medium">{style.name}</span>
                      <span className="text-xs text-[#6F746B]">{style.engagement}%</span>
                    </div>
                    <div className="h-2 bg-[#F5F2EC] rounded-full overflow-hidden">
                      <div
                        className={`h-full ${style.color} rounded-full group-hover:shadow-lg transition-all duration-500`}
                        style={{ width: `${style.engagement}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Engagement */}
            <div className="bg-[#FAFAFA] rounded-2xl p-5 border border-[#E6E6E6]">
              <h3 className="text-base text-[#121212] font-medium mb-4">Top products</h3>
              <div className="space-y-2">
                {[
                  { name: 'Modern Leather Sofa', clicks: '2,847', trend: '+24%' },
                  { name: 'Oak Coffee Table', clicks: '1,923', trend: '+18%' },
                  { name: 'Minimalist Armchair', clicks: '1,654', trend: '+31%' },
                  { name: 'Walnut Dining Table', clicks: '1,402', trend: '+12%' },
                ].map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white/60 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#F5F2EC] flex items-center justify-center text-xs text-[#6F746B] font-medium">
                        #{index + 1}
                      </div>
                      <div>
                        <div className="text-xs text-[#121212] font-medium">{product.name}</div>
                        <div className="text-[10px] text-[#6F746B]">{product.clicks} clicks</div>
                      </div>
                    </div>
                    <div className="text-xs text-green-600 font-medium">{product.trend}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="border-t border-[#E5E2DB] px-6 py-3 bg-[#FAFAFA]">
          <p className="text-[10px] text-[#6F746B] text-center">
            Example data shown for illustration purposes
          </p>
        </div>
      </div>
    </div>
  );
}