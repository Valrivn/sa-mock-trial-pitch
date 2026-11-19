import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ELITE_ACCOMPLISHMENTS } from '../data/pitchData';

export default function EliteRoadmapSection() {
  const [expanded, setExpanded] = useState('expansion');

  return (
    <section id="roadmap" className="py-20 lg:py-24 bg-[#F5F4F0] border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#081526] font-serif-display">
            Why Elite Status
          </h2>
          <p className="text-base font-medium text-[#081526]">
            Recognition that matches our potential.
          </p>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Elite Status would provide the institutional recognition and support necessary to develop Mock Trial into a sustainable, network-wide competitive program.
          </p>
        </div>

        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          What We Aim to Accomplish:
        </div>

        <div className="grid md:grid-cols-2 border border-slate-300 bg-white mb-10 divide-y md:divide-y-0 md:divide-x divide-slate-300">
          {ELITE_ACCOMPLISHMENTS.map((item) => {
            const isOpen = expanded === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setExpanded(item.id)}
                className={`text-left p-6 border-b border-slate-300 transition-colors cursor-pointer ${
                  isOpen
                    ? 'bg-[#081526] text-white'
                    : 'bg-white text-[#081526] hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold font-serif-display">
                    {item.title}
                  </h3>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-[#F7941D]' : 'text-slate-400'
                    }`}
                  />
                </div>
                {isOpen && (
                  <p className="mt-3 pt-3 border-t border-white/15 text-sm text-slate-200 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </button>
            );
          })}
        </div>

        <div className="p-6 bg-white border border-slate-300">
          <p className="text-base font-medium text-[#081526] leading-relaxed">
            We are not asking Success Academy to create student interest. We are asking it to recognize and support the interest that already exists.
          </p>
        </div>
      </div>
    </section>
  );
}
