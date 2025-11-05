'use client';

import { NextSeo, NextSeoProps } from 'next-seo';

interface SeoProps extends NextSeoProps {
  jsonLd?: any;
}

export function Seo({ jsonLd, ...props }: SeoProps) {
  return (
    <>
      <NextSeo {...props} />
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  );
}
