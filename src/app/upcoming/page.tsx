import Sticker from "@/components/Sticker";
import { UPCOMING_EVENTS } from "@/data/upcoming-events";

// Revalidate hourly so events auto-disappear once their date passes,
// without needing a redeploy.
export const revalidate = 3600;

export default function Upcoming() {
  // Today as YYYY-MM-DD (UTC). Events with date >= today still show.
  const today = new Date().toISOString().slice(0, 10);

  const events = UPCOMING_EVENTS
    .filter((e) => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="bg-mint/40 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Up Next ✦
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl">
            Where I&rsquo;ll be next &mdash; talks, keynotes, and invited
            lectures on AI ethics, health data governance, and digital health
            policy. If you&rsquo;ll be at one of these and want to say hello,{" "}
            <a
              href="mailto:jessica.morley@yale.edu"
              className="text-pop-purple font-semibold hover:underline"
            >
              get in touch
            </a>
            . ✨
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="py-12 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          {events.length === 0 ? (
            <div className="rounded-xl p-8 border border-lavender/30 bg-white text-center">
              <p className="text-text-secondary">
                Nothing on the calendar right now &mdash; check back soon, or{" "}
                <a
                  href="mailto:jessica.morley@yale.edu"
                  className="text-pop-purple font-semibold hover:underline"
                >
                  invite me to speak
                </a>
                .
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {events.map((item, i) => {
                const Card = item.url ? "a" : "div";
                const cardProps = item.url
                  ? {
                      href: item.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {};
                return (
                  <Card
                    key={i}
                    {...cardProps}
                    className={`card-pop rounded-xl p-5 border border-lavender/30 bg-white flex gap-4 items-start block ${
                      item.url ? "glitter-hover" : ""
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-pop-purple text-white">
                          Talk
                        </span>
                        <span className="text-xs text-text-light">
                          {item.dateLabel}
                        </span>
                        <span className="text-xs text-text-light">
                          &middot; {item.location}
                        </span>
                      </div>
                      <h3 className="font-bold text-text-primary mb-1 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-secondary mb-1">
                        {item.host}
                      </p>
                      {item.blurb && (
                        <p className="text-sm text-text-secondary mt-2">
                          {item.blurb}
                        </p>
                      )}
                    </div>
                    {item.url && (
                      <span className="text-pop-purple text-sm font-semibold shrink-0 hidden sm:block mt-1">
                        Details →
                      </span>
                    )}
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Sticker + CTA */}
      <section className="py-12 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Sticker
              src="/images/stickers/beyond-the-hype.png"
              alt="Beyond the hype"
              rotate={-3}
            />
            <p className="text-text-secondary text-center flex-1">
              Want me to speak at your event?{" "}
              <a
                href="mailto:jessica.morley@yale.edu"
                className="text-pop-purple font-semibold hover:underline"
              >
                Get in touch
              </a>
              . Past talks live on the{" "}
              <a
                href="/media"
                className="text-pop-purple font-semibold hover:underline"
              >
                Media page
              </a>
              . ✨
            </p>
            <Sticker
              src="/images/stickers/beware-aitrogenic-harm.png"
              alt="Beware AItrogenic harm"
              rotate={2}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
