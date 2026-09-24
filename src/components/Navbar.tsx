import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
  onExploreServices: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onExploreServices }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/95 backdrop-blur-md border-b border-[#E5DCD5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Brand Name & Specialist Lockup (Clean, streamlined, perfectly fitted inside header) */}
        <a 
          href="#top" 
          className="flex flex-col justify-center py-1 focus-visible:outline-[#2A8080] group transition-opacity hover:opacity-90"
          aria-label="Novo Production - Home"
        >
          <span className="font-display font-bold text-lg sm:text-xl tracking-wider text-[#1A2E30] group-hover:text-[#2A8080] transition-colors leading-none">
            NOVO PRODUCTION
          </span>
          <span 
            className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] text-[#D97706] mt-1 leading-none italic"
            style={{ fontFamily: "'Permanent Marker', cursive, sans-serif" }}
          >
            MULTIMEDIA SPECIALIST
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-widest text-[#536060]">
          <a 
            href="#services" 
            onClick={onExploreServices}
            className="hover:text-[#2A8080] transition-colors py-1"
          >
            Core Services
          </a>
          <a 
            href="#impact" 
            className="hover:text-[#2A8080] transition-colors py-1 text-[#2A8080] font-bold"
          >
            Key Impact
          </a>
          <a 
            href="#catalog" 
            onClick={onExploreServices}
            className="hover:text-[#2A8080] transition-colors py-1"
          >
            Full Catalog
          </a>
          <a 
            href="#about" 
            className="hover:text-[#2A8080] transition-colors py-1"
          >
            Founder & Story
          </a>
          <a 
            href="#standards" 
            className="hover:text-[#2A8080] transition-colors py-1"
          >
            Standards
          </a>
          <a 
            href="#contact" 
            className="hover:text-[#2A8080] transition-colors py-1"
          >
            Inquire
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#C04020] hover:bg-[#9e3217] rounded transition-all shadow-sm hover:shadow"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1A2E30] hover:text-[#2A8080] focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E5DCD5] px-6 py-5 shadow-lg animate-in fade-in duration-200">
          <div className="flex flex-col gap-4 text-sm font-semibold tracking-wider uppercase text-[#1A2E30]">
            <a 
              href="#services" 
              onClick={() => { setMobileMenuOpen(false); onExploreServices(); }}
              className="py-1 hover:text-[#2A8080]"
            >
              Core Services
            </a>
            <a 
              href="#impact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#2A8080] text-[#2A8080] font-bold"
            >
              Key Impact
            </a>
            <a 
              href="#catalog" 
              onClick={() => { setMobileMenuOpen(false); onExploreServices(); }}
              className="py-1 hover:text-[#2A8080]"
            >
              Full Catalog (17+ Services)
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#2A8080]"
            >
              Founder & Story
            </a>
            <a 
              href="#standards" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#2A8080]"
            >
              Agency Standards
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#2A8080]"
            >
              Contact & Inquiries
            </a>
            <div className="pt-2 border-t border-[#E5DCD5]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-center text-white bg-[#C04020] hover:bg-[#9e3217] rounded"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
