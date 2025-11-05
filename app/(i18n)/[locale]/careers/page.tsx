import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/anim/fade-in';
import { Briefcase } from 'lucide-react';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  return {
    title: locale === 'es' ? 'Carreras' : 'Careers',
    description:
      locale === 'es'
        ? 'Únete a nuestro equipo de innovadores'
        : 'Join our team of innovators',
  };
}

export default async function CareersPage({ params: { locale } }: Props) {
  const t = await getTranslations('careers');

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

      <FadeIn delay={0.2}>
        <Card className="glass-card mx-auto max-w-2xl">
          <CardContent className="flex flex-col items-center py-16 text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500">
              <Briefcase className="h-10 w-10 text-white" />
            </div>
            <h2 className="mb-4 text-2xl font-bold">{t('coming_soon')}</h2>
            <p className="mb-8 text-muted-foreground">
              {locale === 'es'
                ? ' Estamos creciendo rápidamente y pronto abriremos nuevas posiciones. Sigue nuestras redes sociales para estar al tanto de oportunidades.'
                : " We're growing rapidly and will soon open new positions. Follow our social media to stay updated on opportunities."}
            </p>
            <div className="rounded-lg border bg-muted/20 p-6">
              <p className="text-sm text-muted-foreground">
                {locale === 'es'
                  ? ' Envía tu CV a careers@iinia.com'
                  : ' Send your CV to careers@iinia.com'}
              </p>
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}
