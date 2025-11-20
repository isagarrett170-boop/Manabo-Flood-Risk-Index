import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-slate-900 py-24 lg:py-40 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="max-w-4xl mx-auto md:mx-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-semibold mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            2025 COE Thesis
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            Mapping and Indexing <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">
              Flood Risk
            </span> in Manabo, Abra
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0 font-light">
            A comprehensive digital brochure presenting the 2025 Flood Risk Index (FRI). 
            Integrating GIS technology with community-based data to protect lives and infrastructure.
          </p>
          
          <div className="border-t border-white/10 pt-8">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">Research Team</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2 text-slate-300 text-sm">
                <span>Benedito, Angelzen A.</span>
                <span>Duran, Rolly A.</span>
                <span>Pasal, Dominique B.</span>
                <span>Tadeo, Jeffershane Mae R.</span>
                <span>Tulan, Whitney B.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;