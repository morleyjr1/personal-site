const TIMELINE = [
  {
    year: "2026–",
    role: "de Vries-Sherif Associate Research Scientist, Digital Ethics Center, Yale University",
    description:
      "Leading an independent research programme on digital health, health data, and AI. Co-organising the Global Health in the Age of AI symposium and the HASTE workshop with MIT.",
    color: "bg-pop-purple",
  },
  {
    year: "2024–25",
    role: "Postdoctoral Research Fellow, Digital Ethics Center, Yale University",
    description:
      "Developed new conceptual frameworks including the 'inverse data quality law.' Selected as Yale's institutional candidate for the NIH Director's Early Independence Award.",
    color: "bg-pop-pink",
  },
  {
    year: "2019–23",
    role: "Policy Lead, Bennett Institute for Applied Data Science, University of Oxford",
    description:
      "Lead researcher for Better, Broader, Safer (the Goldacre Review). Ethics, PPIE, and governance lead for OpenSAFELY. Senior leadership team member.",
    color: "bg-pop-blue",
  },
  {
    year: "2018–23",
    role: "Research Associate, Digital Ethics Lab, Oxford Internet Institute",
    description:
      "PhD and MSc at Exeter College. Doctoral thesis on designing an algorithmically enhanced NHS, accepted without corrections. Best Paper Award at NeurIPS 2019.",
    color: "bg-pop-green",
  },
  {
    year: "2017–20",
    role: "Technology Advisor / AI Subject Matter Expert, NHSX / DHSC",
    description:
      "Co-wrote 'AI for Healthcare: How to Get It Right.' Helped lead policy on the NHS AI Lab, cloud policy, and data offshoring.",
    color: "bg-pop-yellow",
  },
  {
    year: "2012–17",
    role: "Early Career: NHS Commissioning, Mapa Research, Mintel",
    description:
      "Health research and policy analysis across the NHS and the private sector. BA in Geography from St. Anne's College, Oxford.",
    color: "bg-pop-coral",
  },
];

