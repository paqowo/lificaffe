import React, { useEffect, useRef, useState } from 'react';

interface CircularGaugeProps {
  value: number; // Current value, e.g., 8
  max: number; // Maximum value, e.g., 10
  label: string; // Label for the gauge, e.g., "Vizuální dojem"
  colorClass: string; // Tailwind CSS class for the color of the text and gauge fill, e.g., "text-emerald-400"
  unit?: string; // Optional unit to display after the number, e.g., "/10"
}

const CircularGauge: React.FC<CircularGaugeProps> = ({ value, max, label, colorClass, unit = '' }) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const circumference = 2 * Math.PI * 45; // For a radius of 45 (total SVG size 100x100)
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedValue / max) * circumference;

  const animationFrameId = useRef<number>();
  const startTime = useRef<number>();
  const duration = 1500; // Animation duration in ms

  useEffect(() => {
    setAnimatedValue(0); // Reset animated value when 'value' changes
    startTime.current = undefined;

    const animate = (currentTime: DOMHighResTimeStamp) => {
      if (!startTime.current) startTime.current = currentTime;
      const progress = (currentTime - startTime.current) / duration;
      const easedProgress = easeOutCubic(progress); // Apply easing function

      const newValue = Math.min(value, max) * easedProgress;
      setAnimatedValue(parseFloat(newValue.toFixed(0))); // Round to nearest integer

      if (progress < 1) {
        animationFrameId.current = requestAnimationFrame(animate);
      } else {
        setAnimatedValue(Math.min(value, max)); // Ensure final value is exact
      }
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [value, max]);

  // Easing function for smoother animation
  const easeOutCubic = (t: number) => {
    return (--t) * t * t + 1;
  };


  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            className="text-stone-700"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
          />
          {/* Progress circle */}
          <circle
            className={`transition-all duration-300 ease-out ${colorClass.replace('text-', 'stroke-')}`} // Use stroke class for color
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-2xl font-bold ${colorClass}`}>
            {animatedValue}{unit}
          </span>
        </div>
      </div>
      <span className="text-xs uppercase tracking-widest text-stone-400 text-center">{label}</span>
    </div>
  );
};

export default CircularGauge;
