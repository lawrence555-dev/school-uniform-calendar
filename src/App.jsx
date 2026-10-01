import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  Shirt, 
  Sparkles, 
  BookOpen, 
  List, 
  CheckCircle2, 
  Waves, 
  Flame, 
  Activity, 
  Sun,
  ChevronRight,
  Info
} from 'lucide-react';
import HeaderNavbar from './components/HeaderNavbar';
import TodayHeroBanner from './components/TodayHeroBanner';
import MonthSelector from './components/MonthSelector';
import CalendarGridView from './components/CalendarGridView';
import ScheduleListView from './components/ScheduleListView';
import FilterBar from './components/FilterBar';
import UniformGuideModal from './components/UniformGuideModal';
import { translations } from './translations/i18n';
import { calendarSchedule, uniformMeta } from './data/calendarData';

export default function App() {
  const [lang, setLang] = useState('zh');
  const [selectedMonth, setSelectedMonth] = useState(10); // 10 = Oct, 11 = Nov, 12 = Dec
  const [selectedDateStr, setSelectedDateStr] = useState('2026-10-01');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [filterType, setFilterType] = useState('all');
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  // When selectedDateStr changes, keep selectedMonth in sync
  useEffect(() => {
    const item = calendarSchedule.find((d) => d.dateStr === selectedDateStr);
    if (item && item.month !== selectedMonth) {
      setSelectedMonth(item.month);
    }
  }, [selectedDateStr]);

  const t = translations[lang] || translations.zh;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Header & Language Switcher */}
      <HeaderNavbar 
        lang={lang} 
        setLang={setLang} 
        onOpenGuide={() => setIsGuideOpen(true)} 
      />

      {/* Main Container (Mobile First, max-w-3xl) */}
      <main className="max-w-3xl mx-auto px-3.5 sm:px-6 py-5 sm:py-8 space-y-6">
        
        {/* Prominent Live Dress Code Hero Banner (Defaults to 2026-10-01 Day 7 ➔ House Shirt) */}
        <section>
          <TodayHeroBanner
            selectedDateStr={selectedDateStr}
            setSelectedDateStr={setSelectedDateStr}
            lang={lang}
            onOpenGuide={() => setIsGuideOpen(true)}
          />
        </section>

        {/* Month Selector Tabs & Monthly Metrics */}
        <section>
          <MonthSelector
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
            viewMode={viewMode}
            setViewMode={setViewMode}
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
              selectedMonth={selectedMonth}
              selectedDateStr={selectedDateStr}
              setSelectedDateStr={setSelectedDateStr}
              filterType={filterType}
              lang={lang}
            />
          ) : (
            <ScheduleListView
              selectedMonth={selectedMonth}
              selectedDateStr={selectedDateStr}
              setSelectedDateStr={setSelectedDateStr}
              filterType={filterType}
              lang={lang}
            />
          )}
        </section>

        {/* Quick Uniform Legend Card */}
        <section className="glass-card rounded-2xl p-4 border border-slate-800/80 shadow-lg text-xs text-slate-400 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-blue-400" />
              <span>{lang === 'zh' ? '制服顏色標示' : lang === 'th' ? 'สัญลักษณ์สีเครื่องแบบ' : 'Uniform Color Legend'}</span>
            </span>
            <button
              onClick={() => setIsGuideOpen(true)}
              className="text-blue-400 hover:text-blue-300 font-bold hover:underline"
            >
              {t.uniformGuideBtn} ➔
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
            <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0" />
              <span className="text-slate-300 truncate">{t.houseShirt} (Day 7)</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 flex-shrink-0" />
              <span className="text-slate-300 truncate">{t.uniform} (Day 2/4/6/8)</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 flex-shrink-0" />
              <span className="text-slate-300 truncate">{t.pe} (Day 1/3)</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 flex-shrink-0" />
              <span className="text-slate-300 truncate">{t.peSwimming} (Day 5)</span>
            </div>
          </div>
        </section>

      </main>

      {/* Uniform Guide Modal */}
      <UniformGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        lang={lang}
      />

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-4 text-center text-xs text-slate-500 space-y-1.5 pt-6">
        <div>International School Calendar & Uniform Notifier • 2026 Term 1</div>
        <div className="text-[11px] text-slate-600">
          October – December 2026 • 8-Day Rotation Cycle • Multi-language Support (EN / TH / 繁中)
        </div>
      </footer>
    </div>
  );
}
