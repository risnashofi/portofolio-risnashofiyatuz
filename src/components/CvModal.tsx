import { useEffect } from 'react';
import { Download, Printer, X } from 'lucide-react';
import {
  EDUCATION_LIST,
  EXPERIENCES,
  FOCUS_AREAS,
  SKILLS_LIST,
} from '../data/portfolioData';

interface CvModalProps {
  open: boolean;
  onClose: () => void;
}

export function CvModal({ open, onClose }: CvModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const handleDownloadTxt = () => {
    const content = [
      'CURRICULUM VITAE — RISNA SHOFIYATUZ ZAHRO',
      'Informatics Student (ITPLN) & AI Enthusiast',
      'Email: risnashofi75@gmail.com | WhatsApp: +62 857-3946-4320',
      'Domisili: Cengkareng, Jakarta Barat, Indonesia',
      'GitHub: https://github.com/risnashofi | LinkedIn: https://linkedin.com/in/risna-shofiyatuz-zahro',
      '',
      '=== PENDIDIKAN ===',
      ...EDUCATION_LIST.map(
        (e) => `- ${e.title} | ${e.institution} (${e.period})${e.badge ? ` [${e.badge}]` : ''}`,
      ),
      '',
      '=== PENGALAMAN ORGANISASI & KEPANITIAAN ===',
      ...EXPERIENCES.map(
        (exp) => `- ${exp.role} — ${exp.title} (${exp.year})\n  ${exp.modalDescription}`,
      ),
      '',
      '=== BIDANG FOKUS & MINAT RISET ===',
      ...FOCUS_AREAS.map((f) => `- ${f.title}: ${f.description}`),
      '',
      '=== KEAHLIAN ===',
      SKILLS_LIST.join(' · '),
    ].join('\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV_Risna_Shofiyatuz_Zahro.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#121212] max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-2xl border border-white/[0.1] p-6 sm:p-8 relative shadow-[0_25px_80px_rgba(0,0,0,0.95)]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup preview CV"
          className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b border-white/[0.08] pb-5 pr-8">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F0434B]">
            CURRICULUM VITAE · 2026
          </span>
          <h3 id="cv-modal-title" className="text-3xl font-anton text-white uppercase mt-1">
            RISNA SHOFIYATUZ ZAHRO
          </h3>
          <p className="text-xs text-gray-400 mt-1 font-mono">
            S1 Teknik Informatika ITPLN · Cengkareng, Jakarta Barat · risnashofi75@gmail.com
          </p>
        </div>

        <div className="mt-5 space-y-5 text-xs text-gray-300">
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-[#F0434B] mb-2">
              Pendidikan
            </h4>
            <div className="space-y-2">
              {EDUCATION_LIST.map((edu) => (
                <div key={edu.title} className="flex justify-between gap-4">
                  <div>
                    <span className="text-white font-semibold">{edu.title}</span>
                    <span className="text-gray-400"> — {edu.institution}</span>
                  </div>
                  <span className="font-mono text-gray-400 whitespace-nowrap">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/[0.06] pt-4">
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-[#F0434B] mb-2">
              Pengalaman Utama
            </h4>
            <div className="space-y-2.5">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between gap-2">
                    <span className="text-white font-semibold">
                      {exp.role} — {exp.title}
                    </span>
                    <span className="font-mono text-gray-400">{exp.year}</span>
                  </div>
                  <p className="text-gray-400 mt-0.5">{exp.achievement}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/[0.06] pt-4">
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-[#F0434B] mb-2">
              Keahlian Inti
            </h4>
            <p className="text-gray-300">{SKILLS_LIST.join(' · ')}</p>
          </div>
        </div>

        <div className="mt-7 pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 text-gray-200 hover:text-white hover:border-white/30 text-xs font-mono uppercase tracking-wider transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Cetak</span>
          </button>
          <button
            type="button"
            onClick={handleDownloadTxt}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D1121B] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#F0434B] transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Unduh Ringkasan CV</span>
          </button>
        </div>
      </div>
    </div>
  );
}
