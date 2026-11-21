import { BarChart3, Zap, Code2, Film } from 'lucide-react';
import {
  EDUCATION_LIST,
  FOCUS_AREAS,
  HOBBIES_LIST,
  SKILLS_LIST,
  FocusAreaItem,
} from '../data/portfolioData';

function FocusIcon({ type }: { type: FocusAreaItem['icon'] }) {
  switch (type) {
    case 'chart':
      return <BarChart3 className="w-4 h-4" />;
    case 'bolt':
      return <Zap className="w-4 h-4" />;
    case 'code':
      return <Code2 className="w-4 h-4" />;
    case 'film':
      return <Film className="w-4 h-4" />;
  }
}

export function EditorialGridSection() {
  return (
    <section
      id="education"
      data-purpose="education-skills-focus"
      className="py-20 relative bg-[#070707]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* COLUMN 1: EDUCATION & SKILLS (4 Cols) */}
          <div
            data-purpose="education-column"
            className="lg:col-span-4 bg-[#121212] p-6 sm:p-7 rounded-2xl border border-white/[0.08] flex flex-col justify-between"
          >
            <div>
              <div className="pb-4 mb-6 border-b border-white/[0.08]">
                <span className="text-xs uppercase tracking-[0.25em] text-[#F0434B] font-mono">
                  ACADEMIC BACKGROUND
                </span>
                <h2 className="text-2xl font-anton text-white tracking-wide uppercase mt-1">
                  EDUCATION &amp; SKILLS
                </h2>
              </div>

              {/* Education Timeline List */}
              <div className="space-y-5">
                {EDUCATION_LIST.map((edu) => (
                  <div
                    key={edu.title}
                    className={`relative pl-4 border-l transition-colors ${
                      edu.active
                        ? 'border-[#D1121B]'
                        : 'border-white/[0.08] hover:border-[#D1121B]'
                    }`}
                  >
                    <span
                      className={`text-[11px] font-mono uppercase font-medium ${
                        edu.active ? 'text-[#F0434B]' : 'text-gray-400'
                      }`}
                    >
                      {edu.period}
                    </span>
                    <div className="flex items-center justify-between gap-2 mt-0.5">
                      <h3 className="text-sm font-bold text-white leading-tight">{edu.title}</h3>
                      {edu.badge && (
                        <span className="text-[10px] font-mono font-bold text-[#F0434B] bg-[#D1121B]/10 border border-[#D1121B]/30 px-2 py-0.5 rounded whitespace-nowrap shrink-0 tabular-nums">
                          {edu.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5">{edu.institution}</p>
                  </div>
                ))}
              </div>

              {/* Skills Categorized Badges */}
              <div className="pt-7 mt-7 border-t border-white/[0.08]">
                <span className="text-[11px] uppercase font-mono tracking-widest text-gray-400 block mb-3">
                  TECHNICAL &amp; CORE SKILLS
                </span>
                <div className="flex flex-wrap gap-2">
                  {SKILLS_LIST.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-gray-200 border border-white/10 hover:border-[#D1121B] hover:text-white transition-colors whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Interests & Hobbies Footer */}
            <div className="pt-6 mt-6 border-t border-white/[0.06]">
              <span className="text-[11px] uppercase font-mono tracking-widest text-gray-400 block mb-2.5">
                HOBBIES &amp; LIFESTYLE
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-gray-300">
                {HOBBIES_LIST.map((hobby) => (
                  <span key={hobby} className="flex items-center gap-1.5 text-[11px] whitespace-nowrap">
                    <span className="text-[#D1121B]" aria-hidden="true">
                      ●
                    </span>
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 2: WORK FOCUS / METHODOLOGY (4 Cols) */}
          <div
            id="focus"
            data-purpose="focus-column"
            className="lg:col-span-4 bg-[#121212] p-6 sm:p-7 rounded-2xl border border-white/[0.08] flex flex-col justify-between scroll-mt-20"
          >
            <div>
              <div className="pb-4 mb-6 border-b border-white/[0.08]">
                <span className="text-xs uppercase tracking-[0.25em] text-[#F0434B] font-mono">
                  METHODOLOGY &amp; DOMAINS
                </span>
                <h2 className="text-2xl font-anton text-white tracking-wide uppercase mt-1">
                  FOCUS AREAS
                </h2>
              </div>

              {/* Connected Vertical Timeline Steps */}
              <div className="space-y-6 relative before:absolute before:top-2 before:bottom-2 before:left-5 before:w-px before:bg-white/[0.08]">
                {FOCUS_AREAS.map((area) => (
                  <div key={area.number} className="flex items-start space-x-4 relative z-10 group">
                    <div className="w-10 h-10 rounded-full bg-[#0E0E0E] border border-[#D1121B]/50 flex items-center justify-center text-[#D1121B] group-hover:bg-[#D1121B] group-hover:text-white transition-colors shrink-0 shadow-[0_0_12px_rgba(209,18,27,0.3)]">
                      <FocusIcon type={area.icon} />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold text-[#F0434B] tabular-nums">
                          {area.number}
                        </span>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider leading-snug">
                          {area.title}
                        </h3>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-white/[0.06]">
              <span className="text-[10px] font-mono tracking-widest text-[#F0434B] uppercase">
                CURRENT PROGRESS: SEMESTER PERSATUAN ITPLN
              </span>
            </div>
          </div>

          {/* COLUMN 3: DEEP RED EDITORIAL STATEMENT PANEL (4 Cols) */}
          <div
            data-purpose="quote-panel"
            className="lg:col-span-4 rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden text-white shadow-2xl border border-red-900/40"
            style={{
              background: 'linear-gradient(160deg, #A30F16 0%, #5E080D 55%, #2A0407 100%)',
            }}
          >
            {/* Background Glow Elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Large Quotation Glyph */}
              <span
                className="font-serif text-7xl sm:text-8xl text-rose-300/40 leading-none select-none block -mt-3 mb-2"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Quote Text */}
              <p className="text-2xl sm:text-3xl font-medium tracking-tight leading-snug text-white font-serif-script italic">
                Curious by nature, learning by doing.
              </p>

              <p className="text-xs text-rose-100/85 leading-relaxed mt-4">
                &ldquo;Bagi saya, teknologi bukan hanya soal baris kode yang dieksekusi mesin, melainkan instrumen
                untuk memecahkan persoalan nyata, menyederhanakan kolaborasi, dan merangkai dampak positif yang
                berkelanjutan.&rdquo;
              </p>
            </div>

            {/* Hand-crafted Signature & Callout */}
            <div className="pt-8 mt-6 border-t border-rose-300/20 space-y-5">
              <div>
                <p className="font-script text-4xl sm:text-[42px] leading-tight text-rose-100 -rotate-1 origin-left select-none tracking-wide py-1">
                  Risna Shofiyatuz Zahro
                </p>
                <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-rose-200/90 block mt-2">
                  SHOFY · JAKARTA &amp; BLITAR
                </span>
              </div>

              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-white bg-black/40 hover:bg-black/60 px-3.5 py-2 rounded-lg border border-white/15 transition-colors whitespace-nowrap"
                >
                  <span>LET&apos;S CREATE SOMETHING GREAT TOGETHER.</span>
                  <span aria-hidden="true">✦</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
