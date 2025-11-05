import type { LucideIcon } from 'lucide-react';
import { Scan } from 'lucide-react';

type LocalizedString = {
  en: string;
  es: string;
};

type LocalizedParagraph = LocalizedString;

type LocalizedBullet = LocalizedString;

export type SolutionContent = {
  slug: string;
  card: {
    icon: LucideIcon;
    title: LocalizedString;
    description: LocalizedString;
    tags: string[];
    backgroundImage?: string;
  };
  metadata: {
    title: LocalizedString;
    description: LocalizedString;
  };
  hero: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    description: LocalizedParagraph;
    highlights: LocalizedBullet[];
  };
  valueProposition: {
    title: LocalizedString;
    items: Array<{
      value: LocalizedString;
      benefit: LocalizedString;
    }>;
  };
  features: {
    title: LocalizedString;
    items: Array<{
      module: LocalizedString;
      functionality: LocalizedString;
    }>;
  };
  hardware: {
    title: LocalizedString;
    items: Array<{
      name: LocalizedString;
      bullets: LocalizedBullet[];
      backgroundImage?: string;
    }>;
  };
  useCases: {
    title: LocalizedString;
    items: LocalizedBullet[];
  };
  kpis: {
    title: LocalizedString;
    items: Array<{
      indicator: LocalizedString;
      impact: LocalizedString;
    }>;
  };
  methodology: {
    title: LocalizedString;
    phases: Array<{
      name: LocalizedString;
      deliverable: LocalizedString;
    }>;
  };
  differentiators: {
    title: LocalizedString;
    items: LocalizedBullet[];
  };
  plans: {
    title: LocalizedString;
    items: Array<{
      name: LocalizedString;
      includes: LocalizedBullet[];
    }>;
    note: LocalizedString;
  };
  security: {
    title: LocalizedString;
    items: LocalizedBullet[];
  };
  services: {
    title: LocalizedString;
    items: LocalizedBullet[];
  };
  keyMessages: {
    title: LocalizedString;
    items: LocalizedBullet[];
  };
  pitch: {
    title: LocalizedString;
    description: LocalizedParagraph;
  };
};

