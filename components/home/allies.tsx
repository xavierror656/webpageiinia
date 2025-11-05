'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { allies } from '@/content/allies';
import { FadeIn } from '@/components/anim/fade-in';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type AlliesSectionProps = {
  locale: 'es' | 'en';
  copy: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
};

const SCROLL_AMOUNT = 260;

export function AlliesSection({ locale, copy }: AlliesSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollControls = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const atStart = scrollLeft <= 0;
    const atEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth;
    setCanScrollLeft(!atStart);
    setCanScrollRight(!atEnd);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateScrollControls();
    const handleScroll = () => updateScrollControls();
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [updateScrollControls]);

  const handleScroll = useCallback((direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    const offset = direction === 'left' ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
    container.scrollBy({ left: offset, behavior: 'smooth' });
  }, []);

  const priorityLogo = useMemo(() => allies[0]?.name, []);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(140,0,255,0.16),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(140,0,255,0.25),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-600/12 via-transparent to-transparent dark:from-brand-600/20" />

      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-brand-600/20 bg-brand-600/10 px-4 py-1.5 text-sm font-medium text-brand-600 dark:border-brand-600/40 dark:bg-brand-600/20">
              {copy.eyebrow}
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              {copy.title}
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">{copy.subtitle}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative mt-12">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background via-background/80 to-transparent dark:from-background/95" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background via-background/80 to-transparent dark:from-background/95" />

            <div className="flex items-center justify-between gap-4">
              <Button
                variant="outline"
                size="icon"
                className="hidden h-12 w-12 rounded-full border-border/60 text-foreground/80 transition hover:border-brand-600 hover:text-brand-600 md:inline-flex"
                onClick={() => handleScroll('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll allies left"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div
                ref={scrollRef}
                className="no-scrollbar flex w-full gap-6 overflow-x-auto scroll-smooth py-4 snap-x snap-mandatory"
              >
                {allies.map((ally) => (
                  <div
                    key={ally.name}
                    className="group relative basis-[220px] shrink-0 snap-start rounded-2xl bg-background/70 p-6 shadow-lg shadow-brand-600/15 ring-1 ring-white/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:ring-brand-600/40 dark:bg-background/80"
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 dark:border-white/5" />
                    <div className="relative z-10 flex flex-col items-center gap-5">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl ring-1 ring-black/5 dark:bg-white/95 dark:ring-black/10">
                        <Image
                          src={ally.image}
                          alt={locale === 'es' ? ally.alt.es : ally.alt.en}
                          width={72}
                          height={72}
                          className="h-14 w-14 object-contain"
                          priority={ally.name === priorityLogo}
                        />
                      </div>
                      <p className="text-center text-sm font-semibold text-foreground/80 group-hover:text-foreground">
                        {ally.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                className="hidden h-12 w-12 rounded-full border-border/60 text-foreground/80 transition hover:border-brand-600 hover:text-brand-600 md:inline-flex"
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll allies right"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
