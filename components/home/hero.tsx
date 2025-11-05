'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ParticlesBackground } from '@/components/graphics/particles';
import { FadeIn } from '@/components/anim/fade-in';
import { HeroShowcase } from '@/components/home/hero-showcase';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  const t = useTranslations('home.hero');

  return (
    <section className="relative overflow-hidden py-20 lg:py-40">
      <ParticlesBackground />
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="mx-auto max-w-6xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-2 text-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-brand-600" />
              <span className="font-medium">{t('eyebrow')}</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t('title')}
            </h1>

            <p className="mb-10 text-lg text-muted-foreground sm:text-xl">
              {t('subtitle')}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="xl" variant="default" asChild>
                <Link href="#contact">
                  {t('cta_primary')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link href="#solutions">{t('cta_secondary')}</Link>
              </Button>
            </div>

            <div className="mt-20 space-y-8">
              <div className="rounded-3xl border border-brand-600/30 bg-background/70 p-8 text-left shadow-lg shadow-brand-600/10 backdrop-blur sm:text-center">
                <p className="text-base text-muted-foreground">{t('supporting')}</p>
              </div>

              <HeroShowcase />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
