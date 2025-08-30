import { Users, Target, PieChart, Bell, Shield } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Instant bill splitting',
    desc: 'Add expenses once and split by people, percentages, or custom shares. No more awkward math.'
  },
  {
    icon: Target,
    title: 'Shared goals',
    desc: 'Create savings goals as a team—like rent buffer, weekend trips, or a new couch—and watch progress together.'
  },
  {
    icon: PieChart,
    title: 'Clear insights',
    desc: 'See who owes what at a glance and track categories over time with friendly charts.'
  },
  {
    icon: Bell,
    title: 'Smart reminders',
    desc: 'Gentle nudges for due dates and paybacks so no one forgets. Peace restored.'
  },
  {
    icon: Shield,
    title: 'Private and secure',
    desc: 'Your data is encrypted and protected. Export anytime and control what you share.'
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-pink-200/50 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full bg-cyan-200/50 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight">Why groups love BuddyBudget</h2>
          <p className="mt-3 text-slate-600">Designed to be friendly, colorful, and stress-free—so money talks feel easy.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="group rounded-2xl bg-white/70 backdrop-blur ring-1 ring-slate-200 hover:ring-slate-300 p-5 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 grid place-items-center text-white shadow">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-semibold">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
