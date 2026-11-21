import { useState } from 'react';
import { HERO_STATS, PORTRAIT_IMAGE_URL } from '../data/portfolioData';

export function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      data-purpose="hero-section"
      className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden"
    >
      {/* Atmospheric Ambient Red Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#D1121B]/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#D1121B]/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative min-h-[700px] lg:min-h-[820px] flex flex-col justify-between">
        {/* GIANT PORTFOLIO BACKGROUND TYPOGRAPHY */}
        <div className="w-full text-center pointer-events-none select-none overflow-hidden absolute top-6 sm:top-2 left-0 right-0 z-0">
          <h1 className="portfolio-giant-text text-[19vw] font-anton leading-none tracking-tight opacity-90 scale-y-110">
            PORTFOLIO
          </h1>
        </div>

        {/* MAIN HERO COMPOSITION (Overlapping Portrait, Left Bio, Right Stats) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-12 md:pt-16 pb-4 my-auto">
          {/* Left Hero Content: Identity & Details */}
          <div className="lg:col-span-4 order-2 lg:order-1 pt-6 lg:pt-0">
            <div className="space-y-4 max-w-md">
              {/* Script Greeting */}
              <p className="font-script text-3xl sm:text-4xl text-rose-200/90 -mb-1 tracking-wide font-normal leading-tight">
                Hello, I&apos;m
              </p>

              {/* Prominent Condensed Display Name */}
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-anton uppercase tracking-tight text-white leading-[0.92] drop-shadow-md">
                RISNA
                <br />
                SHOFIYATUZ
                <br />
                ZAHRO
              </h2>

              {/* Red Subtitle Tag */}
              <div className="pt-2">
                <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#F0434B] border-l-2 border-[#D1121B] pl-2.5">
                  INFORMATICS STUDENT &amp; AI ENTHUSIAST
                </span>
              </div>

              {/* Short Bio Description */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal pt-1">
                Lulusan MA Almawaddah Blitar jurusan IPA yang sedang melanjutkan pendidikan S1 Teknik Informatika di{' '}
                <span className="text-white font-medium">Institut Teknologi PLN</span>. Berkomitmen mengembangkan
                potensi di bidang rekayasa perangkat lunak, eksplorasi data, dan otomasi AI.
              </p>

              {/* Geographic Location Indicator */}
              <div className="pt-2 flex items-center space-x-2 text-[11px] text-gray-400 font-mono tracking-wider">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D1121B] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D1121B]" />
                </span>
                <span className="uppercase">BASED IN CENGKARENG, JAKARTA BARAT</span>
              </div>
            </div>
          </div>

          {/* Center: Hero Portrait Overlap */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[430px]">
              {/* Red Ring Accent in Background */}
              <div className="absolute inset-0 rounded-full border border-[#D1121B]/30 scale-95 blur-[1px] -z-10 animate-pulse" />

              {/* User Portrait Cutout with Seamless Vignette & Bottom Mask */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] bg-gradient-to-b from-[#1a080a] via-[#101010] to-[#070707]">
                {!imgError ? (
                  <img
                    src={PORTRAIT_IMAGE_URL}
                    alt="Risna Shofiyatuz Zahro — Portrait"
                    loading="eager"
                    onError={() => setImgError(true)}
                    className="portrait-mask w-full h-[460px] sm:h-[530px] lg:h-[570px] object-cover object-center filter contrast-[1.05] brightness-[0.98] transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="portrait-mask w-full h-[460px] sm:h-[530px] lg:h-[570px] flex flex-col items-center justify-center relative overflow-hidden bg-[radial-gradient(circle_at_50%_35%,rgba(209,18,27,0.28),rgba(14,14,14,0.96)_68%)]">
                    <div className="w-36 h-36 rounded-full border border-[#D1121B]/40 flex items-center justify-center bg-black/50 shadow-[0_0_50px_rgba(209,18,27,0.25)]">
                      <span className="font-anton text-5xl tracking-wider text-white">RSZ</span>
                    </div>
                    <p className="mt-5 font-script text-3xl text-rose-200/80">Risna Shofiyatuz Zahro</p>
                    <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.25em] text-gray-400">
                      ITPLN · TEKNIK INFORMATIKA
                    </p>
                  </div>
                )}

                {/* Edge ambient red shadow inside photo container */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#070707] via-transparent to-black/30" />
                <div className="absolute bottom-3 left-0 right-0 text-center pointer-events-none">
                  <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gray-300/90 px-3 py-1 rounded bg-black/50 backdrop-blur-sm border border-white/10">
                    Risna &ldquo;Shofi&rdquo; Zahro
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Content: Tagline Circular Emblem & Key Statistics Stack */}
          <div className="lg:col-span-3 order-3 flex flex-col justify-between items-start lg:items-end space-y-8 pt-4 lg:pt-0">
            {/* Circular Badge / Star Tagline */}
            <div className="lg:text-right flex items-center lg:justify-end gap-3 max-w-[260px] bg-[#121212]/90 p-3.5 rounded-xl border border-white/[0.08]">
              <span
                className="text-[#D1121B] text-xl font-bold animate-spin shrink-0"
                style={{ animationDuration: '9s' }}
                aria-hidden="true"
              >
                ✦
              </span>
              <p className="text-xs text-gray-300 leading-snug">
                Exploring <span className="text-white font-medium">data</span>,{' '}
                <span className="text-[#F0434B] font-medium">AI</span>, and code — one project at a time.
              </p>
            </div>

            {/* Numbers / Metric Highlights */}
            <div className="w-full space-y-5 divide-y divide-white/[0.08]">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="pt-3 first:pt-0 flex lg:flex-col lg:items-end justify-between items-center gap-2"
                >
                  <span className="text-4xl sm:text-5xl font-anton text-[#D1121B] tracking-tight tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-mono tracking-wider text-gray-400 uppercase text-right">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <a
              href="#experience"
              className="hidden lg:flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-gray-400 hover:text-white transition-colors group"
            >
              <span>SCROLL DOWN</span>
              <span className="transform group-hover:translate-y-1 transition-transform" aria-hidden="true">
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
