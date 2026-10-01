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
  Lock
} from 'lucide-react';
import { translations } from '../translations/i18n';
import { uniformMeta } from '../data/calendarData';

export default function TodayHeroBanner({ 
  selectedDateStr, 
  setSelectedDateStr, 
  calendarSchedule,
  classConfig,
  onOpenClassConfig,
  lang 
}) {
  const t = translations[lang] || translations.zh;

  const currentItem = calendarSchedule.find((d) => d.dateStr === selectedDateStr) || calendarSchedule[0];
  const currentIndex = calendarSchedule.findIndex((d) => d.dateStr === selectedDateStr);
  const nextItem = currentIndex >= 0 && currentIndex < calendarSchedule.length - 1 
    ? calendarSchedule[currentIndex + 1] 
    : null;

  const meta = uniformMeta[currentItem.uniformType] || uniformMeta.uniform;

  const getUniformIcon = (type) => {
    switch (type) {
      case 'house_shirt':
        return <Flame className="w-8 h-8 text-amber-400" />;
      case 'pe':
        return <Activity className="w-8 h-8 text-emerald-400" />;
      case 'pe_swimming':
        return <Waves className="w-8 h-8 text-cyan-300" />;
      case 'holiday':
      case 'weekend':
        return <Sun className="w-8 h-8 text-rose-400" />;
      case 'uniform':
      default:
        return <Shirt className="w-8 h-8 text-blue-400" />;
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
      case 'holiday':
      case 'weekend':
        return t.holidayDesc;
      case 'uniform':
      default:
        return t.uniformDesc;
    }
  };

  const isToday = currentItem.dateStr === '2026-10-01';

  const handlePrevDay = () => {
    if (currentIndex > 0) {
      setSelectedDateStr(calendarSchedule[currentIndex - 1].dateStr);
    }
  };

  const handleNextDay = () => {
    if (currentIndex < calendarSchedule.length - 1) {
      setSelectedDateStr(calendarSchedule[currentIndex + 1].dateStr);
    }
  };

  const resetToToday = () => {
    setSelectedDateStr('2026-10-01');
  };

  const activePresetLabel = classConfig?.id === 'even_pe'
    ? t.presetEven
    : classConfig?.id === 'custom'
    ? t.presetCustom
    : t.presetOdd;

  return (
    <div className="space-y-4">
      {/* Active Class Preset Indicator Bar */}
      <div className="flex items-center justify-between px-3 py-2 rounded-2xl bg-slate-900/70 border border-slate-800 text-xs">
        <div className="flex items-center gap-2 truncate">
          <Settings2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
          <span className="text-slate-400">{t.activeClassSetting}:</span>
          <span className="font-bold text-white truncate">{activePresetLabel}</span>
        </div>
        <button
          onClick={onOpenClassConfig}
          className="text-blue-400 hover:text-blue-300 font-bold hover:underline ml-2 flex-shrink-0 tap-effect"
        >
          {t.changeSetting} ➔
        </button>
      </div>

      {/* Primary Hero Card: Today's Uniform Notification */}
      <div className={`relative overflow-hidden rounded-3xl p-5 sm:p-7 border bg-gradient-to-br shadow-2xl transition-all ${meta.heroBg}`}>
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Top Row: Date Pill & Day Cycle Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-900/90 text-white border border-slate-700 shadow-xs">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                <span>{currentItem.dateStr}</span>
                <span>({t.weekdaysFull[currentItem.weekdayIndex]})</span>
              </span>

              {isToday && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 animate-pulse">
                  TODAY
                </span>
              )}
            </div>

            {/* Cycle Day Indicator */}
            {currentItem.cycleDay ? (
              <div className="flex items-center gap-1.5">
                {currentItem.cycleDay === 7 && (
                  <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                    <Lock className="w-2.5 h-2.5" />
                    <span>FIXED HOUSE</span>
                  </span>
                )}
                <span className="px-3 py-1 rounded-xl text-xs font-mono font-black tracking-wider bg-slate-900/90 text-amber-300 border border-amber-500/30 shadow-xs">
                  DAY {currentItem.cycleDay}
                </span>
              </div>
            ) : (
              <span className="px-3 py-1 rounded-xl text-xs font-bold bg-rose-500/10 text-rose-300 border border-rose-500/20">
                {t.noSchool}
              </span>
            )}
          </div>

          {/* Core Notification Content */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 my-2">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-center flex-shrink-0 shadow-lg">
                {getUniformIcon(currentItem.uniformType)}
              </div>
              <div className="space-y-1.5">
                <div className="text-xs uppercase tracking-widest text-slate-400 font-mono font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.wear}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {getUniformTitle(currentItem.uniformType)}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                  {getUniformDesc(currentItem.uniformType)}
                </p>
              </div>
            </div>
          </div>

          {/* Special School Event Banner if applicable */}
          {currentItem.event && (
            <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center gap-2.5 text-xs text-amber-300 bg-slate-950/60 p-3 rounded-2xl border border-amber-500/20">
              <PartyPopper className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <div className="flex-1 font-semibold">
                <span>{t.specialEvent}: </span>
                <span className="text-white font-bold">{currentItem.event[lang] || currentItem.event.en}</span>
              </div>
            </div>
          )}

          {/* Quick Date Stepper Bar */}
          <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
            <button
              onClick={handlePrevDay}
              disabled={currentIndex <= 0}
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-800 flex items-center gap-1 transition tap-effect"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '前一日' : lang === 'th' ? 'วันก่อนหน้า' : 'Prev Day'}</span>
            </button>

            {!isToday && (
              <button
                onClick={resetToToday}
                className="px-3 py-1 rounded-lg text-[11px] font-bold text-blue-400 hover:text-blue-300 bg-blue-500/10 border border-blue-500/20 transition tap-effect"
              >
                {lang === 'zh' ? '回到今天 (10/01)' : lang === 'th' ? 'กลับไปวันนี้ (01 ต.ค.)' : 'Back to Today (Oct 1)'}
              </button>
            )}

            <button
              onClick={handleNextDay}
              disabled={currentIndex >= calendarSchedule.length - 1}
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-800 flex items-center gap-1 transition tap-effect"
            >
              <span>{lang === 'zh' ? '後一日' : lang === 'th' ? 'วันถัดไป' : 'Next Day'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Tomorrow's Prep & Packing Checklist Card */}
      {nextItem && (
        <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 text-slate-300">
              <Calendar className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] uppercase tracking-wider font-mono font-bold text-slate-400">
                  {t.tomorrowDressCode}
                </span>
                <span className="text-xs text-slate-400">
                  • {nextItem.dateStr} ({t.weekdaysShort[nextItem.weekdayIndex]})
                </span>
                {nextItem.cycleDay && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-amber-400 border border-slate-700">
                    DAY {nextItem.cycleDay}
                  </span>
                )}
              </div>
              <div className="text-sm font-bold text-white mt-0.5 flex items-center gap-2">
                <span>{getUniformTitle(nextItem.uniformType)}</span>
                {nextItem.uniformType === 'pe_swimming' && (
                  <span className="text-xs text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-md border border-cyan-500/20 font-medium">
                    ⚠️ {lang === 'zh' ? '記得備妥泳衣與泳鏡' : lang === 'th' ? 'อย่าลืมเตรียมชุดว่ายน้ำ' : 'Pack swim gear tonight!'}
                  </span>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={() => setSelectedDateStr(nextItem.dateStr)}
            className="self-end sm:self-auto inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 hover:underline tap-effect"
          >
            <span>{lang === 'zh' ? '查看明日' : lang === 'th' ? 'ดูวันพรุ่งนี้' : 'View Tomorrow'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
