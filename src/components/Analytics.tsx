import { Eye, MousePointerClick, Clock, Sparkles } from 'lucide-react';

export function Analytics() {
  return (
    <section id="analytics" className="relative bg-white">
      <div className="max-w-[1400px] mx-auto px-8 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#9B826A]/10 rounded-full text-sm text-[#9B826A] mb-6">
            <Sparkles className="w-4 h-4" />
            Real-time Analytics
          </div>
          <h2 className="text-4xl text-[#2B2520] mb-4 tracking-tight font-medium">
            Track what matters
          </h2>
          <p className="text-lg text-[#7D6B5A] max-w-[600px] mx-auto">
            Understand customer behavior with simple, actionable analytics designed for furniture brands
          </p>
        </div>

        {/* Dashboard Card with Glass Effect */}
        <div className="relative max-w-[1100px] mx-auto">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F8F6F3] via-[#F5F1EB] to-[#EDE7DD] rounded-3xl -z-10" />
          
          {/* Glass Container */}
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-[#E8E4DE] shadow-2xl shadow-[#9B826A]/10 overflow-hidden">
            {/* Header */}
            <div className="border-b border-[#E8E4DE] px-8 py-6 bg-gradient-to-r from-white/50 to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-[#7D6B5A] mb-1">Analytics Dashboard</div>
                  <div className="text-2xl text-[#2B2520] font-medium">Performance Overview</div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-[#9B826A]/10 rounded-xl border border-[#9B826A]/20">
                  <div className="w-2 h-2 rounded-full bg-[#9B826A] animate-pulse" />
                  <span className="text-sm text-[#9B826A] font-medium">Live</span>
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="p-8">
              <div className="grid md:grid-cols-4 gap-6 mb-10">
                {[
                  { icon: Eye, label: 'Total views', value: '24,582', change: '+12.3%', color: 'from-blue-500 to-blue-600' },
                  { icon: MousePointerClick, label: 'Product clicks', value: '8,429', change: '+18.7%', color: 'from-[#9B826A] to-[#8A7159]' },
                  { icon: Clock, label: 'Avg. session', value: '4:32', change: '+2:14', color: 'from-purple-500 to-purple-600' },
                  { icon: Sparkles, label: 'Conversion rate', value: '5.2%', change: '+1.8%', color: 'from-green-500 to-green-600' },
                ].map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div
                      key={index}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity" 
                           style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
                      <div className="relative bg-gradient-to-br from-white to-[#FDFCFB] rounded-2xl p-5 border border-[#E8E4DE] group-hover:border-[#9B826A]/30 group-hover:shadow-lg transition-all">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4 shadow-lg`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-3xl text-[#2B2520] font-medium mb-1">{metric.value}</div>
                        <div className="text-sm text-[#7D6B5A] mb-2">{metric.label}</div>
                        <div className="inline-flex items-center gap-1 text-xs text-green-600 font-medium">
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
              <div className="grid md:grid-cols-2 gap-6">
                {/* Top Room Styles */}
                <div className="bg-gradient-to-br from-white to-[#FDFCFB] rounded-2xl p-6 border border-[#E8E4DE]">
                  <h3 className="text-lg text-[#2B2520] font-medium mb-6">Top room styles</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Modern Minimalist', engagement: 92, color: 'bg-[#9B826A]' },
                      { name: 'Scandinavian Cozy', engagement: 85, color: 'bg-[#B5A394]' },
                      { name: 'Industrial Loft', engagement: 78, color: 'bg-[#C9BEB0]' },
                      { name: 'Mid-Century Modern', engagement: 71, color: 'bg-[#D4CEC4]' },
                    ].map((style, index) => (
                      <div key={index} className="group">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-[#2B2520] font-medium">{style.name}</span>
                          <span className="text-sm text-[#7D6B5A]">{style.engagement}%</span>
                        </div>
                        <div className="h-2.5 bg-[#F5F2ED] rounded-full overflow-hidden">
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
                <div className="bg-gradient-to-br from-white to-[#FDFCFB] rounded-2xl p-6 border border-[#E8E4DE]">
                  <h3 className="text-lg text-[#2B2520] font-medium mb-6">Top products</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Modern Leather Sofa', clicks: '2,847', trend: '+24%' },
                      { name: 'Oak Coffee Table', clicks: '1,923', trend: '+18%' },
                      { name: 'Minimalist Armchair', clicks: '1,654', trend: '+31%' },
                      { name: 'Walnut Dining Table', clicks: '1,402', trend: '+12%' },
                    ].map((product, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-white/60 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4CEC4] to-[#C9BEB0] flex items-center justify-center text-xs text-[#7D6B5A] font-medium">
                            #{index + 1}
                          </div>
                          <div>
                            <div className="text-sm text-[#2B2520] font-medium">{product.name}</div>
                            <div className="text-xs text-[#7D6B5A]">{product.clicks} clicks</div>
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
            <div className="border-t border-[#E8E4DE] px-8 py-4 bg-gradient-to-r from-transparent to-white/50">
              <p className="text-xs text-[#7D6B5A] text-center">
                Example data shown for illustration purposes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
