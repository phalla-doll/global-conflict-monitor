'use client';

import { useState, useEffect } from 'react';
import { TopNav } from '../components/TopNav';
import { MapSection } from '../components/MapSection';
import { IntelligenceGrid } from '../components/IntelligenceGrid';
import { SidePanel } from '../components/SidePanel';

export default function Home() {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [showOverlays, setShowOverlays] = useState(true);
  const [focusEventId, setFocusEventId] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key.toLowerCase() === 'm') {
        setShowOverlays(prev => !prev);
      }
      if (e.key.toLowerCase() === 'f' && selectedEventId) {
        setFocusEventId(selectedEventId);
        // Reset focus event after a short delay so it can be triggered again
        setTimeout(() => setFocusEventId(null), 100);
      }
      if (e.key.toLowerCase() === 'r') {
        // Refresh feed logic (mock implementation)
        console.log('Refreshing feed...');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedEventId]);

  return (
    <main className="flex flex-col h-screen w-full bg-[#0A0A0A] text-white overflow-hidden">
      <TopNav />
      
      <div className="flex-1 flex flex-col relative">
        <div className="h-[50vh] w-full border-b border-[#1A1A1A] relative shrink-0">
          <MapSection 
            onEventClick={setSelectedEventId} 
            showOverlays={showOverlays} 
            focusEventId={focusEventId} 
          />
        </div>
        
        <div className="h-[calc(50vh-56px)] w-full relative shrink-0">
          <IntelligenceGrid onEventClick={setSelectedEventId} selectedEventId={selectedEventId} />
        </div>
      </div>

      <SidePanel 
        eventId={selectedEventId} 
        onClose={() => setSelectedEventId(null)} 
      />
    </main>
  );
}
