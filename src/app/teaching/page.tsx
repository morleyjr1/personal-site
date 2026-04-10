const COURSES = [
  {
    title: "Digital Ethics and Governance",
    institution: "Yale University",
    term: "Spring 2026",
    description:
      "An interdisciplinary course examining the ethical, social, and governance challenges arising from digital technologies in health and public policy. Covers AI ethics, data governance, algorithmic accountability, and the sociotechnical dimensions of digital health.",
    emoji: "🤖",
    color: "bg-lavender",
    borderColor: "border-pop-purple/30",
  },
  {
    title: "Health Policy and Technology",
    institution: "Yale University",
    term: "Autumn 2025",
    description:
      "Explores the relationship between health policy and emerging technologies, with a focus on the NHS, digital health transformation, and the governance frameworks needed to ensure equitable access to technology-driven healthcare.",
    emoji: "🏥",
    color: "bg-soft-pink",
    borderColor: "border-pop-pink/30",
  },
  {
    title: "Research Methods in Digital Health Ethics",
    institution: "Guest Lectures",
    term: "Various",
    description:
      "Guest lectures on qualitative and mixed-methods approaches to studying the ethical implications of digital health technologies, including mapping reviews, framework analysis, and stakeholder engagement methodologies.",
    emoji: "🔬",
    color: "bg-mint",
    borderColor: "border-pop-green/30",
  },
];

const SUPERVISION_AREAS = [
  { label: "AI Ethics", color: "bg-pop-purple text-white" },
  { label: "Digital Health", color: "bg-pop-pink text-white" },
  { label: "Data Governance", color: "bg-pop-blue text-white" },
  { label: "NHS Policy", color: "bg-pop-green text-text-primary" },
  { label: "Public Health Ethics", color: "bg-pop-yellow text-text-primary" },
];

export default function Teaching() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="bg-pop-yellow/20 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto flex items-start gap-6">
          <img
            src="/images/teaching.png"
            alt="Teaching"
            className="hidden md:block w-40 rounded-2xl shadow-md shrink-0"
          />
          <div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Teaching ✦
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl">
            I teach and supervise across digital ethics, health policy, and
            responsible innovation. My approach is to bring real policy
            challenges into the classroom — because the best way to learn about
            governance is to grapple with its failures.
          </p>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-12 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Current &amp; Recent Courses ✦
          </h2>
          <div className="space-y-6">
            {COURSES.map((course, i) => (
              <div
                key={i}
                className={`card-pop ${course.color} rounded-2xl p-6 border ${course.borderColor}`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{course.emoji}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-text-primary text-lg">
                        {course.title}
                      </h3>
                    </div>
                    <p className="text-sm text-pop-purple font-medium mb-2">
                      {course.institution} · {course.term}
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supervision */}
      <section className="py-12 px-4 bg-light-lilac/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            Supervision Areas
          </h2>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            I welcome enquiries from prospective students interested in working
            on topics at the intersection of:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {SUPERVISION_AREAS.map((area) => (
              <span
                key={area.label}
                className={`bracelet-bead ${area.color}`}
              >
                {area.label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
