import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhoWeAreSection from './components/WhoWeAreSection';
import ExtracurricularMatrix from './components/ExtracurricularMatrix';
import CourtroomSimulator from './components/CourtroomSimulator';
import BeyondCourtroomSection from './components/BeyondCourtroomSection';
import GrowthSection from './components/GrowthSection';
import TrackRecordSection from './components/TrackRecordSection';
import EliteRoadmapSection from './components/EliteRoadmapSection';
import ClosingSection from './components/ClosingSection';

export default function App() {
  const [presentationMode, setPresentationMode] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#0A192F]">
      <Navbar
        presentationMode={presentationMode}
        setPresentationMode={setPresentationMode}
      />
      <main>
        <HeroSection />
        <WhoWeAreSection />
        <ExtracurricularMatrix />
        <CourtroomSimulator />
        <BeyondCourtroomSection />
        <GrowthSection />
        <TrackRecordSection />
        <EliteRoadmapSection />
      </main>
      <ClosingSection />
    </div>
  );
}
