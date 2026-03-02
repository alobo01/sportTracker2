import React from 'react';

export default function HomeScreen({ onStartSession }: { onStartSession: () => void }) {
  return (
    <div className="flex-1 overflow-y-auto pb-24">
      <header className="px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-surface-dark overflow-hidden border border-slate-700 relative">
            <img alt="User Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop"/>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-background-dark"></div>
          </div>
          <div>
            <p className="text-sm text-slate-400 font-medium">Good Morning,</p>
            <h1 className="text-lg font-bold text-white leading-tight">Alex Runner</h1>
          </div>
        </div>
        <button className="p-2 rounded-full hover:bg-surface-dark text-slate-300 transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
        </button>
      </header>

      <div className="px-4 mb-6 flex items-end justify-between">
        <div>
          <p className="text-xs text-slate-400 font-bold tracking-wider uppercase mb-1">Today</p>
          <h2 className="text-3xl font-bold text-white">Oct 24</h2>
        </div>
        <div className="flex gap-2">
          <DateBadge day="Wed" date="24" isActive />
          <DateBadge day="Thu" date="25" />
          <DateBadge day="Fri" date="26" />
        </div>
      </div>

      <section className="px-4 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-primary">calendar_today</span>
          <h3 className="text-lg font-bold text-white">Scheduled Sessions</h3>
        </div>

        <div className="flex flex-col gap-4">
          {/* Session Card 1 */}
          <div className="relative rounded-2xl overflow-hidden bg-surface-dark border border-slate-800 group">
            <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800&auto=format&fit=crop" alt="Run" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
            </div>
            <div className="relative p-5">
              <div className="flex justify-between items-start mb-12">
                <div className="flex items-center gap-1.5 bg-background-dark/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                  <span className="material-symbols-outlined text-[14px] text-primary">wb_twilight</span>
                  <span className="text-xs font-bold text-white">06:00 AM</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                  <span className="material-symbols-outlined text-white text-[18px]">directions_run</span>
                </div>
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-1">Endurance Run</h4>
              <p className="text-sm text-slate-300 mb-4">10km • Zone 2 • Steady State</p>
              
              <button onClick={onStartSession} className="w-full py-3 rounded-xl bg-primary text-background-dark font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors">
                <span className="material-symbols-outlined text-[20px]">play_arrow</span>
                Start Coach
              </button>
            </div>
          </div>

          {/* Session Card 2 */}
          <div className="relative rounded-2xl overflow-hidden bg-surface-dark border border-slate-800 group">
            <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=800&auto=format&fit=crop" alt="Strength" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
            </div>
            <div className="relative p-5">
              <div className="flex justify-between items-start mb-12">
                <div className="flex items-center gap-1.5 bg-background-dark/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                  <span className="material-symbols-outlined text-[14px] text-primary">dark_mode</span>
                  <span className="text-xs font-bold text-white">06:00 PM</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                  <span className="material-symbols-outlined text-white text-[18px]">fitness_center</span>
                </div>
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-1">Calisthenics Strength</h4>
              <p className="text-sm text-slate-300 mb-4">Pull Focus • Weighted Vest</p>
              
              <button onClick={onStartSession} className="w-full py-3 rounded-xl bg-primary text-background-dark font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors">
                <span className="material-symbols-outlined text-[20px]">play_arrow</span>
                Start Coach
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">show_chart</span>
            <h3 className="text-lg font-bold text-white">Quick Check-in</h3>
          </div>
          <button className="text-xs font-bold text-slate-400 bg-surface-dark px-3 py-1.5 rounded-md border border-slate-800">Daily Log</button>
        </div>

        <div className="bg-surface-dark border border-slate-800 rounded-2xl p-5 flex flex-col gap-6">
          <SliderRow icon="dark_mode" label="Sleep Quality" value="7/10" percentage={70} />
          <SliderRow icon="accessibility_new" label="Soreness" value="3/10" percentage={30} />
          <SliderRow icon="psychology" label="Stress Level" value="5/10" percentage={50} />
        </div>
      </section>

      <section className="px-4 mb-8">
        <div className="bg-surface-dark border border-primary/20 rounded-2xl p-5 flex gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary">lightbulb</span>
          </div>
          <div>
            <h4 className="text-primary font-bold mb-1">Smart Suggestion</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Great job on the last session! Based on your rep max, it's time to progress your Pull-ups to the <span className="text-white font-bold underline decoration-primary decoration-2 underline-offset-2">Red Band</span> assistance level today.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function DateBadge({ day, date, isActive = false }: { day: string, date: string, isActive?: boolean }) {
  return (
    <div className={`flex flex-col items-center justify-center w-12 h-14 rounded-xl border ${isActive ? 'bg-surface-dark border-primary text-primary' : 'bg-transparent border-slate-800 text-slate-500'}`}>
      <span className="text-[10px] font-bold uppercase">{day}</span>
      <span className={`text-lg font-bold ${isActive ? 'text-white' : ''}`}>{date}</span>
    </div>
  );
}

function SliderRow({ icon, label, value, percentage }: { icon: string, label: string, value: string, percentage: number }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="material-symbols-outlined text-[18px]">{icon}</span>
          <span className="text-sm font-medium">{label}</span>
        </div>
        <span className="text-sm font-bold text-white">{value}</span>
      </div>
      <div className="h-1.5 w-full bg-background-dark rounded-full relative">
        <div className="absolute top-0 left-0 h-full bg-primary rounded-full" style={{ width: `${percentage}%` }}></div>
        <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full" style={{ left: `calc(${percentage}% - 8px)` }}></div>
      </div>
    </div>
  );
}
