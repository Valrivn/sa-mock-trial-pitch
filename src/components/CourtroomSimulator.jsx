import React, { useState } from 'react';
import { COURTROOM_EXPERIENCES } from '../data/pitchData';

export default function CourtroomSimulator() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="courtroom" className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Exact PDF Definition */}
          <div className="lg:col-span-5 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#081526] font-serif-display">
              What Is Mock Trial?
            </h2>
            <p className="text-lg font-medium text-[#081526] leading-relaxed">
              Mock Trial is more than a debate. It is a simulation of the legal profession.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Students assume the roles of attorneys and witnesses in simulated courtroom proceedings.
            </p>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-base font-semibold text-[#081526]">
                Students aren&apos;t simply learning about the law. They&apos;re actively engaging with it.
              </p>
            </div>
          </div>

          {/* Right: Interactive "What Students Experience" List */}
          <div className="lg:col-span-7 border border-slate-300 bg-[#F5F4F0] p-6 sm:p-8 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              What Students Experience
            </div>

            <div className="divide-y divide-slate-200 border border-slate-200 bg-white">
              {COURTROOM_EXPERIENCES.map((item, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={item}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-full text-left px-5 py-4 transition-colors cursor-pointer flex items-center justify-between gap-4 ${
                      isActive
                        ? 'bg-[#081526] text-white'
                        : 'bg-white text-[#081526] hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-sm sm:text-base font-medium">
                      {item}
                    </span>
                    <span
                      className={`w-2 h-2 shrink-0 ${
                        isActive ? 'bg-[#F7941D]' : 'bg-slate-300'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
