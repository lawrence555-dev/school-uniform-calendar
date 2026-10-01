import React from 'react';
import { Calendar, List, Waves, Flame, Sun, ChevronLeft, ChevronRight } from 'lucide-react';
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
    { num: 10, year: 2026, label: t.october, short: t.monthsShort?.[10] || '10月' },
    { num: 11, year: 2026, label: t.november, short: t.monthsShort?.[11] || '11月' },
    { num: 12, year: 2026, label: t.december, short: t.monthsShort?.[12] || '12月' },
    { num: 1, year: 2027, label: t.january, short: t.monthsShort?.[1] || '1月' },
    { num: 2, year: 2027, label: t.february, short: t.monthsShort?.[2] || '2月' },
    { num: 3, year: 2027, label: t.march, short: t.monthsShort?.[3] || '3月' },
    { num: 4, year: 2027, label: t.april, short: t.monthsShort?.[4] || '4月' },
    { num: 5, year: 2027, label: t.may, short: t.monthsShort?.[5] || '5月' },
    { num: 6, year: 2027, label: t.june, short: t.monthsShort?.[6] || '6月' },
  ];

  const currentMonthIdx = months.findIndex((m) => m.num === selectedMonth);
  const activeMonthObj = months[currentMonthIdx >= 0 ? currentMonthIdx : 0];

  const handlePrevMonth = () => {
    if (currentMonthIdx > 0) {
      setSelectedMonth(months[currentMonthIdx - 1].num);
    }
  };

  const handleNextMonth = () => {
    if (currentMonthIdx < months.length - 1) {
      setSelectedMonth(months[currentMonthIdx + 1].num);
    }
  };

  // Calculate monthly statistics from dynamic calendarSchedule
  const scheduleList = calendarSchedule || [];
  const currentMonthItems = scheduleList.filter((d) => d.month === selectedMonth);
  const schoolDaysCount = currentMonthItems.filter((d) => d.cycleDay !== null).length;
  const swimmingDaysCount = currentMonthItems.filter(
    (d) => d.hasSwimming || d.uniformType === 'pe_swimming' || d.uniformType === 'uniform_swimming'
  ).length;
  const houseDaysCount = currentMonthItems.filter((d) => d.uniformType === 'house_shirt').length;
  const holidayDaysCount = currentMonthItems.filter((d) => d.uniformType === 'holiday' || d.isHoliday).length;

  return (
    <div className="space-y-3">
      {/* Precision Header & Month Scroller Card */}
      <div className="glass-card rounded-2xl p-3 sm:p-4 border border-slate-800 shadow-xl space-y-3">
        {/* Top Control Bar: Active Month Title with Steppers (Left) + View Switcher (Right) */}
        <div className="flex items-center justify-between gap-2">
          {/* Active Month with Prev/Next Steppers */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handlePrevMonth}
              disabled={currentMonthIdx <= 0}
              className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 disabled:opacity-20 disabled:cursor-not-allowed border border-slate-800 flex items-center justify-center transition tap-effect flex-shrink-0"
              title={t.prevMonth}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="px-2.5 py-1 rounded-xl bg-slate-900/90 border border-slate-800 text-center shadow-xs">
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                {activeMonthObj.label}
              </span>
            </div>

            <button
              onClick={handleNextMonth}
              disabled={currentMonthIdx >= months.length - 1}
              className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 disabled:opacity-20 disabled:cursor-not-allowed border border-slate-800 flex items-center justify-center transition tap-effect flex-shrink-0"
              title={t.nextMonth}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* View Mode Switcher (Grid vs List) */}
          <div className="flex items-center bg-slate-900 border border-slate-800 p-1 rounded-xl shadow-xs flex-shrink-0">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition tap-effect ${
                viewMode === 'grid'
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.calendarView}</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition tap-effect ${
                viewMode === 'list'
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.listView}</span>
            </button>
          </div>
        </div>

        {/* Compact 9-Month Horizontal Pill Strip */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1 pb-0.5">
          {months.map((m) => {
            const isActive = selectedMonth === m.num;
            return (
              <button
                key={m.num}
                onClick={() => setSelectedMonth(m.num)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap tap-effect flex items-center gap-1 flex-shrink-0 border ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border-slate-800'
                }`}
              >
                <span>{m.short}</span>
                {m.num === 1 && (
                  <span className={`text-[9px] font-mono px-1 rounded ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    2027
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Monthly Quick Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <div className="bg-slate-900/80 border border-slate-800/80 p-2.5 sm:p-3 rounded-2xl flex items-center gap-2.5 shadow-xs">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-mono text-slate-400 font-bold">{t.schoolDays}</div>
            <div className="text-sm sm:text-base font-bold font-mono text-white">
              {schoolDaysCount} <span className="text-[10px] sm:text-[11px] font-normal text-slate-400">{t.daysCount}</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800/80 p-2.5 sm:p-3 rounded-2xl flex items-center gap-2.5 shadow-xs">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-cyan-500/10 text-cyan-300 flex items-center justify-center flex-shrink-0">
            <Waves className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-mono text-slate-400 font-bold">{t.swimmingDays}</div>
            <div className="text-sm sm:text-base font-bold font-mono text-cyan-300">
              {swimmingDaysCount} <span className="text-[10px] sm:text-[11px] font-normal text-slate-400">{t.daysCount}</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800/80 p-2.5 sm:p-3 rounded-2xl flex items-center gap-2.5 shadow-xs">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
            <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-mono text-slate-400 font-bold">{t.houseDays}</div>
            <div className="text-sm sm:text-base font-bold font-mono text-amber-400">
              {houseDaysCount} <span className="text-[10px] sm:text-[11px] font-normal text-slate-400">{t.daysCount}</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800/80 p-2.5 sm:p-3 rounded-2xl flex items-center gap-2.5 shadow-xs">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center flex-shrink-0">
            <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-mono text-slate-400 font-bold">{t.holidaysCount}</div>
            <div className="text-sm sm:text-base font-bold font-mono text-rose-300">
              {holidayDaysCount} <span className="text-[10px] sm:text-[11px] font-normal text-slate-400">{t.daysCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
