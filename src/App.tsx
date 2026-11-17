/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Crown,
  Sparkles,
  Lightbulb, 
  ShieldCheck, 
  Tv, 
  Wifi, 
  Smartphone, 
  Thermometer, 
  Menu, 
  Award,
  X, 
  ArrowRight, 
  MessageCircle, 
  Star, 
  CheckCircle2, 
  Clock, 
  Users, 
  Instagram,
  Linkedin,
  Facebook,
  ChevronRight,
  ChevronLeft,
  Network,
  MapPin,
  Wrench,
  PhoneCall,
  Headset,
  Play,
  KeyRound,
  Fingerprint,
  Layers,
  Volume2,
  Camera,
  ZoomIn
} from 'lucide-react';

// --- Types ---
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  benefits: string[];
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

// --- Data ---
const services: Service[] = [
  {
    id: 'decentralized',
    title: 'Automação Descentralizada',
    description: 'Sistema inovador sem central única, garantindo maior estabilidade, escalabilidade e independência para os dispositivos do seu lar.',
    icon: <Network className="w-6 h-6" />,
    imageUrl: '/modulo-automacao.jpg',
    benefits: ['Sem falha única de sistema', 'Fácil expansão e modulação', 'Processamento local mais rápido', 'Instalação sem obras e sem quebra-quebra']
  },
  {
    id: 'lighting',
    title: 'Iluminação Inteligente',
    description: 'Controle a atmosfera da sua casa com um toque. Crie cenas personalizadas para cinema, jantar ou relaxamento.',
    icon: <Lightbulb className="w-6 h-6" />,
    imageUrl: '/iluminacao.jpg',
    benefits: ['Economia de energia de até 30%', 'Controle por voz ou smartphone', 'Simulação de presença para segurança']
  },
  {
    id: 'security',
    title: 'Segurança & Monitoramento',
    description: 'Proteção total com câmeras 4K, fechaduras biométricas e sensores que avisam qualquer movimentação suspeita.',
    icon: <ShieldCheck className="w-6 h-6" />,
    imageUrl: '/camera.jpg?v=2',
    benefits: ['Monitoramento em tempo real', 'Acesso remoto global', 'Integração com sistemas policiais']
  },
  {
    id: 'entertainment',
    title: 'Home Cinema & Áudio Multiroom',
    description: 'Experiência de cinema no conforto do seu sofá. Áudio de alta fidelidade em todos os ambientes da casa.',
    icon: <Tv className="w-6 h-6" />,
    imageUrl: '/Home-Cinema.jpg',
    benefits: ['Calibração profissional de som', 'Automação de projetores e telas', 'Playlist única para toda a casa']
  },
  {
    id: 'climated',
    title: 'Climatização Inteligente',
    description: 'Sua casa na temperatura ideal antes mesmo de você chegar. Conforto térmico e eficiência energética.',
    icon: <Thermometer className="w-6 h-6" />,
    imageUrl: '/ar-condicionado.jpg',
    benefits: ['Controle de temperatura por ambiente', 'Sensor de umidade e qualidade do ar', 'Agendamento inteligente']
  },
  {
    id: 'network',
    title: 'Redes de Alta Performance',
    description: 'A base para uma casa conectada. Wi-Fi robusto eliminando pontos cegos e garantindo estabilidade total.',
    icon: <Wifi className="w-6 h-6" />,
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop',
    benefits: ['Tecnologia Wi-Fi 6', 'Redundância de sinal', 'Suporte a centenas de dispositivos']
  },
  {
    id: 'integration',
    title: 'Automação Centralizada',
    description: 'Gerencie tudo através de um único painel ou comando de voz. Uma interface simples para uma tecnologia complexa.',
    icon: <Smartphone className="w-6 h-6" />,
    imageUrl: '/automacao-centralizado.jpg',
    benefits: ['Interface intuitiva', 'Compatibilidade universal', 'Atualizações automáticas do sistema']
  }
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ricardo Oliveira',
    role: 'Arquiteto',
    content: 'O sistema de automação superou todas as minhas expectativas. A integração é perfeita e o suporte técnico é exemplar. Meus clientes adoram o diferencial.',
    rating: 5,
    image: '/Ricardo-Oliveira.jpg'
  },
  {
    id: 2,
    name: 'Clara Mendes',
    role: 'Empresária',
    content: 'Poder controlar a iluminação e segurança da minha casa pelo celular me trouxe uma paz de espírito incrível. Recomendo para todos que buscam conforto.',
    rating: 5,
    image: '/Clara-Mendes.jpg'
  },
  {
    id: 3,
    name: 'Maurício Silva',
    role: 'Sommelier',
    content: 'O projeto de áudio multiroom na minha adega e área gourmet ficou impecável. A qualidade do som é de outro nível. Trabalho profissional!',
    rating: 5,
    image: '/Mauricio-Silva.jpg'
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000214]/80 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 min-h-[5rem]">
          <div className="flex items-center">
            <div className="flex items-center">
              <img src="/Logo-Domus.png" alt="Domus Íntegra Logo" className="h-16 sm:h-20 w-auto object-contain invert brightness-0" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
              <span className="hidden text-xl font-brand font-bold tracking-tighter text-white uppercase">DOMUS<span className="text-blue-500 underline decoration-blue-500/20 decoration-4">ÍNTEGRA</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#events" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">Eventos</a>
            <a href="#testimonials" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">Depoimentos</a>
            <a href="#services" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">Serviços</a>
            <a href="#about" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">Sobre Nós</a>
            <div className="h-4 w-px bg-white/20" />
            <a 
              href="https://wa.me/5551991308627" 
              target="_blank" 
              rel="noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'conversion', { 'send_to': 'AW-18068043692/4qBBCI-Z45YcEKzvwadD' });
                }
              }}
              className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent transition-all shadow-md shadow-primary/20"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-blue-600 hover:bg-surface-light"
              id="mobile-menu-button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-white/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#events" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-slate-200 hover:bg-surface-light rounded-lg">Eventos</a>
              <a href="#testimonials" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-slate-200 hover:bg-surface-light rounded-lg">Depoimentos</a>
              <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-slate-200 hover:bg-surface-light rounded-lg">Serviços</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-slate-200 hover:bg-surface-light rounded-lg">Sobre Nós</a>
              <a 
                href="https://wa.me/5551991308627" 
                target="_blank" 
                rel="noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'conversion', { 'send_to': 'AW-18068043692/4qBBCI-Z45YcEKzvwadD' });
                  }
                }}
                className="mt-4 flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-4 rounded-lg text-base font-semibold"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                Líder em Automação Residencial & Projetos Integrados
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                Seu Lar, Mais <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 underline decoration-blue-500/50 decoration-8 underline-offset-4">Inteligente</span> do que nunca
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl mb-6">
                Transformamos casas em experiências tecnológicas integradas. Do controle de voz à segurança avançada, criamos o ambiente perfeito para seu estilo de vida.
              </p>

              {/* Quick Interactive Highlights for Top Services */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8 max-w-xl">
                <a 
                  href="#destaque-fechaduras"
                  className="group flex-1 flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-blue-950/70 to-surface border border-blue-500/30 hover:border-blue-400 transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-950/30"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <KeyRound size={20} />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300">Em Alta</span>
                      <span className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">Fechaduras Eletrônicas</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">Venda e instalação especializada</p>
                  </div>
                </a>

                <a 
                  href="#destaque-projetos"
                  className="group flex-1 flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-indigo-950/60 to-surface border border-white/15 hover:border-blue-400/60 transition-all hover:-translate-y-0.5 shadow-lg shadow-black/20"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center shrink-0 text-indigo-300 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                    <Layers size={20} />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">360°</span>
                      <span className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">Projetos Completos</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">Automação, Som, CFTV e Cinema</p>
                  </div>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="#contact" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(37,99,235,0.4)] border border-white/15">
                  Solicitar Orçamento
                  <ArrowRight size={18} />
                </a>
                <a href="#services" className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/10 hover:border-white/40 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  Ver Serviços
                </a>
              </div>
              
              <div className="mt-10 flex items-center gap-6 sm:gap-8 border-t border-white/10 pt-8">
                <div>
                  <div className="text-2xl font-bold text-white">150+</div>
                  <div className="text-sm text-slate-400">Projetos Entregues</div>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div>
                  <div className="text-2xl font-bold text-white">2+</div>
                  <div className="text-sm text-slate-400">Anos de Mercado</div>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <a 
                  href="https://share.google/i79S59xFW1yoJWWqn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <div className="text-2xl font-bold text-white flex items-center gap-1 group-hover:text-yellow-400 transition-colors">
                    4.9 <Star className="fill-yellow-500 text-yellow-500 w-5 h-5 ml-1 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-sm text-slate-400 group-hover:text-slate-200 underline decoration-white/20 underline-offset-4 transition-colors">27 Avaliações Google</div>
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <motion.div 
              className="relative w-full max-w-lg mx-auto lg:mr-0 gpu-layer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <div className="flex flex-col gap-4 sm:gap-6 mt-8 lg:mt-0 relative z-20">
                 {/* Sponsorships & Projects Section */}
                 <div className="bg-surface/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-2xl border border-white/15 hover:border-blue-500/40 transition-colors flex flex-col gap-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-accent to-purple-500" />
                    
                    {/* Headers */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                       <div>
                          <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">Patrocinador Oficial</div>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                             <h3 className="text-xl sm:text-2xl font-black italic tracking-tighter text-white">CASACOR 2026</h3>
                             <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20" />
                             <h3 className="text-xl sm:text-2xl font-black italic tracking-tighter text-white">MOSTRAGLASS 2026</h3>
                          </div>
                       </div>
                       <Award className="text-yellow-400 w-8 h-8 sm:w-10 sm:h-10 shrink-0 drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]" />
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                       <a href="#events" className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 shadow-lg relative h-[160px] sm:h-[220px] group block">
                          <img src="/casacor-fachada.jpg" alt="Casacor Fachada" loading="eager" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none" />
                          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                            <span className="text-[11px] font-bold tracking-wider uppercase">CASACOR</span>
                            <span className="text-[10px] bg-blue-600/90 px-2 py-0.5 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Ver fotos →</span>
                          </div>
                       </a>
                       <a href="#events" className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 shadow-lg relative h-[160px] sm:h-[220px] group block">
                          <img src="/mostraglass-mapa.jpg" alt="Mostraglass Planta" loading="eager" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none" />
                          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                            <span className="text-[11px] font-bold tracking-wider uppercase">MOSTRAGLASS</span>
                            <span className="text-[10px] bg-blue-600/90 px-2 py-0.5 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Conferir →</span>
                          </div>
                       </a>
                    </div>
                 </div>

                 {/* Testimonial Section */}
                 <div 
                    className="bg-gradient-to-r from-surface to-surface-light p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-xl border border-white/10 flex items-center gap-4 cursor-pointer hover:border-blue-400/50 hover:shadow-blue-900/20 hover:shadow-2xl transition-all group"
                    onClick={() => setActiveVideo('https://www.youtube.com/embed/mVCsF-H9ViM')}
                 >
                    <div className="relative w-[70px] h-[124px] sm:w-[90px] sm:h-[160px] rounded-xl overflow-hidden shrink-0 bg-slate-900 shadow-inner">
                       <img 
                          src="https://img.youtube.com/vi/mVCsF-H9ViM/hqdefault.jpg" 
                          alt="Depoimento Vídeo Tinta La Vida" 
                          loading="eager"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                       />
                       <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.8)] group-hover:scale-110 transition-transform">
                             <Play size={18} className="text-white fill-white ml-0.5" />
                          </div>
                       </div>
                    </div>
                    
                    <div className="flex-1">
                       <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 mb-2 sm:mb-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Depoimento em Vídeo</span>
                       </div>
                       
                       <h4 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">Tinta La Vida POA</h4>
                       
                       <div className="flex items-center gap-2 text-yellow-400 mb-2">
                          <div className="flex">
                             {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-current" />)}
                          </div>
                          <span className="text-xs text-slate-400 font-medium">5.0</span>
                       </div>
                       
                       <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                          "Projeto completo com som ambiente, televisores, câmeras de segurança e sistema de alarme integrado."
                       </p>
                    </div>
                 </div>
              </div>

              <div className="absolute inset-0 bg-blue-600/15 rounded-[40px] -translate-x-4 translate-y-4 -z-10 blur-xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-sm sm:max-w-md md:max-w-lg aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              <iframe 
                src={`${activeVideo}?autoplay=1`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const lockFeatures = [
  {
    id: 'biometria',
    label: 'Biometria & Facial 3D',
    desc: 'Destrave a porta em menos de 0,5s com leitura digital de alta precisão ou reconhecimento facial 3D mesmo no escuro.',
    image: '/fechadura-eletronica.jpg',
    slotLabel: 'Foto 1 • Fechadura Smart'
  },
  {
    id: 'app',
    label: 'Acesso via App',
    desc: 'Abra a porta de onde estiver pelo celular, receba notificações de acesso e crie senhas temporárias para visitas.',
    image: '/Central1.jpg',
    slotLabel: 'Espaço 2 • Integração / App'
  },
  {
    id: 'instalacao',
    label: 'Instalação Própria',
    desc: 'Equipe técnica própria para instalação limpa e precisa em portas de madeira, pivotantes ou vidro, pronta para uso.',
    image: '/modulo-automacao.jpg',
    slotLabel: 'Espaço 3 • Instalação / Vídeo'
  }
];

const fullProjectPillars = [
  {
    id: 'automacao',
    label: 'Automação Total',
    title: 'Iluminação, Persianas & Clima',
    desc: 'Cenas personalizadas por toque ou comando de voz. Integração completa desde a planta junto ao seu arquiteto.',
    image: '/Automacao-app.jpg'
  },
  {
    id: 'som',
    label: 'Som Ambiente',
    title: 'Áudio Multiroom de Alta Fidelidade',
    desc: 'Caixas acústicas embutidas no gesso de forma discreta para sonorizar área gourmet, living, suítes e área externa.',
    image: '/Caixa1.jpg'
  },
  {
    id: 'cinema',
    label: 'Home Cinema',
    title: 'Sala de Cinema Dedicada em Casa',
    desc: 'Projetores 4K, telões motorizados e som surround calibrado profissionalmente para uma imersão de cinema.',
    image: '/Home-Cinema.jpg'
  },
  {
    id: 'cftv',
    label: 'CFTV & Segurança',
    title: 'Monitoramento Inteligente 4K',
    desc: 'Câmeras de alta definição, analíticos de segurança, alarme e controle de acesso integrados em um só aplicativo.',
    image: '/camera.jpg?v=2'
  }
];

const ServiceSection = () => {
  const [activeLockFeature, setActiveLockFeature] = useState(0);
  const [activePillar, setActivePillar] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const trackConversion = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', { 'send_to': 'AW-18068043692/4qBBCI-Z45YcEKzvwadD' });
    }
  };

  return (
    <section id="services" className="py-24 bg-surface scroll-mt-20 perf-section relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} /> O Que Fazemos
          </div>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Soluções Premium para Cada Necessidade</h3>
          <p className="text-lg text-slate-300">
            Dos nossos serviços mais procurados do momento até projetos personalizados de ponta a ponta para sua residência ou empresa.
          </p>
        </motion.div>

        {/* --- DESTAQUES PRINCIPAIS (FECHADURA ELETRÔNICA & PROJETOS GRANDES) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Fechaduras Eletrônicas */}
          <motion.div
            id="destaque-fechaduras"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4 }}
            className="group bg-gradient-to-b from-surface-light to-surface rounded-3xl overflow-hidden border-2 border-blue-500/40 hover:border-blue-400 shadow-2xl shadow-blue-950/40 flex flex-col justify-between relative scroll-mt-28 transition-all"
          >
            <div>
              <div 
                className="relative h-64 sm:h-72 overflow-hidden cursor-pointer"
                onClick={() => setLightboxImage(lockFeatures[activeLockFeature].image)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={lockFeatures[activeLockFeature].image}
                    initial={{ opacity: 0.4, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.4 }}
                    transition={{ duration: 0.35 }}
                    src={lockFeatures[activeLockFeature].image}
                    alt="Fechadura Eletrônica Inteligente Domus Íntegra"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
                
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-blue-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-blue-600/40">
                  <KeyRound size={14} /> Principal • Campeão de Instalações
                </div>

                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-white/20 flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                  <ZoomIn size={14} className="text-blue-400" />
                  <span className="hidden sm:inline">Ampliar</span>
                </div>

                <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-300 block mb-1">Segurança & Praticidade</span>
                    <h4 className="text-2xl sm:text-3xl font-bold text-white">Fechaduras Eletrônicas</h4>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-4">
                {/* 3 Visual Media Slots for Smart Locks */}
                <div className="grid grid-cols-3 gap-2.5 mb-5">
                  {lockFeatures.map((feat, idx) => (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => setActiveLockFeature(idx)}
                      className={`relative h-16 sm:h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer group/thumb ${
                        activeLockFeature === idx
                          ? 'border-blue-400 shadow-lg shadow-blue-500/25 scale-[1.02]'
                          : 'border-white/10 opacity-65 hover:opacity-100 hover:border-white/30'
                      }`}
                    >
                      <img src={feat.image} alt={feat.label} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <span className="absolute bottom-1.5 left-2 right-1 text-[10px] font-bold text-white truncate text-left">
                        {idx + 1}. {feat.label}
                      </span>
                    </button>
                  ))}
                </div>

                <p className="text-slate-300 mb-5 leading-relaxed text-sm sm:text-base">
                  Esqueça as chaves! Trabalhamos com a venda e instalação especializada das melhores fechaduras digitais, biométricas e faciais do mercado, integradas ao seu smartphone.
                </p>

                {/* Interactive Feature Selector */}
                <div className="bg-app-bg/60 p-4 rounded-2xl border border-white/10 mb-6">
                  <div className="flex flex-wrap gap-2 mb-2.5">
                    {lockFeatures.map((feat, idx) => (
                      <button
                        key={feat.id}
                        type="button"
                        onClick={() => setActiveLockFeature(idx)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          activeLockFeature === idx
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                            : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {feat.label}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 min-h-[2.5rem] leading-relaxed">
                    {lockFeatures[activeLockFeature].desc}
                  </p>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                    Biometria, Facial 3D, Senha e Tag
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                    Senhas temporárias (Visitas / Airbnb)
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                    Travamento automático ao fechar
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                    Instalação limpa sem danificar a porta
                  </li>
                </ul>
              </div>
            </div>

            <div className="px-6 sm:px-8 pb-8 pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://wa.me/5551991308627?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20Fechadura%20Eletr%C3%B4nica."
                target="_blank"
                rel="noreferrer"
                onClick={trackConversion}
                className="w-full sm:flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5 text-sm"
              >
                <MessageCircle size={18} />
                Orçar Fechadura no WhatsApp
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-sm flex items-center justify-center gap-1.5 transition-all"
              >
                Formulário <ChevronRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Projetos Grandes & Integrados */}
          <motion.div
            id="destaque-projetos"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group bg-gradient-to-b from-surface-light to-surface rounded-3xl overflow-hidden border-2 border-indigo-500/40 hover:border-indigo-400 shadow-2xl shadow-indigo-950/40 flex flex-col justify-between relative scroll-mt-28 transition-all"
          >
            <div>
              <div 
                className="relative h-64 sm:h-72 overflow-hidden cursor-pointer"
                onClick={() => setLightboxImage(fullProjectPillars[activePillar].image)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={fullProjectPillars[activePillar].image}
                    initial={{ opacity: 0.4, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.4 }}
                    transition={{ duration: 0.35 }}
                    src={fullProjectPillars[activePillar].image}
                    alt={fullProjectPillars[activePillar].title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/35 to-transparent" />

                <div className="absolute top-4 left-4 flex items-center gap-2 bg-indigo-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-indigo-600/40">
                  <Layers size={14} /> Solução 360° • Alto Padrão
                </div>

                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-white/20 flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                  <ZoomIn size={14} className="text-indigo-400" />
                  <span className="hidden sm:inline">Ampliar</span>
                </div>

                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-300 block mb-1">Residencial & Comercial</span>
                  <h4 className="text-2xl sm:text-3xl font-bold text-white">Projetos Completos Integrados</h4>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-4">
                {/* 4 Visual Media Slots for Full Projects */}
                <div className="grid grid-cols-4 gap-2 mb-5">
                  {fullProjectPillars.map((pillar, idx) => (
                    <button
                      key={pillar.id}
                      type="button"
                      onClick={() => setActivePillar(idx)}
                      className={`relative h-16 sm:h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        activePillar === idx
                          ? 'border-indigo-400 shadow-lg shadow-indigo-500/25 scale-[1.02]'
                          : 'border-white/10 opacity-65 hover:opacity-100 hover:border-white/30'
                      }`}
                    >
                      <img src={pillar.image} alt={pillar.label} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <span className="absolute bottom-1.5 left-1.5 right-1 text-[9px] sm:text-[10px] font-bold text-white truncate text-left">
                        {idx + 1}. {pillar.label}
                      </span>
                    </button>
                  ))}
                </div>

                <p className="text-slate-300 mb-5 leading-relaxed text-sm sm:text-base">
                  Executamos projetos inteiros de ponta a ponta — unindo <strong>Automação, Som Ambiente, CFTV e Home Cinema</strong> em um único ecossistema inteligente, sem dor de cabeça com múltiplos fornecedores.
                </p>

                {/* Interactive 4-Pillar Explorer */}
                <div className="bg-app-bg/60 p-4 rounded-2xl border border-white/10 mb-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2.5">
                    {fullProjectPillars.map((pillar, idx) => (
                      <button
                        key={pillar.id}
                        type="button"
                        onClick={() => setActivePillar(idx)}
                        className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                          activePillar === idx
                            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                            : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {pillar.label}
                      </button>
                    ))}
                  </div>
                  <div className="min-h-[2.75rem]">
                    <div className="text-xs font-bold text-indigo-300 mb-0.5">{fullProjectPillars[activePillar].title}</div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {fullProjectPillars[activePillar].desc}
                    </p>
                  </div>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-indigo-400 shrink-0" />
                    Acompanhamento com arquitetos e obra
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-indigo-400 shrink-0" />
                    Infraestrutura, cabeamento e Wi-Fi 6
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-indigo-400 shrink-0" />
                    Tudo controlado em 1 único painel/App
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-indigo-400 shrink-0" />
                    Garantia e suporte pós-obra dedicado
                  </li>
                </ul>
              </div>
            </div>

            <div className="px-6 sm:px-8 pb-8 pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://wa.me/5551991308627?text=Ol%C3%A1!%20Tenho%20interesse%20em%20um%20Projeto%20Completo%20Integrado%20(Automa%C3%A7%C3%A3o%2C%20Som%2C%20CFTV%20e%20Home%20Cinema)."
                target="_blank"
                rel="noreferrer"
                onClick={trackConversion}
                className="w-full sm:flex-1 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 transition-all hover:-translate-y-0.5 text-sm"
              >
                <MessageCircle size={18} />
                Planejar Projeto Completo
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-sm flex items-center justify-center gap-1.5 transition-all"
              >
                Consultoria <ChevronRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Lightbox for Service Spotlight Images */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
              onClick={() => setLightboxImage(null)}
            >
              <button
                className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all z-[210] cursor-pointer"
                onClick={() => setLightboxImage(null)}
                aria-label="Fechar"
              >
                <X size={24} />
              </button>
              <motion.img
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={lightboxImage}
                alt="Visualização ampliada"
                className="max-w-[1100px] w-full max-h-[88vh] object-contain rounded-2xl shadow-2xl shadow-black/50"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- DEMAIS SOLUÇÕES ESPECIALIZADAS --- */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-white">Todas as Nossas Especialidades</h4>
            <p className="text-sm text-slate-400">Contrate soluções individuais ou combine-as no seu projeto</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
             <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.3) }}
              className={`group bg-surface rounded-3xl overflow-hidden border transition-all duration-300 relative hover:-translate-y-1 ${
                index === 0 
                  ? 'border-accent/80 hover:border-blue-400 shadow-2xl shadow-accent/20 md:col-span-2 lg:col-span-3 lg:flex' 
                  : 'border-white/10 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-950/30'
              }`}
              id={`service-card-${service.id}`}
            >
              {index === 0 && (
                <div className="absolute top-4 right-4 z-10 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Tecnologia Exclusiva
                </div>
              )}
              <div className={`relative overflow-hidden ${index === 0 ? 'lg:w-1/2 h-64 lg:h-auto' : 'h-56'}`}>
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform [backface-visibility:hidden] [transform:translateZ(0)]"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute top-4 left-4 p-3 bg-surface/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/10 ${index === 0 && 'z-10'}`}>
                  <div className="text-blue-400 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className={`p-8 ${index === 0 ? 'lg:w-1/2 flex flex-col justify-center' : ''}`}>
                <h4 className={`font-bold text-white mb-4 group-hover:text-blue-300 transition-colors ${index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>{service.title}</h4>
                <p className={`text-slate-300 mb-6 ${index === 0 ? '' : 'line-clamp-2'}`}>
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
                     <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                      <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`inline-flex items-center gap-2 text-blue-400 font-bold text-sm hover:text-blue-300 hover:gap-3 transition-all underline underline-offset-4 decoration-blue-500/30 ${index === 0 ? 'mt-auto' : ''}`}>
                  Solicitar orçamento <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-surface-light overflow-hidden scroll-mt-20 perf-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-[40px] overflow-hidden shadow-2xl z-10 border-8 border-white"
            >
              <img 
                  src="/mapa-rs.jpg" 
                  alt="Mapa de Atuação Domus Integra" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[450px] object-cover"
                  referrerPolicy="no-referrer"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                    <Award className="text-blue-500 w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold tracking-tight">60+ Cidades</div>
                    <div className="text-sm font-medium opacity-80">Levando inovação tecnológica</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-2xl pointer-events-none" />
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Sobre Nós</h2>
              <h3 className="text-4xl font-bold text-white mb-8 tracking-tight">Uma jornada de inovação e praticidade</h3>
              
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A <span className="text-blue-400 font-bold">Domus Íntegra</span> é uma empresa especializada em automação residencial, sistemas de monitoramento (CFTV), soluções audiovisuais e sistemas de som ambiente, criada com o propósito de levar inovação, tecnologia e praticidade para residências e ambientes comerciais.
                </p>
                <p>
                  Fundada por amigos que acreditam no poder da tecnologia para transformar o dia a dia, a Domus Íntegra atua hoje em <strong>mais de 60 cidades</strong>, oferecendo soluções inteligentes, seguras e personalizadas para cada projeto.
                </p>
                <p>
                  Nosso foco está em entender as necessidades de cada cliente e entregar sistemas eficientes, integrados e alinhados às melhores tecnologias do mercado. Trabalhamos com compromisso, qualidade e visão estratégica, sempre buscando proporcionar mais conforto, segurança e funcionalidade aos ambientes, conectando pessoas ao que há de mais moderno em tecnologia.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-8 pt-10 border-t border-white/20">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-blue-400">
                    <CheckCircle2 size={20} className="text-blue-500" />
                    <span className="font-bold text-white">Visão Estratégica</span>
                  </div>
                  <p className="text-sm text-slate-400">Planejamento focado no futuro do seu lar.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-blue-400">
                    <CheckCircle2 size={20} className="text-blue-500" />
                    <span className="font-bold text-white">Qualidade Domus</span>
                  </div>
                  <p className="text-sm text-slate-400">Compromisso total com a entrega de excelência.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WarrantySection = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden perf-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Garantia e Pós-Venda</h2>
              <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">Nosso compromisso não termina na entrega.</h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-10">
                Acreditamos que a verdadeira excelência em automação reside na tranquilidade de longo prazo. Nosso suporte técnico especializado e garantias robustas asseguram que seu sistema funcione perfeitamente hoje e no futuro.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-surface-light flex items-center justify-center shrink-0 border border-white/10 shadow-sm">
                    <ShieldCheck className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Garantia Estendida</h4>
                    <p className="text-slate-300">Equipamentos e instalação protegidos. Oferecemos as melhores condições de garantia do mercado para sua total paz de espírito.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-surface-light flex items-center justify-center shrink-0 border border-white/10 shadow-sm">
                    <Headset className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Suporte Técnico Ágil</h4>
                    <p className="text-slate-300">Nossa equipe de engenharia e suporte está sempre pronta para auxiliar remotamente ou presencialmente com rapidez e eficiência.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-surface-light flex items-center justify-center shrink-0 border border-white/10 shadow-sm">
                    <Wrench className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Manutenção Preventiva</h4>
                    <p className="text-slate-300">Acompanhamos a saúde do seu sistema continuamente, aplicando atualizações e ajustes para garantir máxima performance.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 border-8 border-white/10">
                <img 
                  src="/carroeferramenta.jpg" 
                  alt="Suporte Técnico Domus Integra" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[450px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="text-3xl font-bold mb-2">100% de Suporte</div>
                  <p className="text-white/80 font-medium">Você sempre no controle, nós sempre à disposição.</p>
                </div>
              </div>
              <div className="absolute top-10 -right-10 w-48 h-48 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/15 rounded-full blur-2xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


const EventsSection = () => {
  const [activeTab, setActiveTab] = useState<'casacor' | 'mostraglass'>('casacor');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const casacorImages = [1, 2, 3, 4].map((i) => `/casacor-foto-${i}.jpg`);

  return (
    <section id="events" className="py-24 bg-surface-dark border-t border-white/10 relative overflow-hidden perf-section scroll-mt-20">
      {/* subtle gradient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-blue-900/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          className="text-center mb-14"
        >
          <div className="relative inline-block mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-20" />
            <h2 className="relative text-3xl md:text-5xl font-brand font-black text-white tracking-tight uppercase">
              Nossa Presença em <br className="sm:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-600 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">Grandes Eventos</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A excelência da Domus Íntegra validada nos principais eventos de arquitetura e design do país.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-14 relative">
          <div className="absolute inset-0 bg-blue-500/10 blur-[40px] rounded-full max-w-[400px] mx-auto pointer-events-none" />
          <div className="bg-[#0f1225]/80 backdrop-blur-xl p-2 rounded-[2rem] flex flex-col sm:flex-row gap-2 border border-white/15 shadow-2xl relative z-10">
            <button
              onClick={() => setActiveTab('casacor')}
              className={`relative flex items-center justify-center gap-3 px-8 py-4 rounded-3xl font-bold text-sm transition-all duration-300 overflow-hidden group cursor-pointer ${activeTab === 'casacor' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
            >
              {activeTab === 'casacor' && (
                <motion.div layoutId="eventsTabIndicator" className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-white/20 rounded-3xl" />
              )}
              <Crown size={20} className={`relative z-10 ${activeTab === 'casacor' ? 'text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]' : 'text-slate-500 group-hover:text-yellow-400 transition-colors'}`} />
              <span className="relative z-10 tracking-[0.18em]">CASACOR</span>
            </button>
            <button
              onClick={() => setActiveTab('mostraglass')}
              className={`relative flex items-center justify-center gap-3 px-8 py-4 rounded-3xl font-bold text-sm transition-all duration-300 overflow-hidden group cursor-pointer ${activeTab === 'mostraglass' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
            >
              {activeTab === 'mostraglass' && (
                <motion.div layoutId="eventsTabIndicator" className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-white/20 rounded-3xl" />
              )}
              <Sparkles size={20} className={`relative z-10 ${activeTab === 'mostraglass' ? 'text-blue-300 drop-shadow-[0_0_8px_rgba(147,197,253,0.6)]' : 'text-slate-500 group-hover:text-blue-300 transition-colors'}`} />
              <div className="relative z-10 flex items-center gap-2">
                <span className="tracking-[0.18em]">MOSTRAGLASS</span>
                <span className={`text-[9px] uppercase px-2 py-0.5 rounded-full border ${activeTab === 'mostraglass' ? 'bg-white/20 border-white/30 text-white' : 'bg-white/5 border-white/10 text-slate-400 group-hover:text-white'}`}>Em breve</span>
              </div>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'casacor' && (
              <motion.div
                key="casacor"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {/* Placeholder for CASACOR Video/Main Image */}
                <div className="aspect-video bg-surface rounded-2xl border border-dashed border-white/20 flex flex-col items-center justify-center text-slate-500 overflow-hidden relative group">
                   <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 z-10 relative group-hover:scale-110 transition-transform">
                     <Play size={32} className="text-blue-400" />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2 z-10 relative">Aguarde...</h3>
                   <p className="z-10 font-medium text-slate-400 px-4 text-center">Vídeo Oficial da CASACOR em breve</p>
                </div>
                
                {/* Grid of images */}
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i, idx) => (
                    <div 
                      key={i} 
                      className="bg-surface rounded-xl border border-white/15 hover:border-blue-400/60 flex flex-col items-center justify-center text-slate-500 aspect-square overflow-hidden relative group cursor-pointer shadow-lg transition-all"
                      onClick={() => setSelectedImageIndex(idx)}
                    >
                      <img src={`/casacor-foto-${i}.jpg`} alt={`Casacor foto ${i}`} className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-white/20 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all pointer-events-none">
                        <ZoomIn size={14} className="text-blue-400" />
                        <span>Ampliar</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'mostraglass' && (
              <motion.div
                key="mostraglass"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center h-[400px] bg-surface rounded-3xl border border-dashed border-white/20 relative overflow-hidden group"
              >
                <img src="/mostraglass-mapa.jpg" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-all duration-700" alt="Mostraglass Planta" />
                <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
                
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 z-10 relative">
                  <Clock size={32} className="text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 z-10 relative">Aguarde...</h3>
                <p className="text-slate-400 max-w-md text-center px-4 z-10 relative">
                  Daqui a 30 dias, este espaço será atualizado com a galeria completa de fotos e vídeos da nossa participação na Mostraglass.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setSelectedImageIndex(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all z-[210] cursor-pointer"
              onClick={() => setSelectedImageIndex(null)}
              aria-label="Fechar"
            >
              <X size={24} />
            </button>

            <button
              className="absolute left-4 sm:left-8 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all z-[210] cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((selectedImageIndex - 1 + casacorImages.length) % casacorImages.length);
              }}
              aria-label="Foto anterior"
            >
              <ChevronLeft size={26} />
            </button>

            <motion.img 
              key={selectedImageIndex}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={casacorImages[selectedImageIndex]} 
              alt="Casacor ampliada" 
              className="max-w-[1100px] w-full max-h-[88vh] object-contain rounded-2xl shadow-2xl shadow-black/50"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-4 sm:right-8 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all z-[210] cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((selectedImageIndex + 1) % casacorImages.length);
              }}
              aria-label="Próxima foto"
            >
              <ChevronRight size={26} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};


const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-primary text-white overflow-hidden relative scroll-mt-20 perf-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Depoimentos</h2>
          <h3 className="text-4xl font-bold mb-6">O que nossos clientes dizem</h3>
          <p className="text-lg text-slate-400 mb-8">
             Orgulhamo-nos de construir relacionamentos duradouros através de excelência em cada projeto.
          </p>
          <a 
            href="https://share.google/i79S59xFW1yoJWWqn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-full text-sm font-bold transition-all group"
          >
            <Star className="fill-yellow-500 text-yellow-500 w-4 h-4" />
            Veja nossas avaliações no Google
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-accent/50 transition-all"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-slate-300 italic mb-8 leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold uppercase tracking-wide text-sm">{t.name}</div>
                  <div className="text-xs text-blue-500 font-medium">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/15 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </section>
  );
};

const quickSubjects = [
  'Fechadura Eletrônica',
  'Projeto Completo (Automação + Som + CFTV + Cinema)',
  'Automação & Iluminação',
  'Home Cinema & Som Ambiente',
  'CFTV & Segurança'
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '', subject: 'Fechadura Eletrônica', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formData.name}.
Interesse Principal: ${formData.subject}
Email: ${formData.email || 'Não informado'}
Telefone: ${formData.phone}
Cidade: ${formData.city}
Mensagem:
${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5551991308627?text=${encodedMessage}`;
    
    // Dispara o evento de conversão do Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18068043692/4qBBCI-Z45YcEKzvwadD'
      });
    }
    
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', city: '', subject: 'Fechadura Eletrônica', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-24 scroll-mt-20 perf-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="max-w-6xl mx-auto bg-surface-light rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl border border-white/15"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-5/12 p-6 sm:p-10 lg:p-14 bg-gradient-to-br from-primary via-[#000a52] to-surface text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos dar o próximo passo?</h2>
                <p className="text-slate-300 mb-8 md:mb-12 text-base">
                  Seja para instalar uma fechadura eletrônica hoje mesmo ou planejar o projeto completo da sua residência ou empresa, nossa equipe está pronta para atender você.
                </p>
                
                <div className="space-y-6">
                  <a 
                    href="https://wa.me/5551991308627"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-5 p-3 -mx-3 rounded-2xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform">
                      <MessageCircle className="text-white" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs font-medium mb-0.5">Atendimento Rápido via WhatsApp</div>
                      <div className="font-bold text-lg group-hover:text-blue-300 transition-colors">+55 (51) 99130-8627</div>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="text-blue-400" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs font-medium mb-0.5">Horário de Atendimento</div>
                      <div className="font-bold text-lg">Seg - Sex: 09h às 18h</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 flex gap-4">
                <a href="https://www.instagram.com/domus_integra/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="https://share.google/i79S59xFW1yoJWWqn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <MapPin size={18} />
                </a>
              </div>
            </div>

            <div className="w-full lg:w-7/12 p-6 sm:p-10 lg:p-14 bg-surface">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} className="text-green-500 sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Mensagem Enviada!</h3>
                  <p className="text-sm sm:text-base text-slate-400 mb-8">Obrigado pelo contato. Nossa equipe retornará em breve para agendarmos sua consultoria.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-blue-400 font-bold hover:underline"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-200 mb-2">
                      Qual solução você procura? <span className="text-blue-400 font-normal text-xs ml-1">(Selecione um assunto)</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {quickSubjects.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setFormData({ ...formData, subject: item })}
                          className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                            formData.subject === item
                              ? 'bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-600/30'
                              : 'bg-surface-light text-slate-300 border-white/10 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-sm font-bold text-slate-200 mb-1.5">
                        Nome Completo <span className="text-slate-400 font-normal text-xs ml-1">(Obrigatório)</span>
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl bg-surface-light border border-white/15 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white"
                        placeholder="Ex: João Silva"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-200 mb-1.5">
                        E-mail <span className="text-slate-400 font-normal text-xs ml-1">(Opcional)</span>
                      </label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl bg-surface-light border border-white/15 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white"
                        placeholder="exemplo@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-sm font-bold text-slate-200 mb-1.5">
                        WhatsApp <span className="text-slate-400 font-normal text-xs ml-1">(Obrigatório)</span>
                      </label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl bg-surface-light border border-white/15 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white"
                        placeholder="(51) 99130-8627"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-200 mb-1.5">
                        Cidade <span className="text-slate-400 font-normal text-xs ml-1">(Obrigatório)</span>
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl bg-surface-light border border-white/15 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white"
                        placeholder="Ex: Novo Hamburgo"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-200 mb-1.5">
                      Detalhes do pedido ou projeto <span className="text-slate-400 font-normal text-xs ml-1">(Obrigatório)</span>
                    </label>
                    <textarea 
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl bg-surface-light border border-white/15 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none text-white"
                      placeholder="Conte-nos brevemente sobre a porta para fechadura ou os ambientes do seu projeto..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-3 text-sm sm:text-base cursor-pointer hover:-translate-y-0.5"
                  >
                    Solicitar Atendimento no WhatsApp
                    <ArrowRight size={18} />
                  </button>
                  
                  <p className="text-[10px] text-center text-slate-400 px-8 uppercase tracking-widest leading-relaxed">
                    Ao clicar, você concorda com nossos termos de privacidade e autoriza o contato de nossos especialistas.
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Awards = ({ className }: {className?: string}) => (
  <div className={className}>
    <div className="flex gap-2 mb-2">
      <Award size={20} className="text-yellow-500" />
      <Award size={20} className="text-yellow-500" />
      <Award size={20} className="text-yellow-500" />
    </div>
    <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Award Winning Company</div>
  </div>
);

const Footer = () => {
  return (
    <footer className="pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img src="/Logo-Domus.png" alt="Domus Íntegra Logo" className="h-14 sm:h-16 w-auto object-contain invert brightness-0" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
              <span className="hidden text-lg font-brand font-bold tracking-tighter text-white uppercase">Domus<span className="text-blue-500 underline decoration-blue-500/20">Íntegra</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Líder em soluções de automação residencial de luxo no Brasil. Qualidade, sofisticação e tecnologia de ponta para o seu lar.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/domus_integra/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-surface border border-white/20 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Instagram size={14} />
              </a>
              <a href="https://share.google/i79S59xFW1yoJWWqn" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-surface border border-white/20 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <MapPin size={14} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-sm text-slate-400 hover:text-blue-500">Serviços</a></li>
              <li><a href="#about" className="text-sm text-slate-400 hover:text-blue-500">Sobre Nós</a></li>
              <li><a href="#testimonials" className="text-sm text-slate-400 hover:text-blue-500">Depoimentos</a></li>
              <li><a href="#contact" className="text-sm text-slate-400 hover:text-blue-500">Contatos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Serviços</h4>
            <ul className="space-y-4">
              <li><a href="#destaque-fechaduras" className="text-sm text-slate-400 hover:text-blue-500">Fechaduras Eletrônicas</a></li>
              <li><a href="#destaque-projetos" className="text-sm text-slate-400 hover:text-blue-500">Projetos Completos 360°</a></li>
              <li><a href="#services" className="text-sm text-slate-400 hover:text-blue-500">Home Cinema & Som</a></li>
              <li><a href="#services" className="text-sm text-slate-400 hover:text-blue-500">Automação & Iluminação</a></li>
              <li><a href="#services" className="text-sm text-slate-400 hover:text-blue-500">CFTV & Segurança</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-6">Receba tendências de tecnologia e design diretamente no seu email.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu melhor email" 
                className="bg-surface border border-white/20 text-sm px-4 py-2 rounded-lg outline-none focus:border-accent w-full"
              />
              <button className="bg-primary text-white p-2 rounded-lg hover:bg-accent transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div>© 2026 Domus Íntegra Automação. Todos os direitos reservados.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600">Política de Privacidade</a>
            <a href="#" className="hover:text-blue-600">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const partnerBrands = [
  'Tuya',
  'Harman Kardon',
  'Denon',
  'Uniview',
  'Compatec',
  'Onkyo',
  'Panasonic',
  'Formovie',
  'Intelbras',
  'JBL'
];

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-500/20 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        
        {/* High Priority: Validation (Events + Testimonials) */}
        <EventsSection />
        <TestimonialsSection />
        
        {/* Core Offering */}
        <ServiceSection />
        
        {/* Trust & Details */}
        <AboutSection />
        <WarrantySection />

        {/* Partners Banner (Animated Marquee) */}
        <section className="bg-surface py-12 border-y border-white/10 overflow-hidden relative">
          <div className="text-center mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">Marcas e Tecnologias Parceiras</span>
          </div>
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee flex items-center gap-10 sm:gap-16 px-6">
              {[...partnerBrands, ...partnerBrands].map((brand, idx) => (
                <span
                  key={idx}
                  className="text-xl sm:text-2xl font-black italic tracking-tighter uppercase text-slate-500 hover:text-blue-400 transition-colors cursor-default select-none"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>
        
        {/* Floating WhatsApp Button for all pages */}
        <a 
          href="https://wa.me/5551991308627" 
          target="_blank" 
          rel="noreferrer"
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'conversion', { 'send_to': 'AW-18068043692/4qBBCI-Z45YcEKzvwadD' });
            }
          }}
          className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform hover:bg-green-600 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={32} />
          <span className="absolute right-full mr-4 bg-surface text-white px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
            Fale conosco aqui!
          </span>
        </a>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
