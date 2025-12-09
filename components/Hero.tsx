import React from 'react';
import { CheckCircle, Download } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-6">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-8 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 text-brand-800 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-6 border border-brand-100">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-600 mr-2 animate-pulse"></span>
                The Safest Way to "Japa" in 2026
              </div>
              <h1 className="text-3xl tracking-tight font-bold text-slate-900 sm:text-5xl md:text-6xl lg:leading-tight">
                <span className="block">Your Academic Path to</span>
                <span className="block text-brand-700 italic">European Residency</span>
              </h1>
              <p className="mt-4 text-base text-slate-600 sm:mt-8 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-8 md:text-xl lg:mx-0 leading-relaxed font-light">
                Secure your future with the definitive list of 120+ fully funded scholarships. Bypass the "Proof of Funds" barrier and relocate legally through education.
              </p>
              <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
                <button
                  onClick={scrollToPricing}
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-3 sm:px-10 sm:py-4 border border-transparent text-base font-semibold rounded-lg text-white bg-brand-800 hover:bg-brand-900 md:text-lg transition-all shadow-lg hover:shadow-brand-500/30 transform hover:-translate-y-0.5"
                >
                  <Download className="w-5 h-5 mr-3" />
                  Access the 2026 List
                </button>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-3 sm:gap-4 text-sm text-slate-500 sm:justify-center lg:justify-start">
                <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-brand-600 mr-2 flex-shrink-0"/> 
                    <span className="font-medium">HND & 2:2 Accepted</span>
                </div>
                <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-brand-600 mr-2 flex-shrink-0"/> 
                    <span className="font-medium">95% Visa Success Rate</span>
                </div>
                <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-brand-600 mr-2 flex-shrink-0"/> 
                    <span className="font-medium">Full Tuition Coverage</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-64 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full object-center"
          src="https://images.unsplash.com/photo-1589156288859-f0cb0d82b065?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Young African female student using laptop in university setting"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent lg:via-white/10"></div>
      </div>
    </div>
  );
};