import React from 'react';
import { 
  Filter, 
  Flame, 
  Shirt, 
  Activity, 
  Waves, 
  Sun, 
  PartyPopper 
} from 'lucide-react';
import { translations } from '../translations/i18n';

export default function FilterBar({ filterType, setFilterType, lang }) {
  const t = translations[lang] || translations.zh;

  const filters = [
    { id: 'all', label: t.filterAll, icon: Filter },
    { id: 'house_shirt', label: t.filterHouse, icon: Flame, color: 'text-amber-400' },
    { id: 'uniform', label: t.filterUniform, icon: Shirt, color: 'text-blue-400' },
    { id: 'pe', label: t.filterPE, icon: Activity, color: 'text-emerald-400' },
    { id: 'swimming', label: t.filterSwimming, icon: Waves, color: 'text-cyan-300' },
    { id: 'holiday', label: t.filterHolidays, icon: Sun, color: 'text-rose-400' },
    { id: 'event', label: t.filterEvents, icon: PartyPopper, color: 'text-amber-300' },
  ];

  return (
    <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
      {filters.map((f) => {
        const Icon = f.icon;
        const isActive = filterType === f.id;
        return (
          <button
            key={f.id}
            onClick={() => setFilterType(f.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition tap-effect ${
              isActive
                ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30'
                : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Icon className={`w-3.5 h-3.5 ${f.color || ''}`} />
            <span>{f.label}</span>
          </button>
        );
      })}
    </div>
  );
}
