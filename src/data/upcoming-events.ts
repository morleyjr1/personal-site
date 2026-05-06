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
  // Example — replace with real events
  {
    title: "Example talk title",
    date: "2026-09-15",
    dateLabel: "15 September 2026",
    location: "London, UK",
    host: "Hosting organisation",
    blurb:
      "A short description of the talk topic. Two sentences max — keep it punchy.",
    url: "https://example.com/event",
  },
];
