import { X } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface SidePanelProps {
  eventId: string | null;
  onClose: () => void;
}

export function SidePanel({ eventId, onClose }: SidePanelProps) {
  const trendData = [
    { time: '12:00', val: 4 },
    { time: '13:00', val: 4.5 },
    { time: '14:00', val: 5 },
    { time: '15:00', val: 6.2 },
    { time: '16:00', val: 7.4 },
    { time: '17:00', val: 7.4 },
  ];

  return (
    <div 
      className={`fixed top-0 right-0 h-full w-[420px] bg-[#0A0A0A] border-l border-[#1A1A1A] z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
        eventId ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header */}
      <div className="h-[56px] shrink-0 border-b border-[#1A1A1A] flex items-center justify-between px-6">
        <span className="font-condensed uppercase tracking-[0.08em] text-white text-sm">
          Event Intelligence
        </span>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-[#111] transition-colors"
        >
          <X className="w-5 h-5 text-[#9A9A9A] hover:text-white transition-colors" strokeWidth={1.5} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 flex flex-col gap-8">
        
        {/* 1. Event Overview */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-3 mb-1">
            <span className="px-2 py-0.5 bg-[#FF3B30]/10 text-[#FF3B30] border border-[#FF3B30]/20 font-mono text-[10px] uppercase">
              High Severity
            </span>
            <span className="font-mono text-[#9A9A9A] text-[10px]">
              ID: {eventId || 'EVT-8921'}
            </span>
          </div>
          
          <h2 className="font-sans font-semibold text-xl text-white leading-tight">
            Intensified artillery exchanges along eastern front
          </h2>
          
          <p className="font-sans text-[14px] text-[#9A9A9A] leading-relaxed">
            AI Analysis indicates a 40% increase in artillery fire over the last 12 hours, suggesting preparation for localized offensives. Satellite imagery confirms movement of mechanized units towards staging areas.
          </p>
        </section>

        <div className="h-px w-full bg-[#1A1A1A]" />

        {/* 2. Timeline */}
        <section className="flex flex-col gap-4">
          <h3 className="font-condensed uppercase tracking-[0.08em] text-white text-xs">
            Incident Timeline
          </h3>
          
          <div className="flex flex-col gap-4 pl-2 border-l border-[#1A1A1A] ml-2">
            {[
              { time: '12m ago', text: 'Artillery barrage reported in sector 4' },
              { time: '2h ago', text: 'Mechanized units spotted moving east' },
              { time: '5h ago', text: 'Radio silence protocol initiated' },
            ].map((item, i) => (
              <div key={i} className="relative pl-4">
                <div className="absolute w-2 h-2 bg-[#0A0A0A] border border-[#FF3B30] -left-[5px] top-1.5" />
                <div className="font-mono text-[10px] text-[#9A9A9A] mb-1">{item.time}</div>
                <div className="font-sans text-[13px] text-white">{item.text}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px w-full bg-[#1A1A1A]" />

        {/* 3. Actor Breakdown */}
        <section className="flex flex-col gap-4">
          <h3 className="font-condensed uppercase tracking-[0.08em] text-white text-xs">
            Actor Breakdown
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-[#1A1A1A] p-3">
              <div className="font-condensed uppercase tracking-[0.08em] text-[#9A9A9A] text-[10px] mb-2">Primary Aggressor</div>
              <div className="font-sans text-sm text-white font-medium">Russian Federation</div>
              <div className="font-mono text-[10px] text-[#FF3B30] mt-1">CONFIDENCE: 98%</div>
            </div>
            <div className="border border-[#1A1A1A] p-3">
              <div className="font-condensed uppercase tracking-[0.08em] text-[#9A9A9A] text-[10px] mb-2">Primary Defender</div>
              <div className="font-sans text-sm text-white font-medium">Ukraine</div>
              <div className="font-mono text-[10px] text-[#00D0FF] mt-1">CONFIDENCE: 99%</div>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-[#1A1A1A]" />

        {/* 4. Escalation Trend */}
        <section className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="font-condensed uppercase tracking-[0.08em] text-white text-xs">
              Escalation Trend (24H)
            </h3>
            <span className="font-mono text-[#FF3B30] text-sm font-bold">7.4</span>
          </div>
          
          <div className="h-[120px] w-full border border-[#1A1A1A] p-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <Line 
                  type="stepAfter" 
                  dataKey="val" 
                  stroke="#FF3B30" 
                  strokeWidth={2} 
                  dot={false} 
                  isAnimationActive={false} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        <div className="h-px w-full bg-[#1A1A1A]" />

        {/* 5. Raw Sources */}
        <section className="flex flex-col gap-4 pb-8">
          <h3 className="font-condensed uppercase tracking-[0.08em] text-white text-xs">
            Raw Sources
          </h3>
          
          <div className="flex flex-col gap-2">
            {[
              { id: 'SRC-01', name: 'Reuters Wire', type: 'NEWS' },
              { id: 'SRC-02', name: 'Sentinel-2 Imagery', type: 'SAT' },
              { id: 'SRC-03', name: 'SIGINT Intercept', type: 'INTEL' },
            ].map((src) => (
              <a 
                key={src.id}
                href="#"
                className="flex items-center justify-between p-3 border border-[#1A1A1A] hover:bg-[#111] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-[#9A9A9A] w-12">{src.id}</span>
                  <span className="font-sans text-[13px] text-white group-hover:underline">{src.name}</span>
                </div>
                <span className="font-mono text-[10px] text-[#9A9A9A] border border-[#1A1A1A] px-1.5 py-0.5">
                  {src.type}
                </span>
              </a>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
