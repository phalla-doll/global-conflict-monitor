import { useState } from 'react';

interface IntelligenceGridProps {
  onEventClick: (id: string) => void;
  selectedEventId: string | null;
}

const mockData = [
  {
    id: 'event-1',
    category: 'ACTIVE',
    country: 'RUSSIA VS UKRAINE',
    escalation: 7.4,
    headline: 'Intensified artillery exchanges along eastern front',
    summary: 'AI Analysis indicates a 40% increase in artillery fire over the last 12 hours, suggesting preparation for localized offensives.',
    actors: 'Russia vs Ukraine',
    casualties: 14,
    time: '12m ago',
    source: 'Reuters'
  },
  {
    id: 'event-2',
    category: 'ESCALATION',
    country: 'SOUTH CHINA SEA',
    escalation: 6.2,
    headline: 'Naval vessels shadow foreign carrier group',
    summary: 'Multiple fast attack craft observed shadowing carrier strike group. Radio warnings issued but no direct engagement.',
    actors: 'China vs US',
    casualties: 0,
    time: '45m ago',
    source: 'OSINT'
  },
  {
    id: 'event-3',
    category: 'POLITICAL',
    country: 'MIDDLE EAST',
    escalation: 4.8,
    headline: 'Emergency diplomatic summit called',
    summary: 'Regional leaders convene following recent border incursions. Sanctions package being drafted.',
    actors: 'Multiple',
    casualties: 0,
    time: '2h ago',
    source: 'Al Jazeera'
  },
  {
    id: 'event-4',
    category: 'ANALYSIS',
    country: 'GLOBAL',
    escalation: 5.5,
    headline: 'Supply chain disruption index rises',
    summary: 'Maritime shipping routes showing increased deviation patterns due to localized conflict risks.',
    actors: 'N/A',
    casualties: 0,
    time: '4h ago',
    source: 'Internal'
  }
];

export function IntelligenceGrid({ onEventClick, selectedEventId }: IntelligenceGridProps) {
  const columns = [
    { id: 'ACTIVE', label: 'Active Conflicts', count: 12 },
    { id: 'ESCALATION', label: 'Escalation', count: 7 },
    { id: 'POLITICAL', label: 'Political', count: 15 },
    { id: 'ANALYSIS', label: 'Analysis', count: 9 },
  ];

  const getBorderColor = (score: number) => {
    if (score > 7) return 'border-l-[#FF3B30]';
    if (score >= 5) return 'border-l-[#FF9F0A]';
    return 'border-l-white';
  };

  return (
    <div className="w-full h-full flex bg-[#0A0A0A]">
      {columns.map((col, idx) => (
        <div 
          key={col.id} 
          className={`flex-1 flex flex-col h-full ${idx !== 0 ? 'border-l border-[#1A1A1A]' : ''}`}
        >
          {/* Column Header */}
          <div className="h-[44px] shrink-0 border-b border-[#1A1A1A] flex items-center justify-between px-4 sticky top-0 bg-[#0A0A0A] z-10">
            <span className="font-condensed uppercase tracking-[0.08em] text-white text-sm">
              {col.label}
            </span>
            <span className="font-mono text-[#9A9A9A] text-xs">
              ({col.count})
            </span>
          </div>

          {/* Column Content */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
            {mockData.filter(d => d.category === col.id).map((item) => (
              <div 
                key={item.id}
                onClick={() => onEventClick(item.id)}
                className={`p-3 border-b border-[#1A1A1A] border-l-2 cursor-pointer transition-colors hover:bg-[#111] ${getBorderColor(item.escalation)} ${selectedEventId === item.id ? 'bg-[#111]' : ''}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-condensed uppercase tracking-[0.08em] text-[#9A9A9A] text-[10px]">
                    {item.country}
                  </span>
                  <span className="font-mono text-white text-[10px]">
                    ESC {item.escalation.toFixed(1)}
                  </span>
                </div>
                
                <h3 className="font-sans font-semibold text-[14px] text-white leading-tight mb-2">
                  {item.headline}
                </h3>
                
                <p className="font-sans text-[13px] text-[#9A9A9A] leading-snug mb-3 line-clamp-2">
                  {item.summary}
                </p>
                
                <div className="grid grid-cols-2 gap-y-1">
                  <div className="font-mono text-[11px] text-[#9A9A9A]">
                    <span className="opacity-50">ACTORS:</span> <span className="text-white">{item.actors}</span>
                  </div>
                  <div className="font-mono text-[11px] text-[#9A9A9A] text-right">
                    <span className="opacity-50">CASUALTIES:</span> <span className="text-white">{item.casualties}</span>
                  </div>
                  <div className="font-mono text-[11px] text-[#9A9A9A]">
                    <span className="opacity-50">TIME:</span> <span className="text-white">{item.time}</span>
                  </div>
                  <div className="font-mono text-[11px] text-[#9A9A9A] text-right">
                    <span className="opacity-50">SRC:</span> <span className="text-white">{item.source}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
