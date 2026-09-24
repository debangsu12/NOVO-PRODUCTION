import { ServiceItem } from '../types/service';
import datingConceptImg from '../assets/images/dating_content_concept_1790259081141.jpg';
import photoRetouchImg from '../assets/images/photo_retouching_showcase_1790259099400.jpg';
import gamingVideoImg from '../assets/images/gaming_video_editing_1790259115379.jpg';

export const CORE_PILLARS: ServiceItem[] = [
  {
    id: 'content-suggestion',
    title: 'Content Suggestion (Dating Focus)',
    category: 'strategy',
    categoryLabel: 'Creative Strategy',
    tagline: 'High-conversion viral dating narratives, psychological hooks & social frameworks',
    description: 'Data-driven content ideation and growth strategy with specialized focus on dating, relationship banter, and lifestyle storytelling. Includes viral hook formulation, trend forecasting, and tailored release calendars.',
    discountPercentage: 20,
    originalPriceINR: 799,
    salePriceINR: 639,
    isPillar: true,
    pillarOrder: 1,
    image: datingConceptImg,
    turnaround: '24–48 Hours',
    deliverables: [
      '10 Proven High-Retention Dating Script Blueprints',
      'Viral Hook Variations & Psychologically Tested Angles',
      'Comprehensive 30-Day Content Publishing Schedule',
      'Competitor Niche Gap & Trend Opportunity Brief'
    ],
    software: ['Notion Strategy Ops', 'Trendlytics', 'Metrical Insights'],
    idealFor: 'Creators, dating coaches, couples vloggers, and podcast hosts looking to scale organic reach.',
    highlightFeature: 'Bespoke Dating Conversation Formula engineered for maximum comment engagement.',
    sampleOutcome: 'Average +140% comment rate and higher video completion rates on Reels & TikTok.'
  },
  {
    id: 'photo-editing',
    title: 'Photo Editing & Retouching',
    category: 'photo',
    categoryLabel: 'Visual Branding',
    tagline: 'Magazine-grade skin retouching, color grading & aesthetic brand identity',
    description: 'Professional high-end photo retouching, cinematic color grading, non-destructive skin texture refinement, background clean-up, and thumbnail-ready compositing for personal brands and studios.',
    discountPercentage: 30,
    originalPriceINR: 999,
    salePriceINR: 699,
    isPillar: true,
    pillarOrder: 2,
    image: photoRetouchImg,
    turnaround: '24–36 Hours',
    deliverables: [
      'High-Resolution Master Retouched RAW/TIFF/JPEG exports',
      'Frequency Separation Skin Smoothing (Natural Micro-Texture)',
      'Custom Cinematic LUT Color Grading & Tone Balancing',
      'Distraction & Blemish Removal with Clean Shadows'
    ],
    software: ['Adobe Photoshop 2026', 'Capture One Pro', 'Lightroom Classic'],
    idealFor: 'Photographers, creators, models, e-commerce owners, and executives seeking pristine imagery.',
    highlightFeature: 'Preserved authentic dermal grain with luxury commercial magazine finish.',
    sampleOutcome: 'Pristine, publication-ready imagery ready for print, billboards, and social media.'
  },
  {
    id: 'gaming-video-editing',
    title: 'Gaming Video Editing',
    category: 'video',
    categoryLabel: 'High-Paced Post-Production',
    tagline: 'Fast-paced, hyper-retention gameplay edits for YouTube, Shorts & Twitch',
    description: 'High-energy montages, clutch-kill highlight reels, animated pop-in subtitles, memes sync, dynamic zoom-ins, and sound-punched pacing calibrated specifically for modern gaming channels.',
    discountPercentage: 30,
    originalPriceINR: 1999,
    salePriceINR: 1399,
    isPillar: true,
    pillarOrder: 3,
    image: gamingVideoImg,
    turnaround: '48 Hours',
    deliverables: [
      'Full 4K 60FPS High-Bitrate Render (YouTube/Twitch Ready)',
      '3 Optimized Vertical Cutdowns (9:16 Shorts / Reels / TikTok)',
      'Custom Animated Sound-Synced Subtitles & Lower Thirds',
      'Copyright-Cleared Dynamic Gaming Soundtrack Sync'
    ],
    software: ['Adobe Premiere Pro', 'After Effects 2026', 'DaVinci Resolve Studio'],
    idealFor: 'Streamers, esports players, competitive gaming channels, and content creators.',
    highlightFeature: 'Algorithmic 3-second pacing curve keeping audience watch time above 70%.',
    sampleOutcome: 'Exponential viewer retention spikes and higher click-through rates.'
  }
];

