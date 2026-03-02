import React from 'react';

export default function StatsScreen() {
  return (
    <div className="flex-1 overflow-y-auto pb-24">
      <header className="sticky top-0 z-20 bg-background-dark/95 backdrop-blur-sm border-b border-surface-dark px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight text-white">Analytics</h1>
        <button className="p-2 rounded-full hover:bg-surface-dark text-slate-300 transition-colors">
          <span className="material-symbols-outlined">bolt</span>
        </button>
      </header>

      <div className="flex border-b border-surface-dark">
        <button className="flex-1 py-3 text-sm font-bold text-slate-400 border-b-2 border-transparent">Running</button>
        <button className="flex-1 py-3 text-sm font-bold text-primary border-b-2 border-primary">Strength</button>
        <button className="flex-1 py-3 text-sm font-bold text-slate-400 border-b-2 border-transparent">Load</button>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Strength Trends</h2>
          <button className="w-8 h-8 rounded-full bg-surface-dark flex items-center justify-center text-slate-300">
            <span className="material-symbols-outlined text-[18px]">tune</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-surface-dark rounded-xl p-4 border border-slate-800">
            <div className="flex justify-between items-start mb-2">
              <span className="material-symbols-outlined text-primary">fitness_center</span>
              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">trending_up</span> 12%
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium mb-1 uppercase tracking-wider">Max Pull-up</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-white">15</span>
              <span className="text-sm text-slate-400">Reps</span>
            </div>
          </div>
          <div className="bg-surface-dark rounded-xl p-4 border border-slate-800">
            <div className="flex justify-between items-start mb-2">
              <span className="material-symbols-outlined text-primary">layers</span>
              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">trending_up</span> 5%
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium mb-1 uppercase tracking-wider">Weekly Volume</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-white">120</span>
              <span className="text-sm text-slate-400">Sets</span>
            </div>
          </div>
        </div>

        <div className="bg-surface-dark rounded-xl p-5 border border-slate-800 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-bold text-white">Pull-up Progression</h3>
              <p className="text-xs text-slate-400">Last 3 months</p>
            </div>
            <button className="text-slate-400"><span className="material-symbols-outlined">more_horiz</span></button>
          </div>
          
          <div className="h-40 relative w-full flex items-end">
            {/* Simple SVG Chart placeholder */}
            <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <path d="M0,35 Q25,30 50,20 T100,5" fill="none" stroke="var(--color-primary)" strokeWidth="2" />
              <circle cx="0" cy="35" r="1.5" fill="var(--color-background-dark)" stroke="var(--color-primary)" strokeWidth="1" />
              <circle cx="50" cy="20" r="1.5" fill="var(--color-background-dark)" stroke="var(--color-primary)" strokeWidth="1" />
              <circle cx="100" cy="5" r="2" fill="var(--color-primary)" stroke="var(--color-background-dark)" strokeWidth="1" />
              <path d="M0,35 Q25,30 50,20 T100,5 L100,40 L0,40 Z" fill="url(#grad)" opacity="0.2" />
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-primary)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute bottom-0 left-0 w-full flex justify-between text-[10px] text-slate-500 translate-y-6">
              <span>Jan</span>
              <span>Mar</span>
              <span>May</span>
              <span>Jul</span>
            </div>
          </div>
          <div className="h-6"></div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Progression Tiers</h2>
          <button className="text-xs font-bold text-primary uppercase tracking-wider">View All</button>
        </div>

        <div className="flex flex-col gap-3 mb-8">
          <div className="bg-surface-dark rounded-xl p-4 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">accessibility_new</span>
              </div>
              <div>
                <h4 className="font-bold text-white">Dips</h4>
                <p className="text-xs text-slate-400">Level 4 • Thin Band</p>
              </div>
            </div>
            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">Ready to Test</span>
          </div>

          <div className="bg-surface-dark rounded-xl p-4 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface-light/5 flex items-center justify-center text-slate-300">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div>
                <h4 className="font-bold text-white">Pistol Squat</h4>
                <p className="text-xs text-slate-400">Level 6 • Counterbalance</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="w-16 h-1.5 bg-background-dark rounded-full overflow-hidden">
                <div className="h-full bg-primary w-3/4"></div>
              </div>
              <span className="text-[10px] text-slate-400">75% to next lvl</span>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-white mb-4">Load Flags</h2>
        <div className="bg-surface-dark border border-white/20 rounded-xl p-4 mb-4">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
              <span className="material-symbols-outlined text-[18px]">warning</span>
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Shoulder Fatigue Detected</h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                Your recent volume on pushing movements is 20% higher than your 4-week average. Consider a deload week or lighter intensity for upcoming dip sessions.
              </p>
              <button className="text-xs font-bold text-white border border-white/30 rounded-full px-3 py-1.5 hover:bg-white/10 transition-colors">
                Adjust Plan
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
