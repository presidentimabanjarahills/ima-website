import Image from "next/image";

function initials(name: string) {
  return name
    .replace(/^Dr\.?\s*/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export interface Person {
  name: string;
  title?: string;
  organisation?: string;
  photo?: string;
}

const SIZES = {
  md: {
    card: "p-4 sm:p-5",
    photo: "w-20 h-20 sm:w-24 sm:h-24",
    photoSizes: "(min-width: 640px) 96px, 80px",
    initials: "text-lg sm:text-xl",
    name: "text-sm sm:text-base",
    title: "text-xs sm:text-sm",
  },
  lg: {
    card: "p-6 sm:p-8",
    photo: "w-32 h-32 sm:w-40 sm:h-40",
    photoSizes: "(min-width: 640px) 160px, 128px",
    initials: "text-3xl sm:text-4xl",
    name: "text-xl sm:text-2xl",
    title: "text-sm sm:text-base",
  },
} as const;

export default function PersonCard({
  name,
  title,
  organisation,
  photo,
  size = "md",
}: Person & { size?: keyof typeof SIZES }) {
  const s = SIZES[size];

  return (
    <div
      className={`group bg-white/80 backdrop-blur-sm rounded-2xl ${s.card} shadow-md border border-brand-navy/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center h-full flex flex-col items-center`}
    >
      <div
        className={`relative ${s.photo} rounded-full overflow-hidden ring-2 ring-brand-navy/15 shadow-md mb-3 sm:mb-4 group-hover:ring-brand-teal/50 transition-all duration-300 flex-shrink-0`}
      >
        {photo ? (
          <Image src={photo} alt={name} fill sizes={s.photoSizes} className="object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-navy to-brand-teal flex items-center justify-center">
            <span className={`text-white font-bold ${s.initials}`}>{initials(name)}</span>
          </div>
        )}
      </div>
      <h4 className={`font-bold text-brand-navy ${s.name} leading-tight`}>{name}</h4>
      {title && <p className={`text-brand-teal ${s.title} mt-1.5 leading-snug`}>{title}</p>}
      {organisation && <p className={`text-brand-navy/70 ${s.title} mt-0.5 leading-snug`}>{organisation}</p>}
      {size === "lg" && (
        <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-brand-navy to-brand-teal mx-auto rounded-full mt-3 sm:mt-4" />
      )}
    </div>
  );
}
