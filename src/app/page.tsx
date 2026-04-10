import Link from "next/link";

const HIGHLIGHT_CARDS = [
  {
    emoji: "📝",
    title: "Latest Research",
    description:
      "Exploring AI governance in healthcare, digital ethics frameworks, and the sociotechnical dimensions of health data.",
    href: "/publications",
    color: "bg-lavender",
    borderColor: "border-pop-purple/30",
  },
  {
    emoji: "🎙️",
    title: "Media & Speaking",
    description:
      "BMJ editorials, podcast appearances, and commentary on digital health policy and AI ethics.",
    href: "/media",
    color: "bg-soft-pink",
    borderColor: "border-pop-pink/30",
  },
  {
    emoji: "🎓",
    title: "Teaching",
    description:
      "Courses on digital ethics, health policy, and responsible innovation at Yale and beyond.",
    href: "/teaching",
    color: "bg-mint",
    borderColor: "border-pop-green/30",
  },
];

const INTEREST_BEADS = [
  { label: "AI Ethics", color: "bg-pop-purple text-white" },
  { label: "NHS Digital", color: "bg-pop-blue text-white" },
  { label: "Health Data", color: "bg-pop-pink text-white" },
  { label: "Public Health", color: "bg-pop-green text-text-primary" },
  { label: "Governance", color: "bg-pop-yellow text-text-primary" },
  { label: "Bioethics", color: "bg-pop-coral text-white" },
];

export default function Home() {
  return (
    <div className="page-enter">
      {/* Hero Section */}
      <section className="animated-gradient py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-6">✨</div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
            Hi, I&apos;m{" "}
            <span className="shimmer-text">Jessica Morley</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-8">
            Digital ethics and health policy researcher at Yale. I work at the
            intersection of AI ethics, health data governance, and public health
            — trying to make sure we get the technology right for the people who
            need it most.
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
                <div className="text-3xl mb-3">{card.emoji}</div>
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
