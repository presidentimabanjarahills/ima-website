import Image from "next/image";

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export default function AchievementsTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-l-2 border-brand-navy/20 ml-3 sm:ml-4 space-y-10 sm:space-y-12">
      {items.map((item, index) => (
        <li key={index} className="ml-6 sm:ml-8">
          <span className="absolute -left-[9px] sm:-left-[11px] flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-brand-navy to-brand-teal ring-4 ring-white" />
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-brand-navy/10 p-4 sm:p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {item.image && (
                <div className="relative w-full sm:w-56 h-48 sm:h-40 flex-shrink-0 rounded-xl overflow-hidden shadow-md bg-brand-surface">
                  <Image
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    fill
                    sizes="(min-width: 640px) 224px, 100vw"
                    className="object-contain"
                  />
                </div>
              )}
              <div>
                <p className="text-brand-teal font-semibold text-xs sm:text-sm mb-1">{item.date}</p>
                <h3 className="text-base sm:text-lg font-bold text-brand-navy mb-2">{item.title}</h3>
                <p className="text-brand-navy/90 text-sm sm:text-base leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
