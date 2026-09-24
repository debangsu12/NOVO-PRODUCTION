import React, { useState, useEffect } from 'react';
import { Mail, Clock, MessageSquare, CheckCircle, Send, Sparkles } from 'lucide-react';
import { ALL_SERVICES } from '../data/servicesData';
import { ServiceItem } from '../types/service';
import { Logo } from './Logo';

interface ContactSectionProps {
  selectedService: ServiceItem | null;
  onClearSelectedService: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedService,
  onClearSelectedService,
}) => {
  const [serviceId, setServiceId] = useState<string>(selectedService ? selectedService.id : 'content-suggestion');
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [timeline, setTimeline] = useState<'asap' | '1-2weeks' | 'flexible'>('asap');
  const [projectNotes, setProjectNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setServiceId(selectedService.id);
    }
  }, [selectedService]);

  const activeServiceObj = ALL_SERVICES.find((s) => s.id === serviceId) || ALL_SERVICES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !email) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setClientName('');
    setEmail('');
    setPhone('');
    setProjectNotes('');
    onClearSelectedService();
  };

  return (
    <section id="contact" className="py-20 bg-[#1A2E30] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Inquiries Info */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <Logo variant="horizontal" theme="dark" iconSize={44} />
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2A8080] mb-2">
              Start a Conversation
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 text-white">
              Questions or Custom Projects?
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-8">
              Whether you need our 3 core pillars (viral dating strategy, photo retouching, or gaming video editing) or a specialized audio-visual addon, reach out directly. No bots or lengthy ticket queues.
            </p>

            <ul className="space-y-6 text-sm text-gray-300">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-[#2A8080]/20 text-[#2A8080] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-400">Direct Inquiries</span>
                  <span className="font-semibold text-white">contact@novoproduction.com</span>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-[#2A8080]/20 text-[#2A8080] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-400">Studio Hours</span>
                  <span className="font-semibold text-white">Mon–Sat, 9:00 AM – 8:00 PM IST</span>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-[#2A8080]/20 text-[#2A8080] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-400">Average Response Time</span>
                  <span className="font-semibold text-white">Under 45 Minutes During Active Hours</span>
                </div>
              </li>
            </ul>

            {/* Founder Note */}
            <div className="mt-10 p-5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
              <p className="font-semibold text-white mb-1">
                Direct Creative Attention
              </p>
              <p className="leading-relaxed">
                "We limit our active client roster every month to guarantee every video, photo, and 3D asset receives full directorial focus."
              </p>
              <p className="mt-2 text-[#2A8080] font-medium">— Debangsu Chakraborty, Founder</p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Package Form */}
          <div className="lg:col-span-7 bg-white text-[#1A2E30] rounded-xl p-6 sm:p-8 border border-[#E5DCD5] shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-10 animate-in zoom-in-95 duration-200">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1A2E30] mb-2">
                  Inquiry Received!
                </h3>
                <p className="text-sm text-[#536060] max-w-md mx-auto mb-6">
                  Thank you, <span className="font-semibold text-[#1A2E30]">{clientName}</span>. Debangsu and the Novo Production team will review your project brief for <span className="font-semibold text-[#2A8080]">{activeServiceObj.title}</span> and respond to <span className="font-semibold text-[#1A2E30]">{email}</span> within 45 minutes.
                </p>

                <div className="bg-[#FFF5F0] border border-[#E5DCD5] rounded-lg p-4 max-w-md mx-auto text-left text-xs space-y-1.5 mb-6">
                  <p><strong className="text-[#1A2E30]">Selected Package:</strong> {activeServiceObj.title}</p>
                  <p><strong className="text-[#1A2E30]">Estimated Investment:</strong> ₹{activeServiceObj.salePriceINR.toLocaleString('en-IN')}</p>
                  <p><strong className="text-[#1A2E30]">Turnaround:</strong> {activeServiceObj.turnaround}</p>
                  <p><strong className="text-[#1A2E30]">Timeline Preference:</strong> {timeline === 'asap' ? 'Express / ASAP' : timeline === '1-2weeks' ? '1–2 Weeks' : 'Flexible'}</p>
                </div>

                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1A2E30] bg-[#FFF5F0] hover:bg-[#FFE8DC] border border-[#E5DCD5] rounded transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-display text-2xl font-bold text-[#1A2E30]">
                      Reserve Package / Consultation
                    </h3>
                    <span className="text-[11px] font-semibold text-[#2A8080] bg-[#2A8080]/10 px-2 py-0.5 rounded">
                      Fast Reply
                    </span>
                  </div>
                  <p className="text-xs text-[#536060]">
                    Select a service package below or discuss a bespoke creative retainer.
                  </p>
                </div>

                {/* Service Selection Dropdown */}
                <div>
                  <label htmlFor="service-select" className="block text-xs font-bold uppercase tracking-wider text-[#1A2E30] mb-1.5">
                    Selected Service / Package
                  </label>
                  <select
                    id="service-select"
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FFF5F0] border border-[#E5DCD5] rounded text-sm text-[#1A2E30] focus:ring-1 focus:ring-[#2A8080] focus:border-[#2A8080] outline-none transition-all"
                  >
                    <optgroup label="Core Pillars">
                      {ALL_SERVICES.filter(s => s.isPillar).map(s => (
                        <option key={s.id} value={s.id}>
                          ⭐ {s.title} — ₹{s.salePriceINR.toLocaleString('en-IN')}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Specialized Catalog">
                      {ALL_SERVICES.filter(s => !s.isPillar).map(s => (
                        <option key={s.id} value={s.id}>
                          {s.title} — ₹{s.salePriceINR.toLocaleString('en-IN')}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Active Package Preview Strip */}
                <div className="p-3 bg-[#FFE8DC]/40 border border-[#E5DCD5] rounded flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-[#1A2E30] block">{activeServiceObj.title}</span>
                    <span className="text-[#536060]">{activeServiceObj.turnaround} turnaround · {activeServiceObj.categoryLabel}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#536060] line-through block tabular-nums">₹{activeServiceObj.originalPriceINR.toLocaleString('en-IN')}</span>
                    <span className="font-bold text-sm text-[#1A2E30] tabular-nums">₹{activeServiceObj.salePriceINR.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Name & Email inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="client-name" className="block text-xs font-bold uppercase tracking-wider text-[#1A2E30] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E5DCD5] rounded text-sm text-[#1A2E30] focus:ring-1 focus:ring-[#2A8080] focus:border-[#2A8080] outline-none transition-all placeholder:text-[#536060]/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="client-email" className="block text-xs font-bold uppercase tracking-wider text-[#1A2E30] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      placeholder="alex@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E5DCD5] rounded text-sm text-[#1A2E30] focus:ring-1 focus:ring-[#2A8080] focus:border-[#2A8080] outline-none transition-all placeholder:text-[#536060]/50"
                    />
                  </div>
                </div>

                {/* Phone & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="client-phone" className="block text-xs font-bold uppercase tracking-wider text-[#1A2E30] mb-1.5">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      placeholder="+91 or international"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E5DCD5] rounded text-sm text-[#1A2E30] focus:ring-1 focus:ring-[#2A8080] focus:border-[#2A8080] outline-none transition-all placeholder:text-[#536060]/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="client-timeline" className="block text-xs font-bold uppercase tracking-wider text-[#1A2E30] mb-1.5">
                      Target Delivery Timeline
                    </label>
                    <select
                      id="client-timeline"
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E5DCD5] rounded text-sm text-[#1A2E30] focus:ring-1 focus:ring-[#2A8080] focus:border-[#2A8080] outline-none transition-all"
                    >
                      <option value="asap">Express / ASAP (Priority Slot)</option>
                      <option value="1-2weeks">Within 1 to 2 Weeks</option>
                      <option value="flexible">Flexible / Planning Stage</option>
                    </select>
                  </div>
                </div>

                {/* Project notes */}
                <div>
                  <label htmlFor="project-notes" className="block text-xs font-bold uppercase tracking-wider text-[#1A2E30] mb-1.5">
                    Project Details / Specific Links
                  </label>
                  <textarea
                    id="project-notes"
                    rows={3}
                    placeholder="Share any YouTube/Twitch/Drive links, reference styles, or specific footage length..."
                    value={projectNotes}
                    onChange={(e) => setProjectNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E5DCD5] rounded text-sm text-[#1A2E30] focus:ring-1 focus:ring-[#2A8080] focus:border-[#2A8080] outline-none transition-all placeholder:text-[#536060]/50"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-[#C04020] hover:bg-[#9e3217] rounded shadow-sm hover:shadow transition-all inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Request</span>
                </button>

                <p className="text-[11px] text-[#536060] text-center">
                  🔒 No spam, ever. Your footage and creative project details remain strictly confidential.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
