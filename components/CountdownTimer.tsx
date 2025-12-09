import React, { useState, useEffect } from 'react';

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Cycle durations in minutes
  const cycles = [15, 13, 10];

  useEffect(() => {
    setMounted(true);
    const now = Date.now();
    
    // Get stored data
    const storedData = localStorage.getItem('euroScholarTimerData');
    let endTime = 0;
    let cycleIndex = 0;

    if (storedData) {
      const parsed = JSON.parse(storedData);
      endTime = parsed.endTime;
      cycleIndex = parsed.cycleIndex;
      
      // If time has passed
      if (now > endTime) {
        // Move to next cycle or loop/stay at last
        cycleIndex = (cycleIndex + 1) % cycles.length; 
        
        // However, if we want to be strict about the sequence 15 -> 13 -> 10 then stick at 10:
        // cycleIndex = Math.min(cycleIndex + 1, cycles.length - 1);
        
        // But user said "restart from 13... then restart from 10", implying a sequence.
        // Let's loop it for endless urgency: 15 -> 13 -> 10 -> 15...
        
        const durationMin = cycles[cycleIndex];
        endTime = now + durationMin * 60 * 1000;
        localStorage.setItem('euroScholarTimerData', JSON.stringify({ endTime, cycleIndex }));
      }
    } else {
      // Initialize
      endTime = now + cycles[0] * 60 * 1000;
      localStorage.setItem('euroScholarTimerData', JSON.stringify({ endTime, cycleIndex: 0 }));
    }

    const updateTimer = () => {
        const currentNow = Date.now();
        const remaining = Math.max(0, Math.floor((endTime - currentNow) / 1000));
        
        if (remaining === 0) {
            // Trigger restart logic immediately
            // Get current index again in case it changed (though here it's local)
            const currentData = localStorage.getItem('euroScholarTimerData');
            if(currentData) {
                const p = JSON.parse(currentData);
                const nextIndex = (p.cycleIndex + 1) % cycles.length;
                const nextDuration = cycles[nextIndex];
                const newEnd = Date.now() + nextDuration * 60 * 1000;
                localStorage.setItem('euroScholarTimerData', JSON.stringify({ endTime: newEnd, cycleIndex: nextIndex }));
                endTime = newEnd;
            }
        }
        
        setTimeLeft(remaining);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted || timeLeft === 0) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-red-600 text-white py-3 px-4 text-center text-sm font-medium sticky top-0 z-[60] shadow-md flex justify-center items-center">
      <span className="inline-block mr-2 animate-pulse">🔥 High Demand: ₦10,000 Discount expires in:</span>
      <span className="font-mono font-bold text-lg bg-red-800 px-3 py-0.5 rounded border border-red-700">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
};