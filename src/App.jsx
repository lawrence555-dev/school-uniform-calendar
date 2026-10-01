import React, { useState, useEffect, useMemo } from 'react';
import { 
  Calendar as CalendarIcon, 
  Shirt, 
  Sparkles, 
  Settings2, 
  List, 
  CheckCircle2, 
  Waves, 
  Flame, 
  Activity, 
  Sun, 
  ChevronRight, 
  Info, 
  Lock, 
  CircleOff 
} from 'lucide-react';
import HeaderNavbar from './components/HeaderNavbar';
import TodayHeroBanner from './components/TodayHeroBanner';
import MonthSelector from './components/MonthSelector';
import CalendarGridView from './components/CalendarGridView';
import ScheduleListView from './components/ScheduleListView';
import FilterBar from './components/FilterBar';
import ClassConfigModal from './components/ClassConfigModal';
import { translations } from './translations/i18n';
import { classPresets, buildDynamicCalendar, uniformMeta } from './data/calendarData';

const STORAGE_KEY = 'school_class_uniform_config_v3';

export default function App() {
  const [lang, setLang] = useState('zh');
  const [selectedMonth, setSelectedMonth] = useState(10); // 10 = Oct, 11 = Nov, 12 = Dec
  const [selectedDateStr, setSelectedDateStr] = useState('2026-10-01');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [filterType, setFilterType] = useState('all');
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  // Initialize Class Configuration from localStorage, or default to odd_pe
  const [classConfig, setClassConfig] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.id === 'odd_pe' || parsed.id === 'even_pe') {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to load class configuration:', e);
    }
    return classPresets.odd_pe;
  });

  // Prompt user to configure class schedule on first open if never set
  useEffect(() => {
    try {
      const hasConfigured = localStorage.getItem(STORAGE_KEY);
      if (!hasConfigured) {
        // Automatically open the class setup modal on first visit
        setIsConfigModalOpen(true);
      }
    } catch (e) {
      // ignore localStorage errors
    }
  }, []);

  // Dynamically generate the 3-month schedule based on active classConfig
  const calendarSchedule = useMemo(() => {
    return buildDynamicCalendar(classConfig);
  }, [classConfig]);

  // Handler for switching month tab (10, 11, 12)
  const handleSelectMonth = (month) => {
    setSelectedMonth(month);
    // Automatically select the 1st day of the newly chosen month
    const firstDay = calendarSchedule.find((d) => d.month === month);
    if (firstDay) {
      setSelectedDateStr(firstDay.dateStr);
    }
  };

  // Handler for selecting any specific date
  const handleSelectDate = (dateStr) => {
    setSelectedDateStr(dateStr);
    const item = calendarSchedule.find((d) => d.dateStr === dateStr);
    if (item && item.month !== selectedMonth) {
      setSelectedMonth(item.month);
    }
  };

  const handleSaveClassConfig = (newConfig) => {
    setClassConfig(newConfig);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
    } catch (e) {
      console.warn('Failed to persist class config:', e);
    }
  };

  const t = translations[lang] || translations.zh;
  const hasSwim = classConfig?.swimmingDay !== null && classConfig?.swimmingDay !== undefined && Number(classConfig?.swimmingDay) > 0;
  const swimDayNum = hasSwim ? Number(classConfig.swimmingDay) : null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Header & Language Switcher */}
      <HeaderNavbar 
        lang={lang} 
        setLang={setLang} 
        onOpenClassConfig={() => setIsConfigModalOpen(true)}
        classConfig={classConfig}
      />

      {/* Main Container (Mobile First, max-w-3xl) */}
      <main className="max-w-3xl mx-auto px-3.5 sm:px-6 py-5 sm:py-8 space-y-6">
        
        {/* Prominent Live Dress Code Hero Banner */}
        <section>
          <TodayHeroBanner
            selectedDateStr={selectedDateStr}
            setSelectedDateStr={handleSelectDate}
            calendarSchedule={calendarSchedule}
            classConfig={classConfig}
            onOpenClassConfig={() => setIsConfigModalOpen(true)}
            lang={lang}
          />
        </section>

        {/* Month Selector Tabs & Monthly Metrics */}
        <section>
          <MonthSelector
            selectedMonth={selectedMonth}
            setSelectedMonth={handleSelectMonth}
            viewMode={viewMode}
            setViewMode={setViewMode}
            calendarSchedule={calendarSchedule}
            lang={lang}
          />
        </section>

        {/* Filter Bar */}
        <section>
          <FilterBar
            filterType={filterType}
            setFilterType={setFilterType}
            lang={lang}
          />
        </section>

        {/* Calendar Grid View or List View */}
        <section className="animate-fadeIn">
          {viewMode === 'grid' ? (
            <CalendarGridView
              calendarSchedule={calendarSchedule}
              selectedMonth={selectedMonth}
              selectedDateStr={selectedDateStr}
              setSelectedDateStr={handleSelectDate}
              filterType={filterType}
              lang={lang}
            />
          ) : (
            <ScheduleListView
              calendarSchedule={calendarSchedule}
              selectedMonth={selectedMonth}
              selectedDateStr={selectedDateStr}
              setSelectedDateStr={handleSelectDate}
              filterType={filterType}
              lang={lang}
            />
          )}
        </section>

        {/* Quick Uniform Legend Card with Class Setup Trigger */}
        <section className="glass-card rounded-2xl p-4 border border-slate-800/80 shadow-lg text-xs text-slate-400 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-blue-400" />
              <span>{lang === 'zh' ? '著裝顏色說明' : lang === 'th' ? 'สัญลักษณ์สีการแต่งกาย' : 'Uniform Color Guide'}</span>
            </span>
            <button
              onClick={() => setIsConfigModalOpen(true)}
              className="text-blue-400 hover:text-blue-300 font-bold hover:underline flex items-center gap-1 tap-effect"
            >
              <Settings2 className="w-3 h-3" />
              <span>{t.classConfigBtn}</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
            <div className="flex items-center gap-2 p-2 rounded-xl bg-amber-950/20 border border-amber-500/30">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0" />
              <div className="truncate">
                <span className="text-amber-300 font-bold">{t.houseShirt}</span>
                <span className="text-[10px] text-amber-400/80 block">{lang === 'zh' ? 'Day 7 (固定學院服)' : lang === 'th' ? 'Day 7 (เสื้อบ้าน)' : 'Day 7 (Fixed House)'}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-blue-950/20 border border-blue-500/30">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 flex-shrink-0" />
              <div className="truncate">
                <span className="text-blue-300 font-bold">{t.uniform}</span>
                <span className="text-[10px] text-blue-400/80 block">{lang === 'zh' ? '一般校服日' : lang === 'th' ? 'ชุดนักเรียน' : 'Uniform Days'}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 flex-shrink-0" />
              <div className="truncate">
                <span className="text-emerald-300 font-bold">{t.pe}</span>
                <span className="text-[10px] text-emerald-400/80 block">{lang === 'zh' ? '體育課日' : lang === 'th' ? 'เรียนพละ' : 'PE Days'}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-cyan-950/20 border border-cyan-500/30">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 flex-shrink-0" />
              <div className="truncate">
                {swimDayNum ? (
                  <>
                    <span className="text-cyan-300 font-bold">{lang === 'zh' ? '攜帶游泳裝備' : lang === 'th' ? 'เตรียมชุดว่ายน้ำ' : 'Swim Gear'}</span>
                    <span className="text-[10px] text-cyan-400/80 block">{lang === 'zh' ? `Day ${swimDayNum} 游泳` : lang === 'th' ? `Day ${swimDayNum} ว่ายน้ำ` : `Day ${swimDayNum} Swim`}</span>
                  </>
                ) : (
                  <>
                    <span className="text-slate-300 font-bold">{t.noSwimmingShort}</span>
                    <span className="text-[10px] text-slate-400 block">{lang === 'zh' ? '高年級無泳課' : lang === 'th' ? 'ระดับชั้นโต' : 'Upper Grades'}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Dynamic Class Configuration Setup Modal */}
      <ClassConfigModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
        classConfig={classConfig}
        onSaveConfig={handleSaveClassConfig}
        lang={lang}
      />

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-4 text-center text-xs text-slate-500 space-y-1.5 pt-6">
        <div>International School Calendar & Uniform Notifier - 2026 Term 1</div>
        <div className="text-[11px] text-slate-600">
          October - December 2026 - 8-Day Rotation Cycle - Multi-language Support (EN / TH / 繁中)
        </div>
      </footer>
    </div>
  );
}
