import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from '@/components/anim/fade-in';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getSolutionBySlug, solutions } from '@/content/solutions';
import { cn } from '@/lib/utils';

type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

const getLocaleKey = (locale: string) => (locale === 'es' ? 'es' : 'en');

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params: { locale, slug } }: Props): Promise<Metadata> {
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return {};
  }

  const localeKey = getLocaleKey(locale);

  return {
    title: solution.metadata.title[localeKey],
    description: solution.metadata.description[localeKey],
  };
}

export default function SolutionDetailPage({ params: { locale, slug } }: Props) {
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const localeKey = getLocaleKey(locale);
  const { hero, valueProposition, features, hardware, useCases, kpis, methodology, differentiators, plans, security, services, keyMessages, pitch } =
    solution;

  const moduleLabel = localeKey === 'es' ? 'Módulo' : 'Module';
  const functionalityLabel = localeKey === 'es' ? 'Funcionalidad' : 'Functionality';
  const contactTitle =
    localeKey === 'es'
      ? '¿Listo para llevar Vision AI a tu planta?'
      : 'Ready to bring Vision AI to your plant?';
  const contactSubtitle =
    localeKey === 'es'
      ? 'Agenda una sesión estratégica con nuestros especialistas para mapear tu caso de uso.'
      : 'Book a strategic session with our specialists to map your use case.';
  const contactCta = localeKey === 'es' ? 'Agendar demo' : 'Book a demo';

  return (
    <div className="container mx-auto max-w-6xl px-4 py-20">
      <FadeIn>
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4 text-sm uppercase tracking-wide">
            {hero.eyebrow[localeKey]}
          </Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {hero.title[localeKey]}
          </h1>
          <p className="text-lg text-muted-foreground">{hero.description[localeKey]}</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {hero.highlights.map((highlight) => (
            <div key={highlight.en} className="flex items-start gap-3 rounded-2xl border bg-muted/40 p-5">
              <CheckCircle2 className="mt-1 h-5 w-5 text-brand-600" />
              <p className="text-sm text-muted-foreground">{highlight[localeKey]}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {solution.card.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </FadeIn>

      <section className="mt-20">
        <FadeIn>
          <header className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight">{valueProposition.title[localeKey]}</h2>
            <p className="mt-2 text-muted-foreground">
              {localeKey === 'es'
                ? 'Visión artificial industrial lista para planta con beneficios cuantificables desde el día uno.'
                : 'Plant-ready industrial vision AI delivering measurable outcomes from day one.'}
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {valueProposition.items.map((item) => (
              <Card key={item.value.en} className="border-muted/70 bg-muted/30">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{item.value[localeKey]}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.benefit[localeKey]}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="mt-20">
        <FadeIn>
          <header className="mb-6">
            <h2 className="text-3xl font-semibold tracking-tight">{features.title[localeKey]}</h2>
          </header>
          <div className="overflow-hidden rounded-2xl border bg-background">
            <table className="w-full table-fixed border-collapse">
              <thead className="bg-muted/60 text-left text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-6 py-4">{moduleLabel}</th>
                  <th className="px-6 py-4">{functionalityLabel}</th>
                </tr>
              </thead>
              <tbody>
                {features.items.map((feature, index) => (
                  <tr key={feature.module.en} className={index % 2 === 0 ? 'bg-muted/30' : undefined}>
                    <td className="px-6 py-4 align-top text-base font-semibold">{feature.module[localeKey]}</td>
                    <td className="px-6 py-4 align-top text-muted-foreground">{feature.functionality[localeKey]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </section>

      <section className="mt-20">
        <FadeIn>
          <header className="mb-6">
            <h2 className="text-3xl font-semibold tracking-tight">{hardware.title[localeKey]}</h2>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {hardware.items.map((item) => (
              <Card
                key={item.name.en}
                className={cn(
                  'h-full border-muted/70',
                  item.backgroundImage && 'relative overflow-hidden text-white'
                )}
              >
                {item.backgroundImage && (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.backgroundImage})` }}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60"
                      aria-hidden="true"
                    />
                  </>
                )}
                <CardHeader className={cn(item.backgroundImage && 'relative z-10')}>
                  <CardTitle className="text-xl">{item.name[localeKey]}</CardTitle>
                </CardHeader>
                <CardContent className={cn('text-muted-foreground', item.backgroundImage && 'relative z-10 text-white/90')}>
                  <ul className="space-y-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet.en} className="flex gap-2">
                        <span className={cn('text-brand-600', item.backgroundImage && 'text-white')}>•</span>
                        <span>{bullet[localeKey]}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="mt-20 grid gap-20 lg:grid-cols-2">
        <FadeIn>
          <header className="mb-6">
            <h2 className="text-3xl font-semibold tracking-tight">{useCases.title[localeKey]}</h2>
          </header>
          <Card className="h-full border-muted/70 bg-muted/30">
            <CardContent className="pt-8">
              <ul className="space-y-3 text-muted-foreground">
                {useCases.items.map((item) => (
                  <li key={item.en} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-brand-600" />
                    <span>{item[localeKey]}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </FadeIn>
        <FadeIn>
          <header className="mb-6">
            <h2 className="text-3xl font-semibold tracking-tight">{kpis.title[localeKey]}</h2>
          </header>
          <div className="grid gap-4 sm:grid-cols-2">
            {kpis.items.map((kpi) => (
              <Card key={kpi.indicator.en} className="border-muted/70">
                <CardHeader className="text-center">
                  <p className="text-sm font-semibold tracking-wide text-muted-foreground">
                    {kpi.indicator[localeKey]}
                  </p>
                  <CardTitle className="mt-2 text-3xl font-bold text-brand-700">
                    {kpi.impact[localeKey]}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="mt-20">
        <FadeIn>
          <header className="mb-6">
            <h2 className="text-3xl font-semibold tracking-tight">{methodology.title[localeKey]}</h2>
          </header>
          <ol className="space-y-6">
            {methodology.phases.map((phase, index) => (
              <li key={phase.name.en} className="relative rounded-2xl border bg-muted/20 p-6 pl-10">
                <span className="absolute left-4 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold">{phase.name[localeKey]}</h3>
                <p className="mt-2 text-muted-foreground">{phase.deliverable[localeKey]}</p>
              </li>
            ))}
          </ol>
        </FadeIn>
      </section>

      <section className="mt-20 grid gap-12 lg:grid-cols-2">
        <FadeIn>
          <header className="mb-4">
            <h2 className="text-3xl font-semibold tracking-tight">{differentiators.title[localeKey]}</h2>
          </header>
          <ul className="space-y-3 text-muted-foreground">
            {differentiators.items.map((item) => (
              <li key={item.en} className="flex gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 text-brand-600" />
                <span>{item[localeKey]}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn>
          <header className="mb-4">
            <h2 className="text-3xl font-semibold tracking-tight">{plans.title[localeKey]}</h2>
          </header>
          <div className="grid gap-4">
            {plans.items.map((plan) => (
              <Card key={plan.name.en} className="border-muted/70">
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name[localeKey]}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    {plan.includes.map((include) => (
                      <li key={include.en} className="flex gap-2">
                        <span className="text-brand-600">•</span>
                        <span>{include[localeKey]}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{plans.note[localeKey]}</p>
        </FadeIn>
      </section>

      <section className="mt-20 grid gap-12 lg:grid-cols-3">
        <FadeIn>
          <Card className="h-full border-muted/70">
            <CardHeader>
              <CardTitle className="text-xl">{security.title[localeKey]}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                {security.items.map((item) => (
                  <li key={item.en} className="flex gap-2">
                    <span className="text-brand-600">•</span>
                    <span>{item[localeKey]}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </FadeIn>
        <FadeIn>
          <Card className="h-full border-muted/70">
            <CardHeader>
              <CardTitle className="text-xl">{services.title[localeKey]}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                {services.items.map((item) => (
                  <li key={item.en} className="flex gap-2">
                    <span className="text-brand-600">•</span>
                    <span>{item[localeKey]}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </FadeIn>
        <FadeIn>
          <Card className="h-full border-muted/70">
            <CardHeader>
              <CardTitle className="text-xl">{keyMessages.title[localeKey]}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                {keyMessages.items.map((item) => (
                  <li key={item.en} className="flex gap-2">
                    <span className="text-brand-600">•</span>
                    <span>{item[localeKey]}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </FadeIn>
      </section>

      <section className="mt-20">
        <FadeIn>
          <Card className="border-muted/70 bg-brand-950 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">{pitch.title[localeKey]}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">{pitch.description[localeKey]}</p>
            </CardContent>
          </Card>
        </FadeIn>
      </section>

      <section className="mt-20">
        <FadeIn>
          <div className="rounded-3xl border bg-muted/20 p-10 text-center">
            <h3 className="text-3xl font-semibold tracking-tight">{contactTitle}</h3>
            <p className="mt-3 text-muted-foreground">{contactSubtitle}</p>
            <Button asChild size="lg" className="mt-6">
              <Link href={`/${locale}/contact`}>{contactCta}</Link>
            </Button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
