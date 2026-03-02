import React, { useState, useEffect } from 'react';

export default function SessionScreen({ onEndSession }: { onEndSession: () => void }) {
  const [timeLeft, setTimeLeft] = useState(105); // 1:45
  const [reps, setReps] = useState(10);
  const [rpe, setRpe] = useState(8);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progress = (timeLeft / 105) * 100;

  return (
    <div className="fixed inset-0 z-50 bg-background-dark flex flex-col">
      <header className="px-4 py-4 flex items-center justify-between border-b border-surface-dark">
        <button onClick={onEndSession} className="text-slate-300 hover:text-white">
          <span className="material-symbols-outlined">close</span>
        </button>
        <h2 className="font-bold text-white">Strength Session</h2>
        <button onClick={onEndSession} className="text-xs font-bold text-white bg-white/10 px-3 py-1.5 rounded-full">
          END
        </button>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col items-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
          Current Set
        </span>
        <h1 className="text-3xl font-bold text-white mb-1">Pull-ups</h1>
        <p className="text-slate-400 mb-8">Set 2 of 4 • <span className="text-primary font-medium">Target: 8-12 reps</span></p>

        {/* Timer Circle */}
        <div className="relative w-64 h-64 mb-8 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full transform -rotate-90">
            <circle cx="128" cy="128" r="120" fill="none" stroke="var(--color-surface-dark)" strokeWidth="8" />
            <circle 
              cx="128" cy="128" r="120" fill="none" stroke="var(--color-primary)" strokeWidth="8" 
              strokeDasharray="753.98" strokeDashoffset={753.98 - (753.98 * progress) / 100}
              className="transition-all duration-1000 ease-linear"
              strokeLinecap="round"
            />
          </svg>
          <div className="text-center">
            <div className="text-6xl font-bold text-white tracking-tighter mb-1">{formatTime(timeLeft)}</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Resting</div>
          </div>
        </div>

        <div className="flex gap-4 w-full max-w-xs mb-10">
          <button onClick={() => setTimeLeft(prev => Math.max(0, prev - 10))} className="flex-1 py-3 rounded-xl bg-surface-dark text-white font-bold hover:bg-slate-800 transition-colors">
            -10s
          </button>
          <button onClick={() => setTimeLeft(0)} className="flex-[2] py-3 rounded-xl bg-primary text-background-dark font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors">
            <span className="material-symbols-outlined text-[20px]">skip_next</span>
            Skip Rest
          </button>
          <button onClick={() => setTimeLeft(prev => prev + 10)} className="flex-1 py-3 rounded-xl bg-surface-dark text-white font-bold hover:bg-slate-800 transition-colors">
            +10s
          </button>
        </div>

        <div className="w-full border-t border-surface-dark pt-6 flex flex-col gap-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Actual Reps</span>
              <span className="text-xs font-bold text-primary">Target Hit</span>
            </div>
            <div className="flex items-center justify-between bg-surface-dark rounded-xl p-2">
              <button onClick={() => setReps(r => Math.max(0, r - 1))} className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-white hover:bg-slate-700">
                <span className="material-symbols-outlined">remove</span>
              </button>
              <span className="text-3xl font-bold text-white">{reps}</span>
              <button onClick={() => setReps(r => r + 1)} className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-background-dark hover:bg-primary-dark">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">RPE (Exertion)</span>
            <div className="flex gap-2">
              {[6, 7, 8, 9, 10].map(val => (
                <button 
                  key={val}
                  onClick={() => setRpe(val)}
                  className={`flex-1 py-3 rounded-lg font-bold text-sm transition-colors ${
                    rpe === val 
                      ? 'bg-primary text-background-dark ring-2 ring-primary ring-offset-2 ring-offset-background-dark' 
                      : 'bg-surface-dark text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Assistance / Weight</span>
            <div className="bg-surface-dark rounded-xl p-4 flex justify-between items-center border border-slate-800">
              <span className="font-bold text-white">Red Band (Light)</span>
              <span className="material-symbols-outlined text-slate-400">expand_more</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface-dark p-4 flex items-center justify-between border-t border-slate-800">
        <div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-0.5">Next Up</span>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[16px]">fitness_center</span>
            <span className="font-bold text-white">Dead Hang</span>
            <span className="text-sm text-slate-400">30s</span>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-slate-700 transition-colors">
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
