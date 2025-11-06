import type { LucideIcon } from 'lucide-react';
import { Scan, BrainCircuit } from 'lucide-react';

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
  {
    slug: 'agents',
    card: {
      icon: BrainCircuit,
      title: {
        es: 'IINIA Agents AI Suite',
        en: 'IINIA Agents AI Suite',
      },
      description: {
        es: 'Plataforma modular de agentes inteligentes, basada en componentes open source auditables y diseñada para automatización y privacidad empresarial.',
        en: 'Modular intelligent agents platform built on auditable open-source components and designed for enterprise automation with privacy.',
      },
      tags: ['Open Source', 'Private AI', 'Intelligent Agents', 'Automation', 'Document AI'],
      backgroundImage: '/collaboration/space-ocr.webp',
    },
    metadata: {
      title: {
        es: 'IINIA Agents AI Suite',
        en: 'IINIA Agents AI Suite',
      },
      description: {
        es: 'Agentes inteligentes que automatizan procesos administrativos y operativos con privacidad empresarial.',
        en: 'Intelligent agents that automate administrative and operational processes with enterprise-grade privacy.',
      },
    },
    hero: {
      eyebrow: {
        es: 'Plataforma de agentes inteligentes para automatización empresarial',
        en: 'Intelligent agents platform for enterprise automation',
      },
      title: {
        es: 'Automatización cognitiva con control empresarial',
        en: 'Cognitive automation with enterprise control',
      },
      description: {
        es: 'IINIA Agents AI Suite es un sistema modular de agentes capaces de analizar documentos, ejecutar procesos complejos e interactuar con usuarios y sistemas empresariales. Combina IA generativa, componentes open source auditables, reglas corporativas y despliegue on-premise para habilitar inteligencia autónoma sin sacrificar seguridad.',
        en: 'IINIA Agents AI Suite is a modular system of agents able to analyse documents, execute complex processes and interact with users and enterprise systems. It combines generative AI, auditable open-source components, corporate rules and on-premise deployment to deliver autonomous intelligence without compromising security.',
      },
      highlights: [
        {
          es: 'Automatiza análisis de documentos, decisiones y acciones.',
          en: 'Automates document analysis, decisions and actions.',
        },
        {
          es: 'Opera con reglas configurables y APIs corporativas.',
          en: 'Operates with configurable rules and corporate APIs.',
        },
        {
          es: 'Privacidad on-premise sin depender de la nube pública.',
          en: 'On-premise privacy without relying on the public cloud.',
        },
        {
          es: 'Agentes multilingües con stack open source y despliegue auditado.',
          en: 'Multilingual agents with an open-source stack and auditable deployment.',
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
            es: 'Automatización cognitiva',
            en: 'Cognitive automation',
          },
          benefit: {
            es: 'Sustituye tareas humanas repetitivas e interpretativas',
            en: 'Replaces repetitive and interpretative human tasks',
          },
        },
        {
          value: {
            es: 'Stack open source auditado',
            en: 'Audited open-source stack',
          },
          benefit: {
            es: 'Transparencia, personalización y cero dependencia propietaria',
            en: 'Transparency, customisation and zero proprietary lock-in',
          },
        },
        {
          value: {
            es: 'Procesamiento automático de documentos',
            en: 'Automated document processing',
          },
          benefit: {
            es: 'Reduce tiempos de revisión y captura',
            en: 'Cuts review and data entry times',
          },
        },
        {
          value: {
            es: 'IA con reglas de negocio',
            en: 'AI with business rules',
          },
          benefit: {
            es: 'Control total y cumplimiento',
            en: 'Delivers full control and compliance',
          },
        },
        {
          value: {
            es: 'Entrenamiento continuo',
            en: 'Continuous training',
          },
          benefit: {
            es: 'Mejora progresiva sin intervención del usuario',
            en: 'Improves accuracy without user intervention',
          },
        },
        {
          value: {
            es: 'API para integración',
            en: 'Integration API',
          },
          benefit: {
            es: 'Conecta ERP, CRM y sistemas financieros',
            en: 'Connects ERP, CRM and financial platforms',
          },
        },
        {
          value: {
            es: 'Privacidad on-premise',
            en: 'On-premise privacy',
          },
          benefit: {
            es: 'Datos sensibles protegidos',
            en: 'Keeps sensitive data protected',
          },
        },
      ],
    },
    features: {
      title: {
        es: '¿Qué hace?',
        en: 'What it does',
      },
      items: [
        {
          module: {
            es: 'Análisis de procesos',
            en: 'Process analysis',
          },
          functionality: {
            es: 'Mapea flujos con reglas de negocio configurables.',
            en: 'Maps flows with configurable business rules.',
          },
        },
        {
          module: {
            es: 'Gestión de datasets',
            en: 'Dataset management',
          },
          functionality: {
            es: 'Creación y expansión de datasets empresariales.',
            en: 'Creates and expands enterprise datasets.',
          },
        },
        {
          module: {
            es: 'Prompt engineering',
            en: 'Prompt engineering',
          },
          functionality: {
            es: 'Plantillas y gobierno de prompts a nivel corporativo.',
            en: 'Corporate-level prompt templates and governance.',
          },
        },
        {
          module: {
            es: 'Document AI',
            en: 'Document automation',
          },
          functionality: {
            es: 'Procesa PDF, XLS, XML, facturas y estados de cuenta.',
            en: 'Processes PDFs, spreadsheets, XML, invoices and statements.',
          },
        },
        {
          module: {
            es: 'Orquestación de agentes',
            en: 'Agent orchestration',
          },
          functionality: {
            es: 'Configura y coordina agentes inteligentes por flujo.',
            en: 'Configures and coordinates intelligent agents per workflow.',
          },
        },
        {
          module: {
            es: 'API segura',
            en: 'Secure API',
          },
          functionality: {
            es: 'REST, webhooks y conectores hacia sistemas externos.',
            en: 'REST, webhooks and connectors to external systems.',
          },
        },
        {
          module: {
            es: 'Chat corporativo',
            en: 'Corporate chat',
          },
          functionality: {
            es: 'Interfaz multilenguaje para usuarios y equipos.',
            en: 'Multilingual interface for users and teams.',
          },
        },
        {
          module: {
            es: 'Agentes autónomos',
            en: 'Autonomous agents',
          },
          functionality: {
            es: 'Ejecutan acciones y decisiones supervisadas.',
            en: 'Execute supervised decisions and actions.',
          },
        },
      ],
    },
    hardware: {
      title: {
        es: 'Componentes del sistema',
        en: 'System components',
      },
      items: [
        {
          name: {
            es: 'Motor IA empresarial',
            en: 'Enterprise AI engine',
          },
          bullets: [
            {
              es: 'Motor IA propio con seguridad empresarial.',
              en: 'Proprietary AI engine with enterprise security.',
            },
            {
              es: 'Módulo de reglas de negocio y gobierno.',
              en: 'Business rules and governance module.',
            },
            {
              es: 'Motor de prompts inteligente para flujos especializados.',
              en: 'Intelligent prompt engine for specialised flows.',
            },
          ],
          backgroundImage: '/collaboration/space-ocr.webp',
        },
        {
          name: {
            es: 'Orquestador de agentes',
            en: 'Agent orchestrator',
          },
          bullets: [
            {
              es: 'Configuración y orquestación multi-agente.',
              en: 'Configuration and orchestration of multiple agents.',
            },
            {
              es: 'Pipeline de entrenamiento incremental supervisado.',
              en: 'Supervised incremental training pipeline.',
            },
            {
              es: 'Librería de plantillas y agentes preconfigurados.',
              en: 'Library of templates and preconfigured agents.',
            },
          ],
        },
        {
          name: {
            es: 'Operación y observabilidad',
            en: 'Operations and observability',
          },
          bullets: [
            {
              es: 'Dashboards y trazabilidad completa.',
              en: 'Dashboards and full traceability.',
            },
            {
              es: 'Integración con correo, APIs, bases de datos y ERPs.',
              en: 'Integration with email, APIs, databases and ERPs.',
            },
            {
              es: 'Capacidades de logging y auditoría por agente.',
              en: 'Logging and audit capabilities per agent.',
            },
          ],
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
          es: 'Finanzas: lectura de facturas, estados de cuenta y conciliación automática.',
          en: 'Finance: invoice reading, account statements and automatic reconciliation.',
        },
        {
          es: 'Compras/ventas: asistente para cotizaciones y órdenes.',
          en: 'Procurement/sales: assistant for quotations and orders.',
        },
        {
          es: 'Atención al cliente: chatbots especializados integrados al CRM.',
          en: 'Customer service: specialised chatbots connected to the CRM.',
        },
        {
          es: 'Recursos humanos: clasificación de CV y automatización administrativa.',
          en: 'Human resources: CV classification and administrative automation.',
        },
        {
          es: 'Legal: análisis de contratos y extracción de cláusulas críticas.',
          en: 'Legal: contract analysis and extraction of critical clauses.',
        },
        {
          es: 'Operaciones: informes automáticos, auditoría de datos y alertas.',
          en: 'Operations: automatic reports, data audit and alerts.',
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
            es: '↓ Tiempo operativo',
            en: '↓ Operational time',
          },
          impact: {
            es: '50–90% menos esfuerzo manual',
            en: '50–90% less manual effort',
          },
        },
        {
          indicator: {
            es: '↓ Errores humanos',
            en: '↓ Human errors',
          },
          impact: {
            es: 'Cero errores de captura',
            en: 'Eliminates capture errors',
          },
        },
        {
          indicator: {
            es: '↑ Velocidad de respuesta',
            en: '↑ Response speed',
          },
          impact: {
            es: 'Respuestas en segundos',
            en: 'Responses in seconds',
          },
        },
        {
          indicator: {
            es: '↑ Productividad del equipo',
            en: '↑ Team productivity',
          },
          impact: {
            es: 'Personal enfocado a tareas estratégicas',
            en: 'Teams focused on strategic work',
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
            es: 'Levantamiento',
            en: 'Discovery',
          },
          deliverable: {
            es: 'Identificación de flujos y reglas.',
            en: 'Identification of flows and rules.',
          },
        },
        {
          name: {
            es: 'PoC (1–2 semanas)',
            en: 'PoC (1–2 weeks)',
          },
          deliverable: {
            es: 'Agente funcional con datos reales.',
            en: 'Functional agent with real data.',
          },
        },
        {
          name: {
            es: 'Integración IT',
            en: 'IT integration',
          },
          deliverable: {
            es: 'APIs, SSO, seguridad y espacios compartidos.',
            en: 'APIs, SSO, security and shared workspaces.',
          },
        },
        {
          name: {
            es: 'Despliegue',
            en: 'Deployment',
          },
          deliverable: {
            es: 'Agentes operando en procesos reales.',
            en: 'Agents operating in live processes.',
          },
        },
        {
          name: {
            es: 'Mejora continua',
            en: 'Continuous improvement',
          },
          deliverable: {
            es: 'Expansión multi-proceso y multi-área.',
            en: 'Multi-process and multi-area expansion.',
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
          es: 'Automatiza procesos administrativos y operativos end-to-end.',
          en: 'Automates administrative and operational processes end-to-end.',
        },
        {
          es: 'Combina IA generativa con reglas de negocio auditables.',
          en: 'Combines generative AI with auditable business rules.',
        },
        {
          es: 'Privacidad corporativa con despliegue on-premise o nube privada.',
          en: 'Corporate privacy with on-premise or private cloud deployment.',
        },
        {
          es: 'Integración nativa con APIs y sistemas empresariales existentes.',
          en: 'Native integration with existing enterprise APIs and systems.',
        },
        {
          es: 'Entrenamiento continuo supervisado para mejorar cada agente.',
          en: 'Supervised continuous training to improve each agent.',
        },
        {
          es: 'Construido sobre componentes open source auditables y soportados por IINIA.',
          en: 'Built on auditable open-source components supported by IINIA.',
        },
      ],
    },
    plans: {
      title: {
        es: 'Modelos de licenciamiento',
        en: 'Licensing models',
      },
      items: [
        {
          name: {
            es: 'Starter',
            en: 'Starter',
          },
          includes: [
            {
              es: 'Una área y un agente operativo.',
              en: 'One area and one operating agent.',
            },
            {
              es: 'Automatización de documentos clave.',
              en: 'Automation for key documents.',
            },
            {
              es: 'Conectores básicos y dashboards estándar.',
              en: 'Basic connectors and standard dashboards.',
            },
          ],
        },
        {
          name: {
            es: 'Pro',
            en: 'Pro',
          },
          includes: [
            {
              es: 'Multi-agente con dashboards y entrenamiento continuo.',
              en: 'Multi-agent with dashboards and continuous training.',
            },
            {
              es: 'Orquestación de flujos administrativos y comerciales.',
              en: 'Administrative and commercial flow orchestration.',
            },
            {
              es: 'Integraciones avanzadas con ERP/CRM.',
              en: 'Advanced integrations with ERP/CRM.',
            },
          ],
        },
        {
          name: {
            es: 'Enterprise',
            en: 'Enterprise',
          },
          includes: [
            {
              es: 'IA, data privacy y orquestación completa.',
              en: 'AI, data privacy and full orchestration.',
            },
            {
              es: 'Multi-área con gobierno centralizado.',
              en: 'Multi-area with centralised governance.',
            },
            {
              es: 'Operación asistida, soporte dedicado y escalamiento global.',
              en: 'Assisted operation, dedicated support and global scaling.',
            },
          ],
        },
      ],
      note: {
        es: 'Disponibles en compra, suscripción o modelo híbrido.',
        en: 'Available as purchase, subscription or hybrid model.',
      },
    },
    security: {
      title: {
        es: 'Seguridad y privacidad',
        en: 'Security and privacy',
      },
      items: [
        {
          es: 'Ejecución local o nube privada con aislamiento por área.',
          en: 'Local or private cloud execution with area isolation.',
        },
        {
          es: 'Cifrado de datos en tránsito y en reposo.',
          en: 'Data encryption in transit and at rest.',
        },
        {
          es: 'Logging, trazabilidad y monitoreo de agentes por rol.',
          en: 'Logging, traceability and agent monitoring per role.',
        },
        {
          es: 'Alineación a políticas ISO/ITAR/HIPAA según implementación.',
          en: 'Alignment with ISO/ITAR/HIPAA policies per implementation.',
        },
        {
          es: 'Stack open source reforzado por políticas de privacidad y gobierno de datos.',
          en: 'Open-source stack reinforced by privacy and data governance policies.',
        },
      ],
    },
    services: {
      title: {
        es: 'Servicios y acompañamiento',
        en: 'Services and enablement',
      },
      items: [
        {
          es: 'Levantamiento y diseño de flujos y reglas.',
          en: 'Process discovery and rule design.',
        },
        {
          es: 'Entrenamiento de usuarios y administradores de agentes.',
          en: 'Training for users and agent administrators.',
        },
        {
          es: 'Mesa de soporte operativo y monitoreo continuo.',
          en: 'Operations support desk and continuous monitoring.',
        },
        {
          es: 'Programas de mejora continua y adopción por área.',
          en: 'Continuous improvement and adoption programmes per area.',
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
          es: 'Automatiza back-office, ventas y soporte con agentes inteligentes.',
          en: 'Automates back-office, sales and support with intelligent agents.',
        },
        {
          es: 'Privacidad y control con reglas auditables y despliegue on-premise.',
          en: 'Privacy and control with auditable rules and on-premise deployment.',
        },
        {
          es: 'Integra datos y APIs existentes sin fricción.',
          en: 'Integrates existing data and APIs without friction.',
        },
        {
          es: 'Escala mediante entrenamiento continuo supervisado.',
          en: 'Scales through supervised continuous training.',
        },
        {
          es: 'Beneficia la privacidad y soberanía de datos gracias a tecnologías open source.',
          en: 'Strengthens privacy and data sovereignty through open-source technologies.',
        },
      ],
    },
    pitch: {
      title: {
        es: 'Pitch ejecutivo',
        en: 'Executive pitch',
      },
      description: {
        es: 'IINIA Agents AI Suite convierte procesos administrativos y operativos en flujos autónomos: agentes inteligentes que leen documentos, toman decisiones y ejecutan acciones con control empresarial y privacidad total.',
        en: 'IINIA Agents AI Suite turns administrative and operational processes into autonomous flows: intelligent agents that read documents, make decisions and execute actions with full enterprise control and privacy.',
      },
    },
  },
];

export function getSolutionBySlug(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
