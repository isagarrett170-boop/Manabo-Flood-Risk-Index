import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MapSection from './components/MapSection';
import Advisor from './components/Advisor';
import Recommendations from './components/Recommendations';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <MapSection />
        <Advisor />
        <Recommendations />
      </main>
      
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4 text-lg font-semibold text-white">2025 COE Thesis</p>
          <p className="text-sm">
            Researchers: Benedito, Duran, Pasal, Tadeo, Tulan.
          </p>
          <p className="text-xs mt-8 opacity-50">
            Disclaimer: This is a digital representation of the thesis presentation. Data is based on the provided documentation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;