import { Button } from './ui/button';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Personalized demo tailored to your catalog',
  'See ROI projections for your brand',
  'Meet our integration team',
  'Get custom pricing for your needs',
];

export function DemoCTA() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#F5E6D3] to-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl text-[#2C2416] mb-6">
              Ready to transform your furniture shopping experience?
            </h2>
            <p className="text-xl text-[#5C4F3D] mb-8 leading-relaxed">
              Schedule a demo with our team to see how RoomCanvas can help you increase engagement and drive sales.
            </p>
            
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#2C2416] flex-shrink-0 mt-0.5" />
                  <span className="text-[#2C2416]">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-white/50">
              <h3 className="text-xl text-[#2C2416] mb-6">Request Your Demo</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    className="bg-[#FAFAF8] border-[#E8DFD3] rounded-lg"
                  />
                  <Input
                    placeholder="Last Name"
                    className="bg-[#FAFAF8] border-[#E8DFD3] rounded-lg"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Work Email"
                  className="bg-[#FAFAF8] border-[#E8DFD3] rounded-lg"
                />
                <Input
                  placeholder="Company Name"
                  className="bg-[#FAFAF8] border-[#E8DFD3] rounded-lg"
                />
                <Input
                  placeholder="Website"
                  className="bg-[#FAFAF8] border-[#E8DFD3] rounded-lg"
                />
                <Button className="w-full bg-[#2C2416] text-white hover:bg-[#3D3020] rounded-lg h-12">
                  Request a Demo
                </Button>
              </form>
              <p className="text-sm text-[#5C4F3D] mt-4 text-center">
                We'll get back to you within 24 hours
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-3xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1614598389565-8d56eddd2f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2ODc3NTA3OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern workspace"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
