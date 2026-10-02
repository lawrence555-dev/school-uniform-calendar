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
  CircleOff,
  Users
} from 'lucide-react';
import HeaderNavbar from './components/HeaderNavbar';
import TodayHeroBanner from './components/TodayHeroBanner';
import MonthSelector from './components/MonthSelector';
import CalendarGridView from './components/CalendarGridView';
import ScheduleListView from './components/ScheduleListView';
import FilterBar from './components/FilterBar';
import ClassConfigModal from './components/ClassConfigModal';
import { translations } from './translations/i18n';
import { 
  classPresets, 
  buildDynamicCalendar, 
  uniformMeta, 
  getTodayDateStr, 
  defaultChildrenProfiles,
  childColorThemes 
} from './data/calendarData';

const CHILDREN_STORAGE_KEY = 'school_children_profiles_v1';
const LEGACY_STORAGE_KEY = 'school_class_uniform_config_v3';

export default function App() {
  const [lang, setLang] = useState('zh');
  
  // Real today date string (e.g. '2026-10-02')
  const todayStr = useMemo(() => getTodayDateStr(), []);

  // Determine initial month based on today's month if in school year [10, 11, 12, 1, 2, 3, 4, 5, 6]
  const initialMonth = useMemo(() => {
    const todayMonth = new Date().getMonth() + 1;
    const validMonths = [10, 11, 12, 1, 2, 3, 4, 5, 6];
    return validMonths.includes(todayMonth) ? todayMonth : 10;
  }, []);

  const [selectedMonth, setSelectedMonth] = useState(initialMonth);
  const [selectedDateStr, setSelectedDateStr] = useState(todayStr);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [filterType, setFilterType] = useState('all');
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  // Initialize Children Profiles from localStorage, with legacy migration support
  const [childrenProfiles, setChildrenProfiles] = useState(() => {
    try {
      const savedProfiles = localStorage.getItem(CHILDREN_STORAGE_KEY);
      if (savedProfiles) {
        const parsed = JSON.parse(savedProfiles);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }

      // Check legacy single-child configuration
      const legacySaved = localStorage.getItem(LEGACY_STORAGE_KEY);
      if (legacySaved) {
        const legacyParsed = JSON.parse(legacySaved);
        if (legacyParsed && (legacyParsed.id === 'odd_pe' || legacyParsed.id === 'even_pe')) {
          return [
            {
              id: 'child_1',
              name: '大寶 Leo',
              color: 'blue',
              presetId: legacyParsed.id,
              swimmingDay: legacyParsed.swimmingDay ?? 5
            }
          ];
        }
      }
    } catch (e) {
      console.warn('Failed to load children profiles from storage:', e);
    }
    return defaultChildrenProfiles;
  });

  // Selected Child View Filter: 'all' | specific childId
  const [selectedChildId, setSelectedChildId] = useState('all');

  // Prompt user to configure children profiles on first open if never set
  useEffect(() => {
    try {
      const hasConfigured = localStorage.getItem(CHILDREN_STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
      if (!hasConfigured) {
        setIsConfigModalOpen(true);
      }
    } catch (e) {
      // ignore localStorage errors
    }
  }, []);

  // Dynamically compute calendar schedules map for all children
  const childrenSchedules = useMemo(() => {
    const map = {};
    childrenProfiles.forEach((child) => {
      map[child.id] = buildDynamicCalendar(child);
    });
    return map;
  }, [childrenProfiles]);

  // Primary active schedule for single child mode
  const activeCalendarSchedule = useMemo(() => {
    if (selectedChildId !== 'all' && childrenSchedules[selectedChildId]) {
      return childrenSchedules[selectedChildId];
    }
    const firstChildId = childrenProfiles[0]?.id;
    return (firstChildId && childrenSchedules[firstChildId]) || buildDynamicCalendar(defaultChildrenProfiles[0]);
  }, [selectedChildId, childrenSchedules, childrenProfiles]);

  // Handlers
  const handleSelectMonth = (month) => {
    setSelectedMonth(month);
  };

  const handleSelectDate = (dateStr) => {
    setSelectedDateStr(dateStr);
  };

  const handleSaveChildrenProfiles = (newProfiles) => {
    setChildrenProfiles(newProfiles);
    try {
      localStorage.setItem(CHILDREN_STORAGE_KEY, JSON.stringify(newProfiles));
    } catch (e) {
      console.warn('Failed to persist children profiles:', e);
    }

    // If active selectedChildId is no longer in newProfiles, reset to 'all'
    if (selectedChildId !== 'all' && !newProfiles.some((p) => p.id === selectedChildId)) {
      setSelectedChildId('all');
    }
  };

  const t = translations[lang] || translations.zh;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Header & Language Switcher */}
      <HeaderNavbar 
        lang={lang} 
        setLang={setLang} 
        onOpenClassConfig={() => setIsConfigModalOpen(true)}
        childrenProfiles={childrenProfiles}
      />

      {/* Main Container (Mobile First, max-w-3xl) */}
      <main className="max-w-3xl mx-auto px-3.5 sm:px-6 py-5 sm:py-8 space-y-6">
        
        {/* Prominent Live Dress Code Hero Banner */}
        <section>
          <TodayHeroBanner
            selectedDateStr={selectedDateStr}
            setSelectedDateStr={handleSelectDate}
            calendarSchedule={activeCalendarSchedule}
            childrenProfiles={childrenProfiles}
            childrenSchedules={childrenSchedules}
            selectedChildId={selectedChildId}
            onOpenClassConfig={() => setIsConfigModalOpen(true)}
            todayDateStr={todayStr}
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
            calendarSchedule={activeCalendarSchedule}
            childrenProfiles={childrenProfiles}
            selectedChildId={selectedChildId}
            setSelectedChildId={setSelectedChildId}
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
              calendarSchedule={activeCalendarSchedule}
              childrenProfiles={childrenProfiles}
              childrenSchedules={childrenSchedules}
              selectedChildId={selectedChildId}
              selectedMonth={selectedMonth}
              selectedDateStr={selectedDateStr}
              setSelectedDateStr={handleSelectDate}
              todayDateStr={todayStr}
              filterType={filterType}
              lang={lang}
            />
          ) : (
            <ScheduleListView
              calendarSchedule={activeCalendarSchedule}
              childrenProfiles={childrenProfiles}
              childrenSchedules={childrenSchedules}
              selectedChildId={selectedChildId}
              selectedMonth={selectedMonth}
              selectedDateStr={selectedDateStr}
              setSelectedDateStr={handleSelectDate}
              todayDateStr={todayStr}
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
                <span className="text-cyan-300 font-bold">{lang === 'zh' ? '攜帶游泳裝備' : lang === 'th' ? 'เตรียมชุดว่ายน้ำ' : 'Swim Gear'}</span>
                <span className="text-[10px] text-cyan-400/80 block">{lang === 'zh' ? '有泳課之週期日' : lang === 'th' ? 'วันที่มีเรียนว่ายน้ำ' : 'Designated Swim Day'}</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Dynamic Class & Multi-Child Configuration Setup Modal */}
      <ClassConfigModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
        childrenProfiles={childrenProfiles}
        onSaveChildren={handleSaveChildrenProfiles}
        lang={lang}
      />

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-4 text-center text-xs text-slate-500 space-y-1.5 pt-6">
        <div>International School Calendar & Uniform Notifier - 2026 / 2027</div>
        <div className="text-[11px] text-slate-600">
          October 2026 - June 2027 - 8-Day Rotation Cycle - Multi-Child Support - Multi-language (EN / TH / 繁中)
        </div>
      </footer>

    </div>
  );
}
