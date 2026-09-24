import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as d3 from 'd3';
import { 
  Video, 
  Clock, 
  HeartHandshake, 
  TrendingUp, 
  Eye, 
  Zap, 
  HelpCircle, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  BarChart3, 
  Layers, 
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

interface KeyImpactSectionProps {
  onOpenBooking: () => void;
}

// -----------------------------
// Growth Metrics Data
// -----------------------------
interface MetricData {
  id: string;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  highlightText: string;
  description: string;
  meaning: {
    definition: string;
    whyItMatters: string;
    novoStandard: string;
  };
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  bgColor: string;
  badge: string;
}

const IMPACT_METRICS: MetricData[] = [
  {
    id: 'videos-edited',
    label: 'Videos Edited',
    value: 1480,
    suffix: '+',
    highlightText: 'Broadcast & High-Retention Edits',
    description: 'Across YouTube long-form, 9:16 Shorts/Reels/TikTok, and esports tournament highlights.',
    meaning: {
      definition: 'The cumulative volume of production-ready, fully finished video timelines delivered to client channels—including multi-camera cuts, sound design, color grading, motion graphics, and platform formatting.',
      whyItMatters: 'Consistency is the #1 signal rewarded by streaming and social algorithms. Having 1,480+ proven timelines means every cut is backed by battle-tested retention mechanics, zero amateur slip-ups, and airtight editorial pacing.',
      novoStandard: 'Zero dropped frames, 4K master bitrate export, 100% royalty-cleared audio stems, and frame-accurate comedic or cinematic timing tailored to your audience.'
    },
    icon: Video,
    accentColor: '#2A8080',
    bgColor: '#E6F4F1',
    badge: 'Production Volume'
  },
  {
    id: 'hours-saved',
    label: 'Hours Saved',
    value: 5200,
    suffix: '+ hrs',
    highlightText: 'Direct Creator Bandwidth Reclaimed',
    description: 'Scrubbing timelines, cutting dead air, subtitle keyframing, and sound design entirely offloaded.',
    meaning: {
      definition: 'The quantifiable creative time handed back to creators, streamers, and agency founders. Calculated using an industry benchmark of 8–14 hours of intensive post-production work per finished 10-minute video or 5-pack reel.',
      whyItMatters: 'Creator burnout is almost always caused by post-production fatigue, not filming fatigue. Reclaiming 5,200+ hours translates to creators posting twice as often, recording higher energy content, or launching new revenue lines.',
      novoStandard: 'A completely hands-off post-production pipeline: you send raw footage via high-speed cloud drive, and receive polished, upload-ready video files within 24–48 hours.'
    },
    icon: Clock,
    accentColor: '#C04020',
    bgColor: '#FDF0EC',
    badge: 'Creator Leverage'
  },
  {
    id: 'satisfaction-rate',
    label: 'Client Satisfaction Rate',
    value: 99.4,
    suffix: '%',
    decimals: 1,
    highlightText: 'First-Pass Approval & Retention',
    description: 'Based on post-delivery sign-offs, revision feedback loops, and multi-month retainer renewals.',
    meaning: {
      definition: 'A composite metric assessing client review approvals on first and second draft iterations, on-time delivery adherence, and continuous monthly subscription retention across all client tiers.',
      whyItMatters: 'A high rating guarantees you spend your time growing your channel rather than micro-managing edits back-and-forth. 99.4% proves our technical understanding aligns with creator vision from day one.',
      novoStandard: 'Every primary timeline is personally audited by Debangsu Chakraborty before client dispatch, ensuring creative direction matches exact tonal preferences.'
    },
    icon: HeartHandshake,
    accentColor: '#D97706',
    bgColor: '#FEF3C7',
    badge: 'Excellence Rating'
  },
  {
    id: 'views-generated',
    label: 'Organic Views Generated',
    value: 88.5,
    suffix: 'M+',
    decimals: 1,
    highlightText: 'Multi-Platform Virality',
    description: 'Total impressions and video views delivered across viral dating concepts and gaming reels.',
    meaning: {
      definition: 'The aggregate organic view count accumulated by content edited and strategically structured by Novo Production across YouTube, TikTok, Instagram Reels, and Twitch VODs.',
      whyItMatters: 'Editing is not just cosmetic; it is an engineering discipline that controls whether the algorithm recommends your video to 1,000 people or 1,000,000 people.',
      novoStandard: 'Cold-open hooks engineered within the first 2.5 seconds to suppress the initial swipe drop-off by up to 45%.'
    },
    icon: Eye,
    accentColor: '#059669',
    bgColor: '#D1FAE5',
    badge: 'Audience Reach'
  }
];

// Retention curve sample data for D3 chart
interface RetentionPoint {
  second: number;
  novoRetention: number;
  standardRetention: number;
  annotation?: string;
  technique?: string;
}

const RETENTION_DATA: RetentionPoint[] = [
  { second: 0, novoRetention: 100, standardRetention: 100, annotation: 'Cold Open Hook', technique: 'Micro-zoom + kinetic sound fx' },
  { second: 5, novoRetention: 92, standardRetention: 68, annotation: 'Immediate Payoff Tease', technique: 'Dynamic text tracking' },
  { second: 15, novoRetention: 86, standardRetention: 48, annotation: 'Pattern Interrupt #1', technique: 'Camera angle cut + whoosh stem' },
  { second: 30, novoRetention: 81, standardRetention: 35, annotation: 'Story Escalation', technique: 'Pacing tempo elevation' },
  { second: 45, novoRetention: 77, standardRetention: 26, annotation: 'Climax Reveal', technique: 'Custom audio swell + beat drop' },
  { second: 60, novoRetention: 73, standardRetention: 18, annotation: 'Loop Retention Lock', technique: 'Seamless seamless loop transition' }
];

// Production category distribution
const CATEGORY_DISTRIBUTION = [
  { name: 'Gaming Video Editing', percentage: 42, color: '#C04020', count: '620+ cuts', hours: '2,180 hrs' },
  { name: 'Dating Content Concepts', percentage: 36, color: '#2A8080', count: '530+ cuts', hours: '1,870 hrs' },
  { name: 'Photo Retouching & Branding', percentage: 22, color: '#D97706', count: '330+ assets', hours: '1,150 hrs' }
];

// Quarter-by-quarter output data
const QUARTER_DATA = [
  { quarter: 'Q1 2024', videos: 160, hours: 560, satisfaction: 98.8 },
  { quarter: 'Q2 2024', videos: 280, hours: 980, satisfaction: 99.1 },
  { quarter: 'Q3 2024', videos: 410, hours: 1440, satisfaction: 99.2 },
  { quarter: 'Q4 2024', videos: 540, hours: 1890, satisfaction: 99.5 },
  { quarter: 'Q1 2025', videos: 690, hours: 2420, satisfaction: 99.6 },
  { quarter: 'Q2 2025', videos: 880, hours: 3080, satisfaction: 99.7 }
];

// Hook for animating numbers when visible
function useAnimatedCounter(endValue: number, isVisible: boolean, duration = 1800, decimals = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = easedProgress * endValue;
      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [endValue, isVisible, duration]);

  if (decimals > 0) {
    return count.toFixed(decimals);
  }
  return Math.round(count).toLocaleString();
}

