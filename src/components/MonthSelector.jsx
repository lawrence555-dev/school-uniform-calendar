import React from 'react';
import { Calendar, List, Activity, Waves, Flame, Sun, Sparkles } from 'lucide-react';
import { translations } from '../translations/i18n';

export default function MonthSelector({
  selectedMonth,
  setSelectedMonth,
  viewMode,
  setViewMode,
  calendarSchedule,
  lang,
}) {
  const t = translations[lang] || translations.zh;

  const months = [
    { num: 10, label: t.october },
    { num: 11, label: t.november },
    { num: 12, label: t.december },
  ];

  // Calculate monthly statistics from dynamic calendarSchedule
  const scheduleList = calendarSchedule || [];
  const currentMonthItems = scheduleList.filter((d) => d.month === selectedMonth);
  const schoolDaysCount = currentMonthItems.filter((d) => d.cycleDay !== null).length;
  const swimmingDaysCount = currentMonthItems.filter((d) => d.uniformType === 'pe_swimming').length;
  const houseDaysCount = currentMonthItems.filter((d) => d.uniformType === 'house_shirt').length;
  const holidayDaysCount = currentMonthItems.filter((d) => d.uniformType === 'holiday').length;

  return (
    <div className="space-y-4">
      {/* Month Tabs & View Switcher Bar */}
      <div className="glass-card rounded-2xl p-2.5 sm:p-3 border border-slate-800 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Month Selector Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
          {months.map((m) => (
            <button
              key={m.num}
              onClick={() => setSelectedMonth(m.num)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap tap-effect ${
                selectedMonth === m.num
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* View Mode Switcher (Grid vs List) */}
        <div className="flex items-center bg-slate-900 border border-slate-800 p-1 rounded-xl self-start sm:self-auto shadow-xs">
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition tap-effect ${
              viewMode === 'grid'
                ? 'bg-slate-800 text-blue-400 font-bold shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.calendarView}</span>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition tap-effect ${
              viewMode === 'list'
                ? 'bg-slate-800 text-blue-400 font-bold shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span>{t.listView}</span>
          </button>
        </div>
      </div>

      {/* Monthly Quick Stats Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div className="bg-slate-900/80 border border-slate-800/80 p-3 rounded-2xl flex items-center gap-2.5 shadow-xs">
          <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-mono text-slate-400 font-bold">{t.schoolDays}</div>
            <div className="text-base font-bold font-mono text-white">
              {schoolDaysCount} <span className="text-[11px] font-normal text-slate-400">{t.daysCount}</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800/80 p-3 rounded-2xl flex items-center gap-2.5 shadow-xs">
          <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-300 flex items-center justify-center flex-shrink-0">
            <Waves className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-mono text-slate-400 font-bold">{t.swimmingDays}</div>
            <div className="text-base font-bold font-mono text-cyan-300">
              {swimmingDaysCount} <span className="text-[11px] font-normal text-slate-400">{t.daysCount}</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800/80 p-3 rounded-2xl flex items-center gap-2.5 shadow-xs">
          <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
            <Flame className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-mono text-slate-400 font-bold">{t.houseDays}</div>
            <div className="text-base font-bold font-mono text-amber-400">
              {houseDaysCount} <span className="text-[11px] font-normal text-slate-400">{t.daysCount}</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800/80 p-3 rounded-2xl flex items-center gap-2.5 shadow-xs">
          <div className="w-8 h-8 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center flex-shrink-0">
            <Sun className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-mono text-slate-400 font-bold">{t.holidaysCount}</div>
            <div className="text-base font-bold font-mono text-rose-300">
              {holidayDaysCount} <span className="text-[11px] font-normal text-slate-400">{t.daysCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
