/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { ServicesSection } from './components/ServicesSection';
import { KeyImpactSection } from './components/KeyImpactSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceItem } from './types/service';
import { ALL_SERVICES } from './data/servicesData';

export default function App() {
  const [isCatalogExpanded, setIsCatalogExpanded] = useState(false);
  const [activeDetailService, setActiveDetailService] = useState<ServiceItem | null>(null);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<ServiceItem | null>(null);

  // Scroll helpers
  const handleScrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When a user clicks "Select Package" on any card
  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceForBooking(service);
    handleScrollToContact();
  };

  // When a user clicks "Explore Details"
  const handleExploreDetails = (service: ServiceItem) => {
    setActiveDetailService(service);
  };

  // Direct package booking from inside modal
  const handleBookFromModal = (service: ServiceItem) => {
    setActiveDetailService(null);
    setSelectedServiceForBooking(service);
    handleScrollToContact();
  };

  // Header quick booking button
  const handleOpenGeneralBooking = (serviceName?: string) => {
    if (serviceName) {
      const match = ALL_SERVICES.find(s => s.title.toLowerCase().includes(serviceName.toLowerCase()));
      if (match) setSelectedServiceForBooking(match);
    }
    handleScrollToContact();
  };

  // Footer quick jump
  const handleFooterSelectService = (serviceId: string) => {
    const match = ALL_SERVICES.find(s => s.id === serviceId);
    if (match) {
      setActiveDetailService(match);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF5F0] text-[#1A2E30]">
      {/* Top Navigation */}
      <Navbar
        onOpenBooking={handleOpenGeneralBooking}
        onExploreServices={handleScrollToServices}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Founder & Studio positioning */}
        <Hero
          onScrollToServices={handleScrollToServices}
          onOpenBooking={handleScrollToContact}
        />

        {/* Agency Capability Highlights Ticker */}
        <Marquee />

        {/* Primary Services Section with STRICT 3-card collapsed view + View More expansion logic */}
        <ServicesSection
          isExpanded={isCatalogExpanded}
          onToggleExpand={() => setIsCatalogExpanded(!isCatalogExpanded)}
          onSelectService={handleSelectService}
          onExploreDetails={handleExploreDetails}
        />

        {/* Key Impact Section: D3-powered growth metrics, retention curves & hours saved counters */}
        <KeyImpactSection
          onOpenBooking={handleScrollToContact}
        />

        {/* About Section featuring Founder Debangsu Chakraborty */}
        <AboutSection
          onOpenBooking={handleScrollToContact}
        />

        {/* Agency Commitments & Quality Standards */}
        <FeaturesSection />

        {/* Inquiries & Interactive Consultation Form */}
        <ContactSection
          selectedService={selectedServiceForBooking}
          onClearSelectedService={() => setSelectedServiceForBooking(null)}
        />
      </main>

      {/* Footer */}
      <Footer onSelectServiceLink={handleFooterSelectService} />

      {/* Dedicated Service Exploration Modal (Triggered by 'Explore Details') */}
      <ServiceDetailModal
        service={activeDetailService}
        onClose={() => setActiveDetailService(null)}
        onBookPackage={handleBookFromModal}
      />
    </div>
  );
}
