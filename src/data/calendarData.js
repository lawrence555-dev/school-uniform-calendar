export const uniformMeta = {
  house_shirt: {
    key: 'house_shirt',
    nameKey: 'houseShirt',
    descKey: 'houseShirtDesc',
    color: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    badgeColor: 'bg-amber-500 text-slate-950 font-bold',
    dotColor: 'bg-amber-400',
    heroBg: 'from-amber-950/40 via-slate-900 to-slate-950 border-amber-500/30',
    iconType: 'house'
  },
  uniform: {
    key: 'uniform',
    nameKey: 'uniform',
    descKey: 'uniformDesc',
    color: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    badgeColor: 'bg-blue-600 text-white font-bold',
    dotColor: 'bg-blue-400',
    heroBg: 'from-blue-950/40 via-slate-900 to-slate-950 border-blue-500/30',
    iconType: 'uniform'
  },
  uniform_swimming: {
    key: 'uniform_swimming',
    nameKey: 'uniformSwimming',
    descKey: 'uniformSwimmingDesc',
    color: 'bg-blue-500/15 text-blue-300 border-cyan-500/40',
    badgeColor: 'bg-blue-600 text-white font-bold',
    dotColor: 'bg-cyan-400',
    heroBg: 'from-blue-950/50 via-slate-900 to-slate-950 border-cyan-500/40',
    iconType: 'uniform_swimming'
  },
  pe: {
    key: 'pe',
    nameKey: 'peDesc',
    descKey: 'peDesc',
    color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    badgeColor: 'bg-emerald-600 text-white font-bold',
    dotColor: 'bg-emerald-400',
    heroBg: 'from-emerald-950/40 via-slate-900 to-slate-950 border-emerald-500/30',
    iconType: 'pe'
  },
  pe_swimming: {
    key: 'pe_swimming',
    nameKey: 'peSwimming',
    descKey: 'peSwimmingDesc',
    color: 'bg-emerald-500/15 text-emerald-300 border-cyan-500/40',
    badgeColor: 'bg-emerald-600 text-white font-bold',
    dotColor: 'bg-cyan-400',
    heroBg: 'from-emerald-950/50 via-slate-900 to-slate-950 border-cyan-500/40',
    iconType: 'pe_swimming'
  },
  holiday: {
    key: 'holiday',
    nameKey: 'holiday',
    descKey: 'holidayDesc',
    color: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
    badgeColor: 'bg-rose-600 text-white font-bold',
    dotColor: 'bg-rose-400',
    heroBg: 'from-rose-950/40 via-slate-900 to-slate-950 border-rose-500/30',
    iconType: 'holiday'
  },
  weekend: {
    key: 'weekend',
    nameKey: 'weekend',
    descKey: 'holidayDesc',
    color: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
    badgeColor: 'bg-rose-600 text-white font-bold',
    dotColor: 'bg-rose-400',
    heroBg: 'from-rose-950/40 via-slate-900 to-slate-950 border-rose-500/30',
    iconType: 'holiday'
  }
};

// Preset Configurations for 8-Day Cycle (Odd / Even)
export const classPresets = {
  odd_pe: {
    id: 'odd_pe',
    nameKey: 'presetOdd',
    descKey: 'presetOddDesc',
    swimmingDay: 5
  },
  even_pe: {
    id: 'even_pe',
    nameKey: 'presetEven',
    descKey: 'presetEvenDesc',
    swimmingDay: 6
  }
};

// Color Themes for Children Profiles
export const childColorThemes = {
  blue: {
    id: 'blue',
    nameKey: 'colorBlue',
    colorName: 'blue',
    bgLight: 'bg-blue-500/20',
    border: 'border-blue-500/40',
    text: 'text-blue-300',
    dot: 'bg-blue-400',
    ring: 'ring-blue-500/40',
    badgeBg: 'bg-blue-600 text-white',
    heroBg: 'from-blue-950/40 via-slate-900 to-slate-950 border-blue-500/30'
  },
  rose: {
    id: 'rose',
    nameKey: 'colorRose',
    colorName: 'rose',
    bgLight: 'bg-rose-500/20',
    border: 'border-rose-500/40',
    text: 'text-rose-300',
    dot: 'bg-rose-400',
    ring: 'ring-rose-500/40',
    badgeBg: 'bg-rose-600 text-white',
    heroBg: 'from-rose-950/40 via-slate-900 to-slate-950 border-rose-500/30'
  },
  emerald: {
    id: 'emerald',
    nameKey: 'colorEmerald',
    colorName: 'emerald',
    bgLight: 'bg-emerald-500/20',
    border: 'border-emerald-500/40',
    text: 'text-emerald-300',
    dot: 'bg-emerald-400',
    ring: 'ring-emerald-500/40',
    badgeBg: 'bg-emerald-600 text-white',
    heroBg: 'from-emerald-950/40 via-slate-900 to-slate-950 border-emerald-500/30'
  },
  amber: {
    id: 'amber',
    nameKey: 'colorAmber',
    colorName: 'amber',
    bgLight: 'bg-amber-500/20',
    border: 'border-amber-500/40',
    text: 'text-amber-300',
    dot: 'bg-amber-400',
    ring: 'ring-amber-500/40',
    badgeBg: 'bg-amber-600 text-white',
    heroBg: 'from-amber-950/40 via-slate-900 to-slate-950 border-amber-500/30'
  },
  purple: {
    id: 'purple',
    nameKey: 'colorPurple',
    colorName: 'purple',
    bgLight: 'bg-purple-500/20',
    border: 'border-purple-500/40',
    text: 'text-purple-300',
    dot: 'bg-purple-400',
    ring: 'ring-purple-500/40',
    badgeBg: 'bg-purple-600 text-white',
    heroBg: 'from-purple-950/40 via-slate-900 to-slate-950 border-purple-500/30'
  }
};

export const defaultChildrenProfiles = [
  {
    id: 'child_1',
    name: '大寶 Leo',
    color: 'blue',
    presetId: 'odd_pe',
    swimmingDay: 5,
    houseDay: 7
  }
];

/**
 * Calculates base uniform and optional swimming combination for any cycle day (1 to 8)
 * House shirt day is configurable per child (default Day 7, or custom Day 1-8 / null).
 * Swimming day is optional (can be null/none for older students).
 */
export function getCycleDayUniform(cycleDay, presetId = 'odd_pe', swimmingDay = 5, houseDay = 7) {
  const hasValidHouse = houseDay !== null && houseDay !== undefined && Number(houseDay) > 0;
  const targetHouseDay = hasValidHouse ? Number(houseDay) : null;

  // Designated House Shirt cycle day takes precedence
  if (targetHouseDay !== null && cycleDay === targetHouseDay) {
    return 'house_shirt';
  }

  // Determine scheduled base attire for this cycle day
  let baseUniform;
  if (presetId === 'even_pe') {
    baseUniform = (cycleDay === 2 || cycleDay === 4 || cycleDay === 6 || cycleDay === 8) ? 'pe' : 'uniform';
  } else {
    // default: odd_pe (Days 1, 3, 5, 7 are PE, Days 2, 4, 6, 8 are Uniform)
    baseUniform = (cycleDay === 1 || cycleDay === 3 || cycleDay === 5 || cycleDay === 7) ? 'pe' : 'uniform';
  }

  // If a valid swimming day is designated (Day 4, 5, or 6, etc.)
  if (swimmingDay && Number(swimmingDay) > 0 && cycleDay === Number(swimmingDay)) {
    return baseUniform === 'pe' ? 'pe_swimming' : 'uniform_swimming';
  }

  return baseUniform;
}

