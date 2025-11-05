import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FadeIn } from '@/components/anim/fade-in';
import Link from 'next/link';
import { solutions } from '@/content/solutions';
import { cn } from '@/lib/utils';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  return {
    title: locale === 'es' ? 'Soluciones' : 'Solutions',
    description:
      locale === 'es'
        ? 'Tecnología de IA adaptada a tus necesidades industriales'
        : 'AI technology adapted to your industrial needs',
  };
}

export default async function SolutionsPage({ params: { locale } }: Props) {
  const t = await getTranslations('solutions');
  const localeKey = locale === 'es' ? 'es' : 'en';
  const highlightedSolutions = solutions.slice(0, 2);

  return (
    <div className="container mx-auto px-4 py-20">
      <FadeIn>
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {t('title')}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {highlightedSolutions.map((solution, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <Card
              className={cn(
                'glass-card h-full transition-all hover:shadow-lg hover:-translate-y-1',
                solution.card.backgroundImage && 'relative overflow-hidden text-white'
              )}
            >
              {solution.card.backgroundImage && (
                <>
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${solution.card.backgroundImage})` }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60"
                    aria-hidden="true"
                  />
                </>
              )}
              <CardHeader className={cn(solution.card.backgroundImage && 'relative z-10')}>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500">
                  <solution.card.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl">
                  {solution.card.title[localeKey]}
                </CardTitle>
              </CardHeader>
              <CardContent className={cn(solution.card.backgroundImage && 'relative z-10')}>
                <CardDescription
                  className={cn(
                    'mb-4 text-base text-muted-foreground',
                    solution.card.backgroundImage && 'text-white/90'
                  )}
                >
                  {solution.card.description[localeKey]}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {solution.card.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className={cn(
                        solution.card.backgroundImage && 'border-white/30 bg-white/10 text-white'
                      )}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className={cn(solution.card.backgroundImage && 'relative z-10')}>
                <Button
                  variant="ghost"
                  className={cn('w-full', solution.card.backgroundImage && 'text-white hover:text-white')}
                  asChild
                >
                  <Link href={`/${locale}/solutions/${solution.slug}`}>{t('view_details')}</Link>
                </Button>
              </CardFooter>
            </Card>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
