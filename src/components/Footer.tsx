import Link from "next/link";

const BRACELET_DOTS = [
  "bg-pop-pink",
  "bg-pop-purple",
  "bg-pop-blue",
  "bg-pop-green",
  "bg-pop-yellow",
  "bg-pop-coral",
  "bg-pop-pink",
  "bg-pop-purple",
  "bg-pop-blue",
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-light-lilac/50 border-t border-lavender/30">
      {/* Bracelet divider */}
      <div className="bracelet-divider">
        {BRACELET_DOTS.map((color, i) => (
          <span
            key={i}
            className={`dot ${color}`}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="font-bold text-text-primary mb-2 flex items-center gap-1">
              ✨ Dr Jessica Morley
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Digital ethics &amp; health policy researcher at Yale.
              Thinking about AI, the NHS, and how to get technology governance right.
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h3 className="font-bold text-text-primary mb-2">Quick Links</h3>
            <div className="flex flex-wrap gap-2">
              {["About", "Publications", "Media", "Teaching", "CV"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="text-sm px-3 py-1 rounded-full bg-lavender/50 text-text-secondary hover:bg-pop-purple hover:text-white transition-all"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h3 className="font-bold text-text-primary mb-2">Connect</h3>
            <div className="flex flex-col gap-1 text-sm text-text-secondary">
              <a
                href="mailto:jessica.morley@yale.edu"
                className="hover:text-pop-purple transition-colors"
              >
                jessica.morley@yale.edu
              </a>
              <a
                href="https://scholar.google.com/citations?user=hp-k6QwAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pop-purple transition-colors"
              >
                Google Scholar
              </a>
              <a
                href="https://www.linkedin.com/in/jessicarosemorley/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pop-purple transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://bsky.app/profile/jessrmorley.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pop-purple transition-colors"
              >
                Bluesky
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-lavender/30 text-center text-xs text-text-light">
          <p>&copy; {new Date().getFullYear()} Dr Jessica Morley. Built with sparkle.</p>
        </div>
      </div>
    </footer>
  );
}
