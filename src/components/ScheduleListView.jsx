import React from 'react';
import { 
  Shirt, 
  Waves, 
  Activity, 
  Flame, 
  Sun, 
  Calendar, 
  PartyPopper, 
  CheckCircle2, 
  Sparkles, 
  Lock,
  Luggage,
  Users
} from 'lucide-react';
import { translations } from '../translations/i18n';
import { uniformMeta, childColorThemes } from '../data/calendarData';

export default function ScheduleListView({
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

  const isMultiChildView = selectedChildId === 'all' && childrenProfiles.length > 1;

  const getUniformIcon = (type, size = "w-4 h-4") => {
    switch (type) {
      case 'house_shirt':
        return <Flame className={`${size} text-amber-400`} />;
      case 'pe':
      case 'pe_swimming':
        return <Activity className={`${size} text-emerald-400`} />;
      case 'holiday':
      case 'weekend':
        return <Sun className={`${size} text-rose-400`} />;
      case 'uniform':
      case 'uniform_swimming':
      default:
        return <Shirt className={`${size} text-blue-400`} />;
    }
  };

  const getUniformTitle = (type) => {
    switch (type) {
      case 'house_shirt':
        return t.houseShirt;
      case 'pe':
        return t.pe;
      case 'pe_swimming':
        return t.peSwimming;
      case 'uniform_swimming':
        return t.uniformSwimming;
      case 'holiday':
        return t.holiday;
      case 'weekend':
        return t.weekend;
      case 'uniform':
      default:
        return t.uniform;
    }
  };

  const isMatchedFilter = (item) => {
    if (filterType === 'all') return true;
    if (filterType === 'event') return item.event !== null;
    if (filterType === 'holiday') return item.uniformType === 'holiday' || item.uniformType === 'weekend' || item.isHoliday || item.isWeekend;

    if (isMultiChildView) {
      return childrenProfiles.some(child => {
        const sched = childrenSchedules[child.id] || [];
        const childItem = sched.find(d => d.dateStr === item.dateStr) || item;
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

  const filteredItems = monthItems.filter(isMatchedFilter);

  return (
    <div className="space-y-3">
      {filteredItems.map((item) => {
        const isSelected = item.dateStr === selectedDateStr;
        const isToday = item.dateStr === currentTodayStr;

        // Compute per-child status
        const childrenDayStatus = childrenProfiles.map(child => {
          const sched = childrenSchedules[child.id] || [];
          const childItem = sched.find(d => d.dateStr === item.dateStr) || item;
          const isSwim = childItem.hasSwimming || childItem.uniformType === 'pe_swimming' || childItem.uniformType === 'uniform_swimming';
          const theme = childColorThemes[child.color] || childColorThemes.blue;
          const meta = uniformMeta[childItem.uniformType] || uniformMeta.uniform;
          return {
            child,
            item: childItem,
            isSwim,
            theme,
            meta
          };
        });

        const isOffDay = item.isHoliday || item.isWeekend || item.uniformType === 'holiday' || item.uniformType === 'weekend';
        const meta = uniformMeta[item.uniformType] || uniformMeta.uniform;
        const isSwimDay = item.hasSwimming || item.uniformType === 'pe_swimming' || item.uniformType === 'uniform_swimming';

        return (
          <div
            key={item.dateStr}
            onClick={() => setSelectedDateStr(item.dateStr)}
            className={`p-3.5 sm:p-5 rounded-2xl border transition-all cursor-pointer shadow-lg tap-effect ${
              isSelected
                ? 'bg-slate-900 border-2 border-blue-500 shadow-blue-500/20'
                : 'glass-card hover:border-slate-700 bg-slate-950/70 border-slate-800'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              {/* Left Column: Date & Day Cycle */}
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl border flex flex-col items-center justify-center flex-shrink-0 shadow-xs ${
                  isOffDay
                    ? 'bg-rose-950/20 border-rose-500/20 text-rose-300'
                    : 'bg-slate-900 border-slate-800'
                }`}>
                  <span className={`text-[9px] sm:text-[10px] font-mono font-bold uppercase ${
                    isOffDay ? 'text-rose-400/80' : 'text-slate-400'
                  }`}>
                    {t.weekdaysShort[item.weekdayIndex]}
                  </span>
                  <span className={`text-sm sm:text-base font-black font-mono ${isToday ? 'text-blue-400' : 'text-white'}`}>
                    {item.day < 10 ? `0${item.day}` : item.day}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <span className="text-xs font-mono text-slate-400 font-medium">
                      {item.dateStr}
                    </span>
                    {isToday && (
                      <span className="px-1.5 sm:px-2 py-0.2 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        TODAY
                      </span>
                    )}
                    {item.cycleDay ? (
                      <span className={`px-1.5 sm:px-2 py-0.2 rounded text-[10px] font-mono font-bold border ${
                        item.cycleDay === 7
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                          : 'bg-slate-800 text-slate-300 border-slate-700'
                      }`}>
                        DAY {item.cycleDay}
                      </span>
                    ) : isOffDay ? (
                      <span className="px-1.5 sm:px-2 py-0.2 rounded text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                        {lang === 'zh' ? '放假' : lang === 'th' ? 'หยุด' : 'OFF'}
                      </span>
                    ) : null}
                  </div>

                  {!isMultiChildView && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
                        {getUniformIcon(item.uniformType, "w-4 h-4 sm:w-5 sm:h-5")}
                        <span>{getUniformTitle(item.uniformType)}</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Uniform Tags (Single Child vs Multi-Child) */}
              <div className="flex flex-wrap items-center sm:justify-end gap-1.5 sm:gap-2">
                {isMultiChildView ? (
                  /* Multi-Child View Badges */
                  childrenDayStatus.map(({ child, item: childItem, isSwim, theme, meta: childMeta }) => (
                    <div
                      key={child.id}
                      className={`px-2 sm:px-2.5 py-1 rounded-xl text-xs font-bold border flex items-center gap-1.5 shadow-xs ${theme.bgLight} ${theme.border}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                      <span className="text-slate-200">{child.name}:</span>
                      <span className="text-white flex items-center gap-1">
                        {getUniformIcon(childItem.uniformType, "w-3.5 h-3.5")}
                        <span>{getUniformTitle(childItem.uniformType)}</span>
                      </span>
                      {isSwim && (
                        <span className="px-1 py-0.2 rounded text-[9px] bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 flex items-center gap-0.5">
                          <Waves className="w-2.5 h-2.5" />
                          <span>泳</span>
                        </span>
                      )}
                    </div>
                  ))
                ) : (
                  /* Single Child View Badges */
                  <>
                    <span className={`px-2.5 py-1 rounded-xl text-xs font-semibold border flex items-center gap-1.5 ${meta.color}`}>
                      {getUniformIcon(item.uniformType)}
                      <span>{getUniformTitle(item.uniformType)}</span>
                    </span>
                    {isSwimDay && (
                      <span className="px-2 py-1 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                        <Waves className="w-3 h-3" />
                        <span>{t.bringSwimGearBadge}</span>
                      </span>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Special Event Banner */}
            {item.event && (
              <div className="mt-2.5 pt-2.5 border-t border-slate-800/80 flex items-center gap-2 text-xs text-amber-300 bg-slate-950/60 p-2 sm:p-2.5 rounded-xl border border-amber-500/20">
                <PartyPopper className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span className="font-medium text-slate-300">
                  {item.event[lang] || item.event.en}
                </span>
              </div>
            )}
          </div>
        );
      })}

      {filteredItems.length === 0 && (
        <div className="p-8 text-center glass-card rounded-2xl border border-slate-800 text-slate-400 text-sm">
          No matching records found for this filter.
        </div>
      )}
    </div>
  );
}
