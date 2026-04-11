"use client";

import { useState, useMemo } from "react";
import { PUBLICATIONS, type PublicationType, type Publication } from "@/data/publications";

/* ── Floating Teapot ─────────────────────────────────────────────── */
function FloatingTeapot() {
  return (
    <div className="hidden lg:flex fixed right-6 top-1/3 z-30 flex-col items-center gap-0 pointer-events-none select-none">
      {/* Teapot */}
      <svg
        className="teapot-bob"
        width="80"
        height="64"
        viewBox="0 0 80 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Body */}
        <ellipse cx="36" cy="40" rx="26" ry="20" fill="var(--lavender)" stroke="var(--pop-purple)" strokeWidth="2" />
        {/* Lid */}
        <ellipse cx="36" cy="22" rx="16" ry="5" fill="var(--soft-pink)" stroke="var(--pop-purple)" strokeWidth="2" />
        {/* Lid knob */}
        <circle cx="36" cy="17" r="4" fill="var(--pop-pink)" stroke="var(--pop-purple)" strokeWidth="1.5" />
        {/* Spout */}
        <path d="M62 36 Q72 32 74 24" stroke="var(--pop-purple)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Handle */}
        <path d="M10 30 Q-2 40 10 50" stroke="var(--pop-purple)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Sparkle on teapot */}
        <text x="30" y="44" fontSize="10" fill="var(--pop-purple)" opacity="0.6">✦</text>
      </svg>

      {/* Pour stream */}
      <div
        className="pour-stream w-1 rounded-full"
        style={{ background: "linear-gradient(to bottom, var(--pop-purple), var(--lavender))", marginTop: "-4px", marginLeft: "38px" }}
      />

      {/* Cup */}
      <svg
        width="56"
        height="44"
        viewBox="0 0 56 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginTop: "-2px", marginLeft: "20px" }}
      >
        {/* Cup body */}
        <path d="M6 8 L10 38 Q22 44 34 38 L38 8 Z" fill="var(--soft-pink)" stroke="var(--pop-purple)" strokeWidth="2" />
        {/* Tea surface */}
        <ellipse cx="22" cy="12" rx="16" ry="5" fill="var(--lavender)" stroke="var(--pop-purple)" strokeWidth="1.5" />
        {/* Handle */}
        <path d="M38 14 Q50 18 48 28 Q46 36 38 34" stroke="var(--pop-purple)" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Steam wisps */}
        <circle className="steam" cx="14" cy="4" r="2.5" fill="var(--pop-purple)" opacity="0.2" />
        <circle className="steam" cx="22" cy="2" r="2" fill="var(--pop-pink)" opacity="0.2" />
        <circle className="steam" cx="30" cy="4" r="2.5" fill="var(--pop-purple)" opacity="0.15" />
      </svg>

      {/* Label */}
      <p className="text-xs text-pop-purple font-semibold mt-2 text-center whitespace-nowrap">
        cuppa whilst<br />you read? ☕
      </p>
    </div>
  );
}

/* ── Expandable Lay Summary ──────────────────────────────────────── */
function LaySummaryToggle({ summary }: { summary: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-3">
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(!open);
        }}
        className="text-xs font-semibold text-pop-pink hover:text-pop-purple transition-colors flex items-center gap-1"
      >
        <span>{open ? "▾" : "▸"}</span>
        {open ? "Hide plain-English summary" : "Read the plain-English version"}
      </button>
      {open && (
        <div className="mt-2 p-3 bg-soft-pink/20 rounded-lg border border-pop-pink/20 text-sm text-text-secondary leading-relaxed">
          {summary}
        </div>
      )}
    </div>
  );
}

const TYPE_LABELS: Record<PublicationType, string> = {
  journal: "Journal Article",
  editorial: "Editorial",
  chapter: "Book Chapter",
  report: "Report",
  preprint: "Preprint",
  thesis: "Thesis",
};

const TYPE_COLORS: Record<PublicationType, string> = {
  journal: "bg-pop-purple text-white",
  editorial: "bg-pop-pink text-white",
  chapter: "bg-pop-blue text-white",
  report: "bg-pop-green text-text-primary",
  preprint: "bg-pop-yellow text-text-primary",
  thesis: "bg-pop-coral text-white",
};

const TOPIC_TAGS = [
  "AI Ethics",
  "Health Data",
  "NHS Policy",
  "Digital Health",
  "OpenSAFELY",
  "COVID-19",
  "Regulation",
  "Public Health",
  "Clinical Trials",
];

const TOPIC_COLORS: Record<string, string> = {
  "AI Ethics": "bg-pop-purple text-white",
  "Health Data": "bg-pop-pink text-white",
  "NHS Policy": "bg-pop-blue text-white",
  "Digital Health": "bg-pop-green text-text-primary",
  "OpenSAFELY": "bg-pop-yellow text-text-primary",
  "COVID-19": "bg-pop-coral text-white",
  Regulation: "bg-lavender text-text-primary",
  "Public Health": "bg-mint text-text-primary",
  "Clinical Trials": "bg-peach text-text-primary",
};

