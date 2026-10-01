import React, { useState } from 'react';
import { 
  X, 
  Settings2, 
  Check, 
  Lock, 
  Flame, 
  Shirt, 
  Activity, 
  Waves, 
  Sparkles, 
  CheckCircle2,
  Info
} from 'lucide-react';
import { translations } from '../translations/i18n';
import { classPresets, getCycleDayUniform, uniformMeta } from '../data/calendarData';

export default function ClassConfigModal({
  isOpen,
  onClose,
  classConfig,
  onSaveConfig,
  lang
}) {
  if (!isOpen) return null;

  const t = translations[lang] || translations.zh;

  // Local editing state initialized from current classConfig
  const [selectedPresetId, setSelectedPresetId] = useState(
    classConfig?.id === 'even_pe' ? 'even_pe' : 'odd_pe'
  );
  
  // Swimming day is constrained to Day 4, Day 5, or Day 6
  const [swimmingDay, setSwimmingDay] = useState(() => {
    const current = Number(classConfig?.swimmingDay);
    if (current === 4 || current === 5 || current === 6) {
      return current;
    }
    return classConfig?.id === 'even_pe' ? 6 : 5;
  });

  const handleSelectPreset = (presetId) => {
    setSelectedPresetId(presetId);
    if (presetId === 'odd_pe' && swimmingDay === 6) {
      setSwimmingDay(5);
    } else if (presetId === 'even_pe' && swimmingDay === 5) {
      setSwimmingDay(6);
    }
  };

  const handleSave = () => {
    const finalConfig = {
      id: selectedPresetId,
      nameKey: selectedPresetId === 'even_pe' ? 'presetEven' : 'presetOdd',
      swimmingDay: Number(swimmingDay)
    };

    onSaveConfig(finalConfig);
    onClose();
  };

  const cycleDaysList = [1, 2, 3, 4, 5, 6, 7, 8];
  const swimmingOptions = [4, 5, 6];

  const getUniformIcon = (type) => {
    switch (type) {
      case 'house_shirt':
        return <Flame className="w-4 h-4 text-amber-400" />;
      case 'pe':
      case 'pe_swimming':
        return <Activity className="w-4 h-4 text-emerald-400" />;
      case 'uniform':
      case 'uniform_swimming':
      default:
        return <Shirt className="w-4 h-4 text-blue-400" />;
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
      case 'uniform':
      default:
        return t.uniform;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Settings2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <span>{t.classConfigTitle}</span>
              </h2>
              <p className="text-xs text-slate-400">
                {t.classConfigSubtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition tap-effect"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
          
          {/* Step 1: Preset Options (Odd vs Even) */}
          <div className="space-y-3">
            <label className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>{lang === 'zh' ? '1. 選擇班級體育日組別' : lang === 'th' ? '1. เลือกกลุ่มวันเรียนพละ' : '1. Select Class PE Group'}</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Option 1: Odd Days PE */}
              <div
                onClick={() => handleSelectPreset('odd_pe')}
                className={`p-4 rounded-2xl border transition cursor-pointer tap-effect ${
                  selectedPresetId === 'odd_pe'
                    ? 'bg-blue-950/40 border-2 border-blue-500 shadow-lg shadow-blue-500/10'
                    : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">
                        {t.presetOdd}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-mono">
                      {t.presetOddDesc}
                    </p>
                  </div>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center border flex-shrink-0 ${
                    selectedPresetId === 'odd_pe' 
                      ? 'bg-blue-600 border-blue-500 text-white' 
                      : 'border-slate-700 bg-slate-900'
                  }`}>
                    {selectedPresetId === 'odd_pe' && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>
              </div>

              {/* Option 2: Even Days PE */}
              <div
                onClick={() => handleSelectPreset('even_pe')}
                className={`p-4 rounded-2xl border transition cursor-pointer tap-effect ${
                  selectedPresetId === 'even_pe'
                    ? 'bg-blue-950/40 border-2 border-blue-500 shadow-lg shadow-blue-500/10'
                    : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">
                        {t.presetEven}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-mono">
                      {t.presetEvenDesc}
                    </p>
                  </div>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center border flex-shrink-0 ${
                    selectedPresetId === 'even_pe' 
                      ? 'bg-blue-600 border-blue-500 text-white' 
                      : 'border-slate-700 bg-slate-900'
                  }`}>
                    {selectedPresetId === 'even_pe' && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Swimming Day Selector (Day 4, 5, or 6) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs uppercase font-mono font-bold tracking-wider text-cyan-300 flex items-center gap-1.5">
                <Waves className="w-3.5 h-3.5 text-cyan-400" />
                <span>{lang === 'zh' ? '2. 指定游泳課在哪一天（Day 4、Day 5 或 Day 6）' : lang === 'th' ? '2. กำหนดวันว่ายน้ำ (Day 4, Day 5 หรือ Day 6)' : '2. Designate Swimming Day (Day 4, 5, or 6)'}</span>
              </label>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {swimmingOptions.map((d) => {
                const isSelected = swimmingDay === d;
                const isOddDay = d % 2 === 1;
                const baseAttr = selectedPresetId === 'odd_pe'
                  ? (isOddDay ? '體育服' : '一般校服')
                  : (isOddDay ? '一般校服' : '體育服');

                return (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setSwimmingDay(d)}
                    className={`p-3 rounded-2xl border transition flex flex-col items-center justify-center gap-1.5 tap-effect ${
                      isSelected
                        ? 'bg-cyan-950/50 border-2 border-cyan-400 text-cyan-200 shadow-lg shadow-cyan-500/20'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-1 text-xs font-mono font-bold">
                      <Waves className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-300' : 'text-slate-500'}`} />
                      <span>DAY {d}</span>
                    </div>
                    <span className="text-[11px] font-semibold text-center">
                      {lang === 'zh' ? `穿${baseAttr} + 帶泳袋` : lang === 'th' ? `Day ${d} ว่ายน้ำ` : `Day ${d} Swim`}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-slate-400 flex items-center gap-1.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
              <Info className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <span>{t.swimmingDayNotice}</span>
            </p>
          </div>

          {/* Step 3: 8-Day Cycle Schedule Preview */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <label className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400">
                {lang === 'zh' ? '即時 8 日週期著裝預覽' : lang === 'th' ? 'พรีวิวตารางการแต่งกาย 8 วัน' : 'Live 8-Day Cycle Preview'}
              </label>
              <span className="text-[11px] text-amber-400 font-bold flex items-center gap-1">
                <Lock className="w-3 h-3" />
                <span>{lang === 'zh' ? 'Day 7 固定學院服' : lang === 'th' ? 'Day 7 เสื้อบ้าน' : 'Day 7 House Shirt'}</span>
              </span>
            </div>

            {/* Grid of 8 cycle days */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {cycleDaysList.map((dayNum) => {
                const uniformType = getCycleDayUniform(dayNum, selectedPresetId, swimmingDay);
                const isDay7 = dayNum === 7;
                const isSwim = dayNum === swimmingDay;
                const meta = uniformMeta[uniformType] || uniformMeta.uniform;

                return (
                  <div
                    key={dayNum}
                    className={`p-3 rounded-2xl border flex flex-col justify-between gap-2 relative ${
                      isDay7 
                        ? 'bg-amber-950/30 border-amber-500/40' 
                        : isSwim
                        ? 'bg-cyan-950/30 border-cyan-500/40 ring-1 ring-cyan-500/30'
                        : 'bg-slate-950/70 border-slate-800'
                    }`}
                  >
                    {/* Day Header */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-xs text-slate-300">
                        DAY {dayNum}
                      </span>
                      {isDay7 && (
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-amber-500/20 text-amber-300 flex items-center gap-1">
                          <Lock className="w-2.5 h-2.5" />
                          <span>FIXED</span>
                        </span>
                      )}
                      {isSwim && (
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-cyan-500/20 text-cyan-300 flex items-center gap-1">
                          <Waves className="w-2.5 h-2.5" />
                          <span>SWIM</span>
                        </span>
                      )}
                    </div>

                    {/* Uniform Pill Display */}
                    <div className={`py-1.5 px-2 rounded-xl text-xs font-bold flex items-center gap-1.5 justify-center border ${meta.color}`}>
                      {getUniformIcon(uniformType)}
                      <span className="truncate">{getUniformTitle(uniformType)}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Notice */}
            <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-400">
              <Lock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                {t.fixedHouseNote}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/90 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition tap-effect"
          >
            {t.close}
          </button>

          <button
            onClick={handleSave}
            className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25 transition tap-effect flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{t.applySetting}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
