import Image from "next/image";

type MediaType = "keynote" | "conference" | "podcast" | "broadcast" | "panel" | "seminar" | "interview";

const TYPE_LABELS: Record<MediaType, string> = {
  keynote: "Keynote",
  conference: "Conference",
  podcast: "Podcast",
  broadcast: "Broadcast",
  panel: "Panel",
  seminar: "Seminar",
  interview: "Interview",
};

const TYPE_COLORS: Record<MediaType, string> = {
  keynote: "bg-pop-purple text-white",
  conference: "bg-pop-blue text-white",
  podcast: "bg-pop-pink text-white",
  broadcast: "bg-pop-coral text-white",
  panel: "bg-pop-green text-text-primary",
  seminar: "bg-pop-yellow text-text-primary",
  interview: "bg-lavender text-text-primary",
};

const BROADCAST_PODCASTS: {
  title: string;
  outlet: string;
  date: string;
  url: string;
  type: MediaType;
}[] = [
  {
    title: "AI and decision-making in health and care",
    outlet: "Keynote talk",
    date: "December 2025",
    url: "https://www.youtube.com/watch?v=Vl58PJKzD40",
    type: "keynote",
  },
  {
    title: "HIMSS Europe 2025",
    outlet: "HIMSS",
    date: "July 2025",
    url: "https://www.youtube.com/watch?v=aArybz9GJ8Y",
    type: "conference",
  },
  {
    title: "AI in Healthcare: Navigating the Myths, Biases, and Regulation",
    outlet: "Podcast",
    date: "July 2025",
    url: "https://www.youtube.com/watch?v=jW_p-w39wD8",
    type: "podcast",
  },
  {
    title: "In Conversation: Benefits and Threats of AI in Healthcare",
    outlet: "Panel discussion",
    date: "March 2025",
    url: "https://www.youtube.com/watch?v=i0iT2Bfh5Fc",
    type: "panel",
  },
  {
    title: "Making ethics actionable in digital health",
    outlet: "Podcast",
    date: "January 2025",
    url: "https://www.youtube.com/watch?v=8ykoxDSM75g",
    type: "podcast",
  },
  {
    title: "Digital Health Unplugged: A chat with Dr Jessica Morley",
    outlet: "Digital Health News",
    date: "January 2025",
    url: "https://www.youtube.com/watch?v=ywVZDsPM8QQ",
    type: "podcast",
  },
  {
    title: "The Ethics of AI in Healthcare: Beyond the Stochastic Parrot",
    outlet: "Clinical Changemakers",
    date: "2024",
    url: "https://www.youtube.com/watch?v=oKhEIZ9CM_s",
    type: "podcast",
  },
  {
    title: "Today\u2019s challenges in responsible data science and healthcare innovation",
    outlet: "THIS Institute",
    date: "November 2024",
    url: "https://www.youtube.com/watch?v=KeGXBtUl2N4",
    type: "conference",
  },
  {
    title: "AI in Medicine: Challenges of practical implementation",
    outlet: "CogStack Symposium 2024",
    date: "October 2024",
    url: "https://www.youtube.com/watch?v=2hLU1eb7_AI",
    type: "conference",
  },
  {
    title: "The Ethical Implications of Digital Transformation",
    outlet: "Royal Society of Medicine Digital Health Podcast",
    date: "2024",
    url: "https://creators.spotify.com/pod/profile/rsmdhcouncil/episodes/The-Ethical-Implications-of-Digital-Transformation--With-Jess-Morley--Health-Data-Academic-at-Yale-Digital-Ethics-Centre-e2ikug5/a-a9je5st",
    type: "podcast",
  },
  {
    title: "Nuffield Trust Summit: Integrating AI into health care",
    outlet: "Nuffield Trust",
    date: "March 2024",
    url: "https://www.youtube.com/watch?v=sR-jxUmxzKI",
    type: "conference",
  },
  {
    title: "Designing an algorithmically enhanced NHS",
    outlet: "Invited talk",
    date: "March 2024",
    url: "https://www.youtube.com/watch?v=fY5hSn426EE",
    type: "conference",
  },
  {
    title: "Digital Health Unplugged: A chat with Dr Jessica Morley",
    outlet: "Digital Health News",
    date: "February 2024",
    url: "https://www.digitalhealth.net/2024/02/digital-health-unplugged-a-chat-with-dr-jessica-morley/",
    type: "podcast",
  },
  {
    title: "How far could artificial intelligence transform medicines?",
    outlet: "BBC Radio 4 \u2014 The Briefing Room",
    date: "2024",
    url: "https://www.bbc.co.uk/programmes/m0027tx8",
    type: "broadcast",
  },
  {
    title: "Is AI Better Than My Doctor?",
    outlet: "BBC Radio 4 \u2014 The Artificial Human",
    date: "2024",
    url: "https://www.bbc.co.uk/programmes/m001wxq2",
    type: "broadcast",
  },
  {
    title: "Will Artificial Intelligence save the NHS?",
    outlet: "The Aural Apothecary",
    date: "2024",
    url: "https://podcasts.apple.com/us/podcast/8-1-dr-jessica-morley-will-artificial-intelligence/id1552559905?i=1000723981251",
    type: "podcast",
  },
  {
    title: "Making medical data useful, ubiquitous and safe",
    outlet: "Oxford Internet Institute",
    date: "August 2023",
    url: "https://www.youtube.com/watch?v=fFyDCNu3w0Q",
    type: "conference",
  },
  {
    title: "Better, Broader, Safer: Using health data for research and analysis",
    outlet: "Oxford Internet Institute",
    date: "2022",
    url: "https://www.oii.ox.ac.uk/news-events/videos/better-broader-safer-using-health-data-for-research-and-analysis/",
    type: "conference",
  },
  {
    title: "NHS-R Podcast: Jess Morley",
    outlet: "NHS-R Community",
    date: "July 2022",
    url: "https://nhsrcommunity.substack.com/p/nhs-r-podcast-jess-morley-1f5",
    type: "podcast",
  },
  {
    title: "Ethics in AI Seminar: Does AI threaten Human Autonomy?",
    outlet: "Seminar",
    date: "March 2021",
    url: "https://www.youtube.com/watch?v=WISiQodom_8",
    type: "seminar",
  },
  {
    title: "Improving Healthcare Through AI",
    outlet: "Podcast",
    date: "March 2021",
    url: "https://www.youtube.com/watch?v=OvhCqJYKfvM",
    type: "podcast",
  },
  {
    title: "Ethics and AI",
    outlet: "Genomics England \u2014 Behind the Genes",
    date: "2021",
    url: "https://genomicsengland.podbean.com/e/jessica-morley/",
    type: "podcast",
  },
  {
    title: "Ethics of AI in Healthcare",
    outlet: "Oxford Internet Institute Podcast",
    date: "2021",
    url: "https://podcasts.ox.ac.uk/1h-ethics-ai-healthcare",
    type: "podcast",
  },
  {
    title: "Ethical Guidelines for COVID-19 Digital Tracking and Tracing",
    outlet: "Invited talk",
    date: "June 2020",
    url: "https://www.youtube.com/watch?v=3aa_TyYNY4M",
    type: "conference",
  },
  {
    title: "COVID-19 apps and their ethical considerations",
    outlet: "Panel discussion",
    date: "May 2020",
    url: "https://www.youtube.com/watch?v=vCGpvkjtRQI",
    type: "panel",
  },
  {
    title: "Jess Morley on NHSx & AI, data, algorithms in health and social care",
    outlet: "Interview",
    date: "February 2020",
    url: "https://www.youtube.com/watch?v=83Sa94cPW2I",
    type: "interview",
  },
  {
    title: "The voice of the patients in improving AI driven healthcare",
    outlet: "IH19 Conference",
    date: "December 2019",
    url: "https://www.youtube.com/watch?v=fUayTcMLyJs",
    type: "conference",
  },
  {
    title: "Futuremakers Podcast: Is AI good for our health?",
    outlet: "Futuremakers",
    date: "November 2019",
    url: "https://www.youtube.com/watch?v=Gryq4ATs8KU",
    type: "podcast",
  },
  {
    title: "TeensInAI Accelerator 2019",
    outlet: "NHSX",
    date: "September 2019",
    url: "https://www.youtube.com/watch?v=0lhmS51wWz0",
    type: "conference",
  },
  {
    title: "One HealthTech Policy Series",
    outlet: "One HealthTech (with Indra Joshi)",
    date: "April 2019",
    url: "https://www.youtube.com/watch?v=26mohZ65qAU",
    type: "panel",
  },
  {
    title: "BBC Radio 4 \u2014 Rethink",
    outlet: "BBC Radio 4",
    date: "2019",
    url: "https://www.bbc.com/audio/play/m0021bdl",
    type: "broadcast",
  },
  {
    title: "The Algorithm Will See You Now: But Does It Care If You\u2019re A Dog?",
    outlet: "CRAP Talks",
    date: "November 2018",
    url: "https://www.youtube.com/watch?v=p8SowCa02N8",
    type: "conference",
  },
];

