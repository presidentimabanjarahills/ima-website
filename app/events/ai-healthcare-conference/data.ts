import type { AgendaDay } from "../../components/AgendaTimeline";

export interface CommitteeMember {
  name: string;
  title: string;
  organisation?: string;
  photo?: string;
}

// --- Chief Guests ---
export const chiefGuests: CommitteeMember[] = [
  {
    name: "Sri. A. Revanth Reddy",
    title: "Hon'ble Chief Minister",
    organisation: "Govt. of Telangana",
    photo: "/Events Pics/Chief Guests/Chief Guest 1.jpg",
  },
  {
    name: "Sri. Mallu Bhatti Vikramarka",
    title: "Hon'ble Deputy Chief Minister",
    organisation: "Govt. of Telangana",
    photo: "/Events Pics/Chief Guests/Chief Guest 2.jpg",
  },
  {
    name: "Sri. P. Ashok Gajapathi Raju",
    title: "Hon'ble Governor of Goa",
    photo: "/Events Pics/Chief Guests/Chief Guest 3.jpg",
  },
  {
    name: "Sri. Justice Ujjal Bhuyan",
    title: "Hon'ble Judge, Supreme Court of India",
    photo: "/Events Pics/Chief Guests/Chief Guest 4.jpeg",
  },
];

// --- Guests of Honour ---
export const guestsOfHonour: CommitteeMember[] = [
  {
    name: "Sri C. Damodar Raja Narasimha",
    title: "Minister for Health Medical & Family Welfare",
    organisation: "Govt. of Telangana",
    photo: "/Events Pics/Guest of Honour/Guest of Honour 1.jpg",
  },
  {
    name: "Sri. D. Sridhar Babu",
    title: "Minister for IT, Electronics, Communications, Industries & Commerce",
    organisation: "Govt. of Telangana",
    photo: "/Events Pics/Guest of Honour/Guest of Honour 2.jpg",
  },
  {
    name: "Sri Vem Narender Reddy",
    title: "Special Advisor to Chief Minister",
    organisation: "(Public Affairs)",
    photo: "/Events Pics/Guest of Honour/Guest of Homour 3.jpg",
  },
  {
    name: "Sri. Jupally Krishna Rao",
    title: "Minister for Prohibition & Excise, Tourism and Culture",
    organisation: "Govt. of Telangana",
    photo: "/Events Pics/Guest of Honour/Guest of Honour 4.jpg",
  },
  {
    name: "Sri. G. Vivek Venkatswamy",
    title: "Minister for Labour, Employment, Training and Factories",
    organisation: "Govt. of Telangana",
    photo: "/Events Pics/Guest of Honour/Guest of Honour 5.jpg",
  },
  {
    name: "Sri. Ponnam Prabhakar Goud",
    title: "Minister for Transport and BC Welfare",
    organisation: "Govt. of Telangana",
    photo: "/Events Pics/Guest of Honour/Guest of Honour 6.jpg",
  },
  {
    name: "Smt. Dansari Anasuya",
    title: "Minister For Panchayati Raj & Rural Development, Rural Water Supply, Women & Child Welfare",
    organisation: "Govt. of Telangana",
    photo: "/Events Pics/Guest of Honour/Guest of Honour 7.jpg",
  },
  {
    name: "Smt. Konda Surekha",
    title: "Minister for Forest & Environment, & Endowments",
    organisation: "Govt. of Telangana",
    photo: "/Events Pics/Guest of Honour/Guest ofr Honour 8.jpg",
  },
  {
    name: "Sri. Bomma Mahesh Kumar Goud",
    title: "President, Telangana Pradesh Congress Committee",
    photo: "/Events Pics/Guest of Honour/Guest of Honour 9.jpg",
  },
  {
    name: "Sri. Adluri Laxman Kumar",
    title: "Minister for SC, ST and Minority, Welfare",
    organisation: "Govt. of Telangana",
    photo: "/Events Pics/Guest of Honour/Guest of Honour 10.jpg",
  },
  {
    name: "Sri. Vakiti Srihari",
    title: "Minister for Animal Husbandry, Dairy Development & Fisheries, Sports, & Youth Affairs",
    organisation: "Govt. of Telangana",
    photo: "/Events Pics/Guest of Honour/Guest of Honor 11.jpg",
  },
  {
    name: "Sri. Dr. Samudrala Venugopala Chary",
    title: "Former Central Minister",
    photo: "/Events Pics/Guest of Honour/Guest of Honour 12.jpg",
  },
  {
    name: "Sri. Dr. Mallu Ravi",
    title: "Hon'ble MP, Nagarkurnool",
    photo: "/Events Pics/Guest of Honour/Guest of Honour 13.jpg",
  },
  {
    name: "Sri. Prasada rao Dagumalla",
    title: "Hon'ble MP, Chittoor",
    photo: "/Events Pics/Guest of Honour/Guest of Honour 14.jpg",
  },
  {
    name: "Sri. Dr Dilip Bhanushali",
    title: "IMA National President",
    photo: "/Events Pics/Guest of Honour/Guest of Honour 15.png",
  },
];

