import React from 'react';
import { Shirt, Globe, BookOpen, Sparkles, Calendar as CalendarIcon } from 'lucide-react';
import { translations } from '../translations/i18n';

export default function HeaderNavbar({ lang, setLang, onOpenGuide }) {
  const t = translations[lang] || translations.zh;

  const languages = [
    { code: 'zh', label: '繁中', full: '繁體中文' },
    { code: 'en', label: 'EN', full: 'English' },
    { code: 'th', label: 'ไทย', full: 'ภาษาไทย' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* School Crest / Branding */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0">
            <Shirt className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm sm:text-base font-bold text-white tracking-tight">
                {t.appTitle}
              </h1>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                2026 TERM 1
              </span>
            </div>
            <p className="text-[11px] text-slate-400 truncate max-w-[240px] sm:max-w-md">
              {t.appSubtitle}
            </p>
          </div>
        </div>

        {/* Right Actions: Guide Button + Language Switcher */}
        <div className="flex items-center gap-2">
          {/* Uniform Guide Modal Trigger */}
          <button
            onClick={onOpenGuide}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition shadow-xs tap-effect"
            title={t.uniformGuideBtn}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.uniformGuideBtn}</span>
          </button>

          {/* Language Selector */}
          <div className="flex items-center bg-slate-900 border border-slate-800 p-1 rounded-xl shadow-xs">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition tap-effect ${
                  lang === l.code
                    ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
