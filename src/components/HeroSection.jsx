import React from 'react';

export default function HeroSection() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="pt-28 pb-16 lg:pt-32 lg:pb-20 bg-[#081526] text-white border-b border-white/12"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Commanding Law-Firm Headline */}
          <div className="md:col-span-7 space-y-6">
            <div className="h-[2px] w-12 bg-[#F7941D]" />

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-tight font-serif-display">
              Success Academy Mock Trial Elite Pitch
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-serif-display italic leading-relaxed max-w-xl">
              Building the Next Generation of Advocates, Leaders, and Legal Professionals.
            </p>

            {/* Restrained BigLaw Hairline Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('who-we-are')}
                className="px-6 py-3 border border-[#F7941D] text-white font-semibold text-xs uppercase tracking-[0.16em] hover:bg-[#F7941D] hover:text-[#081526] transition-colors cursor-pointer"
              >
                Read the Pitch
              </button>
              <button
                onClick={() => scrollTo('growth')}
                className="px-6 py-3 border border-white/25 text-slate-200 font-semibold text-xs uppercase tracking-[0.16em] hover:border-white hover:text-white transition-colors cursor-pointer"
              >
                Growth Data
              </button>
            </div>
          </div>

          {/* Right: Compact Framed Image with Frosted Glass Blur Card */}
          <div className="md:col-span-5">
            <div className="relative overflow-hidden border border-white/20 aspect-[4/3] bg-[#0A192F]">
              <img
                src="./images/hero-advocacy.jpg"
                alt="Success Academy Mock Trial Advocates"
                className="w-full h-full object-cover object-center opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081526]/80 via-transparent to-transparent" />

              {/* Signature Frosted Glassmorphic Blur Card */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="glass-card-dark p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F7941D] mb-1">
                    The Future of Mock Trial
                  </div>
                  <p className="text-xs sm:text-sm text-white font-serif-display leading-snug">
                    Building the Next Generation of Advocates, Leaders, and Legal Professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exposed 1px Architectural Summary Grid */}
        <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-3 gap-6">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white font-serif-display">
              +500%
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Increase in Student Sign-Ups
            </div>
          </div>
          <div className="border-l border-white/15 pl-6">
            <div className="text-2xl sm:text-3xl font-bold text-white font-serif-display">
              2 Years
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Building the Foundation
            </div>
          </div>
          <div className="border-l border-white/15 pl-6">
            <div className="text-2xl sm:text-3xl font-bold text-[#F7941D] font-serif-display">
              Elite Status
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Our Request
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
