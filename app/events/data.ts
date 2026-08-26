export interface UpcomingEvent {
  slug: string;
  title: string;
  category: string;
  startDate: string; // ISO date, e.g. "2025-11-22"
  endDate?: string; // ISO date, if the event spans multiple days
  dateLabel: string; // human-readable date range for display
  venue: string;
  description: string;
  image: string;
  href: string;
}

export const upcomingEvents: UpcomingEvent[] = [
  {
    slug: "cma-global-conference-2025",
    title: "CMA Global Conference 2025 on AI in Healthcare & Medicine",
    category: "CMA Global Conference",
    startDate: "2025-11-22",
    endDate: "2025-11-23",
    dateLabel: "22nd & 23rd November 2025",
    venue: "Jubilee Hills Convention Centre, Hyderabad",
    description:
      "\"Transforming Care Together: AI & Digital Health for a Healthier Commonwealth\". Join 1000+ delegates including Supreme Court Justice, Telangana Ministers, and global healthcare leaders.",
    image: "/eventPic1.png",
    href: "/events/ai-healthcare-conference",
  },
];

export interface PastEventVideo {
  title: string;
  youtubeEmbedUrl: string;
}

export interface PastEvent {
  slug: string;
  title: string;
  year: number;
  dateLabel: string;
  location: string;
  organizer: string;
  description: string;
  image: string;
  videos: PastEventVideo[];
}

export const pastEvents: PastEvent[] = [
  {
    slug: "impact-con-2024",
    title: "IMA Banjara Hills Impact Con 2024",
    year: 2024,
    dateLabel: "1st December 2024",
    location: "Hyderabad",
    organizer: "IMA Banjara Hills Branch",
    description:
      "Indian Medical Association BANJARAHILLS Impact Con 2024 conference Highlights featuring distinguished speakers and medical professionals.",
    image: "/oldevent1.png",
    videos: [
      {
        title: "Part 1 - Conference Highlights",
        youtubeEmbedUrl: "https://www.youtube.com/embed/qaEYykYmLfA?si=auol5uXXgRsqdJco",
      },
      {
        title: "Part 2 - Conference Highlights",
        youtubeEmbedUrl: "https://www.youtube.com/embed/y2De_V8HIls?si=8F3xB1WOxPKEwL4N",
      },
    ],
  },
];
