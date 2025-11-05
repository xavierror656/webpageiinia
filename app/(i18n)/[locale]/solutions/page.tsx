import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FadeIn } from '@/components/anim/fade-in';
import { Brain, Cpu, LineChart, Shield } from 'lucide-react';
import Link from 'next/link';

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

// TODO: Replace with real data from CMS or API
const solutionsData = [
  {
    icon: Brain,
    titleEs: ' Optimización de Producción',
    titleEn: ' Production Optimization',
    descEs: ' IA que optimiza tus líneas de producción en tiempo real',
    descEn: ' AI that optimizes your production lines in real-time',
    tags: ['AI', 'Automation', 'IoT'],
  },
  {
    icon: LineChart,
    titleEs: ' Mantenimiento Predictivo',
    titleEn: ' Predictive Maintenance',
    descEs: ' Predice fallos antes de que ocurran y reduce costos',
    descEn: ' Predict failures before they occur and reduce costs',
    tags: ['ML', 'Predictive', 'Analytics'],
  },
  {
    icon: Cpu,
    titleEs: ' Control de Calidad',
    titleEn: ' Quality Control',
    descEs: ' Detección automática de defectos con visión por computadora',
    descEn: ' Automatic defect detection with computer vision',
    tags: ['Computer Vision', 'QA', 'Deep Learning'],
  },
  {
    icon: Shield,
    titleEs: ' Gestión de Energía',
    titleEn: ' Energy Management',
    descEs: ' Optimiza consumo energético y reduce huella de carbono',
    descEn: ' Optimize energy consumption and reduce carbon footprint',
    tags: ['Sustainability', 'IoT', 'Optimization'],
  },
];

export default async function SolutionsPage({ params: { locale } }: Props) {
  const t = await getTranslations('solutions');

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

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {solutionsData.map((solution, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <Card className="glass-card h-full transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500">
                  <solution.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl">
                  {locale === 'es' ? solution.titleEs : solution.titleEn}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-base">
                  {locale === 'es' ? solution.descEs : solution.descEn}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {solution.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" asChild>
                  <Link href={`/${locale}/contact`}>{t('view_details')}</Link>
                </Button>
              </CardFooter>
            </Card>
          </FadeIn>
        ))}
      </div>

      {/* Placeholder for more content */}
      <div className="mt-16 rounded-2xl border bg-muted/20 p-12 text-center">
        <p className="text-muted-foreground">
           Add more solution details, case studies, technical specs
        </p>
      </div>
    </div>
  );
}
