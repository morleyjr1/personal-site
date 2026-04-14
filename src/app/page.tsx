import Link from "next/link";
import Image from "next/image";
import { PUBLICATIONS } from "@/data/publications";

const HIGHLIGHT_CARDS = [
  {
    image: "/images/focused-research.png",
    title: "Latest Research",
    description:
      "From the inverse data quality law to the translational gap between ethical principles and clinical practice — my research programme sits at the intersection of philosophy, public health, and regulatory science.",
    href: "/publications",
    color: "bg-lavender",
    borderColor: "border-pop-purple/30",
  },
  {
    image: "/images/presenting-ai-ethics.png",
    title: "Media & Speaking",
    description:
      "BMJ editorials, BBC Radio 4, the Financial Times, and the occasional panel where I say what everyone else is thinking about NHS data governance.",
    href: "/media",
    color: "bg-soft-pink",
    borderColor: "border-pop-pink/30",
  },
  {
    image: "/images/teaching.png",
    title: "Teaching",
    description:
      "My course on thinking critically about AI in health care.",
    href: "/teaching",
    color: "bg-mint",
    borderColor: "border-pop-green/30",
  },
];

const INTEREST_BEADS = [
  { label: "AI & Health Policy", color: "bg-pop-purple text-white" },
  { label: "Digital Health Governance", color: "bg-pop-blue text-white" },
  { label: "Public Health", color: "bg-pop-green text-text-primary" },
  { label: "NHS Data Policy", color: "bg-pop-pink text-white" },
  { label: "Bioethics", color: "bg-pop-coral text-white" },
  { label: "Health Data Science", color: "bg-pop-yellow text-text-primary" },
  { label: "Causal Inference", color: "bg-pop-blue text-white" },
  { label: "Regulatory Science", color: "bg-pop-purple text-white" },
];

export default function Home() {
  // Most recent publication (first in the list, which is ordered newest-first)
  const latest = PUBLICATIONS[0];

  return (
    <div className="page-enter">
      {/* Hero Section */}
      <section className="animated-gradient py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Image
              src="/images/dr-j-logo.png"
              alt="Dr. J logo"
              width={120}
              height={120}
              className="mx-auto rounded-full"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
            Hi, I&apos;m{" "}
            <span className="shimmer-text">Jessica Morley</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-8">
            I&apos;m an Associate Research Scientist at Yale&apos;s Digital
            Ethics Center, working on the political philosophy of health AI:
            what it should be optimising for, why it has been assigned the wrong
            target, and what it would take to get to the right one. Part
            philosopher, part policy wonk, part digilante.
          </p>

          {/* Research interest beads */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {INTEREST_BEADS.map((bead) => (
              <span
                key={bead.label}
                className={`bracelet-bead ${bead.color}`}
              >
                {bead.label}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="px-6 py-3 bg-pop-purple text-white rounded-full font-semibold hover:bg-pop-purple/90 transition-all hover:scale-105 shadow-lg shadow-pop-purple/25"
            >
              Learn more about me
            </Link>
            <Link
              href="/publications"
              className="px-6 py-3 bg-white/80 text-text-primary rounded-full font-semibold hover:bg-white transition-all hover:scale-105 border border-lavender"
            >
              See my research
            </Link>
          </div>
        </div>
      </section>

      {/* Latest banner */}
      <section className="py-8 px-4 bg-cream border-y border-lavender/40">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/publications"
            className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5 bg-gradient-to-r from-pop-yellow/20 via-pop-pink/15 to-pop-purple/20 rounded-2xl p-4 md:p-5 border border-pop-purple/30 hover:shadow-lg hover:shadow-pop-purple/20 transition-all group"
          >
            <div className="flex items-center gap-2 shrink-0">
              <span className="inline-flex items-center gap-1.5 bg-pop-purple text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Latest
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-text-secondary">
                {latest.type === "editorial" ? "Editorial" : latest.type === "journal" ? "Journal Article" : "Publication"}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base md:text-lg font-bold text-text-primary leading-snug group-hover:text-pop-purple transition-colors">
                {latest.title}
              </p>
              <p className="text-sm text-text-secondary mt-0.5">
                {latest.authors} · <span className="text-pop-purple font-medium">{latest.journal}</span> ({latest.year})
              </p>
            </div>
            <span className="text-pop-purple font-semibold text-sm shrink-0 whitespace-nowrap">
              Read →
            </span>
          </Link>
        </div>
      </section>

      {/* Highlight Cards */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary text-center mb-12">
            What I&apos;m working on ✦
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HIGHLIGHT_CARDS.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className={`card-pop ${card.color} ${card.borderColor} border rounded-2xl p-6 block glitter-hover`}
              >
                <div className="mb-3 relative w-16 h-16">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={64}
                    height={64}
                    className="rounded-xl object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {card.description}
                </p>
                <span className="inline-block mt-4 text-sm font-semibold text-pop-purple">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fun quote / Easter egg */}
      <section className="py-12 px-4 bg-light-lilac/30">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-text-light text-sm italic">
            &quot;Long story short, I survived&quot; — but mostly I research, and then
            I write about it in peer-reviewed journals. ✨
          </p>
        </div>
      </section>
    </div>
  );
}
