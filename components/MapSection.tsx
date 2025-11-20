import React, { useState } from 'react';
import { SECTIONS } from '../constants';
import RiskTable from './RiskTable';

const MapSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SECTIONS[0].id);
  const activeSection = SECTIONS.find(s => s.id === activeTab) || SECTIONS[0];

  return (
    <section id="data" className="py-20 bg-slate-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Data Visualization</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Interactive Risk Assessment
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Detailed analysis of the five key components: Hazard, Vulnerability, Exposure, and Countermeasures.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation for Maps */}
          <div className="lg:w-64 flex-shrink-0">
             <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden sticky top-24">
                <div className="p-4 bg-gray-50 border-b border-gray-200 font-semibold text-gray-700">
                  Indices
                </div>
                <nav className="flex flex-col">
                  {SECTIONS.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveTab(section.id)}
                      className={`
                        text-left px-5 py-4 text-sm font-medium border-l-4 transition-all duration-200
                        ${activeTab === section.id
                          ? 'border-orange-500 bg-orange-50 text-orange-700'
                          : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                      `}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
             </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-white to-gray-50">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{activeSection.title}</h3>
                        <p className="mt-2 text-gray-600 text-lg">{activeSection.description}</p>
                      </div>
                      <div className="flex-shrink-0">
                         <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                           Figure 2.{SECTIONS.indexOf(activeSection) + 1}
                         </span>
                      </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 xl:grid-cols-2 divide-y xl:divide-y-0 xl:divide-x divide-gray-200">
                    {/* Map Visualization */}
                    <div className="p-8 bg-gray-50/50 flex flex-col">
                        <div className="aspect-[4/3] bg-white rounded-lg shadow-sm border border-gray-200 p-2 mb-6">
                            <div className="w-full h-full relative overflow-hidden rounded bg-gray-100">
                                <img 
                                    src={activeSection.imageUrl} 
                                    alt={`${activeSection.title} Map`} 
                                    className="w-full h-full object-cover"
                                />
                                {/* Note for user: Replace the src above with your actual map image URLs */}
                            </div>
                        </div>
                        <div className="mt-auto">
                          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">About this Map</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            This map visualizes the {activeSection.title} for the 11 barangays of Manabo, Abra. 
                            The colors correspond to the specific risk ratings in the table.
                          </p>
                        </div>
                    </div>

                    {/* Data Table */}
                    <div className="p-0">
                        <div className="p-6 border-b border-gray-100 bg-white sticky top-0 z-10">
                             <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Index Classification</h4>
                        </div>
                        <div className="overflow-x-auto">
                          <RiskTable 
                              data={activeSection.tableData} 
                              type={activeSection.id === 'fri' ? 'FRI' : 
                                    activeSection.id === 'hazard' ? 'Hazard' : 
                                    activeSection.id === 'vulnerability' ? 'Vulnerability' : 
                                    activeSection.id === 'exposure' ? 'Exposure' : 
                                    activeSection.id === 'hard' ? 'HCI' : 'SCI'} 
                          />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;