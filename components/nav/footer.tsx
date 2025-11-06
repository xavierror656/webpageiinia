'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { useTheme } from 'next-themes';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted && resolvedTheme === 'light' ? '/logo_alt.webp' : '/logo.webp';

  const companyLinks = [
    { name: tNav('about'), href: `/${locale}/about` },
    { name: tNav('careers'), href: `/${locale}/careers` },
    { name: tNav('partners'), href: `/${locale}/partners` },
    { name: tNav('blog'), href: `/${locale}/blog` },
  ];

  const solutionsLinks = [
    { name: tNav('solutions'), href: `/${locale}/solutions` },
    { name: tNav('industries'), href: `/${locale}/industries` },
    { name: tNav('cases'), href: `/${locale}/cases` },
  ];

  const legalLinks = [
    { name: t('privacy'), href: `/${locale}/privacy` },
    { name: t('terms'), href: `/${locale}/terms` },
  ];

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'Email', href: 'mailto:contacto@iinia.ai', icon: Mail },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative h-10 w-10">
                <Image
                  src={logoSrc}
                  alt="IINIA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">IINIA</span>
            </div>
            <p className="text-sm text-muted-foreground">{t('tagline')}</p>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              {t('company')}
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              {t('solutions')}
            </h3>
            <ul className="space-y-2">
              {solutionsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              {t('contact')}
            </h3>
            <div className="space-y-2">
              <a
                href="mailto:contacto@iinia.ai"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                contacto@iinia.ai
              </a>
              <p className="text-sm text-muted-foreground">
                Ciudad Juárez, México
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} IINIA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
