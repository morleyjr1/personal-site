"use client";

import { useState } from "react";

const CATEGORIES = [
  { label: "All", color: "bg-text-primary text-white" },
  { label: "AI Ethics", color: "bg-pop-purple text-white" },
  { label: "Health Data", color: "bg-pop-pink text-white" },
  { label: "NHS Policy", color: "bg-pop-blue text-white" },
  { label: "Public Health", color: "bg-pop-green text-text-primary" },
  { label: "Editorials", color: "bg-pop-yellow text-text-primary" },
];

// Placeholder publications — these will come from the CMS later
const PUBLICATIONS = [
  {
    title:
      "The ethics of AI in health care: a mapping review of the landscape",
    journal: "Social Science & Medicine",
    year: 2020,
    category: "AI Ethics",
    description:
      "A comprehensive mapping review identifying key ethical themes in AI healthcare deployment, categorised across epistemic, normative, and traceability concerns.",
    color: "border-pop-purple/30",
  },
  {
    title: "Digital health and the NHS: the quick and the dead",
    journal: "BMJ",
    year: 2022,
    category: "NHS Policy",
    description:
      "An editorial examining the gap between digital health policy ambitions and implementation realities within the NHS.",
    color: "border-pop-blue/30",
  },
  {
    title:
      "Operationalising AI ethics: barriers, enablers and next steps",
    journal: "AI & Society",
    year: 2023,
    category: "AI Ethics",
    description:
      "An analysis of why AI ethics principles fail to translate into practice, with proposals for closing the implementation gap.",
    color: "border-pop-purple/30",
  },
  {
    title: "Health data governance in the digital age",
    journal: "The Lancet Digital Health",
    year: 2023,
    category: "Health Data",
    description:
      "Examining how health data governance frameworks need to evolve to address the challenges posed by AI and large-scale data analytics.",
    color: "border-pop-pink/30",
  },
  {
    title:
      "Public health in the algorithmic age: challenges and opportunities",
    journal: "Journal of Public Health",
    year: 2024,
    category: "Public Health",
    description:
      "Exploring how algorithmic systems are reshaping public health practice and the governance implications for population-level interventions.",
    color: "border-pop-green/30",
  },
  {
    title: "Getting AI regulation right for healthcare",
    journal: "BMJ",
    year: 2024,
    category: "Editorials",
    description:
      "An editorial arguing for proportionate, evidence-based AI regulation in healthcare that protects patients without stifling beneficial innovation.",
    color: "border-pop-yellow/30",
  },
];

export default function Publications() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PUBLICATIONS
      : PUBLICATIONS.filter((p) => p.category === activeFilter);

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="bg-soft-pink/40 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Publications 📝
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl">
            A selection of my published work across AI ethics, health data
            governance, NHS policy, and public health. For a complete list, see
            my{" "}
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pop-purple font-semibold hover:underline"
            >
              Google Scholar profile
            </a>
            .
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-cream border-b border-lavender/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setActiveFilter(cat.label)}
                className={`bracelet-bead ${
                  activeFilter === cat.label
                    ? `${cat.color} ring-2 ring-gold ring-offset-2 ring-offset-cream`
                    : "bg-lavender/50 text-text-secondary"
                } transition-all`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Publication list */}
      <section className="py-12 px-4 bg-cream">
        <div className="max-w-4xl mx-auto space-y-4">
          {filtered.map((pub, i) => (
            <article
              key={i}
              className={`card-pop bg-white rounded-xl p-6 border ${pub.color} glitter-hover cursor-pointer`}
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-lavender text-text-secondary">
                  {pub.year}
                </span>
                <span className="text-xs font-medium text-pop-purple">
                  {pub.journal}
                </span>
              </div>
              <h3 className="font-bold text-text-primary text-lg mb-2">
                {pub.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {pub.description}
              </p>
            </article>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-12 text-text-light">
              <p className="text-4xl mb-4">🔍</p>
              <p>No publications in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
