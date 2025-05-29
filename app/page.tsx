'use client';

import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function SimplePortfolio() {
	return (
		<main className="min-h-screen bg-gray-900 pt-12">
			{/* Intro and bio */}
			<HeroSection />

			{/* Tech stack */}
			<SkillsSection />

			{/* Portfolio projects */}
			<ProjectsSection />

			{/* Contact details or form */}
			<ContactSection />

			{/* Footer */}
			<footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-700 mt-12">
				© {new Date().getFullYear()} Gangadhar Mothukuri. All rights reserved.
			</footer>
		</main>
	);
}
