import React, { useState } from 'react';
import { BEYOND_COURTROOM_SKILLS } from '../data/pitchData';

export default function BeyondCourtroomSection() {
  const [selectedId, setSelectedId] = useState('public-speaking');

  return (
    <section id="skills" className="py-20 lg:py-24 bg-[#F5F4F0] border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#081526] leading-tight font-serif-display">
              Beyond The Courtroom
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              The skills last long after the competition.
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-slate-200 border border-slate-300 bg-white">
            {BEYOND_COURTROOM_SKILLS.map((skill) => {
              const isSelected = selectedId === skill.id;
              return (
                <button
                  key={skill.id}
                  onClick={() => setSelectedId(skill.id)}
                  className={`w-full text-left p-6 transition-colors cursor-pointer ${
                    isSelected ? 'bg-[#081526] text-white' : 'hover:bg-slate-50 text-[#081526]'
                  }`}
                >
                  <h3 className="text-lg font-bold font-serif-display">
                    {skill.title}
                  </h3>
                  <p
                    className={`text-sm mt-1 leading-relaxed ${
                      isSelected ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {skill.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
