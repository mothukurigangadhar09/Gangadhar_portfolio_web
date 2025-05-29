// app/page.tsx

'use client';

import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 pt-12">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      <footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-700 mt-12">
        © {new Date().getFullYear()} Gangadhar Mothukuri. All rights reserved.
      </footer>
    </main>
  );
}
