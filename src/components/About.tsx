import cmuLogo from 'figma:asset/147ae3818526359e2f2c0cea9237de3c0e0b2a05.png';
import projectOlympusLogo from 'figma:asset/d6d48e9265cdae5b34f9a28835dee497fd515fd9.png';
import evelynChenPhoto from 'figma:asset/95a363c49e89da6c03503e9c01a253adf48b2577.png';
import adityaPhoto from 'figma:asset/0813bebd73e8d1c277a7a25f62f81f8dafbdd6a9.png';
import chiungChenPhoto from 'figma:asset/431ccf0e96957ca3dcb4f9912f2ae9a9d83e6583.png';
import angelaPhoto from 'figma:asset/699bdcf8c3bd95b5fc88a48f24d741fa6316424b.png';
import sushrutPhoto from 'figma:asset/807591418c19cb0a900d3773136b75a500fb4557.png';
import jamieChungPhoto from 'figma:asset/92021697531bca78fe49ea3a6c62167069721e8e.png';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const softwareDevelopmentTeam = [
    { 
      name: 'Aditya Rao', 
      role: 'Software Developer', 
      photo: adityaPhoto,
      bio: 'Master of Electrical and Computer Engineering graduate student at Carnegie Mellon University with an EECS background from UC Berkeley, and internship experience at SpaceX and Blue Origin in avionics, robotics, and machine learning.'
    },
    { 
      name: 'Chiung-Chen Tsai', 
      role: 'Software Developer', 
      photo: chiungChenPhoto,
      bio: 'Master of Electrical and Computer Engineering graduate student at Carnegie Mellon University with experience in software engineering, machine learning, and hardware systems through academic research and industry work.'
    },
    { 
      name: 'Angela Qu', 
      role: 'Software Developer', 
      photo: angelaPhoto,
      bio: 'Master of Artificial Intelligence graduate student at Carnegie Mellon University and former Software Engineering Intern at Adobe, with experience in software engineering, ML DevOps, and LLM research.'
    },
    { 
      name: 'Sushrut Kulkarni', 
      role: 'Lead Product Manager', 
      photo: sushrutPhoto,
      bio: 'Master of Information Security and Policy Management graduate student at Carnegie Mellon University with experience in cybersecurity and product strategy.'
    },
  ];

  const designTeam = [
    { 
      name: 'Jamie Chung', 
      role: 'Design Lead', 
      photo: jamieChungPhoto,
      bio: 'Creative design professional specializing in user experience and visual design.'
    },
  ];

  const teams = [
    { name: 'Marketing Team', count: 3 },
  ];

  return (
    <section id="about" className="relative bg-[#FAFAFA] py-40">
      <div className="relative max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl text-[#0A0A0A] mb-4 leading-[1.15]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, letterSpacing: '-0.02em' }}>
            About RoomMuse
          </h2>
        </div>

        {/* Content Card */}
        <div className="bg-[#FFFFFF] rounded-2xl border border-[#E6E6E6] shadow-[0_8px_20px_rgba(10,10,10,0.06)] p-12 max-w-[1000px] mx-auto">
          {/* Description */}
          <p className="text-xl text-[#121212] leading-[1.6] text-center mb-12 font-medium">
            Backed by Carnegie Mellon University's Swartz Center for Entrepreneurship, 
            <span className="text-[#bcab87]"> RoomMuse</span> bridges the gap between creativity, technology, 
            and commerce to make design accessible to everyone.
          </p>

          {/* Logos - Horizontal Layout */}
          <div className="flex justify-center items-center gap-12 mb-12">
            <div className="bg-white rounded-2xl p-6 border border-[#E5E2DB]">
              <img 
                src={cmuLogo} 
                alt="Carnegie Mellon University Swartz Center for Entrepreneurship"
                className="h-20 w-auto object-contain"
              />
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E5E2DB]">
              <img 
                src={projectOlympusLogo} 
                alt="Carnegie Mellon University Project Olympus"
                className="h-20 w-auto object-contain"
              />
            </div>
          </div>

          {/* LinkedIn Link */}
          <div className="flex justify-center mb-12">
            <a 
              href="https://www.linkedin.com/company/109528242/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded hover:bg-[#004182] transition-all font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Follow us on LinkedIn
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Team Section */}
          <div className="pt-8 border-t border-[#E5E2DB]">
            <h3 className="text-center text-2xl text-[#121212] mb-10" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>Team</h3>
            
            {/* CEO - Evelyn - Centered */}
            <div className="flex flex-col items-center mb-16">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                <img 
                  src={evelynChenPhoto} 
                  alt="Evelyn"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl text-[#121212] font-semibold mb-1">Evelyn Chen</h4>
              <p className="text-sm text-[#bcab87] font-medium mb-6">Founder & CEO</p>
              
              {/* Info Box */}
              <div className="max-w-[700px] w-full bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5E2DB]">
                <ul className="text-sm text-[#6F746B] leading-relaxed space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#bcab87] mt-2 flex-shrink-0" />
                    <span>MBA candidate at Carnegie Mellon University's Tepper School of Business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#bcab87] mt-2 flex-shrink-0" />
                    <span>Finance & analytics background with Wall Street experience at UBS, HSBC, and LSEG and early-stage startup fundraising in fintech and healthcare</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Software Development Team */}
            <div className="mb-12">
              <h4 className="text-center text-xl text-[#121212] mb-6" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>Software Development Team</h4>
              <div className="max-w-[900px] mx-auto grid grid-cols-2 gap-6">
                {softwareDevelopmentTeam.map((member, idx) => {
                  const needsScaleUp = ['Aditya Rao', 'Sushrut Kulkarni'].includes(member.name);
                  
                  return (
                    <div key={idx} className="bg-[#FFFFFF] rounded-xl p-6 border border-[#E5E2DB] flex flex-col items-center text-center">
                      <div className="w-28 h-28 rounded-full overflow-hidden mb-4 bg-[#F5F2EC]">
                        <img 
                          src={member.photo} 
                          alt={member.name}
                          className={`w-full h-full object-cover ${needsScaleUp ? 'scale-[1.4]' : ''}`}
                        />
                      </div>
                      <h4 className="text-lg text-[#121212] font-semibold mb-1">{member.name}</h4>
                      <p className="text-sm text-[#bcab87] font-medium mb-4">{member.role}</p>
                      <p className="text-sm text-[#6F746B] leading-relaxed">{member.bio}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Design Team & Marketing Team Combined */}
            <div className="max-w-[900px] mx-auto grid grid-cols-2 gap-6">
              {/* Jamie Chung */}
              {designTeam.map((member, idx) => (
                <div key={idx} className="bg-[#FFFFFF] rounded-xl p-6 border border-[#E5E2DB] flex flex-col items-center text-center">
                  <div className="w-28 h-28 rounded-full overflow-hidden mb-4 bg-[#F5F2EC]">
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg text-[#121212] font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-[#bcab87] font-medium mb-4">{member.role}</p>
                  <p className="text-sm text-[#6F746B] leading-relaxed">{member.bio}</p>
                </div>
              ))}
              
              {/* Marketing Team */}
              {teams.map((team, idx) => (
                <div key={idx} className="bg-[#FFFFFF] rounded-xl p-8 border border-[#E5E2DB] flex flex-col items-center text-center">
                  <div className="text-5xl text-[#bcab87] font-bold mb-4">{team.count}</div>
                  <h4 className="text-base text-[#121212] font-semibold leading-tight">{team.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-8 mt-8 border-t border-[#E5E2DB]">
            <p className="text-center text-sm text-[#6F746B]">
              RoomMuse is developed through Carnegie Mellon's entrepreneurship ecosystem
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}