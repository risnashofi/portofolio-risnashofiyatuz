import { EXPERIENCES, ExperienceItem } from '../data/portfolioData';

interface ExperienceSectionProps {
  onSelectExperience: (item: ExperienceItem) => void;
}

export function ExperienceSection({ onSelectExperience }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      data-purpose="experience-showcase"
      className="py-20 bg-[#0E0E0E] relative border-t border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-10 border-b border-white/[0.08]">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#F0434B] font-mono block mb-1">
              PORTFOLIO HIGHLIGHTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-anton uppercase text-white tracking-wide">
              SELECTED EXPERIENCE
            </h2>
          </div>

          <a
            href="https://github.com/risnashofi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-xs uppercase font-mono tracking-wider text-gray-400 hover:text-[#F0434B] transition-colors whitespace-nowrap"
          >
            <span>VIEW GITHUB REPOSITORIES</span>
            <span className="text-base leading-none" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {EXPERIENCES.map((item) => (
            <article
              key={item.id}
              data-purpose="project-card"
              onClick={() => onSelectExperience(item)}
              className="bg-[#121212] rounded-2xl border border-white/[0.08] overflow-hidden hover:border-[#D1121B]/50 transition-all duration-300 group flex flex-col justify-between p-5 relative shadow-lg hover:shadow-[0_10px_35px_rgba(209,18,27,0.15)] cursor-pointer"
            >
              <div>
                {/* Mockup Window Header */}
                <div className="bg-[#1b1b1b] rounded-t-lg p-2.5 flex items-center justify-between border border-white/5 mb-4">
                  <div className="flex space-x-1.5" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-600/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-600/80" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase truncate">
                    {item.windowLabel}
                  </span>
                </div>

                {/* Mini Graphic Preview Screen */}
                <div className="bg-gradient-to-br from-[#1c0608] via-[#101010] to-[#0a0a0a] rounded-lg p-6 h-48 border border-white/5 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                  <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#D1121B]/20 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] tracking-widest uppercase font-mono bg-[#D1121B]/20 text-[#F0434B] px-2 py-0.5 rounded border border-[#D1121B]/30 whitespace-nowrap">
                      {item.category}
                    </span>
                    <span className="text-4xl font-anton text-white/10 group-hover:text-white/20 transition-colors tabular-nums">
                      {item.number}
                    </span>
                  </div>

                  <div>
                    <p className="font-serif-script italic text-lg text-rose-200">{item.italicSubtitle}</p>
                    <h3 className="text-xl font-anton text-white tracking-wide uppercase">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="mt-5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#F0434B] font-semibold">{item.role}</span>
                    <span className="text-gray-400">{item.year}</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.summary}</p>
                </div>
              </div>

              {/* Bottom Action Modal Trigger */}
              <div className="pt-5 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-2xl font-anton text-[#D1121B] tabular-nums">{item.number}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectExperience(item);
                  }}
                  className="text-xs font-mono uppercase tracking-wider text-gray-300 group-hover:text-[#F0434B] flex items-center gap-1.5 transition-colors whitespace-nowrap"
                >
                  <span>EXPLORE DETAILS</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
