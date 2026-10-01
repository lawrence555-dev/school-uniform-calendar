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
  Luggage
} from 'lucide-react';
import { translations } from '../translations/i18n';
import { uniformMeta } from '../data/calendarData';

export default function ScheduleListView({
  calendarSchedule,
  selectedMonth,
  selectedDateStr,
  setSelectedDateStr,
  todayDateStr,
  filterType,
  lang
}) {
  const t = translations[lang] || translations.zh;
  const currentTodayStr = todayDateStr || '2026-10-01';

  const scheduleList = calendarSchedule || [];
  const monthItems = scheduleList.filter((d) => d.month === selectedMonth);

  const getUniformIcon = (type) => {
    switch (type) {
      case 'house_shirt':
        return <Flame className="w-5 h-5 text-amber-400" />;
      case 'pe':
      case 'pe_swimming':
        return <Activity className="w-5 h-5 text-emerald-400" />;
      case 'holiday':
      case 'weekend':
        return <Sun className="w-5 h-5 text-rose-400" />;
      case 'uniform':
      case 'uniform_swimming':
      default:
        return <Shirt className="w-5 h-5 text-blue-400" />;
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
    if (filterType === 'house_shirt') return item.uniformType === 'house_shirt';
    if (filterType === 'uniform') return item.uniformType === 'uniform' || item.uniformType === 'uniform_swimming';
    if (filterType === 'pe') return item.uniformType === 'pe' || item.uniformType === 'pe_swimming';
    if (filterType === 'swimming') return item.hasSwimming || item.uniformType === 'pe_swimming' || item.uniformType === 'uniform_swimming';
    if (filterType === 'holiday') return item.uniformType === 'holiday' || item.uniformType === 'weekend' || item.isHoliday || item.isWeekend;
    if (filterType === 'event') return item.event !== null;
    return true;
  };

  const filteredItems = monthItems.filter(isMatchedFilter);

  return (
    <div className="space-y-3">
      {filteredItems.map((item) => {
        const isSelected = item.dateStr === selectedDateStr;
        const isToday = item.dateStr === currentTodayStr;
        const meta = uniformMeta[item.uniformType] || uniformMeta.uniform;
        const isSwimDay = item.hasSwimming || item.uniformType === 'pe_swimming' || item.uniformType === 'uniform_swimming';

        return (
          <div
            key={item.dateStr}
            onClick={() => setSelectedDateStr(item.dateStr)}
            className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer shadow-lg tap-effect ${
              isSelected
                ? 'bg-slate-900 border-2 border-blue-500 shadow-blue-500/20'
                : 'glass-card hover:border-slate-700 bg-slate-950/70 border-slate-800'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              {/* Left Column: Date & Day Cycle */}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl border flex flex-col items-center justify-center flex-shrink-0 shadow-xs ${
                  item.isWeekend || item.uniformType === 'weekend'
                    ? 'bg-rose-950/20 border-rose-500/20 text-rose-300'
                    : 'bg-slate-900 border-slate-800'
                }`}>
                  <span className={`text-[10px] font-mono font-bold uppercase ${
                    item.isWeekend || item.uniformType === 'weekend' ? 'text-rose-400/80' : 'text-slate-400'
                  }`}>
                    {t.weekdaysShort[item.weekdayIndex]}
                  </span>
                  <span className={`text-base font-black font-mono ${isToday ? 'text-blue-400' : 'text-white'}`}>
                    {item.day < 10 ? `0${item.day}` : item.day}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 font-medium">
                      {item.dateStr}
                    </span>
                    {isToday && (
                      <span className="px-2 py-0.2 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        TODAY
                      </span>
                    )}
                    {item.cycleDay ? (
                      <span className={`px-2 py-0.2 rounded text-[10px] font-mono font-bold border ${
                        item.cycleDay === 7
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                          : 'bg-slate-800 text-slate-300 border-slate-700'
                      }`}>
                        DAY {item.cycleDay}
                      </span>
                    ) : (item.uniformType === 'holiday' || item.uniformType === 'weekend' || item.isHoliday || item.isWeekend) ? (
                      <span className="px-2 py-0.2 rounded text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                        {lang === 'zh' ? '放假' : lang === 'th' ? 'หยุด' : 'OFF'}
                      </span>
                    ) : null}
                    {isSwimDay && (
                      <span className="px-2 py-0.2 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                        <Waves className="w-2.5 h-2.5" />
                        <span>SWIM</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
                      {getUniformIcon(item.uniformType)}
                      <span>{getUniformTitle(item.uniformType)}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Uniform Tag & Event */}
              <div className="flex flex-wrap items-center sm:justify-end gap-2">
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
              </div>
            </div>

            {/* Special Event Banner */}
            {item.event && (
              <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-amber-300 bg-slate-950/60 p-2.5 rounded-xl border border-amber-500/20">
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
