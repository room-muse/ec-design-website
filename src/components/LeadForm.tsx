import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail, Building2, Globe, User } from 'lucide-react';
import { useState } from 'react';

// Get Formspree endpoint from environment variable or use placeholder
// Replace with your Formspree endpoint: https://formspree.io/f/YOUR_FORM_ID
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/YOUR_FORM_ID';

export function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your interest! We will contact you soon.',
        });
        // Reset form
        setFormData({ name: '', email: '', company: '', website: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section id="lead-form" className="relative bg-white">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F6F3] via-white to-[#F5F1EB] opacity-60" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#D4A574]/10 to-transparent blur-3xl" />
      
      <div className="relative max-w-[1400px] mx-auto px-8 py-20">
        <div className="max-w-[700px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#9B826A]/10 rounded-full text-sm text-[#9B826A] mb-6">
              <div className="w-2 h-2 rounded-full bg-[#9B826A] animate-pulse" />
              Let's get started
            </div>
            <h2 className="text-4xl text-[#2B2520] mb-4 tracking-tight font-medium">
              Get in Touch
            </h2>
            <p className="text-lg text-[#7D6B5A]">
              Contact our team to see how RoomMuse can transform your furniture catalog
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-[#E8E4DE] shadow-2xl shadow-[#9B826A]/10 overflow-hidden">
            <div className="p-8">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm text-[#2B2520] font-medium mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7D6B5A]" />
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white border-[#E8E4DE] rounded-xl h-12 pl-12 focus:border-[#9B826A] focus:ring-2 focus:ring-[#9B826A]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-[#2B2520] font-medium mb-2">
                    Work email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7D6B5A]" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white border-[#E8E4DE] rounded-xl h-12 pl-12 focus:border-[#9B826A] focus:ring-2 focus:ring-[#9B826A]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm text-[#2B2520] font-medium mb-2">
                    Company
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7D6B5A]" />
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="bg-white border-[#E8E4DE] rounded-xl h-12 pl-12 focus:border-[#9B826A] focus:ring-2 focus:ring-[#9B826A]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm text-[#2B2520] font-medium mb-2">
                    Website
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7D6B5A]" />
                    <Input
                      id="website"
                      name="website"
                      placeholder="www.yourcompany.com"
                      value={formData.website}
                      onChange={handleChange}
                      className="bg-white border-[#E8E4DE] rounded-xl h-12 pl-12 focus:border-[#9B826A] focus:ring-2 focus:ring-[#9B826A]/20 transition-all"
                    />
                  </div>
                </div>

                {submitStatus && (
                  <div
                    className={`p-4 rounded-xl ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#9B826A] to-[#8A7159] text-white hover:from-[#8A7159] hover:to-[#7A6149] rounded-xl h-12 shadow-xl shadow-[#9B826A]/30 hover:shadow-2xl hover:shadow-[#9B826A]/40 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Contact Sales'}
                </Button>
              </form>
            </div>

            {/* Footer */}
            <div className="bg-gradient-to-r from-[#F8F6F3] to-transparent px-8 py-5 border-t border-[#E8E4DE]">
              <div className="flex items-center justify-center gap-2 text-sm text-[#7D6B5A]">
                <svg className="w-5 h-5 text-[#9B826A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <div className="text-xl text-[#2B2520] font-medium mb-1">{item.value}</div>
                <div className="text-sm text-[#7D6B5A]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}