const SERVICE_ITEMS = [
  "NHS England AI Advisory Board",
  "UK National Data Guardian Panel",
  "Associate Editor, BMJ Digital Health & AI",
  "LSHTM Centre for Data and Statistical Science for Health",
  "Wellcome Trust Grant Review Committee",
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
            I&apos;m an Associate Research Scientist at Yale&apos;s Digital
            Ethics Center. I work on the political philosophy of health AI: what
            it should be optimising for, why it has been assigned the wrong
            target, and the information infrastructure needed to get to the right
            one. This means normative philosophy, causal inference, and health
            policy, usually at the same time. I have, at times, been referred to
            as a digilante — an accusation I cannot deny.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Portrait */}
            <div className="md:col-span-2">
              <img
                src="/images/portrait.png"
                alt="Dr Jessica Morley"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>

            {/* Bio text */}
            <div className="md:col-span-3 space-y-4 text-text-secondary leading-relaxed">
              <p>
                I am a de Vries-Sherif Associate Research Scientist at the
                Digital Ethics Center at Yale University, where I lead an independent research programme
                on digital health, health data, and AI. My research draws on
                philosophy, public health, health economics, and regulatory
                science to interrogate dominant narratives about technology in
                healthcare; and to build the translational frameworks that might
                actually close the gap between ethical principles and practice.
              </p>
              <p>
                Before Yale, I was Policy Lead at the Bennett Institute for
                Applied Data Science at the University of Oxford, where I was
                lead researcher for{" "}
                <em>Better, Broader, Safer</em>, the UK
                Government-commissioned Goldacre Review. I was also ethics and
                public engagement lead for OpenSAFELY, the UK&apos;s largest
                secure health analytics platform, which played a critical role in
                the COVID-19 response. Before that, I was at NHSX (now NHS
                England&apos;s Transformation Directorate), where I helped lead
                policy development for the NHS AI Lab business case, the NHS
                cloud policy, and data offshoring policy, and co-wrote the
                national strategy{" "}
                <em>AI for Healthcare: How to Get It Right</em>.
              </p>
              <p>
                I did my PhD and MSc at the Oxford Internet Institute (Exeter
                College), where my doctoral thesis — on designing an
                algorithmically enhanced NHS — was accepted without corrections.
                I also hold a BA in Geography from St. Anne&apos;s College,
                Oxford.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Digilante */}
      <section className="py-16 px-4 bg-light-lilac/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <span className="text-pop-pink">🔍</span> The Digilante
          </h2>
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-pop-pink/20 space-y-4 text-text-secondary leading-relaxed">
            <p>
              I have a habit of finding the places where NHS data policy does not
              do what it claims to do. Sometimes this means showing that
              re-identification risks in major research datasets are being
              underestimated. Sometimes it means demonstrating that governance
              frameworks designed to protect patients are actually protecting
              institutions.
            </p>
            <p>
              I do this not because I think health data research should stop —
              quite the opposite — but because complacency about data governance
              is the fastest route to the public trust collapse that would stop
              it.
            </p>
          </div>
        </div>
      </section>

      {/* Three Problems, One Diagnosis */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            Three Problems, One Diagnosis ✦
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            Despite millions being spent on the development, deployment, and use
            of healthcare AI it is failing to generate a justifiable return on
            investment at scale. I think this is a systems-level problem
            resulting from three interconnected issues:
          </p>
          <div className="space-y-6">
            {/* (a) Target misspecification */}
            <div className="card-pop bg-lavender rounded-2xl p-6 md:p-8 border border-pop-purple/20">
              <h3 className="font-bold text-text-primary text-lg mb-3">
                <span className="text-pop-purple">(a)</span> Target
                Misspecification
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Health AI optimises for the wrong thing. The field has
                over-focused on optimising the health of individuals — a target
                that is neither desirable nor achievable — rather than public
                health: improve the conditions under which populations are
                healthy. Correcting this requires normative theory; specifically,
                a capability-based account of health drawn from Venkatapuram,
                enriched with prioritarian equity constraints from Parfit and
                Daniels.
              </p>
            </div>

            {/* (b) Missing translational pipeline */}
            <div className="card-pop bg-soft-pink rounded-2xl p-6 md:p-8 border border-pop-pink/20">
              <h3 className="font-bold text-text-primary text-lg mb-3">
                <span className="text-pop-pink">(b)</span> A Missing
                Translational Pipeline
              </h3>
              <p className="text-text-secondary leading-relaxed">
                AI is a complex sociotechnical systems-level technology. It
                rewires everything from what counts as evidence of illness, to
                the steps involved in specific care pathways. Yet, too often it
                is treated as a plug-and-play technology, something that can be
                bought off the shelf and simply slotted in to existing systems,
                like replacing a blood pressure cuff. This results in risk. What
                is needed is a comparable translational pipeline, like that which
                exists for drugs and devices but for AI instead.
              </p>
            </div>

            {/* (c) Epistemic capture */}
            <div className="card-pop bg-mint rounded-2xl p-6 md:p-8 border border-pop-green/20">
              <h3 className="font-bold text-text-primary text-lg mb-3">
                <span className="text-pop-green">(c)</span> Epistemic Capture
              </h3>
              <p className="text-text-secondary leading-relaxed">
                The people who build health AI systems and the people who
                experience health systems do not, by and large, overlap. The
                result is that the knowledge encoded in these systems is
                structurally partial. Addressing this requires methods for
                epistemic rebalancing, not just &quot;patient engagement&quot;
                exercises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications & Service */}
      <section className="py-12 px-4 bg-light-lilac/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Publications summary */}
            <div>
              <h3 className="font-bold text-text-primary mb-3">Publications</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                My work has been published in <em>Nature</em>,{" "}
                <em>The Lancet</em>, <em>The BMJ</em>,{" "}
                <em>Social Science &amp; Medicine</em>,{" "}
                <em>Minds and Machines</em>, and many others. Over 8,300
                citations; h-index 32.
              </p>
              <a
                href="/publications"
                className="text-sm text-pop-purple font-semibold hover:underline"
              >
                See full publication list →
              </a>
            </div>

            {/* Service */}
            <div>
              <h3 className="font-bold text-text-primary mb-3">
                Professional Service
              </h3>
              <ul className="space-y-2">
                {SERVICE_ITEMS.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <span className="text-pop-purple mt-0.5">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-10 text-center">
            Where I&apos;ve been ✨
          </h2>
          <div className="space-y-4">
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

      {/* Personal */}
      <section className="py-12 px-4 bg-light-lilac/30">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-text-secondary leading-relaxed">
            When I&apos;m not thinking about the governance of health data, you
            can probably find me making friendship bracelets, constructing
            outfits that could be described as &quot;aggressively
            colourful,&quot; or building elaborate Taylor Swift theories. ✨
          </p>
        </div>
      </section>
    </div>
  );
}
