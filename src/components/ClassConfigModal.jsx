import React, { useState, useEffect } from 'react';
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
  Info,
  CircleOff,
  User,
  Plus,
  Trash2,
  Palette
} from 'lucide-react';
import { translations } from '../translations/i18n';
import { classPresets, getCycleDayUniform, uniformMeta, childColorThemes } from '../data/calendarData';

const COLOR_KEYS = ['blue', 'rose', 'emerald', 'amber', 'purple'];

export default function ClassConfigModal({
  isOpen,
  onClose,
  childrenProfiles = [],
  onSaveChildren,
  lang
}) {
  if (!isOpen) return null;

  const t = translations[lang] || translations.zh;

  // Local list of children profiles
  const [localChildren, setLocalChildren] = useState(() => {
    if (childrenProfiles && childrenProfiles.length > 0) {
      return JSON.parse(JSON.stringify(childrenProfiles));
    }
    return [
      {
        id: 'child_1',
        name: '大寶 Leo',
        color: 'blue',
        presetId: 'odd_pe',
        swimmingDay: 5
      }
    ];
  });

  const [activeChildIndex, setActiveChildIndex] = useState(0);

  // Sync on modal open
  useEffect(() => {
    if (isOpen) {
      if (childrenProfiles && childrenProfiles.length > 0) {
        setLocalChildren(JSON.parse(JSON.stringify(childrenProfiles)));
      } else {
        setLocalChildren([
          {
            id: 'child_1',
            name: '大寶 Leo',
            color: 'blue',
            presetId: 'odd_pe',
            swimmingDay: 5
          }
        ]);
      }
      setActiveChildIndex(0);
    }
  }, [isOpen, childrenProfiles]);

  const activeChild = localChildren[activeChildIndex] || localChildren[0];

  const handleUpdateActiveChild = (field, value) => {
    setLocalChildren((prev) => {
      const updated = [...prev];
      updated[activeChildIndex] = {
        ...updated[activeChildIndex],
        [field]: value
      };
      return updated;
    });
  };

  const handleAddChild = () => {
    if (localChildren.length >= 4) return;
    const nextIdx = localChildren.length + 1;
    const defaultColor = COLOR_KEYS[(nextIdx - 1) % COLOR_KEYS.length];
    const defaultPreset = nextIdx % 2 === 0 ? 'even_pe' : 'odd_pe';
    const defaultSwim = nextIdx % 2 === 0 ? 6 : 5;
    
    const newChild = {
      id: `child_${Date.now()}`,
      name: lang === 'zh' ? `小孩 ${nextIdx}` : lang === 'th' ? `เด็กคนที่ ${nextIdx}` : `Child ${nextIdx}`,
      color: defaultColor,
      presetId: defaultPreset,
      swimmingDay: defaultSwim
    };

    setLocalChildren((prev) => [...prev, newChild]);
    setActiveChildIndex(localChildren.length);
  };

  const handleDeleteChild = (indexToDelete) => {
    if (localChildren.length <= 1) return;
    const confirmMsg = t.confirmDeleteChild || '確定要刪除這位小孩的設定嗎？';
    if (window.confirm(confirmMsg)) {
      setLocalChildren((prev) => prev.filter((_, idx) => idx !== indexToDelete));
      setActiveChildIndex((prevIdx) => (prevIdx >= indexToDelete && prevIdx > 0 ? prevIdx - 1 : 0));
    }
  };

  const handleSave = () => {
    // Sanitize any empty names
    const sanitized = localChildren.map((child, idx) => ({
      ...child,
      name: (child.name || '').trim() || (lang === 'zh' ? `小孩 ${idx + 1}` : lang === 'th' ? `เด็ก ${idx + 1}` : `Child ${idx + 1}`),
      swimmingDay: child.swimmingDay !== null && child.swimmingDay !== undefined ? Number(child.swimmingDay) : null
    }));

    onSaveChildren(sanitized);
    onClose();
  };

  const cycleDaysList = [1, 2, 3, 4, 5, 6, 7, 8];

  const getUniformIcon = (type) => {
    switch (type) {
      case 'house_shirt':
        return <Flame className="w-3.5 h-3.5 text-amber-400" />;
      case 'pe':
      case 'pe_swimming':
        return <Activity className="w-3.5 h-3.5 text-emerald-400" />;
      case 'uniform':
      case 'uniform_swimming':
      default:
        return <Shirt className="w-3.5 h-3.5 text-blue-400" />;
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

  const activeTheme = childColorThemes[activeChild.color] || childColorThemes.blue;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between">
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

        {/* Multi-Child Selector Tabs */}
        <div className="px-4 sm:px-6 pt-3 pb-2 bg-slate-950/40 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {localChildren.map((child, idx) => {
            const isChildActive = idx === activeChildIndex;
            const theme = childColorThemes[child.color] || childColorThemes.blue;
            return (
              <button
                key={child.id || idx}
                type="button"
                onClick={() => setActiveChildIndex(idx)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap tap-effect border ${
                  isChildActive
                    ? `${theme.bgLight} ${theme.text} ${theme.border} ring-2 ${theme.ring} shadow-xs`
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-850'
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${theme.dot}`} />
                <span className="truncate max-w-[110px]">{child.name || `${t.child} ${idx + 1}`}</span>
              </button>
            );
          })}

          {localChildren.length < 4 && (
            <button
              type="button"
              onClick={handleAddChild}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-300 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition whitespace-nowrap tap-effect"
            >
              <Plus className="w-3.5 h-3.5 text-blue-400" />
              <span>{t.addChild}</span>
            </button>
          )}
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
          
          {/* Step 1: Child Name & Color Customization */}
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/90 space-y-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              {/* Name Input */}
              <div className="flex-1 space-y-1.5">
                <label className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t.childName}</span>
                </label>
                <input
                  type="text"
                  value={activeChild.name}
                  onChange={(e) => handleUpdateActiveChild('name', e.target.value)}
                  placeholder={lang === 'zh' ? '如：哥哥 Leo、妹妹 Mia' : 'e.g. Leo, Mia'}
                  maxLength={20}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold text-sm focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                />
              </div>

              {/* Color Theme Selector */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{t.childThemeColor}</span>
                </label>
                <div className="flex items-center gap-2 pt-0.5">
                  {COLOR_KEYS.map((colorKey) => {
                    const theme = childColorThemes[colorKey];
                    const isSelected = activeChild.color === colorKey;
                    return (
                      <button
                        key={colorKey}
                        type="button"
                        onClick={() => handleUpdateActiveChild('color', colorKey)}
                        className={`w-7 h-7 rounded-full ${theme.dot} transition flex items-center justify-center tap-effect ${
                          isSelected ? 'ring-3 ring-white ring-offset-2 ring-offset-slate-900 scale-110 shadow-md' : 'opacity-60 hover:opacity-100'
                        }`}
                        title={t[theme.nameKey]}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 text-slate-950 stroke-[3]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Preset Options (Odd vs Even) */}
          <div className="space-y-3">
            <label className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>{lang === 'zh' ? '1. 選擇體育日組別' : lang === 'th' ? '1. เลือกกลุ่มวันเรียนพละ' : '1. Select PE Cycle Group'}</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Option 1: Odd Days PE */}
              <div
                onClick={() => handleUpdateActiveChild('presetId', 'odd_pe')}
                className={`p-3.5 sm:p-4 rounded-2xl border transition cursor-pointer tap-effect ${
                  activeChild.presetId === 'odd_pe'
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
                    activeChild.presetId === 'odd_pe' 
                      ? 'bg-blue-600 border-blue-500 text-white' 
                      : 'border-slate-700 bg-slate-900'
                  }`}>
                    {activeChild.presetId === 'odd_pe' && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>
              </div>

              {/* Option 2: Even Days PE */}
              <div
                onClick={() => handleUpdateActiveChild('presetId', 'even_pe')}
                className={`p-3.5 sm:p-4 rounded-2xl border transition cursor-pointer tap-effect ${
                  activeChild.presetId === 'even_pe'
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
                    activeChild.presetId === 'even_pe' 
                      ? 'bg-blue-600 border-blue-500 text-white' 
                      : 'border-slate-700 bg-slate-900'
                  }`}>
                    {activeChild.presetId === 'even_pe' && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Swimming Day Selector (Optional: No Swimming, Day 4, Day 5, or Day 6) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs uppercase font-mono font-bold tracking-wider text-cyan-300 flex items-center gap-1.5">
                <Waves className="w-3.5 h-3.5 text-cyan-400" />
                <span>{lang === 'zh' ? '2. 指定游泳課日（選填）' : lang === 'th' ? '2. กำหนดวันว่ายน้ำ (เลือกได้)' : '2. Swimming Day (Optional)'}</span>
              </label>
              <span className="text-[11px] text-slate-400">
                {lang === 'zh' ? '若無游泳課可選「無」' : lang === 'th' ? 'เลือกไม่มีได้หากไม่มีเรียน' : 'Select None if no swim'}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {/* Option: No Swimming */}
              <button
                type="button"
                onClick={() => handleUpdateActiveChild('swimmingDay', null)}
                className={`p-3 rounded-2xl border transition flex flex-col items-center justify-center gap-1.5 tap-effect ${
                  activeChild.swimmingDay === null
                    ? 'bg-slate-800 border-2 border-slate-500 text-white shadow-lg'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-1 text-xs font-mono font-bold">
                  <CircleOff className={`w-3.5 h-3.5 ${activeChild.swimmingDay === null ? 'text-slate-300' : 'text-slate-600'}`} />
                  <span>NONE</span>
                </div>
                <span className="text-[11px] font-semibold text-center truncate w-full">
                  {t.noSwimmingShort}
                </span>
              </button>

              {/* Options: Day 4, Day 5, Day 6 */}
              {[4, 5, 6].map((d) => {
                const isSelected = activeChild.swimmingDay === d;
                const isOddDay = d % 2 === 1;
                const baseAttr = activeChild.presetId === 'odd_pe'
                  ? (isOddDay ? (t.shortPE || '體育') : (t.shortUniform || '校服'))
                  : (isOddDay ? (t.shortUniform || '校服') : (t.shortPE || '體育'));

                return (
                  <button
                    key={d}
                    type="button"
                    onClick={() => handleUpdateActiveChild('swimmingDay', d)}
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
                    <span className="text-[11px] font-semibold text-center truncate w-full">
                      {lang === 'zh' ? `穿${baseAttr}+帶泳袋` : lang === 'th' ? `Day ${d} ว่ายน้ำ` : `Day ${d} Swim`}
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

          {/* Step 4: 8-Day Cycle Schedule Preview for Active Child */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <label className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400">
                {lang === 'zh' ? `【${activeChild.name}】8 日週期著裝預覽` : lang === 'th' ? `พรีวิวตาราง 8 วันของ【${activeChild.name}】` : `8-Day Cycle Preview for ${activeChild.name}`}
              </label>
              <span className="text-[11px] text-amber-400 font-bold flex items-center gap-1">
                <Lock className="w-3 h-3" />
                <span>{lang === 'zh' ? 'Day 7 固定學院服' : lang === 'th' ? 'Day 7 เสื้อบ้าน' : 'Day 7 House Shirt'}</span>
              </span>
            </div>

            {/* Grid of 8 cycle days */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {cycleDaysList.map((dayNum) => {
                const uniformType = getCycleDayUniform(dayNum, activeChild.presetId, activeChild.swimmingDay);
                const isDay7 = dayNum === 7;
                const isSwim = activeChild.swimmingDay !== null && dayNum === activeChild.swimmingDay;
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

            {/* Delete Child Button (Only if > 1 child) */}
            {localChildren.length > 1 && (
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => handleDeleteChild(activeChildIndex)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-rose-400 hover:text-rose-300 bg-rose-950/30 hover:bg-rose-950/50 border border-rose-500/30 transition tap-effect"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{t.deleteChild}</span>
                </button>
              </div>
            )}
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
            <span>{t.saveAllChildren || t.applySetting}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
