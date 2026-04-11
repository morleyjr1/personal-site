"use client";

import { useState, useMemo } from "react";
import { PUBLICATIONS, type PublicationType, type Publication } from "@/data/publications";

/* ── Floating Teapot ─────────────────────────────────────────────── */
function FloatingTeapot() {
  return (
    <div className="hidden lg:flex fixed left-6 top-1/4 z-30 flex-col items-center pointer-events-none select-none" style={{ width: "180px" }}>
      <svg
        width="180"
        height="200"
        viewBox="0 0 180 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── Teapot (top-right, tilted to pour) ── */}
        <g className="teapot-bob" style={{ transformOrigin: "120px 50px" }}>
          {/* Teapot body */}
          <ellipse cx="110" cy="55" rx="38" ry="30" fill="#F5E6D3" stroke="#C4956A" strokeWidth="2.5" />
          {/* Lid */}
          <ellipse cx="110" cy="28" rx="22" ry="7" fill="#D4A574" stroke="#C4956A" strokeWidth="2" />
          {/* Lid knob */}
          <circle cx="110" cy="20" r="5" fill="#D4A574" stroke="#C4956A" strokeWidth="2" />
          {/* Spout - curves down towards cup */}
          <path d="M148 48 Q162 42 166 30 Q168 24 164 20" stroke="#C4956A" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Handle */}
          <path d="M72 38 Q56 48 58 62 Q60 74 72 72" stroke="#C4956A" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Flower decorations on teapot */}
          <circle cx="100" cy="50" r="4" fill="#E8775C" opacity="0.8" />
          <circle cx="100" cy="50" r="1.5" fill="#F5E6D3" />
          <circle cx="112" cy="58" r="3.5" fill="#E8775C" opacity="0.8" />
          <circle cx="112" cy="58" r="1.3" fill="#F5E6D3" />
          <circle cx="122" cy="48" r="3" fill="#E8775C" opacity="0.7" />
          <circle cx="122" cy="48" r="1.2" fill="#F5E6D3" />
          {/* Tiny leaves between flowers */}
          <ellipse cx="106" cy="53" rx="3" ry="1.5" fill="#8DB580" opacity="0.7" transform="rotate(-30 106 53)" />
          <ellipse cx="117" cy="52" rx="2.5" ry="1.2" fill="#8DB580" opacity="0.7" transform="rotate(20 117 52)" />
        </g>

        {/* ── Pour stream from spout to cup ── */}
        <path
          className="pour-stream"
          d="M164 22 Q166 40 158 70 Q152 90 140 108"
          stroke="#C4956A"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* ── Tea bag (hanging left) ── */}
        <g>
          {/* String from teapot */}
          <path d="M78 65 Q70 80 55 95" stroke="#A0845C" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
          {/* Tag */}
          <rect x="42" y="92" width="16" height="12" rx="2" fill="#F5E6D3" stroke="#C4956A" strokeWidth="1.5" />
          {/* Tag text line */}
          <line x1="46" y1="97" x2="54" y2="97" stroke="#C4956A" strokeWidth="1" opacity="0.5" />
          {/* Tea bag */}
          <path d="M52 104 L48 118 Q50 122 56 122 Q62 122 64 118 L60 104" fill="#D4A574" stroke="#C4956A" strokeWidth="1.5" />
        </g>

        {/* ── Cup 1 (receiving pour) ── */}
        <g>
          {/* Cup body */}
          <path d="M120 118 L124 155 Q135 162 146 155 L150 118 Z" fill="#F5E6D3" stroke="#C4956A" strokeWidth="2" />
          {/* Tea inside */}
          <ellipse cx="135" cy="122" rx="15" ry="5" fill="#D4A574" opacity="0.6" />
          {/* Cup rim */}
          <ellipse cx="135" cy="118" rx="16" ry="5.5" fill="none" stroke="#C4956A" strokeWidth="2" />
          {/* Handle */}
          <path d="M150 125 Q162 128 161 138 Q160 148 150 148" stroke="#C4956A" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Flower on cup */}
          <circle cx="135" cy="140" r="3" fill="#E8775C" opacity="0.7" />
          <circle cx="135" cy="140" r="1.2" fill="#F5E6D3" />
          {/* Steam */}
          <circle className="steam" cx="128" cy="108" r="3" fill="#C4956A" opacity="0.15" />
          <circle className="steam" cx="135" cy="106" r="2.5" fill="#C4956A" opacity="0.12" />
          <circle className="steam" cx="142" cy="109" r="3" fill="#C4956A" opacity="0.15" />
        </g>

        {/* ── Cup 2 (left, already poured) ── */}
        <g>
          {/* Cup body */}
          <path d="M22 130 L26 165 Q36 172 46 165 L50 130 Z" fill="#F5E6D3" stroke="#C4956A" strokeWidth="2" />
          {/* Tea inside */}
          <ellipse cx="36" cy="134" rx="14" ry="5" fill="#D4A574" opacity="0.6" />
          {/* Cup rim */}
          <ellipse cx="36" cy="130" rx="15" ry="5.5" fill="none" stroke="#C4956A" strokeWidth="2" />
          {/* Handle */}
          <path d="M50 137 Q62 140 61 150 Q60 160 50 158" stroke="#C4956A" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Flower on cup */}
          <circle cx="36" cy="150" r="3" fill="#E8775C" opacity="0.7" />
          <circle cx="36" cy="150" r="1.2" fill="#F5E6D3" />
          {/* Steam */}
          <circle className="steam" cx="30" cy="120" r="3" fill="#C4956A" opacity="0.15" />
          <circle className="steam" cx="36" cy="118" r="2.5" fill="#C4956A" opacity="0.12" />
          <circle className="steam" cx="42" cy="121" r="3" fill="#C4956A" opacity="0.15" />
        </g>
      </svg>

      {/* Label */}
      <p className="text-base text-text-secondary font-semibold mt-1 text-center whitespace-nowrap" style={{ fontFamily: "Georgia, serif" }}>
        cuppa whilst<br />you read? 🫖
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
