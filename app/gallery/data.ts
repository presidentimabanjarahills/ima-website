export interface GalleryPhoto {
  src: string;
  alt: string;
}

export interface PhotoAlbum {
  slug: string;
  title: string;
  year: string;
  dateLabel: string;
  description: string;
  cover: GalleryPhoto;
  photos: GalleryPhoto[];
}

export interface GalleryVideo {
  title: string;
  videoId: string;
}

// Candid event photography - this is the original, carefully-selected set of
// photos from the previous version of the gallery page. Do not add the
// Events Pics committee/dignitary headshots back into this album; they were
// tried once and explicitly rejected in favour of only these photos. Photos directly reviewed carry a specific
// caption; photos from the same camera burst/timestamp as a reviewed photo
// share its caption. Photos from bursts that were not individually reviewed
// use an honest general caption and are flagged with a TODO rather than
// guessing who/what is pictured.
const cmaCandidPhotos: GalleryPhoto[] = [
  { src: "/nov-event-pic/DSC_2670%20(1).jpg", alt: "Delegate listening to proceedings at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/DSC_7927%20(1).jpg", alt: "Delegates in the audience at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/DSC_7934.jpg", alt: "A speaker addressing delegates at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/WhatsApp%20Image%202026-07-31%20at%2021.34.17.jpeg", alt: "Commemorative graphic honouring Justice Ujjal Bhuyan's Guest of Honour award at the Commonwealth AI Global Summit 2025" },
  { src: "/nov-event-pic/WhatsApp%20Image%202026-07-31%20at%2021.34.18%20(1).jpeg", alt: "Moment from the Commonwealth AI Global Summit 2025, Hyderabad" }, // TODO: verify exact moment/attendees - not individually confirmed
  { src: "/nov-event-pic/WhatsApp%20Image%202026-07-31%20at%2021.34.18%20(2).jpeg", alt: "Moment from the Commonwealth AI Global Summit 2025, Hyderabad" }, // TODO: verify exact moment/attendees - not individually confirmed
  { src: "/nov-event-pic/WhatsApp%20Image%202026-07-31%20at%2021.34.18.jpeg", alt: "Moment from the Commonwealth AI Global Summit 2025, Hyderabad" }, // TODO: verify exact moment/attendees - not individually confirmed
  { src: "/nov-event-pic/WhatsApp%20Image%202026-07-31%20at%2021.34.19.jpeg", alt: "Moment from the Commonwealth AI Global Summit 2025, Hyderabad" }, // TODO: verify exact moment/attendees - not individually confirmed
  { src: "/nov-event-pic/WhatsApp%20Image%202026-07-31%20at%2021.34.58.jpeg", alt: "A dignitary in academic regalia addressing the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/WhatsApp%20Image%202026-07-31%20at%2021.34.59%20(1).jpeg", alt: "Moment from the Commonwealth AI Global Summit 2025, Hyderabad" }, // TODO: verify exact moment/attendees - not individually confirmed
  { src: "/nov-event-pic/WhatsApp%20Image%202026-07-31%20at%2021.34.59%20(2).jpeg", alt: "Moment from the Commonwealth AI Global Summit 2025, Hyderabad" }, // TODO: verify exact moment/attendees - not individually confirmed
  { src: "/nov-event-pic/WhatsApp%20Image%202026-07-31%20at%2021.34.59.jpeg", alt: "Moment from the Commonwealth AI Global Summit 2025, Hyderabad" }, // TODO: verify exact moment/attendees - not individually confirmed
  { src: "/nov-event-pic/WhatsApp%20Image%202026-07-31%20at%2021.35.00%20(1).jpeg", alt: "Moment from the Commonwealth AI Global Summit 2025, Hyderabad" }, // TODO: verify exact moment/attendees - not individually confirmed
  { src: "/nov-event-pic/WhatsApp%20Image%202026-07-31%20at%2021.35.00.jpeg", alt: "Moment from the Commonwealth AI Global Summit 2025, Hyderabad" }, // TODO: verify exact moment/attendees - not individually confirmed
  { src: "/nov-event-pic/WhatsApp%20Image%202026-07-31%20at%2021.35.01%20(1).jpeg", alt: "Moment from the Commonwealth AI Global Summit 2025, Hyderabad" }, // TODO: verify exact moment/attendees - not individually confirmed
  { src: "/nov-event-pic/WhatsApp%20Image%202026-07-31%20at%2021.35.01.jpeg", alt: "Moment from the Commonwealth AI Global Summit 2025, Hyderabad" }, // TODO: verify exact moment/attendees - not individually confirmed
  { src: "/nov-event-pic/WhatsApp%20Image%202026-07-31%20at%2021.35.02%20(1).jpeg", alt: "Moment from the Commonwealth AI Global Summit 2025, Hyderabad" }, // TODO: verify exact moment/attendees - not individually confirmed
  { src: "/nov-event-pic/WhatsApp%20Image%202026-07-31%20at%2021.35.02.jpeg", alt: "Moment from the Commonwealth AI Global Summit 2025, Hyderabad" }, // TODO: verify exact moment/attendees - not individually confirmed
  { src: "/nov-event-pic/WhatsApp%20Image%202026-07-31%20at%2021.35.03%20(1).jpeg", alt: "Moment from the Commonwealth AI Global Summit 2025, Hyderabad" }, // TODO: verify exact moment/attendees - not individually confirmed
  { src: "/nov-event-pic/WhatsApp%20Image%202026-07-31%20at%2021.35.03.jpeg", alt: "Moment from the Commonwealth AI Global Summit 2025, Hyderabad" }, // TODO: verify exact moment/attendees - not individually confirmed
  { src: "/nov-event-pic/WhatsApp%20Image%202026-07-31%20at%2021.35.04%20(1).jpeg", alt: "Moment from the Commonwealth AI Global Summit 2025, Hyderabad" }, // TODO: verify exact moment/attendees - not individually confirmed
  { src: "/nov-event-pic/WhatsApp%20Image%202026-07-31%20at%2021.35.04.jpeg", alt: "Moment from the Commonwealth AI Global Summit 2025, Hyderabad" }, // TODO: verify exact moment/attendees - not individually confirmed
  { src: "/nov-event-pic/photo%2007.jpg.jpeg", alt: "Award ceremony graphic from the Commonwealth AI Global Summit 2025 honouring Justice Ujjal Bhuyan" },
  { src: "/nov-event-pic/photo%2008.jpg.jpeg", alt: "Felicitation ceremony on stage at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/photo%2009.jpg.jpeg", alt: "Moment from the Commonwealth AI Global Summit 2025, Hyderabad" }, // TODO: verify exact moment/attendees - not individually confirmed
  { src: "/nov-event-pic/photo%2010.jpg.jpeg", alt: "Moment from the Commonwealth AI Global Summit 2025, Hyderabad" }, // TODO: verify exact moment/attendees - not individually confirmed
  { src: "/nov-event-pic/photo%2011.jpg.jpeg", alt: "Moment from the Commonwealth AI Global Summit 2025, Hyderabad" }, // TODO: verify exact moment/attendees - not individually confirmed
  { src: "/nov-event-pic/photo%2012.jpg.jpeg", alt: "Moment from the Commonwealth AI Global Summit 2025, Hyderabad" }, // TODO: verify exact moment/attendees - not individually confirmed
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.38.25%20(1).jpeg", alt: "Inaugural lamp-lighting ceremony at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.38.25%20(2).jpeg", alt: "Inaugural lamp-lighting ceremony at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.38.25%20(4).jpeg", alt: "Inaugural lamp-lighting ceremony at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.38.25%20(5).jpeg", alt: "Inaugural lamp-lighting ceremony at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.38.25%20(6).jpeg", alt: "Inaugural lamp-lighting ceremony at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.38.25.jpeg", alt: "Inaugural lamp-lighting ceremony at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.38.26%20(1).jpeg", alt: "Inaugural lamp-lighting ceremony at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.38.26%20(2).jpeg", alt: "Inaugural lamp-lighting ceremony at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.38.26%20(3).jpeg", alt: "Inaugural lamp-lighting ceremony at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.38.26.jpeg", alt: "Inaugural lamp-lighting ceremony at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.38.27%20(1).jpeg", alt: "Inaugural lamp-lighting ceremony at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.38.27.jpeg", alt: "Inaugural lamp-lighting ceremony at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.41.14%20(1).jpeg", alt: "Delegates seated in the audience at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.41.14%20(2).jpeg", alt: "Delegates seated in the audience at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.41.14%20(3).jpeg", alt: "Delegates seated in the audience at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.41.14%20(4).jpeg", alt: "Delegates seated in the audience at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.41.14%20(5).jpeg", alt: "Delegates seated in the audience at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.41.14.jpeg", alt: "Delegates seated in the audience at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.41.16%20(1).jpeg", alt: "Delegates seated in the audience at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.41.16%20(2).jpeg", alt: "Delegates seated in the audience at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.41.16%20(3).jpeg", alt: "Delegates seated in the audience at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.41.16%20(4).jpeg", alt: "Delegates seated in the audience at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.41.16.jpeg", alt: "Delegates seated in the audience at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.44.46%20(1).jpeg", alt: "Delegates greeting each other at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.44.46%20(10).jpeg", alt: "Delegates greeting each other at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.44.46%20(11).jpeg", alt: "Delegates greeting each other at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.44.46%20(14).jpeg", alt: "Delegates greeting each other at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.44.46%20(15).jpeg", alt: "Delegates greeting each other at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.44.46%20(16).jpeg", alt: "Delegates greeting each other at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.44.46%20(2).jpeg", alt: "Delegates greeting each other at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.44.46%20(3).jpeg", alt: "Delegates greeting each other at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.44.46%20(4).jpeg", alt: "Delegates greeting each other at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.44.46%20(5).jpeg", alt: "Delegates greeting each other at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.44.46%20(6).jpeg", alt: "Delegates greeting each other at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.44.46%20(7).jpeg", alt: "Delegates greeting each other at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.44.46%20(8).jpeg", alt: "Delegates greeting each other at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.44.46%20(9).jpeg", alt: "Delegates greeting each other at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.44.46.jpeg", alt: "Delegates greeting each other at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.44.47%20(1).jpeg", alt: "Delegates greeting each other at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.44.47%20(2).jpeg", alt: "Delegates greeting each other at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.44.47.jpeg", alt: "Delegates greeting each other at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.46.32%20(1).jpeg", alt: "Cultural dance performance at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.46.32%20(2).jpeg", alt: "Cultural dance performance at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.46.32%20(3).jpeg", alt: "Cultural dance performance at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.46.32%20(4).jpeg", alt: "Cultural dance performance at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.46.32.jpeg", alt: "Cultural dance performance at the Commonwealth AI Global Summit 2025, Hyderabad" },
  { src: "/nov-event-pic/pics/WhatsApp%20Image%202026-08-08%20at%2014.46.33.jpeg", alt: "Cultural dance performance at the Commonwealth AI Global Summit 2025, Hyderabad" },
];

