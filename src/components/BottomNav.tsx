import React from 'react';

interface BottomNavProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onStartSession: () => void;
}

export default function BottomNav({ currentTab, setCurrentTab, onStartSession }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background-dark/95 backdrop-blur-md border-t border-slate-800 pb-safe pt-2">
      <div className="flex justify-around items-end px-2 pb-4">
        <NavItem 
          icon="calendar_today" 
          label="Today" 
          isActive={currentTab === 'home'} 
          onClick={() => setCurrentTab('home')} 
        />
        <NavItem 
          icon="sports" 
          label="Program" 
          isActive={currentTab === 'program'} 
          onClick={() => setCurrentTab('program')} 
        />
        
        <div className="relative -top-6">
          <button 
            onClick={onStartSession}
            className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-background-dark hover:scale-105 active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[32px]">add</span>
          </button>
        </div>

        <NavItem 
          icon="bar_chart" 
          label="Stats" 
          isActive={currentTab === 'stats'} 
          onClick={() => setCurrentTab('stats')} 
        />
        <NavItem 
          icon="person" 
          label="Profile" 
          isActive={currentTab === 'profile'} 
          onClick={() => setCurrentTab('profile')} 
        />
      </div>
    </nav>
  );
}

function NavItem({ icon, label, isActive, onClick }: { icon: string, label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex flex-col items-center gap-1 w-16 group">
      <div className="relative p-1.5">
        <span className={`material-symbols-outlined text-[28px] transition-colors ${isActive ? 'text-primary' : 'text-slate-400 group-hover:text-slate-200'}`}>
          {icon}
        </span>
        {isActive && (
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"></span>
        )}
      </div>
      <span className={`text-[10px] font-medium tracking-wide ${isActive ? 'text-primary' : 'text-slate-400 group-hover:text-slate-200'}`}>
        {label}
      </span>
    </button>
  );
}
