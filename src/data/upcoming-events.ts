/**
 * Upcoming talks, keynotes, and panels.
 *
 * Schema:
 *   title    — name of the talk / event
 *   date     — ISO date "YYYY-MM-DD" (used for sorting + auto-hiding past events)
 *   dateLabel — human-readable date shown on the page (e.g. "12 June 2026")
 *   location — city, venue, or "Online"
 *   host     — organisation hosting the event (mirrors "outlet" on the Media page)
 *   blurb    — 1–2 sentences on what the talk is about (optional)
 *   url      — registration / info link (optional; omit if not yet public)
 *
 * Past events (date < today) are filtered out automatically by the /upcoming page,
 * so old entries can be left here briefly until you move them to the Media page.
 */

export type UpcomingEvent = {
  title: string;
  date: string;        // ISO: "2026-06-12"
  dateLabel: string;   // Display: "12 June 2026"
  location: string;
  host: string;
  blurb?: string;
  url?: string;
};

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    title: "From analogue to digital: artificial intelligence in the NHS",
    date: "2026-05-13",
    dateLabel: "13 May 2026",
    location: "London, UK",
    host: "Royal College of Physicians",
    blurb:
      "Professor Alastair Denniston will present for 15 minutes on the regulation of AI in medicine, I will present for 15 minutes on the ethics of AI in medicine, then there will be a panel discussion.",
    url: "https://rcpmedicine.co.uk/2026/programme",
  },
   {
    title: "The role of AI in health and care planning, delivery, and rapid evaluation – now and in the future",
    date: "2026-05-13",
    dateLabel: "13 May 2026",
    location: "London, UK",
    host: "Nuffield Trust",
    blurb:
      "Myself and Thea Stein, Chief Executive of the Nuffield Trust, will sit down for a fireside chat and audience Q&A to talk all things evidence and AI in medicine.",
    url: "https://www.nuffieldtrust.org.uk/event/rapid-evaluation-in-health-care-2026-0",
  },
   {
    title: "Rethinking AI, Tech and Health Equity in Medicine",
    date: "2026-05-15",
    dateLabel: "15 May 2026",
    location: "Oxford, UK",
    host: "Green Templeton College, University of Oxford",
    blurb:
      "This year’s Human Welfare Conference explores how AI and related technologies can be developed and deployed in ways that genuinely serve human welfare, rather than reinforce existing inequalities. I will give the afternoon keynote lecture on the Health AI alignment problem.",
    url: "https://www.gtc.ox.ac.uk/news-and-events/event/rethinking-ai-tech-health-equity-in-medicine/",
  },
 {
    title: "Festival of Global Health: The Thinking Game",
    date: "2026-05-13",
    dateLabel: "13 May 2026",
    location: "Oxford, UK",
    host: "Oxford Population Health",
    blurb:
      "The film The Thinking Game about the AI company DeepMind will be screened. After the screening i will participate in a panel discussion about the ethical implications raised. Pizza and snacks will be provided after the panel discussion.",
    url: "https://www.eventbrite.co.uk/e/festival-of-global-health-the-thinking-game-tickets-1987379840602",
  },
 {
    title: "21st Medical Dermatology Meeting 2026",
    date: "2026-05-21",
    dateLabel: "21 May 2026",
    location: "Online",
    host: "British Association of Dermatologists",
    blurb:
      "I will give a 30 minute online talk about the ethics of AI in healthcare and, in particular, the role of systems design in governing its use.",
    url: "https://bad.org.uk/events/21st-medical-dermatology-meeting-2026",
  },
   {
    title: "AI, Precision Medicine and Solidarity Workshop",
    date: "2026-05-18",
    dateLabel: "18 May 2026 - 21 May 2026",
    location: "Lake Geneva, Switzerland",
    host: "Brocher Foundation",
    blurb:
      "Artificial intelligence and precision medicine are rapidly transforming medical practices. However, these innovations raise questions about equity, solidarity and access to care. This workshop explores the ethical implications of these technologies and examines how health systems can integrate these innovations while preserving the fundamental principles of justice and equity.",
    url: "https://fondation-brocher.ch/event/workshop-3-ai-precision-medicine-and-solidarity/",
  },
];
