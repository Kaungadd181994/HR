import { useState } from 'react';
import { 
  LayoutDashboard, 
  Wallet, 
  ReceiptText, 
  Users, 
  CheckCircle2, 
  Upload, 
  Settings, 
  BarChart3, 
  ClipboardList, 
  ShieldAlert, 
  DoorOpen, 
  Save, 
  ScrollText, 
  KeyRound, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  CalendarCheck,
  Heart,
  Brain
} from 'lucide-react';
import { Screen } from '@/types';

interface SidebarProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

interface MenuCategory {
  title: string;
  items: { id: Screen; label: string; icon: any }[];
}

export function Sidebar({ activeScreen, onNavigate }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  
  const categories: MenuCategory[] = [
    {
      title: 'Directory & Operations',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'employees', label: 'Employees', icon: Users },
        { id: 'onboarding', label: 'Onboarding', icon: CheckCircle2 },
        { id: 'offboarding', label: 'Offboarding', icon: DoorOpen },
      ]
    },
    {
      title: 'Cash Flows & Finance',
      items: [
        { id: 'disbursement', label: 'Disbursement', icon: Wallet },
        { id: 'repayments', label: 'Repayments', icon: ReceiptText },
        { id: 'charity', label: 'Charity & CSR', icon: Heart },
        { id: 'freeze', label: 'Freeze', icon: ShieldAlert },
        { id: 'export', label: 'Export', icon: Save },
      ]
    },
    {
      title: 'Rules & Configurations',
      items: [
        { id: 'upload', label: 'Upload & Diff', icon: Upload },
        { id: 'policy', label: 'Policy Engine', icon: Settings },
        { id: 'config', label: 'Cycle Config', icon: CalendarCheck },
        { id: 'limits', label: 'Smart Cap', icon: BarChart3 },
        { id: 'templates', label: 'Templates', icon: ClipboardList },
      ]
    },
    {
      title: 'Governance & Tech',
      items: [
        { id: 'rbac', label: 'RBAC Security', icon: KeyRound },
        { id: 'logs', label: 'Approval Logs', icon: ScrollText },
        { id: 'focus', label: 'HR Focus Sanctuary', icon: Brain },
        { id: 'guide', label: 'System Guide', icon: BookOpen },
      ]
    }
  ];

  return (
    <aside className={`${collapsed ? 'w-20' : 'w-64'} bg-slate-950 text-white flex flex-col h-full overflow-hidden transition-all duration-300`}>
      <div className="p-6 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-slate-900">E</div>
          {!collapsed && <span className="font-bold text-lg tracking-tight">EWA <span className="text-slate-400 font-normal underline decoration-emerald-500/50">Portal</span></span>}
        </div>
        <button onClick={() => setCollapsed(!collapsed)} className="p-1 rounded hover:bg-slate-800 transition text-slate-400 hover:text-white">
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>
      <nav className="flex-1 p-4 flex flex-col gap-6 overflow-y-auto">
        {categories.map((category, catIdx) => (
          <div key={catIdx} className="space-y-1">
            {!collapsed ? (
              <h4 className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                {category.title}
              </h4>
            ) : (
              <div className="border-t border-slate-800/60 my-2 mx-2"></div>
            )}
            {category.items.map((item) => {
              const Icon = item.icon;
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  title={item.label}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-medium transition ${
                    isActive 
                      ? 'bg-slate-800 text-emerald-400 border-l-2 border-emerald-400' 
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                  }`}
                >
                  <Icon size={16} className={`${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                  {!collapsed && <span>{item.label}</span>}
                </button>
              );
            })}
          </div>
        ))}
      </nav>
      {!collapsed && (
        <div className="p-6 border-t border-slate-800 text-xs">
          <div className="font-semibold text-white">Htet Ko</div>
          <div className="text-slate-500">HR Checker</div>
        </div>
      )}
    </aside>
  );
}

