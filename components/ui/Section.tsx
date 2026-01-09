import React, { useState, useEffect, useRef } from 'react';

const Section: React.FC<{ title?: string; subtitle?: string; children: React.ReactNode; bg?: string; id?: string; className?: string; delay?: string }> = ({ title, subtitle, children, bg, id, className, delay }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // When the element is in view, set isVisible to true
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Stop observing once it's visible to prevent re-animation
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1 // Trigger when 10% of the element is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id={id}
            className={`py-24 px-6 md:px-12 ${bg || ''} ${className || ''} transition-all duration-800 ease-out ${delay || ''} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } print:break-inside-avoid print:opacity-100 print:translate-y-0 print:duration-0`}
        >
            <div className="max-w-6xl mx-auto">
                {title && (
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-4 tracking-tight">
                            {title}
                        </h2>
                        {subtitle && <p className="text-stone-500 font-light text-lg max-w-2xl">{subtitle}</p>}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
