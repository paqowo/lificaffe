import React from 'react';
import { 
  ArrowLeft,
  BarChart3,
  Check
} from 'lucide-react';
import Section from './ui/Section';
import DetailedItem from './ui/DetailedItem';
import ProblemBox from './ui/ProblemBox';
import TimelineStep from './ui/TimelineStep';

const DetailedView: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <div className="bg-white min-h-screen">
    {/* Navigation bar for detailed view */}
    <div className="bg-[#2D241E] text-white pt-32 pb-24 px-6 md:px-12 print:bg-white print:text-black print:pt-10 animate-in fade-in slide-in-from-bottom-4 duration-800">
      <div className="max-w-5xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-[#D4C3B3] mb-12 hover:text-white transition-colors print:hidden">
          <ArrowLeft className="w-4 h-4" /> Zpět na přehled
        </button>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4AF37] mb-4">Interní strategický dokument</div>
            <h1 className="text-4xl md:text-7xl font-serif font-bold mb-4 tracking-tight">Kompletní Audit</h1>
            <p className="text-stone-300 font-light text-xl">Záhorácka pražiareň — Strategie pro rok 2026</p>
          </div>
        </div>
      </div>
    </div>

    {/* Section 1: Detailed Strengths */}
    <Section title="1. Silné stránky a základy" subtitle="Na čem stavíme budoucí úspěch." delay="delay-100">
       <div className="grid md:grid-cols-2 gap-12">
          <DetailedItem 
            title="Vizuální identita a UX" 
            desc="Kvalitní fotografie produktů a prostředí pražírny vytvářejí autentickou atmosféru. Layout je vzdušný a dobře čitelný, což buduje okamžitou důvěru." 
          />
          <DetailedItem 
            title="Struktura a navigace" 
            desc="Menu je logicky rozděleno (Káva, Příslušenství, Předplatné, O nás). Uživatel se v e-shopu snadno orientuje i při nákupu z mobilu." 
          />
          <DetailedItem 
            title="Kávové predplatné" 
            desc="Skvělý retenční nástroj, který je na webu jasně komunikován. Je to klíč k stabilizaci příjmů e-shopu." 
          />
          <DetailedItem 
            title="Důvěryhodnost" 
            desc="Fyzická adresa, telefon a lidská tvář sekce 'O nás' odlišuje pražírnu od anonymních e-shopů." 
          />
          <DetailedItem 
            title="Vizuální schizofrenie" 
            desc="Konflikt tradiční regionální značky 'Záhorácka pražiareň' s AI generovanými tropickými motivy (kolibříci). Vzniká zmatek, který snižuje autentičnost a důvěru zákazníků." 
          />
       </div>
    </Section>

    {/* Section 2: Detailed Problems */}
    <Section title="2. Slabiny a technické bariéry" bg="bg-stone-50" delay="delay-200">
       <div className="space-y-12">
          <ProblemBox 
            area="SEO"
            title="On-page SEO (Meta tagy a nadpisy)"
            detail="Meta popisky jsou generické nebo chybí. H1 nadpisy u produktů postrádají strategická klíčová slova."
            impact="Nízká organická dohledatelnost a CTR z vyhledávání."
          />
          <ProblemBox 
            area="UX/CRO"
            title="Konverzní cesta a vizuální tření"
            detail="Tlačítka 'Do košíka' jsou vizuálně nevýrazná. Chybí jasné 'Výhody nákupu' přímo v detailu u ceny."
            impact="Nižší konverzní poměr u nových návštěvníků."
          />
          <ProblemBox 
            area="CONTENT"
            title="Absence Social Proof a hloubky"
            detail="Chybí hodnocení od zákazníků u produktů. Popisy káv postrádají detailní návody na přípravu (recepty)."
            impact="Ztracená příležitost pro budování autority a SEO na long-tail."
          />
          <ProblemBox 
            area="Technická data webu"
            title="Kritické technické nedostatky"
            detail={
              <>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Rychlost:</strong> 8,9 sekundy (Cíl: pod 5s)</li>
                  <li><strong>Váha stránky:</strong> 12,81 MB (84 % tvoří neoptimalizované obrázky)</li>
                  <li><strong>CLS (Nestabilita):</strong> 0,5038 (Vysoká vizuální nestabilita při načítání)</li>
                  <li><strong>Bezpečnost:</strong> SSL certifikát expiruje 4. února 2026, chybí SPF záznam (riziko spamu)</li>
                </ul>
              </>
            }
            impact="Zpomaluje načítání, snižuje SEO skóre, ohrožuje bezpečnost a důvěryhodnost."
          />
          <ProblemBox 
            area="BUSINESS BARRIER"
            title="Kritický limit dopravy zdarma"
            detail={
              <>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Aktuální limit:</strong> 80 € (nedosažitelný pro většinu koncových zákazníků)</li>
                  <li><strong>Konkurence (Ebenica, Coffeein):</strong> 40–50 €</li>
                  <li><strong>Strategické doporučení:</strong> Snížit na 45 € pro zvýšení AOV a snížení počtu opuštěných košíků.</li>
                </ul>
              </>
            }
            impact="Brání ve vyšších objednávkách a způsobuje ztrátu potenciálních zákazníků."
          />
       </div>
    </Section>

    {/* Section 3: SEO Transformation Table */}
    <Section title="3. Strategie: SEO Transformace" delay="delay-300">
       <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-stone-200">
             <thead>
                <tr className="bg-stone-50 border-b border-stone-200">
                   <th className="p-6 font-bold text-xs uppercase tracking-widest text-stone-400">Stránka</th>
                   <th className="p-6 font-bold text-xs uppercase tracking-widest text-stone-400">Aktuální Meta Title</th>
                   <th className="p-6 font-bold text-xs uppercase tracking-widest text-stone-400">Navržený Meta Title</th>
                </tr>
             </thead>
             <tbody className="text-sm">
                <tr className="border-b border-stone-100 transition-colors hover:bg-stone-50">
                   <td className="p-6 font-bold">Homepage</td>
                   <td className="p-6 text-stone-500">Záhorácka pražiareň</td>
                   <td className="p-6 font-medium text-emerald-700 underline underline-offset-4">Čerstvo pražená káva | Záhorácka pražiareň</td>
                </tr>
                <tr className="border-b border-stone-100 transition-colors hover:bg-stone-50">
                   <td className="p-6 font-bold">Kategorie Káva</td>
                   <td className="p-6 text-stone-500">Káva</td>
                   <td className="p-6 font-medium text-emerald-700 underline underline-offset-4">Výberová zrnková káva — čerstvo pražená | Záhorácka pražiareň</td>
                </tr>
                <tr className="transition-colors hover:bg-stone-50">
                   <td className="p-6 font-bold">Detail produktu</td>
                   <td className="p-6 text-stone-500">Brazília Santos</td>
                   <td className="p-6 font-medium text-emerald-700 underline underline-offset-4">Káva Brazília Santos 250g | Záhorácka pražiareň</td>
                </tr>
             </tbody>
          </table>
       </div>
       <div className="mt-8 text-sm text-stone-500">
          <strong>Důležité:</strong> Chybí soubor <code>Sitemap.xml</code> a meta popisky mají často jen 78 znaků namísto doporučených 150-220.
       </div>
    </Section>

    {/* Section 4: Implementation Plan */}
    <Section title="4. Akční Plán (Roadmap)" bg="bg-[#2D241E]" className="text-white" delay="delay-400">
       <div className="grid md:grid-cols-3 gap-16">
          <div className="space-y-12">
             <h3 className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs">Fáze 1: Quick Wins (Týden 1)</h3>
             <ul className="space-y-6">
                <TimelineStep title="Limit dopravy" desc="Snížení limitu dopravy zdarma na 45 €." />
                <TimelineStep title="Vizuální korekce" desc="Výměna 'kolibříka' za autentickou fotku pražírny." />
                <TimelineStep title="Optimalizace obrázků" desc="Převod klíčových obrázků do formátu WebP pro zrychlení načítání." />
             </ul>
          </div>
          <div className="space-y-12">
             <h3 className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs">Fáze 2: Důvěra a SEO (Týden 2 – Měsíc 1)</h3>
             <ul className="space-y-6">
                <TimelineStep title="Social Proof" desc="Implementace systému recenzí (např. Heureka) pro budování důvěry." />
                <TimelineStep title="Ikony důvěry" desc="Přidání ikon 'Rodinná firma' pod tlačítko košíku." />
                <TimelineStep title="Bezpečnost a dohledatelnost" desc="Oprava expirace SSL certifikátu a přidání SPF záznamu." />
             </ul>
          </div>
          <div className="space-y-12">
             <h3 className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs">Fáze 3: Autorita (Měsíc 1–3)</h3>
             <ul className="space-y-6">
                <TimelineStep title="Obsahový marketing" desc="Spuštění blogu s návody na přípravu kávy (např. Moka konvička, Chemex)." />
                <TimelineStep title="Re-design vizuálu" desc="Kompletní re-design vizuální identity webu do zemitých tónů." />
                <TimelineStep title="Brand Story" desc="Rozšíření sekce 'O nás' o příběh značky a vize." />
             </ul>
          </div>
       </div>
       <div className="mt-12 text-center text-stone-400 text-[10px] italic">
          Tento dokument je důvěrný a je určen výhradně pro vedení Záhorácké pražírny. Vypracováno pro Strategii 2026.
       </div>
    </Section>

  </div>
);

export default DetailedView;
