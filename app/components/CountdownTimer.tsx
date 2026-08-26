'use client';

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: Date): TimeLeft | null {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const target = new Date(targetDate);
    setMounted(true);
    setTimeLeft(getTimeLeft(target));

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(target));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Avoid a server/client markup mismatch - render nothing until mounted.
  if (!mounted) return null;

  if (!timeLeft) {
    return <p className="text-white font-semibold text-sm sm:text-base">This event has concluded.</p>;
  }

  const units: { label: string; value: number }[] = [
    { label: "Days", value: timeLeft.days },
    { label: "Hrs", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Sec", value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="bg-black/20 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-center min-w-[48px] sm:min-w-[56px]"
        >
          <p className="text-white font-bold text-lg sm:text-xl tabular-nums">
            {String(unit.value).padStart(2, "0")}
          </p>
          <p className="text-white text-[10px] sm:text-xs uppercase tracking-wide">{unit.label}</p>
        </div>
      ))}
    </div>
  );
}
