'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn } from '@/components/anim/fade-in';
import { Cpu, Factory, Globe2 } from 'lucide-react';

const icons = {
  prop_1: Globe2,
  prop_2: Cpu,
  prop_3: Factory,
};

export function ValueProps() {
  const t = useTranslations('home.value_props');

  const props = [
    { key: 'prop_1', icon: icons.prop_1 },
    { key: 'prop_2', icon: icons.prop_2 },
    { key: 'prop_3', icon: icons.prop_3 },
  ];

  return (
    <section id="value-props" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {t('title')}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {t('subtitle')}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {props.map(({ key, icon: Icon }, index) => (
            <FadeIn key={key} delay={index * 0.1}>
              <Card className="glass-card h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-accent-500">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{t(`${key}_title`)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {t(`${key}_desc`)}
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