export const KeyImpactSection: React.FC<KeyImpactSectionProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'retention' | 'distribution' | 'timeline'>('retention');
  const [selectedMetricDetail, setSelectedMetricDetail] = useState<MetricData>(IMPACT_METRICS[0]);
  const [hoveredRetentionPoint, setHoveredRetentionPoint] = useState<RetentionPoint | null>(null);
  const [userWeeklyVideos, setUserWeeklyVideos] = useState<number>(3);
  const [userContentType, setUserContentType] = useState<'gaming' | 'dating' | 'photo'>('gaming');

  const sectionRef = useRef<HTMLElement>(null);
  const d3RetentionSvgRef = useRef<SVGSVGElement>(null);
  const d3DonutSvgRef = useRef<SVGSVGElement>(null);

  // Intersection Observer for counter trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // -------------------------------------------------------------
  // D3 Chart 1: Interactive Viewer Retention Curve
  // -------------------------------------------------------------
  useEffect(() => {
    if (!d3RetentionSvgRef.current) return;

    const svg = d3.select(d3RetentionSvgRef.current);
    svg.selectAll('*').remove();

    const width = 640;
    const height = 300;
    const margin = { top: 30, right: 30, bottom: 45, left: 45 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg
      .attr('viewBox', `0 0 ${width} ${height}`)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // X Scale: 0 to 60 seconds
    const xScale = d3.scaleLinear()
      .domain([0, 60])
      .range([0, innerWidth]);

    // Y Scale: 0% to 100%
    const yScale = d3.scaleLinear()
      .domain([0, 100])
      .range([innerHeight, 0]);

    // Gridlines
    const yGrid = d3.axisLeft(yScale)
      .ticks(5)
      .tickSize(-innerWidth)
      .tickFormat(() => '');

    g.append('g')
      .attr('class', 'grid text-stone-200 stroke-stone-200/50')
      .call(yGrid)
      .selectAll('line')
      .attr('stroke', '#E5DCD5')
      .attr('stroke-dasharray', '3,3');

    // Axes
    const xAxis = d3.axisBottom(xScale)
      .ticks(6)
      .tickFormat((d) => `${d}s`);

    const yAxis = d3.axisLeft(yScale)
      .ticks(5)
      .tickFormat((d) => `${d}%`);

    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .attr('class', 'text-[11px] text-[#536060] font-mono')
      .call(xAxis);

    g.append('g')
      .attr('class', 'text-[11px] text-[#536060] font-mono')
      .call(yAxis);

    // Area generator for Novo Production
    const novoArea = d3.area<RetentionPoint>()
      .x(d => xScale(d.second))
      .y0(innerHeight)
      .y1(d => yScale(d.novoRetention))
      .curve(d3.curveMonotoneX);

    // Area generator for Standard edit
    const standardArea = d3.area<RetentionPoint>()
      .x(d => xScale(d.second))
      .y0(innerHeight)
      .y1(d => yScale(d.standardRetention))
      .curve(d3.curveMonotoneX);

    // Line generators
    const novoLine = d3.line<RetentionPoint>()
      .x(d => xScale(d.second))
      .y(d => yScale(d.novoRetention))
      .curve(d3.curveMonotoneX);

    const standardLine = d3.line<RetentionPoint>()
      .x(d => xScale(d.second))
      .y(d => yScale(d.standardRetention))
      .curve(d3.curveMonotoneX);

    // Gradient definitions
    const defs = svg.append('defs');
    
    const novoGrad = defs.append('linearGradient')
      .attr('id', 'novo-retention-grad')
      .attr('x1', '0%').attr('y1', '0%')
      .attr('x2', '0%').attr('y2', '100%');
    novoGrad.append('stop').attr('offset', '0%').attr('stop-color', '#2A8080').attr('stop-opacity', 0.35);
    novoGrad.append('stop').attr('offset', '100%').attr('stop-color', '#2A8080').attr('stop-opacity', 0.02);

    const standardGrad = defs.append('linearGradient')
      .attr('id', 'standard-retention-grad')
      .attr('x1', '0%').attr('y1', '0%')
      .attr('x2', '0%').attr('y2', '100%');
    standardGrad.append('stop').attr('offset', '0%').attr('stop-color', '#9CA3AF').attr('stop-opacity', 0.2);
    standardGrad.append('stop').attr('offset', '100%').attr('stop-color', '#9CA3AF').attr('stop-opacity', 0.0);

    // Standard Area & Line
    g.append('path')
      .datum(RETENTION_DATA)
      .attr('fill', 'url(#standard-retention-grad)')
      .attr('d', standardArea);

    g.append('path')
      .datum(RETENTION_DATA)
      .attr('fill', 'none')
      .attr('stroke', '#9CA3AF')
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '4,4')
      .attr('d', standardLine);

    // Novo Area & Line
    g.append('path')
      .datum(RETENTION_DATA)
      .attr('fill', 'url(#novo-retention-grad)')
      .attr('d', novoArea);

    g.append('path')
      .datum(RETENTION_DATA)
      .attr('fill', 'none')
      .attr('stroke', '#2A8080')
      .attr('stroke-width', 3.5)
      .attr('d', novoLine);

    // Interactive Points & Tooltip triggers
    RETENTION_DATA.forEach((point) => {
      // Standard marker
      g.append('circle')
        .attr('cx', xScale(point.second))
        .attr('cy', yScale(point.standardRetention))
        .attr('r', 3.5)
        .attr('fill', '#9CA3AF');

      // Novo interactive marker
      const marker = g.append('circle')
        .attr('cx', xScale(point.second))
        .attr('cy', yScale(point.novoRetention))
        .attr('r', 5.5)
        .attr('fill', '#2A8080')
        .attr('stroke', '#FFFFFF')
        .attr('stroke-width', 2)
        .style('cursor', 'pointer');

      // Interactive hover overlay
      g.append('rect')
        .attr('x', xScale(point.second) - 20)
        .attr('y', 0)
        .attr('width', 40)
        .attr('height', innerHeight)
        .attr('fill', 'transparent')
        .style('cursor', 'pointer')
        .on('mouseenter', () => {
          setHoveredRetentionPoint(point);
          marker.transition().duration(150).attr('r', 8).attr('fill', '#C04020');
        })
        .on('mouseleave', () => {
          marker.transition().duration(150).attr('r', 5.5).attr('fill', '#2A8080');
        });
    });

  }, [activeTab]);

  // -------------------------------------------------------------
  // D3 Chart 2: Interactive Donut Category Distribution
  // -------------------------------------------------------------
  useEffect(() => {
    if (!d3DonutSvgRef.current || activeTab !== 'distribution') return;

    const svg = d3.select(d3DonutSvgRef.current);
    svg.selectAll('*').remove();

    const width = 320;
    const height = 280;
    const radius = Math.min(width, height) / 2 - 10;

    const g = svg
      .attr('viewBox', `0 0 ${width} ${height}`)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const pie = d3.pie<{ name: string; percentage: number; color: string }>()
      .value(d => d.percentage)
      .sort(null);

    const arc = d3.arc<d3.PieArcDatum<{ name: string; percentage: number; color: string }>>()
      .innerRadius(radius * 0.58)
      .outerRadius(radius)
      .cornerRadius(6)
      .padAngle(0.04);

    const arcs = g.selectAll('.arc')
      .data(pie(CATEGORY_DISTRIBUTION))
      .enter()
      .append('g')
      .attr('class', 'arc');

    arcs.append('path')
      .attr('d', arc)
      .attr('fill', d => d.data.color)
      .attr('stroke', '#FFFFFF')
      .attr('stroke-width', 2)
      .style('cursor', 'pointer')
      .transition()
      .duration(800)
      .attrTween('d', function(d) {
        const i = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return function(t) {
          return arc(i(t)) || '';
        };
      });

    // Center Text
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '-0.2em')
      .attr('class', 'font-display text-2xl font-bold fill-[#1A2E30]')
      .text('1,480+');

    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '1.2em')
      .attr('class', 'text-[11px] uppercase tracking-wider font-bold fill-[#536060]')
      .text('Total Assets');

  }, [activeTab]);

  // Interactive Calculator computations
  const estimatedSavings = useMemo(() => {
    const hoursPerVideo = userContentType === 'gaming' ? 9.5 : userContentType === 'dating' ? 6.5 : 3.5;
    const monthlyHours = userWeeklyVideos * 4 * hoursPerVideo;
    const monthlyVideos = userWeeklyVideos * 4;
    const projectedLift = userContentType === 'gaming' ? '+72%' : userContentType === 'dating' ? '+85%' : '+40%';
    return {
      monthlyHours: Math.round(monthlyHours),
      monthlyVideos,
      projectedLift,
      turnaround: '24–36 Hours'
    };
  }, [userWeeklyVideos, userContentType]);

  return (
    <section 
      id="impact" 
      ref={sectionRef} 
      className="py-20 lg:py-24 bg-[#FFF9F6] border-b border-[#E5DCD5] transition-colors relative overflow-hidden"
    >
      {/* Subtle background ambient graphic */}
      <div 
        className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-[#2A8080]/5 blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 left-0 w-[400px] h-[400px] rounded-full bg-[#C04020]/5 blur-[90px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#2A8080] mb-2.5 bg-[#E6F4F1] px-3 py-1 rounded-full border border-[#2A8080]/20">
              <Zap className="w-3.5 h-3.5" />
              <span>Agency Performance &amp; Proof of Work</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2E30] tracking-tight leading-tight">
              Key Impact: Quantifying Real Creative ROI
            </h2>
            <p className="text-base sm:text-lg text-[#536060] mt-3 leading-relaxed">
              We track the only metrics that genuinely matter to digital creators and brands: <span className="text-[#1A2E30] font-semibold">timelines engineered</span>, <span className="text-[#1A2E30] font-semibold">hours of life returned</span>, and <span className="text-[#1A2E30] font-semibold">uncompromising editorial satisfaction</span>.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#C04020] hover:bg-[#9e3217] rounded shadow-xs hover:shadow transition-all cursor-pointer"
            >
              <span>Scale With Novo Production</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* ROW 1: The 4 Primary Growth Stat Counters */}
        {/* ------------------------------------------------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {IMPACT_METRICS.map((metric) => {
            const Icon = metric.icon;
            const isSelected = selectedMetricDetail.id === metric.id;
            return (
              <div 
                key={metric.id}
                onClick={() => setSelectedMetricDetail(metric)}
                className={`relative rounded-xl p-6 transition-all cursor-pointer border ${
                  isSelected 
                    ? 'bg-white shadow-md ring-2 ring-[#2A8080] border-transparent' 
                    : 'bg-white/80 hover:bg-white border-[#E5DCD5] hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: metric.bgColor, color: metric.accentColor }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200">
                    {metric.badge}
                  </span>
                </div>

                {/* Animated Stat Value Counter */}
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#1A2E30] tabular-nums">
                    {useAnimatedCounter(metric.value, isVisible, 2000, metric.decimals || 0)}
                  </span>
                  <span 
                    className="font-display text-xl sm:text-2xl font-bold"
                    style={{ color: metric.accentColor }}
                  >
                    {metric.suffix}
                  </span>
                </div>

                <div className="text-sm font-bold text-[#1A2E30] mb-1">
                  {metric.label}
                </div>

                <p className="text-xs text-[#536060] leading-relaxed line-clamp-2">
                  {metric.highlightText}
                </p>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-[#2A8080]">
                  <span>Explore exact meaning</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-180' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* ROW 2: Deep Dive: "What is the meaning of each metric?" */}
        {/* ------------------------------------------------------------- */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#E5DCD5] shadow-sm mb-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            
            {/* Left selector column */}
            <div className="w-full lg:w-1/3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C04020] mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>Executive Context</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#1A2E30] mb-3">
                What do these metrics mean for your brand?
              </h3>
              <p className="text-xs sm:text-sm text-[#536060] mb-6 leading-relaxed">
                Raw numbers without context are vanity. Here is how Novo Production defines each key pillar, why it directly affects your bottom line, and our contractual standard.
              </p>

              <div className="space-y-2">
                {IMPACT_METRICS.map((metric) => {
                  const isSelected = selectedMetricDetail.id === metric.id;
                  return (
                    <button
                      key={metric.id}
                      onClick={() => setSelectedMetricDetail(metric)}
                      className={`w-full text-left p-3.5 rounded-lg text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                        isSelected 
                          ? 'bg-[#1A2E30] text-white shadow-xs' 
                          : 'bg-stone-50 hover:bg-stone-100 text-[#1A2E30]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span 
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: metric.accentColor }}
                        />
                        <span>{metric.label}</span>
                      </div>
                      <span className="font-mono font-bold text-xs opacity-80">
                        {metric.value}{metric.suffix}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right detailed definition display */}
            <div className="w-full lg:w-2/3 bg-[#FFF5F0] rounded-xl p-6 sm:p-8 border border-[#E5DCD5]">
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="p-2.5 rounded-lg"
                  style={{ backgroundColor: selectedMetricDetail.bgColor, color: selectedMetricDetail.accentColor }}
                >
                  <selectedMetricDetail.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#536060]">
                    In-Depth Analysis
                  </span>
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-[#1A2E30]">
                    The Meaning of "{selectedMetricDetail.label}" ({selectedMetricDetail.value}{selectedMetricDetail.suffix})
                  </h4>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#1A2E30]">
                {/* 1. Definition */}
                <div className="p-4 bg-white rounded-lg border border-[#E5DCD5] shadow-2xs">
                  <div className="font-bold text-[#2A8080] uppercase tracking-wider text-[11px] mb-1">
                    1. Formal Industry Definition
                  </div>
                  <p className="text-[#536060] leading-relaxed">
                    {selectedMetricDetail.meaning.definition}
                  </p>
                </div>

                {/* 2. Why it matters */}
                <div className="p-4 bg-white rounded-lg border border-[#E5DCD5] shadow-2xs">
                  <div className="font-bold text-[#C04020] uppercase tracking-wider text-[11px] mb-1">
                    2. Why It Matters For Your Channel's Growth
                  </div>
                  <p className="text-[#536060] leading-relaxed">
                    {selectedMetricDetail.meaning.whyItMatters}
                  </p>
                </div>

                {/* 3. The Novo Standard */}
                <div className="p-4 bg-white rounded-lg border border-[#E5DCD5] shadow-2xs">
                  <div className="font-bold text-[#D97706] uppercase tracking-wider text-[11px] mb-1">
                    3. Novo Production Execution Standard
                  </div>
                  <p className="text-[#536060] leading-relaxed">
                    {selectedMetricDetail.meaning.novoStandard}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* ROW 3: Interactive D3 Visualizations & Growth Analytics */}
        {/* ------------------------------------------------------------- */}
        <div className="bg-white rounded-2xl border border-[#E5DCD5] shadow-sm overflow-hidden mb-16">
          
          {/* Visual switcher tabs */}
          <div className="border-b border-[#E5DCD5] px-6 py-4 flex flex-wrap items-center justify-between gap-4 bg-stone-50/70">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-[#2A8080]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1A2E30]">
                D3 Visualization Engine:
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('retention')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'retention' 
                    ? 'bg-[#1A2E30] text-white shadow-2xs' 
                    : 'bg-white hover:bg-stone-100 text-[#536060] border border-stone-200'
                }`}
              >
                Audience Retention Curve
              </button>

              <button
                onClick={() => setActiveTab('distribution')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'distribution' 
                    ? 'bg-[#1A2E30] text-white shadow-2xs' 
                    : 'bg-white hover:bg-stone-100 text-[#536060] border border-stone-200'
                }`}
              >
                Output Breakdown
              </button>

              <button
                onClick={() => setActiveTab('timeline')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'timeline' 
                    ? 'bg-[#1A2E30] text-white shadow-2xs' 
                    : 'bg-white hover:bg-stone-100 text-[#536060] border border-stone-200'
                }`}
              >
                Quarterly Delivery Trend
              </button>
            </div>
          </div>

          {/* Tab 1: Audience Retention Curve Chart */}
          {activeTab === 'retention' && (
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-display text-xl font-bold text-[#1A2E30]">
                        60-Second Viewer Retention Benchmark
                      </h4>
                      <p className="text-xs text-[#536060] mt-0.5">
                        Novo high-retention edit vs. typical creator raw cut across 1M+ sampled views.
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-semibold">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-[#2A8080]" />
                        <span className="text-[#1A2E30]">Novo Edit</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-[#9CA3AF]" />
                        <span className="text-[#536060]">Standard Cut</span>
                      </div>
                    </div>
                  </div>

                  {/* D3 SVG Container */}
                  <div className="w-full bg-[#FFF5F0]/60 rounded-xl p-3 border border-[#E5DCD5]">
                    <svg ref={d3RetentionSvgRef} className="w-full h-auto" />
                  </div>

                  <p className="text-[11px] text-[#536060] mt-3 italic text-center">
                    Hover over timeline points (0s to 60s) to reveal pacing mechanisms and retention hooks.
                  </p>
                </div>

                {/* Point Inspector & Narrative */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="bg-[#FFF5F0] rounded-xl p-6 border border-[#E5DCD5]">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#2A8080] bg-[#E6F4F1] px-2.5 py-1 rounded">
                      Retention Anatomy
                    </span>

                    <h5 className="font-display text-lg font-bold text-[#1A2E30] mt-3 mb-2">
                      {hoveredRetentionPoint ? `${hoveredRetentionPoint.second}s: ${hoveredRetentionPoint.annotation}` : 'Why Novo Retention Stays Above 73%'}
                    </h5>

                    {hoveredRetentionPoint ? (
                      <div className="space-y-3 text-xs text-[#1A2E30]">
                        <div className="flex items-center justify-between p-2.5 bg-white rounded border border-[#E5DCD5]">
                          <span className="text-[#536060]">Novo Audience Retained:</span>
                          <span className="font-mono font-bold text-[#2A8080] text-sm">{hoveredRetentionPoint.novoRetention}%</span>
                        </div>
                        <div className="flex items-center justify-between p-2.5 bg-white rounded border border-[#E5DCD5]">
                          <span className="text-[#536060]">Standard Raw Video Cut:</span>
                          <span className="font-mono font-bold text-[#9CA3AF] text-sm">{hoveredRetentionPoint.standardRetention}%</span>
                        </div>
                        <div className="p-3 bg-white rounded border border-[#E5DCD5]">
                          <span className="block font-bold text-[#C04020] text-[11px] mb-0.5">Applied Technical Hook:</span>
                          <span className="text-[#536060]">{hoveredRetentionPoint.technique}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="text-xs text-[#536060] space-y-3 leading-relaxed">
                        <p>
                          Standard videos lose over 52% of audience in the first 15 seconds due to silent pauses, monotonous framing, and sluggish context-setting.
                        </p>
                        <p>
                          Novo timelines inject rhythmic visual interruptions, dynamic audio stems, and layered subtitle emphasis every 2.5–4.0 seconds, holding viewer interest past the critical algorithm trigger.
                        </p>
                        <div className="pt-2">
                          <span className="text-xs font-bold text-[#1A2E30] block mb-1">Resulting Impact:</span>
                          <div className="flex items-center gap-2 text-xs font-semibold text-[#059669]">
                            <TrendingUp className="w-4 h-4" />
                            <span>+68% average audience retention increase</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Tab 2: Output Distribution Donut Chart */}
          {activeTab === 'distribution' && (
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full max-w-[320px] bg-[#FFF5F0]/60 rounded-xl p-4 border border-[#E5DCD5] flex items-center justify-center">
                    <svg ref={d3DonutSvgRef} className="w-full h-auto" />
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <h4 className="font-display text-xl font-bold text-[#1A2E30] mb-2">
                    Production Portfolio Breakdown (1,480+ Finished Assets)
                  </h4>
                  <p className="text-xs sm:text-sm text-[#536060] mb-6 leading-relaxed">
                    Our focus is strictly divided across our 3 core agency pillars. Every asset undergoes dedicated color grading, audio leveling, and metadata tagging.
                  </p>

                  <div className="space-y-4">
                    {CATEGORY_DISTRIBUTION.map((cat) => (
                      <div key={cat.name} className="p-4 bg-[#FFF5F0] rounded-xl border border-[#E5DCD5]">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span 
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: cat.color }}
                            />
                            <span className="text-sm font-bold text-[#1A2E30]">{cat.name}</span>
                          </div>
                          <span className="font-mono font-bold text-sm text-[#1A2E30]">
                            {cat.percentage}%
                          </span>
                        </div>

                        {/* Progress bar */}
                        <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden mb-2">
                          <div 
                            className="h-full rounded-full transition-all duration-1000"
                            style={{ width: `${cat.percentage}%`, backgroundColor: cat.color }}
                          />
                        </div>

                        <div className="flex items-center justify-between text-xs text-[#536060]">
                          <span>Delivered: <strong className="text-[#1A2E30]">{cat.count}</strong></span>
                          <span>Reclaimed: <strong className="text-[#1A2E30]">{cat.hours}</strong></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Tab 3: Quarterly Delivery Trend */}
          {activeTab === 'timeline' && (
            <div className="p-6 sm:p-8 lg:p-10">
              <h4 className="font-display text-xl font-bold text-[#1A2E30] mb-2">
                Velocity Trajectory: Quarterly Assets &amp; Cumulative Hours Saved
              </h4>
              <p className="text-xs sm:text-sm text-[#536060] mb-8 max-w-2xl">
                Demonstrating capacity scaling from our founding in 2024 through 2025, maintaining a 99%+ client satisfaction rating despite a 5.5x expansion in production throughput.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {QUARTER_DATA.map((q) => (
                  <div key={q.quarter} className="p-4 bg-[#FFF5F0] rounded-xl border border-[#E5DCD5] text-center">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#536060] block mb-2">
                      {q.quarter}
                    </span>
                    <span className="font-display text-2xl font-bold text-[#2A8080] block tabular-nums">
                      {q.videos}
                    </span>
                    <span className="text-[11px] text-[#536060] block">
                      Videos Cut
                    </span>

                    <div className="mt-3 pt-2 border-t border-stone-200/80 text-[10px] text-[#536060]">
                      <div>{q.hours}h saved</div>
                      <div className="text-[#059669] font-bold">{q.satisfaction}% sat.</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* ------------------------------------------------------------- */}
        {/* ROW 4: Interactive Creator Hours Saved & ROI Calculator */}
        {/* ------------------------------------------------------------- */}
        <div className="bg-gradient-to-br from-[#1A2E30] to-[#254345] rounded-2xl p-6 sm:p-8 lg:p-10 text-white shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-amber-300 mb-3 bg-white/10 px-3 py-1 rounded-full w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Personal Impact Estimator</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                How many hours will Novo Production save your channel each month?
              </h3>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
                Adjust your upload cadence and content type to calculate your recovered bandwidth and estimated retention improvement.
              </p>

              {/* Controls */}
              <div className="space-y-5 bg-white/5 p-5 rounded-xl border border-white/10">
                {/* 1. Content format toggle */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                    Primary Media Format
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setUserContentType('gaming')}
                      className={`py-2 px-3 rounded text-xs font-semibold transition-all cursor-pointer ${
                        userContentType === 'gaming' ? 'bg-[#C04020] text-white' : 'bg-white/10 hover:bg-white/20 text-stone-300'
                      }`}
                    >
                      Gaming Highlights
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserContentType('dating')}
                      className={`py-2 px-3 rounded text-xs font-semibold transition-all cursor-pointer ${
                        userContentType === 'dating' ? 'bg-[#2A8080] text-white' : 'bg-white/10 hover:bg-white/20 text-stone-300'
                      }`}
                    >
                      Dating &amp; Viral Shorts
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserContentType('photo')}
                      className={`py-2 px-3 rounded text-xs font-semibold transition-all cursor-pointer ${
                        userContentType === 'photo' ? 'bg-[#D97706] text-white' : 'bg-white/10 hover:bg-white/20 text-stone-300'
                      }`}
                    >
                      Photos &amp; Branding
                    </button>
                  </div>
                </div>

                {/* 2. Slider */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-stone-300">Upload Cadence:</span>
                    <span className="font-mono font-bold text-amber-300 text-sm">
                      {userWeeklyVideos} assets / week ({userWeeklyVideos * 4} per month)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={userWeeklyVideos}
                    onChange={(e) => setUserWeeklyVideos(Number(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#C04020]"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                    <span>1/wk (Casual)</span>
                    <span>5/wk (Daily Grind)</span>
                    <span>10/wk (Media Empire)</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Computation Outcome Card */}
            <div className="lg:col-span-5 bg-white text-[#1A2E30] rounded-xl p-6 sm:p-7 shadow-lg">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#2A8080] bg-[#E6F4F1] px-2.5 py-0.5 rounded">
                Monthly Net Gain
              </span>

              <div className="mt-4 mb-6">
                <span className="text-xs text-[#536060] block mb-0.5">Estimated Hours Reclaimed:</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-[#1A2E30] tabular-nums">
                    {estimatedSavings.monthlyHours}
                  </span>
                  <span className="font-display text-lg font-bold text-[#C04020]">Hours / mo</span>
                </div>
                <p className="text-xs text-[#536060] mt-1">
                  Equal to ~{Math.round(estimatedSavings.monthlyHours / 8)} full working days returned to creative ideation.
                </p>
              </div>

              <div className="space-y-2.5 py-4 border-y border-[#E5DCD5] text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#536060]">Projected Retention Lift:</span>
                  <span className="font-mono font-bold text-[#059669]">{estimatedSavings.projectedLift}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#536060]">Target Delivery SLA:</span>
                  <span className="font-mono font-bold text-[#1A2E30]">{estimatedSavings.turnaround}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#536060]">Editorial Direct Supervision:</span>
                  <span className="font-bold text-[#2A8080]">Debangsu Chakraborty</span>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full mt-6 py-3 px-4 text-xs font-bold uppercase tracking-wider text-center text-white bg-[#C04020] hover:bg-[#9e3217] rounded shadow-xs hover:shadow transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Claim This Production Capacity</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