const BMJ_EDITORIALS = [
  {
    title: "Can a digital NHS be equitable?",
    coauthors: "Barry, E., & Hiam, L.",
    year: 2025,
    ref: "BMJ, 389, r1317",
  },
  {
    title: "Selling NHS patient data",
    coauthors: "Hamilton, N., & Floridi, L.",
    year: 2024,
    ref: "BMJ, q420",
  },
  {
    title: "Building infrastructure is key to unifying UK health data",
    coauthors: "& Rocher, L.",
    year: 2024,
    ref: "BMJ, q2735",
  },
  {
    title: "Unlocking NHS data requires public trust",
    coauthors: "Crider, C., & Bramall-Stainer, K.",
    year: 2024,
    ref: "BMJ, q2494",
  },
  {
    title: "A controversial new federated data platform for the NHS in England",
    coauthors: "& Zhang, J.",
    year: 2023,
    ref: "BMJ, p2776",
  },
  {
    title: "Generative AI for medical research",
    coauthors: "DeVito, N. J., & Zhang, J.",
    year: 2023,
    ref: "BMJ, p1551",
  },
  {
    title: "The poor performance of apps assessing skin cancer risk",
    coauthors: "Floridi, L., & Goldacre, B.",
    year: 2020,
    ref: "BMJ, m428",
  },
  {
    title: "Google Health and the NHS: Overcoming the trust deficit",
    coauthors: "Taddeo, M., & Floridi, L.",
    year: 2019,
    ref: "The Lancet Digital Health, 1(8), e389",
  },
];

