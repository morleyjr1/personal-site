import Link from "next/link";

const EDUCATION = [
  {
    degree: "PhD, Oxford Internet Institute",
    institution: "University of Oxford, Exeter College",
    date: "2020\u20132023",
    detail:
      "Thesis: \u201cDesigning an Algorithmically Enhanced NHS: Towards a Conceptual Model for the Successful Implementation of Algorithmic Clinical Decision Support Software in the National Health Service\u201d \u2014 accepted without corrections.",
  },
  {
    degree: "MSc, Oxford Internet Institute",
    institution: "University of Oxford, Exeter College",
    date: "2018\u20132020",
    detail:
      "Thesis: \u201cInscrutable, Misguided, and Inconclusive Evidence: How Digital Health Interventions Pose a Threat to the Ethical Principle Primum Non Nocere\u201d \u2014 Distinction.",
  },
  {
    degree: "BA, Geography",
    institution: "University of Oxford, St. Anne\u2019s College",
    date: "2009\u20132012",
    detail:
      "Specialising in cultural heritage conservation and management, and biogeography. Thesis: \u201cCultural Transmission: Imitation, and Diversity\u201d \u2014 2.1.",
  },
];

const EXPERIENCE = [
  {
    role: "de Vries-Sherif Associate Research Scientist & Associate Director of Research",
    org: "Digital Ethics Center, Yale University",
    date: "June 2025\u2013present",
    points: [
      "Lead an independent research programme on digital health, health data, and AI",
      "Oversee and co-organise major international collaborations, including the Global Health in the Age of AI symposium and the HASTE workshop with MIT",
      "Supervise discrete student research projects; mentor junior researchers",
    ],
    color: "border-l-pop-purple",
  },
  {
    role: "Postdoctoral Research Fellow",
    org: "Digital Ethics Center, Yale University",
    date: "January 2024\u2013May 2025",
    points: [
      "Developed new conceptual frameworks, including the \u2018inverse data quality law,\u2019 forming the basis of an independent research programme",
      "Selected as Yale\u2019s institutional candidate for the NIH Director\u2019s Early Independence Award",
      "Initiated key academic collaborations; laid the groundwork for workshops and symposia",
    ],
    color: "border-l-pop-pink",
  },
  {
    role: "Policy Lead",
    org: "Bennett Institute for Applied Data Science, University of Oxford",
    date: "October 2019\u2013April 2023",
    points: [
      "Senior leadership team member, with responsibility for budget management and hiring",
      "Lead researcher for Better, Broader, Safer (the Goldacre Review), a government-commissioned review of the UK\u2019s health data infrastructure",
      "Ethics, PPIE, and governance lead for OpenSAFELY, the UK\u2019s largest secure health analytics platform",
    ],
    color: "border-l-pop-blue",
  },
  {
    role: "Research Associate",
    org: "Digital Ethics Lab, Oxford Internet Institute, University of Oxford",
    date: "October 2018\u2013June 2023",
    points: [
      "Led a collaborative project with the Digital Catapult, resulting in three peer-reviewed publications and a Best Paper Award at NeurIPS 2019",
      "Authored papers on ethical governance frameworks for digital health and digital transformation",
    ],
    color: "border-l-pop-green",
  },
  {
    role: "Technology Advisor / AI Subject Matter Expert",
    org: "NHSX / Department of Health and Social Care",
    date: "July 2017\u2013January 2020",
    points: [
      "Lead author for key national strategies including AI for Healthcare: How to Get It Right",
      "Helped lead policy development for the NHS AI Lab business case, NHS cloud policy, and data offshoring",
    ],
    color: "border-l-pop-yellow",
  },
  {
    role: "Early Career: NHS Commissioning, Mapa Research, Mintel",
    org: "Various",
    date: "2012\u20132017",
    points: [
      "Research Manager at Mapa Research, managing a team of 15 researchers analysing digital health and finance",
      "Research Analyst at Mintel Research, conducting and publishing market research on digital health",
      "Senior Commissioning Support Analyst at NHS Richmond CCG, supporting local health strategy and budgets",
    ],
    color: "border-l-pop-coral",
  },
];

const TEACHING = [
  "Faculty Member, AI in Medicine Distinction Pathway, Yale University",
  "Workshop Co-Organiser, MIT-Yale: Co-designed and ran the HASTE (Health AI: Science, Technology, and Ethics) workshop for an interdisciplinary cohort of undergraduates, graduate students, and faculty",
  "OpenSAFELY: Co-designed and co-taught a training course on health data science, covering technical, ethical, and governance aspects",
  "Lecturer & Seminar Leader: Delivered lectures and seminars at Oxford, Cambridge, Yale, Warwick, and Exeter on digital ethics, AI governance, and data policy",
  "Research Supervision & Mentorship: Regularly supervise and mentor discrete research projects with students and junior colleagues at all levels",
];