// --- Commonwealth Medical Association Executive Members 2024-2026 ---
export const cmaExecutives: CommitteeMember[] = [
  {
    name: "Prof. Dr. J.A. Jayalai",
    title: "CMA- President",
    photo: "/Events Pics/Cma Executive Members/Cmaem 1.jpg",
  },
  {
    name: "Dr. Murugaraj Rajathurai",
    title: "Immediate Past President, CMA",
    photo: "/Events Pics/Cma Executive Members/Cmaem 2.jpg",
  },
  {
    name: "Dr. Mugambi Joy K.",
    title: "CMA-Secretary General Kenya",
    photo: "/Events Pics/Cma Executive Members/Cmaem 3.jpg",
  },
  {
    name: "Dr. Colin Abel",
    title: "CMA Treasurer Jamaica",
    photo: "/Events Pics/Cma Executive Members/Cmaem 4.png",
  },
  {
    name: "Dr. Gordon",
    title: "Vice President Malta",
    photo: "/Events Pics/Cma Executive Members/Cmaem 5.jpg",
  },
  {
    name: "Dr. Vishi Yohan Beharry",
    title: "Vice President Trinidad",
    photo: "/Events Pics/Cma Executive Members/Cmaem 6.png",
  },
  {
    name: "Dr. Mary Amoakoh-Coleman",
    title: "Vice President Ghana",
    photo: "/Events Pics/Cma Executive Members/Cmaem 7.jpg",
  },
  {
    name: "Dr.Kaumba Manyoni Tolopu",
    title: "Vice President Zambia",
    photo: "/Events Pics/Cma Executive Members/Cmaem 8.png",
  },
  {
    name: "Dr. R.V. Asokan",
    title: "Vice President",
    photo: "/Events Pics/Cma Executive Members/Cmaem 9.jpg",
  },
  {
    name: "Dr. Vasu Pillai",
    title: "Vice President Malaysia",
    photo: "/Events Pics/Cma Executive Members/Cmaem 10.jpg",
  },
  {
    name: "Prof. Vajira H. W. Dissanayake",
    title: "Chairman, AI & Digital Health CMA",
    photo: "/Events Pics/Cma Executive Members/Cmaem 11.jpeg",
  },
  {
    name: "Prof. Dr. S.Aruirhaj",
    title: "Co Chairman, AI & Digital Health, CMA",
    photo: "/Events Pics/Cma Executive Members/Cmaem 12.jpeg",
  },
  {
    name: "Dr. Prabhu Kumar Challagali",
    title: "Convener - AI, Digital Committee, Organizing Chairman",
    photo: "/Events Pics/Cma Executive Members/Cmaem 13.jpg",
  },
  {
    name: "Dr. Osahon Enabulele",
    title: "CMA Constitution Committee Chairman Nigeria",
    photo: "/Events Pics/Cma Executive Members/Cmaem 14.jpg",
  },
  {
    name: "Dr. Merlinda Shazellennne",
    title: "CMA Young Dr's forum Chairperson Malaysia",
    photo: "/Events Pics/Cma Executive Members/Cmaem 15.png",
  },
];

