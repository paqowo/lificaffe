import React from 'react';
import { 
  AlertCircle, 
  CheckCircle2, 
  Coffee, 
  Clock, 
  Truck, 
  Search,
  Zap,
  BarChart3,
  ArrowRight,
  MousePointer2,
  Smartphone,
  Star
} from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';

const SummaryView: React.FC<{ onOpenDetailed: () => void }> = ({ onOpenDetailed }) => (
  <div className="animate-in fade-in duration-700">
    {/* Hero Section */}
    <header className="relative min-h-screen flex items-center pt-20 overflow-hidden print:hidden">
      <div className="absolute inset-0 hero-gradient z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <div className="inline-flex items-center gap-2 bg-[#1A3C34] px-4 py-1.5 rounded-full mb-8">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Digital Growth Audit v2.0</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[1.1] mb-8">
            Příběh regionu, <br />
            <span className="italic text-[#D4C3B3]">výkon e-shopu.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-stone-300 max-w-xl leading-relaxed mb-12">
            Jak proměnit autentickou atmosféru Záhorácké pražírny v nejvýkonnější e-commerce platformu v segmentu.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={onOpenDetailed}
              className="bg-white text-[#2D241E] px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#D4C3B3] transition-all flex items-center gap-2 group shadow-xl"
            >
              Kompletní rozbor <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        <div className="hidden lg:block">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-lg shadow-2xl">
             <div className="space-y-8">
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-xs uppercase tracking-widest text-stone-400">Vizuální dojem</span>
                  <span className="text-2xl font-serif text-emerald-400">10/10</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-xs uppercase tracking-widest text-stone-400">SEO Autorita</span>
                  <span className="text-2xl font-serif text-amber-400">4/10</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-xs uppercase tracking-widest text-stone-400">Konverzní cesta</span>
                  <span className="text-2xl font-serif text-blue-400">6/10</span>
                </div>
                <div className="pt-4">
                   <p className="text-xs text-stone-400 italic">"Základ je vynikající, potenciál růstu leží v technických detailech a obsahu."</p>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Trust Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-stone-200 py-6 hidden md:block">
         <div className="max-w-7xl mx-auto px-6 flex justify-between items-center opacity-60">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-stone-600">
              <Truck className="w-4 h-4" /> Doprava nad 50 € zdarma
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-stone-600">
              <Clock className="w-4 h-4" /> Pražíme každý týden
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-stone-600">
              <CheckCircle2 className="w-4 h-4" /> Vlastní prodejna v Senici
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-stone-600">
              <Star className="w-4 h-4" /> Lokální tradice Záhoria
            </div>
         </div>
      </div>
    </header>

    {/* Section 1: Impression */}
    <Section id="summary" title="Celkový dojem" subtitle="Analýza prvního kontaktu návštěvníka se značkou.">
      <div className="bg-white border border-stone-200 p-10 md:p-16 relative overflow-hidden shadow-sm">
        <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-12">
          <Coffee size={250} />
        </div>
        <div className="relative z-10">
          <p className="text-2xl md:text-4xl font-serif italic leading-relaxed text-stone-800 mb-8">
            "Web působí velmi profesionálně a řemeslně. Ihned po přistání je jasné, co nabízí – čerstvě praženou kávu s lidskou tváří. Celková estetika buduje vysokou míru důvěryhodnosti již v prvních sekundách."
          </p>
          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-stone-100">
             <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <p className="text-sm text-stone-500">Skvělá vizuální identita a UX, která ladí s regionálním původem.</p>
             </div>
             <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-[#A04523] shrink-0" />
                <p className="text-sm text-stone-500">Zjištěné slabiny v SEO a konverzní cestě zbytečně brzdí prodeje.</p>
             </div>
          </div>
        </div>
      </div>
    </Section>

    {/* Section 2: Quick Audit */}
    <Section bg="bg-stone-50/50" title="Klíčové nálezy">
       <div className="grid md:grid-cols-3 gap-8">
          <Card 
            icon={<Search className="w-6 h-6 text-[#1A3C34]" />}
            title="SEO Bariéry"
            desc="Generické meta popisky a slabé H1 nadpisy omezují organickou návštěvnost z Google."
          />
          <Card 
            icon={<MousePointer2 className="w-6 h-6 text-[#1A3C34]" />}
            title="UX Tření"
            desc="Nákupní tlačítka v seznamech jsou vizuálně nevýrazná, což snižuje konverzní poměr."
          />
          <Card 
            icon={<Smartphone className="w-6 h-6 text-[#1A3C34]" />}
            title="Technický stav"
            desc="Rychlost na mobilech je dobrá, ale vyžaduje optimalizaci velkých obrázků."
          />
       </div>
    </Section>

    {/* Section 3: Strategic Call */}
    <Section>
       <div className="bg-[#2D241E] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
             <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Cesta k růstu je v detailech.</h2>
             <p className="text-stone-400 text-lg mb-10 leading-relaxed">
               Vytvořili jsme hloubkový akční plán, který pokrývá vše od SEO titulků, přes zvýraznění CTA až po B2B strategii pro firmy.
             </p>
             <button 
              onClick={onOpenDetailed}
              className="bg-[#1A3C34] text-white px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#2D241E] transition-all"
             >
               Otevřít kompletní rozbor
             </button>
          </div>
          <div className="absolute bottom-0 right-0 p-10 opacity-10 hidden md:block">
             <BarChart3 size={300} />
          </div>
       </div>
    </Section>
  </div>
);

export default SummaryView;
