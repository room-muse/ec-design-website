import { Eye, MousePointerClick, Clock, Sparkles, TrendingUp, TrendingDown } from 'lucide-react';
import { DashboardPreview } from './DashboardPreview';

export function Analytics() {
  return (
    <section id="analytics" className="relative bg-[#FAFAFA] py-40">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#BCAB87] rounded-full text-sm text-white font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Real-time Analytics
          </div>
          <h2 className="text-5xl text-[#0A0A0A] mb-4 leading-[1.15]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, letterSpacing: '-0.02em' }}>
            Track what matters
          </h2>
          <p className="text-lg text-[#6B6B6B] leading-[1.6] max-w-[600px] mx-auto">
            Understand customer behavior with simple, actionable analytics designed for furniture brands
          </p>
        </div>

        {/* Dashboard Card with Glass Effect */}
        <div className="relative max-w-[1200px] mx-auto">
          {/* Glass Container */}
          <div className="relative bg-[#FFFFFF] rounded-lg border border-[#BCAB87] shadow-[0_8px_20px_rgba(10,10,10,0.06)] overflow-hidden">
            {/* Header */}
            <div className="bg-[#FFFFFF] border-b border-[#E6E6E6] px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-[#6B6B6B] mb-1 tracking-wide">Analytics Dashboard</div>
                  <div className="text-2xl text-[#0A0A0A] font-medium">Performance Overview</div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-[#FFFFFF] rounded-lg border border-[#E6E6E6]">
                  <div className="w-2 h-2 rounded-full bg-[#2D4A3E] animate-pulse" />
                  <span className="text-sm text-[#0A0A0A] font-semibold">Live</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Top Section: Left KPIs + Funnel + Right KPIs */}
              <div className="grid grid-cols-12 gap-6 mb-8">
                {/* Left Column - CPC and CPS */}
                <div className="col-span-2 space-y-4">
                  <div className="bg-[#FAFAFA] rounded-lg p-5 border border-[#E6E6E6]">
                    <div className="text-sm text-[#6B6B6B] mb-1">CPC</div>
                    <div className="text-xs text-[#A09A8F] mb-3">Cost per Click</div>
                    <div className="text-3xl text-[#0A0A0A] font-medium">$0.84</div>
                  </div>
                  
                  <div className="bg-[#FAFAFA] rounded-lg p-5 border border-[#E6E6E6]">
                    <div className="text-sm text-[#6B6B6B] mb-1">CPS</div>
                    <div className="text-xs text-[#A09A8F] mb-3">Cost per Session</div>
                    <div className="text-3xl text-[#0A0A0A] font-medium">$2.10</div>
                  </div>
                </div>

                {/* Center - User Behavior Funnel */}
                <div className="col-span-8 bg-white rounded-lg p-6 border border-[#E5E2DB]">
                  <h3 className="text-lg text-[#121212] font-medium mb-6">User Behavior Funnel</h3>
                  
                  <div className="space-y-4">
                    {/* Funnel Steps */}
                    <div className="flex items-stretch justify-between gap-2">
                      {[
                        { label: 'Sessions', value: '18,430' },
                        { label: 'Product Clicks', value: '8,429' },
                        { label: 'AR Placements', value: '3,102' },
                        { label: 'Add to Cart', value: '894' },
                        { label: 'Purchases', value: '480' },
                      ].map((stage, index) => (
                        <div key={index} className="flex-1 flex items-stretch gap-2">
                          <div className="flex-1">
                            <div className="bg-[#FAFAFA] border border-[#E6E6E6] text-[#0A0A0A] rounded-lg p-3 text-center h-full min-h-[80px] flex flex-col justify-center">
                              <div className="text-xs mb-1 text-[#6B6B6B]">{stage.label}</div>
                              <div className="text-xl font-medium">{stage.value}</div>
                            </div>
                          </div>
                          
                          {index < 4 && (
                            <div className="text-[#D9D5CD] flex-shrink-0 flex items-center">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Conversion Rates */}
                    <div className="flex items-start justify-between gap-2 pt-2">
                      <div className="flex-1 text-center">
                        <div className="text-lg text-[#121212] font-medium mb-1">45.7%</div>
                        <div className="text-xs text-[#6F746B]">Sessions to Clicks</div>
                      </div>
                      <div className="w-4 flex-shrink-0"></div>
                      <div className="flex-1 text-center">
                        <div className="text-lg text-[#121212] font-medium mb-1">36.8%</div>
                        <div className="text-xs text-[#6F746B]">Placement Rate</div>
                      </div>
                      <div className="w-4 flex-shrink-0"></div>
                      <div className="flex-1 text-center">
                        <div className="text-lg text-[#121212] font-medium mb-1">28.8%</div>
                        <div className="text-xs text-[#6F746B]">AR to Add to Cart</div>
                      </div>
                      <div className="w-4 flex-shrink-0"></div>
                      <div className="flex-1 text-center">
                        <div className="text-lg text-[#121212] font-medium mb-1">53.7%</div>
                        <div className="text-xs text-[#6F746B]">Cart to Purchase</div>
                      </div>
                      <div className="flex-1"></div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Conversion Rate and Add to Cart Rate */}
                <div className="col-span-2 space-y-4">
                  <div className="bg-gradient-to-br from-white to-[#FAF8F3] rounded-lg p-5 border border-[#E5E2DB]">
                    <div className="text-sm text-[#6F746B] mb-3">Conversion Rate</div>
                    <div className="text-3xl text-[#121212] font-medium">5.2%</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white to-[#FAF8F3] rounded-lg p-5 border border-[#E5E2DB]">
                    <div className="text-sm text-[#6F746B] mb-3">Add to Cart Rate</div>
                    <div className="text-3xl text-[#121212] font-medium">9.7%</div>
                  </div>
                </div>
              </div>

              {/* Bottom Section: Products Table */}
              <div className="bg-[#FAFAFA] rounded-lg p-6 border border-[#E6E6E6]">
                <h3 className="text-lg text-[#121212] font-medium mb-6">Top Products by AR Placement</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#E5E2DB]">
                        <th className="text-left text-xs text-[#6F746B] font-medium pb-3 pr-4">Product</th>
                        <th className="text-right text-xs text-[#6F746B] font-medium pb-3 px-4">Clicks</th>
                        <th className="text-right text-xs text-[#6F746B] font-medium pb-3 px-4">AR Placements</th>
                        <th className="text-right text-xs text-[#6F746B] font-medium pb-3 px-4">Placement Rate</th>
                        <th className="text-right text-xs text-[#6F746B] font-medium pb-3 px-4">Add to Cart</th>
                        <th className="text-right text-xs text-[#6F746B] font-medium pb-3 pl-4">ATC Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { 
                          name: 'Modern Leather Sofa', 
                          clicks: '2,847', 
                          placements: '1,120', 
                          placementRate: '39%',
                          addToCart: '312',
                          atcRate: '11%'
                        },
                        { 
                          name: 'Oak Coffee Table', 
                          clicks: '1,923', 
                          placements: '702', 
                          placementRate: '36%',
                          addToCart: '205',
                          atcRate: '10.7%'
                        },
                        { 
                          name: 'Minimalist Armchair', 
                          clicks: '1,654', 
                          placements: '512', 
                          placementRate: '31%',
                          addToCart: '154',
                          atcRate: '9.3%'
                        },
                      ].map((product, index) => (
                        <tr key={index} className="border-b border-[#E5E2DB] last:border-0 hover:bg-white/60 transition-colors">
                          <td className="text-sm text-[#121212] font-medium py-4 pr-4">{product.name}</td>
                          <td className="text-sm text-[#121212] text-right py-4 px-4">{product.clicks}</td>
                          <td className="text-sm text-[#121212] text-right py-4 px-4">{product.placements}</td>
                          <td className="text-sm text-[#BCAB87] font-medium text-right py-4 px-4">{product.placementRate}</td>
                          <td className="text-sm text-[#121212] text-right py-4 px-4">{product.addToCart}</td>
                          <td className="text-sm text-[#6F746B] text-right py-4 pl-4">{product.atcRate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="border-t border-[#E5E2DB] px-8 py-4 bg-gradient-to-r from-transparent to-white/50">
              <p className="text-xs text-[#6F746B] text-center">
                Example data shown for illustration purposes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}