// --- Commonwealth Medical Association Subcommittee - AI and Digital Health 2024-2026 ---
export const aiDigitalHealthCommittee: CommitteeMember[] = [
  {
    name: "Prof. Vajira H. W. Dissanayake",
    title: "Chairman, AI & Digital Health CMA",
    photo: "/Events Pics/Cma Subcommitee/Cmas 1.jpeg",
  },
  {
    name: "Prof. Dr.S.Arulrhaj",
    title: "Co Chairman, AI & Digital Health, CMA",
    photo: "/Events Pics/Cma Subcommitee/Cmas 2.jpeg",
  },
  {
    name: "Mr.Suresh Yadav JI",
    title: "Mentor Deputy Chief of Staff & Director of AI & Digital Transformation Commonwealth Secretariat, London",
    photo: "/Events Pics/Cma Subcommitee/Cmas 3.jpg",
  },
  {
    name: "Prof. Dr. Chelliah Selvasekar",
    title: "Consultant Colorectal Surgeon, NHS, UK, Christie Hospital, Mentor",
    photo: "/Events Pics/Cma Subcommitee/Cmas 4.jpg",
  },
  {
    name: "Dr. Prabhu Kumar Challagali",
    title: "Convener -AI, Digital Committee, Organizing Chairman",
    photo: "/Events Pics/Cma Subcommitee/Cmas 5.jpg",
  },
  {
    name: "Dr. Sivakumar Manickam",
    title: "Paediatric Radiologist, Kings College UK, Member",
    photo: "/Events Pics/Cma Subcommitee/Cmas 6.jpg",
  },
  {
    name: "PROF. (Dr.) Saurabh Varshney",
    title: "Exec. Director & CEO (AIIMS)",
    photo: "/Events Pics/Cma Subcommitee/Cmas 7.jpg",
  },
  {
    name: "Dr.Duan MurugaRaj, Junior",
    title: "Member, Malaysia",
    photo: "/Events Pics/Cma Subcommitee/Cmas 8.jpg",
  },
  {
    name: "Prof. Dr. Rajesh Sivaprakasam",
    title: "Transplant Surgeon & Chair of AI and Robotic Surgery Research Bart's Health",
    photo: "/Events Pics/Cma Subcommitee/Cmas 9.jpg",
  },
  {
    name: "Dr. Sivakumar Dhanaraj",
    title: "Consultant Radiologist, Neuroradiologist, Stroke Imaging Expert",
    photo: "/Events Pics/Cma Subcommitee/Cmas 10.jpeg",
  },
  {
    name: "Dr. Sarah Catania HST surgery",
    title: "Member, Malta",
    photo: "/Events Pics/Cma Subcommitee/Cmas 11.jpg",
  },
  {
    name: "Dr. S. Luxman Family Physician",
    title: "Member, UK",
    photo: "/Events Pics/Cma Subcommitee/Cmas 12.png",
  },
  {
    name: "Ms. Rehana Ameer Advisor",
    title: "Former Councillor - City of London & Founder SMAART Healthcare",
    photo: "/Events Pics/Cma Subcommitee/Cmas 13.jpg",
  },
  {
    name: "Sri. Dr. S. Karthick prabhu",
    title: "Health Committee, Member",
    photo: "/Events Pics/Cma Subcommitee/Cmas 14.jpeg",
  },
  {
    name: "Dr. V S Hariharan",
    title: "Member",
    photo: "/Events Pics/Cma Subcommitee/Cmas 15.jpg",
  },
  {
    name: "Dr. Gumindu Kulatunga",
    title: "Member, Srilanka",
    photo: "/Events Pics/Cma Subcommitee/Cmas 16.jpeg",
  },
];

