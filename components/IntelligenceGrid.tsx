import { useState } from 'react';
import { mockData, IntelligenceEvent } from '../lib/mockData';

interface IntelligenceGridProps {
  onEventClick: (id: string) => void;
  selectedEventId: string | null;
}

export function IntelligenceGrid({ onEventClick, selectedEventId }: IntelligenceGridProps) {
  const columns = [
    { id: 'ACTIVE', label: 'Active Conflicts', count: mockData.filter(d => d.category === 'ACTIVE').length },
    { id: 'ESCALATION', label: 'Escalation', count: mockData.filter(d => d.category === 'ESCALATION').length },
    { id: 'POLITICAL', label: 'Political', count: mockData.filter(d => d.category === 'POLITICAL').length },
    { id: 'ANALYSIS', label: 'Analysis', count: mockData.filter(d => d.category === 'ANALYSIS').length },
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
                  <div className="flex items-center gap-2">
                    {item.isNew && (
                      <div className="w-1.5 h-1.5 bg-[#FF3B30] rounded-full animate-pulse" />
                    )}
                    <span className="font-condensed uppercase tracking-[0.08em] text-[#9A9A9A] text-[10px]">
                      {item.country}
                    </span>
                  </div>
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