// Base Calendar Dates & Events for Oct, Nov, Dec 2026
export const rawCalendarStructure = [
  // ==========================================
  // 2026年 10月 (October 2026)
  // ==========================================
  { dateStr: '2026-10-01', year: 2026, month: 10, day: 1, weekdayIndex: 4, cycleDay: 7, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-10-02', year: 2026, month: 10, day: 2, weekdayIndex: 5, cycleDay: 8, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-10-03', year: 2026, month: 10, day: 3, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2026-10-04', year: 2026, month: 10, day: 4, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2026-10-05', year: 2026, month: 10, day: 5, weekdayIndex: 1, cycleDay: 1, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-10-06', year: 2026, month: 10, day: 6, weekdayIndex: 2, cycleDay: 2, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-10-07', year: 2026, month: 10, day: 7, weekdayIndex: 3, cycleDay: 3, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-10-08', year: 2026, month: 10, day: 8, weekdayIndex: 4, cycleDay: 4, isHoliday: false, isWeekend: false, event: null },
  { 
    dateStr: '2026-10-09', year: 2026, month: 10, day: 9, weekdayIndex: 5, cycleDay: 5, isHoliday: false, isWeekend: false,
    event: { zh: '第一季度結束', en: 'End of Quarter 1', th: 'สิ้นสุดไตรมาสที่ 1 (End of Q1)' }
  },
  // Fall Break 10/10 - 10/18
  { dateStr: '2026-10-10', year: 2026, month: 10, day: 10, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2026-10-11', year: 2026, month: 10, day: 11, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2026-10-12', year: 2026, month: 10, day: 12, weekdayIndex: 1, cycleDay: null, isHoliday: true, isWeekend: false, event: { zh: '秋季放假 (不上課)', en: 'Fall Break (No School)', th: 'วันหยุดฤดูใบไม้ร่วง (Fall Break)' } },
  { dateStr: '2026-10-13', year: 2026, month: 10, day: 13, weekdayIndex: 2, cycleDay: null, isHoliday: true, isWeekend: false, event: { zh: '秋季放假 (不上課)', en: 'Fall Break (No School)', th: 'วันหยุดฤดูใบไม้ร่วง (Fall Break)' } },
  { dateStr: '2026-10-14', year: 2026, month: 10, day: 14, weekdayIndex: 3, cycleDay: null, isHoliday: true, isWeekend: false, event: { zh: '秋季放假 (不上課)', en: 'Fall Break (No School)', th: 'วันหยุดฤดูใบไม้ร่วง (Fall Break)' } },
  { dateStr: '2026-10-15', year: 2026, month: 10, day: 15, weekdayIndex: 4, cycleDay: null, isHoliday: true, isWeekend: false, event: { zh: '秋季放假 (不上課)', en: 'Fall Break (No School)', th: 'วันหยุดฤดูใบไม้ร่วง (Fall Break)' } },
  { dateStr: '2026-10-16', year: 2026, month: 10, day: 16, weekdayIndex: 5, cycleDay: null, isHoliday: true, isWeekend: false, event: { zh: '秋季放假 (不上課)', en: 'Fall Break (No School)', th: 'วันหยุดฤดูใบไม้ร่วง (Fall Break)' } },
  { dateStr: '2026-10-17', year: 2026, month: 10, day: 17, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2026-10-18', year: 2026, month: 10, day: 18, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { 
    dateStr: '2026-10-19', year: 2026, month: 10, day: 19, weekdayIndex: 1, cycleDay: null, isHoliday: true, isWeekend: false,
    event: { zh: '泰王九世逝世紀念日補假 (不上課)', en: 'King Bhumibol Memorial Day Observed (No School)', th: 'วันหยุดชดเชยวันคล้ายวันสวรรคต ร.9 (ไม่มีเรียน)' }
  },
  { 
    dateStr: '2026-10-20', year: 2026, month: 10, day: 20, weekdayIndex: 2, cycleDay: 6, isHoliday: false, isWeekend: false,
    event: { zh: '第二季度開始 / 恢復上課', en: 'Start of Quarter 2 (Classes Resume)', th: 'เริ่มต้นไตรมาสที่ 2 / เปิดเรียนปกติ' }
  },
  { 
    dateStr: '2026-10-21', year: 2026, month: 10, day: 21, weekdayIndex: 3, cycleDay: 7, isHoliday: false, isWeekend: false,
    event: { zh: '發放第一季度成績單', en: 'Quarter 1 Progress Reports Issued', th: 'แจกสมุดรายงานผลการเรียนไตรมาสที่ 1' }
  },
  { dateStr: '2026-10-22', year: 2026, month: 10, day: 22, weekdayIndex: 4, cycleDay: 8, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-10-23', year: 2026, month: 10, day: 23, weekdayIndex: 5, cycleDay: 1, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-10-24', year: 2026, month: 10, day: 24, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2026-10-25', year: 2026, month: 10, day: 25, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2026-10-26', year: 2026, month: 10, day: 26, weekdayIndex: 1, cycleDay: 2, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-10-27', year: 2026, month: 10, day: 27, weekdayIndex: 2, cycleDay: 3, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-10-28', year: 2026, month: 10, day: 28, weekdayIndex: 3, cycleDay: 4, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-10-29', year: 2026, month: 10, day: 29, weekdayIndex: 4, cycleDay: 5, isHoliday: false, isWeekend: false, event: null },
  { 
    dateStr: '2026-10-30', year: 2026, month: 10, day: 30, weekdayIndex: 5, cycleDay: 6, isHoliday: false, isWeekend: false,
    event: { zh: '萬聖節慶祝活動', en: 'Halloween Celebrations', th: 'กิจกรรมฉลองเทศกาลฮาโลวีน (Halloween)' }
  },
  { dateStr: '2026-10-31', year: 2026, month: 10, day: 31, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },

  // ==========================================
  // 2026年 11月 (November 2026)
  // ==========================================
  { dateStr: '2026-11-01', year: 2026, month: 11, day: 1, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2026-11-02', year: 2026, month: 11, day: 2, weekdayIndex: 1, cycleDay: 7, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-11-03', year: 2026, month: 11, day: 3, weekdayIndex: 2, cycleDay: 8, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-11-04', year: 2026, month: 11, day: 4, weekdayIndex: 3, cycleDay: 1, isHoliday: false, isWeekend: false, event: null },
  { 
    dateStr: '2026-11-05', year: 2026, month: 11, day: 5, weekdayIndex: 4, cycleDay: 2, isHoliday: false, isWeekend: false,
    event: { zh: '三方親師座談會', en: 'Three Way Conferences', th: 'การประชุมสามฝ่ายผู้ปกครอง-ครู-นักเรียน' }
  },
  { 
    dateStr: '2026-11-06', year: 2026, month: 11, day: 6, weekdayIndex: 5, cycleDay: 3, isHoliday: false, isWeekend: false,
    event: { zh: '三方親師座談會', en: 'Three Way Conferences', th: 'การประชุมสามฝ่ายผู้ปกครอง-ครู-นักเรียน' }
  },
  { dateStr: '2026-11-07', year: 2026, month: 11, day: 7, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2026-11-08', year: 2026, month: 11, day: 8, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { 
    dateStr: '2026-11-09', year: 2026, month: 11, day: 9, weekdayIndex: 1, cycleDay: null, isHoliday: true, isWeekend: false,
    event: { zh: '教職員進修日 (學生放假不上課)', en: 'Faculty PD Day (No School for Students)', th: 'วันพัฒนาบุคลากรครู (นักเรียนหยุดเรียน)' }
  },
  { dateStr: '2026-11-10', year: 2026, month: 11, day: 10, weekdayIndex: 2, cycleDay: 4, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-11-11', year: 2026, month: 11, day: 11, weekdayIndex: 3, cycleDay: 5, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-11-12', year: 2026, month: 11, day: 12, weekdayIndex: 4, cycleDay: 6, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-11-13', year: 2026, month: 11, day: 13, weekdayIndex: 5, cycleDay: 7, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-11-14', year: 2026, month: 11, day: 14, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2026-11-15', year: 2026, month: 11, day: 15, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2026-11-16', year: 2026, month: 11, day: 16, weekdayIndex: 1, cycleDay: 8, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-11-17', year: 2026, month: 11, day: 17, weekdayIndex: 2, cycleDay: 1, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-11-18', year: 2026, month: 11, day: 18, weekdayIndex: 3, cycleDay: 2, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-11-19', year: 2026, month: 11, day: 19, weekdayIndex: 4, cycleDay: 3, isHoliday: false, isWeekend: false, event: null },
  { 
    dateStr: '2026-11-20', year: 2026, month: 11, day: 20, weekdayIndex: 5, cycleDay: 4, isHoliday: false, isWeekend: false,
    event: { zh: '國際美食節與感恩節活動', en: 'Food Fiesta & Thanksgiving', th: 'เทศกาลอาหารนานาชาติและวันขอบคุณพระเจ้า' }
  },
  { dateStr: '2026-11-21', year: 2026, month: 11, day: 21, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2026-11-22', year: 2026, month: 11, day: 22, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2026-11-23', year: 2026, month: 11, day: 23, weekdayIndex: 1, cycleDay: 5, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-11-24', year: 2026, month: 11, day: 24, weekdayIndex: 2, cycleDay: 6, isHoliday: false, isWeekend: false, event: null },
  { 
    dateStr: '2026-11-25', year: 2026, month: 11, day: 25, weekdayIndex: 3, cycleDay: 7, isHoliday: false, isWeekend: false,
    event: { zh: '水燈節慶祝活動', en: 'Loy Krathong Celebrations', th: 'กิจกรรมประเพณีลอยกระทง (Loy Krathong)' }
  },
  { dateStr: '2026-11-26', year: 2026, month: 11, day: 26, weekdayIndex: 4, cycleDay: 8, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-11-27', year: 2026, month: 11, day: 27, weekdayIndex: 5, cycleDay: 1, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-11-28', year: 2026, month: 11, day: 28, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2026-11-29', year: 2026, month: 11, day: 29, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2026-11-30', year: 2026, month: 11, day: 30, weekdayIndex: 1, cycleDay: 2, isHoliday: false, isWeekend: false, event: null },

  // ==========================================
  // 2026年 12月 (December 2026)
  // ==========================================
  { dateStr: '2026-12-01', year: 2026, month: 12, day: 1, weekdayIndex: 2, cycleDay: 3, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-12-02', year: 2026, month: 12, day: 2, weekdayIndex: 3, cycleDay: 4, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-12-03', year: 2026, month: 12, day: 3, weekdayIndex: 4, cycleDay: 5, isHoliday: false, isWeekend: false, event: null },
  { 
    dateStr: '2026-12-04', year: 2026, month: 12, day: 4, weekdayIndex: 5, cycleDay: 6, isHoliday: false, isWeekend: false,
    event: { zh: '泰國父親節慶祝活動', en: 'National Father\'s Day Celebrations', th: 'กิจกรรมวันพ่อแห่งชาติ (Father\'s Day)' }
  },
  { dateStr: '2026-12-05', year: 2026, month: 12, day: 5, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2026-12-06', year: 2026, month: 12, day: 6, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { 
    dateStr: '2026-12-07', year: 2026, month: 12, day: 7, weekdayIndex: 1, cycleDay: null, isHoliday: true, isWeekend: false,
    event: { zh: '泰王九世誕辰紀念日補假 (不上課)', en: 'King Bhumibol Birthday Observed (No School)', th: 'วันหยุดชดเชยวันคล้ายวันพระราชสมภพ ร.9 (ไม่มีเรียน)' }
  },
  { dateStr: '2026-12-08', year: 2026, month: 12, day: 8, weekdayIndex: 2, cycleDay: 7, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-12-09', year: 2026, month: 12, day: 9, weekdayIndex: 3, cycleDay: 8, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-12-10', year: 2026, month: 12, day: 10, weekdayIndex: 4, cycleDay: 1, isHoliday: false, isWeekend: false, event: null },
  { 
    dateStr: '2026-12-11', year: 2026, month: 12, day: 11, weekdayIndex: 5, cycleDay: 2, isHoliday: false, isWeekend: false,
    event: { zh: '第一學期課後社團活動結束', en: 'After School Activities (ASA) End', th: 'สิ้นสุดกิจกรรมหลังเลิกเรียน ภาคเรียนที่ 1' }
  },
  { dateStr: '2026-12-12', year: 2026, month: 12, day: 12, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2026-12-13', year: 2026, month: 12, day: 13, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2026-12-14', year: 2026, month: 12, day: 14, weekdayIndex: 1, cycleDay: 3, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-12-15', year: 2026, month: 12, day: 15, weekdayIndex: 2, cycleDay: 4, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-12-16', year: 2026, month: 12, day: 16, weekdayIndex: 3, cycleDay: 5, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2026-12-17', year: 2026, month: 12, day: 17, weekdayIndex: 4, cycleDay: 6, isHoliday: false, isWeekend: false, event: null },
  { 
    dateStr: '2026-12-18', year: 2026, month: 12, day: 18, weekdayIndex: 5, cycleDay: 7, isHoliday: false, isWeekend: false,
    event: { zh: '聖誕節活動 (中午 12:00 提早放學) / 第一學期結束', en: 'Christmas Celebrations (12:00 Early Dismissal) / End of Semester 1', th: 'กิจกรรมคริสต์มาส (เลิกเรียน 12:00 น.) / ปิดภาคเรียนที่ 1' }
  },
  // Winter Break
  { dateStr: '2026-12-19', year: 2026, month: 12, day: 19, weekdayIndex: 6, cycleDay: null, isHoliday: true, isWeekend: false, event: { zh: '寒假開始 (Winter Break)', en: 'Winter Break Begins', th: 'เริ่มต้นวันหยุดฤดูหนาว' } },
  { dateStr: '2026-12-20', year: 2026, month: 12, day: 20, weekdayIndex: 0, cycleDay: null, isHoliday: true, isWeekend: false, event: null },
  { dateStr: '2026-12-21', year: 2026, month: 12, day: 21, weekdayIndex: 1, cycleDay: null, isHoliday: true, isWeekend: false, event: null },
  { dateStr: '2026-12-22', year: 2026, month: 12, day: 22, weekdayIndex: 2, cycleDay: null, isHoliday: true, isWeekend: false, event: null },
  { dateStr: '2026-12-23', year: 2026, month: 12, day: 23, weekdayIndex: 3, cycleDay: null, isHoliday: true, isWeekend: false, event: null },
  { dateStr: '2026-12-24', year: 2026, month: 12, day: 24, weekdayIndex: 4, cycleDay: null, isHoliday: true, isWeekend: false, event: { zh: '平安夜 (Christmas Eve)', en: 'Christmas Eve', th: 'วันคริสต์มาสอีฟ' } },
  { dateStr: '2026-12-25', year: 2026, month: 12, day: 25, weekdayIndex: 5, cycleDay: null, isHoliday: true, isWeekend: false, event: { zh: '聖誕節 (Christmas Day)', en: 'Christmas Day', th: 'วันคริสต์มาส' } },
  { dateStr: '2026-12-26', year: 2026, month: 12, day: 26, weekdayIndex: 6, cycleDay: null, isHoliday: true, isWeekend: false, event: null },
  { dateStr: '2026-12-27', year: 2026, month: 12, day: 27, weekdayIndex: 0, cycleDay: null, isHoliday: true, isWeekend: false, event: null },
  { dateStr: '2026-12-28', year: 2026, month: 12, day: 28, weekdayIndex: 1, cycleDay: null, isHoliday: true, isWeekend: false, event: null },
  { dateStr: '2026-12-29', year: 2026, month: 12, day: 29, weekdayIndex: 2, cycleDay: null, isHoliday: true, isWeekend: false, event: null },
  { dateStr: '2026-12-30', year: 2026, month: 12, day: 30, weekdayIndex: 3, cycleDay: null, isHoliday: true, isWeekend: false, event: null },
  { dateStr: '2026-12-31', year: 2026, month: 12, day: 31, weekdayIndex: 4, cycleDay: null, isHoliday: true, isWeekend: false, event: { zh: '跨年夜 (New Year\'s Eve)', en: 'New Year\'s Eve', th: 'วันสิ้นปี' } },

  // ==========================================
  // 2027年 1月 (January 2027)
  // ==========================================
  { 
    dateStr: '2027-01-01', year: 2027, month: 1, day: 1, weekdayIndex: 5, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '元旦新年假期 (放假)', en: 'Public Holiday (New Year\'s Day)', th: 'วันหยุดวันขึ้นปีใหม่ (New Year\'s Day)' } 
  },
  { dateStr: '2027-01-02', year: 2027, month: 1, day: 2, weekdayIndex: 6, cycleDay: null, isHoliday: true, isWeekend: true, event: null },
  { dateStr: '2027-01-03', year: 2027, month: 1, day: 3, weekdayIndex: 0, cycleDay: null, isHoliday: true, isWeekend: true, event: null },
  { 
    dateStr: '2027-01-04', year: 2027, month: 1, day: 4, weekdayIndex: 1, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '寒假 (不上課)', en: 'Winter Break (No School)', th: 'วันหยุดฤดูหนาว (Winter Break)' } 
  },
  { 
    dateStr: '2027-01-05', year: 2027, month: 1, day: 5, weekdayIndex: 2, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '寒假 (不上課)', en: 'Winter Break (No School)', th: 'วันหยุดฤดูหนาว (Winter Break)' } 
  },
  { 
    dateStr: '2027-01-06', year: 2027, month: 1, day: 6, weekdayIndex: 3, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '寒假 (不上課)', en: 'Winter Break (No School)', th: 'วันหยุดฤดูหนาว (Winter Break)' } 
  },
  { 
    dateStr: '2027-01-07', year: 2027, month: 1, day: 7, weekdayIndex: 4, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '寒假 (不上課)', en: 'Winter Break (No School)', th: 'วันหยุดฤดูหนาว (Winter Break)' } 
  },
  { 
    dateStr: '2027-01-08', year: 2027, month: 1, day: 8, weekdayIndex: 5, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '寒假 (不上課)', en: 'Winter Break (No School)', th: 'วันหยุดฤดูหนาว (Winter Break)' } 
  },
  { dateStr: '2027-01-09', year: 2027, month: 1, day: 9, weekdayIndex: 6, cycleDay: null, isHoliday: true, isWeekend: true, event: null },
  { dateStr: '2027-01-10', year: 2027, month: 1, day: 10, weekdayIndex: 0, cycleDay: null, isHoliday: true, isWeekend: true, event: null },
  { 
    dateStr: '2027-01-11', year: 2027, month: 1, day: 11, weekdayIndex: 1, cycleDay: 1, isHoliday: false, isWeekend: false, 
    event: { zh: '第三季度 / 第二學期開學 (恢復上課)', en: 'Start of Quarter 3 / Semester 2 (Classes Resume)', th: 'เริ่มต้นไตรมาสที่ 3 / ภาคเรียนที่ 2 (เปิดเรียน)' } 
  },
  { 
    dateStr: '2027-01-12', year: 2027, month: 1, day: 12, weekdayIndex: 2, cycleDay: 2, isHoliday: false, isWeekend: false, 
    event: { zh: '發放第一學期成績單', en: 'Semester 1 Report Cards Released', th: 'แจกสมุดรายงานผลการเรียน ภาคเรียนที่ 1' } 
  },
  { dateStr: '2027-01-13', year: 2027, month: 1, day: 13, weekdayIndex: 3, cycleDay: 3, isHoliday: false, isWeekend: false, event: null },
  { 
    dateStr: '2027-01-14', year: 2027, month: 1, day: 14, weekdayIndex: 4, cycleDay: 4, isHoliday: false, isWeekend: false, 
    event: { zh: '泰國教師節敬師禮慶祝活動', en: 'Wai Khru\' - National Teachers\' Day Celebrations', th: 'พิธีไหว้ครูและกิจกรรมวันครูแห่งชาติ (Wai Khru)' } 
  },
  { dateStr: '2027-01-15', year: 2027, month: 1, day: 15, weekdayIndex: 5, cycleDay: 5, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-01-16', year: 2027, month: 1, day: 16, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-01-17', year: 2027, month: 1, day: 17, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-01-18', year: 2027, month: 1, day: 18, weekdayIndex: 1, cycleDay: 6, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-01-19', year: 2027, month: 1, day: 19, weekdayIndex: 2, cycleDay: 7, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-01-20', year: 2027, month: 1, day: 20, weekdayIndex: 3, cycleDay: 8, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-01-21', year: 2027, month: 1, day: 21, weekdayIndex: 4, cycleDay: 1, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-01-22', year: 2027, month: 1, day: 22, weekdayIndex: 5, cycleDay: 2, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-01-23', year: 2027, month: 1, day: 23, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-01-24', year: 2027, month: 1, day: 24, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { 
    dateStr: '2027-01-25', year: 2027, month: 1, day: 25, weekdayIndex: 1, cycleDay: 3, isHoliday: false, isWeekend: false, 
    event: { zh: '第二學期課後社團活動 (ASA) 開始', en: '2nd Semester After-School Activities (ASA) Begins', th: 'เริ่มต้นกิจกรรมหลังเลิกเรียน ภาคเรียนที่ 2 (ASA)' } 
  },
  { dateStr: '2027-01-26', year: 2027, month: 1, day: 26, weekdayIndex: 2, cycleDay: 4, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-01-27', year: 2027, month: 1, day: 27, weekdayIndex: 3, cycleDay: 5, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-01-28', year: 2027, month: 1, day: 28, weekdayIndex: 4, cycleDay: 6, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-01-29', year: 2027, month: 1, day: 29, weekdayIndex: 5, cycleDay: 7, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-01-30', year: 2027, month: 1, day: 30, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-01-31', year: 2027, month: 1, day: 31, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },

  // ==========================================
  // 2027年 2月 (February 2027)
  // ==========================================
  { dateStr: '2027-02-01', year: 2027, month: 2, day: 1, weekdayIndex: 1, cycleDay: 8, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-02-02', year: 2027, month: 2, day: 2, weekdayIndex: 2, cycleDay: 1, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-02-03', year: 2027, month: 2, day: 3, weekdayIndex: 3, cycleDay: 2, isHoliday: false, isWeekend: false, event: null },
  { 
    dateStr: '2027-02-04', year: 2027, month: 2, day: 4, weekdayIndex: 4, cycleDay: 3, isHoliday: false, isWeekend: false, 
    event: { zh: '農曆春節慶祝活動', en: 'Lunar New Year Celebrations', th: 'กิจกรรมฉลองเทศกาลตรุษจีน (Lunar New Year)' } 
  },
  { 
    dateStr: '2027-02-05', year: 2027, month: 2, day: 5, weekdayIndex: 5, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '教職員進修日 (學生放假不上課)', en: 'Faculty PD Day (Non-School Day for Students)', th: 'วันพัฒนาบุคลากรครู (นักเรียนหยุดเรียน)' } 
  },
  { dateStr: '2027-02-06', year: 2027, month: 2, day: 6, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-02-07', year: 2027, month: 2, day: 7, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-02-08', year: 2027, month: 2, day: 8, weekdayIndex: 1, cycleDay: 4, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-02-09', year: 2027, month: 2, day: 9, weekdayIndex: 2, cycleDay: 5, isHoliday: false, isWeekend: false, event: null },
  { 
    dateStr: '2027-02-10', year: 2027, month: 2, day: 10, weekdayIndex: 3, cycleDay: 6, isHoliday: false, isWeekend: false, 
    event: { zh: '幼兒/小學部運動會', en: 'EY / Lower ES / Upper ES Sports Days', th: 'วันกีฬาสีระดับชั้นปฐมวัยและประถม (Sports Days)' } 
  },
  { 
    dateStr: '2027-02-11', year: 2027, month: 2, day: 11, weekdayIndex: 4, cycleDay: 7, isHoliday: false, isWeekend: false, 
    event: { zh: '幼兒/小學部運動會', en: 'EY / Lower ES / Upper ES Sports Days', th: 'วันกีฬาสีระดับชั้นปฐมวัยและประถม (Sports Days)' } 
  },
  { 
    dateStr: '2027-02-12', year: 2027, month: 2, day: 12, weekdayIndex: 5, cycleDay: 8, isHoliday: false, isWeekend: false, 
    event: { zh: '幼兒/小學部運動會', en: 'EY / Lower ES / Upper ES Sports Days', th: 'วันกีฬาสีระดับชั้นปฐมวัยและประถม (Sports Days)' } 
  },
  { dateStr: '2027-02-13', year: 2027, month: 2, day: 13, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-02-14', year: 2027, month: 2, day: 14, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-02-15', year: 2027, month: 2, day: 15, weekdayIndex: 1, cycleDay: 1, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-02-16', year: 2027, month: 2, day: 16, weekdayIndex: 2, cycleDay: 2, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-02-17', year: 2027, month: 2, day: 17, weekdayIndex: 3, cycleDay: 3, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-02-18', year: 2027, month: 2, day: 18, weekdayIndex: 4, cycleDay: 4, isHoliday: false, isWeekend: false, event: null },
  { 
    dateStr: '2027-02-19', year: 2027, month: 2, day: 19, weekdayIndex: 5, cycleDay: 5, isHoliday: false, isWeekend: false, 
    event: { zh: '中學部運動會', en: 'MS / HS Sports Day', th: 'วันกีฬาสีระดับมัธยมศึกษา (MS / HS Sports Day)' } 
  },
  { dateStr: '2027-02-20', year: 2027, month: 2, day: 20, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-02-21', year: 2027, month: 2, day: 21, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { 
    dateStr: '2027-02-22', year: 2027, month: 2, day: 22, weekdayIndex: 1, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '萬佛節國定假日 / 二月春假 (放假)', en: 'Holiday (Maka Bucha Day) / February Break', th: 'วันมาฆบูชา / วันหยุดเดือนกุมภาพันธ์ (February Break)' } 
  },
  { 
    dateStr: '2027-02-23', year: 2027, month: 2, day: 23, weekdayIndex: 2, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '二月春假 (學生與教師放假)', en: 'February Break for Students and Teachers', th: 'วันหยุดเดือนกุมภาพันธ์สำหรับนักเรียนและครู (February Break)' } 
  },
  { 
    dateStr: '2027-02-24', year: 2027, month: 2, day: 24, weekdayIndex: 3, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '二月春假 (學生與教師放假)', en: 'February Break for Students and Teachers', th: 'วันหยุดเดือนกุมภาพันธ์สำหรับนักเรียนและครู (February Break)' } 
  },
  { 
    dateStr: '2027-02-25', year: 2027, month: 2, day: 25, weekdayIndex: 4, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '二月春假 (學生與教師放假)', en: 'February Break for Students and Teachers', th: 'วันหยุดเดือนกุมภาพันธ์สำหรับนักเรียนและครู (February Break)' } 
  },
  { 
    dateStr: '2027-02-26', year: 2027, month: 2, day: 26, weekdayIndex: 5, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '二月春假 (學生與教師放假)', en: 'February Break for Students and Teachers', th: 'วันหยุดเดือนกุมภาพันธ์สำหรับนักเรียนและครู (February Break)' } 
  },
  { dateStr: '2027-02-27', year: 2027, month: 2, day: 27, weekdayIndex: 6, cycleDay: null, isHoliday: true, isWeekend: true, event: null },
  { dateStr: '2027-02-28', year: 2027, month: 2, day: 28, weekdayIndex: 0, cycleDay: null, isHoliday: true, isWeekend: true, event: null },

  // ==========================================
  // 2027年 3月 (March 2027)
  // ==========================================
  { dateStr: '2027-03-01', year: 2027, month: 3, day: 1, weekdayIndex: 1, cycleDay: 6, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-03-02', year: 2027, month: 3, day: 2, weekdayIndex: 2, cycleDay: 7, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-03-03', year: 2027, month: 3, day: 3, weekdayIndex: 3, cycleDay: 8, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-03-04', year: 2027, month: 3, day: 4, weekdayIndex: 4, cycleDay: 1, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-03-05', year: 2027, month: 3, day: 5, weekdayIndex: 5, cycleDay: 2, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-03-06', year: 2027, month: 3, day: 6, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-03-07', year: 2027, month: 3, day: 7, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-03-08', year: 2027, month: 3, day: 8, weekdayIndex: 1, cycleDay: 3, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-03-09', year: 2027, month: 3, day: 9, weekdayIndex: 2, cycleDay: 4, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-03-10', year: 2027, month: 3, day: 10, weekdayIndex: 3, cycleDay: 5, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-03-11', year: 2027, month: 3, day: 11, weekdayIndex: 4, cycleDay: 6, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-03-12', year: 2027, month: 3, day: 12, weekdayIndex: 5, cycleDay: 7, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-03-13', year: 2027, month: 3, day: 13, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-03-14', year: 2027, month: 3, day: 14, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-03-15', year: 2027, month: 3, day: 15, weekdayIndex: 1, cycleDay: 8, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-03-16', year: 2027, month: 3, day: 16, weekdayIndex: 2, cycleDay: 1, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-03-17', year: 2027, month: 3, day: 17, weekdayIndex: 3, cycleDay: 2, isHoliday: false, isWeekend: false, event: null },
  { 
    dateStr: '2027-03-18', year: 2027, month: 3, day: 18, weekdayIndex: 4, cycleDay: 3, isHoliday: false, isWeekend: false, 
    event: { zh: '第三季度結束', en: 'End of Quarter 3', th: 'สิ้นสุดไตรมาสที่ 3' } 
  },
  { 
    dateStr: '2027-03-19', year: 2027, month: 3, day: 19, weekdayIndex: 5, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '教職員進修日 (學生放假不上課)', en: 'Faculty PD Day (Non-School Day for Students)', th: 'วันพัฒนาบุคลากรครู (นักเรียนหยุดเรียน)' } 
  },
  { dateStr: '2027-03-20', year: 2027, month: 3, day: 20, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-03-21', year: 2027, month: 3, day: 21, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { 
    dateStr: '2027-03-22', year: 2027, month: 3, day: 22, weekdayIndex: 1, cycleDay: 4, isHoliday: false, isWeekend: false, 
    event: { zh: '第四季度開始', en: 'Start of Quarter 4', th: 'เริ่มต้นไตรมาสที่ 4' } 
  },
  { 
    dateStr: '2027-03-23', year: 2027, month: 3, day: 23, weekdayIndex: 2, cycleDay: 5, isHoliday: false, isWeekend: false, 
    event: { zh: '發放第二學期期中進度報告', en: 'Semester 2 Progress Reports Released', th: 'แจกรายงานความก้าวหน้าทางการเรียน ภาคเรียนที่ 2' } 
  },
  { dateStr: '2027-03-24', year: 2027, month: 3, day: 24, weekdayIndex: 3, cycleDay: 6, isHoliday: false, isWeekend: false, event: null },
  { 
    dateStr: '2027-03-25', year: 2027, month: 3, day: 25, weekdayIndex: 4, cycleDay: 7, isHoliday: false, isWeekend: false, 
    event: { zh: '學生主導成果發表會 (幼兒/小學) / 三方親師座談會 (中學)', en: 'Student-Led Conferences (EY&ES) / Three-Way Conferences (MS&HS)', th: 'การประชุมรายงานผลการเรียนโดยนักเรียน (EY&ES) / ประชุมสามฝ่าย (MS&HS)' } 
  },
  { 
    dateStr: '2027-03-26', year: 2027, month: 3, day: 26, weekdayIndex: 5, cycleDay: 8, isHoliday: false, isWeekend: false, 
    event: { zh: '學生主導成果發表會 (幼兒/小學) / 三方親師座談會 (中學)', en: 'Student-Led Conferences (EY&ES) / Three-Way Conferences (MS&HS)', th: 'การประชุมรายงานผลการเรียนโดยนักเรียน (EY&ES) / ประชุมสามฝ่าย (MS&HS)' } 
  },
  { dateStr: '2027-03-27', year: 2027, month: 3, day: 27, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-03-28', year: 2027, month: 3, day: 28, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-03-29', year: 2027, month: 3, day: 29, weekdayIndex: 1, cycleDay: 1, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-03-30', year: 2027, month: 3, day: 30, weekdayIndex: 2, cycleDay: 2, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-03-31', year: 2027, month: 3, day: 31, weekdayIndex: 3, cycleDay: 3, isHoliday: false, isWeekend: false, event: null },

  // ==========================================
  // 2027年 4月 (April 2027)
  // ==========================================
  { dateStr: '2027-04-01', year: 2027, month: 4, day: 1, weekdayIndex: 4, cycleDay: 4, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-04-02', year: 2027, month: 4, day: 2, weekdayIndex: 5, cycleDay: 5, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-04-03', year: 2027, month: 4, day: 3, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-04-04', year: 2027, month: 4, day: 4, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-04-05', year: 2027, month: 4, day: 5, weekdayIndex: 1, cycleDay: 6, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-04-06', year: 2027, month: 4, day: 6, weekdayIndex: 2, cycleDay: 7, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-04-07', year: 2027, month: 4, day: 7, weekdayIndex: 3, cycleDay: 8, isHoliday: false, isWeekend: false, event: null },
  { 
    dateStr: '2027-04-08', year: 2027, month: 4, day: 8, weekdayIndex: 4, cycleDay: 1, isHoliday: false, isWeekend: false, 
    event: { zh: '宋干節 / 潑水節慶祝活動', en: 'Songkran Celebrations', th: 'กิจกรรมฉลองเทศกาลสงกรานต์ (Songkran Celebrations)' } 
  },
  { 
    dateStr: '2027-04-09', year: 2027, month: 4, day: 9, weekdayIndex: 5, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '卻克里王朝紀念日補假 / 春假開始 (放假)', en: 'Holiday (Chakri Day Observed) / Spring Break', th: 'วันหยุดชดเชยวันจักรี / วันหยุดฤดูใบไม้ผลิ' } 
  },
  { dateStr: '2027-04-10', year: 2027, month: 4, day: 10, weekdayIndex: 6, cycleDay: null, isHoliday: true, isWeekend: true, event: null },
  { dateStr: '2027-04-11', year: 2027, month: 4, day: 11, weekdayIndex: 0, cycleDay: null, isHoliday: true, isWeekend: true, event: null },
  { 
    dateStr: '2027-04-12', year: 2027, month: 4, day: 12, weekdayIndex: 1, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '春假 (不上課)', en: 'Spring Break (No School)', th: 'วันหยุดฤดูใบไม้ผลิ (Spring Break)' } 
  },
  { 
    dateStr: '2027-04-13', year: 2027, month: 4, day: 13, weekdayIndex: 2, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '宋干節國定假日 / 春假 (放假)', en: 'Public Holiday (Songkran Days) / Spring Break', th: 'วันหยุดเทศกาลสงกรานต์ (Songkran Days)' } 
  },
  { 
    dateStr: '2027-04-14', year: 2027, month: 4, day: 14, weekdayIndex: 3, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '宋干節國定假日 / 春假 (放假)', en: 'Public Holiday (Songkran Days) / Spring Break', th: 'วันหยุดเทศกาลสงกรานต์ (Songkran Days)' } 
  },
  { 
    dateStr: '2027-04-15', year: 2027, month: 4, day: 15, weekdayIndex: 4, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '宋干節國定假日 / 春假 (放假)', en: 'Public Holiday (Songkran Days) / Spring Break', th: 'วันหยุดเทศกาลสงกรานต์ (Songkran Days)' } 
  },
  { 
    dateStr: '2027-04-16', year: 2027, month: 4, day: 16, weekdayIndex: 5, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '春假 (不上課)', en: 'Spring Break (No School)', th: 'วันหยุดฤดูใบไม้ผลิ (Spring Break)' } 
  },
  { dateStr: '2027-04-17', year: 2027, month: 4, day: 17, weekdayIndex: 6, cycleDay: null, isHoliday: true, isWeekend: true, event: null },
  { dateStr: '2027-04-18', year: 2027, month: 4, day: 18, weekdayIndex: 0, cycleDay: null, isHoliday: true, isWeekend: true, event: null },
  { 
    dateStr: '2027-04-19', year: 2027, month: 4, day: 19, weekdayIndex: 1, cycleDay: 2, isHoliday: false, isWeekend: false, 
    event: { zh: '春假結束 / 恢復上課', en: 'Classes Resume', th: 'เปิดเรียนตามปกติ (Classes Resume)' } 
  },
  { dateStr: '2027-04-20', year: 2027, month: 4, day: 20, weekdayIndex: 2, cycleDay: 3, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-04-21', year: 2027, month: 4, day: 21, weekdayIndex: 3, cycleDay: 4, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-04-22', year: 2027, month: 4, day: 22, weekdayIndex: 4, cycleDay: 5, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-04-23', year: 2027, month: 4, day: 23, weekdayIndex: 5, cycleDay: 6, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-04-24', year: 2027, month: 4, day: 24, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-04-25', year: 2027, month: 4, day: 25, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-04-26', year: 2027, month: 4, day: 26, weekdayIndex: 1, cycleDay: 7, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-04-27', year: 2027, month: 4, day: 27, weekdayIndex: 2, cycleDay: 8, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-04-28', year: 2027, month: 4, day: 28, weekdayIndex: 3, cycleDay: 1, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-04-29', year: 2027, month: 4, day: 29, weekdayIndex: 4, cycleDay: 2, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-04-30', year: 2027, month: 4, day: 30, weekdayIndex: 5, cycleDay: 3, isHoliday: false, isWeekend: false, event: null },

  // ==========================================
  // 2027年 5月 (May 2027)
  // ==========================================
  { dateStr: '2027-05-01', year: 2027, month: 5, day: 1, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-05-02', year: 2027, month: 5, day: 2, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { 
    dateStr: '2027-05-03', year: 2027, month: 5, day: 3, weekdayIndex: 1, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '勞動節補假 (放假)', en: 'Public Holiday (Labor Day Observed)', th: 'วันหยุดชดเชยวันแรงงานแห่งชาติ' } 
  },
  { 
    dateStr: '2027-05-04', year: 2027, month: 5, day: 4, weekdayIndex: 2, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '泰王加冕紀念日 (放假)', en: 'Public Holiday (Coronation Day)', th: 'วันฉัตรมงคล (Coronation Day)' } 
  },
  { dateStr: '2027-05-05', year: 2027, month: 5, day: 5, weekdayIndex: 3, cycleDay: 4, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-05-06', year: 2027, month: 5, day: 6, weekdayIndex: 4, cycleDay: 5, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-05-07', year: 2027, month: 5, day: 7, weekdayIndex: 5, cycleDay: 6, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-05-08', year: 2027, month: 5, day: 8, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-05-09', year: 2027, month: 5, day: 9, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-05-10', year: 2027, month: 5, day: 10, weekdayIndex: 1, cycleDay: 7, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-05-11', year: 2027, month: 5, day: 11, weekdayIndex: 2, cycleDay: 8, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-05-12', year: 2027, month: 5, day: 12, weekdayIndex: 3, cycleDay: 1, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-05-13', year: 2027, month: 5, day: 13, weekdayIndex: 4, cycleDay: 2, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-05-14', year: 2027, month: 5, day: 14, weekdayIndex: 5, cycleDay: 3, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-05-15', year: 2027, month: 5, day: 15, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-05-16', year: 2027, month: 5, day: 16, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-05-17', year: 2027, month: 5, day: 17, weekdayIndex: 1, cycleDay: 4, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-05-18', year: 2027, month: 5, day: 18, weekdayIndex: 2, cycleDay: 5, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-05-19', year: 2027, month: 5, day: 19, weekdayIndex: 3, cycleDay: 6, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-05-20', year: 2027, month: 5, day: 20, weekdayIndex: 4, cycleDay: 7, isHoliday: false, isWeekend: false, event: null },
  { 
    dateStr: '2027-05-21', year: 2027, month: 5, day: 21, weekdayIndex: 5, cycleDay: 8, isHoliday: false, isWeekend: false, 
    event: { zh: '1-12年級優秀學生表揚大會', en: 'Grades 1 - 12 Honors Assembly', th: 'พิธีมอบรางวัลเชิดชูเกียรตินักเรียน เกรด 1-12 (Honors Assembly)' } 
  },
  { dateStr: '2027-05-22', year: 2027, month: 5, day: 22, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-05-23', year: 2027, month: 5, day: 23, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-05-24', year: 2027, month: 5, day: 24, weekdayIndex: 1, cycleDay: 1, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-05-25', year: 2027, month: 5, day: 25, weekdayIndex: 2, cycleDay: 2, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-05-26', year: 2027, month: 5, day: 26, weekdayIndex: 3, cycleDay: 3, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-05-27', year: 2027, month: 5, day: 27, weekdayIndex: 4, cycleDay: 4, isHoliday: false, isWeekend: false, event: null },
  { 
    dateStr: '2027-05-28', year: 2027, month: 5, day: 28, weekdayIndex: 5, cycleDay: 5, isHoliday: false, isWeekend: false, 
    event: { zh: '第二學期課後社團活動 (ASA) 結束', en: '2nd Semester After-School Activities Ends', th: 'สิ้นสุดกิจกรรมหลังเลิกเรียน ภาคเรียนที่ 2 (ASA)' } 
  },
  { dateStr: '2027-05-29', year: 2027, month: 5, day: 29, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-05-30', year: 2027, month: 5, day: 30, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-05-31', year: 2027, month: 5, day: 31, weekdayIndex: 1, cycleDay: 6, isHoliday: false, isWeekend: false, event: null },

  // ==========================================
  // 2027年 6月 (June 2027)
  // ==========================================
  { dateStr: '2027-06-01', year: 2027, month: 6, day: 1, weekdayIndex: 2, cycleDay: 7, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-06-02', year: 2027, month: 6, day: 2, weekdayIndex: 3, cycleDay: 8, isHoliday: false, isWeekend: false, event: null },
  { 
    dateStr: '2027-06-03', year: 2027, month: 6, day: 3, weekdayIndex: 4, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '泰國王后華誕 (放假)', en: 'Public Holiday (The Queen of Thailand\'s Birthday)', th: 'วันเฉลิมพระชนมพรรษาสมเด็จพระนางเจ้าฯ พระบรมราชินี' } 
  },
  { 
    dateStr: '2027-06-04', year: 2027, month: 6, day: 4, weekdayIndex: 5, cycleDay: 1, isHoliday: false, isWeekend: false, 
    event: { zh: '高中部畢業典禮 2027', en: 'HS Graduation Ceremony 2027', th: 'พิธีสำเร็จการศึกษาระดับมัธยมปลาย 2027 (HS Graduation)' } 
  },
  { dateStr: '2027-06-05', year: 2027, month: 6, day: 5, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-06-06', year: 2027, month: 6, day: 6, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { 
    dateStr: '2027-06-07', year: 2027, month: 6, day: 7, weekdayIndex: 1, cycleDay: 2, isHoliday: false, isWeekend: false, 
    event: { zh: '幼兒園畢業典禮 2027', en: 'Kindergarten Graduation 2027', th: 'พิธีสำเร็จการศึกษาระดับอนุบาล 2027 (Kindergarten Graduation)' } 
  },
  { dateStr: '2027-06-08', year: 2027, month: 6, day: 8, weekdayIndex: 2, cycleDay: 3, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-06-09', year: 2027, month: 6, day: 9, weekdayIndex: 3, cycleDay: 4, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-06-10', year: 2027, month: 6, day: 10, weekdayIndex: 4, cycleDay: 5, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-06-11', year: 2027, month: 6, day: 11, weekdayIndex: 5, cycleDay: 6, isHoliday: false, isWeekend: false, event: null },
  { dateStr: '2027-06-12', year: 2027, month: 6, day: 12, weekdayIndex: 6, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { dateStr: '2027-06-13', year: 2027, month: 6, day: 13, weekdayIndex: 0, cycleDay: null, isHoliday: false, isWeekend: true, event: null },
  { 
    dateStr: '2027-06-14', year: 2027, month: 6, day: 14, weekdayIndex: 1, cycleDay: 7, isHoliday: false, isWeekend: false, 
    event: { zh: '發放第二學期成績單', en: 'Semester 2 Report Cards Released', th: 'แจกสมุดรายงานผลการเรียน ภาคเรียนที่ 2' } 
  },
  { 
    dateStr: '2027-06-15', year: 2027, month: 6, day: 15, weekdayIndex: 2, cycleDay: 8, isHoliday: false, isWeekend: false, 
    event: { zh: '學生最後上課日 (中午 12:00 提早放學 / 暑假開始)', en: 'Last Day of School for Students (Early Dismissal 12:00 p.m.) / Summer Break Begins', th: 'วันเรียนวันสุดท้ายของนักเรียน (เลิกเรียน 12:00 น. / เริ่มต้นปิดเทอมใหญ่)' } 
  },
  // Summer Break / Faculty Days
  { 
    dateStr: '2027-06-16', year: 2027, month: 6, day: 16, weekdayIndex: 3, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '教職員進修日 / 暑假 (放假)', en: 'Faculty PD Day / Summer Break', th: 'วันพัฒนาบุคลากรครู / ปิดภาคเรียนฤดูร้อน' } 
  },
  { 
    dateStr: '2027-06-17', year: 2027, month: 6, day: 17, weekdayIndex: 4, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '教師最後工作日 / 暑假 (放假)', en: 'Last Work Day for Teachers / Summer Break', th: 'วันทำงานวันสุดท้ายของครู / ปิดภาคเรียนฤดูร้อน' } 
  },
  { 
    dateStr: '2027-06-18', year: 2027, month: 6, day: 18, weekdayIndex: 5, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '暑假 (Summer Break)', en: 'Summer Break', th: 'ปิดภาคเรียนฤดูร้อน (Summer Break)' } 
  },
  { dateStr: '2027-06-19', year: 2027, month: 6, day: 19, weekdayIndex: 6, cycleDay: null, isHoliday: true, isWeekend: true, event: null },
  { dateStr: '2027-06-20', year: 2027, month: 6, day: 20, weekdayIndex: 0, cycleDay: null, isHoliday: true, isWeekend: true, event: null },
  { 
    dateStr: '2027-06-21', year: 2027, month: 6, day: 21, weekdayIndex: 1, cycleDay: null, isHoliday: true, isWeekend: false, 
    event: { zh: '2027 暑期學校開始 / 暑假', en: 'Summer School 2027 Begins / Summer Break', th: 'เปิดเรียนภาคฤดูร้อน 2027 (Summer School)' } 
  },
  { dateStr: '2027-06-22', year: 2027, month: 6, day: 22, weekdayIndex: 2, cycleDay: null, isHoliday: true, isWeekend: false, event: { zh: '暑假 (Summer Break)', en: 'Summer Break', th: 'ปิดภาคเรียนฤดูร้อน (Summer Break)' } },
  { dateStr: '2027-06-23', year: 2027, month: 6, day: 23, weekdayIndex: 3, cycleDay: null, isHoliday: true, isWeekend: false, event: { zh: '暑假 (Summer Break)', en: 'Summer Break', th: 'ปิดภาคเรียนฤดูร้อน (Summer Break)' } },
  { dateStr: '2027-06-24', year: 2027, month: 6, day: 24, weekdayIndex: 4, cycleDay: null, isHoliday: true, isWeekend: false, event: { zh: '暑假 (Summer Break)', en: 'Summer Break', th: 'ปิดภาคเรียนฤดูร้อน (Summer Break)' } },
  { dateStr: '2027-06-25', year: 2027, month: 6, day: 25, weekdayIndex: 5, cycleDay: null, isHoliday: true, isWeekend: false, event: { zh: '暑假 (Summer Break)', en: 'Summer Break', th: 'ปิดภาคเรียนฤดูร้อน (Summer Break)' } },
  { dateStr: '2027-06-26', year: 2027, month: 6, day: 26, weekdayIndex: 6, cycleDay: null, isHoliday: true, isWeekend: true, event: null },
  { dateStr: '2027-06-27', year: 2027, month: 6, day: 27, weekdayIndex: 0, cycleDay: null, isHoliday: true, isWeekend: true, event: null },
  { dateStr: '2027-06-28', year: 2027, month: 6, day: 28, weekdayIndex: 1, cycleDay: null, isHoliday: true, isWeekend: false, event: { zh: '暑假 (Summer Break)', en: 'Summer Break', th: 'ปิดภาคเรียนฤดูร้อน (Summer Break)' } },
  { dateStr: '2027-06-29', year: 2027, month: 6, day: 29, weekdayIndex: 2, cycleDay: null, isHoliday: true, isWeekend: false, event: { zh: '暑假 (Summer Break)', en: 'Summer Break', th: 'ปิดภาคเรียนฤดูร้อน (Summer Break)' } },
  { dateStr: '2027-06-30', year: 2027, month: 6, day: 30, weekdayIndex: 3, cycleDay: null, isHoliday: true, isWeekend: false, event: { zh: '暑假 (Summer Break)', en: 'Summer Break', th: 'ปิดภาคเรียนฤดูร้อน (Summer Break)' } }
];


