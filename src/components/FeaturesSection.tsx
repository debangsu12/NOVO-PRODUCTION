import React from 'react';
import { ShieldCheck, Zap, Layers, RefreshCw } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const standards = [
    {
      icon: ShieldCheck,
      title: 'Uncompromising Quality Check',
      description: 'Every timeline, color pass, and audio master undergoes strict multi-point technical inspection before delivery. If it is not right, it never leaves our edit suite.'
    },
    {
      icon: Zap,
      title: 'Rapid 24–48h Turnaround',
      description: 'We respect the speed of social algorithms. Express pipelines ensure your trending hooks, highlight reels, and time-sensitive campaigns launch when interest peaks.'
    },
    {
      icon: Layers,
      title: 'Copyright & Monetization Safety',
      description: 'All background music, sound effects, typography licenses, and 3D assets are 100% legally cleared for YouTube partner monetization, Meta ads, and broadcast.'
    },
    {
      icon: RefreshCw,
      title: 'Frictionless Revision Loop',
      description: 'Clear, collaborative review milestones. Frame-accurate timestamp notes ensure your feedback is translated quickly without endless back-and-forth email chains.'
    }
  ];

  return (
    <section id="standards" className="py-20 bg-[#FFF5F0] border-b border-[#E5DCD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2A8080] mb-2">
            Agency Standards
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A2E30] tracking-tight leading-tight">
            Every Project is a Concrete Commitment
          </h2>
          <p className="text-base sm:text-lg text-[#536060] mt-3 leading-relaxed">
            We have built Novo Production around four core operational promises that dictate every creative and technical decision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {standards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg border border-[#E5DCD5] hover:border-[#2A8080] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded bg-[#FFE8DC] text-[#2A8080] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#1A2E30] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#536060] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
