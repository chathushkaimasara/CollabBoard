import React, { useState } from 'react';

const IconWalk = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v.01M7 21l3-4M16 21l-2-4M10 9l-3 3M14 9l3 3M10 9h4l-2 4 2 4M10 13l-2 4"/></svg>
);
const IconBed = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/></svg>
);
const IconAlarm = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M5 3 2 6M19 3l3 3M22 17l-3-3M2 17l3-3"/></svg>
);
const IconShower = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v1M12 8v1M12 12v1M8 4v1M8 8v1M16 4v1M16 8v1M7 16h10M7 20h10"/></svg>
);
const IconFlask = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6M10 3v5l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3M10 12h4"/></svg>
);
const IconGrid = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
);
const IconUser = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const IconChevron = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
);

const GalleryScreen = () => (
  <div className="pb-32">
    <h1 className="text-4xl font-extrabold px-6 pt-12 pb-6 tracking-tight text-black">Gallery</h1>
    
    <div className="px-6 mb-8">
      <h2 className="text-xl font-bold mb-4">Featured</h2>
      <div className="bg-white rounded-[32px] p-6 flex justify-between items-center shadow-sm">
        <div className="flex-1">
          <p className="text-sm text-gray-400 font-medium mb-1">30 Days Experiment</p>
          <h3 className="text-2xl font-bold mb-2">Walk 10,000 steps</h3>
          <p className="text-gray-400 text-sm mb-6 max-w-[200px] leading-relaxed">Improve cardiovascular health and overall fitness.</p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-800 transition">
            Start Now
          </button>
        </div>
        <div className="w-28 h-28 rounded-full border-[6px] border-gray-100 flex items-center justify-center">
          <IconWalk className="w-12 h-12 text-black" />
        </div>
      </div>
    </div>

    <div className="px-6">
      <div className="flex items-center gap-1 mb-4">
        <h2 className="text-xl font-bold">Top Experiments</h2>
        <IconChevron className="w-5 h-5 -rotate-90 text-gray-400" />
      </div>
      
      <div className="flex flex-col gap-3">
        {[
          { rank: 1, title: 'Walk 10,000 steps', dur: '30 Days', Icon: IconWalk },
          { rank: 2, title: 'No phone before bed', dur: '30 Days', Icon: IconBed },
          { rank: 3, title: 'Wake up early', dur: '21 Days', Icon: IconAlarm },
        ].map((item) => (
          <div key={item.rank} className="flex items-center gap-4">
            <span className="text-gray-400 font-bold w-4 text-center">{item.rank}</span>
            <div className="flex-1 bg-white rounded-[24px] p-4 flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                <item.Icon className="w-5 h-5 text-black" />
              </div>
              <div>
                <h4 className="font-bold text-[15px]">{item.title}</h4>
                <p className="text-gray-400 text-[13px] font-medium">{item.dur}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ExperimentsScreen = () => (
  <div className="pb-32">
    <div className="px-6 pt-12 pb-4 flex justify-between items-center">
      <button className="bg-white px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2 shadow-sm">
        All <IconChevron className="w-4 h-4 text-gray-500" />
      </button>
      <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-lg">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
      </button>
    </div>
    
    <h1 className="text-4xl font-extrabold px-6 pb-6 tracking-tight text-black">Experiments</h1>
    
    <div className="px-6 flex flex-col gap-3">
      {[
        { title: 'Walk 10,000 steps', desc: 'Day 29 • Daily', Icon: IconWalk },
        { title: 'Wake up early', desc: 'Day 10 • Daily', Icon: IconAlarm },
        { title: 'Take cold showers', desc: 'Day 7 • Daily', Icon: IconShower },
        { title: 'No phone before bed', desc: 'Day 1 • Daily', Icon: IconBed },
      ].map((item, i) => (
        <div key={i} className="bg-white rounded-[28px] p-5 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center shrink-0">
            <item.Icon className="w-6 h-6 text-black" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-[17px] mb-0.5">{item.title}</h4>
            <p className="text-gray-400 text-[13px] font-medium">{item.desc}</p>
          </div>
          <button className="p-2 text-gray-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>
          </button>
        </div>
      ))}
    </div>
  </div>
);

const HistoryScreen = () => (
  <div className="pb-32">
    <div className="px-6 pt-12 pb-4 flex justify-between items-center">
      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
        <IconChevron className="w-5 h-5 text-black rotate-90" />
      </button>
      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-black font-bold tracking-widest pb-2">
        ...
      </button>
    </div>
    
    <h1 className="text-4xl font-extrabold px-6 pb-6 tracking-tight text-black">History</h1>
    <h2 className="text-xl font-bold px-6 mb-4">August 2026</h2>
    
    <div className="px-6 flex flex-col gap-3">
      {[
        { title: 'Wake up early', desc: 'Day 10', time: '7:14 AM', Icon: IconAlarm },
        { title: 'Walk 10,000 steps', desc: 'Day 28', time: 'Yesterday', Icon: IconWalk },
        { title: 'Take cold showers', desc: 'Day 6', time: 'Yesterday', Icon: IconShower },
        { title: 'Wake up early', desc: 'Day 9', time: 'Yesterday', Icon: IconAlarm },
      ].map((item, i) => (
        <div key={i} className="bg-white rounded-[28px] p-5 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
            <item.Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-[17px] mb-0.5">{item.title}</h4>
            <p className="text-gray-400 text-[13px] font-medium">{item.desc}</p>
          </div>
          <span className="text-gray-400 text-[13px] font-medium">{item.time}</span>
        </div>
      ))}
    </div>
  </div>
);
--
export default function AppUI() {
  const [activeTab, setActiveTab] = useState('gallery');

  return (
    <div className="max-w-[400px] mx-auto min-h-screen relative bg-[#F2F2F7] font-sans selection:bg-black selection:text-white border-x border-gray-200">
      
      {/* View Router */}
      {activeTab === 'experiments' && <ExperimentsScreen />}
      {activeTab === 'gallery' && <GalleryScreen />}
      {activeTab === 'history' && <HistoryScreen />}

      {/* Floating Bottom Nav */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[360px] bg-white/80 backdrop-blur-xl border border-white/20 p-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex justify-between items-center z-50">
        {[
          { id: 'experiments', label: 'Experiments', Icon: IconFlask },
          { id: 'gallery', label: 'Gallery', Icon: IconGrid },
          { id: 'history', label: 'Profile', Icon: IconUser },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex flex-col items-center justify-center py-3 rounded-full transition-all duration-300 ${
                isActive ? 'bg-[#F2F2F7] text-black' : 'text-gray-400 hover:text-black'
              }`}
            >
              <tab.Icon className={`w-6 h-6 mb-1 ${isActive ? 'stroke-[2.5px]' : 'stroke-[2px]'}`} />
              <span className={`text-[11px] ${isActive ? 'font-bold' : 'font-medium'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}