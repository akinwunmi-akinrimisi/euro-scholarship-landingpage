import React from 'react';

const unis = [
    { name: "University of Oxford", country: "UK", color: "from-slate-50 to-slate-100", border: "border-slate-200", flag: "🇬🇧" },
    { name: "Univ. of Eastern Finland", country: "Finland", color: "from-slate-50 to-slate-100", border: "border-slate-200", flag: "🇫🇮" },
    { name: "Sorbonne University", country: "France", color: "from-slate-50 to-slate-100", border: "border-slate-200", flag: "🇫🇷" },
    { name: "TU Munich", country: "Germany", color: "from-slate-50 to-slate-100", border: "border-slate-200", flag: "🇩🇪" },
    { name: "Univ. of Amsterdam", country: "Netherlands", color: "from-slate-50 to-slate-100", border: "border-slate-200", flag: "🇳🇱" },
    { name: "Lund University", country: "Sweden", color: "from-slate-50 to-slate-100", border: "border-slate-200", flag: "🇸🇪" },
    { name: "Tallinn University", country: "Estonia", color: "from-slate-50 to-slate-100", border: "border-slate-200", flag: "🇪🇪" },
    { name: "Trinity College Dublin", country: "Ireland", color: "from-slate-50 to-slate-100", border: "border-slate-200", flag: "🇮🇪" },
];

export const UniversityLogos: React.FC = () => {
    return (
        <section className="bg-white py-12 md:py-20 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 sm:text-4xl font-serif">Global Recognition</h2>
                    <p className="mt-4 text-slate-500 font-light text-sm md:text-base">Our students have secured acceptance letters from Europe's most prestigious institutions.</p>
                </div>

                {/* Logos Grid */}
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-6 mb-16 md:mb-24">
                    {unis.map((uni) => (
                        <div key={uni.name} className={`relative overflow-hidden rounded-lg bg-white border border-slate-100 p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group`}>
                            <div className="flex flex-col items-center justify-center h-full relative z-10 text-center">
                                <span className="text-2xl md:text-3xl mb-2 md:mb-3 filter drop-shadow-sm grayscale group-hover:grayscale-0 transition-all duration-500">{uni.flag}</span>
                                <span className="font-semibold text-slate-700 text-xs md:text-sm leading-tight group-hover:text-brand-800 transition-colors font-serif">{uni.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Images Grid */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-slate-100" />
                    </div>
                    <div className="relative flex justify-center mb-10 md:mb-16">
                        <span className="bg-white px-4 md:px-6 text-xs md:text-sm text-slate-400 uppercase tracking-widest font-semibold">Join the Success Stories</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
                    <div className="group relative overflow-hidden rounded-xl h-56 md:h-80 shadow-lg cursor-pointer transform hover:scale-[1.01] transition-all">
                         <img 
                            src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                            alt="Nigerian Students Group"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
                            <p className="font-bold text-lg md:text-xl mb-1 md:mb-2 font-serif">Community & Support</p>
                            <p className="text-xs md:text-sm opacity-90 text-slate-200 font-light">You are not alone on this journey</p>
                        </div>
                    </div>
                    
                    {/* Middle Card */}
                    <div className="group relative overflow-hidden rounded-xl h-64 md:h-96 shadow-2xl z-10 border-4 border-white ring-1 ring-slate-100 cursor-pointer transform hover:scale-[1.01] transition-all">
                         <img 
                            src="https://images.unsplash.com/photo-1529390003361-507a236a83cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                            alt="Student studying"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                         <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-brand-600 text-white text-[10px] md:text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg tracking-wide uppercase">
                            Visa Approved
                         </div>
                        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
                            <p className="font-bold text-xl md:text-2xl mb-1 md:mb-2 font-serif">Life Changing</p>
                            <p className="text-xs md:text-sm opacity-90 text-slate-200 font-light">From Lagos to London</p>
                        </div>
                    </div>
                    
                    <div className="group relative overflow-hidden rounded-xl h-56 md:h-80 shadow-lg cursor-pointer transform hover:scale-[1.01] transition-all">
                         <img 
                            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                            alt="Graduation day"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
                            <p className="font-bold text-lg md:text-xl mb-1 md:mb-2 font-serif">Class of 2026</p>
                            <p className="text-xs md:text-sm opacity-90 text-slate-200 font-light">Start your application today</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};