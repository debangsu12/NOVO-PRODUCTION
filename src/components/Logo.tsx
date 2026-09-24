import React from 'react';

interface LogoProps {
  /**
   * - 'mark': Just the clapperboard + glowing play icon (ideal for avatars, navbar icon, favicon)
   * - 'horizontal': Clapperboard on left, NOVO Production + MULTIMEDIA SPECIALIST on right
   * - 'vertical': Full stacked badge exactly matching the brand image
   */
  variant?: 'mark' | 'horizontal' | 'vertical';
  /**
   * Color theme: 'light' (default) or 'dark' (for dark navy/black footers)
   */
  theme?: 'light' | 'dark';
  /**
   * Custom height/width class (for 'mark' variant) or outer container class
   */
  className?: string;
  /**
   * Icon size in pixels when in mark or horizontal mode
   */
  iconSize?: number;
}

/**
 * Pure scalable vector clapperboard icon replicating the official NOVO Production brand artwork:
 * - Glossy teal/cyan clapperboard slate with ambient bokeh
 * - Tilted open clapstick with diagonal stripes & metallic hinge plate with rivets
 * - Bright neon lime-green play button at center with soft illumination
 */
export const ClapperboardMark: React.FC<{ size?: number; className?: string }> = ({
  size = 40,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Novo Production Clapperboard"
    >
      <defs>
        {/* Slate body gradient */}
        <linearGradient id="npSlateGrad" x1="15" y1="35" x2="105" y2="115" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00A3A6" />
          <stop offset="40%" stopColor="#007780" />
          <stop offset="85%" stopColor="#00454B" />
          <stop offset="100%" stopColor="#002E33" />
        </linearGradient>

        {/* Top glossy specular reflection */}
        <linearGradient id="npGlossGrad" x1="20" y1="38" x2="60" y2="75" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#5EEAD4" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        {/* Clapstick dark stripe */}
        <linearGradient id="npStripeDark" x1="0" y1="0" x2="100" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#004C52" />
          <stop offset="100%" stopColor="#00353A" />
        </linearGradient>

        {/* Clapstick light stripe */}
        <linearGradient id="npStripeLight" x1="0" y1="0" x2="100" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#67E8F9" />
          <stop offset="100%" stopColor="#2DD4BF" />
        </linearGradient>

        {/* Play button lime gradient */}
        <linearGradient id="npPlayGrad" x1="48" y1="52" x2="78" y2="78" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#BEF264" />
          <stop offset="50%" stopColor="#84CC16" />
          <stop offset="100%" stopColor="#4ADE80" />
        </linearGradient>

        {/* Hinge plate metallic */}
        <linearGradient id="npHingeGrad" x1="18" y1="18" x2="42" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2DD4BF" />
          <stop offset="40%" stopColor="#0D9488" />
          <stop offset="100%" stopColor="#042F2E" />
        </linearGradient>

        {/* Soft radial glow behind play icon */}
        <radialGradient id="npGlow" cx="60" cy="72" r="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4ADE80" stopOpacity="0.6" />
          <stop offset="40%" stopColor="#06B6D4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
        </radialGradient>

        {/* Drop shadow filter for play button */}
        <filter id="npPlayShadow" x="35" y="42" width="55" height="55" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.35" />
          <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#84CC16" floodOpacity="0.5" />
        </filter>

        {/* Board drop shadow */}
        <filter id="npBoardShadow" x="8" y="10" width="104" height="106" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#00181A" floodOpacity="0.3" />
        </filter>

        {/* Clip path for slate body to confine gloss */}
        <clipPath id="slateClip">
          <rect x="22" y="38" width="76" height="66" rx="10" />
        </clipPath>

        {/* Clip path for tilted clapstick */}
        <clipPath id="stickClip">
          <rect x="2" y="0" width="76" height="15" rx="3" />
        </clipPath>
      </defs>

      <g filter="url(#npBoardShadow)">
        {/* Slate Body (Rounded Rectangle) */}
        <rect
          x="22"
          y="38"
          width="76"
          height="66"
          rx="10"
          fill="url(#npSlateGrad)"
          stroke="#14B8A6"
          strokeWidth="1.2"
        />

        {/* Ambient Bokeh and Glow orbs inside slate */}
        <g clipPath="url(#slateClip)">
          {/* Blue-green bokeh spheres */}
          <circle cx="40" cy="85" r="16" fill="#0284C7" fillOpacity="0.35" />
          <circle cx="75" cy="88" r="18" fill="#0D9488" fillOpacity="0.4" />
          <circle cx="58" cy="65" r="22" fill="url(#npGlow)" />
          <circle cx="82" cy="55" r="10" fill="#38BDF8" fillOpacity="0.2" />

          {/* Diagonal Glass Specular Highlight across top slate */}
          <path
            d="M 22 40 L 98 40 L 68 85 L 22 70 Z"
            fill="url(#npGlossGrad)"
          />

          {/* Subtle bottom edge rim highlight */}
          <path
            d="M 24 98 C 45 104, 75 104, 96 98"
            stroke="#5EEAD4"
            strokeWidth="0.75"
            strokeOpacity="0.4"
            fill="none"
          />
        </g>

        {/* Tilted Open Clapstick (Angled ~ -15 degrees from top-left hinge) */}
        <g transform="translate(30, 29) rotate(-14)">
          {/* Striped stick */}
          <g clipPath="url(#stickClip)">
            <rect x="2" y="0" width="76" height="15" fill="#004C52" />
            {/* Alternating light mint/cyan diagonal stripes */}
            <polygon points="10,0 20,0 12,15 2,15" fill="url(#npStripeLight)" />
            <polygon points="28,0 38,0 30,15 20,15" fill="url(#npStripeLight)" />
            <polygon points="46,0 56,0 48,15 38,15" fill="url(#npStripeLight)" />
            <polygon points="64,0 74,0 66,15 56,15" fill="url(#npStripeLight)" />
          </g>
          {/* Stick border */}
          <rect
            x="2"
            y="0"
            width="76"
            height="15"
            rx="3"
            stroke="#14B8A6"
            strokeWidth="1"
            fill="none"
          />
        </g>

        {/* Lower stationary stick bar of the clapper slate */}
        <g transform="translate(22, 38)">
          <path
            d="M 0 4 C 0 1.8 1.8 0 4 0 L 72 0 C 74.2 0 76 1.8 76 4 L 76 14 L 0 14 Z"
            fill="#00353A"
          />
          {/* Alternating diagonal stripes on bottom bar */}
          <g clipPath="url(#bottomBarClip)">
            <clipPath id="bottomBarClip">
              <path d="M 0 4 C 0 1.8 1.8 0 4 0 L 72 0 C 74.2 0 76 1.8 76 4 L 76 14 L 0 14 Z" />
            </clipPath>
            <polygon points="12,0 22,0 14,14 4,14" fill="url(#npStripeLight)" />
            <polygon points="30,0 40,0 32,14 22,14" fill="url(#npStripeLight)" />
            <polygon points="48,0 58,0 50,14 40,14" fill="url(#npStripeLight)" />
            <polygon points="66,0 76,0 68,14 58,14" fill="url(#npStripeLight)" />
          </g>
          <line x1="0" y1="14" x2="76" y2="14" stroke="#004C52" strokeWidth="1" />
        </g>

        {/* Left Metallic Hinge Bracket Plate */}
        <path
          d="M 19 28 C 19 23 23 20 28 20 L 37 20 C 40 20 42 22 42 25 L 42 35 C 42 38 39 41 36 41 L 32 41 C 32 45 32 48 32 50 C 32 53 30 55 27 55 L 24 55 C 21 55 19 53 19 50 Z"
          fill="url(#npHingeGrad)"
          stroke="#2DD4BF"
          strokeWidth="0.8"
        />

        {/* Rivets/Screws on hinge plate */}
        <circle cx="25" cy="27" r="1.8" fill="#E2E8F0" stroke="#042F2E" strokeWidth="0.5" />
        <circle cx="35" cy="27" r="1.8" fill="#E2E8F0" stroke="#042F2E" strokeWidth="0.5" />
        <circle cx="34" cy="35" r="1.6" fill="#CBD5E1" stroke="#042F2E" strokeWidth="0.5" />
        <circle cx="25" cy="48" r="1.8" fill="#E2E8F0" stroke="#042F2E" strokeWidth="0.5" />

        {/* Center Glowing Neon Lime Play Button */}
        <g filter="url(#npPlayShadow)">
          <path
            d="M 52 57.5 C 52 55.8 53.9 54.8 55.4 55.7 L 72.8 66.2 C 74.2 67.1 74.2 69.1 72.8 70.0 L 55.4 80.5 C 53.9 81.4 52 80.4 52 78.7 Z"
            fill="url(#npPlayGrad)"
          />
          {/* Inner highlight for 3D play button bevel */}
          <path
            d="M 54 60 L 69 68 L 54 76 Z"
            stroke="#ECFDF5"
            strokeWidth="0.75"
            strokeOpacity="0.6"
            fill="none"
          />
        </g>
      </g>
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  className = '',
  iconSize,
}) => {
  const isDark = theme === 'dark';

  // 1. MARK ONLY (clapperboard + play button)
  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <ClapperboardMark size={iconSize || 36} />
      </div>
    );
  }

  // 2. HORIZONTAL LAYOUT (Clapperboard on left, NOVO Production + MULTIMEDIA SPECIALIST on right)
  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {/* Brand Icon Mark */}
        <ClapperboardMark size={iconSize || 42} />

        {/* Typography Block */}
        <div className="flex flex-col justify-center leading-none select-none">
          {/* NOVO */}
          <span
            className={`font-display font-extrabold text-lg sm:text-xl tracking-[0.14em] uppercase ${
              isDark ? 'text-white' : 'text-[#00828A]'
            }`}
          >
            NOVO
          </span>

          {/* Production */}
          <span
            className={`font-mono text-xs sm:text-[13px] font-bold tracking-[0.08em] mt-0.5 ${
              isDark ? 'text-[#2DD4BF]' : 'text-[#00828A]'
            }`}
          >
            Production
          </span>

          {/* Navy accent line */}
          <div
            className={`h-[1.5px] w-full my-1 rounded-full ${
              isDark ? 'bg-cyan-400/60' : 'bg-[#1E3A5F]'
            }`}
          />

          {/* MULTIMEDIA SPECIALIST Yellow Brush Subtitle */}
          <span
            className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-[#F5B800] italic"
            style={{
              fontFamily: "'Permanent Marker', cursive, sans-serif",
              letterSpacing: '0.08em',
              textShadow: isDark ? '0 0 8px rgba(245, 184, 0, 0.4)' : 'none',
            }}
          >
            MULTIMEDIA SPECIALIST
          </span>
        </div>
      </div>
    );
  }

  // 3. VERTICAL FULL BADGE (Matching the exact uploaded brand logo artwork)
  return (
    <div
      className={`inline-flex flex-col items-center justify-center text-center select-none ${className}`}
    >
      {/* Top Clapperboard */}
      <div className="mb-2">
        <ClapperboardMark size={iconSize || 88} />
      </div>

      {/* NOVO */}
      <div
        className={`font-display font-extrabold text-2xl sm:text-3xl tracking-[0.18em] uppercase ${
          isDark ? 'text-white' : 'text-[#00828A]'
        }`}
      >
        NOVO
      </div>

      {/* Production */}
      <div
        className={`font-mono text-base sm:text-lg font-bold tracking-[0.08em] -mt-0.5 ${
          isDark ? 'text-[#2DD4BF]' : 'text-[#00828A]'
        }`}
      >
        Production
      </div>

      {/* Horizontal Divider Line */}
      <div
        className={`w-full max-w-[200px] h-[3px] rounded-full my-2 ${
          isDark ? 'bg-cyan-400' : 'bg-[#1B3558]'
        }`}
      />

      {/* MULTIMEDIA SPECIALIST in Yellow Script */}
      <div
        className="text-xs sm:text-sm font-bold uppercase tracking-[0.12em] text-[#F5B800] italic"
        style={{
          fontFamily: "'Permanent Marker', cursive, sans-serif",
          textShadow: isDark ? '0 0 10px rgba(245, 184, 0, 0.4)' : 'none',
        }}
      >
        MULTIMEDIA SPECIALIST
      </div>
    </div>
  );
};

export default Logo;
