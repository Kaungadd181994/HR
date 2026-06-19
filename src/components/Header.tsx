
export function Header({ screenName }: { screenName: string }) {
  return (
    <header className="h-20 bg-white border-b border-slate-100 flex items-center px-8 justify-between flex-shrink-0">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{screenName}</h2>
        <p className="text-slate-500 text-sm">Corporate HR Dashboard</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-100">
          HR Checker
        </span>
        <div className="text-xl cursor-pointer p-2 hover:bg-slate-100 rounded-lg transition-colors">🔔</div>
      </div>
    </header>
  );
}
