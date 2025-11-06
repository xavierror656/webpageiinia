'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

type Mode = 'video' | 'llm';

const ROTATE_EVERY_MS = 12000;

export function HeroShowcase() {
  const [mode, setMode] = useState<Mode>('video');

  useEffect(() => {
    const timer = setInterval(() => {
      setMode((prev) => (prev === 'video' ? 'llm' : 'video'));
    }, ROTATE_EVERY_MS);

    return () => clearInterval(timer);
  }, []);

  const heroVideoSrc = '/media/hero-background.webm';

  const nextModeCopy = useMemo(
    () =>
      mode === 'video'
        ? {
            label: 'Ver demo LLM',
            target: 'llm' as Mode,
          }
        : {
            label: 'Ver sistema de visión',
            target: 'video' as Mode,
          },
    [mode]
  );

  return (
    <div className="relative overflow-hidden rounded-3xl border border-brand-600/30 bg-background/75 shadow-xl shadow-brand-600/15">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-600/25 via-transparent to-accent-500/15 dark:from-brand-600/35 dark:to-accent-500/25" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(255,63,127,0.12),_transparent_55%)]" />

      <div className="flex flex-col gap-6 p-4 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-600/20 bg-brand-600/10 px-3 py-1 text-xs font-semibold text-brand-600 dark:border-brand-600/40 dark:bg-brand-600/20">
            <Sparkles className="h-4 w-4" />
            {mode === 'video' ? 'Visión Artificial en Vivo' : 'Chat Multi-LLM'}
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-brand-600/30 bg-transparent px-3 py-1 text-xs font-semibold text-brand-600 transition hover:border-brand-600 hover:bg-brand-600/10 dark:border-brand-600/50 dark:hover:border-brand-600"
            onClick={() => setMode(nextModeCopy.target)}
          >
            <ArrowRight className="h-3.5 w-3.5" />
            {nextModeCopy.label}
          </button>
        </div>

        <div className="relative h-[400px] w-full overflow-hidden rounded-[28px] border border-white/10 bg-black/70 shadow-inner shadow-black/40 sm:h-[500px] lg:h-[560px]">
          {mode === 'video' ? (
            <video
              key="vision-video"
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-hidden="true"
            >
              <source src={heroVideoSrc} type="video/webm" />
              <p className="sr-only">
                Sistema de visión artificial monitoreando la operación en planta en tiempo real.
              </p>
            </video>
          ) : (
            <ChatUI />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
        </div>

        <div className="flex items-center justify-center gap-2">
          {(['video', 'llm'] as Mode[]).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setMode(item)}
              aria-label={item === 'video' ? 'Mostrar demostración de visión' : 'Mostrar demostración LLM'}
              className={cn(
                'h-2.5 w-10 rounded-full transition-all',
                mode === item ? 'bg-brand-600' : 'bg-border'
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

type LLMModel = 'Llama-3.1-70B' | 'Mixtral-8x7B' | 'Gemma-7B' | 'Qwen-72B' | 'Falcon-180B';

const MOCK_RESPONSES = {
  'Llama-3.1-70B': {
    es: [
      'Como modelo Llama 3.1 de 70B parámetros, puedo ayudarte con análisis de datos industriales, optimización de procesos y consultas técnicas especializadas.',
      'Basándome en mi entrenamiento con datos industriales, veo que tu consulta requiere un enfoque multi-disciplinario combinando visión computacional y análisis predictivo.',
      'Mi arquitectura de 70B parámetros me permite procesar información compleja de manera eficiente. ¿Qué aspecto específico de tu operación industrial te gustaría explorar?'
    ],
    en: [
      'As a Llama 3.1 model with 70B parameters, I can help you with industrial data analysis, process optimization, and specialized technical queries.',
      'Based on my training with industrial data, I see that your query requires a multi-disciplinary approach combining computer vision and predictive analytics.',
      'My 70B parameter architecture allows me to process complex information efficiently. What specific aspect of your industrial operation would you like to explore?'
    ]
  },
  'Mixtral-8x7B': {
    es: [
      'Como modelo Mixtral con mezcla de expertos, puedo manejar múltiples tareas simultáneamente. Tu consulta sobre integración de sistemas requiere una respuesta coordinada.',
      'Mi arquitectura de mezcla de expertos me permite especializarme en diferentes aspectos: algunos expertos se enfocan en visión, otros en procesamiento de lenguaje técnico.',
      'Puedo coordinar entre diferentes dominios técnicos para darte una respuesta integral sobre tus sistemas industriales.'
    ],
    en: [
      'As a Mixtral model with mixture of experts, I can handle multiple tasks simultaneously. Your query about system integration requires a coordinated response.',
      'My mixture of experts architecture allows me to specialize in different aspects: some experts focus on vision, others on technical language processing.',
      'I can coordinate between different technical domains to give you a comprehensive response about your industrial systems.'
    ]
  },
  'Gemma-7B': {
    es: [
      'Como modelo Gemma de Google, me enfoco en ser útil y directo. Para tu consulta industrial, recomiendo empezar por identificar los puntos críticos de tu proceso.',
      'Mi entrenamiento me permite entender contextos técnicos complejos. ¿Podrías darme más detalles sobre el problema específico que enfrentas?',
      'Soy eficiente en procesamiento técnico y puedo ayudarte a desglosar problemas complejos en pasos manejables.'
    ],
    en: [
      'As a Google Gemma model, I focus on being helpful and direct. For your industrial query, I recommend starting by identifying the critical points in your process.',
      'My training allows me to understand complex technical contexts. Could you give me more details about the specific problem you are facing?',
      'I am efficient in technical processing and can help you break down complex problems into manageable steps.'
    ]
  },
  'Qwen-72B': {
    es: [
      'Como modelo Qwen de Alibaba, tengo conocimientos extensos en automatización industrial y sistemas de control. Tu consulta requiere análisis detallado.',
      'Mi entrenamiento incluye datos de múltiples industrias. Puedo ayudarte a optimizar procesos, mejorar eficiencia y reducir costos operativos.',
      'Para tu caso específico, recomiendo implementar un sistema de monitoreo continuo con alertas inteligentes basadas en IA.'
    ],
    en: [
      'As an Alibaba Qwen model, I have extensive knowledge in industrial automation and control systems. Your query requires detailed analysis.',
      'My training includes data from multiple industries. I can help you optimize processes, improve efficiency, and reduce operational costs.',
      'For your specific case, I recommend implementing a continuous monitoring system with AI-based intelligent alerts.'
    ]
  },
  'Falcon-180B': {
    es: [
      'Como modelo Falcon de 180B parámetros, tengo capacidad para procesar grandes volúmenes de datos industriales en tiempo real.',
      'Mi arquitectura me permite analizar tendencias complejas y predecir comportamientos del sistema. ¿Qué métricas específicas te interesan monitorear?',
      'Puedo integrar datos de múltiples fuentes para darte insights accionables sobre el rendimiento de tu operación industrial.'
    ],
    en: [
      'As a Falcon model with 180B parameters, I have the capacity to process large volumes of industrial data in real time.',
      'My architecture allows me to analyze complex trends and predict system behaviors. What specific metrics are you interested in monitoring?',
      'I can integrate data from multiple sources to give you actionable insights about your industrial operation performance.'
    ]
  }
};

function ChatUI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: '¡Hola! Soy tu asistente de IA industrial. ¿En qué puedo ayudarte hoy?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [selectedModel, setSelectedModel] = useState<LLMModel>('Llama-3.1-70B');
  const [isTyping, setIsTyping] = useState(false);
  const [animatingMessage, setAnimatingMessage] = useState<string | null>(null);
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const modelResponses = MOCK_RESPONSES[selectedModel];
      const languageResponses = modelResponses[language];
      const randomResponse = languageResponses[Math.floor(Math.random() * languageResponses.length)];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: randomResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);

      // Start animation for the new message
      setAnimatingMessage(aiMessage.id);
      setTimeout(() => setAnimatingMessage(null), 800);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="relative flex h-full w-full flex-col bg-slate-950">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-brand-600 to-accent-500 p-1">
            <div className="h-full w-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.webp"
                alt="INIIA Logo"
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
            </div>
            <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-400 animate-pulse" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white flex items-center gap-2">
              {language === 'es' ? 'Chat Privado INIIA' : 'Private INIIA Chat'}
              <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </p>
            <p className="text-xs text-white/60">
              {language === 'es' ? 'IA privada · Datos seguros · Sin límites' : 'Private AI · Secure Data · No Limits'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm text-white hover:border-white/30 transition-all flex items-center gap-1"
          >
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <span>{language.toUpperCase()}</span>
          </button>
          <div className="hidden sm:flex items-center gap-1 text-xs text-green-400">
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>{language === 'es' ? 'Encriptado' : 'Encrypted'}</span>
          </div>
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value as LLMModel)}
            className="rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-500/70 transition-all hover:border-white/30"
          >
            <option value="Llama-3.1-70B">🔒 Llama-3.1-70B</option>
            <option value="Mixtral-8x7B">🔒 Mixtral-8x7B</option>
            <option value="Gemma-7B">🔒 Gemma-7B</option>
            <option value="Qwen-72B">🔒 Qwen-72B</option>
            <option value="Falcon-180B">🔒 Falcon-180B</option>
          </select>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={message.id} className={cn(
              'flex gap-3 animate-in slide-in-from-bottom-2 duration-300',
              message.role === 'user' ? 'justify-end' : 'justify-start'
            )} style={{ animationDelay: `${index * 100}ms` }}>
              {message.role === 'assistant' && (
                <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-brand-600 to-accent-500 flex-shrink-0 mt-1">
                  <div className="h-full w-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/logo.webp"
                      alt="INIIA Logo"
                      width={16}
                      height={16}
                      className="h-4 w-4 object-contain"
                    />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-400 border border-slate-950 animate-pulse" />
                </div>
              )}
              <div className={cn(
                'max-w-[80%] rounded-2xl px-4 py-3 shadow-lg transition-all hover:shadow-xl',
                message.role === 'user'
                  ? 'bg-gradient-to-r from-brand-600 to-brand-700 text-white border border-brand-500/30 animate-in slide-in-from-right-2 duration-300'
                  : cn(
                      'bg-gradient-to-r from-white/10 to-white/5 text-white/90 border border-white/10 backdrop-blur-sm',
                      animatingMessage === message.id ? 'animate-in slide-in-from-left-2 duration-500 scale-105' : 'animate-in slide-in-from-left-2 duration-300'
                    )
              )}>
                <p className={cn(
                  'text-sm leading-relaxed',
                  animatingMessage === message.id && message.role === 'assistant' ? 'animate-pulse' : ''
                )}>
                  {message.content}
                </p>
                {message.role === 'assistant' && (
                  <div className={cn(
                    'mt-2 flex items-center gap-2 text-xs text-white/40 transition-opacity duration-500',
                    animatingMessage === message.id ? 'opacity-0 animate-in fade-in-50 duration-1000 delay-300' : 'opacity-100'
                  )}>
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>{language === 'es' ? 'Respuesta privada y segura' : 'Private and secure response'}</span>
                  </div>
                )}
              </div>
              {message.role === 'user' && (
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex-shrink-0 mt-1 border border-white/20" />
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-3 justify-start animate-in slide-in-from-bottom-2 duration-300">
              <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-brand-600 to-accent-500 flex-shrink-0">
                <div className="h-full w-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logo.webp"
                    alt="INIIA Logo"
                    width={16}
                    height={16}
                    className="h-4 w-4 object-contain animate-pulse"
                  />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-400 border border-slate-950 animate-pulse" />
              </div>
              <div className="rounded-2xl bg-gradient-to-r from-white/10 to-white/5 px-4 py-3 border border-white/10 backdrop-blur-sm">
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-brand-400 animate-bounce" />
                  <div className="h-2 w-2 rounded-full bg-brand-400 animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="h-2 w-2 rounded-full bg-brand-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-white/10 px-6 py-4">
        <form
          className="flex gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
        >
          <div className="relative flex-1">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={language === 'es' ? 'Pregunta de forma segura y privada...' : 'Ask securely and privately...'}
              className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 pr-12 text-sm text-white placeholder:text-white/45 focus:outline-none focus:ring-2 focus:ring-brand-500/70 focus:border-brand-500/50 transition-all"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
          <button
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className="group rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/40 transition-all hover:shadow-xl hover:shadow-brand-600/60 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2"
          >
            <span>{language === 'es' ? 'Enviar' : 'Send'}</span>
            <svg className={cn(
              "h-4 w-4 transition-all duration-200",
              !inputValue.trim() || isTyping ? "" : "group-hover:translate-x-0.5 group-hover:rotate-12"
            )} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
        <div className="mt-3 flex items-center justify-center gap-4 text-xs text-white/40">
          <div className="flex items-center gap-1">
            <svg className="h-3 w-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{language === 'es' ? 'Datos encriptados' : 'Encrypted data'}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="h-3 w-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>{language === 'es' ? 'Sin límites de uso' : 'No usage limits'}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="h-3 w-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>{language === 'es' ? 'Procesamiento local' : 'Local processing'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
