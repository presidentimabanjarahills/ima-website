'use client';

import { useEffect, useRef, useState } from "react";

export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame: number;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const value = useCountUp(stat.value, active);
  return (
    <div>
      <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tabular-nums">
        {stat.prefix}
        {value.toLocaleString("en-US")}
        {stat.suffix}
      </p>
      <p className="text-brand-surface text-sm sm:text-base mt-2">{stat.label}</p>
    </div>
  );
}

export default function StatsStrip({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-gradient-to-r from-brand-navy to-brand-teal py-8 sm:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} active={inView} />
        ))}
      </div>
    </div>
  );
}
