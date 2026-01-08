import React from 'react';
import { Check } from 'lucide-react';

const TimelineStep: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <li className="flex gap-4">
    <div className="w-5 h-5 rounded-full border border-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
       <Check className="w-3 h-3 text-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.3)]" />
    </div>
    <div>
      <h5 className="font-bold text-sm mb-1">{title}</h5>
      <p className="text-stone-400 text-xs leading-relaxed">{desc}</p>
    </div>
  </li>
);

export default TimelineStep;