export const photoAlbums: PhotoAlbum[] = [
  {
    slug: "cma-global-conference-2025",
    title: "CMA Global Conference 2025",
    year: "2025",
    dateLabel: "November 22-23, 2025 · Jubilee Hills Convention Centre, Hyderabad",
    description:
      "Photos from the Commonwealth AI Global Summit 2025 in Hyderabad, including the inaugural ceremony, delegate sessions, and cultural performances.",
    cover: {
      src: "/nov-event-pic/DSC_7934.jpg",
      alt: "A speaker addressing delegates at the Commonwealth AI Global Summit 2025, Hyderabad",
    },
    photos: [...cmaCandidPhotos],
  },
  {
    slug: "impact-con-2024",
    title: "Impact Con 2024",
    year: "2024",
    dateLabel: "2024",
    description: "Highlights from Impact Con 2024.",
    // No additional Impact Con 2024 photos exist under public/Events Pics or
    // public/nov-event-pic; reusing the cover already used for this event on
    // app/events/data.ts rather than fabricating photos that don't exist.
    cover: { src: "/oldevent1.png", alt: "Impact Con 2024 event banner" },
    photos: [{ src: "/oldevent1.png", alt: "Impact Con 2024 event banner" }],
  },
];

// No specific video URLs from the @dr.prabhuhealthtv29 channel have been
// provided, and video IDs cannot be guessed. Once real video URLs are
// supplied, add { title, videoId } entries here to embed them as iframes.
export const galleryVideos: GalleryVideo[] = [];

export const galleryChannelUrl = "https://www.youtube.com/@dr.prabhuhealthtv29";
export const galleryChannelName = "Dr. Prabhu Health TV";