export const EXTENDED_CATALOG: ServiceItem[] = [
  {
    id: 'technical-video-editing',
    title: 'Technical Video Editing',
    category: 'video',
    categoryLabel: 'Video Production',
    tagline: 'Precision cuts, multi-cam timelines & broadcast color management',
    description: 'Precision multi-track timeline editing, multi-cam sync, technical color correction, audio leveling, and export optimization for broadcast, corporate events, and documentary workflows.',
    discountPercentage: 25,
    originalPriceINR: 2499,
    salePriceINR: 1874,
    isPillar: false,
    turnaround: '48–72 Hours',
    deliverables: [
      'Multi-Cam Sync & Multi-Angle Seamless Switching',
      'Rec.709 & HDR Color Conform and Technical Grading',
      'Clean Audio Mastering (-14 LUFS Broadcast Standards)',
      'Uncompressed ProRes 422 HQ / MP4 Deliverables'
    ],
    software: ['DaVinci Resolve Studio', 'Adobe Premiere Pro'],
    idealFor: 'Production houses, corporate agencies, keynote presenters, and filmmakers.',
    highlightFeature: 'Pixel-perfect pacing and zero frame-drop delivery.'
  },
  {
    id: 'bhakti-religion-video-editing',
    title: 'Bhakti & Religion Video Editing',
    category: 'video',
    categoryLabel: 'Video Production',
    tagline: 'Soulful spiritual edits, serene transitions & sacred audio synchrony',
    description: 'Devotional, cultural, and spiritual video editing designed with serene transitions, sacred visual overlays, Sanskrit/vernacular typography, and tranquil background score integration.',
    discountPercentage: 20,
    originalPriceINR: 1999,
    salePriceINR: 1599,
    isPillar: false,
    turnaround: '24–48 Hours',
    deliverables: [
      'Aesthetic Sacred Particle FX & Ethereal Transition Overlays',
      'Synchronized Mantra/Bhajan Audio Enhancement',
      'Devotional Typography Subtitles with Vernacular Support',
      'Optimized Formats for YouTube & Festival Broadcasts'
    ],
    software: ['Adobe Premiere Pro', 'After Effects', 'Audition'],
    idealFor: 'Spiritual organizations, bhajan singers, temples, and cultural creators.',
    highlightFeature: 'Deep emotive resonance matched to spiritual tempo.'
  },
  {
    id: 'vlogging-video-editing',
    title: 'Vlogging Video Editing',
    category: 'video',
    categoryLabel: 'Video Production',
    tagline: 'Engaging storytelling, seamless jump-cuts & lifestyle color palettes',
    description: 'Dynamic cuts, jump-cut pacing, narrative arch assembly, sound design, animated travel maps, and upbeat color treatments crafted for lifestyle and daily vloggers.',
    discountPercentage: 25,
    originalPriceINR: 1799,
    salePriceINR: 1349,
    isPillar: false,
    turnaround: '36 Hours',
    deliverables: [
      'Full Vlog Story Structure & Dead Air Trimming',
      'B-roll Integration with Smooth Speed Ramps',
      'Lively Lower-Thirds, Sound Effects & Royalty-Free Music',
      '1x Vertical Teaser for Instagram Stories'
    ],
    software: ['Premiere Pro', 'Final Cut Pro', 'Motion'],
    idealFor: 'Travel vloggers, lifestyle creators, and day-in-the-life channels.',
    highlightFeature: 'Cinematic B-roll stabilization and personality-focused cut cadence.'
  },
  {
    id: 'wedding-video-editing',
    title: 'Wedding Video Editing',
    category: 'video',
    categoryLabel: 'Video Production',
    tagline: 'Timeless cinematic wedding films with emotional storytelling',
    description: 'Cinematic wedding films with emotional narrative arcs, multi-cam ceremony synchrony, romantic warm color grading, licensed emotional soundtrack sync, and highlight reels.',
    discountPercentage: 20,
    originalPriceINR: 4999,
    salePriceINR: 3999,
    isPillar: false,
    turnaround: '5–7 Days',
    deliverables: [
      'Full Cinematic 4K Wedding Highlight Film (3–7 mins)',
      'Full Ceremony & Reception Multi-Cam Archive Edit',
      'Instagram Cinematic Reel Cut with Audio Vows Sync',
      'Teaser Trailer (60 Seconds) for Instant Sharing'
    ],
    software: ['DaVinci Resolve Studio', 'Premiere Pro', 'iZotope RX'],
    idealFor: 'Wedding cinematographers, studios, and couples wanting timeless heirlooms.',
    highlightFeature: 'Tear-jerker emotional vow sync with filmic color palettes.'
  },
  {
    id: 'theme-video-editing',
    title: 'Theme Video Editing',
    category: 'video',
    categoryLabel: 'Video Production',
    tagline: 'Concept-driven edits aligned to cohesive aesthetic art direction',
    description: 'Concept-driven edits constructed around tailored themes (vintage analog, cyberpunk, minimalist luxury, seasonal, or brand-specific) with bespoke motion motifs and color treatments.',
    discountPercentage: 25,
    originalPriceINR: 2199,
    salePriceINR: 1649,
    isPillar: false,
    turnaround: '48 Hours',
    deliverables: [
      'Concept Art Direction & Moodboard Execution',
      'Thematic Custom Transitions, Textures & Grain Overlays',
      'Sound Design Tailored to the Narrative Aesthetic',
      'Social Platform Formats (16:9, 1:1, 9:16)'
    ],
    software: ['After Effects', 'Premiere Pro', 'Blender'],
    idealFor: 'Brand commercials, fashion lines, music videos, and creative campaigns.',
    highlightFeature: 'Cohesive, distinct visual identity from intro to outro.'
  },
  {
    id: 'photo-to-video-editing',
    title: 'Photo to Video Editing',
    category: 'video',
    categoryLabel: 'Video Production',
    tagline: 'Breathe parallax motion and cinematic life into still photography',
    description: 'Transform your still photos into mesmerizing video showcases using 2.5D parallax camera moves, particle depth, gentle zooms, and musical sync for product ads or memory reels.',
    discountPercentage: 30,
    originalPriceINR: 1499,
    salePriceINR: 1049,
    isPillar: false,
    turnaround: '24 Hours',
    deliverables: [
      '2.5D Parallax Camera Depth Separation',
      'Smooth Fluid Transitions Between Still Assets',
      'Ambient Lighting & Motion Dust Overlays',
      'Audio Beat Synchronization'
    ],
    software: ['After Effects', 'Photoshop'],
    idealFor: 'Real estate agents, photographers, legacy portfolios, and product drops.',
    highlightFeature: 'Depth-map layered 3D camera pan from single 2D images.'
  },
  {
    id: 'graphic-designing',
    title: 'Graphic Designing',
    category: 'design',
    categoryLabel: 'Graphic & Print',
    tagline: 'Pixel-perfect digital assets, brand systems & promotional collateral',
    description: 'Custom graphics for social feeds, marketing banners, launch posters, and promotional campaigns created with modern grid systems, balanced typography, and export readiness.',
    discountPercentage: 25,
    originalPriceINR: 1299,
    salePriceINR: 974,
    isPillar: false,
    turnaround: '24–48 Hours',
    deliverables: [
      'High-Resolution Vector SVG, PNG & Source Files',
      'Custom Brand-Aligned Typography & Color Composition',
      'Multiple Size Ratios for Meta, X, LinkedIn & Web',
      '2 Rounds of Interactive Revisions'
    ],
    software: ['Adobe Illustrator', 'Photoshop', 'Figma'],
    idealFor: 'Founders, businesses, marketing agencies, and community managers.',
    highlightFeature: 'Ultra-clean vector precision ready for scale without pixelation.'
  },
  {
    id: 'thumbnail-generation',
    title: 'Thumbnail Generation',
    category: 'design',
    categoryLabel: 'Graphic & Print',
    tagline: 'High-CTR YouTube and streaming thumbnails engineered to win clicks',
    description: 'Eye-catching, psychologically calibrated thumbnails with high visual contrast, emotive facial cutouts, clean 3-word typographic hooks, and optimized mobile legibility.',
    discountPercentage: 30,
    originalPriceINR: 499,
    salePriceINR: 349,
    isPillar: false,
    turnaround: '12–24 Hours',
    deliverables: [
      '3 High-CTR Thumbnail Design Variations for A/B Testing',
      'Mobile Small-Screen Contrast Validation',
      'Subject Cutout & Rim-Light Highlighting',
      'Full HD 1920x1080 Zero-Artifact JPEG/PNG'
    ],
    software: ['Photoshop CC', 'Lightroom'],
    idealFor: 'YouTubers, podcast producers, and video publishers demanding higher CTR.',
    highlightFeature: 'A/B test ready variants optimized for YouTube mobile recommendation shelf.'
  },
  {
    id: 'media-encoding',
    title: 'Media Encoding & Transcoding',
    category: 'video',
    categoryLabel: 'Video Production',
    tagline: 'Lossless compression, broadcast compliance & multi-codec mastery',
    description: 'Professional encoding for streaming platforms, broadcast deliveries, OTT networks, and web embeds. Target bitrates, zero macro-blocking, and correct audio metadata.',
    discountPercentage: 25,
    originalPriceINR: 899,
    salePriceINR: 674,
    isPillar: false,
    turnaround: '12 Hours',
    deliverables: [
      'H.264, HEVC / H.265, AV1, and Apple ProRes Transcodes',
      'Strict File Size Target Optimization (Up to 60% file reduction)',
      'Embedded Subtitles / Closed Caption Tracks (SRT/VTT)',
      'Audio Loudness Normalization'
    ],
    software: ['HandBrake', 'Adobe Media Encoder', 'FFmpeg CLI'],
    idealFor: 'Videographers uploading large files, web developers, and broadcast networks.',
    highlightFeature: 'Lossless perceptual visual quality at a fraction of raw file size.'
  },
  {
    id: 'sfx-upgrading',
    title: 'SFX Upgrading & Polish',
    category: 'audio',
    categoryLabel: 'Audio & Sound',
    tagline: 'Elevate flat audio with studio-grade sound effects and spatial layers',
    description: 'Replace generic or muddy stock sound effects with pristine foley, whooshes, impacts, and natural textures sourced from top-tier professional acoustic libraries.',
    discountPercentage: 20,
    originalPriceINR: 1199,
    salePriceINR: 959,
    isPillar: false,
    turnaround: '24 Hours',
    deliverables: [
      'Complete Acoustic Audit of Your Video Timeline',
      'Custom Foley, Impact & Ambient Replacement Tracks',
      'Spatial Stereo Panning for Immersive Depth',
      'Stems Export for Seamless Video Re-linking'
    ],
    software: ['Ableton Live', 'Avid Pro Tools', 'Adobe Audition'],
    idealFor: 'Cinematographers, motion designers, and video editors.',
    highlightFeature: 'Studio-recorded 96kHz 24-bit sound effects libraries.'
  },
  {
    id: 'bmg-upgrading',
    title: 'BMG Upgrading & Curation',
    category: 'audio',
    categoryLabel: 'Audio & Sound',
    tagline: 'Replace generic stock audio with licensed, high-impact scores',
    description: 'Curate, license, and replace uninspired background music with emotion-matched compositions that complement your story without clashing with spoken voiceovers.',
    discountPercentage: 20,
    originalPriceINR: 999,
    salePriceINR: 799,
    isPillar: false,
    turnaround: '24 Hours',
    deliverables: [
      'Curated Selection of 3 Mood-Matched Licensed Tracks',
      'Smart Ducking Under Voice Dialogue',
      'Dynamic Tempo Matching to Cut Points',
      'Full YouTube Commercial Monetization Clearance'
    ],
    software: ['Logic Pro X', 'Audition'],
    idealFor: 'Commercial creators, corporate brands, and YouTubers wanting copyright safety.',
    highlightFeature: '100% strike-free copyright clearance with high emotive resonance.'
  },
  {
    id: 'sfx-editing',
    title: 'SFX Editing & Sound Design',
    category: 'audio',
    categoryLabel: 'Audio & Sound',
    tagline: 'Detailed frame-by-frame foley placement and multi-layer soundscapes',
    description: 'Frame-accurate sound design layering, risers, sub-drops, cinematic hits, and mechanical textures tailored to match on-screen movement and visual pacing.',
    discountPercentage: 25,
    originalPriceINR: 1099,
    salePriceINR: 824,
    isPillar: false,
    turnaround: '36 Hours',
    deliverables: [
      'Frame-Accurate Foley Alignment to On-Screen Action',
      'Multi-Layer Cinematic Sound Build-Ups & Drops',
      'EQ Sculpting to Prevent Frequency Mud',
      'Mixed WAV & Final Master Audio Track'
    ],
    software: ['Pro Tools Studio', 'FabFilter Suite'],
    idealFor: 'Short film creators, 3D animators, commercial directors, and gamers.',
    highlightFeature: 'Sub-bass punch and tactile acoustic feedback on every cut.'
  },
  {
    id: 'bmg-editing',
    title: 'BMG Editing & Beat Slicing',
    category: 'audio',
    categoryLabel: 'Audio & Sound',
    tagline: 'Custom audio restructuring, seamless loops & precision cut sync',
    description: 'Remix, extend, or condense your background music track to match your video length precisely. Seamless loop points, tempo shifts, and dramatic beat drops.',
    discountPercentage: 25,
    originalPriceINR: 999,
    salePriceINR: 749,
    isPillar: false,
    turnaround: '24 Hours',
    deliverables: [
      'Inaudible Cut/Splice Transitions and Loop Extensions',
      'Beat-Aligned Pacing Markers for Your Video Editor',
      'Custom Intro Build-Ups and Decisive Outro Finishes',
      'Mastered 24-bit 48kHz WAV Delivery'
    ],
    software: ['Logic Pro', 'Audition'],
    idealFor: 'Commercial editors, documentary makers, and event producers.',
    highlightFeature: 'Zero awkward fade-outs; songs end naturally with the scene.'
  },
  {
    id: '3d-modeling',
    title: '3D Modeling & Asset Creation',
    category: '3d',
    categoryLabel: '3D & CGI',
    tagline: 'Clean topology, hard-surface and organic 3D models tailored to specs',
    description: 'High-detail 3D models for commercial products, props, packaging, architecture, or game assets with clean quad topology, UV unwrapping, and PBR textures.',
    discountPercentage: 20,
    originalPriceINR: 4999,
    salePriceINR: 3999,
    isPillar: false,
    turnaround: '4–6 Days',
    deliverables: [
      'Production-Ready 3D Mesh (FBX, OBJ, GLTF, .blend)',
      '4K PBR Textures (Albedo, Normal, Roughness, Metallic)',
      'Optimized Poly Count for Real-Time or Cinematic Use',
      'Turn-Table Inspection Renders'
    ],
    software: ['Blender 4.3', 'Autodesk Maya', 'Substance Painter'],
    idealFor: 'Product designers, ecommerce brands, indie game devs, and architects.',
    highlightFeature: 'Strict manifold geometry with game-engine and CAD compatibility.'
  },
  {
    id: '3d-animation',
    title: '3D Animation & Motion',
    category: '3d',
    categoryLabel: '3D & CGI',
    tagline: 'Fluid camera moves, mechanical assemblies & cinematic product reveals',
    description: 'Fluid, lifelike 3D motion for product demonstrations, exploded mechanical views, holographic UI reveals, and dynamic camera fly-throughs.',
    discountPercentage: 20,
    originalPriceINR: 7999,
    salePriceINR: 6399,
    isPillar: false,
    turnaround: '6–8 Days',
    deliverables: [
      'Full HD / 4K 60FPS Rendered Animation Passes',
      'Smooth Bezier Camera Trajectories with Motion Blur',
      'Exploded Views and Material Transformations',
      'Composited with Sound FX & Lighting Flare'
    ],
    software: ['Blender Cycles', 'Cinema 4D', 'After Effects'],
    idealFor: 'Tech hardware startups, cosmetic launches, and marketing trailers.',
    highlightFeature: 'Physics-accurate product mechanics and luxury lighting sweeps.'
  },
  {
    id: '3d-rendering',
    title: '3D Photorealistic Rendering',
    category: '3d',
    categoryLabel: '3D & CGI',
    tagline: 'Studio-quality lighting, caustics & photorealistic material finishes',
    description: 'Photorealistic multi-angle renders with raytraced lighting, realistic depth of field, caustics, and studio reflections for catalogues, advertisements, and pitch decks.',
    discountPercentage: 25,
    originalPriceINR: 3499,
    salePriceINR: 2624,
    isPillar: false,
    turnaround: '3–4 Days',
    deliverables: [
      '4x Ultra-High-Resolution 4K Hero Renders',
      'Transparent Background Alpha PNGs for Marketing Collateral',
      'Studio Softbox, Warm Dusk, and Minimalist Environment Setups',
      'Color Graded in 32-bit Float'
    ],
    software: ['Blender Cycles', 'Octane Render', 'Photoshop'],
    idealFor: 'E-commerce stores needing product imagery before physical manufacture.',
    highlightFeature: 'Indistinguishable from real studio photography at zero staging cost.'
  },
  {
    id: 'book-designing',
    title: 'Book & Editorial Designing',
    category: 'design',
    categoryLabel: 'Graphic & Print',
    tagline: 'End-to-end editorial typography, cover design & press-ready files',
    description: 'Complete book layout design, spine calculation, typographic grid systems, chapter header ornaments, and print-ready PDF files for Amazon KDP, IngramSpark, or offset press.',
    discountPercentage: 20,
    originalPriceINR: 2999,
    salePriceINR: 2399,
    isPillar: false,
    turnaround: '4–5 Days',
    deliverables: [
      'Complete Typeset Interior Layout (EPUB & Print PDF)',
      'Full Wrap Cover Design (Front, Back, Spine with Barcode)',
      'CMYK Offset Press-Ready with 3mm Bleed Marks',
      'Kindle & Digital Reader Optimized Reflowable File'
    ],
    software: ['Adobe InDesign', 'Photoshop', 'Illustrator'],
    idealFor: 'Authors, publishers, educators, and enterprise whitepaper authors.',
    highlightFeature: 'Strict micro-typographic kerning and orphan-free paragraphs.'
  },
  {
    id: 'huge-text-handling',
    title: 'Huge Text Handling & Typesetting',
    category: 'design',
    categoryLabel: 'Graphic & Print',
    tagline: 'Automated formatting, style sheets & index systems for dense documents',
    description: 'Typesetting, style-sheet harmonization, citation structuring, and layout management for massive documents (100+ pages), legal disclosures, manuals, and academic dissertations.',
    discountPercentage: 25,
    originalPriceINR: 1999,
    salePriceINR: 1499,
    isPillar: false,
    turnaround: '3–4 Days',
    deliverables: [
      'Master Hierarchy Typography Stylesheet (H1-H6, Body, Lists)',
      'Automated Dynamic Table of Contents & Cross-References',
      'Footnote, Endnote & Bibliography Formatting',
      'Searchable Bookmarked Interactive PDF'
    ],
    software: ['Adobe InDesign', 'LaTeX', 'Acrobat Pro DC'],
    idealFor: 'Law firms, academic researchers, corporate financial reporters, and NGOs.',
    highlightFeature: 'Fault-tolerant master styling preserving document consistency across 500+ pages.'
  },
  {
    id: 'a4-size-printing',
    title: 'A4 Size Print Collateral',
    category: 'design',
    categoryLabel: 'Graphic & Print',
    tagline: 'High-DPI commercial flyers, brochures, certificates & datasheets',
    description: 'High-resolution A4 print design and color separations for brochures, flyers, event hand-outs, award certificates, and product spec sheets ready for digital or offset printing.',
    discountPercentage: 20,
    originalPriceINR: 299,
    salePriceINR: 239,
    isPillar: false,
    turnaround: '12–24 Hours',
    deliverables: [
      '300 DPI CMYK Print-Ready PDF with Safe Margins & Bleeds',
      'RGB High-Res Digital Shareable PDF',
      'Vector Icons and Infographic Elements',
      'Double-Sided or Single-Sided Composition'
    ],
    software: ['Illustrator', 'InDesign'],
    idealFor: 'Event coordinators, small business owners, training institutes, and retail.',
    highlightFeature: 'Precise crop-mark alignment guaranteed not to clip at the print shop.'
  },
  {
    id: 'business-card-designing',
    title: 'Business Card Designing',
    category: 'design',
    categoryLabel: 'Graphic & Print',
    tagline: 'Tactile, premium identity cards in standard and custom die-cut dimensions',
    description: 'Distinguished, modern business card concepts with clean hierarchy, QR code integration, spot UV / foil stamp preparation, and CMYK color profiles for tactile elegance.',
    discountPercentage: 25,
    originalPriceINR: 499,
    salePriceINR: 374,
    isPillar: false,
    turnaround: '12–24 Hours',
    deliverables: [
      '2 Custom Bespoke Front/Back Card Layout Concepts',
      'Integrated High-Density Dynamic vCard QR Code',
      'Spot UV & Foil Stamping Special Finish Layer Mask',
      'Standard 3.5" x 2" (or custom European/Asian) Sizing'
    ],
    software: ['Illustrator', 'Photoshop'],
    idealFor: 'Founders, executives, creatives, and sales representatives making lasting first impressions.',
    highlightFeature: 'Direct contact-card QR code scan ready for immediate mobile import.'
  }
];

export const ALL_SERVICES = [...CORE_PILLARS, ...EXTENDED_CATALOG];
