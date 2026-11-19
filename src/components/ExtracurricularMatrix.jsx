import React, { useState } from 'react';
import { EXTRACURRICULAR_DISCIPLINES } from '../data/pitchData';

export default function ExtracurricularMatrix() {
  const [selectedId, setSelectedId] = useState('mock-trial');

  return (
    <section id="landscape" className="py-20 lg:py-24 bg-[#F5F4F0] border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#081526] font-serif-display">
            Where Does Law Fit Into Success Academy?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Success Academy provides students with opportunities to explore numerous professional disciplines through extracurricular activities.
          </p>
        </div>

        {/* Exposed Architectural 4-Column Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-slate-300 bg-white mb-10 divide-y sm:divide-y-0 sm:divide-x divide-slate-300">
          {EXTRACURRICULAR_DISCIPLINES.map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`text-left p-6 transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#081526] text-white'
                    : 'bg-white text-[#081526] hover:bg-slate-50'
                }`}
              >
                <div className="text-xl font-bold font-serif-display">
                  {item.code}
                </div>
                <div
                  className={`text-sm mt-1.5 ${
                    isSelected ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {item.discipline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Exact PDF Closing Statement */}
        <div className="p-6 sm:p-8 bg-white border border-slate-300 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-base text-slate-700 leading-relaxed max-w-3xl">
            A predominantly STEM-focused academic environment should not limit the professional interests students have the opportunity to explore.
          </p>
          <p className="text-base font-bold text-[#081526] shrink-0 border-l-2 border-[#F7941D] pl-4">
            We believe legal education deserves a place.
          </p>
        </div>
      </div>
    </section>
  );
}
