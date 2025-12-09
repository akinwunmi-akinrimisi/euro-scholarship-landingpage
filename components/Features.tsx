import React from 'react';
import { BookOpen, Wallet, CheckCircle2, GraduationCap, Plane, FileCheck } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: 'Waive "Proof of Funds"',
    description: 'Our verified list includes fully funded scholarships that act as your financial guarantee, removing the need for millions in bank statements.',
    icon: Wallet,
  },
  {
    title: 'Post-Study Work Pathways',
    description: 'We prioritize destinations like Germany, UK, and Finland that offer clear 1-2 year post-graduation work permits leading to permanent residency.',
    icon: Plane,
  },
  {
    title: 'Inclusive Academic Criteria',
    description: 'Your 2:2 or HND is valued here. We have identified institutions that prioritize practical experience and portfolio over raw GPA.',
    icon: GraduationCap,
  },
  {
    title: 'English Proficiency Waivers',
    description: 'Save money on IELTS. Many listed schools accept WAEC/NECO results (C6 minimum) or a university Letter of Proficiency.',
    icon: FileCheck,
  },
  {
    title: 'Visa Interview Strategy',
    description: 'Exclusive guides on how to articulate your study plans to consular officers to prove genuine intent and secure your visa.',
    icon: BookOpen,
  },
  {
    title: 'Verified 2026 Openings',
    description: 'Our research team verifies every link weekly. Don\'t waste time on dead ends; focus on active, funded opportunities.',
    icon: CheckCircle2,
  },
];

export const Features: React.FC = () => {
  return (
    <div className="py-12 md:py-24 bg-slate-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-brand-700 tracking-widest uppercase mb-3">Why Choose the Education Route?</h2>
          <p className="text-2xl md:text-3xl font-bold text-slate-900 sm:text-4xl font-serif">
            The Intelligent Pathway to Relocation
          </p>
          <p className="mt-4 text-base md:text-lg text-slate-600 font-light leading-relaxed">
            Relocating via education offers the highest approval rates and a legal, dignified path to settlement in Europe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-premium transition-all duration-300 group">
              <div className="flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-lg bg-brand-50 text-brand-700 mb-4 md:mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <feature.icon className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3 font-serif">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};