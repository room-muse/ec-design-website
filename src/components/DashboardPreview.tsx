export function DashboardPreview() {
  return (
    <div className="w-full max-w-[600px] mx-auto">
      <div className="w-full bg-white/90 backdrop-blur-md rounded-2xl border border-[#E5E2DB] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="border-b border-[#E5E2DB] px-6 py-4 bg-gradient-to-r from-white/50 to-transparent">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-[#6F746B] mb-1">Analytics Dashboard</div>
              <div className="text-lg text-[#121212] font-medium">Performance Overview</div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#bcab87]/10 rounded-lg border border-[#bcab87]/20">
              <div className="w-1.5 h-1.5 rounded-full bg-[#bcab87] animate-pulse" />
              <span className="text-xs text-[#bcab87] font-medium">Live</span>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { label: 'Total views', value: '24,582', change: '+12.3%' },
              { label: 'Product clicks', value: '8,429', change: '+18.7%' },
              { label: 'Avg. session', value: '4:32', change: '+2:14' },
              { label: 'Conversion', value: '5.2%', change: '+1.8%' },
            ].map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-[#FAF8F3] rounded-xl p-4 border border-[#E5E2DB]">
                <div className="text-2xl text-[#121212] font-medium mb-1">{metric.value}</div>
                <div className="text-xs text-[#6F746B] mb-2">{metric.label}</div>
                <div className="inline-flex items-center gap-1 text-xs text-green-600 font-medium">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  {metric.change}
                </div>
              </div>
            ))}
          </div>

          {/* Chart Preview */}
          <div className="bg-gradient-to-br from-white to-[#FAF8F3] rounded-xl p-4 border border-[#E5E2DB]">
            <div className="text-sm text-[#121212] font-medium mb-4">Top products</div>
            <div className="space-y-3">
              {[
                { name: 'Modern Leather Sofa', width: '92%' },
                { name: 'Oak Coffee Table', width: '85%' },
                { name: 'Minimalist Armchair', width: '78%' },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-[#121212]">{item.name}</span>
                  </div>
                  <div className="h-2 bg-[#F5F2EC] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#bcab87] rounded-full"
                      style={{ width: item.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}