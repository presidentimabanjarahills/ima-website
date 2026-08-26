'use client';

import { useState } from "react";

export interface AgendaSession {
  time: string;
  title: string;
  speakers?: string;
  type?: "session" | "break" | "milestone";
}

export interface AgendaTrack {
  hall: string;
  sessions: AgendaSession[];
}

export interface AgendaDay {
  label: string;
  tracks: AgendaTrack[];
}

function SessionEntry({ session }: { session: AgendaSession }) {
  if (session.type === "break") {
    return (
      <li className="relative pl-8 sm:pl-10">
        <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-amber-400 ring-4 ring-amber-100" />
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-lg px-4 py-2.5 text-center">
          <p className="font-bold text-amber-900 text-sm sm:text-base">{session.title}</p>
          {session.time && <p className="text-amber-700 text-xs sm:text-sm font-semibold">{session.time}</p>}
        </div>
      </li>
    );
  }

  if (session.type === "milestone") {
    return (
      <li className="relative pl-8 sm:pl-10">
        <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-brand-navy to-brand-teal ring-4 ring-brand-surface" />
        <div className="bg-gradient-to-r from-brand-surface to-brand-surface border-2 border-brand-navy/25 rounded-lg px-4 py-2.5">
          <p className="font-bold text-brand-navy text-sm sm:text-base">{session.title}</p>
          {session.time && <p className="text-brand-navy/70 text-xs sm:text-sm font-semibold">{session.time}</p>}
          {session.speakers && <p className="text-brand-navy/80 text-xs sm:text-sm mt-1">{session.speakers}</p>}
        </div>
      </li>
    );
  }

  return (
    <li className="relative pl-8 sm:pl-10">
      <span className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-brand-navy" />
      <div className="bg-white rounded-lg border border-brand-navy/15 shadow-sm px-4 py-3">
        <p className="font-bold text-xs sm:text-sm text-brand-teal mb-1">{session.time}</p>
        <h4 className="font-semibold text-sm sm:text-base text-brand-navy">{session.title}</h4>
        {session.speakers && (
          <p className="text-xs sm:text-sm text-brand-navy/80 mt-1.5 pl-3 border-l-2 border-brand-navy/20">
            {session.speakers}
          </p>
        )}
      </div>
    </li>
  );
}

export default function AgendaTimeline({ days }: { days: AgendaDay[] }) {
  const [activeDay, setActiveDay] = useState(0);
  const day = days[activeDay];

  return (
    <div>
      {days.length > 1 && (
        <div className="flex gap-2 sm:gap-4 justify-center flex-wrap mb-6 sm:mb-8">
          {days.map((d, index) => (
            <button
              key={d.label}
              onClick={() => setActiveDay(index)}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-bold transition-all duration-300 text-sm sm:text-base ${
                activeDay === index
                  ? "bg-gradient-to-r from-brand-navy to-brand-teal text-white shadow-lg"
                  : "bg-white text-brand-navy border border-brand-navy/15 hover:bg-brand-surface"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-8 sm:space-y-10">
        {day.tracks.map((track) => (
          <div key={track.hall}>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white bg-gradient-to-r from-brand-navy to-brand-teal px-4 sm:px-6 py-3 rounded-lg mb-4 sm:mb-6">
              {track.hall}
            </h3>
            <ol className="relative border-l-2 border-brand-navy/15 ml-1.5 space-y-3 sm:space-y-4">
              {track.sessions.map((session, index) => (
                <SessionEntry key={`${track.hall}-${index}`} session={session} />
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}
