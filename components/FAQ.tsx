import React from 'react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "Do these scholarships cover 'Proof of Funds'?",
    answer: "Yes! Most fully funded scholarships on our list provide a formal letter stating they cover your tuition and living costs. You can submit this letter to the embassy instead of a bank statement with millions of Naira."
  },
  {
    question: "I have an HND or Third Class. Can I use this?",
    answer: "Absolutely. While some schools are strict, many universities in Europe (especially in Poland, Hungary, and private schools in Germany/France) accept HND or 2:2 if you have relevant work experience. We highlight these in the list."
  },
  {
    question: "Why is the Education Route better than a Work Visa?",
    answer: "Work visas are incredibly hard to get from Nigeria without highly specialized skills. Student visas have a 95% approval rate if your paperwork is correct. It gets you into the country, and you can switch to a work permit after graduating."
  },
  {
    question: "Do I need IELTS?",
    answer: "Not always. Many schools accept a 'Letter of English Proficiency' from your Nigerian university, or your WAEC/NECO result if it's recent (C6 or better). The list specifies language requirements."
  },
  {
    question: "Can I move with my family?",
    answer: "Yes, countries like the UK, Finland, and Sweden often allow Master's and PhD students to bring dependents (spouse and children). We mark these family-friendly countries in the guide."
  }
];

export const FAQ: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-16 font-serif">
          Frequently Asked Questions
        </h2>
        <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-16 md:space-y-0">
          {faqs.map((faq) => (
            <div key={faq.question} className="relative">
              <dt className="text-lg leading-6 font-bold text-slate-900 font-serif">
                {faq.question}
              </dt>
              <dd className="mt-3 text-base text-slate-600 leading-relaxed font-light">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};