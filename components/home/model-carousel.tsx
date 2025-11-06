'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useAnimationControls, useReducedMotion } from 'framer-motion';

const MODEL_KEYS = [
  'metaai',
  'mistral',
  'gemma',
  'qwen',
  'deepseek',
  'dbrx',
  'openai',
  'n8n',
  'alibaba',
  'huggingface',
  'ollama',
  'openrouter',
] as const;
type ModelKey = (typeof MODEL_KEYS)[number];

type CarouselItem = {
  key: ModelKey;
  name: string;
  icon: string;
};

export function ModelCarousel() {
  const t = useTranslations('home.model_carousel');
  const controls = useAnimationControls();
  const prefersReducedMotion = useReducedMotion();

  const items = useMemo<CarouselItem[]>(
    () =>
      MODEL_KEYS.map((key) => ({
        key,
        name: t(`items.${key}.name`),
        icon: `/icons/models/${key}-color.svg`,
      })),
    [t]
  );

  const marqueeItems = useMemo(() => [...items, ...items], [items]);

  const startAnimation = useCallback(() => {
    if (prefersReducedMotion) {
      controls.set({ x: 0 });
      return;
    }

    controls.start({
      x: ['0%', '-50%'],
      transition: { duration: 35, ease: 'linear', repeat: Infinity },
    });
  }, [controls, prefersReducedMotion]);

  const handlePause = useCallback(() => {
    controls.stop();
  }, [controls]);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  return (
    <div
      className="overflow-hidden"
      aria-label={t('title')}
    >
      <span className="sr-only">{t('subtitle')}</span>
      <div
        className="px-4 md:px-6"
        onMouseEnter={handlePause}
        onMouseLeave={startAnimation}
        onFocus={handlePause}
        onBlur={startAnimation}
        tabIndex={0}
        aria-live="polite"
      >
        <motion.div
          className="flex gap-6 py-4"
          animate={controls}
          style={{ width: 'max-content' }}
        >
          {marqueeItems.map((item, index) => (
            <motion.div
              key={`${item.key}-${index}`}
              className="group flex h-24 w-24 flex-shrink-0 items-center justify-center transition hover:scale-105"
              title={item.name}
              aria-label={item.name}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.15,
              }}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={96}
                height={96}
                className="h-20 w-20 object-contain transition duration-300 ease-out grayscale group-hover:scale-110 group-hover:grayscale-0"
                priority={false}
              />
              <span className="sr-only">{item.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
