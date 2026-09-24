import React from 'react';
import { Award, Film, CheckCircle2 } from 'lucide-react';
import founderPortraitImg from '../assets/images/founder_portrait_1790259135592.jpg';
import { ClapperboardMark } from './Logo';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 bg-[#FFE8DC]/60 border-y border-[#E5DCD5] transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Founder Environmental Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-[#E5DCD5] shadow-xl bg-white">
              <img
                src={founderPortraitImg}
                alt="Debangsu Chakraborty, Founder & Multimedia Specialist at Novo Production"
                className="w-full aspect-3/4 object-cover block"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <ClapperboardMark size={22} />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#2A8080] bg-white/95 px-2 py-0.5 rounded">
                    Creative Director
                  </span>
                </div>
                <p className="font-display text-2xl font-bold">Debangsu Chakraborty</p>
                <p className="text-xs text-white/80 mt-0.5">
                  Founder &amp; Lead Multimedia Specialist · Novo Production
                </p>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#2A8080] text-white p-4 sm:p-5 rounded-lg shadow-lg border border-[#1f6161] text-center">
              <span className="font-display text-3xl sm:text-4xl font-bold block tabular-nums leading-none">
                2+
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider block mt-1">
                Years of Craft
              </span>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2A8080] mb-2">
              The Agency Philosophy
            </p>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2E30] tracking-tight leading-tight mb-6">
              Made with intention. Executed with technical mastery.
            </h2>

            <p className="text-base sm:text-lg text-[#536060] leading-relaxed mb-6">
              Every video timeline, color pass, and audio master at Novo Production is engineered to answer a simple standard: <span className="text-[#1A2E30] font-semibold italic">would we stake our agency name on this?</span> What began as an exacting personal devotion to audio-visual pacing has grown into a specialized studio trusted by creators, stream teams, and forward-looking brands.
            </p>

            <p className="text-sm sm:text-base text-[#536060] leading-relaxed mb-8">
              Unlike traditional agencies that pass your project through layers of junior delegates, every primary asset is overseen directly by specialized multimedia hands. Whether cutting high-stakes gaming clutches, grading beauty skin tones, or orchestrating viral relationship hooks—your creative intent remains uncompromised.
            </p>

            {/* Quantitative Proof Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 py-6 border-y border-[#E5DCD5] mb-8">
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#2A8080] block tabular-nums">
                  4.9
                </span>
                <span className="text-xs text-[#536060] mt-1 block">
                  Avg. Client Rating
                </span>
              </div>
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#2A8080] block tabular-nums">
                  1,200+
                </span>
                <span className="text-xs text-[#536060] mt-1 block">
                  Assets Delivered
                </span>
              </div>
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#2A8080] block tabular-nums">
                  98%
                </span>
                <span className="text-xs text-[#536060] mt-1 block">
                  Repeat Retainers
                </span>
              </div>
            </div>

            {/* Guarantees List */}
            <div className="space-y-2 mb-8 text-xs sm:text-sm text-[#1A2E30]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2A8080] shrink-0" />
                <span>Dedicated Creative Director attention on every timeline cut</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2A8080] shrink-0" />
                <span>Zero copyright strikes guarantee on all soundtracks and sound design</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2A8080] shrink-0" />
                <span>High-bitrate archival delivery with complete layered project transparency</span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#C04020] hover:bg-[#9e3217] rounded shadow-xs hover:shadow transition-all inline-flex items-center gap-2"
            >
              <span>Work Directly With Debangsu</span>
              <Film className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
