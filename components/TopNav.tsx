import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { ChevronDown } from 'lucide-react';

export function TopNav() {
  const sparklineData = [
    { v: 5 }, { v: 10 }, { v: 5 }, { v: 20 }, { v: 8 }, { v: 15 }, 
    { v: 25 }, { v: 12 }, { v: 18 }, { v: 10 }, { v: 22 }, { v: 14 }, 
    { v: 28 }, { v: 16 }, { v: 24 }, { v: 18 }, { v: 20 }, { v: 25 }, 
    { v: 30 }, { v: 28 }, { v: 35 }, { v: 30 }, { v: 40 }, { v: 38 }
  ];

  return (
    <header className="h-[56px] w-full bg-[#0A0A0A] border-b border-[#1A1A1A] flex items-center justify-between px-4 shrink-0 z-50">
      {/* Left */}
      <div className="flex items-center gap-4">
        <h1 className="font-condensed uppercase tracking-[0.08em] text-white text-lg font-medium">
          Global Conflict Monitor
        </h1>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#FF3B30] animate-pulse" />
          <span className="font-condensed uppercase tracking-[0.08em] text-[#FF3B30] text-xs font-medium">
            Live
          </span>
        </div>
      </div>

      {/* Center */}
      <div className="flex items-center gap-6">
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
        <button className="flex items-center gap-2 px-3 py-1.5 border border-[#1A1A1A] hover:bg-[#111] transition-colors">
          <span className="font-condensed uppercase tracking-[0.08em] text-xs text-white">
            Global
          </span>
          <ChevronDown className="w-3 h-3 text-[#9A9A9A]" />
        </button>
        
        <div className="flex items-center border border-[#1A1A1A]">
          {['24H', '7D', '30D'].map((time, i) => (
            <button 
              key={time}
              className={`px-3 py-1.5 font-condensed uppercase tracking-[0.08em] text-xs transition-colors ${
                i === 0 ? 'bg-[#111] text-white' : 'text-[#9A9A9A] hover:text-white hover:bg-[#111]'
              } ${i !== 0 ? 'border-l border-[#1A1A1A]' : ''}`}
            >
              {time}
            </button>
          ))}
        </div>

        <div className="flex items-center border border-[#1A1A1A]">
          {['Map', 'Feed'].map((view, i) => (
            <button 
              key={view}
              className={`px-3 py-1.5 font-condensed uppercase tracking-[0.08em] text-xs transition-colors ${
                i === 0 ? 'bg-[#111] text-white' : 'text-[#9A9A9A] hover:text-white hover:bg-[#111]'
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
