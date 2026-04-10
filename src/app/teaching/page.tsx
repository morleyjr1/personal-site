"use client";

import { useState } from "react";

const LECTURES = [
  {
    number: 1,
    title: "What Actually Is AI, and Can Digital Code Care for Analogue Bodies?",
    description:
      "Artificial Intelligence is often branded as the miracle cure for crumbling global healthcare systems, but what actually is AI and how can digital code care for analogue bodies? This lecture provides an introduction to the different techniques that sit under the umbrella heading of AI, explaining how each technique links to specific healthcare use cases. It traces how these technical capabilities have been translated into a powerful deterministic rhetoric promising hope to thousands, and argues that understanding what AI can and cannot do is the first step towards thinking critically about its role in healthcare, and distinguishing hope from hype.",
    youtube: "https://www.youtube.com/watch?v=03bJ8BcYs1c",
    canva: "https://canva.link/fb9oodgo7szrcb4",
    references: [
      "Floridi, L. AI as Agency without Intelligence: On Artificial Intelligence as a New Form of Artificial Agency and the Multiple Realisability of Agency Thesis. Philos. Technol. 38, 30 (2025).",
      "Morley, J., Hine, E., Roberts, H. et al. Global Health in the Age of AI: Charting a Course for Ethical Implementation and Societal Benefit. Minds & Machines 35, 31 (2025).",
      "Oddy C, Zhang J, Morley J, Ashrafian H. Promising algorithms to perilous applications: a systematic review of risk stratification tools for predicting healthcare utilisation. BMJ Health & Care Informatics. 2024;31:e101065.",
      "Andaur Navarro, C. L. et al. (2023). Systematic review finds \u201cSpin\u201d practices and poor reporting standards in studies on machine learning-based prediction models. Journal of Clinical Epidemiology.",
      "Dijkstra P, Greenhalgh T, Mekki YM, Morley J. How to read a paper involving artificial intelligence (AI). BMJ Medicine. 2025;4:e001394.",
      "Ledley, R. S., & Lusted, L. B. (1959). Reasoning Foundations of Medical Diagnosis. Science, 130(3366), 9\u201321.",
    ],
    color: "border-l-pop-purple",
  },
  {
    number: 2,
    title: "You Can\u2019t Code Your Way Out of Structural Health Inequalities",
    description:
      "AI is championed as the key to empowering individuals to take better care of their own health, and simultaneously as the tool that will enable healthcare systems to make more targeted, efficient, and equitable decisions. This lecture examines the assumptions underpinning both promises and challenges information-deficit models by arguing that health is relational and systemic, shaped by social, economic, environmental, and informational conditions, not the consequence of individual choices made in isolation, nor of optimisation decisions made within structurally constrained institutions. It demonstrates why we cannot code our way out of structural health inequalities and reveals how current AI applications often reinforce rather than resolve existing disparities. It proposes that we redirect our focus from optimising individual and system-level decisions within broken structures toward addressing the structural determinants of health outcomes themselves.",
    youtube: "https://www.youtube.com/watch?v=6cIirLgH_rw",
    canva: "https://canva.link/phprtq8onzaowy7",
    references: [
      "Illich, I. (1976). Limits to Medicine: Medical Nemesis: The Expropriation of Health. Marion Boyars.",
      "Floridi, L. (2015). The New Grey Power. Philosophy & Technology, 28(3), 329\u2013332.",
      "Haas, P. M. (1992). Introduction: Epistemic communities and international policy coordination. International Organization, 46(1), 1\u201335.",
      "McCartney, M. et al. (2020). Why \u2018case finding\u2019 is bad science. Journal of the Royal Society of Medicine, 113(2), 54\u201358.",
      "Bircher, J., & Hahn, E. G. (2017). Will the Meikirch Model, a New Framework for Health, Induce a Paradigm Shift in Healthcare? Cureus.",
      "Marmot, M. (2005). Social determinants of health inequalities. The Lancet, 365(9464), 1099\u20131104.",
      "Tudor Hart, J. (1971). The Inverse Care Law. The Lancet, 297(7696), 405\u2013412.",
      "Parsons, T. (1975). The Sick Role and the Role of the Physician Reconsidered. The Milbank Memorial Fund Quarterly, 53(3), 257.",
    ],
    color: "border-l-pop-pink",
  },
  {
    number: 3,
    title: "The Last Mile Problem: Why Good Models Fail Patients",
    description:
      "Why do AI tools that perform brilliantly in validation studies fail to help\u2014or even harm\u2014patients when deployed? This lecture examines the \u201clast mile problem\u201d in healthcare AI: the gap between a technology that works and a technology that helps. It argues that this problem stems from the belief that the AI pipeline is simply data \u2192 algorithm \u2192 model, and then the magic of empowerment results in changed outcomes. This underestimates the fact that AI is a systems-level technology. Its implementation requires systems design that fully accounts for sociotechnical complexity. In short, we don\u2019t have bad models\u2014we have never designed the systems to ensure statistically accurate outputs translate into population health benefits. The lecture proposes a translational pipeline for health data science that considers Information, Technology, Processes, Objectives & values, Staff & skills, and Management systems & structures at each translational stage.",
    youtube: "https://www.youtube.com/watch?v=G_tnE3ycM1M",
    canva: "https://canva.link/2yk0m0bm467ydf6",
    references: [
      "Oddy, C., Zhang, J., Morley, J., & Ashrafian, H. (2024). Promising algorithms to perilous applications: A systematic review of risk stratification tools. BMJ Health & Care Informatics, 31(1), e101065.",
      "Heeks, R., Mundy, D., & Salazar, A. (1999). Why health care information systems succeed or fail. Institute for Development Policy and Management.",
      "Greenhalgh, T. et al. (2017). Beyond Adoption: A New Framework for Theorizing and Evaluating Nonadoption, Abandonment, and Challenges to the Scale-Up, Spread, and Sustainability of Health and Care Technologies. JMIR, 19(11), e367.",
      "Morley, J. et al. (2025). Global Health in the Age of AI: Charting a Course for Ethical Implementation and Societal Benefit. Minds and Machines, 35(3).",
      "Sittig, D. F., & Singh, H. (2010). A new sociotechnical model for studying health information technology in complex adaptive healthcare systems. Quality and Safety in Health Care, 19(Suppl 3), i68\u2013i74.",
    ],
    color: "border-l-pop-blue",
  },
  {
    number: 4,
    title: "Governing AI When It Stretches the Limits of All Current Governance",
    description:
      "How do you govern AI when it stretches the limits of all current governance mechanisms? This lecture covers the distinction between ethics and the law, medical device regulation, liability, and ethical considerations beyond bias and privacy. Running through all of this is the concept of \u201cintended use\u201d\u2014where all the complexity converges. It\u2019s never \u2018just\u2019 the tech; it\u2019s how we use it, and what we use it for, that really matters. This is why technical feasibility, ethical justifiability, legal compliance, and social acceptability are deeply intertwined and why treating them as independent checklists creates gaps that can lead to real harm.",
    youtube: "https://www.youtube.com/watch?v=bKLgEFTtiyU",
    canva: "https://canva.link/15dyn7rutv3vah0",
    references: [
      "Floridi, L. (2018). Soft ethics, the governance of the digital and the General Data Protection Regulation. Philosophical Transactions of the Royal Society A, 376(2133), 20180081.",
      "Morley, J. et al. (2020). The ethics of AI in health care: A mapping review. Social Science & Medicine, 260, 113172.",
      "Morley, J., & Floridi, L. (2025). The Ethics of AI in Healthcare: An Updated Mapping Review. In Ethics and Medical Technology (Vol. 113, pp. 29\u201357). Springer Nature Switzerland.",
      "Rincon, N., Gerke, S., & Wagner, J. K. (2025). Implications of An Evolving Regulatory Landscape on the Development of AI and ML in Medicine. Pacific Symposium on Biocomputing, 30, 154\u2013166.",
      "Cohen, I. G. et al. (2014). The Legal And Ethical Concerns That Arise From Using Complex Predictive Analytics In Health Care. Health Affairs, 33(7), 1139\u20131147.",
      "B\u00e9lisle-Pipon, J.-C. et al. (2021). What Makes Artificial Intelligence Exceptional in Health Technology Assessment? Frontiers in Artificial Intelligence, 4, 736697.",
    ],
    color: "border-l-pop-green",
  },
  {
    number: 5,
    title: "The Bigger Picture: From Evidence-Based to Algorithm-Based Care",
    description:
      "This lecture focuses on the bigger picture, arguing that when we focus on individual ethical or regulatory issues of specific products, we miss how the implementation of AI into healthcare is resulting in the emergence of a new model of care: from evidence-based to algorithm-based; from one-to-one to many-to-many; from patient-centric to data-centric; and from narrow trust to distributed trust. When we look at this higher level of abstraction, the societal impacts of the implementation of AI become clearer as do the limitations of focusing only on models designed to optimise individual health. The cure: develop AI that also targets population health at a structural level.",
    youtube: "https://www.youtube.com/watch?v=YQDrNIPLOa4",
    canva: "https://canva.link/rhyn93x3dxbit3d",
    references: [
      "Benach, J. et al. (2011). Beyond Rose\u2019s Strategies: A Typology of Scenarios of Policy Impact on Population Health and Health Inequalities. International Journal of Health Services, 41(1), 1\u20139.",
      "Rose, G. (1985). Sick Individuals and Sick Populations. International Journal of Epidemiology, 14(1), 32\u201338.",
      "Shipton, L., & Vitale, L. (2024). Artificial intelligence and the politics of avoidance in global health. Social Science and Medicine, 359.",
      "Bircher, J. (2005). Towards a Dynamic Definition of Health and Disease. Medicine, Health Care and Philosophy, 8(3), 335\u2013341.",
      "Marmot, M. (2005). Social determinants of health inequalities. The Lancet, 365(9464), 1099\u20131104.",
      "Gray, M., Gray, J., & Howick, J. (2018). Personalised healthcare and population healthcare. Journal of the Royal Society of Medicine, 111(2), 51\u201356.",
      "Gray, M., Lagerberg, T., & Dombr\u00e1di, V. (2017). Equity and Value in \u2018Precision Medicine\u2019. The New Bioethics, 23(1), 87\u201394.",
      "Venkatapuram, S. (2011). Health Justice: An Argument from the Capabilities Approach. Polity.",
    ],
    color: "border-l-pop-yellow",
  },
  {
    number: 6,
    title: "Thinking Critically About AI: Bringing It All Together",
    description:
      "This is the concluding lecture of the series. It brings together the full argument from the last six weeks. It describes what thinking critically about AI is, and what it is not, and then breaks down the core arguments about systems design, complexity, and what we should be designing AI for.",
    youtube: "https://www.youtube.com/watch?v=aq-xq1ooN88",
    canva: "https://canva.link/0pjc54m3t416mn9",
    references: [],
    color: "border-l-pop-coral",
  },
];

