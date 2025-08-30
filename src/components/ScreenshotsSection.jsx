function MiniPhone({ children }) {
  return (
    <div className="relative w-[220px] h-[440px] mx-auto">
      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-400 p-[8px] shadow-xl">
        <div className="h-full w-full rounded-[22px] bg-white overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

function ScreenHome() {
  return (
    <div className="p-3">
      <div className="rounded-2xl p-3 bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 text-white">
        <p className="text-[10px] opacity-90">Shared Wallet</p>
        <p className="text-xl font-bold">$2,486.20</p>
        <div className="mt-2 h-2 rounded-full bg-white/20">
          <div className="h-2 w-1/2 bg-white/70 rounded-full" />
        </div>
      </div>
      <div className="mt-3 space-y-2">
        {[1,2,3].map(i => (
          <div key={i} className="flex items-center justify-between rounded-xl border border-slate-100 px-3 py-2">
            <div>
              <p className="text-sm font-medium">Expense {i}</p>
              <p className="text-[11px] text-slate-500">Split 3 ways</p>
            </div>
            <span className={`text-sm font-semibold ${i===3 ? 'text-emerald-600' : 'text-rose-500'}`}>{i===3? '+$20' : '-$30'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenGoals() {
  return (
    <div className="p-3">
      <h4 className="text-sm font-semibold">Goals</h4>
      <div className="mt-2 space-y-3">
        {[
          {name:'New Couch', pct:52, color:'from-teal-400 to-emerald-500'},
          {name:'Weekend Trip', pct:28, color:'from-fuchsia-500 to-pink-500'},
          {name:'Emergency Fund', pct:66, color:'from-indigo-500 to-cyan-500'}
        ].map((g,i)=> (
          <div key={i} className="rounded-2xl border border-slate-100 p-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{g.name}</p>
              <span className="text-[11px] bg-slate-100 text-slate-700 px-2 py-1 rounded-full">{g.pct}%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-slate-100">
              <div className={`h-2 rounded-full bg-gradient-to-r ${g.color}`} style={{width: `${g.pct}%`}} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenSplit() {
  return (
    <div className="p-3">
      <h4 className="text-sm font-semibold">Split Bill</h4>
      <div className="mt-2 rounded-xl bg-slate-50 p-3">
        <div className="grid grid-cols-3 gap-2">
          {['Alex','Sam','Mia'].map((n,i)=> (
            <div key={i} className="rounded-lg bg-white p-2 text-center ring-1 ring-slate-200">
              <div className="mx-auto h-8 w-8 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400" />
              <p className="mt-1 text-[11px] font-medium">{n}</p>
              <p className="text-[11px] text-slate-500">${(20 + i*5).toFixed(0)}</p>
            </div>
          ))}
        </div>
        <button className="mt-3 w-full rounded-lg bg-slate-900 text-white py-2 text-sm">Confirm Split</button>
      </div>
    </div>
  );
}

export default function ScreenshotsSection() {
  return (
    <section id="screens" className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight">A peek inside the app</h2>
          <p className="mt-3 text-slate-600">Real, friendly screens that make shared money simple. Colorful, clear, and fast.</p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="relative">
            <MiniPhone>
              <ScreenHome />
            </MiniPhone>
            <p className="mt-3 text-center text-sm text-slate-600">Home overview and activity</p>
            <div className="pointer-events-none absolute -z-10 -top-6 -left-6 h-24 w-24 rounded-full bg-pink-300/40 blur-2xl" />
          </div>
          <div className="relative">
            <MiniPhone>
              <ScreenGoals />
            </MiniPhone>
            <p className="mt-3 text-center text-sm text-slate-600">Shared savings goals</p>
            <div className="pointer-events-none absolute -z-10 top-10 right-10 h-24 w-24 rounded-full bg-teal-300/40 blur-2xl" />
          </div>
          <div className="relative">
            <MiniPhone>
              <ScreenSplit />
            </MiniPhone>
            <p className="mt-3 text-center text-sm text-slate-600">Fast, flexible bill splitting</p>
            <div className="pointer-events-none absolute -z-10 bottom-0 left-6 h-24 w-24 rounded-full bg-violet-300/40 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