// --- Distinguished Speakers ---
export const distinguishedSpeakers: CommitteeMember[] = [
  {
    name: "Sri. Jayesh Ranjan, IAS",
    title: "Special Chief Secretary of Telangana Youth Advancement, Tourism and Culture Department, CEO of SPEED, Chief Minister's Office",
    photo: "/Events Pics/Speakers/Speaker 1.jpeg",
  },
  {
    name: "Sri. Dr. K.M. Abul Hasan",
    title: "Chairman Hospital board of India",
    photo: "/Events Pics/Speakers/Speaker 2.jpeg",
  },
  {
    name: "Sri. Prof. Bapiraju",
    title: "Head, Centre For Cognitive Science, IIIT, Hyderabad",
    photo: "/Events Pics/Speakers/Speaker 3.jpeg",
  },
  {
    name: "Sri. Ajay Mishra",
    title: "IAS(Rtd), Chairman Redcross Society",
    photo: "/Events Pics/Speakers/Speaker 4.jpeg",
  },
  {
    name: "Sri. Mohan Silaparasetty",
    title: "Trendwise Analytics AI Bangalore",
    photo: "/Events Pics/Speakers/Speaker 5.jpeg",
  },
  {
    name: "Sri. D Pradeep VM",
    title: "Head Of Cyber Security, Cybercrime Investigator, CISO",
    photo: "/Events Pics/Speakers/Speaker 6.jpeg",
  },
  {
    name: "Sri. Sarvesh Singh",
    title: "Member, Committee of Advanced Technologies, Government of AP",
    photo: "/Events Pics/Speakers/Speaker 7.jpeg",
  },
  {
    name: "Sri. Prof. Vishal Karungulam",
    title: "Clinical Assistant Professor (Teaching), Information Systems Academic Director, ISB",
    photo: "/Events Pics/Speakers/Speaker 8.jpeg",
  },
  {
    name: "Smt. Dr Kamala Kanaparthy",
    title: "General Physician Ex. Supdt Esic Hospital, Nacharam, ISB",
    photo: "/Events Pics/Speakers/Speaker 9.jpeg",
  },
  {
    name: "Dr. Anuradha Sekaran",
    title: "Director and Chief of Pathology, AIG hospitals",
    photo: "/Events Pics/Speakers/Speaker 10.jpeg",
  },
  {
    name: "Prof. Dr. Rajesh Sivaprakasam",
    title: "Transplant Surgeon & Chair of AI and Robotic Surgery Research Bart's Health",
    photo: "/Events Pics/Speakers/Speaker 11.jpg",
  },
  {
    name: "Sri. Prof. Dr. Ananth Padmanabhan. Dean",
    title: "Vinayaka Mission Law School",
    photo: "/Events Pics/Speakers/Speaker 12.jpeg",
  },
  {
    name: "Dr. Sivakumar Dhanaraj",
    title: "Consultant Radiologist, Neuroradiologist, Stroke Imaging Expert",
    photo: "/Events Pics/Speakers/Speaker 13.jpeg",
  },
  {
    name: "Sri. Raja Poladi Head",
    title: "CDiTH, IIIT H, Technology Leader - Data, Analytics & AI IIM Calcutta Centre for Digital Tech in Healthcare, Hyderabad",
    photo: "/Events Pics/Speakers/Speaker 14.jpeg",
  },
  {
    name: "Dr. J. Gopala Krishna",
    title: "Gen. Physician OMC/OGH Hony, Secretary IMA B.Hills",
    photo: "/Events Pics/Speakers/Speaker 15.png",
  },
  {
    name: "Sri. Dr. K. Manivannan",
    title: "Associate Professor & HOI i/c Vinayaka Missions School of Health Systems",
    photo: "/Events Pics/Speakers/Speaker 16.jpeg",
  },
  {
    name: "Sri. Venkata Sureshbabu Bondu",
    title: "AVP -Life Sciences R&D | Manufacturing AI solutions, Hexaware Technologies",
    photo: "/Events Pics/Speakers/Speaker 17.jpeg",
  },
];

// --- Local Organising Committee ---
export const organisingCommittee: CommitteeMember[] = [
  { name: "Dr. Prabhu Kumar Challagali", title: "Organizing Chairman" },
  { name: "Dr. J. Gopala Krishna", title: "Organising Secretary" },
  { name: "Dr. Apoorva", title: "Committee Member" },
  { name: "Dr. Ranganayakulu", title: "Committee Member" },
  { name: "Dr. Haricharan", title: "Committee Member" },
  { name: "Dr. B. Sandeep Reddy", title: "Committee Member" },
  { name: "Dr. Surya Teja", title: "Committee Member" },
  { name: "Dr. Karunakar Rapolu", title: "Committee Member" },
  { name: "Dr. Haritha", title: "Committee Member" },
  { name: "Dr. Elizabeth", title: "Committee Member" },
  { name: "Dr. Sravanthi", title: "Committee Member" },
  { name: "Dr. Sishir", title: "Committee Member" },
  { name: "Dr. Divya Konda", title: "Committee Member" },
  { name: "Dr. Manisha", title: "Committee Member" },
  { name: "Dr. Amer Mohammed Naseeruddin", title: "Committee Member" },
];

