const CV_SECTIONS = [
  {
    title: "Education",
    emoji: "🎓",
    items: [
      {
        main: "DPhil (PhD) in Information, Communication and the Social Sciences",
        sub: "Oxford Internet Institute, University of Oxford",
        date: "2020–2023",
      },
      {
        main: "MSc in Social Science of the Internet",
        sub: "Oxford Internet Institute, University of Oxford",
        date: "2017–2018",
      },
    ],
  },
  {
    title: "Academic Positions",
    emoji: "🏛️",
    items: [
      {
        main: "Postdoctoral Researcher",
        sub: "Yale University",
        date: "2023–Present",
      },
      {
        main: "Research Associate",
        sub: "Oxford Internet Institute",
        date: "2020–2023",
      },
    ],
  },
  {
    title: "Policy Experience",
    emoji: "📋",
    items: [
      {
        main: "Senior Policy Advisor, AI Ethics & Governance",
        sub: "NHSX / NHS England",
        date: "2018–2020",
      },
    ],
  },
  {
    title: "Selected Awards & Fellowships",
    emoji: "🏆",
    items: [
      {
        main: "Award or Fellowship Name",
        sub: "Awarding body — replace with your actual awards",
        date: "Year",
      },
    ],
  },
];

const SKILLS_BEADS = [
  { label: "AI Ethics", color: "bg-pop-purple text-white" },
  { label: "Health Policy", color: "bg-pop-pink text-white" },
  { label: "Qualitative Methods", color: "bg-pop-blue text-white" },
  { label: "Systematic Reviews", color: "bg-pop-green text-text-primary" },
  { label: "Policy Analysis", color: "bg-pop-yellow text-text-primary" },
  { label: "Public Engagement", color: "bg-pop-coral text-white" },
];

export default function CV() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="bg-peach/40 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Curriculum Vitae ✦
            </h1>
            <p className="text-lg text-text-secondary">
              The academic bits, in one place.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-3 bg-pop-purple text-white rounded-full font-semibold hover:bg-pop-purple/90 transition-all hover:scale-105 shadow-lg shadow-pop-purple/25 shrink-0"
          >
            📄 Download PDF
          </a>
        </div>
      </section>

      {/* CV Content */}
      <section className="py-12 px-4 bg-cream">
        <div className="max-w-4xl mx-auto space-y-10">
          {CV_SECTIONS.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <span>{section.emoji}</span>
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.items.map((item, j) => (
                  <div
                    key={j}
                    className="card-pop bg-white rounded-xl p-5 border border-lavender/30"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <div>
                        <h3 className="font-bold text-text-primary">
                          {item.main}
                        </h3>
                        <p className="text-sm text-text-secondary">{item.sub}</p>
                      </div>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-lavender text-text-secondary shrink-0">
                        {item.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 px-4 bg-light-lilac/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-text-primary mb-6">
            Key Expertise
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {SKILLS_BEADS.map((bead) => (
              <span
                key={bead.label}
                className={`bracelet-bead ${bead.color}`}
              >
                {bead.label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
