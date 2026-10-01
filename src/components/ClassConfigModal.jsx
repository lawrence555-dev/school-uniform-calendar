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
  HelpCircle
} from 'lucide-react';
import { translations } from '../translations/i18n';
import { classPresets, uniformMeta } from '../data/calendarData';

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
  const [selectedPresetId, setSelectedPresetId] = useState(classConfig?.id || 'odd_pe');
  const [customDays, setCustomDays] = useState({
    1: classConfig?.days?.[1] || 'pe',
    2: classConfig?.days?.[2] || 'uniform',
    3: classConfig?.days?.[3] || 'pe',
    4: classConfig?.days?.[4] || 'uniform',
    5: classConfig?.days?.[5] || 'pe_swimming',
    6: classConfig?.days?.[6] || 'uniform',
    7: 'house_shirt', // Strictly locked
    8: classConfig?.days?.[8] || 'uniform'
  });
  const [swimmingDay, setSwimmingDay] = useState(
    classConfig?.swimmingDay !== undefined ? classConfig.swimmingDay : 5
  );

  const handleSelectPreset = (presetKey) => {
    setSelectedPresetId(presetKey);
    if (presetKey === 'odd_pe') {
      setCustomDays({ ...classPresets.odd_pe.days, 7: 'house_shirt' });
      setSwimmingDay(classPresets.odd_pe.swimmingDay);
    } else if (presetKey === 'even_pe') {
      setCustomDays({ ...classPresets.even_pe.days, 7: 'house_shirt' });
      setSwimmingDay(classPresets.even_pe.swimmingDay);
    }
  };

  const handleCustomDayChange = (dayNum, uniformType) => {
    if (dayNum === 7) return; // Locked to house_shirt
    setCustomDays((prev) => ({
      ...prev,
      [dayNum]: uniformType
    }));
    setSelectedPresetId('custom');
  };

  const handleSwimmingDayChange = (dayNum) => {
    setSwimmingDay(dayNum);
    setSelectedPresetId('custom');
  };

  const handleSave = () => {
    let finalConfig;
    if (selectedPresetId === 'odd_pe') {
      finalConfig = {
        id: 'odd_pe',
        nameKey: 'presetOdd',
        swimmingDay: 5,
        days: { ...classPresets.odd_pe.days, 7: 'house_shirt' }
      };
    } else if (selectedPresetId === 'even_pe') {
      finalConfig = {
        id: 'even_pe',
        nameKey: 'presetEven',
        swimmingDay: 6,
        days: { ...classPresets.even_pe.days, 7: 'house_shirt' }
      };
    } else {
      finalConfig = {
        id: 'custom',
        nameKey: 'presetCustom',
        swimmingDay: swimmingDay,
        days: {
          ...customDays,
          7: 'house_shirt' // Lock Day 7
        }
      };
    }

    onSaveConfig(finalConfig);
    onClose();
  };

  const cycleDaysList = [1, 2, 3, 4, 5, 6, 7, 8];

  const getUniformIcon = (type) => {
    switch (type) {
      case 'house_shirt':
        return <Flame className="w-4 h-4 text-amber-400" />;
      case 'pe':
        return <Activity className="w-4 h-4 text-emerald-400" />;
      case 'pe_swimming':
        return <Waves className="w-4 h-4 text-cyan-300" />;
      case 'uniform':
      default:
        return <Shirt className="w-4 h-4 text-blue-400" />;
    }
  };

  const getUniformShortLabel = (type) => {
    switch (type) {
      case 'house_shirt':
        return t.houseShirt;
      case 'pe':
        return t.pe;
      case 'pe_swimming':
        return t.peSwimming;
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
          
          {/* Preset Options */}
          <div className="space-y-3">
            <label className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>{lang === 'zh' ? '選擇班級課表預設' : lang === 'th' ? 'เลือกรูปแบบตารางเรียน' : 'Select Class Preset'}</span>
            </label>

            {/* Option 1: Odd Days PE */}
            <div
              onClick={() => handleSelectPreset('odd_pe')}
              className={`p-4 rounded-2xl border transition cursor-pointer tap-effect ${
                selectedPresetId === 'odd_pe'
                  ? 'bg-blue-950/40 border-2 border-blue-500 shadow-lg shadow-blue-500/10'
                  : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm sm:text-base">
                      {t.presetOdd}
                    </span>
                    <span className="px-2 py-0.2 rounded text-[10px] font-mono font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      DEFAULT
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
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
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm sm:text-base">
                      {t.presetEven}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
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

            {/* Option 3: Custom Setup */}
            <div
              onClick={() => setSelectedPresetId('custom')}
              className={`p-4 rounded-2xl border transition cursor-pointer tap-effect ${
                selectedPresetId === 'custom'
                  ? 'bg-blue-950/40 border-2 border-blue-500 shadow-lg shadow-blue-500/10'
                  : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <span className="font-bold text-white text-sm sm:text-base">
                    {t.presetCustom}
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {t.presetCustomDesc}
                  </p>
                </div>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center border flex-shrink-0 ${
                  selectedPresetId === 'custom' 
                    ? 'bg-blue-600 border-blue-500 text-white' 
                    : 'border-slate-700 bg-slate-900'
                }`}>
                  {selectedPresetId === 'custom' && <Check className="w-3.5 h-3.5" />}
                </div>
              </div>
            </div>
          </div>

          {/* 8-Day Cycle Visualizer & Customization Grid */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <label className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400">
                {lang === 'zh' ? '8 日週期預覽與自訂細項' : lang === 'th' ? 'พรีวิวและการกำหนด 8 วัน' : '8-Day Cycle Schedule Preview'}
              </label>
              <span className="text-[11px] text-amber-400 font-bold flex items-center gap-1">
                <Lock className="w-3 h-3" />
                <span>{lang === 'zh' ? 'Day 7 恆定學院服' : lang === 'th' ? 'Day 7 เสื้อบ้านเสมอ' : 'Day 7 Locked'}</span>
              </span>
            </div>

            {/* Grid of 8 cycle days */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {cycleDaysList.map((dayNum) => {
                const isDay7 = dayNum === 7;
                const currentUniform = isDay7 
                  ? 'house_shirt' 
                  : (dayNum === swimmingDay ? 'pe_swimming' : customDays[dayNum] || 'uniform');

                return (
                  <div
                    key={dayNum}
                    className={`p-3 rounded-2xl border flex flex-col justify-between gap-2 relative ${
                      isDay7 
                        ? 'bg-amber-950/30 border-amber-500/40 ring-1 ring-amber-500/30' 
                        : 'bg-slate-950/70 border-slate-800'
                    }`}
                  >
                    {/* Day Header */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-xs text-slate-300">
                        DAY {dayNum}
                      </span>
                      {isDay7 ? (
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-amber-500/20 text-amber-300 flex items-center gap-1">
                          <Lock className="w-2.5 h-2.5" />
                          <span>FIXED</span>
                        </span>
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-slate-700" />
                      )}
                    </div>

                    {/* Uniform Selector / Display */}
                    {isDay7 ? (
                      <div className="py-2 px-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-xs flex items-center gap-1.5 justify-center">
                        <Flame className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span className="truncate">{t.houseShirt}</span>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <select
                          value={dayNum === swimmingDay ? 'pe_swimming' : customDays[dayNum]}
                          onChange={(e) => handleCustomDayChange(dayNum, e.target.value)}
                          disabled={selectedPresetId !== 'custom'}
                          className="w-full bg-slate-900 text-slate-200 border border-slate-700 rounded-xl px-2 py-1.5 text-xs font-semibold focus:outline-none focus:border-blue-500 disabled:opacity-80 disabled:cursor-not-allowed"
                        >
                          <option value="pe">{t.pe}</option>
                          <option value="uniform">{t.uniform}</option>
                          <option value="pe_swimming">{t.peSwimming}</option>
                        </select>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Swimming Day Selector in Custom Mode */}
            {selectedPresetId === 'custom' && (
              <div className="p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-cyan-300">
                  <Waves className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="font-semibold">{t.swimmingDayLabel}</span>
                </div>

                <div className="flex items-center gap-1.5 flex-wrap">
                  {[1, 2, 3, 4, 5, 6, 8].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => handleSwimmingDayChange(d)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition tap-effect ${
                        swimmingDay === d
                          ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                          : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      Day {d}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleSwimmingDayChange(null)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition tap-effect ${
                      swimmingDay === null
                        ? 'bg-cyan-500 text-slate-950'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {t.noSwimming}
                  </button>
                </div>
              </div>
            )}

            {/* Important Rule Callout */}
            <div className="p-3 rounded-2xl bg-slate-950/80 border border-amber-500/30 flex items-start gap-2.5 text-xs text-amber-300">
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
