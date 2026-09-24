import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onSelectServiceLink: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectServiceLink }) => {
  return (
    <footer className="bg-[#142325] text-gray-300 border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5">
            <a href="#top" className="inline-block text-white mb-5 focus-visible:outline-[#2A8080] group transition-transform hover:scale-[1.02]">
              <Logo variant="horizontal" theme="dark" iconSize={44} />
            </a>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed mb-4">
              High-impact media agency founded by Debangsu Chakraborty. Specialized post-production, viral dating concepts, photo retouching, and gaming video editing engineered for algorithmic retention.
            </p>
            <p className="text-xs text-gray-500">
              Kolkata / Global Remote Post-Production Suite
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-[#2A8080] transition-colors">
                  Core 3 Pillars
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-[#2A8080] transition-colors text-amber-400 font-semibold">
                  Key Impact &amp; Growth Metrics
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2A8080] transition-colors">
                  Complete Catalog (17+ Services)
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#2A8080] transition-colors">
                  Founder &amp; Story
                </a>
              </li>
              <li>
                <a href="#standards" className="hover:text-[#2A8080] transition-colors">
                  Agency Commitments
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#2A8080] transition-colors">
                  Book Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Key Offerings Quick Jump */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Featured Pillars
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onSelectServiceLink('content-suggestion')}
                  className="hover:text-[#2A8080] transition-colors text-left"
                >
                  Content Suggestion (Dating Focus)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectServiceLink('photo-editing')}
                  className="hover:text-[#2A8080] transition-colors text-left"
                >
                  Photo Editing &amp; Skin Retouching
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectServiceLink('gaming-video-editing')}
                  className="hover:text-[#2A8080] transition-colors text-left"
                >
                  Gaming Video Editing (4K 60FPS)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectServiceLink('3d-animation')}
                  className="hover:text-[#2A8080] transition-colors text-left"
                >
                  3D Animation &amp; CGI Motion
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectServiceLink('sfx-editing')}
                  className="hover:text-[#2A8080] transition-colors text-left"
                >
                  SFX &amp; Foley Sound Design
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Novo Production. All rights reserved. Designed for Debangsu Chakraborty.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-gray-400 transition-colors cursor-pointer">Confidentiality Protocol</span>
            <span className="hover:text-gray-400 transition-colors cursor-pointer">Commercial Licensing</span>
            <span className="hover:text-gray-400 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
