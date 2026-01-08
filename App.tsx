
import React, { useState, useEffect } from 'react';
import { 
  Download,
  ArrowLeft,
  Coffee,
  Award,
  Shield,
  Linkedin,
  Phone,  // Added
  Globe,  // Added
  Mail    // Added
} from 'lucide-react';
import SummaryView from './components/SummaryView';
import DetailedView from './components/DetailedView';

// --- AUTHOR CARD COMPONENT (Defined in-file as requested) ---
interface Particle {
  id: number;
  x: number;
  y: number;
  drift: number;
  size: number;
}

const AuthorCard: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const generateParticles = () => {
    if (particles.length > 0) return;
    const newParticles = Array.from({ length: 10 }).map(() => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 20 + 80,
      drift: (Math.random() - 0.5) * 25,
      size: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 2000);
  };

  const styles = `
    .gold-metallic { background: linear-gradient(145deg, #FFDF70, #F0E68C, #FFD700); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; text-fill-color: transparent; }
    @property --angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
    @keyframes rotate-border { 0% { --angle: 0deg; } 100% { --angle: 360deg; } }
    .photo-container {
      border: 2px solid transparent;
      background: linear-gradient(to right, #2D241E, #2D241E), conic-gradient(from var(--angle), #FCD34D, #4F46E5, #FCD34D);
      background-clip: padding-box, border-box;
      background-origin: padding-box, border-box;
      animation: rotate-border 5s linear infinite paused;
    }
    .author-card-container:hover .photo-container { animation-play-state: running; }
    @keyframes photo-particle-rise { 0% { transform: translateY(0) scale(1); opacity: 0.8; } 100% { transform: translateY(-90px) scale(0); opacity: 0; } }
    .photo-particle { position: absolute; border-radius: 50%; background-color: rgba(252, 211, 77, 0.6); animation: photo-particle-rise 1.8s ease-out forwards; }
    @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }
    .status-dot-ping { animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; }
    
    @keyframes shimmer {
      0% { transform: translateX(-100%) skewX(-15deg); }
      100% { transform: translateX(200%) skewX(-15deg); }
    }
    .cta-button::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%);
      animation: shimmer 4s infinite linear;
      opacity: 0.6;
    }
    .gold-progress-gradient {
      background: linear-gradient(to right, #BF953F, #FCF6BA);
    }
    .animated-underline {
      position: relative;
      display: inline-block;
      padding-bottom: 2px; /* Space for the underline */
    }

    .animated-underline::after {
      content: '';
      position: absolute;
      width: 0%;
      height: 2px; /* Underline thickness */
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: #8B5A2B; /* Gold color */
      transition: width 0.3s ease-out; /* Smooth transition */
    }

    .animated-underline:hover::after {
      width: 100%;
    }
    .cta-outer-glow {
      filter: drop-shadow(0 0 10px rgba(139, 90, 43, 0.5)); /* Subtle gold glow */
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="relative w-48 group cursor-pointer author-card-container" onMouseEnter={generateParticles}>
        <div className="photo-container rounded-lg p-1 transition-all duration-500">
          <div className="relative overflow-hidden rounded-sm">
            <img src="/author-photo.jpeg" alt="Author: Pavel Toman" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
            <div className="absolute top-2 right-2">
              <span className="relative flex h-2 w-2">
                <span className="status-dot-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            </div>
            <div className="info-badge absolute bottom-0 left-0 right-0 py-2 px-3 bg-black/60 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <h4 className="font-bold text-sm gold-metallic">Pavel Toman</h4>
              <p className="text-stone-300 text-xs">AI & Fintech Strategist</p>
            </div>
            {particles.map((p) => (
              <div key={p.id} className="photo-particle" style={{ left: `${p.x}%`, bottom: `${100 - p.y}%`, width: `${p.size}px`, height: `${p.size}px`, transform: `translateX(${p.drift}px)` }}></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};


// --- MAIN APP COMPONENT ---
const App: React.FC = () => {
  const [view, setView] = useState<'summary' | 'detailed'>('summary');
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0) {
        setScrollPercentage((scrollTop / docHeight) * 100);
      } else {
        setScrollPercentage(0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#D4C3B3] selection:text-[#2D241E]">
      {/* Golden Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[100]">
        <div className="h-full gold-progress-gradient" style={{ width: `${scrollPercentage}%` }}></div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-stone-200/80 print:hidden">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setView('summary')}>
            <img src="/zahoracka-praziaren-logo.jpg" alt="Záhorácka pražiareň logo" className="h-16 w-auto" /> {/* Changed h-12 to h-16 */}
            <div className=""> {/* Removed leading-none */}
              <span className="block text-sm font-semibold tracking-widest uppercase">ZÁHORÁCKA PRAŽIAREŇ</span>
              <span className="block text-xs font-medium tracking-widest uppercase text-stone-400/90">GROWTH STRATEGY V2.0</span> {/* Added block and changed text-[9px] to text-xs */}
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-10 text-xs font-bold tracking-widest uppercase text-stone-500">
            {view === 'summary' ? (
              <>
                <a href="#summary" className="animated-underline transition-colors hover:text-[#8B5A2B]">DOJEM</a>
                <button onClick={() => setView('detailed')} className="animated-underline transition-colors hover:text-[#8B5A2B]">ANALÝZA</button>
                <a href="mailto:wisegold.ai@gmail.com" className="animated-underline transition-colors hover:text-[#8B5A2B]">KONTAKT</a>
              </>
            ) : (
              <button onClick={() => setView('summary')} className="flex items-center gap-2 transition-all duration-300 hover:text-white hover:scale-105">
                <ArrowLeft className="w-3 h-3" /> ZPĚT NA ÚVOD
              </button>
            )}
          </div>
          <button onClick={() => { if (view !== 'detailed') { setView('detailed'); setTimeout(() => window.print(), 350); } else { window.print(); } }} className="relative overflow-hidden cta-button shadow-lg hover:shadow-xl hover:drop-shadow-[0_0_8px_rgba(45,36,30,0.5)] transform hover:scale-105 flex items-center gap-2 rounded-sm bg-[#2D241E] px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#1A3C34]">
            <Download className="w-4 h-4" /> PDF Audit
          </button>
        </div>
      </nav>

      <main>
        {view === 'summary' ? (
          <SummaryView onOpenDetailed={() => setView('detailed')} />
        ) : (
          <DetailedView onBack={() => setView('summary')} />
        )}
      </main>

      <footer className="bg-black text-white py-20 px-6 print:hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 items-start">
          {/* Column 1: Agency Branding */}
          <div className="flex flex-col items-start"> {/* Added flex flex-col items-start for left alignment */}
            <img src="/wisegold-logo.jpeg" alt="WiseGold Logo" className="h-48 w-auto object-contain mb-8" />
            <p className="text-stone-400 text-base leading-relaxed"> {/* Changed text-sm to text-base, added leading-relaxed */}
              Strategická transformace digitální identity.</p><p> Kde se precizní analýza potkává s měřitelným růstem.
            </p>
          </div>
          
          {/* Column 2: Contact & Social (Center-aligned) */}
          <div className="flex flex-col items-center text-center">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-4">KONTAKTNÍ ÚDAJE</h5>
            <ul className="space-y-3 mb-8 flex flex-col items-center">
              <li>
                <a href="tel:+420774206249" className="flex items-center gap-2 text-stone-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-sm">+420 774 206 249</span>
                </a>
              </li>
              <li>
                <a href="https://www.wisegold.eu/index" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-stone-400 hover:text-white transition-colors">
                  <Globe className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-sm">www.wisegold.eu</span>
                </a>
              </li>
              <li>
                <a href="mailto:wisegold.ai@gmail.com" className="flex items-center gap-2 text-stone-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-sm">wisegold.ai@gmail.com</span>
                </a>
              </li>
            </ul>
            {/* LinkedIn Icon Upgrade */}
            <a href="https://www.linkedin.com/in/pavel-toman-58101959/" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center w-12 h-12 rounded-full border border-[#D4AF37]/30 text-stone-400 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:scale-110 shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-500 bg-stone-900">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          {/* Column 3: Author Signature (Right-aligned) */}
          <div className="flex flex-col items-end text-right">
            <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-4">VYPRACOVAL</div>
            <div className="flex flex-col items-end gap-2 mb-4">
                <div className="font-serif italic text-xl text-white opacity-80">WiseGold Consultant</div>
                <AuthorCard />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Attribution (Centered across all columns) */}
        <div className="max-w-7xl mx-auto px-6 pt-8 text-[9px] text-stone-600 font-bold uppercase tracking-[0.2em] text-center border-t border-white/5 mt-8"> {/* Adjusted classes for bottom bar */}
          <div>&copy; {new Date().getFullYear()} DŮVĚRNÝ STRATEGICKÝ DOKUMENT.</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
