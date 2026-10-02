import React from 'react';
import { 
  Shirt, 
  Sparkles, 
  Waves, 
  Activity, 
  Calendar, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  Sun, 
  Flame, 
  PartyPopper, 
  Settings2, 
  ChevronRight, 
  ChevronLeft,
  Lock,
  User,
  Users
} from 'lucide-react';
import { translations } from '../translations/i18n';
import { uniformMeta, childColorThemes } from '../data/calendarData';

export default function TodayHeroBanner({ 
  selectedDateStr, 
  setSelectedDateStr, 
  calendarSchedule = [],
  childrenProfiles = [],
  childrenSchedules = {},
  selectedChildId = 'all',
  onOpenClassConfig,
  todayDateStr,
  lang 
}) {
  const t = translations[lang] || translations.zh;
  const currentTodayStr = todayDateStr || '2026-10-02';

  // Base schedule for date index references
  const baseSchedule = calendarSchedule.length > 0 
    ? calendarSchedule 
    : Object.values(childrenSchedules)[0] || [];

  const currentItem = baseSchedule.find((d) => d.dateStr === selectedDateStr) || baseSchedule[0];
  const currentIndex = baseSchedule.findIndex((d) => d.dateStr === selectedDateStr);
  const nextItem = currentIndex >= 0 && currentIndex < baseSchedule.length - 1 
    ? baseSchedule[currentIndex + 1] 
    : null;

  const isToday = currentItem ? currentItem.dateStr === currentTodayStr : false;

  const handlePrevDay = () => {
    if (currentIndex > 0) {
      setSelectedDateStr(baseSchedule[currentIndex - 1].dateStr);
    }
  };

  const handleNextDay = () => {
    if (currentIndex < baseSchedule.length - 1) {
      setSelectedDateStr(baseSchedule[currentIndex + 1].dateStr);
    }
  };

  const resetToToday = () => {
    setSelectedDateStr(currentTodayStr);
  };

  const getUniformIcon = (type, size = "w-7 h-7 sm:w-8 sm:h-8") => {
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

  const getUniformDesc = (type) => {
    switch (type) {
      case 'house_shirt':
        return t.houseShirtDesc;
      case 'pe':
        return t.peDesc;
      case 'pe_swimming':
        return t.peSwimmingDesc;
      case 'uniform_swimming':
        return t.uniformSwimmingDesc;
      case 'holiday':
      case 'weekend':
        return t.holidayDesc;
      case 'uniform':
      default:
        return t.uniformDesc;
    }
  };

  // Determine if we are in multi-child display mode (when selectedChildId === 'all' and there are 2+ children)
  const isMultiChildMode = selectedChildId === 'all' && childrenProfiles.length > 1;

  // Single focused child object (if 1 child or viewing specific child)
  const focusedChild = selectedChildId !== 'all' 
    ? (childrenProfiles.find(c => c.id === selectedChildId) || childrenProfiles[0])
    : childrenProfiles[0];
  
  const focusedChildTheme = focusedChild ? (childColorThemes[focusedChild.color] || childColorThemes.blue) : childColorThemes.blue;

  // Compute status for all children on selected date
  const childrenTodayStatus = childrenProfiles.map(child => {
    const sched = childrenSchedules[child.id] || [];
    const item = sched.find(d => d.dateStr === selectedDateStr) || currentItem;
    const nextChildItem = currentIndex >= 0 && currentIndex < sched.length - 1 ? sched[currentIndex + 1] : null;
    const isSwim = item?.hasSwimming || item?.uniformType === 'pe_swimming' || item?.uniformType === 'uniform_swimming';
    const isNextSwim = nextChildItem && (nextChildItem.hasSwimming || nextChildItem.uniformType === 'pe_swimming' || nextChildItem.uniformType === 'uniform_swimming');
    const theme = childColorThemes[child.color] || childColorThemes.blue;
    return {
      child,
      item,
      nextChildItem,
      isSwim,
      isNextSwim,
      theme
    };
  });

  // Check if all children have the exact same uniform on this date
  const firstChildType = childrenTodayStatus[0]?.item?.uniformType;
  const allChildrenSameAttire = childrenTodayStatus.every(c => c.item?.uniformType === firstChildType);

  if (!currentItem) return null;

  return (
    <div className="space-y-4">
      {/* Top Active Setup & Children Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs shadow-xs">
        <div className="flex items-center gap-2 truncate flex-1 mr-2">
          {childrenProfiles.length > 1 ? (
            <Users className="w-4 h-4 text-blue-400 flex-shrink-0" />
          ) : (
            <Settings2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
          )}

          <span className="text-slate-400 font-medium flex-shrink-0">
            {childrenProfiles.length > 1 ? `${childrenProfiles.length} ${t.childrenCount}` : t.activeClassSetting}:
          </span>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {childrenProfiles.map((child, idx) => {
              const theme = childColorThemes[child.color] || childColorThemes.blue;
              const isSelected = selectedChildId === child.id || selectedChildId === 'all';
              return (
                <span
                  key={child.id || idx}
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold border transition ${
                    isSelected ? `${theme.bgLight} ${theme.text} ${theme.border}` : 'bg-slate-950 text-slate-500 border-slate-800'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                  <span className="truncate max-w-[80px]">{child.name}</span>
                  <span className="text-[9px] font-mono opacity-80">
                    ({child.presetId === 'even_pe' ? (lang === 'zh' ? '偶數' : 'Even') : (lang === 'zh' ? '奇數' : 'Odd')})
                  </span>
                </span>
              );
            })}
          </div>
        </div>

        <button
          onClick={onOpenClassConfig}
          className="text-blue-400 hover:text-blue-300 font-bold hover:underline flex-shrink-0 flex items-center gap-1 tap-effect"
        >
          <span>{t.changeSetting}</span>
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      {/* Date Stepper Header Bar */}
      <div className="flex items-center justify-between px-3.5 py-2 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-xs">
        <button
          onClick={handlePrevDay}
          disabled={currentIndex <= 0}
          className="px-2.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 disabled:opacity-25 disabled:cursor-not-allowed border border-slate-800 flex items-center gap-1 transition tap-effect"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{lang === 'zh' ? '前一日' : lang === 'th' ? 'วันก่อนหน้า' : 'Prev Day'}</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono font-bold bg-slate-950 text-white border border-slate-800 shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            <span>{currentItem.dateStr}</span>
            <span className="text-slate-400">({t.weekdaysFull[currentItem.weekdayIndex]})</span>
          </span>

          {isToday ? (
            <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 animate-pulse">
              TODAY
            </span>
          ) : (
            <button
              onClick={resetToToday}
              className="px-2.5 py-1 rounded-lg text-[10px] font-bold text-blue-400 hover:text-blue-300 bg-blue-500/10 border border-blue-500/20 transition tap-effect"
            >
              {lang === 'zh' ? '回今天' : lang === 'th' ? 'วันนี้' : 'Today'}
            </button>
          )}
        </div>

        <button
          onClick={handleNextDay}
          disabled={currentIndex >= baseSchedule.length - 1}
          className="px-2.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 disabled:opacity-25 disabled:cursor-not-allowed border border-slate-800 flex items-center gap-1 transition tap-effect"
        >
          <span className="hidden sm:inline">{lang === 'zh' ? '後一日' : lang === 'th' ? 'วันถัดไป' : 'Next Day'}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Special Event Banner if applicable (for this date) */}
      {currentItem.event && (
        <div className="flex items-center gap-2.5 text-xs text-amber-300 bg-amber-950/30 p-3 rounded-2xl border border-amber-500/30 shadow-md">
          <PartyPopper className="w-4 h-4 text-amber-400 flex-shrink-0 animate-bounce" />
          <div className="flex-1 font-semibold">
            <span>{t.specialEvent}: </span>
            <span className="text-white font-bold">{currentItem.event[lang] || currentItem.event.en}</span>
          </div>
        </div>
      )}

      {/* Hero Notification Section */}
      {isMultiChildMode ? (
        /* Multi-Child Mode: Display Side-by-Side or Stacked Hero Cards */
        <div className="space-y-3">
          {/* If all children wear the same attire or it's a holiday, show a consolidated badge */}
          {allChildrenSameAttire && (
            <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-semibold text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{t.sameAttireAll}</span>
              </span>
              <span className="text-[11px] text-slate-400">
                ({childrenProfiles.map(c => c.name).join('、')})
              </span>
            </div>
          )}

          <div className={`grid gap-3.5 ${
            childrenTodayStatus.length === 2 
              ? 'grid-cols-1 sm:grid-cols-2' 
              : childrenTodayStatus.length >= 3 
              ? 'grid-cols-1 sm:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {childrenTodayStatus.map(({ child, item, nextChildItem, isSwim, isNextSwim, theme }) => {
              const meta = uniformMeta[item.uniformType] || uniformMeta.uniform;
              return (
                <div 
                  key={child.id}
                  className={`relative overflow-hidden rounded-3xl p-4 sm:p-5 border bg-gradient-to-br shadow-xl transition-all flex flex-col justify-between gap-4 ${meta.heroBg}`}
                >
                  {/* Child Name Header Pill */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${theme.dot} ring-2 ring-white/30`} />
                      <span className="font-bold text-sm sm:text-base text-white truncate max-w-[130px]">
                        {child.name}
                      </span>
                    </div>

                    {item.cycleDay ? (
                      <span className={`px-2 py-0.5 rounded-lg text-xs font-mono font-bold border ${
                        item.cycleDay === 7 
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                          : 'bg-slate-900 text-slate-300 border-slate-700'
                      }`}>
                        DAY {item.cycleDay}
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-lg text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                        {t.noSchool}
                      </span>
                    )}
                  </div>

                  {/* Attire Notification Block */}
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-center flex-shrink-0 shadow-md relative">
                      {getUniformIcon(item.uniformType, "w-7 h-7")}
                      {isSwim && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center border-2 border-slate-950 shadow-xs">
                          <Waves className="w-3 h-3" />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 space-y-0.5">
                      <div className="text-[10px] uppercase font-mono font-bold text-slate-400">
                        {t.wear}
                      </div>
                      <div className="text-base sm:text-lg font-black text-white truncate">
                        {getUniformTitle(item.uniformType)}
                      </div>
                      <div className="text-[11px] text-slate-300 line-clamp-1">
                        {getUniformDesc(item.uniformType)}
                      </div>
                    </div>
                  </div>

                  {/* Swimming Bag Alert */}
                  {isSwim && (
                    <div className="p-2 rounded-xl bg-cyan-950/50 border border-cyan-500/40 flex items-center gap-2 text-xs text-cyan-200">
                      <Waves className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span className="font-semibold truncate">
                        {t.swimmingBagFor ? t.swimmingBagFor.replace('{name}', child.name) : `請為 ${child.name} 準備游泳裝備袋`}
                      </span>
                    </div>
                  )}

                  {/* Tomorrow Preview for this child */}
                  {nextChildItem && (
                    <div className="pt-2 border-t border-slate-800/80 text-xs flex items-center justify-between text-slate-400">
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="text-[10px] uppercase font-mono text-slate-500 font-bold">{lang === 'zh' ? '明日' : 'Tomorrow'}:</span>
                        <span className="font-bold text-slate-200 truncate">{getUniformTitle(nextChildItem.uniformType)}</span>
                      </div>
                      {isNextSwim && (
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex-shrink-0">
                          + 泳袋
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Single Child Focus Mode (or 1 Child only) */
        (() => {
          const focusedStatus = childrenTodayStatus.find(s => s.child.id === focusedChild?.id) || childrenTodayStatus[0];
          const item = focusedStatus ? focusedStatus.item : currentItem;
          const isSwim = focusedStatus ? focusedStatus.isSwim : (item.hasSwimming || item.uniformType === 'pe_swimming' || item.uniformType === 'uniform_swimming');
          const meta = uniformMeta[item.uniformType] || uniformMeta.uniform;
          const nextChildItem = focusedStatus ? focusedStatus.nextChildItem : nextItem;
          const isNextSwim = focusedStatus ? focusedStatus.isNextSwim : false;

          return (
            <div className={`relative overflow-hidden rounded-3xl p-5 sm:p-7 border bg-gradient-to-br shadow-2xl transition-all ${meta.heroBg}`}>
              {/* Ambient background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                {/* Top Row: Focused Child & Day Cycle Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${focusedChildTheme.bgLight} ${focusedChildTheme.text} ${focusedChildTheme.border} border shadow-xs`}>
                      <span className={`w-2 h-2 rounded-full ${focusedChildTheme.dot}`} />
                      <span>{focusedChild?.name || t.child}</span>
                    </span>

                    {item.cycleDay && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-slate-900/90 text-slate-300 border border-slate-700">
                        DAY {item.cycleDay}
                      </span>
                    )}
                  </div>

                  {/* Cycle Day Special Tags */}
                  <div className="flex items-center gap-1.5">
                    {item.cycleDay === 7 && (
                      <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                        <Lock className="w-2.5 h-2.5" />
                        <span>FIXED HOUSE</span>
                      </span>
                    )}
                    {isSwim && (
                      <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                        <Waves className="w-2.5 h-2.5" />
                        <span>SWIM GEAR</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Core Notification Content */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 my-2">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-center flex-shrink-0 shadow-lg relative">
                      {getUniformIcon(item.uniformType, "w-8 h-8 sm:w-10 sm:h-10")}
                      {isSwim && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center border-2 border-slate-950 shadow-md">
                          <Waves className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <div className="text-xs uppercase tracking-widest text-slate-400 font-mono font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>{t.wear}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                        {getUniformTitle(item.uniformType)}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                        {getUniformDesc(item.uniformType)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Swimming Extra Gear Reminder Callout if swim day */}
                {isSwim && (
                  <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2.5 text-xs text-cyan-200 bg-cyan-950/40 p-3 rounded-2xl border border-cyan-500/30">
                    <Waves className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <div className="flex-1 font-semibold">
                      <span>{t.swimmingBagFor ? t.swimmingBagFor.replace('{name}', focusedChild.name) : `請為 ${focusedChild.name} 準備防水游泳裝備袋（泳衣、泳帽、泳鏡與浴巾）`}</span>
                    </div>
                  </div>
                )}

                {/* Tomorrow's Prep & Packing Checklist Card */}
                {nextChildItem && (
                  <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="font-mono uppercase font-bold text-slate-400">
                        {t.tomorrowDressCode}:
                      </span>
                      <span className="font-bold text-white">
                        {getUniformTitle(nextChildItem.uniformType)}
                      </span>
                      {nextChildItem.cycleDay && (
                        <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-slate-900 text-amber-300 border border-slate-800">
                          DAY {nextChildItem.cycleDay}
                        </span>
                      )}
                      {isNextSwim && (
                        <span className="text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-md border border-cyan-500/20 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{t.packSwimGearNotice}</span>
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedDateStr(nextChildItem.dateStr)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 hover:underline tap-effect self-end sm:self-auto"
                    >
                      <span>{lang === 'zh' ? '查看明日' : lang === 'th' ? 'ดูวันพรุ่งนี้' : 'View Tomorrow'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })()
      )}
    </div>
  );
}
