import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function GrowthSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);
  const [seasonView, setSeasonView] = useState('growth');

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = 500;
    const duration = 1000;
    const stepTime = 20;
    const increment = end / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView]);

  return (
    <section
      id="growth"
      ref={ref}
      className="py-20 lg:py-24 bg-[#081526] text-white border-b border-white/12"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Clean KPI & Season Comparison */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-display">
              Our Demonstrated Growth
            </h2>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F7941D]">
              The interest is already here.
            </p>

            <div className="p-7 bg-white/[0.03] border border-white/15 space-y-6">
              <div>
                <div className="text-5xl sm:text-6xl font-bold text-[#F7941D] font-serif-display">
                  +{count}%
                </div>
                <div className="text-sm font-semibold uppercase tracking-[0.14em] text-white mt-2">
                  Increase in Student Sign-Ups
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Previous Season → Current Season
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">Previous Season → Current Season</span>
                  <div className="flex gap-1 border border-white/15 p-0.5">
                    <button
                      onClick={() => setSeasonView('growth')}
                      className={`px-2 py-0.5 cursor-pointer transition ${
                        seasonView === 'growth'
                          ? 'bg-[#F7941D] text-[#081526] font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      +500%
                    </button>
                    <button
                      onClick={() => setSeasonView('multiplier')}
                      className={`px-2 py-0.5 cursor-pointer transition ${
                        seasonView === 'multiplier'
                          ? 'bg-[#F7941D] text-[#081526] font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      6x
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Previous Season</span>
                    <span>1x</span>
                  </div>
                  <div className="h-2 bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '16.6%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                      className="h-full bg-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-white font-medium">
                    <span>Current Season</span>
                    <span className="text-[#F7941D]">
                      {seasonView === 'growth' ? '+500%' : '6x'}
                    </span>
                  </div>
                  <div className="h-2 bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.1 }}
                      className="h-full bg-[#F7941D]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Exact PDF Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 bg-white/[0.03] border border-white/15">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                Our growth demonstrates an increasing demand for legal education and competitive opportunities within Success Academy.
              </p>
            </div>

            <div className="p-6 bg-white/[0.03] border border-white/15 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F7941D]">
                What Makes This Different?
              </div>
              <p className="text-base text-slate-300 leading-relaxed">
                Students are not participating simply for academic credit. They are joining because they are genuinely interested in law, advocacy, public speaking, and competition.
              </p>
              <div className="pt-3 border-t border-white/15">
                <p className="text-base font-bold text-white">
                  The demand exists even without Elite Status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
