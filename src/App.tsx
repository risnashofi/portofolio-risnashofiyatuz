import { useEffect, useState } from 'react';
import { ContactSection } from './components/ContactSection';
import { CvModal } from './components/CvModal';
import { EditorialGridSection } from './components/EditorialGridSection';
import { ExperienceModal } from './components/ExperienceModal';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ExperienceItem } from './data/portfolioData';

const SECTION_IDS = ['about', 'experience', 'education', 'focus', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 140;
      let current = 'about';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const isAnyModalOpen = selectedExperience !== null || cvModalOpen;
    document.body.style.overflow = isAnyModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedExperience, cvModalOpen]);

  return (
    <div className="bg-[#070707] text-gray-200 font-sans bg-grain antialiased min-h-screen">
      <Navbar activeSection={activeSection} />

      <main>
        <HeroSection />
        <ExperienceSection onSelectExperience={setSelectedExperience} />
        <EditorialGridSection />
        <ContactSection onOpenCv={() => setCvModalOpen(true)} />
      </main>

      <Footer />

      <ExperienceModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />

      <CvModal open={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}
