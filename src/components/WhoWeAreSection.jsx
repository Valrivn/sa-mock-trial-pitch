import React from 'react';
import { MISSION_ITEMS } from '../data/pitchData';

export default function WhoWeAreSection() {
  return (
    <section
      id="who-we-are"
      className="py-20 lg:py-24 bg-white text-[#081526] border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Exact PDF Narrative */}
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif-display">
              Who We Are.
            </h2>
            <p className="text-[#081526] text-base leading-relaxed font-medium">
              The Success Academy Mock Trial Club is an emerging competitive program that gives students the opportunity to explore the legal profession through simulated courtroom proceedings and competitive experiences.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Bringing together some of Success Academy&apos;s most ambitious and driven students, Mock Trial creates a space where individuals from across the extracurricular network, including organizations such as Model UN and DECA, can unite through a shared interest in law, advocacy, and competition.
            </p>
          </div>

          {/* Right: Clean Executive Mission List */}
          <div className="lg:col-span-6 lg:border-l lg:border-slate-200 lg:pl-10 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Our Mission
            </h3>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {MISSION_ITEMS.map((item) => (
                <div key={item} className="py-4 flex items-start gap-3.5">
                  <span className="mt-2 w-1.5 h-1.5 bg-[#F7941D] shrink-0" />
                  <p className="text-base text-[#081526] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