function LectureCard({
  lecture,
}: {
  lecture: (typeof LECTURES)[number];
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`bg-white rounded-xl border border-lavender/30 border-l-4 ${lecture.color} overflow-hidden`}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 flex gap-4 items-start hover:bg-lavender/10 transition-colors"
      >
        <span className="text-2xl font-bold text-pop-purple/30 shrink-0 leading-tight">
          {String(lecture.number).padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-text-primary text-lg leading-snug">
            {lecture.title}
          </h3>
          <p className="text-sm text-text-secondary mt-2 leading-relaxed line-clamp-2">
            {lecture.description}
          </p>
        </div>
        <span className="text-pop-purple text-xl shrink-0 mt-1 transition-transform duration-200"
          style={{ transform: expanded ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>

      {expanded && (
        <div className="px-6 pb-6 pt-0 space-y-4">
          {/* Full description */}
          <p className="text-sm text-text-secondary leading-relaxed pl-12">
            {lecture.description}
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pl-12">
            <a
              href={lecture.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-pop-purple text-white rounded-full text-sm font-semibold hover:bg-pop-purple/90 transition-all hover:scale-105"
            >
              Watch lecture →
            </a>
            <a
              href={lecture.canva}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-pop-purple border border-pop-purple/30 rounded-full text-sm font-semibold hover:bg-lavender/30 transition-all hover:scale-105"
            >
              View slides →
            </a>
          </div>

          {/* References */}
          {lecture.references.length > 0 && (
            <div className="pl-12">
              <h4 className="text-xs font-bold text-text-light uppercase tracking-wide mb-2">
                References
              </h4>
              <ul className="space-y-1">
                {lecture.references.map((ref, i) => (
                  <li
                    key={i}
                    className="text-xs text-text-light leading-relaxed"
                  >
                    {ref}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

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
              My lecture series on thinking critically about AI in healthcare.
              Six lectures covering what AI actually is, why it fails patients,
              how to govern it, and what it should be designed to do. All
              lectures are freely available to watch, with shareable slides.
            </p>
          </div>
        </div>
      </section>

      {/* Course header */}
      <section className="py-12 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="bg-lavender/30 rounded-2xl p-6 md:p-8 border border-pop-purple/20 mb-10">
            <h2 className="text-2xl font-bold text-text-primary mb-2">
              Beyond the Hype: Thinking Critically About AI in Healthcare
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Despite millions being spent on the development, deployment, and
              use of healthcare AI, it is failing to generate a justifiable
              return on investment at scale. This course argues that the problem
              is systemic: we have been asking the wrong questions, optimising
              for the wrong targets, and governing with the wrong tools. Across
              six lectures, it builds a case for rethinking what health AI
              should be designed to do and how we should be governing its use.
            </p>
          </div>

          {/* Lecture cards */}
          <div className="space-y-4">
            {LECTURES.map((lecture) => (
              <LectureCard key={lecture.number} lecture={lecture} />
            ))}
          </div>
        </div>
      </section>

      {/* Other teaching */}
      <section className="py-12 px-4 bg-light-lilac/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Other Teaching &amp; Mentorship ✦
          </h2>
          <div className="space-y-3">
            {[
              "Faculty Member, AI in Medicine Distinction Pathway, Yale University",
              "Workshop Co-Organiser, MIT-Yale: Co-designed and ran the HASTE (Health AI: Science, Technology, and Ethics) workshop for an interdisciplinary cohort of undergraduates, graduate students, and faculty",
              "OpenSAFELY: Co-designed and co-taught a training course on health data science, covering technical, ethical, and governance aspects",
              "Lecturer & Seminar Leader: Delivered lectures and seminars at Oxford, Cambridge, Yale, Warwick, and Exeter on digital ethics, AI governance, and data policy",
              "Research Supervision & Mentorship: Regularly supervise and mentor discrete research projects with students and junior colleagues at all levels",
            ].map((item, i) => (
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

      {/* CTA */}
      <section className="py-12 px-4 bg-cream text-center">
        <p className="text-text-secondary">
          Interested in having me guest lecture or co-design a workshop?{" "}
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
