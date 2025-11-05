import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn } from '@/components/anim/fade-in';
import { Handshake } from 'lucide-react';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  return {
    title: locale === 'es' ? 'Socios' : 'Partners',
    description:
      locale === 'es'
        ? 'Colaboramos con las mejores empresas tecnológicas'
        : 'We collaborate with the best tech companies',
  };
}

// TODO: Replace with real partner data
const partnerCategories = [
  {
    titleEs: ' Socios Tecnológicos',
    titleEn: ' Technology Partners',
    partners: ['AWS', 'Google Cloud', 'Microsoft Azure', 'NVIDIA'],
  },
  {
    titleEs: ' Socios Integradores',
    titleEn: ' System Integrators',
    partners: ['Partner A', 'Partner B', 'Partner C'],
  },
  {
    titleEs: ' Alianzas Académicas',
    titleEn: ' Academic Partnerships',
    partners: ['University X', 'Research Center Y', 'Institute Z'],
  },
];

export default async function PartnersPage({ params: { locale } }: Props) {
  const t = await getTranslations('partners');

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

      <div className="space-y-12">
        {partnerCategories.map((category, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Handshake className="h-6 w-6 text-brand-600" />
                  {locale === 'es' ? category.titleEs : category.titleEn}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {category.partners.map((partner, idx) => (
                    <div
                      key={idx}
                      className="flex h-24 items-center justify-center rounded-lg border bg-muted/20 px-6 text-center font-medium"
                    >
                      {partner}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <Card className="glass-card mt-12">
          <CardContent className="py-12 text-center">
            <h2 className="mb-4 text-2xl font-bold">
              {locale === 'es'
                ? ' ¿Quieres ser socio?'
                : ' Want to become a partner?'}
            </h2>
            <p className="text-muted-foreground">
              {locale === 'es'
                ? ' Contáctanos en partnerships@iinia.com'
                : ' Contact us at partnerships@iinia.com'}
            </p>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}
