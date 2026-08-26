import type { Person } from "../components/PersonCard";
import type { TimelineItem } from "../components/AchievementsTimeline";

export const president: Person = {
  name: "Dr. Prabhukumar Challagali",
  title:
    "President, IMA Banjara Hills · Convenor, AI & Digital Health, Commonwealth Medical Association · Chairman, Anti-Quackery Committee, Telangana State IMA",
  photo: "/presidentnote.jpg",
};

export const officeBearers: Person[] = [
  {
    name: "Dr. Prabhukumar Challagali",
    title: "President, IMA Banjara Hills",
    photo: "/presidentnote.jpg",
  },
  {
    name: "Dr. J. Gopala Krishna",
    title: "Honorary Secretary, IMA Banjara Hills",
    photo: "/DrGK.jpg",
  },
];

// Initial data set pulled from the "Local Organising Committee" section of the
// CMA Global Conference 2025 page - to be replaced with the branch's standing
// executive committee once that roster is finalized.
export const executiveCommittee: Person[] = [
  { name: "Dr. Apoorva" },
  { name: "Dr. Ranganayakulu" },
  { name: "Dr. Haricharan" },
  { name: "Dr. B. Sandeep Reddy" },
  { name: "Dr. Surya Teja" },
  { name: "Dr. Karunakar Rapolu" },
  { name: "Dr. Haritha" },
  { name: "Dr. Elizabeth" },
  { name: "Dr. Sravanthi" },
  { name: "Dr. Sishir" },
  { name: "Dr. Divya Konda" },
  { name: "Dr. Manisha" },
  { name: "Dr. Amer Mohammed Naseeruddin" },
];

// Initial data set pulled from the "Advisory Board" section of the
// CMA Global Conference 2025 page.
export const advisoryBoard: Person[] = [
  { name: "Sri. Dr. S. Venugopala Chary", title: "Political Advisor · Former Central Minister" },
  { name: "Sri Dr. Dilip Bhanushali", title: "Patron · IMA National President" },
  { name: "Dr. E. Ravindra Reddy", title: "Chief Advisor · Chairman Action Committee, National IMA" },
  { name: "Sri. Ajay Misra, IAS (Rtd.)", title: "Chief Advisor · Chairman, Red Cross Society" },
  { name: "Shri A. Tulsi Raj Gokul", title: "Legal Advisor · Supreme Court & High Court Advocate" },
  { name: "Dr. K. Mahesh Kumar", title: "Chairman, TGMC" },
  { name: "Dr. Dwarakanath Reddy", title: "President, IMA Telangana State" },
  { name: "Dr. Kaliprasad", title: "Immediate Past President, IMA" },
  { name: "Dr. P. Kishan", title: "President Elect, IMA Telangana State" },
  { name: "Dr. V Ashok", title: "Hony Secretary, IMA Telangana State" },
  { name: "Dr. Narsinga Reddy", title: "Past President, IMA" },
  { name: "Dr. M. Sampath Rao", title: "Past President, IMA" },
  { name: "Dr. K. Shyamsunder", title: "Past President, IMA" },
  { name: "Dr. Mohan Gupta" },
  { name: "Dr. Sanjeev Singh Yadav" },
  { name: "Dr. Sambasiva Rao Pilli" },
  { name: "Dr. Shivaraj Armoor" },
  { name: "Dr. K. Balraj", title: "President, IMA Airport" },
  { name: "Dr. Nalla Ravi Kumar", title: "Trade Advisor" },
  { name: "Dr. PR. Sai Kumar" },
  { name: "Dr. G. Srinivas", title: "TGMC" },
  { name: "Dr. J. Ram Mohan" },
  { name: "Dr. B. Narender Reddy" },
  { name: "Dr. Vishnu Rao Veerapaneni", title: "Chairman, SWASA Hospital & Foundation" },
  { name: "Dr. Manjula Anagani", title: "Renowned Gynecologist" },
  { name: "Dr. Jayanthi Reddy" },
  { name: "Dr. M. Prabhakar Rao", title: "Nirmal" },
  { name: "Dr. D. Ramulu", title: "Senior Physician and Poet" },
];

export const achievements: TimelineItem[] = [
  {
    date: "Ongoing",
    title: "5,000+ Medical Camps",
    description:
      "Led IMA Banjara Hills initiatives conducting over 5,000 free and subsidized medical camps, extending essential healthcare screening and treatment to underserved communities across Telangana.",
  },
  {
    date: "2025",
    title: "Representation to Governor Sri Jishnu Dev Varma",
    description:
      "Presented a formal representation to the Governor of Telangana on Antimicrobial Resistance (AMR), advocating for stronger public health policy.",
    image: "/slider2.jpeg",
    imageAlt: "Representation given to Governor Sri Jishnu Dev Varma by IMA President Dr Prabhukumar on AMR",
  },
  {
    date: "2025",
    title: "Chief Minister Meeting",
    description:
      "Met Hon'ble Chief Minister of Telangana Sri Revanth Reddy and officially invited him to the AI Global Medical Summit; the Chief Minister extended his full support.",
    image: "/announcement1.jpg",
    imageAlt: "Chief Minister Meeting with Sri Revanth Reddy",
  },
  {
    date: "2025",
    title: "Health Minister Support",
    description:
      "Met Hon'ble Health Minister of Telangana Sri Damodar Rajanarsimha, who accepted an invitation to the AI Global Medical Summit and pledged full support.",
    image: "/announcement3.jpg",
    imageAlt: "Health Minister Support from Sri Damodar Rajanarsimha",
  },
  {
    date: "2025",
    title: "Appointed Convenor, AI & Digital Health, Commonwealth Medical Association",
    description:
      "Appointed Convenor of the Commonwealth Medical Association's AI & Digital Health committee, going on to chair the organizing committee for the CMA Global Conference 2025 on AI in Healthcare & Medicine.",
  },
  {
    date: "2026",
    title: "Reverend Jesse Jackson Award",
    description:
      "Honoured at the 2.0 Health Conference, Las Vegas, with the prestigious Reverend Jesse Jackson Award for outstanding contributions to healthcare.",
    image: "/WhatsApp Image 2026-08-20 at 13.37.00.jpeg",
    imageAlt: "Dr Prabhukumar Challagali honoured with the Reverend Jesse Jackson Award at the 2.0 Health Conference, Las Vegas",
  },
];
