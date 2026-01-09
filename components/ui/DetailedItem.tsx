import React from 'react';

const DetailedItem: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="border-l-2 border-[#D4C3B3] pl-6 py-2 transition-all duration-300 hover:border-l-4 hover:bg-stone-50 print:break-inside-avoid">
    <h4 className="font-bold text-lg mb-2">{title}</h4>
    <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default DetailedItem;
