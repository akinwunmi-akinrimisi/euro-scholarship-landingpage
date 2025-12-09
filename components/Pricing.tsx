import React from 'react';
import { Check, Shield, Download } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <div id="pricing" className="bg-slate-50 py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto rounded-3xl shadow-premium overflow-hidden lg:max-w-none lg:flex bg-white border border-slate-100">
          <div className="flex-1 bg-white px-8 py-10 lg:p-16">
            <h3 className="text-3xl font-bold text-slate-900 font-serif">
              EuroScholar 2026 Relocation Kit
            </h3>
            <p className="mt-6 text-lg text-slate-600 font-light leading-relaxed">
              Immediate access to the comprehensive database of 120+ relocation-ready scholarships. Bypass middlemen and take control of your future.
            </p>
            <div className="mt-10">
              <div className="flex items-center">
                <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-widest font-bold uppercase text-brand-700">
                  Included Resources
                </h4>
                <div className="flex-1 border-t border-slate-100"></div>
              </div>
              <ul className="mt-8 space-y-4 lg:grid lg:grid-cols-1 lg:gap-y-4 lg:space-y-0">
                {[
                    'List of 120+ Fully Funded Scholarships',
                    'Winning Statement of Purpose (SOP) Templates',
                    'Comprehensive Application Checklist',
                    'Visa Interview Preparation Guide'
                ].map((item) => (
                  <li key={item} className="flex items-center lg:col-span-1 p-4 bg-slate-50 rounded-xl border border-slate-100 transition-colors hover:border-brand-100">
                    <div className="flex-shrink-0">
                      <div className="bg-brand-600 rounded-full p-1">
                        <Check className="h-4 w-4 text-white" aria-hidden="true" />
                      </div>
                    </div>
                    <p className="ml-4 text-base font-medium text-slate-700">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="py-10 px-8 text-center bg-slate-900 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-16 lg:w-[400px]">
            <p className="text-lg leading-6 font-medium text-slate-300 uppercase tracking-widest">
              One-Time Investment
            </p>
            <div className="mt-6 flex items-center justify-center text-5xl font-bold text-white font-serif">
              <span>₦10,000</span>
            </div>
            <div className="flex items-center justify-center mt-2">
                 <span className="text-xl font-medium text-slate-500 line-through">₦25,000</span>
            </div>
            <p className="mt-6 text-sm text-brand-400 font-bold tracking-wide uppercase">
              Limited Time Offer
            </p>
            <div className="mt-8">
              <button
                type="button"
                className="w-full flex items-center justify-center px-6 py-4 border border-transparent text-lg font-bold rounded-xl text-brand-900 bg-white hover:bg-brand-50 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                onClick={() => alert('This would open the Paystack/Flutterwave checkout!')}
              >
                <Download className="w-5 h-5 mr-3" />
                Buy Now
              </button>
            </div>
            <div className="mt-6 text-xs text-slate-400 flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" /> Secure Payment via Paystack
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};