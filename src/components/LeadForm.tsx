import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail, Building2, Globe, User } from 'lucide-react';

export function LeadForm() {
  return (
    <section id="lead-form" className="relative bg-[#8E8D8D] py-40">
      <div className="relative max-w-[1400px] mx-auto px-8">
        <div className="max-w-[700px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#BF964B] border border-[#BF964B] shadow-[0_4px_12px_rgba(191,150,75,0.2)] rounded-full text-sm text-white font-medium mb-6">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Let's get started
            </div>
            <h2 className="text-4xl text-[#FFFFFF] mb-4 tracking-tight" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
              Get in Touch
            </h2>
            <p className="text-lg text-[#FFFFFF]/90 leading-[1.6]">
              Contact our team to see how RoomMuse can transform your furniture catalog
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-[#FFFFFF] rounded-lg border border-[#E6E6E6] shadow-[0_8px_20px_rgba(10,10,10,0.06)] overflow-hidden">
            {/* Form Header Bar */}
            <div className="bg-[#FAFAFA] border-b border-[#E6E6E6] px-8 py-4">
              <h3 className="text-sm text-[#6B6B6B] font-medium tracking-wide">Contact Sales Form</h3>
            </div>
            
            <div className="p-8">
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-[#121212] font-medium mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6F746B]" />
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-white border-[#E5E2DB] rounded-lg h-12 pl-12 focus:border-[#BF964B] focus:ring-2 focus:ring-[#BF964B]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-[#121212] font-medium mb-2">
                    Work email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6F746B]" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      className="bg-white border-[#E5E2DB] rounded-lg h-12 pl-12 focus:border-[#BF964B] focus:ring-2 focus:ring-[#BF964B]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm text-[#121212] font-medium mb-2">
                    Company
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6F746B]" />
                    <Input
                      id="company"
                      placeholder="Your Company Name"
                      className="bg-white border-[#E5E2DB] rounded-lg h-12 pl-12 focus:border-[#BF964B] focus:ring-2 focus:ring-[#BF964B]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm text-[#121212] font-medium mb-2">
                    Website
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6F746B]" />
                    <Input
                      id="website"
                      placeholder="www.yourcompany.com"
                      className="bg-white border-[#E5E2DB] rounded-lg h-12 pl-12 focus:border-[#BF964B] focus:ring-2 focus:ring-[#BF964B]/20 transition-all"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#BF964B] text-white hover:bg-[#A67F3D] rounded h-12 shadow-lg shadow-[#BF964B]/20 hover:shadow-xl hover:shadow-[#BF964B]/30 transition-all font-medium"
                >
                  Contact Sales
                </Button>
              </form>
            </div>

            {/* Footer */}
            <div className="bg-gradient-to-r from-[#FAF8F3] to-transparent px-8 py-5 border-t border-[#E5E2DB]">
              <div className="flex items-center justify-center gap-2 text-sm text-[#6F746B]">
                <svg className="w-5 h-5 text-[#BF964B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                We'll respond within 24 hours
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            {[
              { label: 'Quick setup', value: '< 2 weeks' },
              { label: 'Response time', value: '< 24 hours' },
              { label: 'Support', value: 'Dedicated' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-xl text-[#FFFFFF] font-medium mb-1">{item.value}</div>
                <div className="text-sm text-[#FFFFFF]/80">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}