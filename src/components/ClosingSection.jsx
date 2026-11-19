import React from 'react';
import { VISION_STATEMENTS } from '../data/pitchData';
import SuccessAcademySeal from './SuccessAcademySeal';

export default function ClosingSection() {
  return (
    <footer id="future" className="py-24 bg-[#081526] text-white">
      <div className="max-w-5xl mx-auto px-6 space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-5xl font-bold font-serif-display leading-tight">
            The Future of Mock Trial
          </h2>
          <p className="text-lg text-slate-300">
            We have the foundation. Now we want to build the future.
          </p>
          <p className="text-sm text-slate-400">
            We envision a Success Academy Mock Trial Club that:
          </p>
        </div>

        <div className="divide-y divide-white/15 border-y border-white/15">
          {VISION_STATEMENTS.map((stmt) => (
            <div key={stmt} className="py-3.5 flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#F7941D] shrink-0" />
              <span className="text-sm sm:text-base text-slate-100">{stmt}</span>
            </div>
          ))}
        </div>

        {/* Formal Executive Colophon Sign-Off */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F7941D]">
              Our Request: Elite Status.
            </div>
            <p className="text-lg sm:text-xl text-white font-serif-display leading-relaxed">
              The interest is here. The students are here. The initiative is here. Now, let&apos;s give it the recognition and opportunity to reach its full potential.
            </p>
            <div className="pt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Thank You.
            </div>
          </div>

          <div className="flex items-center gap-4 sm:border-l sm:border-white/15 sm:pl-8 shrink-0">
            <SuccessAcademySeal className="w-20 h-20 opacity-95" />
            <div className="text-xs text-slate-400 space-y-1">
              <div className="font-semibold text-white tracking-wide">
                Success Academy
              </div>
              <div>Mock Trial Club</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
