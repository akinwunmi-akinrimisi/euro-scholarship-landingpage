import React from 'react';
import { AlertCircle, CheckCircle, Clock } from 'lucide-react';

export const ScholarshipSummaries: React.FC = () => {
  return (
    <div className="bg-white py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 font-serif">Curated Opportunities</h2>
          <p className="mt-4 text-lg text-slate-600 font-light max-w-2xl mx-auto">
            We have categorized opportunities to help you target the most valuable offers first.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Fully Funded Card */}
          <div className="bg-slate-50 rounded-2xl shadow-sm border border-brand-200 p-8 relative overflow-hidden transition-all hover:shadow-md">
            <div className="absolute top-0 right-0 bg-brand-700 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl tracking-wide uppercase">
                Premium Selection
            </div>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-brand-100 rounded-full mr-4">
                <CheckCircle className="w-6 h-6 text-brand-700" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-serif">Fully Funded Scholarships</h3>
            </div>
            <p className="text-slate-700 mb-6 leading-relaxed">
              The "Gold Standard" of relocation. These prestige offers cover <strong>100% Tuition, Monthly Stipends (€800-€1200), Health Insurance, and Flights</strong>.
            </p>
            <ul className="space-y-3 text-sm text-slate-600 mb-8 border-t border-brand-100 pt-6">
              <li className="flex items-center"><span className="w-2 h-2 bg-brand-500 rounded-full mr-3"></span>Waives Proof of Funds at Embassy</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-brand-500 rounded-full mr-3"></span>Suitable for HND & 2:2 holders with experience</li>
            </ul>
            <div className="bg-white border border-red-100 p-4 rounded-xl flex items-start shadow-sm">
                <Clock className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">
                    <span className="block font-bold text-red-700 mb-1">Time Sensitive</span>
                    40% of these opportunities close within 3 weeks. Immediate action is recommended.
                </p>
            </div>
          </div>

          {/* Partial / Tuition Waiver Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 transition-all hover:shadow-md">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-orange-50 rounded-full mr-4">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-serif">Tuition Waivers & Partial Funding</h3>
            </div>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Ideal for candidates with partial savings. These scholarships remove the significant burden of tuition fees (saving up to €15,000/year).
            </p>
             <ul className="space-y-3 text-sm text-slate-600 mb-8 border-t border-slate-100 pt-6">
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Zero Tuition Fees</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Student covers only living expenses</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>High acceptance rate for international students</li>
            </ul>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-700 font-medium">
                    <strong className="text-slate-900">Recommended Strategy:</strong> Apply to 3 Fully Funded + 2 Tuition Waivers to maximize your relocation chances in 2026.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};