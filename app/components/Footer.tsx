export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-white/[0.06]" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Ashmit Mishra
            </span>
            <span className="text-zinc-700">·</span>
            <span className="text-sm text-zinc-600">
              Built with Next.js
            </span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors duration-300"
            aria-label="Back to top"
          >
            Back to top
            <svg
              className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
