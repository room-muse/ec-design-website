import { Upload, Package, BarChart3, TrendingUp, Clock, Eye } from 'lucide-react';

export function DashboardPreview() {
  return (
    <div className="w-full bg-gradient-to-br from-[#FAFAF8] to-white rounded-2xl shadow-2xl border border-[#E8DFD3] overflow-hidden">
      {/* Dashboard Header */}
      <div className="bg-white border-b border-[#E8DFD3] px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl text-[#2C2416] mb-1">Brand Portal</h3>
            <p className="text-[#5C4F3D]">Welcome back, Sarah</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg border border-[#E8DFD3] text-[#2C2416] hover:bg-[#FAFAF8] transition-colors">
              Settings
            </button>
            <button className="px-4 py-2 rounded-lg bg-[#D4A574] text-white hover:bg-[#C69563] transition-colors">
              Upload Products
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-8">
        {/* Analytics Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-[#E8DFD3]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F5E6D3] to-[#E8DFD3] flex items-center justify-center">
                <Eye className="w-5 h-5 text-[#2C2416]" />
              </div>
              <span className="text-[#5C4F3D]">Total Views</span>
            </div>
            <div className="text-3xl text-[#2C2416] mb-1">24,582</div>
            <div className="text-sm text-[#5C4F3D]">
              <span className="text-[#D4A574]">↑ 12%</span> vs last week
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#E8DFD3]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F5E6D3] to-[#E8DFD3] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#2C2416]" />
              </div>
              <span className="text-[#5C4F3D]">Conversions</span>
            </div>
            <div className="text-3xl text-[#2C2416] mb-1">1,284</div>
            <div className="text-sm text-[#5C4F3D]">
              <span className="text-[#D4A574]">↑ 8%</span> vs last week
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#E8DFD3]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F5E6D3] to-[#E8DFD3] flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#2C2416]" />
              </div>
              <span className="text-[#5C4F3D]">Avg. Time</span>
            </div>
            <div className="text-3xl text-[#2C2416] mb-1">4:32</div>
            <div className="text-sm text-[#5C4F3D]">
              <span className="text-[#D4A574]">↑ 18%</span> vs last week
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#E8DFD3]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F5E6D3] to-[#E8DFD3] flex items-center justify-center">
                <Package className="w-5 h-5 text-[#2C2416]" />
              </div>
              <span className="text-[#5C4F3D]">Active Products</span>
            </div>
            <div className="text-3xl text-[#2C2416] mb-1">342</div>
            <div className="text-sm text-[#5C4F3D]">
              <span className="text-[#5C4F3D]">+12</span> this month
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product Management */}
          <div className="bg-white rounded-xl p-6 border border-[#E8DFD3]">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-lg text-[#2C2416]">Product Catalog</h4>
              <button className="text-[#D4A574] hover:text-[#C69563] transition-colors">
                View All
              </button>
            </div>
            <div className="space-y-3">
              {[
                { name: 'Modern Leather Sofa', status: 'Active', views: '2.4k' },
                { name: 'Oak Coffee Table', status: 'Active', views: '1.8k' },
                { name: 'Minimalist Armchair', status: 'Active', views: '1.5k' },
                { name: 'Walnut Dining Table', status: 'Pending', views: '—' },
              ].map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-[#FAFAF8] hover:bg-[#F5F1EB] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E8DFD3] to-[#D4C3B3]" />
                    <div>
                      <div className="text-[#2C2416]">{product.name}</div>
                      <div className="text-sm text-[#5C4F3D]">{product.views} views</div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm ${
                    product.status === 'Active'
                      ? 'bg-[#D4A574]/20 text-[#2C2416]'
                      : 'bg-[#E8DFD3] text-[#5C4F3D]'
                  }`}>
                    {product.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Performing Styles */}
          <div className="bg-white rounded-xl p-6 border border-[#E8DFD3]">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-lg text-[#2C2416]">Top Room Styles</h4>
              <BarChart3 className="w-5 h-5 text-[#5C4F3D]" />
            </div>
            <div className="space-y-4">
              {[
                { style: 'Modern Minimalist', engagement: 92, clicks: '3.2k' },
                { style: 'Scandinavian Cozy', engagement: 85, clicks: '2.8k' },
                { style: 'Industrial Loft', engagement: 78, clicks: '2.3k' },
                { style: 'Mid-Century Modern', engagement: 71, clicks: '1.9k' },
              ].map((room, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#2C2416]">{room.style}</span>
                    <span className="text-sm text-[#5C4F3D]">{room.clicks} clicks</span>
                  </div>
                  <div className="w-full h-2 bg-[#F5F1EB] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#D4A574] to-[#C69563] rounded-full"
                      style={{ width: `${room.engagement}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-gradient-to-br from-[#F5E6D3]/30 to-[#E8DFD3]/30 rounded-xl p-6">
          <h4 className="text-lg text-[#2C2416] mb-4">Quick Actions</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <button className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#E8DFD3] hover:shadow-md transition-all">
              <Upload className="w-5 h-5 text-[#D4A574]" />
              <span className="text-[#2C2416]">Upload Products</span>
            </button>
            <button className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#E8DFD3] hover:shadow-md transition-all">
              <Package className="w-5 h-5 text-[#D4A574]" />
              <span className="text-[#2C2416]">Manage Catalog</span>
            </button>
            <button className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#E8DFD3] hover:shadow-md transition-all">
              <BarChart3 className="w-5 h-5 text-[#D4A574]" />
              <span className="text-[#2C2416]">View Reports</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