// --- Advisory Board ---
export const advisoryBoard: CommitteeMember[] = [
  { name: "Sri. Dr. S. Venugopala Chary", title: "Political Advisor", organisation: "Former Central Minister and Former Spl. Representative of Telangana" },
  { name: "Sri Dr. Dilip Bhanushali", title: "Patron", organisation: "IMA National President" },
  { name: "Dr. E. Ravindra Reddy", title: "Chief Advisor", organisation: "Chairman Action Committee, National IMA" },
  { name: "Sri. Ajay Misra, IAS (Rtd.)", title: "Chief Advisor", organisation: "Chairman, Red Cross Society, Former Secretary" },
  { name: "Shri A. Tulsi Raj Gokul", title: "Legal Advisor", organisation: "Supreme Court & High Court Advocate, Standing Counsel for Telangana State Legislative Assembly & Council" },
  { name: "Dr. K. Mahesh Kumar", title: "Chairman, TGMC" },
  { name: "Dr. Dwarakanath Reddy", title: "President IMA Telangana State" },
  { name: "Dr. Kaliprasad", title: "Immediate Past President, IMA" },
  { name: "Dr. P. Kishan", title: "President Elect IMA Telangana State" },
  { name: "Dr. V Ashok", title: "Hony Secretary, IMA Telangana State" },
  { name: "Dr. Narsinga Reddy", title: "Past President, IMA" },
  { name: "Dr. M. Sampath Rao", title: "Past President, IMA" },
  { name: "Dr. K. Shyamsunder", title: "Past President, IMA" },
  { name: "Dr. Mohan Gupta", title: "Advisory Board Member" },
  { name: "Dr. Sanjeev Singh Yadav", title: "Advisory Board Member" },
  { name: "Dr. Sambasiva Rao Pilli", title: "Advisory Board Member" },
  { name: "Dr. Shivaraj Armoor", title: "Advisory Board Member" },
  { name: "Dr. K. Balraj", title: "President, IMA Airport" },
  { name: "Dr. Nalla Ravi Kumar", title: "(Trade Advisor)" },
  { name: "Dr. PR. Sai Kumar", title: "Advisory Board Member" },
  { name: "Dr. G. Srinivas", title: "TGMC" },
  { name: "Dr. J. Ram Mohan", title: "Advisory Board Member" },
  { name: "Dr. B. Narender Reddy", title: "Advisory Board Member" },
  { name: "Dr. Vishnu Rao Veerapaneni", title: "Chairman SWASA Hospital & Foundation" },
  { name: "Dr. Manjula Anagani", title: "Renowned Gynecologist" },
  { name: "Dr. Jayanthi Reddy", title: "Advisory Board Member" },
  { name: "Dr. M. Prabhakar Rao", title: "Nirmal" },
  { name: "Dr. D. Ramulu", title: "Senior Physician and Poet" },
];

