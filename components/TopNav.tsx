import { useState } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { ChevronDown } from 'lucide-react';

interface TopNavProps {
  region: string;
  setRegion: (region: string) => void;
  timeFilter: string;
  setTimeFilter: (time: string) => void;
  viewMode: 'Map' | 'Feed';
  setViewMode: (view: 'Map' | 'Feed') => void;
}

export function TopNav({
  region,
  setRegion,
  timeFilter,
  setTimeFilter,
  viewMode,
  setViewMode
}: TopNavProps) {
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);

  const sparklineData = [
    { v: 5 }, { v: 10 }, { v: 5 }, { v: 20 }, { v: 8 }, { v: 15 }, 
    { v: 25 }, { v: 12 }, { v: 18 }, { v: 10 }, { v: 22 }, { v: 14 }, 
    { v: 28 }, { v: 16 }, { v: 24 }, { v: 18 }, { v: 20 }, { v: 25 }, 
    { v: 30 }, { v: 28 }, { v: 35 }, { v: 30 }, { v: 40 }, { v: 38 }
  ];

  const regions = ['Global', 'Middle East', 'Eastern Europe', 'South China Sea', 'Africa'];

  return (
    <header className="h-[56px] w-full bg-[#0A0A0A] border-b border-[#1A1A1A] flex items-center justify-between px-4 shrink-0 z-50">
      {/* Left */}
      <div className="flex items-center gap-4">
        <h1 className="font-condensed uppercase tracking-[0.08em] text-white text-lg font-medium hidden sm:block">
          Global Conflict Monitor
        </h1>
        <h1 className="font-condensed uppercase tracking-[0.08em] text-white text-lg font-medium sm:hidden">
          GCM
        </h1>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#FF3B30] animate-pulse" />
          <span className="font-condensed uppercase tracking-[0.08em] text-[#FF3B30] text-xs font-medium">
            Live
          </span>
        </div>
      </div>

      {/* Center */}
      <div className="flex items-center gap-6 hidden md:flex">
        <div className="flex flex-col items-center">
          <span className="font-condensed uppercase tracking-[0.08em] text-[#9A9A9A] text-[10px]">
            Global Escalation Index
          </span>
          <span className="font-mono text-white text-lg font-bold">
            7.4
          </span>
        </div>
        <div className="w-24 h-8 opacity-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sparklineData}>
              <Line 
                type="monotone" 
                dataKey="v" 
                stroke="#FF3B30" 
                strokeWidth={2} 
                dot={false} 
                isAnimationActive={false} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <button 
            onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
            className="flex items-center gap-2 px-3 py-1.5 border border-[#1A1A1A] hover:bg-[#111] transition-colors"
          >
            <span className="font-condensed uppercase tracking-[0.08em] text-xs text-white">
              {region}
            </span>
            <ChevronDown className="w-3 h-3 text-[#9A9A9A]" />
          </button>
          
          {isRegionDropdownOpen && (
            <div className="absolute top-full right-0 mt-1 w-40 bg-[#0A0A0A] border border-[#1A1A1A] flex flex-col z-50">
              {regions.map((r) => (
                <button
                  key={r}
                  onClick={() => {
                    setRegion(r);
                    setIsRegionDropdownOpen(false);
                  }}
                  className={`px-3 py-2 text-left font-condensed uppercase tracking-[0.08em] text-xs transition-colors hover:bg-[#111] ${
                    region === r ? 'text-white bg-[#111]' : 'text-[#9A9A9A]'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex items-center border border-[#1A1A1A] hidden sm:flex">
          {['24H', '7D', '30D'].map((time, i) => (
            <button 
              key={time}
              onClick={() => setTimeFilter(time)}
              className={`px-3 py-1.5 font-condensed uppercase tracking-[0.08em] text-xs transition-colors ${
                timeFilter === time ? 'bg-[#111] text-white' : 'text-[#9A9A9A] hover:text-white hover:bg-[#111]'
              } ${i !== 0 ? 'border-l border-[#1A1A1A]' : ''}`}
            >
              {time}
            </button>
          ))}
        </div>

        <div className="flex items-center border border-[#1A1A1A] md:hidden">
          {(['Map', 'Feed'] as const).map((view, i) => (
            <button 
              key={view}
              onClick={() => setViewMode(view)}
              className={`px-3 py-1.5 font-condensed uppercase tracking-[0.08em] text-xs transition-colors ${
                viewMode === view ? 'bg-[#111] text-white' : 'text-[#9A9A9A] hover:text-white hover:bg-[#111]'
              } ${i !== 0 ? 'border-l border-[#1A1A1A]' : ''}`}
            >
              {view}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
