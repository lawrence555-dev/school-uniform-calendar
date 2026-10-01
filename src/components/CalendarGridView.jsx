import React from 'react';
import { 
  Shirt, 
  Waves, 
  Activity, 
  Flame, 
  Sun, 
  PartyPopper,
  Sparkles
} from 'lucide-react';
import { translations } from '../translations/i18n';
import { uniformMeta } from '../data/calendarData';

export default function CalendarGridView({
  calendarSchedule,
  selectedMonth,
  selectedDateStr,
  setSelectedDateStr,
  filterType,
  lang
}) {
  const t = translations[lang] || translations.zh;

  const scheduleList = calendarSchedule || [];
  const monthItems = scheduleList.filter((d) => d.month === selectedMonth);
  if (monthItems.length === 0) return null;

  // First day weekday index (0 = Sun, 1 = Mon, ..., 6 = Sat)
  const firstDayWeekday = monthItems[0].weekdayIndex;
  const paddingCellsCount = firstDayWeekday;

  const getUniformBadge = (type) => {
    switch (type) {
      case 'house_shirt':
        return { label: t.houseShirt, bg: 'bg-amber-500/20 text-amber-300 border-amber-500/30' };
      case 'pe':
        return { label: t.pe, bg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' };
      case 'pe_swimming':
        return { label: t.peSwimming, bg: 'bg-emerald-500/20 text-cyan-300 border-cyan-500/40 ring-1 ring-cyan-500/20' };
      case 'uniform_swimming':
        return { label: t.uniformSwimming, bg: 'bg-blue-500/20 text-cyan-300 border-cyan-500/40 ring-1 ring-cyan-500/20' };
      case 'holiday':
      case 'weekend':
        return { label: t.weekend, bg: 'bg-rose-500/15 text-rose-300 border-rose-500/30' };
      case 'uniform':
      default:
        return { label: t.uniform, bg: 'bg-blue-500/20 text-blue-300 border-blue-500/30' };
    }
  };

  const isMatchedFilter = (item) => {
    if (filterType === 'all') return true;
    if (filterType === 'house_shirt') return item.uniformType === 'house_shirt';
    if (filterType === 'uniform') return item.uniformType === 'uniform' || item.uniformType === 'uniform_swimming';
    if (filterType === 'pe') return item.uniformType === 'pe' || item.uniformType === 'pe_swimming';
    if (filterType === 'swimming') return item.hasSwimming || item.uniformType === 'pe_swimming' || item.uniformType === 'uniform_swimming';
    if (filterType === 'holiday') return item.uniformType === 'holiday' || item.uniformType === 'weekend' || item.isHoliday || item.isWeekend;
    if (filterType === 'event') return item.event !== null;
    return true;
  };

  return (
    <div className="glass-card rounded-3xl p-3 sm:p-5 border border-slate-800 shadow-2xl space-y-3">
      {/* Weekday Column Headers (Sun to Sat) */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center pb-2 border-b border-slate-800/80">
        {t.weekdaysShort.map((dayName, idx) => (
          <div
            key={idx}
            className={`text-xs font-mono font-bold uppercase py-1 ${
              idx === 0 || idx === 6 ? 'text-rose-400/80 font-bold' : 'text-slate-300'
            }`}
          >
            {dayName}
          </div>
        ))}
      </div>

      {/* Calendar Grid Cells */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2">
        {/* Padding cells before the 1st of month */}
        {Array.from({ length: paddingCellsCount }).map((_, padIdx) => (
          <div
            key={`pad-${padIdx}`}
            className="min-h-[72px] sm:min-h-[96px] rounded-2xl bg-slate-950/30 border border-slate-900/40 opacity-30 pointer-events-none"
          />
        ))}

        {/* Day Cells */}
        {monthItems.map((item) => {
          const isSelected = item.dateStr === selectedDateStr;
          const isToday = item.dateStr === '2026-10-01';
          const badge = getUniformBadge(item.uniformType);
          const meta = uniformMeta[item.uniformType] || uniformMeta.uniform;
          const matchesFilter = isMatchedFilter(item);

          return (
            <button
              key={item.dateStr}
              type="button"
              onClick={() => setSelectedDateStr(item.dateStr)}
              className={`relative min-h-[74px] sm:min-h-[100px] p-1.5 sm:p-2.5 rounded-2xl text-left transition flex flex-col justify-between border tap-effect ${
                !matchesFilter ? 'opacity-25 grayscale' : ''
              } ${
                isSelected
                  ? 'bg-slate-900 border-2 border-blue-500 shadow-lg shadow-blue-500/20 ring-2 ring-blue-500/20 z-10'
                  : 'bg-slate-950/70 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/60'
              }`}
            >
              {/* Cell Header: Day Number & Cycle Day Tag */}
              <div className="flex items-center justify-between w-full">
                <span
                  className={`text-xs sm:text-sm font-bold font-mono ${
                    isToday
                      ? 'w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-black'
                      : isSelected
                      ? 'text-white font-black'
                      : item.isWeekend || item.uniformType === 'weekend'
                      ? 'text-slate-400'
                      : 'text-slate-300'
                  }`}
                >
                  {item.day}
                </span>

                {item.cycleDay ? (
                  <span className={`text-[9px] sm:text-[10px] font-mono font-bold px-1.5 py-0.2 rounded ${
                    item.cycleDay === 7 
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                      : 'bg-slate-900 text-slate-400 border border-slate-700'
                  }`}>
                    D{item.cycleDay}
                  </span>
                ) : (item.uniformType === 'holiday' || item.uniformType === 'weekend' || item.isHoliday || item.isWeekend) ? (
                  <span className="text-[8px] sm:text-[9px] font-bold px-1 py-0.2 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    OFF
                  </span>
                ) : null}
              </div>

              {/* Uniform Indicator Pill */}
              <div className="w-full space-y-1 my-auto">
                <div
                  className={`w-full py-0.5 px-1 sm:px-1.5 rounded-md text-[9px] sm:text-[10px] font-bold text-center truncate border ${badge.bg}`}
                >
                  {item.uniformType === 'house_shirt' && 'House'}
                  {item.uniformType === 'uniform' && 'Uniform'}
                  {item.uniformType === 'uniform_swimming' && 'Uniform+Swim'}
                  {item.uniformType === 'pe' && 'PE'}
                  {item.uniformType === 'pe_swimming' && 'PE+Swim'}
                  {(item.uniformType === 'holiday' || item.uniformType === 'weekend') && (lang === 'zh' ? '放假' : lang === 'th' ? 'หยุด' : 'Holiday')}
                </div>
              </div>

              {/* Event Dot / Indicator */}
              {item.event ? (
                <div className="flex items-center gap-1 text-[8px] sm:text-[9px] text-amber-300 truncate w-full font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 animate-pulse" />
                  <span className="truncate hidden sm:inline">{item.event[lang] || item.event.en}</span>
                </div>
              ) : (
                <div className="h-2" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
