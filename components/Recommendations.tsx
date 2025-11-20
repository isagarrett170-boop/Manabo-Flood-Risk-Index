import React from 'react';

const Recommendations: React.FC = () => {
  const recs = [
    {
      icon: "📢",
      title: "Enhance Awareness Programs",
      text: "Shift from general hazard awareness to specific, household-level vulnerability and exposure education."
    },
    {
      icon: "🚨",
      title: "Prioritize High-Risk Barangays",
      text: "Focus resources on Luzong, Sto. Tomas, San Ramon West, and Catacdegan Nuevo for early warning systems."
    },
    {
      icon: "🏗️",
      title: "Improve Countermeasures",
      text: "Address the systemic gap in 'soft' measures (drills) and invest in 'hard' measures (drainage/floodwalls) in high-risk zones."
    },
    {
      icon: "📜",
      title: "Institutionalize the Map",
      text: "LGU and barangay councils should formally adopt this FRI map for updating Comprehensive Land Use Plans (CLUP)."
    }
  ];

  return (
    <section id="recommendations" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold">Key Recommendations</h2>
          <p className="mt-4 text-xl text-gray-400">Based on the study findings</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recs.map((rec, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-colors">
              <div className="text-4xl mb-4">{rec.icon}</div>
              <h3 className="text-lg font-bold text-orange-400 mb-2">{rec.title}</h3>
              <p className="text-gray-300">{rec.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;