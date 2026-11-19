import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import SuccessAcademySeal from './SuccessAcademySeal';

const SECTIONS = [
  { id: 'hero', label: 'Overview' },
  { id: 'who-we-are', label: 'Who We Are' },
  { id: 'landscape', label: 'Where Does Law Fit' },
  { id: 'courtroom', label: 'What Is Mock Trial' },
  { id: 'skills', label: 'Beyond The Courtroom' },
  { id: 'growth', label: 'Demonstrated Growth' },
  { id: 'track-record', label: 'Our Track Record' },
  { id: 'roadmap', label: 'Why Elite Status' },
  { id: 'future', label: 'The Future of Mock Trial' },
];

export default function Navbar({ presentationMode, setPresentationMode }) {
  const [activeId, setActiveId] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(SECTIONS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentIdx = SECTIONS.findIndex((s) => s.id === activeId);

  const jumpTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (!presentationMode) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        const next = SECTIONS[Math.min(currentIdx + 1, SECTIONS.length - 1)];
        if (next) jumpTo(next.id);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        const prev = SECTIONS[Math.max(currentIdx - 1, 0)];
        if (prev) jumpTo(prev.id);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [presentationMode, currentIdx]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#081526]/95 backdrop-blur-md border-b border-white/12">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          {/* Left: S|A + Circular Seal + Title */}
          <a
            href="#hero"
            className="flex items-center gap-3 focus:outline-none group"
            aria-label="Success Academy Mock Trial Home"
          >
            <div className="flex items-center font-bold tracking-tight text-lg select-none">
              <span className="text-[#F7941D]">S</span>
              <span className="mx-1.5 h-4 w-[1.5px] bg-[#F7941D]" />
              <span className="text-[#F7941D]">A</span>
            </div>

            <SuccessAcademySeal className="w-10 h-10 shrink-0 transition-transform group-hover:scale-105" />

            <div className="hidden sm:flex flex-col border-l border-white/15 pl-3">
              <span className="text-xs font-semibold tracking-wide text-white leading-tight">
                Success Academy Mock Trial
              </span>
              <span className="text-[11px] text-slate-400 leading-tight">
                Elite Status Pitch
              </span>
            </div>
          </a>

          {/* Right: Minimalist Menu Trigger */}
          <div className="flex items-center gap-3">
            {presentationMode && (
              <div className="flex items-center gap-1 border border-white/20 px-2 py-1 text-xs text-white">
                <button
                  onClick={() => {
                    const prev = SECTIONS[Math.max(currentIdx - 1, 0)];
                    if (prev) jumpTo(prev.id);
                  }}
                  disabled={currentIdx <= 0}
                  className="p-0.5 hover:text-[#F7941D] disabled:opacity-30 cursor-pointer"
                  title="Previous Section (Left Arrow)"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <span className="px-1.5 font-mono text-[11px] text-slate-300">
                  {currentIdx + 1}/{SECTIONS.length}
                </span>
                <button
                  onClick={() => {
                    const next = SECTIONS[Math.min(currentIdx + 1, SECTIONS.length - 1)];
                    if (next) jumpTo(next.id);
                  }}
                  disabled={currentIdx >= SECTIONS.length - 1}
                  className="p-0.5 hover:text-[#F7941D] disabled:opacity-30 cursor-pointer"
                  title="Next Section (Right Arrow)"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center gap-2 px-3.5 py-2 border border-white/25 text-xs font-semibold tracking-widest uppercase text-white hover:border-[#F7941D] hover:text-[#F7941D] transition-colors cursor-pointer"
              aria-expanded={menuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span>Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Clean Law-Firm Index Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#081526]/98 backdrop-blur-lg pt-20 pb-10 px-6 overflow-y-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Presentation Index
              </span>
              <button
                onClick={() => setPresentationMode(!presentationMode)}
                className={`px-3 py-1.5 text-xs font-semibold border transition-colors cursor-pointer ${
                  presentationMode
                    ? 'border-[#F7941D] text-[#F7941D]'
                    : 'border-white/25 text-slate-300 hover:text-white'
                }`}
              >
                {presentationMode ? 'Deck Navigation: On' : 'Enable Deck Navigation'}
              </button>
            </div>

            <nav className="divide-y divide-white/10 border-b border-white/10">
              {SECTIONS.map((sec) => {
                const isActive = activeId === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => jumpTo(sec.id)}
                    className={`w-full text-left py-4 flex items-center justify-between transition-colors cursor-pointer group ${
                      isActive ? 'text-[#F7941D]' : 'text-white hover:text-[#F7941D]'
                    }`}
                  >
                    <span className="text-xl sm:text-2xl font-serif-display">
                      {sec.label}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-slate-400 group-hover:text-[#F7941D]">
                      View
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