/**
 * Dynamic Schedule Builder
 * Generates the full 3-month calendar dynamically according to the active class's preset, swimming day, and house shirt day.
 */
export function buildDynamicCalendar(classConfig) {
  const presetId = classConfig?.presetId || classConfig?.id || 'odd_pe';
  const hasValidSwim = classConfig?.swimmingDay !== null && classConfig?.swimmingDay !== undefined && Number(classConfig?.swimmingDay) > 0;
  const swimmingDay = hasValidSwim ? Number(classConfig.swimmingDay) : null;
  const hasValidHouse = classConfig?.houseDay !== null && classConfig?.houseDay !== undefined && Number(classConfig?.houseDay) > 0;
  const houseDay = hasValidHouse ? Number(classConfig.houseDay) : (classConfig?.houseDay === null ? null : 7);

  return rawCalendarStructure.map((item) => {
    if (item.isHoliday) {
      return { ...item, uniformType: 'holiday', hasSwimming: false };
    }
    if (item.isWeekend) {
      return { ...item, uniformType: 'weekend', hasSwimming: false };
    }

    if (item.cycleDay) {
      const uniformType = getCycleDayUniform(item.cycleDay, presetId, swimmingDay, houseDay);
      const hasSwimming = swimmingDay !== null && item.cycleDay === swimmingDay;
      return { ...item, uniformType, hasSwimming };
    }

    return { ...item, uniformType: 'weekend', hasSwimming: false };
  });
}

/**
 * Get current today's date formatted as YYYY-MM-DD
 */
export function getTodayDateStr() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

