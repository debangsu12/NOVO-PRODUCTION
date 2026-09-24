import React from 'react';
import { ArrowDown, Sparkles, Video, Camera, Compass } from 'lucide-react';
import heroStudioImg from '../assets/images/hero_studio_workspace_1790259063079.jpg';
import { ClapperboardMark } from './Logo';

interface HeroProps {
  onScrollToServices: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToServices, onOpenBooking }) => {
  return (
    <section id="top" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-[#E5DCD5]">
      {/* Background ambient gradient glow */}
      <div 
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#2A8080]/8 blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 right-10 w-[450px] h-[450px] rounded-full bg-[#FFE8DC] blur-[90px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand & Founder Positioning */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#2A8080] mb-4 bg-white/80 border border-[#E5DCD5] px-3 py-1.5 rounded-full w-fit shadow-2xs">
              <ClapperboardMark size={18} />
              <span>Novo Production · Est. 2024</span>
              <span className="text-[#536060]/40">|</span>
              <span className="text-[#536060]">Official Media Agency</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A2E30] leading-[1.08] mb-4 text-balance">
              Debangsu Chakraborty
            </h1>

            <p className="text-sm sm:text-base font-semibold uppercase tracking-widest text-[#2A8080] mb-6">
              Founder &amp; Multimedia Specialist
            </p>

            <p className="text-lg sm:text-xl text-[#536060] font-normal leading-relaxed max-w-2xl mb-8">
              The standard for creators and brands who accept nothing less than extraordinary. We engineer viral dating content concepts, editorial photo retouching, and hyper-retention gaming video editing built to dominate digital feeds.
            </p>

            {/* Quick 3 Pillar Micro Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded bg-white/70 border border-[#E5DCD5] shadow-xs">
                <Compass className="w-4 h-4 text-[#2A8080] shrink-0" />
                <div className="text-xs font-semibold text-[#1A2E30] leading-tight">
                  1. Dating Content Strategy
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded bg-white/70 border border-[#E5DCD5] shadow-xs">
                <Camera className="w-4 h-4 text-[#2A8080] shrink-0" />
                <div className="text-xs font-semibold text-[#1A2E30] leading-tight">
                  2. Photo Retouching
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded bg-white/70 border border-[#E5DCD5] shadow-xs">
                <Video className="w-4 h-4 text-[#2A8080] shrink-0" />
                <div className="text-xs font-semibold text-[#1A2E30] leading-tight">
                  3. Gaming Video Editing
                </div>
              </div>
            </div>

            {/* Action CTA Group */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onScrollToServices}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#C04020] hover:bg-[#9e3217] rounded shadow-sm hover:shadow transition-all inline-flex items-center gap-2"
              >
                <span>Explore Core Offerings</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1A2E30] hover:text-[#2A8080] bg-white border border-[#E5DCD5] hover:border-[#2A8080] rounded transition-all"
              >
                Start Direct Project
              </button>
            </div>

            {/* Credibility Stats */}
            <div className="mt-10 pt-6 border-t border-[#E5DCD5] flex items-center gap-6 sm:gap-10 text-xs text-[#536060]">
              <div>
                <span className="block font-display text-xl sm:text-2xl font-bold text-[#1A2E30] tabular-nums">
                  1,200+
                </span>
                <span className="tracking-wide">Assets Delivered</span>
              </div>
              <div className="w-px h-8 bg-[#E5DCD5]" />
              <div>
                <span className="block font-display text-xl sm:text-2xl font-bold text-[#1A2E30] tabular-nums">
                  4.9 / 5
                </span>
                <span className="tracking-wide">Client Rating</span>
              </div>
              <div className="w-px h-8 bg-[#E5DCD5]" />
              <div>
                <span className="block font-display text-xl sm:text-2xl font-bold text-[#1A2E30] tabular-nums">
                  24–48h
                </span>
                <span className="tracking-wide">Avg Turnaround</span>
              </div>
            </div>

          </div>

          {/* Right Column: Studio Showcase Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-[#E5DCD5] shadow-lg bg-[#FFE8DC]">
              <img
                src={heroStudioImg}
                alt="Novo Production Studio Suite equipped for 4K video editing, color grading and audio mastering"
                className="w-full aspect-4/3 object-cover block"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-300 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Novo Studio Rig</span>
                </div>
                <p className="font-display text-lg font-bold">
                  Color-Calibrated &amp; Acoustic Production Suite
                </p>
                <p className="text-xs text-white/80 mt-1">
                  Equipped with multi-monitor DaVinci Resolve, Premiere Pro &amp; studio-grade monitoring.
                </p>
              </div>
            </div>

            {/* Floating Quality Tag */}
            <div className="absolute -bottom-4 -left-4 sm:left-4 bg-white border border-[#E5DCD5] rounded px-4 py-2.5 shadow-md flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <div className="text-left">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#1A2E30] leading-none">
                  Currently Accepting
                </p>
                <p className="text-[10px] text-[#536060] mt-0.5">
                  Q2 Creative &amp; Post-Production Slots
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
