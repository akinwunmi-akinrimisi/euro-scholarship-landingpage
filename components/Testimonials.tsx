import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: 'Chinedu O.',
    role: 'Now in Finland (Moved from Lagos)',
    quote: "I almost gave up because agents were asking for 2M Naira just for consultation. This list showed me a tuition-free school in Finland. I applied myself, and now I'm here with my family.",
    avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
  },
  {
    name: 'Adetola B.',
    role: 'Masters in UK',
    quote: "Proof of funds was my biggest fear. The list highlighted scholarships that cover full tuition AND living expenses. I used my scholarship letter as my financial evidence for the visa.",
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
  },
  {
    name: 'Nneka U.',
    role: 'PhD in Sweden',
    quote: "I had a 2:2 from UNN and thought no one would take me. The guide helped me package my 4 years of work experience, and I got a fully funded offer!",
    avatar: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
  },
  {
    name: 'Ibrahim S.',
    role: 'MSc in Germany',
    quote: "I didn't know German public universities are tuition-free! The list identified English-taught programs. I only paid for my flight. Germany is beautiful.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
  },
  {
    name: 'Grace A.',
    role: 'Public Health in Norway',
    quote: "As an HND holder in Science Lab Tech, I faced so many rejections. This guide showed me which Norwegian schools value practical experience. I start next month!",
    avatar: 'https://images.unsplash.com/photo-1534751516054-127db86347b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
  },
  {
    name: 'Tobi D.',
    role: 'MBA in France',
    quote: "The visa interview guide was a lifesaver. It gave me the exact answers to give the consular officer about my 'intent to return'. Visa approved in 10 days.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
  },
  {
    name: 'Zainab M.',
    role: 'Tech in Estonia',
    quote: "I wanted a country with a low cost of living. The list categorized schools by budget. Estonia is affordable and the tech scene is crazy good.",
    avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
  },
  {
    name: 'David K.',
    role: 'Research in Belgium',
    quote: "My 2:1 was in History, and I wanted to pivot to International Relations. The templates helped me write a Statement of Purpose that explained my switch perfectly.",
    avatar: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
  },
  {
    name: 'Funke L.',
    role: 'Nursing in Netherlands',
    quote: "I'm 35 and thought I was too old. The guide has a 'No Age Limit' filter. Now I'm upgrading my nursing degree in Amsterdam.",
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <div className="bg-slate-900 py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl font-serif">
            Real Stories, Real Visas
          </h2>
          <p className="mt-4 text-xl text-slate-400 font-light">
            Success stories from Nigerians who trusted our process.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-800/50 rounded-xl p-8 relative border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <img className="h-14 w-14 rounded-full border-2 border-brand-700 object-cover group-hover:border-brand-500 transition-colors" src={t.avatar} alt={t.name} />
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-white font-serif">{t.name}</h4>
                  <p className="text-xs text-brand-400 font-bold uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed italic relative z-10 font-light">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};