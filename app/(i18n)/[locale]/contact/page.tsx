import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn } from '@/components/anim/fade-in';
import { ContactForm } from '@/components/forms/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  return {
    title: locale === 'es' ? 'Contacto' : 'Contact',
    description:
      locale === 'es'
        ? 'Conversemos sobre cómo la IA puede transformar tu negocio'
        : "Let's talk about how AI can transform your business",
  };
}

const contactInfo = [
  {
    icon: Mail,
    labelEs: ' Email',
    labelEn: ' Email',
    value: 'contacto@iinia.ai',
    href: 'mailto:contacto@iinia.ai',
  },
  {
    icon: Phone,
    labelEs: ' Teléfono',
    labelEn: ' Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    labelEs: ' Oficina',
    labelEn: ' Office',
    value: 'San Francisco, CA',
    href: null,
  },
];

export default async function ContactPage({ params: { locale } }: Props) {
  const t = await getTranslations('contact');

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

      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
        {/* Contact Info */}
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-accent-500">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        {locale === 'es' ? info.labelEs : info.labelEn}
                      </CardTitle>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm text-muted-foreground hover:text-brand-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* Contact Form */}
        <FadeIn delay={0.2} className="lg:col-span-2">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl">
                {locale === 'es'
                  ? ' Envíanos un mensaje'
                  : ' Send us a message'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
