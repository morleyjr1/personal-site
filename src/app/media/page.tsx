const MEDIA_ITEMS = [
  {
    type: "Editorial",
    title: "Why the NHS needs a new approach to AI governance",
    outlet: "BMJ",
    date: "March 2024",
    emoji: "📰",
    color: "bg-pop-pink/10 border-pop-pink/30",
  },
  {
    type: "Podcast",
    title: "The ethics of health data: who decides?",
    outlet: "Digital Health Podcast",
    date: "January 2024",
    emoji: "🎙️",
    color: "bg-pop-purple/10 border-pop-purple/30",
  },
  {
    type: "Talk",
    title: "Proportionate governance for AI in healthcare",
    outlet: "WHO Digital Health Forum",
    date: "November 2023",
    emoji: "🎤",
    color: "bg-pop-blue/10 border-pop-blue/30",
  },
  {
    type: "Commentary",
    title: "The Palantir question: what the NHS FDP means for patients",
    outlet: "The Guardian",
    date: "September 2023",
    emoji: "💬",
    color: "bg-pop-green/10 border-pop-green/30",
  },
  {
    type: "Panel",
    title: "AI regulation: getting it right before it goes wrong",
    outlet: "Ada Lovelace Institute",
    date: "June 2023",
    emoji: "👥",
    color: "bg-pop-yellow/10 border-pop-yellow/30",
  },
  {
    type: "Editorial",
    title: "Digital health and the NHS: the quick and the dead",
    outlet: "BMJ",
    date: "February 2022",
    emoji: "📰",
    color: "bg-pop-coral/10 border-pop-coral/30",
  },
];

export default function Media() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="bg-mint/40 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Media &amp; Speaking 🎙️
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl">
            Editorials, podcast appearances, panel discussions, and commentary.
            I write and speak about AI ethics, health data governance, and
            digital health policy — always with the aim of making complex issues
            accessible and actionable.
          </p>
        </div>
      </section>

      {/* Media items */}
      <section className="py-12 px-4 bg-cream">
        <div className="max-w-4xl mx-auto space-y-4">
          {MEDIA_ITEMS.map((item, i) => (
            <article
              key={i}
              className={`card-pop rounded-xl p-6 border ${item.color} glitter-hover cursor-pointer flex gap-4 items-start`}
            >
              <div className="text-3xl shrink-0">{item.emoji}</div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-lavender text-text-secondary">
                    {item.type}
                  </span>
                  <span className="text-xs text-text-light">{item.date}</span>
                </div>
                <h3 className="font-bold text-text-primary text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-pop-purple font-medium">
                  {item.outlet}
                </p>
              </div>
              <span className="text-pop-purple text-sm font-semibold shrink-0 hidden sm:block">
                View →
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-light-lilac/30 text-center">
        <p className="text-text-secondary">
          Interested in having me speak at your event or contribute to your
          publication?{" "}
          <a
            href="mailto:jessica.morley@yale.edu"
            className="text-pop-purple font-semibold hover:underline"
          >
            Get in touch
          </a>
          . ✨
        </p>
      </section>
    </div>
  );
}
