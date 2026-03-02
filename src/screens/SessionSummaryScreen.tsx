import React from 'react';

export default function SessionSummaryScreen({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-background-dark flex flex-col">
      <div className="sticky top-0 z-50 flex items-center justify-between bg-background-dark p-4 border-b border-surface-dark">
        <button onClick={onClose} className="text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-surface-dark transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
        <h2 className="text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center">Session Summary</h2>
        <div className="flex w-10 items-center justify-end">
          <button onClick={onClose} className="text-primary text-base font-bold leading-normal tracking-wide shrink-0 hover:text-primary/80 transition-colors">Done</button>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto pb-32">
        <div className="flex flex-col items-center justify-center pt-8 pb-6 px-4">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary animate-pulse">
            <span className="material-symbols-outlined text-[32px]">check_circle</span>
          </div>
          <h1 className="text-slate-100 tracking-tight text-[32px] font-bold leading-tight text-center">Session Complete!</h1>
          <p className="text-slate-400 text-sm mt-2 font-medium">Great work hitting those targets.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 px-4 mb-6">
          <div className="flex flex-col gap-1 rounded-xl bg-surface-dark p-5 border border-primary/10 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-primary text-[20px]">timer</span>
              <p className="text-slate-400 text-sm font-medium">Duration</p>
            </div>
            <p className="text-slate-100 tracking-tight text-2xl font-bold">45m 30s</p>
          </div>
          <div className="flex flex-col gap-1 rounded-xl bg-surface-dark p-5 border border-primary/10 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-primary text-[20px]">fitness_center</span>
              <p className="text-slate-400 text-sm font-medium">Volume</p>
            </div>
            <p className="text-slate-100 tracking-tight text-2xl font-bold">12,500 lbs</p>
          </div>
        </div>

        <div className="px-4 mb-8">
          <div className="relative overflow-hidden rounded-xl bg-surface-dark border border-primary/20 shadow-lg">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary via-background-dark to-background-dark"></div>
            <div className="relative p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Coach Mode</span>
                </div>
                <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded">Target Hit</span>
              </div>
              <div>
                <h3 className="text-white text-xl font-bold leading-tight mb-2">Progression Target Hit!</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Your performance consistency has triggered a progression. Increasing resistance for the next session.
                </p>
              </div>
              <div className="flex items-center gap-4 bg-background-dark/50 rounded-lg p-3 border border-white/5">
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border-2 border-white/10">
                  <span className="material-symbols-outlined text-black text-[20px]">upgrade</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 uppercase font-bold">Next Session</span>
                  <span className="text-white font-bold">Blue Band Resistance</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4">
          <h3 className="text-slate-100 text-lg font-bold mb-4">Set Breakdown</h3>
          <div className="flex flex-col gap-3">
            <div className="bg-surface-dark rounded-xl p-4 border border-primary/5">
              <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3">
                  <div className="bg-primary/10 h-10 w-10 rounded-lg flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">directions_run</span>
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-bold text-base">Interval Run</h4>
                    <p className="text-slate-400 text-xs">Warmup • Zone 2</p>
                  </div>
                </div>
                <span className="text-primary text-sm font-bold bg-primary/10 px-2 py-0.5 rounded">Completed</span>
              </div>
              <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-3">
                <div className="text-center">
                  <p className="text-slate-500 text-[10px] uppercase font-bold">Distance</p>
                  <p className="text-slate-200 font-semibold text-sm">2.4 km</p>
                </div>
                <div className="text-center border-l border-white/5">
                  <p className="text-slate-500 text-[10px] uppercase font-bold">Pace</p>
                  <p className="text-slate-200 font-semibold text-sm">5:30 /km</p>
                </div>
                <div className="text-center border-l border-white/5">
                  <p className="text-slate-500 text-[10px] uppercase font-bold">HR Avg</p>
                  <p className="text-slate-200 font-semibold text-sm">142 bpm</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-dark rounded-xl p-4 border border-primary/5">
              <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3">
                  <div className="bg-primary/10 h-10 w-10 rounded-lg flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">accessibility_new</span>
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-bold text-base">Push-ups</h4>
                    <p className="text-slate-400 text-xs">Weighted Vest • 3 Sets</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs items-center bg-background-dark/50 p-2 rounded">
                  <span className="text-slate-400 font-bold w-8">Set 1</span>
                  <span className="text-slate-200">15 reps</span>
                  <span className="text-slate-400">@ 20lbs</span>
                  <span className="text-primary text-[10px] font-bold">RPE 7</span>
                </div>
                <div className="flex justify-between text-xs items-center bg-background-dark/50 p-2 rounded">
                  <span className="text-slate-400 font-bold w-8">Set 2</span>
                  <span className="text-slate-200">14 reps</span>
                  <span className="text-slate-400">@ 20lbs</span>
                  <span className="text-primary text-[10px] font-bold">RPE 8</span>
                </div>
                <div className="flex justify-between text-xs items-center bg-background-dark/50 p-2 rounded">
                  <span className="text-slate-400 font-bold w-8">Set 3</span>
                  <span className="text-slate-200">12 reps</span>
                  <span className="text-slate-400">@ 20lbs</span>
                  <span className="text-primary text-[10px] font-bold">RPE 9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background-dark/95 backdrop-blur-md border-t border-primary/10">
        <div className="flex flex-col gap-3 w-full max-w-md mx-auto">
          <button onClick={onClose} className="flex items-center justify-center rounded-lg h-12 px-4 bg-primary text-background-dark font-bold text-base w-full hover:bg-primary/90 transition-all active:scale-[0.98]">
            Accept Adjustments
          </button>
          <button onClick={onClose} className="flex items-center justify-center rounded-lg h-12 px-4 bg-transparent border border-slate-700 text-slate-300 font-bold text-base w-full hover:bg-surface-dark transition-all active:scale-[0.98]">
            Keep Current Plan
          </button>
        </div>
      </div>
    </div>
  );
}
