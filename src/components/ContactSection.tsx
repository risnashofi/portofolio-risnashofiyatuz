import { useState } from 'react';
import { Check, Copy, Mail, MapPin, Phone } from 'lucide-react';
import { TERMINAL_PRESETS } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenCv: () => void;
}

export function ContactSection({ onOpenCv }: ContactSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activePresetId, setActivePresetId] = useState(TERMINAL_PRESETS[0].id);

  const activePreset =
    TERMINAL_PRESETS.find((p) => p.id === activePresetId) ?? TERMINAL_PRESETS[0];

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText('risnashofi75@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback if clipboard blocked
      setCopiedEmail(false);
    }
  };

  return (
    <section
      id="contact"
      data-purpose="contact-section"
      className="py-20 bg-[#0E0E0E] relative border-t border-white/[0.08] overflow-hidden"
    >
      {/* Atmospheric Red Glow in Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D1121B]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Let's Work Together & Contact Links (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#F0434B] uppercase mb-2">
                <span>GET IN TOUCH</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anton uppercase text-white tracking-tight leading-none">
                LET&apos;S WORK
                <br />
                TOGETHER
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 max-w-lg mt-4 leading-relaxed">
                Saya selalu terbuka untuk berdiskusi seputar riset Data Science, eksplorasi implementasi AI
                Agents, proyek pengembangan web kolaboratif, maupun kepanitiaan kreatif. Mari terhubung!
              </p>
            </div>

            {/* Contact Channels List */}
            <div className="space-y-3 pt-2 max-w-md">
              {/* Email Item */}
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-[#121212] border border-white/[0.08] hover:border-[#D1121B]/60 transition-all group">
                <a
                  href="mailto:risnashofi75@gmail.com"
                  className="flex items-center space-x-3 flex-1 min-w-0"
                >
                  <div className="w-9 h-9 rounded-lg bg-black flex items-center justify-center text-[#D1121B] group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono text-gray-400 block uppercase">Email</span>
                    <span className="text-xs sm:text-sm font-medium text-white truncate block group-hover:text-[#F0434B] transition-colors">
                      risnashofi75@gmail.com
                    </span>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Salin alamat email"
                  title="Salin email"
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors shrink-0"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
                <a
                  href="mailto:risnashofi75@gmail.com"
                  aria-label="Kirim email"
                  className="text-gray-400 group-hover:text-white transition-colors pr-1"
                >
                  ↗
                </a>
              </div>

              {/* WhatsApp Item */}
              <a
                href="https://wa.me/6285739464320"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded-xl bg-[#121212] border border-white/[0.08] hover:border-[#D1121B]/60 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-black flex items-center justify-center text-[#D1121B] group-hover:scale-110 transition-transform shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono text-gray-400 block uppercase">
                    WhatsApp / Contact
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white truncate block group-hover:text-[#F0434B] transition-colors tabular-nums">
                    +62 857-3946-4320
                  </span>
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors pr-1" aria-hidden="true">
                  ↗
                </span>
              </a>

              {/* LinkedIn & GitHub Row */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://linkedin.com/in/risna-shofiyatuz-zahro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#121212] border border-white/[0.08] hover:border-[#D1121B]/60 transition-all group flex items-center justify-between"
                >
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-gray-400 block uppercase">LinkedIn</span>
                    <span className="text-xs font-semibold text-white group-hover:text-[#F0434B] transition-colors truncate block">
                      risna-zahro
                    </span>
                  </div>
                  <span className="text-gray-400 group-hover:text-white shrink-0" aria-hidden="true">
                    ↗
                  </span>
                </a>
                <a
                  href="https://github.com/risnashofi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#121212] border border-white/[0.08] hover:border-[#D1121B]/60 transition-all group flex items-center justify-between"
                >
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-gray-400 block uppercase">GitHub</span>
                    <span className="text-xs font-semibold text-white group-hover:text-[#F0434B] transition-colors truncate block">
                      @risnashofi
                    </span>
                  </div>
                  <span className="text-gray-400 group-hover:text-white shrink-0" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>

              {/* Location Note & Download CV */}
              <div className="flex items-center justify-between pt-2 gap-4">
                <span className="text-[11px] font-mono text-gray-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D1121B] shrink-0" />
                  <span>Cengkareng, Jakarta Barat, Indonesia</span>
                </span>
                <button
                  type="button"
                  onClick={onOpenCv}
                  className="text-xs font-mono uppercase tracking-wider text-[#F0434B] hover:text-white underline underline-offset-4 decoration-[#D1121B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  DOWNLOAD CV ↓
                </button>
              </div>
            </div>

            {/* Availability Tag */}
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono uppercase bg-[#D1121B]/10 text-[#F0434B] border border-[#D1121B]/30">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D1121B] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D1121B]" />
                </span>
                <span>AVAILABLE FOR ACADEMIC &amp; TECH COLLABORATION</span>
              </span>
            </div>
          </div>

          {/* Right Side: 3D Laptop Workspace Vignette Mockup (5 cols) */}
          <div className="lg:col-span-5 perspective-container flex justify-center py-6">
            <div className="laptop-tilt relative w-full max-w-[420px] bg-[#141414] p-4 rounded-3xl border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.95)]">
              {/* Laptop Screen Upper Bezel */}
              <div className="bg-black rounded-2xl p-3 border border-white/10 shadow-inner">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-3 px-1">
                  <div className="flex space-x-1.5" aria-hidden="true">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[9px] font-mono text-gray-500 tracking-wider">
                    WORKSPACE // SHOFY_TERMINAL
                  </span>
                </div>

                {/* Screen Inside Workspace Visual */}
                <div className="bg-[#0A0A0A] rounded-xl p-4 h-60 flex flex-col justify-between border border-white/5 relative overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-28 h-28 bg-[#D1121B]/30 rounded-full blur-xl pointer-events-none" />

                  <div className="space-y-2.5 relative z-10">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-[#D1121B]/20 text-[#F0434B] border border-[#D1121B]/30 whitespace-nowrap">
                        LIVE WORKSPACE
                      </span>
                      <span className="text-[9px] font-mono text-gray-500">ITPLN.INFORMATIKA</span>
                    </div>

                    <h3 className="text-xl font-anton text-white tracking-wide leading-tight">
                      WE DESIGN DIGITAL EXPERIENCES
                    </h3>

                    {/* Interactive Preset Switcher */}
                    <div className="flex items-center gap-1.5 pt-0.5">
                      {TERMINAL_PRESETS.map((preset) => (
                        <button
                          key={preset.id}
                          type="button"
                          onClick={() => setActivePresetId(preset.id)}
                          className={`text-[9px] font-mono px-2 py-0.5 rounded border transition-colors whitespace-nowrap ${
                            preset.id === activePresetId
                              ? 'bg-[#D1121B]/25 border-[#D1121B]/60 text-white'
                              : 'bg-white/[0.03] border-white/10 text-gray-400 hover:text-gray-200'
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>

                    <p className="text-[10px] text-gray-400 font-mono leading-relaxed pt-0.5">
                      <span className="text-[#F0434B]">&gt;</span> {activePreset.cmd}
                      <br />
                      <span className="text-emerald-400">&gt;</span> {activePreset.output}
                    </p>
                  </div>

                  <div className="flex items-end justify-between border-t border-white/10 pt-3 relative z-10">
                    <div className="text-[9px] font-mono text-gray-400">
                      STATUS: <span className="text-emerald-400">ONLINE</span>
                    </div>
                    <span className="text-xs font-anton text-[#F0434B]">ITPLN 2026</span>
                  </div>
                </div>
              </div>

              {/* Laptop Base / Keyboard Section */}
              <div className="mt-3 pt-2 bg-gradient-to-b from-[#222222] to-[#111111] rounded-b-xl border-t border-white/20 h-5 relative flex items-center justify-center">
                <div className="w-16 h-1 rounded-full bg-white/20" />
              </div>

              {/* Decorative Desk Items (Mug with letter "R") */}
              <div
                aria-hidden="true"
                className="absolute -bottom-5 -left-4 w-12 h-14 bg-gradient-to-r from-stone-900 to-black rounded-b-xl rounded-t-sm border border-white/15 flex items-center justify-center shadow-2xl"
              >
                <span className="font-anton text-sm text-[#F0434B]">R</span>
                <div className="absolute -left-2 top-2 w-3 h-7 border-2 border-stone-800 rounded-l-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
