import React from 'react';
import {
  GALLERY_ITEMS,
  NEXT_CHAPTER_ITEMS,
  TRACK_RECORD_ITEMS,
} from '../data/pitchData';

export default function TrackRecordSection() {
  return (
    <section id="track-record" className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-10 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#081526] font-serif-display">
            Our Track Record
          </h2>
          <p className="text-base text-slate-600">
            Two years of building. A future of opportunity.
          </p>
        </div>

        {/* Two-column Track Record & Next Chapter */}
        <div className="grid md:grid-cols-2 border border-slate-300 mb-10 divide-y md:divide-y-0 md:divide-x divide-slate-300">
          <div className="p-7 bg-[#F5F4F0] space-y-4">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Our Track Record
            </div>
            <ul className="space-y-3">
              {TRACK_RECORD_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-[#081526] shrink-0" />
                  <span className="text-sm sm:text-base text-[#081526]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-7 bg-[#081526] text-white space-y-4">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F7941D]">
              Our Next Chapter
            </div>
            <ul className="space-y-3">
              {NEXT_CHAPTER_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-[#F7941D] shrink-0" />
                  <span className="text-sm sm:text-base text-slate-200">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Subtle 3-column horizontal strip of small thumbnails */}
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            Our work speaks beyond the presentation. These photographs represent the community we have already begun building.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden border border-slate-300 bg-slate-100 h-32 sm:h-40"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
