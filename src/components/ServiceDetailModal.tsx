import React, { useEffect } from 'react';
import { X, CheckCircle2, Clock, Wrench, Target, Sparkles, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types/service';
import { ClapperboardMark } from './Logo';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookPackage: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookPackage,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const savings = service.originalPriceINR - service.salePriceINR;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      <div 
        className="relative bg-white rounded-xl border border-[#E5DCD5] shadow-2xl max-w-2xl w-full overflow-hidden text-left animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#FFF5F0] border-b border-[#E5DCD5] p-6 pr-14 relative">
          <div className="flex items-center gap-3 mb-2">
            <ClapperboardMark size={22} />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#2A8080] bg-[#2A8080]/15 px-2.5 py-0.5 rounded">
              {service.categoryLabel}
            </span>
            <span className="text-[10px] font-bold text-[#C04020] bg-[#C04020]/15 px-2.5 py-0.5 rounded">
              {service.discountPercentage}% OFF Active Special
            </span>
          </div>

          <h3 id="modal-service-title" className="font-display text-2xl sm:text-3xl font-bold text-[#1A2E30] leading-tight">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#536060] mt-1.5 leading-relaxed">
            {service.tagline}
          </p>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-5 right-5 p-2 rounded-full text-[#536060] hover:text-[#1A2E30] hover:bg-white/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Service Image Preview if available */}
          {service.image && (
            <div className="rounded-lg overflow-hidden border border-[#E5DCD5] aspect-16/9 bg-[#FFE8DC]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {/* Pricing Card */}
          <div className="bg-[#FFE8DC]/40 border border-[#E5DCD5] rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs text-[#536060] font-medium">Standard Investment</p>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-sm text-[#536060] line-through tabular-nums">
                  ₹{service.originalPriceINR.toLocaleString('en-IN')}
                </span>
                <span className="font-display text-3xl font-bold text-[#1A2E30] tabular-nums">
                  ₹{service.salePriceINR.toLocaleString('en-IN')}
                </span>
                <span className="text-xs font-semibold text-[#2A8080]">
                  (Save ₹{savings.toLocaleString('en-IN')})
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#536060] sm:text-right">
              <Clock className="w-4 h-4 text-[#2A8080]" />
              <div>
                <span className="font-semibold text-[#1A2E30] block">Estimated Turnaround</span>
                <span>{service.turnaround}</span>
              </div>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A2E30] mb-2">
              Scope of Work &amp; Architecture
            </h4>
            <p className="text-sm text-[#536060] leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Key Deliverables */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A2E30] mb-3">
              Included Deliverables
            </h4>
            <ul className="grid grid-cols-1 gap-2.5">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#1A2E30] bg-[#FFF5F0]/60 p-2.5 rounded border border-[#E5DCD5]/70">
                  <CheckCircle2 className="w-4 h-4 text-[#2A8080] shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Toolchain & Target Profile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-3.5 bg-white rounded border border-[#E5DCD5]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A2E30] mb-2">
                <Wrench className="w-3.5 h-3.5 text-[#2A8080]" />
                <span>Software Toolchain</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {service.software.map((sw, sIdx) => (
                  <span key={sIdx} className="text-[11px] bg-[#FFF5F0] text-[#1A2E30] px-2 py-0.5 rounded border border-[#E5DCD5]">
                    {sw}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3.5 bg-white rounded border border-[#E5DCD5]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A2E30] mb-2">
                <Target className="w-3.5 h-3.5 text-[#2A8080]" />
                <span>Ideal Profile</span>
              </div>
              <p className="text-xs text-[#536060] leading-relaxed">
                {service.idealFor}
              </p>
            </div>
          </div>

          {/* Highlight feature banner */}
          <div className="p-3.5 rounded bg-[#2A8080]/10 border border-[#2A8080]/20 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-[#2A8080] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-[#1A2E30]">Agency Signature Benchmark</p>
              <p className="text-xs text-[#536060] mt-0.5 leading-snug">
                {service.highlightFeature}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Actions Footer */}
        <div className="bg-[#FFF5F0] border-t border-[#E5DCD5] p-5 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#536060] hover:text-[#1A2E30] bg-transparent"
          >
            Close Details
          </button>

          <button
            onClick={() => onBookPackage(service)}
            className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#C04020] hover:bg-[#9e3217] rounded shadow-sm hover:shadow transition-all inline-flex items-center gap-2"
          >
            <span>Proceed with Package</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
