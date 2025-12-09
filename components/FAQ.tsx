import React, { useState } from 'react';
import { FAQItem } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10 md:mb-16 font-serif">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-brand-50 border-brand-200 shadow-sm' : 'bg-white hover:border-brand-200'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
              >
                <span className={`text-base md:text-lg font-bold font-serif ${openIndex === index ? 'text-brand-800' : 'text-slate-900'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-600 flex-shrink-0 transition-transform" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 pt-0 text-sm md:text-base text-slate-600 leading-relaxed font-light border-t border-brand-100/50 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};