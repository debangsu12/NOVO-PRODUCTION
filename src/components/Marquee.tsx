import React from 'react';

export const Marquee: React.FC = () => {
  const highlights = [
    'Viral Dating Concepts',
    'Editorial Photo Retouching',
    '4K 60FPS Gaming Edits',
    'High-Retention 3-Sec Hooks',
    'Frame-Accurate Foley & SFX',
    'Licensed Emotion-Matched BMG',
    'Photorealistic 3D Modeling & CGI',
    'CMYK Press-Ready Publishing',
    '24–48h Fast Turnaround'
  ];

  return (
    <section className="bg-[#2A8080] py-3 overflow-hidden border-y border-[#1f6161]" aria-label="Brand highlights ticker">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* First set */}
        {highlights.map((item, idx) => (
          <div key={`h1-${idx}`} className="flex items-center gap-8 text-xs font-bold uppercase tracking-[0.18em] text-white">
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" aria-hidden="true" />
          </div>
        ))}
        {/* Second set for infinite seamless loop */}
        {highlights.map((item, idx) => (
          <div key={`h2-${idx}`} className="flex items-center gap-8 text-xs font-bold uppercase tracking-[0.18em] text-white">
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
};
