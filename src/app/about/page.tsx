const TIMELINE = [
  {
    year: "Now",
    role: "Researcher, Yale University",
    description:
      "Working on AI ethics, health data governance, and digital health policy.",
    color: "bg-pop-purple",
  },
  {
    year: "2020–23",
    role: "Oxford Internet Institute",
    description:
      "DPhil research on the ethics of AI in healthcare and digital health technologies.",
    color: "bg-pop-pink",
  },
  {
    year: "2018–20",
    role: "NHSX / NHS England",
    description:
      "Policy lead on AI ethics and digital health governance from inside the system.",
    color: "bg-pop-blue",
  },
];

const VALUES_BEADS = [
  { label: "Rigour", color: "bg-pop-purple text-white" },
  { label: "Equity", color: "bg-pop-pink text-white" },
  { label: "Transparency", color: "bg-pop-blue text-white" },
  { label: "Constructive Critique", color: "bg-pop-green text-text-primary" },
  { label: "Public Interest", color: "bg-pop-yellow text-text-primary" },
];

export default function About() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="bg-lavender/40 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            About me ✦
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-3xl">
            I&apos;m a digital ethics and health policy researcher currently
            based at Yale. My work sits at the intersection of AI ethics, health
            data governance, NHS digital policy, and public health. I&apos;ve
            worked inside the system (at NHSX) and study it from the outside —
            which means I know both why things go wrong and what it would take to
            get them right.
          </p>
        </div>
      </section>

      {/* Bio detail */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Photo placeholder */}
            <div className="md:col-span-1">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-lavender to-soft-pink flex items-center justify-center text-6xl shadow-lg">
                🧑‍🔬
              </div>
              <p className="text-xs text-text-light text-center mt-3 italic">
                Replace with your photo!
              </p>
            </div>

            {/* Extended bio */}
            <div className="md:col-span-2 space-y-4 text-text-secondary leading-relaxed">
              <p>
                My research focuses on the governance challenges that arise when
                AI and data-driven technologies are deployed in healthcare
                settings. I&apos;m particularly interested in how we can build
                governance frameworks that are proportionate, evidence-based, and
                genuinely protective of patients and the public — rather than
                frameworks that simply provide ethical cover for the status quo.
              </p>
              <p>
                Before moving into academia, I spent time at NHSX working on AI
                ethics and governance policy. That experience shaped my conviction
                that the gap between what policymakers promise about digital
                health and what actually gets delivered to patients is one of the
                most important problems in health policy today.
              </p>
              <p>
                I write regularly for the BMJ, publish in journals spanning
                digital ethics, health policy, and public health, and speak at
                events on responsible AI governance. When I&apos;m not doing that,
                you&apos;ll probably find me making friendship bracelets, building
                elaborate Spotify playlists, or trying to explain to non-academics
                why the Palantir NHS contract matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 px-4 bg-light-lilac/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            What drives my work
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {VALUES_BEADS.map((bead) => (
              <span
                key={bead.label}
                className={`bracelet-bead ${bead.color} text-sm`}
              >
                {bead.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-10 text-center">
            Where I&apos;ve been ✨
          </h2>
          <div className="space-y-6">
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-start card-pop bg-white rounded-xl p-5 border border-lavender/30"
              >
                <div
                  className={`${item.color} text-white text-sm font-bold px-3 py-1 rounded-full shrink-0`}
                >
                  {item.year}
                </div>
                <div>
                  <h3 className="font-bold text-text-primary">{item.role}</h3>
                  <p className="text-sm text-text-secondary mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
