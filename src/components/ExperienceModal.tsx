import { useEffect } from 'react';
import { X } from 'lucide-react';
import { ExperienceItem } from '../data/portfolioData';

interface ExperienceModalProps {
  experience: ExperienceItem | null;
  onClose: () => void;
}

export function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
  useEffect(() => {
    if (!experience) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [experience, onClose]);

  if (!experience) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="experience-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#121212] max-w-lg w-full rounded-2xl border border-white/[0.1] p-6 relative shadow-[0_25px_70px_rgba(0,0,0,0.9)]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup modal"
          className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs font-mono uppercase text-[#F0434B]">{experience.modalTag}</span>
        <h3
          id="experience-modal-title"
          className="text-2xl font-anton text-white uppercase mt-1 pr-8"
        >
          {experience.modalTitle}
        </h3>

        <div className="mt-4 space-y-4 text-xs text-gray-300 leading-relaxed">
          <p>{experience.modalDescription}</p>

          <ul className="space-y-1.5 text-gray-300">
            {experience.highlights.map((hl) => (
              <li key={hl} className="flex items-start gap-2">
                <span className="text-[#D1121B] mt-0.5" aria-hidden="true">
                  ✦
                </span>
                <span>{hl}</span>
              </li>
            ))}
          </ul>

          <div className="p-3.5 bg-[#0E0E0E] rounded-lg border border-white/[0.08] font-mono text-[11px] text-gray-400 space-y-1.5">
            <p>
              <span className="text-[#F0434B]">Pencapaian:</span> {experience.achievement}
            </p>
            <p>
              <span className="text-[#F0434B]">Keahlian:</span> {experience.skills.join(', ')}
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#D1121B] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#F0434B] transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
