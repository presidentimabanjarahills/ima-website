'use client';

import { useState } from "react";
import Link from "next/link";
import type { UpcomingEvent } from "./data";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function parseISODate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function eventOccursOn(event: UpcomingEvent, day: Date) {
  const start = parseISODate(event.startDate);
  const end = event.endDate ? parseISODate(event.endDate) : start;
  const d = new Date(day.getFullYear(), day.getMonth(), day.getDate());
  return d >= new Date(start.getFullYear(), start.getMonth(), start.getDate()) &&
    d <= new Date(end.getFullYear(), end.getMonth(), end.getDate());
}

export default function CalendarView({ events }: { events: UpcomingEvent[] }) {
  const initial = events.length > 0 ? parseISODate(events[0].startDate) : new Date();
  const [viewDate, setViewDate] = useState(new Date(initial.getFullYear(), initial.getMonth(), 1));

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startOffset = firstOfMonth.getDay();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);

  const today = new Date();

  const eventsThisMonth = events.filter((event) => {
    const start = parseISODate(event.startDate);
    const end = event.endDate ? parseISODate(event.endDate) : start;
    const monthStart = new Date(year, month, 1);
    const monthEnd = new Date(year, month + 1, 0);
    return start <= monthEnd && end >= monthStart;
  });

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-brand-navy/10 p-4 sm:p-6 md:p-8">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <button
          onClick={() => setViewDate(new Date(year, month - 1, 1))}
          className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-brand-surface text-brand-navy transition-colors"
          aria-label="Previous month"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="text-lg sm:text-xl font-bold text-brand-navy">
          {MONTH_NAMES[month]} {year}
        </h3>
        <button
          onClick={() => setViewDate(new Date(year, month + 1, 1))}
          className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-brand-surface text-brand-navy transition-colors"
          aria-label="Next month"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2 text-center">
        {WEEKDAYS.map((day) => (
          <div key={day} className="text-xs sm:text-sm font-semibold text-brand-navy/70 py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 sm:gap-2">
        {cells.map((day, index) => {
          if (!day) return <div key={index} />;
          const matches = events.filter((event) => eventOccursOn(event, day));
          const isToday = isSameDay(day, today);

          return (
            <div
              key={index}
              className={`relative aspect-square rounded-lg border text-xs sm:text-sm flex flex-col items-center justify-center gap-0.5 ${
                matches.length > 0
                  ? "bg-gradient-to-br from-brand-navy to-brand-teal text-white border-transparent font-bold shadow-md"
                  : isToday
                  ? "border-brand-gold text-brand-navy font-semibold"
                  : "border-brand-navy/10 text-brand-navy/80"
              }`}
              title={matches.map((m) => m.title).join(", ")}
            >
              {day.getDate()}
              {matches.length > 0 && <span className="w-1 h-1 rounded-full bg-brand-gold" />}
            </div>
          );
        })}
      </div>

      <div className="mt-6 sm:mt-8 space-y-3">
        {eventsThisMonth.length === 0 ? (
          <p className="text-center text-brand-navy/70 text-sm">No events scheduled in {MONTH_NAMES[month]}.</p>
        ) : (
          eventsThisMonth.map((event) => (
            <Link
              key={event.slug}
              href={event.href}
              className="block bg-brand-surface rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow duration-200"
            >
              <p className="font-semibold text-brand-navy text-sm sm:text-base">{event.title}</p>
              <p className="text-xs sm:text-sm text-brand-navy/70">{event.dateLabel} &middot; {event.venue}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