const GRANTS = [
  {
    title: "Wellcome Trust health data landscape review",
    role: "Consortium member",
    value: "\u00a3200k",
    date: "2025\u20132026",
  },
  {
    title: "Multiple OpenSAFELY grants",
    role: "Co-I, lead drafter",
    value: ">\u00a31.2m",
    date: "2020\u20132023",
  },
  {
    title: "Wellcome Trust Doctoral Studentship",
    role: "PI",
    value: "\u00a3108k",
    date: "2020\u20132023",
  },
  {
    title: "Mohn Westlake Foundation \u201cPublic Policy Observatory\u201d",
    role: "Co-I",
    value: "\u00a3450k",
    date: "2019\u20132023",
  },
];

const AWARDS = [
  "Yale candidate for NIH Director\u2019s Early Independence Award (2024)",
  "BMJ Digital Health & Care Informatics Top Ten Paper (2024)",
  "Best Paper Award, NeurIPS (2019)",
];

const SERVICE = [
  {
    role: "Wellcome Trust grant review committee member",
    date: "2025",
  },
  {
    role: "Member, NHS England AI Advisory Board",
    date: "2024\u2013present",
  },
  {
    role: "Panel Member, UK National Data Guardian",
    date: "2024\u2013present",
  },
  {
    role: "Associate Editor, BMJ Digital Health & AI",
    date: "2024\u2013present",
  },
  {
    role: "Steering Committee, LSHTM Centre for Data and Statistical Science for Health",
    date: "2024\u2013present",
  },
  {
    role: "OpenSAFELY Advisory Board Member, University of Oxford",
    date: "2020\u20132023",
  },
  {
    role: "BMJ Future of the NHS Commission Member",
    date: "2023\u20132024",
  },
  {
    role: "Co-Editor, The Yearbook of the Digital Ethics Lab",
    date: "2020",
  },
];

export default function CV() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="bg-peach/40 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto flex items-start gap-6">
          <img
            src="/images/desk-with-books.png"
            alt="At the desk"
            className="hidden md:block w-28 h-28 rounded-2xl object-cover shadow-md shrink-0"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Curriculum Vitae ✦
            </h1>
            <p className="text-lg text-text-secondary">
              The academic bits, in one place. For publications, see{" "}
              <Link
                href="/publications"
                className="text-pop-purple font-semibold hover:underline"
              >
                the full list
              </Link>
              ; for media and speaking, see{" "}
              <Link
                href="/media"
                className="text-pop-purple font-semibold hover:underline"
              >
                media &amp; speaking
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-12 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Education ✦
          </h2>
          <div className="space-y-4">
            {EDUCATION.map((item, i) => (
              <div
                key={i}
                className="card-pop bg-white rounded-xl p-5 border border-lavender/30"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-bold text-text-primary">
                      {item.degree}
                    </h3>
                    <p className="text-sm text-pop-purple font-medium">
                      {item.institution}
                    </p>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-lavender text-text-secondary shrink-0">
                    {item.date}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Policy Experience */}
      <section className="py-12 px-4 bg-light-lilac/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Research &amp; Policy Experience ✦
          </h2>
          <div className="space-y-4">
            {EXPERIENCE.map((item, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl p-5 border border-lavender/30 border-l-4 ${item.color}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-bold text-text-primary">{item.role}</h3>
                    <p className="text-sm text-pop-purple font-medium">
                      {item.org}
                    </p>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-lavender text-text-secondary shrink-0">
                    {item.date}
                  </span>
                </div>
                <ul className="space-y-1 mt-2">
                  {item.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="text-pop-purple mt-0.5 shrink-0">✦</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching & Mentorship */}
      <section className="py-12 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Teaching &amp; Mentorship ✦
          </h2>
          <div className="space-y-3">
            {TEACHING.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 border border-lavender/30 flex items-start gap-3"
              >
                <span className="text-pop-pink mt-0.5 shrink-0">✦</span>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grants & Awards */}
      <section className="py-12 px-4 bg-light-lilac/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Grants */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Grants ✦
              </h2>
              <div className="space-y-3">
                {GRANTS.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-4 border border-lavender/30"
                  >
                    <h3 className="font-bold text-text-primary text-sm">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-pop-green text-text-primary">
                        {item.role}
                      </span>
                      <span className="text-xs text-text-light">
                        {item.value} · {item.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Awards ✦
              </h2>
              <div className="space-y-3">
                {AWARDS.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-4 border border-lavender/30 flex items-start gap-3"
                  >
                    <span className="text-pop-yellow mt-0.5 shrink-0">✦</span>
                    <p className="text-sm text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Service */}
      <section className="py-12 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Professional Service ✦
          </h2>
          <div className="space-y-3">
            {SERVICE.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 border border-lavender/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
              >
                <div className="flex items-start gap-3">
                  <span className="text-pop-purple mt-0.5 shrink-0">✦</span>
                  <p className="text-sm text-text-primary font-medium">
                    {item.role}
                  </p>
                </div>
                <span className="text-xs text-text-light shrink-0 sm:ml-4">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 px-4 bg-light-lilac/30 text-center">
        <p className="text-text-secondary">
          For a complete list of publications, see{" "}
          <Link
            href="/publications"
            className="text-pop-purple font-semibold hover:underline"
          >
            publications
          </Link>
          . For speaking and media enquiries,{" "}
          <a
            href="mailto:jessica.morley@yale.edu"
            className="text-pop-purple font-semibold hover:underline"
          >
            get in touch
          </a>
          . ✨
        </p>
      </section>
    </div>
  );
}
