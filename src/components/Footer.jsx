export default function Footer() {
  return (
    <footer id="download" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute -left-10 -bottom-20 h-72 w-72 rounded-full bg-gradient-to-br from-fuchsia-300 to-pink-300 blur-3xl" />
        <div className="absolute right-0 -top-10 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-300 to-teal-300 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl bg-white/70 backdrop-blur ring-1 ring-slate-200 p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight">Ready to buddy up your budget?</h3>
            <p className="mt-2 text-slate-600">Get the app and start splitting in seconds. Invite your housemates or partner and set your first goal today.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="rounded-xl bg-slate-900 text-white px-4 py-3 text-sm font-medium shadow-md hover:shadow-lg" href="#">Download on App Store</a>
              <a className="rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white px-4 py-3 text-sm font-medium shadow-md hover:shadow-lg" href="#">Get it on Google Play</a>
            </div>
          </div>
          <div>
            <form className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
              <label className="block text-sm font-medium">Get launch updates</label>
              <p className="text-sm text-slate-600 mb-3">No spam—just useful tips and fresh features.</p>
              <div className="flex gap-2">
                <input type="email" required placeholder="you@example.com" className="flex-1 rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-400" />
                <button type="submit" className="rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white px-4 py-3 text-sm font-medium shadow-md hover:shadow-lg">Subscribe</button>
              </div>
              <p className="mt-2 text-[11px] text-slate-500">By subscribing you agree to our friendly updates policy.</p>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-600">
          <p>© {new Date().getFullYear()} BuddyBudget. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-3 sm:mt-0">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
