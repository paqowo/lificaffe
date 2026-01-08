import React from 'react';

const Card: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white p-10 border border-stone-100 hover:border-[#1A3C34]/30 hover:shadow-lg transition-all duration-500">
    <div className="mb-8">{icon}</div>
    <h3 className="text-lg font-serif font-bold mb-4">{title}</h3>
    <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default Card;
