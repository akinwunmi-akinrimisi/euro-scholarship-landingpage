import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { UniversityLogos } from './components/UniversityLogos';
import { ScholarshipSummaries } from './components/ScholarshipSummaries';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { CountdownTimer } from './components/CountdownTimer';
import { PurchaseNotification } from './components/PurchaseNotification';
import { GraduationCap } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <GraduationCap className="h-9 w-9 text-brand-700" />
              <div className="ml-3">
                <span className="block text-xl font-bold text-slate-900 font-serif leading-none">EuroScholar</span>
                <span className="text-xs text-brand-600 font-medium tracking-wide">ADMISSIONS 2026</span>
              </div>
            </div>
            <div>
              <button 
                className="bg-brand-800 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-900 transition-colors shadow-md hover:shadow-lg"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Download List
              </button>
            </div>
          </div>
        </div>
      </header>

      <CountdownTimer />

      <main>
        <Hero />
        <Features />
        <UniversityLogos />
        <Testimonials />
        <ScholarshipSummaries />
        <Pricing />
        <FAQ />
      </main>

      <PurchaseNotification />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center text-white mb-6">
              <GraduationCap className="h-7 w-7" />
              <span className="ml-3 text-xl font-bold font-serif">EuroScholar</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering ambitious Nigerian students to achieve their dreams of European education and residency. Verified, funded pathways for 2026.
            </p>
          </div>
          <div>
            <h3 className="text-white font-serif font-semibold mb-6 tracking-wide">Legal & Support</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-serif font-semibold mb-6 tracking-wide">Contact Us</h3>
            <p className="text-sm mb-2">support@euroscholar2026.com</p>
            <p className="text-sm text-slate-400">Lagos Office: 123 Adeola Odeku St, VI.</p>
            <p className="text-sm text-slate-400">London Office: 123 Academic Way, UK.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © 2025 EuroScholar. All rights reserved. Not affiliated with the European Commission.
        </div>
      </footer>
    </div>
  );
};

export default App;