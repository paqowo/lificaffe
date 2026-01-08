import React from 'react';
import { BarChart3 } from 'lucide-react';

const ProblemBox: React.FC<{ area: string; title: string; detail: string; impact: string }> = ({ area, title, detail, impact }) => (
  <div className="bg-white p-8 md:p-12 border border-stone-200">
     <div className="flex items-center gap-4 mb-6">
        <span className="bg-stone-50 text-stone-400 px-3 py-1 text-[9px] font-bold uppercase tracking-widest">{area}</span>
        <h4 className="text-xl font-serif font-bold">{title}</h4>
     </div>
     <p className="text-stone-600 mb-6 text-sm leading-relaxed">{detail}</p>
     <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#A04523]">
        <BarChart3 className="w-4 h-4" /> Dopad: {impact}
     </div>
  </div>
);

export default ProblemBox;
