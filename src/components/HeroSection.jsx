import { Rocket, Users } from 'lucide-react';

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] ">
      <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-400 p-[10px] shadow-2xl shadow-fuchsia-300/40">
        <div className="h-full w-full rounded-[32px] bg-white overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-2 text-[10px] text-slate-500">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="w-3 h-2 bg-slate-300 rounded" />
              <span className="w-3 h-2 bg-slate-400 rounded" />
              <span className="w-4 h-2 bg-slate-600 rounded" />
            </div>
          </div>

          {/* Header */}
          <div className="px-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500">Welcome back</p>
                <h3 className="font-semibold">BuddyBudget</h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500" />
              </div>
            </div>
          </div>

          {/* Balance Card */}
          <div className="px-4 mt-3">
            <div className="rounded-2xl p-4 bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 text-white shadow-lg">
              <p className="text-xs/4 opacity-90">Shared Wallet</p>
              <div className="flex items-end justify-between mt-1">
                <h2 className="text-2xl font-bold">$2,486.20</h2>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">+$142 this week</span>
              </div>
              <div className="mt-3 flex gap-2">
                <span className="text-[10px] bg-white/20 px-2 py-1 rounded-full">Room 12B</span>
                <span className="text-[10px] bg-white/20 px-2 py-1 rounded-full">Groceries</span>
                <span className="text-[10px] bg-white/20 px-2 py-1 rounded-full">Utilities</span>
              </div>
            </div>
          </div>

          {/* Activity List */}
          <div className="px-4 mt-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold">Recent Activity</h4>
              <button className="text-[11px] text-indigo-600">View all</button>
            </div>
            <div className="space-y-2">
              {[{title:'Groceries', amt:'-$42.18', color:'bg-emerald-500'}, {title:'Internet', amt:'-$30.00', color:'bg-blue-500'}, {title:'Venmo – Alex', amt:'+ $20.00', color:'bg-orange-500'}].map((r, i) => (
                <div key={i} className="flex items-center justify-between rounded-xl border border-slate-100 px-3 py-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${r.color} bg-gradient-to-br from-white/10 to-black/10`} />
                    <div>
                      <p className="text-sm font-medium">{r.title}</p>
                      <p className="text-[11px] text-slate-500">Split 3 ways</p>
                    </div>
                  </div>
                  <div className={`text-sm font-semibold ${r.amt.startsWith('-') ? 'text-rose-500' : 'text-emerald-600'}`}>{r.amt}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Goal Card */}
          <div className="px-4 mt-4">
            <div className="rounded-2xl border border-slate-100 p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">Goal: New Couch</p>
                  <p className="text-sm font-semibold">$420 / $800</p>
                </div>
                <span className="text-[11px] bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">52%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-slate-100">
                <div className="h-2 w-[52%] rounded-full bg-gradient-to-r from-teal-400 to-emerald-500" />
              </div>
            </div>
          </div>

          {/* Tab Bar */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="h-16 bg-white/80 backdrop-blur border-t border-slate-100 flex items-center justify-around">
              {['Home','Goals','Split','Profile'].map((t,i)=>(
                <div key={i} className="text-[11px] text-slate-500">
                  <div className={`mx-auto mb-1 h-5 w-5 rounded ${i===0 ? 'bg-gradient-to-br from-fuchsia-500 to-cyan-400' : 'bg-slate-300'}`} />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-10 -left-10 h-32 w-32 rounded-full bg-fuchsia-400/30 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-6 -right-10 h-32 w-32 rounded-full bg-cyan-400/30 blur-2xl" />
    </div>
  );
}

export default function HeroSection() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-gradient-to-br from-fuchsia-300 to-pink-300 blur-3xl" />
        <div className="absolute top-10 right-0 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-300 to-teal-300 blur-3xl" />
      </div>
      <nav className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 grid place-items-center text-white shadow-lg">
            <Users size={18} />
          </div>
          <span className="font-extrabold text-xl tracking-tight">BuddyBudget</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a className="text-slate-600 hover:text-slate-900" href="#features">Features</a>
          <a className="text-slate-600 hover:text-slate-900" href="#screens">Screenshots</a>
          <a className="text-slate-600 hover:text-slate-900" href="#download">Download</a>
          <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 shadow-md hover:shadow-lg">
            <Rocket size={16} /> Get Started
          </button>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 pt-6 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur px-3 py-1 text-xs text-slate-700 ring-1 ring-slate-200 mb-4">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Built for roomies, couples, and besties
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight">
            Split expenses. Crush goals. Grow together.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            BuddyBudget makes it effortless to track shared costs, settle up without stress, and set fun savings goals as a team.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#download" className="rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white px-5 py-3 font-medium shadow-lg hover:shadow-xl">Download the app</a>
            <a href="#screens" className="rounded-full bg-white/70 backdrop-blur px-5 py-3 font-medium text-slate-900 ring-1 ring-slate-200 hover:ring-slate-300">See how it works</a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
            <div className="flex -space-x-2">
              <span className="h-7 w-7 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 ring-2 ring-white" />
              <span className="h-7 w-7 rounded-full bg-gradient-to-br from-indigo-400 to-fuchsia-500 ring-2 ring-white" />
              <span className="h-7 w-7 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 ring-2 ring-white" />
            </div>
            <p><span className="font-semibold">10k+</span> groups budgeting together</p>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <PhoneMockup />
        </div>
      </section>
    </header>
  );
}
