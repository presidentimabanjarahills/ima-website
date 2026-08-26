'use client';

import { useState } from "react";
import PersonCard, { type Person } from "./PersonCard";

export interface PersonGridProps {
  title: string;
  subtitle?: string;
  people: Person[];
  /** Number of cards to show before a "View More" toggle appears. Omit to always show all. */
  initialVisibleCount?: number;
  columns?: "3" | "4";
  cardSize?: "md" | "lg";
}

export default function PersonGrid({
  title,
  subtitle,
  people,
  initialVisibleCount,
  columns = "4",
  cardSize = "md",
}: PersonGridProps) {
  const [showAll, setShowAll] = useState(!initialVisibleCount || initialVisibleCount >= people.length);

  const visiblePeople = showAll ? people : people.slice(0, initialVisibleCount);
  const gridCols =
    columns === "3"
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";

  return (
    <section className="mb-12 sm:mb-16">
      <div className="bg-gradient-to-br from-white/80 via-brand-surface/30 to-brand-surface/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-brand-navy/50 p-6 sm:p-8 md:p-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-3 sm:mb-4">
            {title}
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal mx-auto rounded-full" />
          {subtitle && (
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-brand-navy/80 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-1 ${gridCols} gap-4 sm:gap-6 md:gap-8`}>
            {visiblePeople.map((person) => (
              <PersonCard key={person.name} {...person} size={cardSize} />
            ))}
          </div>

          {initialVisibleCount && initialVisibleCount < people.length && (
            <div className="text-center mt-8 sm:mt-12">
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="inline-flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-brand-navy to-brand-teal text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                <svg
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {showAll ? "View Less" : "View More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
