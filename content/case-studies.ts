import type { LucideIcon } from 'lucide-react';
import { BadgeCheck, CheckCircle, Clock, Trees } from 'lucide-react';

export type CaseStudy = {
  title: {
    es: string;
    en: string;
  };
  client: {
    es: string;
    en: string;
  };
  industry: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  image: {
    src: string;
    alt: {
      es: string;
      en: string;
    };
  };
  metrics: Array<{
    label: {
      es: string;
      en: string;
    };
    value: string;
    icon: LucideIcon;
  }>;
};

export const caseStudies: CaseStudy[] = [
  {
    title: {
      es: 'Inspección automática de kits médicos',
      en: 'Automated medical kit inspection',
    },
    client: {
      es: 'Teleflex',
      en: 'Teleflex',
    },
    industry: {
      es: 'Dispositivos médicos',
      en: 'Medical devices',
    },
    description: {
      es: 'Reducción del 94% en errores de ensamblaje mediante visión artificial en tiempo real.',
      en: '94% reduction in assembly errors through real-time computer vision.',
    },
    image: {
      src: '/collaboration/teleflex-info.webp',
      alt: {
        es: 'Operario de Teleflex inspeccionando kits médicos con visión artificial en tiempo real',
        en: 'Teleflex operator inspecting medical kits with real-time computer vision',
      },
    },
    metrics: [
      {
        label: {
          es: 'Reducción de errores',
          en: 'Error reduction',
        },
        value: '94%',
        icon: CheckCircle,
      },
    ],
  },
  {
    title: {
      es: 'Seguridad operativa con LOTO',
      en: 'Operational safety with LOTO',
    },
    client: {
      es: 'Hubbell',
      en: 'Hubbell',
    },
    industry: {
      es: 'Manufactura industrial',
      en: 'Industrial manufacturing',
    },
    description: {
      es: 'Sistema de verificación automática de bloqueo/etiquetado que asegura cumplimiento del 95%.',
      en: 'Automated lockout/tagout verification system ensuring 95% compliance.',
    },
    image: {
      src: '/collaboration/hubbell-info.webp',
      alt: {
        es: 'Especialista de Hubbell verificando procedimientos LOTO desde una consola digital',
        en: 'Hubbell specialist validating LOTO procedures from a digital console',
      },
    },
    metrics: [
      {
        label: {
          es: 'Cumplimiento LOTO',
          en: 'LOTO compliance',
        },
        value: '95%',
        icon: BadgeCheck,
      },
    ],
  },
  {
    title: {
      es: 'Detección urbana inteligente',
      en: 'Intelligent urban detection',
    },
    client: {
      es: 'Juárez Limpio',
      en: 'Juárez Limpio',
    },
    industry: {
      es: 'Gestión urbana',
      en: 'Urban management',
    },
    description: {
      es: 'Mapeo automático de 434k árboles y planificación urbana con IA para optimización de recursos.',
      en: 'Automated mapping of 434k trees and AI-driven urban planning for resource optimization.',
    },
    image: {
      src: '/collaboration/juarez-limpio-info.webp',
      alt: {
        es: 'Visualización aérea de Ciudad Juárez con árboles identificados por inteligencia artificial',
        en: 'Aerial visualization of Ciudad Juárez with trees identified by artificial intelligence',
      },
    },
    metrics: [
      {
        label: {
          es: 'Árboles mapeados',
          en: 'Trees mapped',
        },
        value: '434k',
        icon: Trees,
      },
    ],
  },
  {
    title: {
      es: 'Automatización documental',
      en: 'Document automation',
    },
    client: {
      es: 'SPACE',
      en: 'SPACE',
    },
    industry: {
      es: 'Servicios administrativos',
      en: 'Administrative services',
    },
    description: {
      es: 'Procesamiento inteligente de documentos que ahorra más de 120 horas mensuales en gestión administrativa.',
      en: 'Intelligent document processing saving 120+ hours of administrative work each month.',
    },
    image: {
      src: '/collaboration/space-ocr.webp',
      alt: {
        es: 'Panel de automatización documental de SPACE mostrando validaciones OCR',
        en: 'SPACE document automation dashboard showing OCR validations',
      },
    },
    metrics: [
      {
        label: {
          es: 'Horas ahorradas / mes',
          en: 'Hours saved / month',
        },
        value: '120+',
        icon: Clock,
      },
    ],
  },
];

