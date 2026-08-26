export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
}

export const newsItems: NewsItem[] = [
  {
    slug: "chief-minister-meeting",
    title: "Chief Minister Meeting",
    date: "September 2025",
    category: "MEETING",
    description:
      "Our Convenor, Dr. Prabhukumar Challagali, met Hon'ble Chief Minister Sri Revanth Reddy and officially invited him to the AI Global Medical Summit. The Chief Minister extended full support. Guided by Prof. Dr. J. A. Jayalal, this marks a major milestone.",
    image: "/announcement1.jpg",
  },
  {
    slug: "sports-animal-husbandry-minister-invitation",
    title: "Sports & Animal Husbandry Minister Invitation",
    date: "September 2025",
    category: "INVITATION",
    description:
      "President Dr. Prabhukumar Challagali presented a formal invitation to Hon'ble Minister Sri Vakati Srihari Mudiraju Garu for the AI Global Medical Summit. The Minister responded positively and assured his support, strengthening momentum for this landmark event.",
    image: "/announcement2.jpg",
  },
  {
    slug: "health-minister-support",
    title: "Health Minister Support",
    date: "September 2025",
    category: "SUPPORT",
    description:
      "Our Convenor, Dr. Prabhukumar Challagali, met Hon'ble Health Minister Sri Damodar Rajanarsimha and invited him to the AI Global Medical Summit. The Minister accepted and pledged full support. With Prof. Dr. J. A. Jayalal's guidance, preparations advance confidently.",
    image: "/announcement3.jpg",
  },
];

export interface PressItem {
  title: string;
  source: string;
  date: string;
  url: string;
}

export const pressCoverage: PressItem[] = [
  {
    title: "Hyderabad to showcase AI in healthcare",
    source: "The Hans India",
    date: "November 8, 2025",
    url: "https://www.thehansindia.com/news/cities/hyderabad/hyderabad-to-showcase-ai-in-healthcare-1021596",
  },
  {
    title: "Commonwealth Medical Association appoints Dr Prabhukumar Challagali as convenor for AI and Digital Health",
    source: "NewsMeter",
    date: "July 19, 2025",
    url: "https://newsmeter.in/hyderabad/commonwealth-medical-association-appoints-dr-prabhukumar-challagali-as-convenor-for-ai-and-digital-health-751981",
  },
  {
    title: "Hyderabad: IMA Banjara Hills president Dr. Prabhukumar Challagali honored by CMA",
    source: "NewsMeter",
    date: "November 12, 2024",
    url: "https://newsmeter.in/science-health/hyderabad-ima-banjara-hills-president-dr-prabhukumar-challagali-honored-by-cma-738844",
  },
];
