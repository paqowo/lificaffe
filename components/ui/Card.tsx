import React from 'react';
import { Info } from 'lucide-react'; // Added Info icon import

interface CardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tooltipContent: string; // New prop for tooltip text
}

const Card: React.FC<CardProps> = ({ icon, title, desc, tooltipContent }) => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
    <div className="mb-8">{icon}</div>
    <h3 className="text-lg font-serif font-bold mb-4 flex items-center gap-2 relative group"> {/* Modified h3 for tooltip */}
      {title}
      {tooltipContent && ( // Only render if tooltipContent is provided
        <span className="relative">
          <Info className="w-4 h-4 text-stone-400 cursor-help ml-1" />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 p-3 bg-stone-800 text-white text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-60 min-w-max z-20 pointer-events-none after:content-[''] after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-stone-800"> {/* Tooltip box with arrow */}
            {tooltipContent}
          </div>
        </span>
      )}
    </h3>
    <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default Card;
