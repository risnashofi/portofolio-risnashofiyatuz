export function Footer() {
  return (
    <footer
      data-purpose="site-footer"
      className="py-8 bg-[#070707] border-t border-white/[0.08] text-xs text-gray-400 font-mono"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p>&copy; 2026 Risna Shofiyatuz Zahro. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-gray-400">
          <span aria-hidden="true">✦</span>
          <span>Data Science</span>
          <span aria-hidden="true">·</span>
          <span>AI Agents</span>
          <span aria-hidden="true">·</span>
          <span>Software Engineering</span>
          <span aria-hidden="true">·</span>
          <span>Film</span>
        </div>

        <div>
          <a
            href="#about"
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group uppercase tracking-wider whitespace-nowrap"
          >
            <span>BACK TO TOP</span>
            <span className="transform group-hover:-translate-y-0.5 transition-transform" aria-hidden="true">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
