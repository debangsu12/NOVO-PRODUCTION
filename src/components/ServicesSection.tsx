import React, { useState, useId } from 'react';
import { ChevronDown, ChevronUp, Search, Info, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceItem, ServiceCategory } from '../types/service';
import { CORE_PILLARS, EXTENDED_CATALOG, ALL_SERVICES } from '../data/servicesData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onExploreDetails: (service: ServiceItem) => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onExploreDetails,
  isExpanded,
  onToggleExpand,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputId = useId();

  // Filter items in the expanded catalog
  const filteredCatalog = ALL_SERVICES.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories: { key: ServiceCategory; label: string; count: number }[] = [
    { key: 'all', label: 'All Services', count: ALL_SERVICES.length },
    { key: 'video', label: 'Video Production', count: ALL_SERVICES.filter(s => s.category === 'video').length },
    { key: 'photo', label: 'Photo & Visual', count: ALL_SERVICES.filter(s => s.category === 'photo').length },
    { key: 'strategy', label: 'Creative Strategy', count: ALL_SERVICES.filter(s => s.category === 'strategy').length },
    { key: 'audio', label: 'Audio & Sound FX', count: ALL_SERVICES.filter(s => s.category === 'audio').length },
    { key: '3d', label: '3D & CGI Motion', count: ALL_SERVICES.filter(s => s.category === '3d').length },
    { key: 'design', label: 'Graphic & Print', count: ALL_SERVICES.filter(s => s.category === 'design').length },
  ];

  return (
    <section id="services" className="py-20 bg-[#FFF5F0] transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2A8080] mb-2">
            Core Agency Offerings
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2E30] tracking-tight leading-tight">
            High-Impact Media Production
          </h2>
          <p className="text-base sm:text-lg text-[#536060] mt-3 leading-relaxed">
            Engineered for high algorithmic retention and polished aesthetic impact. Explore our 3 foundational pillars or expand the full catalog below.
          </p>
        </div>

        {/* ====================================================================
            A. INITIAL VIEW (COLLAPSED STATE)
            Must ONLY show the three primary high-level service cards:
            1. Content Suggestion (Dating Focus)
            2. Photo Editing
            3. Gaming Video Editing
            ==================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {CORE_PILLARS.map((pillar) => (
            <article
              key={pillar.id}
              className="group bg-white rounded-lg border border-[#E5DCD5] hover:border-[#2A8080] transition-all duration-300 flex flex-col overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 relative"
            >
              {/* Pillar Image Preview */}
              {pillar.image && (
                <div className="relative aspect-4/3 overflow-hidden bg-[#FFE8DC]">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-[#2A8080] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-xs">
                    {pillar.discountPercentage}% OFF
                  </div>
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-[#1A2E30] text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border border-[#E5DCD5]">
                    Pillar 0{pillar.pillarOrder}
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#536060] mb-2 font-medium">
                    <span className="text-[#2A8080] font-semibold tracking-wider uppercase text-[11px]">
                      {pillar.categoryLabel}
                    </span>
                    <span className="tabular-nums">Est. {pillar.turnaround}</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1A2E30] mb-2 leading-snug group-hover:text-[#2A8080] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#536060] line-clamp-3 mb-4 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-1.5 mb-6 text-xs text-[#1A2E30]/80">
                    {pillar.deliverables.slice(0, 2).map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2A8080] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer with Pricing and Interactive Action Triggers */}
                <div className="pt-4 border-t border-[#E5DCD5]">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-xs text-[#536060] line-through tabular-nums">
                      ₹{pillar.originalPriceINR.toLocaleString('en-IN')}
                    </span>
                    <span className="font-display text-2xl font-bold text-[#1A2E30] tabular-nums">
                      ₹{pillar.salePriceINR.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[11px] text-[#2A8080] font-semibold ml-auto">
                      Save ₹{(pillar.originalPriceINR - pillar.salePriceINR).toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Dual Action Triggers */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onExploreDetails(pillar)}
                      className="px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1A2E30] bg-[#FFF5F0] hover:bg-[#FFE8DC] border border-[#E5DCD5] rounded transition-colors inline-flex items-center justify-center gap-1"
                      title="View complete specifications and deliverables"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => onSelectService(pillar)}
                      className="px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#C04020] hover:bg-[#9e3217] rounded shadow-xs hover:shadow transition-all inline-flex items-center justify-center gap-1"
                      title="Select this package and start booking"
                    >
                      <span>Select</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ====================================================================
            B. "VIEW MORE" EXPANSION TOGGLE TRIGGER
            Interactive button directly associated with the initial service section
            ==================================================================== */}
        <div className="flex flex-col items-center justify-center pt-2 pb-6 border-b border-[#E5DCD5]">
          <button
            onClick={onToggleExpand}
            aria-expanded={isExpanded}
            aria-controls="expanded-catalog-panel"
            className={`inline-flex items-center gap-3 px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest rounded transition-all duration-300 shadow-sm hover:shadow-md ${
              isExpanded
                ? 'bg-white text-[#1A2E30] border-2 border-[#2A8080] hover:bg-[#2A8080]/10'
                : 'bg-[#2A8080] text-white hover:bg-[#1f6161]'
            }`}
          >
            <span>{isExpanded ? 'View Less (Collapse to 3 Pillars)' : `View More (Explore All ${ALL_SERVICES.length} Services)`}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 transition-transform duration-200" />
            ) : (
              <ChevronDown className="w-4 h-4 transition-transform duration-200" />
            )}
          </button>
          
          <p className="text-xs text-[#536060] mt-2">
            {isExpanded
              ? 'Showing full itemized sub-services, specialized packages & audio-visual addons'
              : 'Click to expand 17+ specialized packages: 3D Animation, Foley SFX, Wedding Films & more'}
          </p>
        </div>

        {/* ====================================================================
            EXPANDED CATALOG PANEL (Dynamically revealed when isExpanded = true)
            ==================================================================== */}
        {isExpanded && (
          <div 
            id="expanded-catalog-panel" 
            className="mt-14 pt-6 animate-in fade-in slide-in-from-top-4 duration-400"
          >
            {/* Catalog Subheader */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#E5DCD5]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2A8080] mb-1">
                  Full Service Catalog &amp; Sub-Packages
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1A2E30]">
                  Itemized Production Capabilities ({filteredCatalog.length} Available)
                </h3>
                <p className="text-xs sm:text-sm text-[#536060] mt-1">
                  Filter by creative domain or search for specific technical deliverables.
                </p>
              </div>

              {/* Keyword Search Field */}
              <div className="w-full md:w-72 relative">
                <label htmlFor={searchInputId} className="sr-only">Search services</label>
                <Search className="w-4 h-4 text-[#536060] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id={searchInputId}
                  type="text"
                  placeholder="Search audio, 3D, wedding..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-white border border-[#E5DCD5] focus:border-[#2A8080] focus:ring-1 focus:ring-[#2A8080] rounded text-xs text-[#1A2E30] placeholder:text-[#536060]/60 outline-none transition-all"
                />
              </div>
            </div>

            {/* Interactive Domain Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`whitespace-nowrap px-4 py-2 text-xs font-semibold rounded transition-all shrink-0 ${
                      isActive
                        ? 'bg-[#1A2E30] text-white shadow-xs'
                        : 'bg-white text-[#536060] hover:text-[#1A2E30] border border-[#E5DCD5] hover:border-[#1A2E30]'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`ml-2 text-[10px] py-0.5 px-1.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-[#FFF5F0] text-[#536060]'}`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Catalog Grid */}
            {filteredCatalog.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-lg border border-[#E5DCD5]">
                <p className="text-sm font-semibold text-[#1A2E30]">No matching service packages found.</p>
                <p className="text-xs text-[#536060] mt-1">Try resetting your search query or selecting a different category filter.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                  className="mt-4 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#2A8080] bg-[#2A8080]/10 rounded hover:bg-[#2A8080]/20"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCatalog.map((service) => (
                  <article
                    key={service.id}
                    className="bg-white rounded-lg border border-[#E5DCD5] hover:border-[#2A8080] transition-all p-5 flex flex-col justify-between hover:shadow-lg relative group"
                  >
                    {/* Discount badge */}
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#2A8080] bg-[#2A8080]/10 px-2 py-0.5 rounded">
                        {service.categoryLabel}
                      </span>
                      <span className="text-[10px] font-bold text-[#C04020] bg-[#C04020]/10 px-2 py-0.5 rounded">
                        {service.discountPercentage}% OFF
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display text-lg font-bold text-[#1A2E30] mb-1.5 leading-snug group-hover:text-[#2A8080] transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-xs text-[#536060] line-clamp-2 mb-3 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="text-[11px] text-[#536060] flex items-center justify-between py-2 border-y border-[#E5DCD5]/60 mb-4">
                        <span>Turnaround:</span>
                        <span className="font-semibold text-[#1A2E30]">{service.turnaround}</span>
                      </div>
                    </div>

                    {/* Pricing & Interactive Action Triggers */}
                    <div>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-xs text-[#536060] line-through tabular-nums">
                          ₹{service.originalPriceINR.toLocaleString('en-IN')}
                        </span>
                        <span className="font-display text-xl font-bold text-[#1A2E30] tabular-nums">
                          ₹{service.salePriceINR.toLocaleString('en-IN')}
                        </span>
                      </div>

                      {/* C. Product/Service Navigation Triggers */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => onExploreDetails(service)}
                          className="w-full py-2 text-[11px] font-semibold uppercase tracking-wider text-[#1A2E30] hover:text-[#2A8080] bg-[#FFF5F0] hover:bg-[#FFE8DC] border border-[#E5DCD5] rounded transition-colors text-center"
                        >
                          Explore Details
                        </button>
                        <button
                          onClick={() => onSelectService(service)}
                          className="w-full py-2 text-[11px] font-bold uppercase tracking-wider text-white bg-[#C04020] hover:bg-[#9e3217] rounded shadow-2xs hover:shadow-xs transition-all text-center"
                        >
                          Select Package
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Bottom Collapse Button */}
            <div className="flex justify-center mt-12 pt-6 border-t border-[#E5DCD5]">
              <button
                onClick={onToggleExpand}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#536060] hover:text-[#1A2E30] bg-white border border-[#E5DCD5] hover:border-[#1A2E30] rounded transition-all"
              >
                <span>Return to Streamlined View</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
