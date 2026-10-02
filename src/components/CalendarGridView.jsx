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
import { uniformMeta, childColorThemes } from '../data/calendarData';

export default function CalendarGridView({
  calendarSchedule = [],
  childrenProfiles = [],
  childrenSchedules = {},
  selectedChildId = 'all',
  selectedMonth,
  selectedDateStr,
  setSelectedDateStr,
  todayDateStr,
  filterType,
  lang
}) {
  const t = translations[lang] || translations.zh;
  const currentTodayStr = todayDateStr || '2026-10-02';

  const baseSchedule = calendarSchedule.length > 0 
    ? calendarSchedule 
    : Object.values(childrenSchedules)[0] || [];

  const monthItems = baseSchedule.filter((d) => d.month === selectedMonth);
  if (monthItems.length === 0) return null;

  // First day weekday index (0 = Sun, 1 = Mon, ..., 6 = Sat)
  const firstDayWeekday = monthItems[0].weekdayIndex;
  const paddingCellsCount = firstDayWeekday;

  const isMultiChildView = selectedChildId === 'all' && childrenProfiles.length > 1;

  const getBaseAttireInfo = (type) => {
    switch (type) {
      case 'house_shirt':
        return { 
          label: t.shortHouse || '學院', 
          bg: 'bg-amber-500/25 text-amber-300 border-amber-500/40 shadow-xs' 
        };
      case 'pe':
      case 'pe_swimming':
        return { 
          label: t.shortPE || '體育', 
          bg: 'bg-emerald-500/25 text-emerald-300 border-emerald-500/40 shadow-xs' 
        };
      case 'holiday':
      case 'weekend':
        return { 
          label: t.shortHoliday || '放假', 
          bg: 'bg-rose-500/20 text-rose-300 border-rose-500/30 shadow-xs' 
        };
      case 'uniform':
      case 'uniform_swimming':
      default:
        return { 
          label: t.shortUniform || '校服', 
          bg: 'bg-blue-500/25 text-blue-300 border-blue-500/40 shadow-xs' 
        };
    }
  };

  const isMatchedFilter = (item, childrenDayStatus) => {
    if (filterType === 'all') return true;
    if (filterType === 'event') return item.event !== null;
    if (filterType === 'holiday') return item.uniformType === 'holiday' || item.uniformType === 'weekend' || item.isHoliday || item.isWeekend;

    // Check if any child matches the filter on this day
    if (isMultiChildView && childrenDayStatus) {
      return childrenDayStatus.some(({ item: childItem }) => {
        if (filterType === 'house_shirt') return childItem.uniformType === 'house_shirt';
        if (filterType === 'uniform') return childItem.uniformType === 'uniform' || childItem.uniformType === 'uniform_swimming';
        if (filterType === 'pe') return childItem.uniformType === 'pe' || childItem.uniformType === 'pe_swimming';
        if (filterType === 'swimming') return childItem.hasSwimming || childItem.uniformType === 'pe_swimming' || childItem.uniformType === 'uniform_swimming';
        return true;
      });
    }

    if (filterType === 'house_shirt') return item.uniformType === 'house_shirt';
    if (filterType === 'uniform') return item.uniformType === 'uniform' || item.uniformType === 'uniform_swimming';
    if (filterType === 'pe') return item.uniformType === 'pe' || item.uniformType === 'pe_swimming';
    if (filterType === 'swimming') return item.hasSwimming || item.uniformType === 'pe_swimming' || item.uniformType === 'uniform_swimming';
    return true;
  };

  return (
    <div className="glass-card rounded-3xl p-2.5 sm:p-5 border border-slate-800 shadow-2xl space-y-2.5 sm:space-y-3">
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
            className="min-h-[86px] sm:min-h-[110px] rounded-2xl bg-slate-950/30 border border-slate-900/40 opacity-30 pointer-events-none"
          />
        ))}

        {/* Day Cells */}
        {monthItems.map((item) => {
          const isSelected = item.dateStr === selectedDateStr;
          const isToday = item.dateStr === currentTodayStr;

          // Compute status for all children on this day
          const childrenDayStatus = childrenProfiles.map(child => {
            const sched = childrenSchedules[child.id] || [];
            const childItem = sched.find(d => d.dateStr === item.dateStr) || item;
            const isSwim = childItem.hasSwimming || childItem.uniformType === 'pe_swimming' || childItem.uniformType === 'uniform_swimming';
            const theme = childColorThemes[child.color] || childColorThemes.blue;
            const attire = getBaseAttireInfo(childItem.uniformType);
            return {
              child,
              item: childItem,
              isSwim,
              theme,
              attire
            };
          });

          const matchesFilter = isMatchedFilter(item, childrenDayStatus);

          // Check if all children have identical attire on this day
          const isOffDay = item.isHoliday || item.isWeekend || item.uniformType === 'holiday' || item.uniformType === 'weekend';
          const firstAttireType = childrenDayStatus[0]?.item?.uniformType;
          const firstSwim = childrenDayStatus[0]?.isSwim;
          const allSame = isOffDay || childrenDayStatus.every(c => c.item.uniformType === firstAttireType && c.isSwim === firstSwim);

          return (
            <button
              key={item.dateStr}
              type="button"
              onClick={() => setSelectedDateStr(item.dateStr)}
              className={`relative min-h-[86px] sm:min-h-[110px] p-1.5 sm:p-2 rounded-2xl text-left transition flex flex-col justify-between border tap-effect ${
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
                      ? 'w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-black shadow-sm'
                      : isSelected
                      ? 'text-white font-black'
                      : isOffDay
                      ? 'text-slate-400'
                      : 'text-slate-300'
                  }`}
                >
                  {item.day}
                </span>

                {item.cycleDay ? (
                  <span className={`text-[9px] sm:text-[10px] font-mono font-bold px-1 sm:px-1.5 py-0.2 rounded ${
                    item.cycleDay === 7 
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                      : 'bg-slate-900 text-slate-400 border border-slate-700'
                  }`}>
                    D{item.cycleDay}
                  </span>
                ) : isOffDay ? (
                  <span className="text-[8px] sm:text-[9px] font-bold px-1 py-0.2 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    OFF
                  </span>
                ) : null}
              </div>

              {/* Attire Content Area */}
              <div className="w-full flex flex-col gap-1 my-auto">
                {isMultiChildView && !allSame ? (
                  /* Multi-Child with Different Attires: Show per-child badges */
                  <div className="w-full flex flex-col gap-0.5 sm:gap-1">
                    {childrenDayStatus.map(({ child, item: childItem, isSwim, theme, attire }) => (
                      <div
                        key={child.id}
                        className={`w-full py-0.5 px-1 rounded-md text-[9px] sm:text-[10px] font-bold truncate flex items-center justify-between border ${theme.bgLight} ${theme.border}`}
                      >
                        <div className="flex items-center gap-1 truncate">
                          <span className={`w-1.5 h-1.5 rounded-full ${theme.dot} flex-shrink-0`} />
                          <span className="truncate text-slate-200">{child.name.slice(0, 3)}:</span>
                          <span className="text-white font-bold">{attire.label}</span>
                        </div>
                        {isSwim && (
                          <Waves className="w-2.5 h-2.5 text-cyan-300 flex-shrink-0 ml-0.5" />
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Single Child or All Children Same Attire: 2-Box Display */
                  (() => {
                    const displayItem = isMultiChildView ? childrenDayStatus[0].item : item;
                    const baseAttire = getBaseAttireInfo(displayItem.uniformType);
                    const isSwimDay = displayItem.hasSwimming || displayItem.uniformType === 'pe_swimming' || displayItem.uniformType === 'uniform_swimming';

                    return (
                      <>
                        {/* Box 1: Primary Attire (校服 / 體育 / 學院 / 放假) */}
                        <div
                          className={`w-full py-0.5 px-0.5 sm:px-1 rounded-md text-[10px] sm:text-xs font-bold text-center truncate border ${baseAttire.bg}`}
                        >
                          {baseAttire.label}
                        </div>

                        {/* Box 2: Swimming Gear Badge (if swimming on that day) */}
                        {isSwimDay && (
                          <div
                            className="w-full py-0.5 px-0.5 sm:px-1 rounded-md text-[9px] sm:text-[10px] font-bold text-center border bg-cyan-500/25 text-cyan-200 border-cyan-400/40 flex items-center justify-center gap-0.5 shadow-xs"
                          >
                            <Waves className="w-2.5 h-2.5 text-cyan-300 flex-shrink-0" />
                            <span className="truncate">{t.shortSwim || '游泳'}</span>
                          </div>
                        )}
                      </>
                    );
                  })()
                )}
              </div>

              {/* Event Dot / Indicator */}
              {item.event ? (
                <div className="flex items-center gap-1 text-[8px] sm:text-[9px] text-amber-300 truncate w-full font-medium mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 animate-pulse" />
                  <span className="truncate hidden sm:inline">{item.event[lang] || item.event.en}</span>
                </div>
              ) : (
                <div className="h-1" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