export const solutions: SolutionContent[] = [
  {
    slug: 'vision',
    card: {
      icon: Scan,
      title: {
        es: 'IINIA Vision AI Edge Suite',
        en: 'IINIA Vision AI Edge Suite',
      },
      description: {
        es: 'Plataforma integral de visión artificial con hardware Edge-GPU incluido para inspección industrial.',
        en: 'End-to-end industrial vision platform with Edge-GPU hardware included for factory inspection.',
      },
      tags: ['Vision AI', 'Edge GPU', 'Industrial'],
      backgroundImage: '/collaboration/teleflex-info.webp',
    },
    metadata: {
      title: {
        es: 'IINIA Vision AI Edge Suite',
        en: 'IINIA Vision AI Edge Suite',
      },
      description: {
        es: 'Plataforma industrial de visión artificial con hardware Edge-GPU incluido para inspecciones en planta.',
        en: 'Industrial computer vision suite with Edge-GPU hardware bundled for on-site inspections.',
      },
    },
    hero: {
      eyebrow: {
        es: 'Plataforma industrial de visión artificial con Edge-GPU incluido',
        en: 'Industrial vision AI platform with Edge-GPU included',
      },
      title: {
        es: 'Visión artificial industrial lista para planta',
        en: 'Plant-ready industrial vision AI',
      },
      description: {
        es: 'IINIA Vision AI Edge Suite combina software de dataset, entrenamiento y despliegue con hardware propio basado en NVIDIA Jetson Orin y servidores GPU on-premise, para automatizar inspecciones, reducir scrap y mejorar seguridad en tiempo real.',
        en: 'IINIA Vision AI Edge Suite combines dataset, training and deployment software with in-house hardware based on NVIDIA Jetson Orin and on-premise GPU servers to automate inspections, reduce scrap and enhance safety in real time.',
      },
      highlights: [
        {
          es: 'Automatiza inspecciones de calidad en milisegundos.',
          en: 'Automates quality inspections in milliseconds.',
        },
        {
          es: 'Operación garantizada sin depender de la nube.',
          en: 'Guaranteed operation without relying on the cloud.',
        },
        {
          es: 'Integración directa con PLC, MES y SCADA.',
          en: 'Direct integration with PLC, MES and SCADA.',
        },
        {
          es: 'Implementación completa en días, no en meses.',
          en: 'Full implementation in days, not months.',
        },
      ],
    },
    valueProposition: {
      title: {
        es: 'Propuesta de valor',
        en: 'Value proposition',
      },
      items: [
        {
          value: {
            es: 'Edge-AI sin internet',
            en: 'Edge AI without internet dependency',
          },
          benefit: {
            es: 'Operación garantizada en líneas críticas',
            en: 'Guaranteed operation on critical production lines',
          },
        },
        {
          value: {
            es: 'Infraestructura incluida',
            en: 'Infrastructure included',
          },
          benefit: {
            es: 'Cero inversión inicial en hardware de IA',
            en: 'Zero upfront investment in AI hardware',
          },
        },
        {
          value: {
            es: 'Entrenamiento one-click',
            en: 'One-click training',
          },
          benefit: {
            es: 'No requiere experto en inteligencia artificial',
            en: 'No AI expert required',
          },
        },
        {
          value: {
            es: 'Synthetic + real data',
            en: 'Synthetic + real data',
          },
          benefit: {
            es: 'Entrenamiento rápido con menos muestras',
            en: 'Fast training with fewer samples',
          },
        },
        {
          value: {
            es: 'Integración industrial',
            en: 'Industrial integration',
          },
          benefit: {
            es: 'Conexión inmediata a PLC / MES / SCADA',
            en: 'Immediate connection to PLC / MES / SCADA',
          },
        },
        {
          value: {
            es: 'Implementación en días',
            en: 'Deployment in days',
          },
          benefit: {
            es: 'Aceleración inmediata del ROI',
            en: 'Instant ROI acceleration',
          },
        },
      ],
    },
    features: {
      title: {
        es: 'Características principales',
        en: 'Key capabilities',
      },
      items: [
        {
          module: {
            es: 'Dataset Studio',
            en: 'Dataset Studio',
          },
          functionality: {
            es: 'Captura, curado, etiquetado colaborativo y synthetic data',
            en: 'Capture, curation, collaborative labelling and synthetic data',
          },
        },
        {
          module: {
            es: 'Training Engine',
            en: 'Training Engine',
          },
          functionality: {
            es: 'Entrenamiento automático y versionado de modelos',
            en: 'Automated training and model versioning',
          },
        },
        {
          module: {
            es: 'Edge Runtime',
            en: 'Edge Runtime',
          },
          functionality: {
            es: 'Inferencia en Jetson Orin con baja latencia',
            en: 'Low-latency inference on Jetson Orin',
          },
        },
        {
          module: {
            es: 'Monitoring Suite',
            en: 'Monitoring Suite',
          },
          functionality: {
            es: 'Métricas, dashboards y estado en tiempo real',
            en: 'Metrics, dashboards and real-time status',
          },
        },
        {
          module: {
            es: 'Industrial Connect',
            en: 'Industrial Connect',
          },
          functionality: {
            es: 'APIs industriales: OPC-UA, MQTT, Modbus, SQL/MES',
            en: 'Industrial APIs: OPC-UA, MQTT, Modbus, SQL/MES',
          },
        },
        {
          module: {
            es: 'Security & Privacy',
            en: 'Security & Privacy',
          },
          functionality: {
            es: 'Procesamiento on-premise, sin nube obligatoria',
            en: 'On-premise processing without mandatory cloud',
          },
        },
      ],
    },
    hardware: {
      title: {
        es: 'Hardware incluido',
        en: 'Hardware included',
      },
      items: [
        {
          name: {
            es: 'Servidor GPU para entrenamiento',
            en: 'GPU server for training',
          },
          bullets: [
            {
              es: 'NVIDIA RTX / A100 / H100 (según plan)',
              en: 'NVIDIA RTX / A100 / H100 (per plan)',
            },
            {
              es: 'Capacidad para pipelines de visión industrial',
              en: 'Throughput for industrial vision pipelines',
            },
            {
              es: 'Despliegue on-premise o edge-rack',
              en: 'On-premise or edge-rack deployment',
            },
          ],
          backgroundImage: '/images/solutions/training-gpu.png',
        },
        {
          name: {
            es: 'Edge-GPU para línea',
            en: 'Edge GPU for production line',
          },
          bullets: [
            {
              es: 'NVIDIA Jetson Orin / Orin NX / Orin Industrial',
              en: 'NVIDIA Jetson Orin / Orin NX / Orin Industrial',
            },
            {
              es: 'Operación sin internet (offline mode)',
              en: 'Offline operation without internet',
            },
            {
              es: 'Certificación industrial: vibración, temperatura, ESD',
              en: 'Industrial certification: vibration, temperature, ESD',
            },
            {
              es: 'IO industrial, PoE, cámaras RTSP',
              en: 'Industrial IO, PoE, RTSP camera support',
            },
          ],
          backgroundImage: '/images/solutions/edge-devices.webp',
        },
      ],
    },
    useCases: {
      title: {
        es: 'Casos de uso destacados',
        en: 'Highlighted use cases',
      },
      items: [
        {
          es: 'Control de calidad: defectos, dimensiones y detección de componentes faltantes.',
          en: 'Quality control: defects, dimensional checks and missing component detection.',
        },
        {
          es: 'Inspección en línea: ensamble, empaque, estampado e inyección.',
          en: 'Inline inspection: assembly, packaging, stamping and injection.',
        },
        {
          es: 'Seguridad industrial: verificación de EPP, LOTO y zonas restringidas.',
          en: 'Industrial safety: PPE verification, LOTO and restricted area monitoring.',
        },
        {
          es: 'Trazabilidad visual y monitoreo de eficiencia operativa.',
          en: 'Visual traceability and operational efficiency monitoring.',
        },
        {
          es: 'Gestión de múltiples cámaras industriales y salas de control.',
          en: 'Management of multiple industrial cameras and control rooms.',
        },
      ],
    },
    kpis: {
      title: {
        es: 'KPIs e impacto',
        en: 'KPIs and impact',
      },
      items: [
        {
          indicator: {
            es: '↓ Scrap y reproceso',
            en: '↓ Scrap and rework',
          },
          impact: {
            es: 'Hasta -40%',
            en: 'Up to -40%',
          },
        },
        {
          indicator: {
            es: '↑ Velocidad de inspección',
            en: '↑ Inspection speed',
          },
          impact: {
            es: 'Hasta 3× más rápido',
            en: 'Up to 3× faster',
          },
        },
        {
          indicator: {
            es: '↓ Tiempo de despliegue',
            en: '↓ Deployment time',
          },
          impact: {
            es: 'PoC en < 1 semana',
            en: 'PoC in < 1 week',
          },
        },
        {
          indicator: {
            es: '↑ Confiabilidad',
            en: '↑ Reliability',
          },
          impact: {
            es: '99.9% uptime edge',
            en: '99.9% edge uptime',
          },
        },
        {
          indicator: {
            es: 'ROI rápido',
            en: 'Fast ROI',
          },
          impact: {
            es: '3–6 meses promedio',
            en: '3–6 months on average',
          },
        },
      ],
    },
    methodology: {
      title: {
        es: 'Metodología de implementación',
        en: 'Implementation methodology',
      },
      phases: [
        {
          name: {
            es: 'Diagnóstico',
            en: 'Diagnosis',
          },
          deliverable: {
            es: 'Evaluación de línea, cámaras y protocolos.',
            en: 'Line assessment, camera audit and protocol review.',
          },
        },
        {
          name: {
            es: 'PoC en línea piloto',
            en: 'Pilot line PoC',
          },
          deliverable: {
            es: 'Modelos entrenados con piezas reales.',
            en: 'Models trained with real production parts.',
          },
        },
        {
          name: {
            es: 'Despliegue Edge-AI',
            en: 'Edge AI deployment',
          },
          deliverable: {
            es: 'Instalación de Jetson Orin en planta.',
            en: 'Jetson Orin installation on the shop floor.',
          },
        },
        {
          name: {
            es: 'Integración',
            en: 'Integration',
          },
          deliverable: {
            es: 'Integración con PLC/MES/SCADA y paneles operativos.',
            en: 'PLC/MES/SCADA integration and operator dashboards.',
          },
        },
        {
          name: {
            es: 'Optimización',
            en: 'Optimization',
          },
          deliverable: {
            es: 'Retuning, synthetic data y escalamiento multi-línea.',
            en: 'Retuning, synthetic data and multi-line scaling.',
          },
        },
      ],
    },
    differentiators: {
      title: {
        es: 'Diferenciadores clave',
        en: 'Key differentiators',
      },
      items: [
        {
          es: 'Bundle completo: hardware y software industrial en una sola oferta.',
          en: 'Complete bundle: industrial hardware and software in one offer.',
        },
        {
          es: 'Sin dependencia de la nube para operación diaria.',
          en: 'No dependence on the cloud for day-to-day operation.',
        },
        {
          es: 'Data sintética más entrenamiento automático para modelos robustos.',
          en: 'Synthetic data plus automated training for robust models.',
        },
        {
          es: 'Edge-AI en tiempo real grado industrial.',
          en: 'Industrial-grade real-time Edge AI.',
        },
        {
          es: 'Modelo SaaS industrial con infraestructura incluida.',
          en: 'Industrial SaaS model with infrastructure included.',
        },
      ],
    },
    plans: {
      title: {
        es: 'Planes y empaquetados',
        en: 'Plans and bundles',
      },
      items: [
        {
          name: {
            es: 'Starter Line-AI',
            en: 'Starter Line-AI',
          },
          includes: [
            {
              es: '1 modelo + 1 Jetson Orin + integración básica',
              en: '1 model + 1 Jetson Orin + basic integration',
            },
            {
              es: 'Monitoreo y soporte remoto',
              en: 'Monitoring and remote support',
            },
          ],
        },
        {
          name: {
            es: 'Industrial Pro',
            en: 'Industrial Pro',
          },
          includes: [
            {
              es: '3 modelos + 3 Orin + synthetic data',
              en: '3 models + 3 Orin devices + synthetic data',
            },
            {
              es: 'Integración avanzada con PLC/MES',
              en: 'Advanced PLC/MES integration',
            },
            {
              es: 'Optimization playbooks y ML avanzado',
              en: 'Optimization playbooks and advanced ML',
            },
          ],
        },
        {
          name: {
            es: 'Enterprise Factory-AI',
            en: 'Enterprise Factory-AI',
          },
          includes: [
            {
              es: 'Servidor GPU + múltiples Orin en sitio',
              en: 'GPU server + multiple Orin devices on site',
            },
            {
              es: 'SLA dedicado y operación multisede',
              en: 'Dedicated SLA and multi-site operation',
            },
            {
              es: 'Integración profunda con sistemas corporativos',
              en: 'Deep integration with corporate systems',
            },
          ],
        },
      ],
      note: {
        es: 'Opciones de compra, renta mensual o híbrido CAPEX + OPEX.',
        en: 'Available as purchase, monthly rental or CAPEX + OPEX hybrid.',
      },
    },
    security: {
      title: {
        es: 'Seguridad y cumplimiento',
        en: 'Security and compliance',
      },
      items: [
        {
          es: 'Procesamiento local con aislamiento industrial.',
          en: 'Local processing with industrial isolation.',
        },
        {
          es: 'Registros, auditoría y roles por perfil.',
          en: 'Logging, audit trail and role-based access.',
        },
        {
          es: 'Compatibilidad con TLS, VPN y alineación ISO 27001.',
          en: 'Support for TLS, VPN and ISO 27001 alignment.',
        },
      ],
    },
    services: {
      title: {
        es: 'Soporte y servicios',
        en: 'Support and services',
      },
      items: [
        {
          es: 'Capacitación a ingenieros de planta.',
          en: 'Training for plant engineers.',
        },
        {
          es: 'Entrenamiento y reentrenamiento continuo.',
          en: 'Continuous training and retraining.',
        },
        {
          es: 'Mantenimiento de hardware Edge incluido.',
          en: 'Edge hardware maintenance included.',
        },
        {
          es: 'Soporte remoto y on-site con SLA corporativo.',
          en: 'Remote and on-site support with corporate SLA.',
        },
      ],
    },
    keyMessages: {
      title: {
        es: 'Mensajes clave',
        en: 'Key messages',
      },
      items: [
        {
          es: 'IA diseñada para maquiladoras y manufactura avanzada.',
          en: 'AI designed for maquiladoras and advanced manufacturing.',
        },
        {
          es: 'Edge-GPU para planta: no necesitas la nube.',
          en: 'Edge GPU for the plant: no cloud required.',
        },
        {
          es: 'Hardware incluido para eliminar barreras de adopción.',
          en: 'Hardware included to remove adoption barriers.',
        },
        {
          es: 'IA industrial que opera donde operan las plantas.',
          en: 'Industrial AI that operates where plants operate.',
        },
      ],
    },
    pitch: {
      title: {
        es: 'Pitch corto',
        en: 'Short pitch',
      },
      description: {
        es: 'La primera plataforma de visión artificial industrial con entrenamiento y despliegue local en Edge-GPU Orin. Reduce scrap, aumenta calidad y automatiza inspección en días, sin expertos en IA ni dependencia de la nube.',
        en: 'The first industrial computer vision platform with local training and deployment on Edge-GPU Orin. Reduce scrap, boost quality and automate inspection in days—without AI experts and without cloud dependency.',
      },
    },
  },
];

export function getSolutionBySlug(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
