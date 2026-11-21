import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const NAV_LINKS = [
  { id: 'about', label: 'About', mobileLabel: 'About' },
  { id: 'experience', label: 'Experience', mobileLabel: 'Experience' },
  { id: 'education', label: 'Education', mobileLabel: 'Education & Skills' },
  { id: 'focus', label: 'Focus', mobileLabel: 'Focus Areas' },
  { id: 'contact', label: 'Contact', mobileLabel: 'Contact' },
];

export function Navbar({ activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-[#070707]/90 backdrop-blur-md border-b border-white/[0.08]"
      data-purpose="site-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand & Student Badge */}
        <a
          className="flex flex-col group cursor-pointer shrink-0"
          href="#about"
          onClick={handleLinkClick}
        >
          <span className="text-white text-xs sm:text-sm font-bold tracking-widest font-mono uppercase group-hover:text-[#F0434B] transition-colors whitespace-nowrap">
            TEKNIK INFORMATIKA
          </span>
          <span className="text-[10px] text-[#8F9094] tracking-[0.22em] uppercase whitespace-nowrap">
            MAHASISWA ITPLN · RISNA ZAHRO
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center space-x-7 text-xs uppercase tracking-[0.25em] text-gray-400 font-medium"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b ${
                  isActive
                    ? 'text-white border-[#D1121B]'
                    : 'border-transparent hover:text-white'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* CTA Action Button + Mobile Menu Toggle */}
        <div className="flex items-center space-x-3 shrink-0">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#D1121B]/15 text-[#F0434B] border border-[#D1121B]/40 hover:bg-[#D1121B] hover:text-white transition-all shadow-[0_0_15px_rgba(209,18,27,0.25)] whitespace-nowrap shrink-0"
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F0434B] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#F0434B] group-hover:bg-white" />
            </span>
            <span>Open to Collaborate</span>
            <span className="text-[#F0434B] group-hover:text-white" aria-hidden="true">
              ✦
            </span>
          </a>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-gray-400 hover:text-white focus-visible:outline-2 focus-visible:outline-[#F0434B] rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden bg-[#0E0E0E]/95 border-b border-white/[0.08] px-6 py-4 flex flex-col space-y-3 text-xs tracking-widest uppercase"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleLinkClick}
              className={`py-1.5 transition-colors ${
                activeSection === link.id
                  ? 'text-[#F0434B] font-semibold'
                  : 'text-gray-300 hover:text-[#F0434B]'
              }`}
            >
              {link.mobileLabel}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
