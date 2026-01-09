import React, { useState } from 'react';
import { Award, Shield, Linkedin } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  drift: number;
  size: number;
}

const AuthorCard = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const generateParticles = () => {
    // This check prevents re-triggering the animation while it's already running
    if (particles.length > 0) return;

    const newParticles = Array.from({ length: 10 }).map(() => ({
      id: Math.random(),
      x: Math.random() * 100, // percentage-based left position
      y: Math.random() * 20 + 80, // percentage-based bottom position
      drift: (Math.random() - 0.5) * 25, // horizontal drift
      size: Math.random() * 3 + 1, // size in pixels
    }));
    
    setParticles(newParticles);
    
    // Remove particles after 2 seconds to allow for re-triggering
    setTimeout(() => {
        setParticles([]);
    }, 2000);
  };

  const styles = `
    .gold-metallic {
      background: linear-gradient(145deg, #FFDF70, #F0E68C, #FFD700);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

    @keyframes rotate-border {
      0% { --angle: 0deg; }
      100% { --angle: 360deg; }
    }

    .photo-container {
      border: 2px solid transparent;
      background: 
        linear-gradient(to right, #2D241E, #2D241E), /* This is the inner background color */
        conic-gradient(from var(--angle), #FCD34D, #4F46E5, #FCD34D); /* This is the animated border gradient */
      background-clip: padding-box, border-box;
      background-origin: padding-box, border-box;
      animation: rotate-border 5s linear infinite paused;
    }
    .author-card-container:hover .photo-container {
      animation-play-state: running;
    }
    
    @keyframes photo-particle-rise {
      0% { transform: translateY(0) scale(1); opacity: 0.8; }
      100% { transform: translateY(-90px) scale(0); opacity: 0; }
    }
    .photo-particle {
      position: absolute;
      border-radius: 50%;
      background-color: rgba(252, 211, 77, 0.6);
      animation: photo-particle-rise 1.8s ease-out forwards;
    }

    @keyframes ping {
      75%, 100% {
        transform: scale(2.5);
        opacity: 0;
      }
    }
    .status-dot-ping {
        animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div 
        className="relative w-44 group cursor-pointer author-card-container"
        onMouseEnter={generateParticles}
      >
        <div className="photo-container rounded-lg p-1 transition-all duration-500">
          <div className="relative overflow-hidden rounded-sm">
            {/* NOTE: The image source is set to '/author-photo.jpg'. 
                If your file is a .png or .jpeg, please change the extension below.
                This file must be in the 'public' folder. */}
            <img
              src="/lificaffe/assets/images/photo-pavel.jpg"
              alt="Author: Pavel Toman"
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            
            <div className="absolute top-2 right-2">
                <span className="relative flex h-3 w-3">
                    <span className="status-dot-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
            </div>
            
            <div className="info-badge absolute bottom-0 left-0 right-0 p-3 bg-black/60 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <h4 className="font-bold text-sm gold-metallic">Pavel Toman</h4>
              <p className="text-stone-300 text-xs">AI & Fintech Strategist</p>
              <div className="flex items-center gap-2 mt-2">
                <a href="#" aria-label="Award" className="text-stone-400 hover:text-amber-300"><Award size={14} /></a>
                <a href="#" aria-label="Shield" className="text-stone-400 hover:text-amber-300"><Shield size={14} /></a>
                <a href="#" aria-label="LinkedIn" className="text-stone-400 hover:text-amber-300"><Linkedin size={14} /></a>
              </div>
            </div>

            {/* Particles are rendered here when the 'particles' state array is populated on hover */}
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="photo-particle"
                    style={{
                        left: `${p.x}%`,
                        bottom: `${100 - p.y}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        transform: `translateX(${p.drift}px)`,
                    }}
                ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthorCard;
