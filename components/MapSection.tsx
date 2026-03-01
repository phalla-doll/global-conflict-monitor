import { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl/maplibre';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

interface MapSectionProps {
  onEventClick: (id: string) => void;
  showOverlays?: boolean;
}

export function MapSection({ onEventClick, showOverlays = true }: MapSectionProps) {
  const [layers, setLayers] = useState({
    conflictZones: true,
    militaryActivity: false,
    sanctions: false,
    maritimeActivity: false,
    airActivity: false,
  });
  
  const [hoverInfo, setHoverInfo] = useState<{x: number, y: number, event: any} | null>(null);

  const mockEvent = {
    id: 'event-1',
    lat: 55.7558,
    lng: 37.6173,
    country: 'RUSSIA VS UKRAINE',
    escalation: 7.4,
    type: 'ARTILLERY',
    time: '12m ago',
    isNew: true
  };

  return (
    <div className="w-full h-full relative">
      <Map
        initialViewState={{
          longitude: 30,
          latitude: 40,
          zoom: 2
        }}
        mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
        mapLib={maplibregl}
        interactiveLayerIds={['clusters']}
      >
        {/* Example marker */}
        <Marker longitude={mockEvent.lng} latitude={mockEvent.lat} anchor="center">
          <div className="relative">
            {mockEvent.isNew && (
              <div className="absolute -inset-1 bg-[#FF3B30] rounded-full animate-ping opacity-75" />
            )}
            <div 
              className="relative w-3 h-3 bg-[#FF3B30] rounded-full cursor-pointer hover:ring-2 ring-white transition-all"
              onClick={() => onEventClick(mockEvent.id)}
              onMouseEnter={(e) => setHoverInfo({ x: e.clientX, y: e.clientY, event: mockEvent })}
              onMouseLeave={() => setHoverInfo(null)}
            />
          </div>
        </Marker>
      </Map>

      {/* Custom Tooltip */}
      {hoverInfo && (
        <div 
          className="absolute pointer-events-none bg-[#0A0A0A] border border-[#1A1A1A] p-2 z-50 flex flex-col gap-1"
          style={{ left: hoverInfo.x + 15, top: hoverInfo.y - 71 }}
        >
          <div className="font-condensed uppercase tracking-[0.08em] text-white text-[10px]">{hoverInfo.event.country}</div>
          <div className="font-mono text-[#9A9A9A] text-[10px]">ESC: <span className="text-[#FF3B30]">{hoverInfo.event.escalation}</span></div>
          <div className="font-mono text-[#9A9A9A] text-[10px]">TYPE: <span className="text-white">{hoverInfo.event.type}</span></div>
          <div className="font-mono text-[#9A9A9A] text-[10px]">TIME: <span className="text-white">{hoverInfo.event.time}</span></div>
        </div>
      )}

      {/* Left Overlay Panel */}
      {showOverlays && (
        <div className="absolute top-4 left-4 w-[320px] bg-[rgba(10,10,10,0.95)] border border-[#1A1A1A] p-4 flex flex-col gap-3 z-10">
          <div className="flex justify-between items-center">
            <span className="font-condensed uppercase tracking-[0.08em] text-[#9A9A9A] text-xs">Active Conflicts</span>
            <span className="font-mono text-[#FF3B30] text-sm">12</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-condensed uppercase tracking-[0.08em] text-[#9A9A9A] text-xs">Rising Tensions</span>
            <span className="font-mono text-[#FF9F0A] text-sm">7</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-condensed uppercase tracking-[0.08em] text-[#9A9A9A] text-xs">New Events (24H)</span>
            <span className="font-mono text-white text-sm">43</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-condensed uppercase tracking-[0.08em] text-[#9A9A9A] text-xs">Civilian Casualties (24H)</span>
            <span className="font-mono text-white text-sm">118</span>
          </div>
        </div>
      )}

      {/* Right Overlay Panel */}
      {showOverlays && (
        <div className="absolute top-4 right-4 w-[240px] bg-[rgba(10,10,10,0.95)] border border-[#1A1A1A] p-4 flex flex-col gap-3 z-10">
          {[
            { id: 'conflictZones', label: 'Conflict Zones' },
            { id: 'militaryActivity', label: 'Military Activity' },
            { id: 'sanctions', label: 'Sanctions' },
            { id: 'maritimeActivity', label: 'Maritime Activity' },
            { id: 'airActivity', label: 'Air Activity' },
          ].map((layer) => (
            <div key={layer.id} className="flex items-center justify-between">
              <span className="font-condensed uppercase tracking-[0.08em] text-[#9A9A9A] text-xs">{layer.label}</span>
              <button
                onClick={() => setLayers(prev => ({ ...prev, [layer.id]: !prev[layer.id as keyof typeof prev] }))}
                className={`w-4 h-4 border transition-colors ${
                  layers[layer.id as keyof typeof layers] 
                    ? 'bg-[#FF3B30] border-[#FF3B30]' 
                    : 'bg-transparent border-[#1A1A1A]'
                }`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