export default function Media() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="bg-mint/40 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto flex items-start gap-6">
          <Image
            src="/images/presenting-ai-ethics.png"
            alt="Speaking about AI ethics"
            width={112}
            height={112}
            className="hidden md:block w-40 rounded-2xl shadow-md shrink-0"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Media &amp; Speaking ✦
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl">
              A non-exhaustive selection of broadcast appearances, podcast
              interviews, conference talks, and editorials. I write and speak
              about AI ethics, health data governance, and digital health policy
              &mdash; always with the aim of making complex issues accessible
              and actionable.
            </p>
          </div>
        </div>
      </section>

      {/* Broadcast, Podcasts & Talks */}
      <section className="py-12 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            Broadcast, Podcasts &amp; Talks ✦
          </h2>
          <div className="space-y-3">
            {BROADCAST_PODCASTS.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-pop rounded-xl p-5 border border-lavender/30 bg-white glitter-hover flex gap-4 items-start block"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full ${TYPE_COLORS[item.type]}`}
                    >
                      {TYPE_LABELS[item.type]}
                    </span>
                    <span className="text-xs text-text-light">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-text-primary mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <span className="text-sm text-text-secondary">
                    {item.outlet}
                  </span>
                </div>
                <span className="text-pop-purple text-sm font-semibold shrink-0 hidden sm:block mt-1">
                  Watch / Listen →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BMJ Editorials */}
      <section className="py-12 px-4 bg-light-lilac/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            BMJ Editorials ✦
          </h2>
          <div className="space-y-3">
            {BMJ_EDITORIALS.map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-5 border border-pop-pink/20 bg-white"
              >
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-pop-coral text-white">
                    Editorial
                  </span>
                  <span className="text-xs text-text-light">{item.year}</span>
                </div>
                <h3 className="font-bold text-text-primary mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  <span className="font-semibold">Morley, J.,</span>{" "}
                  {item.coauthors}. <em>{item.ref}</em>.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-cream text-center">
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
