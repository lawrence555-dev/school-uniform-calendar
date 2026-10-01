import React, { useState } from 'react';
import { 
  X, 
  Flame, 
  Shirt, 
  Activity, 
  Waves, 
  CheckCircle2, 
  AlertCircle,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { translations } from '../translations/i18n';

export default function UniformGuideModal({ isOpen, onClose, lang }) {
  const [activeTab, setActiveTab] = useState('house');
  const t = translations[lang] || translations.zh;

  if (!isOpen) return null;

  const guideDetails = {
    house: {
      id: 'house',
      title: t.houseShirt,
      icon: Flame,
      color: 'text-amber-400',
      badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      items: [
        {
          label: lang === 'zh' ? '上身著裝' : lang === 'th' ? 'เสื้อท่อนบน' : 'Top',
          desc: lang === 'zh' ? '所屬學院代表色短袖 T 恤 (House T-Shirt)' : lang === 'th' ? 'เสื้อยืดสีประจำบ้าน (House Shirt)' : 'Official House Color T-Shirt'
        },
        {
          label: lang === 'zh' ? '下身著裝' : lang === 'th' ? 'กางเกง/กระโปรง' : 'Bottom',
          desc: lang === 'zh' ? '學校運動短褲或校服短褲/裙' : lang === 'th' ? 'กางเกงพละหรือกระโปรงนักเรียน' : 'School PE shorts or uniform shorts/skirt'
        },
        {
          label: lang === 'zh' ? '鞋襪搭配' : lang === 'th' ? 'รองเท้าและถุงเท้า' : 'Footwear',
          desc: lang === 'zh' ? '運動鞋 ＋ 白色或深色運動短襪' : lang === 'th' ? 'รองเท้าผ้าใบกีฬา + ถุงเท้ากีฬา' : 'Athletic sports trainers + sport socks'
        }
      ],
      note: lang === 'zh' ? '學院服通常於 Day 7 及全校大型運動/集會活動時穿著。' : lang === 'th' ? 'สวมใส่ในวัน Day 7 หรือวันกิจกรรมรวมของบ้าน' : 'Worn on Day 7 and during all-school House events.'
    },
    uniform: {
      id: 'uniform',
      title: t.uniform,
      icon: Shirt,
      color: 'text-blue-400',
      badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      items: [
        {
          label: lang === 'zh' ? '上身著裝' : lang === 'th' ? 'เสื้อท่อนบน' : 'Top',
          desc: lang === 'zh' ? '學校標準短袖有領襯衫/Polo衫 (附校徽)' : lang === 'th' ? 'เสื้อเชิ้ต/โปโลเครื่องแบบนักเรียนมีตราโรงเรียน' : 'Standard collared school uniform top with school crest'
        },
        {
          label: lang === 'zh' ? '下身著裝' : lang === 'th' ? 'กางเกง/กระโปรง' : 'Bottom',
          desc: lang === 'zh' ? '學校正式制服短褲 / 學院百褶裙' : lang === 'th' ? 'กางเกงนักเรียน / กระโปรงจีบเครื่องแบบ' : 'Formal uniform shorts / tailored pleated skirt'
        },
        {
          label: lang === 'zh' ? '鞋襪搭配' : lang === 'th' ? 'รองเท้าและถุงเท้า' : 'Footwear',
          desc: lang === 'zh' ? '黑/深色皮鞋或素色學生鞋 ＋ 純白學生襪' : lang === 'th' ? 'รองเท้านักเรียนสีดำ + ถุงเท้าสีขาว' : 'Black/dark school leather shoes + plain white socks'
        }
      ],
      note: lang === 'zh' ? '平日標準課堂穿著，請保持制服整潔筆挺。' : lang === 'th' ? 'เครื่องแบบทางการสำหรับวันเรียนปกติ โปรดดูแลให้สะอาดเรียบร้อย' : 'Standard daily academic wear; keep neat and presentable.'
    },
    pe: {
      id: 'pe',
      title: t.pe,
      icon: Activity,
      color: 'text-emerald-400',
      badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      items: [
        {
          label: lang === 'zh' ? '上身著裝' : lang === 'th' ? 'เสื้อท่อนบน' : 'Top',
          desc: lang === 'zh' ? '學校專用排汗透氣運動短袖 T 恤' : lang === 'th' ? 'เสื้อยืดพละผ้าแห้งไวของโรงเรียน' : 'Official breathable PE athletic top'
        },
        {
          label: lang === 'zh' ? '下身著裝' : lang === 'th' ? 'กางเกง' : 'Bottom',
          desc: lang === 'zh' ? '學校專用彈性運動短褲' : lang === 'th' ? 'กางเกงขาสั้นพละของโรงเรียน' : 'Official school PE athletic shorts'
        },
        {
          label: lang === 'zh' ? '運動跑鞋' : lang === 'th' ? 'รองเท้า' : 'Footwear',
          desc: lang === 'zh' ? '抓地力良好的運動跑步鞋 (不可穿皮鞋)' : lang === 'th' ? 'รองเท้าผ้าใบวิ่งที่มีการยึดเกาะดี' : 'Supportive running/court trainers (no formal shoes)'
        },
        {
          label: lang === 'zh' ? '必備用品' : lang === 'th' ? 'อุปกรณ์จำเป็น' : 'Must Pack',
          desc: lang === 'zh' ? '便攜個人運動水壺 (充份補充水份)' : lang === 'th' ? 'กระบอกน้ำดื่มส่วนตัว' : 'Personal refillable water bottle for hydration'
        }
      ],
      note: lang === 'zh' ? '體育課當天直接穿著 PE 服到校，方便戶外運動與晨跑。' : lang === 'th' ? 'สามารถสวมชุดพละมาจากบ้านได้ในวันที่มีเรียนพละ' : 'Wear PE kit directly to school on PE days.'
    },
    swimming: {
      id: 'swimming',
      title: t.peSwimming,
      icon: Waves,
      color: 'text-cyan-300',
      badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      items: [
        {
          label: lang === 'zh' ? '基本穿著' : lang === 'th' ? 'การแต่งกาย' : 'Attire',
          desc: lang === 'zh' ? '穿著學校體育服 (PE Kit) 到校' : lang === 'th' ? 'สวมชุดพละมาโรงเรียน' : 'Wear PE kit to school'
        },
        {
          label: lang === 'zh' ? '泳衣/泳褲' : lang === 'th' ? 'ชุดว่ายน้ำ' : 'Swimwear',
          desc: lang === 'zh' ? '一件式標準學生泳衣或泳褲' : lang === 'th' ? 'ชุดว่ายน้ำนักเรียนแบบชิ้นเดียวหรือกางเกงว่ายน้ำ' : 'One-piece student swimsuit or swim jammers'
        },
        {
          label: lang === 'zh' ? '防水包裝備' : lang === 'th' ? 'อุปกรณ์ในกระเป๋ากันน้ำ' : 'Swim Bag Checklist',
          desc: lang === 'zh' ? '① 矽膠泳帽 ② 防霧泳鏡 ③ 吸水快乾大浴巾 ④ 乾淨內衣褲換洗' : lang === 'th' ? '① หมวกว่ายน้ำ ② แว่นตาว่ายน้ำ ③ ผ้าเช็ดตัว ④ ชุดชั้นในสำรอง' : '① Swim cap ② Anti-fog goggles ③ Large absorbent towel ④ Spare change of underwear'
        }
      ],
      note: lang === 'zh' ? '⚠️ 請務必使用專用防水袋打包，防止書包內課本受潮。' : lang === 'th' ? '⚠️ โปรดใช้กระเป๋ากันน้ำเพื่อป้องกันหนังสือเปียก' : '⚠️ Must be packed in a waterproof swim bag.'
    }
  };

  const current = guideDetails[activeTab];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                {t.guideTitle}
              </h3>
              <p className="text-xs text-slate-400">
                {lang === 'zh' ? '學校官方著裝規範與必備清單' : lang === 'th' ? 'ระเบียบการแต่งกายของโรงเรียน' : 'Official school dress code guidelines'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="flex items-center gap-1.5 p-3 border-b border-slate-800/80 overflow-x-auto no-scrollbar bg-slate-950/40">
          {Object.values(guideDetails).map((g) => {
            const Icon = g.icon;
            const isActive = activeTab === g.id;
            return (
              <button
                key={g.id}
                onClick={() => setActiveTab(g.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition tap-effect ${
                  isActive
                    ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${g.color}`} />
                <span>{g.title}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Content */}
        <div className="p-5 space-y-4 flex-1">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-1 rounded-xl text-xs font-bold border ${current.badge}`}>
              {current.title}
            </span>
          </div>

          <div className="space-y-3">
            {current.items.map((item, idx) => (
              <div key={idx} className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-3.5 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-slate-200">{item.label}</div>
                  <div className="text-xs text-slate-400 leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 leading-relaxed flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <span>{current.note}</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 text-right">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
}
