import React from 'react';

export default function CalendarScreen() {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <header className="sticky top-0 z-20 bg-background-dark/95 backdrop-blur-sm border-b border-surface-dark px-4 py-3 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold tracking-tight text-white">August 2023</h1>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Week 32</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-surface-dark text-slate-300 transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </header>

      <section className="py-4 px-4 bg-background-dark overflow-x-auto scrollbar-hide border-b border-surface-dark">
        <div className="flex justify-between items-center gap-2 min-w-max">
          <div className="flex flex-col items-center justify-center w-12 h-16 rounded-xl bg-transparent text-slate-500">
            <span className="text-xs font-medium">Sun</span>
            <span className="text-lg font-semibold">11</span>
          </div>
          <div className="flex flex-col items-center justify-center w-12 h-16 rounded-xl bg-primary text-background-dark shadow-lg shadow-primary/20 scale-110 transform transition-transform">
            <span className="text-xs font-bold">Mon</span>
            <span className="text-lg font-bold">12</span>
            <div className="w-1 h-1 bg-background-dark rounded-full mt-1"></div>
          </div>
          <div className="flex flex-col items-center justify-center w-12 h-16 rounded-xl bg-surface-dark text-slate-300 border border-slate-700">
            <span className="text-xs font-medium">Tue</span>
            <span className="text-lg font-semibold">13</span>
            <div className="w-1 h-1 bg-primary rounded-full mt-1"></div>
          </div>
          <div className="flex flex-col items-center justify-center w-12 h-16 rounded-xl bg-transparent text-slate-400">
            <span className="text-xs font-medium">Wed</span>
            <span className="text-lg font-semibold">14</span>
            <div className="w-1 h-1 bg-slate-600 rounded-full mt-1"></div>
          </div>
          <div className="flex flex-col items-center justify-center w-12 h-16 rounded-xl bg-transparent text-slate-400">
            <span className="text-xs font-medium">Thu</span>
            <span className="text-lg font-semibold">15</span>
          </div>
          <div className="flex flex-col items-center justify-center w-12 h-16 rounded-xl bg-transparent text-slate-400">
            <span className="text-xs font-medium">Fri</span>
            <span className="text-lg font-semibold">16</span>
          </div>
          <div className="flex flex-col items-center justify-center w-12 h-16 rounded-xl bg-transparent text-slate-400">
            <span className="text-xs font-medium">Sat</span>
            <span className="text-lg font-semibold">17</span>
          </div>
        </div>
      </section>

      <main className="flex-1 overflow-y-auto px-4 py-6 pb-24 relative">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-surface-dark z-0"></div>
        
        <div className="relative z-10 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 flex justify-center">
              <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20"></div>
            </div>
            <h2 className="text-lg font-bold text-white">Today</h2>
          </div>
          
          <div className="pl-8 mb-4">
            <div className="bg-surface-dark rounded-xl p-4 border border-slate-800 shadow-sm relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-400 uppercase tracking-wide">AM</span>
                  <h3 className="font-bold text-slate-100">Morning Run</h3>
                </div>
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
              </div>
              <div className="flex gap-4 my-3">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400">Distance</span>
                  <span className="text-sm font-semibold text-slate-200">5.2 km</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400">Time</span>
                  <span className="text-sm font-semibold text-slate-200">45m 12s</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400">Pace</span>
                  <span className="text-sm font-semibold text-slate-200">5'30"/km</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-700/50">
                <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-white ring-2 ring-surface-dark">
                  <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
                </div>
                <p className="text-xs text-slate-400">Great job! You beat your avg pace.</p>
              </div>
            </div>
          </div>

          <div className="pl-8">
            <div className="bg-surface-dark rounded-xl p-4 border border-slate-800 shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-600"></div>
              <div className="flex justify-between items-start mb-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-400 uppercase tracking-wide">PM</span>
                  <h3 className="font-bold text-slate-100">Upper Body Strength</h3>
                </div>
                <button className="text-primary text-xs font-semibold px-3 py-1 bg-primary/10 rounded-full hover:bg-primary/20 transition">Preview</button>
              </div>
              <p className="text-sm text-slate-400 mb-3">Template: STR-PULL-B</p>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center px-2 py-1 rounded bg-slate-800/50 text-xs font-medium text-slate-300">
                  <span className="material-symbols-outlined text-[14px] mr-1">fitness_center</span> Calisthenics
                </span>
                <span className="inline-flex items-center justify-center px-2 py-1 rounded bg-slate-800/50 text-xs font-medium text-slate-300">
                  <span className="material-symbols-outlined text-[14px] mr-1">timer</span> 45 min
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mb-8 opacity-80">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 flex justify-center">
              <div className="w-2 h-2 rounded-full bg-slate-600"></div>
            </div>
            <h2 className="text-base font-semibold text-slate-400">Tuesday, Aug 13</h2>
          </div>
          
          <div className="pl-8 mb-4">
            <div className="bg-surface-dark rounded-xl p-4 border border-slate-800 shadow-sm relative overflow-hidden border-l-4 border-l-primary/40">
              <div className="flex justify-between items-start mb-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-400 uppercase tracking-wide">AM</span>
                  <h3 className="font-bold text-slate-100">Interval Run</h3>
                </div>
                <button className="text-primary text-xs font-semibold px-3 py-1 bg-primary/10 rounded-full hover:bg-primary/20 transition">Preview</button>
              </div>
              <p className="text-sm text-slate-400 mb-3">Template: SPEED-400x8</p>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center px-2 py-1 rounded bg-slate-800/50 text-xs font-medium text-slate-300">
                  <span className="material-symbols-outlined text-[14px] mr-1">directions_run</span> Running
                </span>
                <span className="text-xs text-slate-400">Target: High Intensity</span>
              </div>
            </div>
          </div>

          <div className="pl-8">
            <div className="bg-transparent border border-dashed border-slate-700 rounded-xl p-3 flex items-center justify-center gap-2 text-slate-500">
              <span className="material-symbols-outlined text-lg">hotel</span>
              <span className="text-sm font-medium">Rest & Recovery (PM)</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
