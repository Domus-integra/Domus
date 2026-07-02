/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lightbulb, 
  ShieldCheck, 
  Tv, 
  Wifi, 
  Smartphone, 
  Thermometer, 
  Menu, 
  X, 
  ArrowRight, 
  MessageCircle, 
  Star, 
  CheckCircle2, 
  Clock, 
  Users, 
  Award,
  Instagram,
  Linkedin,
  Facebook,
  ChevronRight,
  Network,
  MapPin
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
    imageUrl: '/luzes-aconchego.jpg',
    benefits: ['Economia de energia de até 30%', 'Controle por voz ou smartphone', 'Simulação de presença para segurança']
  },
  {
    id: 'security',
    title: 'Segurança & Monitoramento',
    description: 'Proteção total com câmeras 4K, fechaduras biométricas e sensores que avisam qualquer movimentação suspeita.',
    icon: <ShieldCheck className="w-6 h-6" />,
    imageUrl: '/camera.jpg',
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
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&h=150&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Clara Mendes',
    role: 'Empresária',
    content: 'Poder controlar a iluminação e segurança da minha casa pelo celular me trouxe uma paz de espírito incrível. Recomendo para todos que buscam conforto.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&h=150&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Maurício Silva',
    role: 'Sommelier',
    content: 'O projeto de áudio multiroom na minha adega e área gourmet ficou impecável. A qualidade do som é de outro nível. Trabalho profissional!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&h=150&auto=format&fit=crop'
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 min-h-[5rem]">
          <div className="flex items-center">
            <div className="flex items-center">
              <img src="/Logo-Domus.png" alt="Domus Íntegra Logo" className="h-16 sm:h-20 w-auto object-contain mix-blend-multiply" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
              <span className="hidden text-xl font-brand font-bold tracking-tighter text-slate-900 uppercase">DOMUS<span className="text-accent underline decoration-accent/20 decoration-4">ÍNTEGRA</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Serviços</a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Sobre Nós</a>
            <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Depoimentos</a>
            <div className="h-4 w-px bg-slate-200" />
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
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-blue-600 hover:bg-slate-100"
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
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Serviços</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Sobre Nós</a>
              <a href="#testimonials" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Depoimentos</a>
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
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Líder em Automação Residencial
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Seu Lar, Mais <span className="text-primary underline decoration-accent decoration-8 underline-offset-4">Inteligente</span> do que nunca
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-10">
                Transformamos casas em experiências tecnológicas integradas. Do controle de voz à segurança avançada, criamos o ambiente perfeito para seu estilo de vida.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="#contact" className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-accent transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/30">
                  Solicitar Orçamento
                  <ArrowRight size={18} />
                </a>
                <a href="#services" className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                  Ver Serviços
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-8 border-t border-slate-100 pt-8">
                <div>
                  <div className="text-2xl font-bold text-slate-900">150+</div>
                  <div className="text-sm text-slate-500">Projetos Entregues</div>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div>
                  <div className="text-2xl font-bold text-slate-900">2+</div>
                  <div className="text-sm text-slate-500">Anos de Mercado</div>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div>
                  <div className="text-2xl font-bold text-slate-900">100%</div>
                  <div className="text-sm text-slate-500">Satisfação</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white">
                <img 
                  src="/Automacao-app.jpg" 
                  alt="Modern Automation" 
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop"; }}
                  className="w-full h-[400px] lg:h-[600px] object-cover bg-slate-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block max-w-[240px] border border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Smartphone className="text-green-600 w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-slate-900">Controle Total</span>
                </div>
                <p className="text-xs text-slate-500">Toda a sua casa controlada na palma da sua mão através do seu smartphone.</p>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block max-w-[200px] border border-slate-100">
                 <div className="flex items-center gap-3 mb-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="flex">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                </div>
                <p className="text-[10px] font-bold text-slate-900 uppercase tracking-tighter">Avaliado por nossos clientes</p>
              </div>

              <div className="absolute inset-0 bg-blue-100/30 rounded-3xl -translate-x-4 translate-y-4 -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceSection = () => {
  return (
    <section id="services" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">O Que Fazemos</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Soluções Premium para Cada Necessidade</h3>
          <p className="text-lg text-slate-600">
            Oferecemos uma linha completa de serviços projetados para levar máximo conforto e sofisticação até você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
             <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group bg-white rounded-3xl overflow-hidden border transition-all duration-300 relative ${
                index === 0 
                  ? 'border-accent shadow-2xl shadow-accent/20 md:col-span-2 lg:col-span-3 lg:flex' 
                  : 'border-slate-100 hover:shadow-2xl hover:shadow-primary/10'
              }`}
              id={`service-card-${service.id}`}
            >
              {index === 0 && (
                <div className="absolute top-4 right-4 z-10 bg-accent text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Destaque
                </div>
              )}
              <div className={`relative overflow-hidden ${index === 0 ? 'lg:w-1/2 h-64 lg:h-auto' : 'h-56'}`}>
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover scale-[1.01] group-hover:scale-110 transition-transform duration-500 will-change-transform [backface-visibility:hidden] [transform:translateZ(0)]"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute top-4 left-4 p-3 bg-white rounded-2xl shadow-lg ${index === 0 && 'z-10'}`}>
                  <div className="text-primary">
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className={`p-8 ${index === 0 ? 'lg:w-1/2 flex flex-col justify-center' : ''}`}>
                <h4 className={`font-bold text-slate-900 mb-4 ${index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>{service.title}</h4>
                <p className={`text-slate-600 mb-6 ${index === 0 ? '' : 'line-clamp-2'}`}>
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
                     <li key={i} className="flex items-start gap-3 text-sm text-slate-500">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all underline underline-offset-4 decoration-accent/30 ${index === 0 ? 'mt-auto' : ''}`}>
                  Saiba mais <ChevronRight size={16} />
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
    <section id="about" className="py-24 bg-slate-50 overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[40px] overflow-hidden shadow-2xl z-10 border-8 border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
                alt="Escritório Domus Integra" 
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                    <Award className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold tracking-tight">60+ Cidades</div>
                    <div className="text-sm font-medium opacity-80">Levando inovação tecnológica</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Sobre Nós</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">Uma jornada de inovação e praticidade</h3>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  A <span className="text-primary font-bold">Domus Íntegra</span> é uma empresa especializada em automação residencial, sistemas de monitoramento (CFTV), soluções audiovisuais e sistemas de som ambiente, criada com o propósito de levar inovação, tecnologia e praticidade para residências e ambientes comerciais.
                </p>
                <p>
                  Fundada por amigos que acreditam no poder da tecnologia para transformar o dia a dia, a Domus Íntegra atua hoje em <strong>mais de 60 cidades</strong>, oferecendo soluções inteligentes, seguras e personalizadas para cada projeto.
                </p>
                <p>
                  Nosso foco está em entender as necessidades de cada cliente e entregar sistemas eficientes, integrados e alinhados às melhores tecnologias do mercado. Trabalhamos com compromisso, qualidade e visão estratégica, sempre buscando proporcionar mais conforto, segurança e funcionalidade aos ambientes, conectando pessoas ao que há de mais moderno em tecnologia.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-8 pt-10 border-t border-slate-200">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle2 size={20} className="text-accent" />
                    <span className="font-bold text-slate-900">Visão Estratégica</span>
                  </div>
                  <p className="text-sm text-slate-500">Planejamento focado no futuro do seu lar.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle2 size={20} className="text-accent" />
                    <span className="font-bold text-slate-900">Qualidade Domus</span>
                  </div>
                  <p className="text-sm text-slate-500">Compromisso total com a entrega de excelência.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-primary text-white overflow-hidden relative scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Depoimentos</h2>
          <h3 className="text-4xl font-bold mb-6">O que nossos clientes dizem</h3>
          <p className="text-lg text-slate-400 mb-8">
             Orgulhamo-nos de construir relacionamentos duradouros através de excelência em cada projeto.
          </p>
          <a 
            href="https://share.google/i79S59xFW1yoJWWqn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white text-white hover:text-primary border border-white/20 px-8 py-3 rounded-full text-sm font-bold transition-all group"
          >
            <Star className="fill-yellow-500 text-yellow-500 w-4 h-4" />
            Veja nossas avaliações no Google
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-accent/50 transition-all">
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
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold uppercase tracking-wide text-sm">{t.name}</div>
                  <div className="text-xs text-accent font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formData.name}.
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
    setFormData({ name: '', email: '', phone: '', city: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-slate-50 rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-sm border border-slate-100">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-20 bg-primary text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Vamos dar o próximo passo?</h2>
              <p className="text-slate-400 mb-8 md:mb-12 text-base md:text-lg">
                Nossa equipe está pronta para desenhar um projeto exclusivo para você. Preencha o formulário ou nos chame no WhatsApp.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center shrink-0 shadow-lg shadow-primary/40">
                    <MessageCircle className="text-white" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm font-medium mb-1">WhatsApp</div>
                    <div className="font-bold text-lg">+55 (51) 99130-8627</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-accent" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm font-medium mb-1">Atendimento</div>
                    <div className="font-bold text-lg">Seg - Sex: 09h às 18h</div>
                  </div>
                </div>
              </div>

              <div className="mt-20 pt-12 border-t border-white/10 flex gap-6">
                <a href="https://www.instagram.com/domus_integra/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="https://share.google/i79S59xFW1yoJWWqn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                  <MapPin size={18} />
                </a>
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-20 bg-white">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} className="text-green-600 sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Mensagem Enviada!</h3>
                  <p className="text-sm sm:text-base text-slate-500 mb-8">Obrigado pelo contato. Nossa equipe retornará em breve para agendarmos sua consultoria.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1 sm:mb-2">
                        Nome Completo <span className="text-slate-400 font-normal text-xs ml-1">(Obrigatório)</span>
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 sm:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-p"
                        placeholder="Ex: João Silva"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1 sm:mb-2">
                        E-mail <span className="text-slate-400 font-normal text-xs ml-1">(Opcional)</span>
                      </label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 sm:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        placeholder="exemplo@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1 sm:mb-2">
                        WhatsApp <span className="text-slate-400 font-normal text-xs ml-1">(Obrigatório)</span>
                      </label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 sm:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        placeholder="(51) 99130-8627"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1 sm:mb-2">
                        Cidade <span className="text-slate-400 font-normal text-xs ml-1">(Obrigatório)</span>
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        className="w-full px-4 py-3 sm:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        placeholder="Ex: Novo Hamburgo"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1 sm:mb-2">
                      Como podemos ajudar? <span className="text-slate-400 font-normal text-xs ml-1">(Obrigatório)</span>
                    </label>
                    <textarea 
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 sm:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                      placeholder="Descreva seu projeto ou dúvida..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-primary text-white font-bold py-4 sm:py-5 rounded-2xl hover:bg-accent transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3 text-sm sm:text-base"
                  >
                    Enviar Mensagem
                    <ArrowRight size={18} />
                  </button>
                  
                  <p className="text-[10px] text-center text-slate-400 px-8 uppercase tracking-widest leading-relaxed">
                    Ao clicar, você concorda com nossos termos de privacidade e autoriza o contato de nossos especialistas.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
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
              <img src="/Logo-Domus.png" alt="Domus Íntegra Logo" className="h-14 sm:h-16 w-auto object-contain mix-blend-multiply" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
              <span className="hidden text-lg font-brand font-bold tracking-tighter text-slate-900 uppercase">Domus<span className="text-accent underline decoration-accent/20">Íntegra</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Líder em soluções de automação residencial de luxo no Brasil. Qualidade, sofisticação e tecnologia de ponta para o seu lar.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/domus_integra/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Instagram size={14} />
              </a>
              <a href="https://share.google/i79S59xFW1yoJWWqn" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <MapPin size={14} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-sm text-slate-500 hover:text-accent">Serviços</a></li>
              <li><a href="#about" className="text-sm text-slate-500 hover:text-accent">Sobre Nós</a></li>
              <li><a href="#testimonials" className="text-sm text-slate-500 hover:text-accent">Depoimentos</a></li>
              <li><a href="#contact" className="text-sm text-slate-500 hover:text-accent">Contatos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Serviços</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-sm text-slate-500 hover:text-accent">Home Cinema</a></li>
              <li><a href="#services" className="text-sm text-slate-500 hover:text-accent">Iluminação</a></li>
              <li><a href="#services" className="text-sm text-slate-500 hover:text-accent">Segurança</a></li>
              <li><a href="#services" className="text-sm text-slate-500 hover:text-accent">Redes Wi-Fi</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Newsletter</h4>
            <p className="text-sm text-slate-500 mb-6">Receba tendências de tecnologia e design diretamente no seu email.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu melhor email" 
                className="bg-white border border-slate-200 text-sm px-4 py-2 rounded-lg outline-none focus:border-accent w-full"
              />
              <button className="bg-primary text-white p-2 rounded-lg hover:bg-accent transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div>© 2024 Domus Íntegra Automação. Todos os direitos reservados.</div>
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

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        
        {/* Partners Banner (Subtle) */}
        <section className="bg-white py-12 border-y border-slate-100 overflow-hidden whitespace-nowrap">
          <div className="container mx-auto px-4">
             <div className="flex items-center justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all cursor-default overflow-x-auto pb-4 hide-scrollbar">
                <span className="text-2xl font-black italic tracking-tighter uppercase">Tuya</span>
                <span className="text-2xl font-black italic tracking-tighter uppercase">Harman Kardon</span>
                <span className="text-2xl font-black italic tracking-tighter uppercase">Denon</span>
                <span className="text-2xl font-black italic tracking-tighter uppercase">Uniview</span>
                <span className="text-2xl font-black italic tracking-tighter uppercase">Compatec</span>
                <span className="text-2xl font-black italic tracking-tighter uppercase">Onkyo</span>
                <span className="text-2xl font-black italic tracking-tighter uppercase">Panasonic</span>
                <span className="text-2xl font-black italic tracking-tighter uppercase">Formovie</span>
             </div>
          </div>
        </section>

        <ServiceSection />
        <AboutSection />
        
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
          <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-slate-100">
            Fale conosco aqui!
          </span>
        </a>

        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