export default function Publications() {
  const [showFirstAuthorOnly, setShowFirstAuthorOnly] = useState(false);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const years = useMemo(() => {
    const yearSet = new Set(PUBLICATIONS.map((p) => p.year));
    return Array.from(yearSet).sort((a, b) => b - a);
  }, []);

  const filtered = useMemo(() => {
    return PUBLICATIONS.filter((pub) => {
      if (showFirstAuthorOnly && !pub.firstAuthor) return false;
      if (activeTopic && !pub.tags.includes(activeTopic)) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          pub.title.toLowerCase().includes(q) ||
          pub.authors.toLowerCase().includes(q) ||
          pub.journal.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [showFirstAuthorOnly, activeTopic, searchQuery]);

  const groupedByYear = useMemo(() => {
    const groups: Record<number, typeof filtered> = {};
    for (const pub of filtered) {
      if (!groups[pub.year]) groups[pub.year] = [];
      groups[pub.year].push(pub);
    }
    return groups;
  }, [filtered]);

  const totalCount = PUBLICATIONS.length;
  const firstAuthorCount = PUBLICATIONS.filter((p) => p.firstAuthor).length;

  return (
    <div className="page-enter">
      <FloatingTeapot />

      {/* Hero */}
      <section className="bg-soft-pink/40 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto flex items-start gap-6">
          <img
            src="/images/focused-research.png"
            alt="Research"
            className="hidden md:block w-40 rounded-2xl shadow-md shrink-0"
          />
          <div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Publications ✦
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mb-4">
            {totalCount} publications including {firstAuthorCount} first-authored
            papers, spanning AI ethics, health data governance, NHS policy, and
            digital health. For citation metrics, see my{" "}
            <a
              href="https://scholar.google.co.uk/citations?user=hp-k6QwAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pop-purple font-semibold hover:underline"
            >
              Google Scholar profile
            </a>
            .
          </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 px-4 bg-cream border-b border-lavender/30 sticky top-[57px] z-40 backdrop-blur-md bg-cream/90">
        <div className="max-w-4xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Search by title, author, or journal..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-full border border-lavender bg-white text-text-primary placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-pop-purple/30 focus:border-pop-purple text-sm"
          />

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowFirstAuthorOnly(!showFirstAuthorOnly)}
              className={`bracelet-bead relative z-10 transition-all ${
                showFirstAuthorOnly
                  ? "bg-gold text-text-primary ring-2 ring-pop-purple ring-offset-1 ring-offset-cream"
                  : "bg-white border-lavender border text-text-secondary"
              }`}
            >
              ★ First Author
            </button>

            <span className="text-text-light text-xs mx-1">|</span>

            {TOPIC_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() =>
                  setActiveTopic(activeTopic === tag ? null : tag)
                }
                className={`bracelet-bead relative z-10 text-xs transition-all ${
                  activeTopic === tag
                    ? `${TOPIC_COLORS[tag]} ring-2 ring-gold ring-offset-1 ring-offset-cream`
                    : "bg-lavender/50 text-text-secondary hover:bg-lavender"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <p className="text-xs text-text-light">
            Showing {filtered.length} of {totalCount} publications
          </p>
        </div>
      </section>

      {/* Publication list grouped by year */}
      <section className="py-8 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          {years.map((year) => {
            const pubs = groupedByYear[year];
            if (!pubs || pubs.length === 0) return null;

            return (
              <div key={year} className="mb-10">
                <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
                  <span className="text-pop-purple">{year}</span>
                  <span className="text-sm font-normal text-text-light">
                    ({pubs.length} paper{pubs.length !== 1 ? "s" : ""})
                  </span>
                </h2>

                <div className="space-y-3">
                  {pubs.map((pub, i) => (
                    <div
                      key={`${year}-${i}`}
                      className={`card-pop bg-white rounded-xl p-5 border transition-all ${
                        pub.firstAuthor
                          ? "border-pop-purple/30 border-l-4 border-l-pop-purple"
                          : "border-lavender/50"
                      }`}
                    >
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="flex flex-wrap items-center gap-1.5 mb-2">
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                              TYPE_COLORS[pub.type]
                            }`}
                          >
                            {TYPE_LABELS[pub.type]}
                          </span>
                          {pub.firstAuthor && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-gold/30 text-text-primary font-medium">
                              ★ First Author
                            </span>
                          )}
                          {pub.laySummary && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-pop-pink/20 text-pop-pink font-medium">
                              ✦ Plain-English version
                            </span>
                          )}
                        </div>
                        <h3 className="font-bold text-text-primary leading-snug mb-1">
                          {pub.title}
                        </h3>
                        <p className="text-sm text-text-secondary mb-1">
                          {pub.authors}
                        </p>
                        <p className="text-sm text-pop-purple font-medium">
                          {pub.journal}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {pub.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-0.5 rounded-full bg-light-lilac text-text-secondary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </a>
                      {pub.laySummary && (
                        <LaySummaryToggle summary={pub.laySummary} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {filtered.length === 0 && (
            <div className="text-center py-16 text-text-light">
              <p className="text-4xl mb-4">🔍</p>
              <p>
                No publications match your filters. Try broadening your search.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
