import React from 'react';
import { Shirt, Globe, Settings2, Sparkles, Calendar as CalendarIcon, Users, User } from 'lucide-react';
import { translations } from '../translations/i18n';

export default function HeaderNavbar({ lang, setLang, onOpenClassConfig, childrenProfiles = [] }) {
  const t = translations[lang] || translations.zh;

  const languages = [
    { code: 'zh', short: '中', label: '繁中', full: '繁體中文' },
    { code: 'en', short: 'EN', label: 'EN', full: 'English' },
    { code: 'th', short: 'TH', label: 'ไทย', full: 'ภาษาไทย' },
  ];

  const hasMultipleChildren = childrenProfiles.length > 1;

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2">
        {/* School Crest / Branding */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0">
            <Shirt className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h1 className="text-xs sm:text-base font-bold text-white tracking-tight truncate">
                {t.appTitle}
              </h1>
              <span className="hidden md:inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                2026-2027
              </span>
            </div>
            <p className="hidden sm:block text-[11px] text-slate-400 truncate max-w-md">
              {t.appSubtitle}
            </p>
          </div>
        </div>

        {/* Right Actions: Children Setup Button + Language Switcher */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          {/* Children Setup Modal Trigger */}
          <button
            onClick={onOpenClassConfig}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600/20 to-indigo-600/20 hover:from-blue-600/30 hover:to-indigo-600/30 text-blue-300 border border-blue-500/30 transition shadow-xs tap-effect"
            title={t.classConfigBtn}
          >
            {hasMultipleChildren ? (
              <Users className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
            ) : (
              <Settings2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
            )}
            <span className="hidden sm:inline">
              {hasMultipleChildren ? `${childrenProfiles.length} ${t.childrenCount}` : t.classConfigBtn}
            </span>
            <span className="sm:hidden">
              {hasMultipleChildren ? `${childrenProfiles.length}人` : (lang === 'zh' ? '設定' : lang === 'th' ? 'ตั้งค่า' : 'Setup')}
            </span>
          </button>

          {/* Language Selector */}
          <div className="flex items-center bg-slate-900 border border-slate-800 p-0.5 sm:p-1 rounded-xl shadow-xs">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2 py-1 sm:px-2.5 sm:py-1 rounded-lg text-[11px] sm:text-xs font-semibold transition tap-effect ${
                  lang === l.code
                    ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="sm:hidden">{l.short}</span>
                <span className="hidden sm:inline">{l.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