// --- Conference Agenda (replaces the old plain-text/table day-by-day listing) ---
export const conferenceAgenda: AgendaDay[] = [
  {
    label: "Day 1 - November 22",
    tracks: [
      {
        hall: "Hall A - Scientific Sessions & Workshops",
        sessions: [
          { time: "08:00 AM - 09:00 AM", title: "Registrations" },
          {
            time: "08:45 AM - 09:00 AM",
            title: "Welcome Note: Introduction Of The Course",
            speakers: "Prof. V.A. Jayalal, President-CMA",
          },
          {
            time: "09:00 AM - 09:20 AM",
            title: "An Introduction To AI: Exploring The Basics & Beyond",
            speakers: "Prof. Vajira H. W. Dissanayake, Chairman, AI & Digital Health CMA; Mohan Silaparasetty, Trendwise Analytics AI Bangalore",
          },
          {
            time: "09:20 AM - 09:40 AM",
            title: "AI - Google Doctor: Challenges",
            speakers: "Dr Prabhu Kumar Challagali, Convenor, AI & Scientific Digital Committee President, IMA, B.Hills; Dr S. Karthick Prabhu - Secretary, IMA, Tamilnadu; Dr J Gopala Krishna, OMC, Hony. Secretary, IMA B.Hills",
          },
          {
            time: "09:40 AM - 10:00 AM",
            title: "Orientation To AI: Empowering Medical Professionals For The Future Of Healthcare",
            speakers: "Prof. Bapiraju, Head, Centre - Cognitive Sciences, IIIT",
          },
          {
            time: "10:00 AM - 10:20 AM",
            title: "Data Analysis & AI Application In Health Care Research, Publication & Development",
            speakers: "Dr Kamala Kanaparthy, Ex Supdt Esic Hospital, Nacharam, ISB",
          },
          {
            time: "10:20 AM - 10:40 AM",
            title: "Optimizing Patient Acquisition & Revenue Cycle Management In Healthcare Through AI",
            speakers: "Lakshmi Mohan, Director of Centre For Industry & Intl. Relations, AV Group of Institutions",
          },
          { time: "10:40 AM - 11:00 AM", title: "Coffee / Tea Break", type: "break" },
          {
            time: "11:00 AM - 11:20 AM",
            title: "Integrating AI In Healthcare Manpower Management: Challenges & Opportunities",
            speakers: "Dr Suraj Bhansali, VP & Country Head, Certara",
          },
          {
            time: "11:20 AM - 11:40 AM",
            title: "AI Techniques for Enhancing Efficiency In Organizational Administration & Financial Decision-Making",
            speakers: "Deeksha Agarwal, CA",
          },
          {
            time: "11:40 AM - 12:00 PM",
            title: "AI & The Law: Addressing Emerging Legal Complexities & Challenges",
            speakers: "Hon'ble Mr Justice Ujjal Bhuyan, Judge, Supreme Court of India",
          },
          {
            time: "12:00 PM - 12:20 PM",
            title: "AI - Cyber Security",
            speakers: "D Pradeep VM, Head of Cyber Security, CISO",
          },
          {
            time: "12:20 PM - 12:40 PM",
            title: "The Future Of Clinical Medicine In The Age Of AI: Ethical Considerations For Practice & Policy",
            speakers: "Prof. Dr. J. A. Jayalal, President of CMA; Prof. Ananth Padmanabhan, Dean of Vinayaka Mission's Law School",
          },
          {
            time: "12:40 PM - 01:00 PM",
            title: "Integrating AI Into Hospital Administration: Challenges And Opportunities For Healthcare Management",
            speakers: "Dr. K. Manivannan, Associate Professor & HOI i/c Vinayaka Missions School of Health Systems",
          },
          { time: "01:00 PM - 01:45 PM", title: "Lunch Break", type: "break" },
          {
            time: "01:45 PM - 02:05 PM",
            title: "AI in Public Sector Policy Making Toward Smarter & More Efficient Governance",
            speakers: "Sri. Jayesh Ranjan, IAS, Special Chief Secretary, Govt. of Telangana; Sri. Ajay Mishra, IAS(Rtd), Chairman Redcross Society",
          },
          {
            time: "02:05 PM - 02:25 PM",
            title: "The Role of AI In Enhancing Patient Safety & Clinical Reliability",
            speakers: "Sarvesh Singh, Governing Board Member, Global Deeptech Forum",
          },
          {
            time: "02:25 PM - 02:45 PM",
            title: "AI's Next Frontier: Addressing The Future Challenges & Opportunities",
            speakers: "Prof. Vishal Karungulam, Clinical Assistant Professor (Teaching), Information Systems Academic Director, The Lab - Office of Experiential Learning ISB",
          },
          {
            time: "02:45 PM - 03:05 PM",
            title: "The Role Of AI In Modernizing Judicial Decision-Making",
            speakers: "Venkata Suresh Bondu, AVP, Hexaware",
          },
          {
            time: "03:05 PM - 03:25 PM",
            title: "AI-Enhanced Pathology: A New Era Of Diagnostic Excellence And Operational Efficiency",
            speakers: "Dr. Anuradha Sekaran, Director & HOD, Pathology, AIG Hospitals",
          },
          {
            time: "03:25 PM - 03:45 PM",
            title: "AI - Clinical Diagnosis, Rx & Management",
            speakers: "Prof. Dr. Rajesh Sivaprakasam, Transplant Surgeon & Chair of AI and Robotic Surgery Research Bart's Health - UK",
          },
          { time: "", title: "Workshop Sessions", type: "milestone" },
          {
            time: "03:45 PM - 04:15 PM",
            title: "CMA - Code Of Conduct For AI In Health Care",
            speakers: "Prof. Dr.S.Arulrhaj, Co Chairman, AI & Digital Health, CMA; Dr. K.M. Abul Hasan, Chairman-Hospital Board of India; Dr V S Hariharan, CMA Member of AI Digital Committee",
          },
          {
            time: "04:15 PM - 05:15 PM",
            title: "Workshop Hands On Experience",
            speakers: "Prof. Bapiraju, Head, Centre For Cognitive Sciences, IIIT, HYD; Mohan Silaparasetty, Trendwise Analytics AI Bangalore",
          },
          { time: "05:15 PM", title: "Evaluation And Assessment" },
        ],
      },
      {
        hall: "Hall B - Innovation Pitch Fest",
        sessions: [
          {
            time: "09:00 AM - 04:00 PM",
            title: "Critical evaluation of 30 stalls Accreditation & certification",
            speakers: "Prof. Dr. J. A. Jayalal, Prof. Dr.S.Arulrhaj, Sarvesh Singh, Prof. Rajesh Shiva Prakasam, Dr. Sivakumar Dhanaraj, Dr. Murugaraj",
          },
          {
            time: "04:00 PM",
            title: "Announcement of Winners",
            speakers: "Mr. Vijay Anand Sivaprakasam, Founder - Botsystems, USA; Mr. Hari Subramaniam, Banking Investor Bangalore",
            type: "milestone",
          },
        ],
      },
    ],
  },
  {
    label: "Day 2 - November 23",
    tracks: [
      {
        hall: "Hall A - Advanced Sessions & Convocation",
        sessions: [
          {
            time: "09:00 AM - 09:20 AM",
            title: "Implementation of AI in Healthcare",
            speakers: "Prof. Dr. Rajesh Sivaprakasam, Transplant Surgeon & Chair of AI and Robotic Surgery Research Bart's Health, UK; Prof. Dr.S.Arulrhaj, Co Chairman, AI & Digital Health, CMA",
          },
          {
            time: "09:20 AM - 09:40 AM",
            title: "Revolutionizing Heart Care: The Transformative Role of AI in Cardiology",
            speakers: "Chairpersons: Dr. Rajeev Menon, HOD & Clinical Director of Cardiology, AIG; Dr. Anuj Kapadiya, Director of Cathlab & Senior Consultant Cardiologist, AIG",
          },
          {
            time: "09:40 AM - 10:00 AM",
            title: "Translating Research Into Clinically Relevant Applications",
            speakers: "Raja Poladi, Head, Centre For Digital Technologies In Healthcare, IIIT, HYD",
          },
          {
            time: "10:00 AM - 10:20 AM",
            title: "Agentic AI (Google AI Asia)",
            speakers: "Mohan Silaparasetty, Trendwise Analytics AI Bangalore",
          },
          {
            time: "10:20 AM - 10:40 AM",
            title: "AI Robotics - As A Boon For Surgical Team",
            speakers: "Prof. Dr. Rajesh Sivaprakasam, Transplant Surgeon & Chair of AI and Robotic Surgery Research Bart's Health - UK",
          },
          { time: "10:40 AM - 11:00 AM", title: "Coffee / Tea Break", type: "break" },
          {
            time: "11:00 AM - 12:00 PM",
            title: "Debate - AI Will It Replace Doctors?",
            speakers: "Dr. Sivakumar Dhanaraj, Consultant Radiologist Neuroradiologist",
          },
          {
            time: "12:00 PM - 12:30 PM",
            title: "How, When & Where To Implement AI Tools In Healthcare - A Talk Can Offer Practical Tips To Delegates On Using AI Based Tools",
            speakers: "Mahesh BMS",
          },
          {
            time: "12:30 PM - 12:50 PM",
            title: "Environmental pollution & Its Impact on Allergy - Asthma, Respiratory Health",
            speakers: "Dr. Vishnun Rao Veerapaneni, Chairman SWASA Hospital & Foundation",
          },
          { time: "12:50 PM", title: "CMA Convocation follows", type: "milestone" },
        ],
      },
    ],
  },
];
