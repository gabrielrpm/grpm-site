'use client';

import { useState } from 'react';
import { Phone, Share2, Mail, ChevronDown, Star, Award, Zap, Clock, X } from 'lucide-react';

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showBriefing, setShowBriefing] = useState(false);

  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-x-hidden">
      {/* Grid Overlay Refinado */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="h-full w-full opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Grain Texture */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.015]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
      }}></div>

      {/* Modal Briefing */}
      {showBriefing && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 md:p-12">
            <button
              onClick={() => setShowBriefing(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-3xl font-bold mb-2">Iniciar Projeto</h2>
            <p className="text-zinc-400 mb-8">Preencha o briefing e entraremos em contato em até 24h</p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome Completo</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#FF6B00] focus:outline-none transition"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">E-mail</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#FF6B00] focus:outline-none transition"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">WhatsApp</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#FF6B00] focus:outline-none transition"
                  placeholder="+55 35 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tipo de Projeto</label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#FF6B00] focus:outline-none transition">
                  <option value="">Selecione</option>
                  <option value="site">Site Institucional</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="landing">Landing Page</option>
                  <option value="app">Aplicação Web</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Descreva seu projeto</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#FF6B00] focus:outline-none transition resize-none"
                  placeholder="Conte-nos sobre seu negócio e objetivos..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#FF6B00] hover:bg-[#ff7a1a] text-white font-semibold rounded-xl transition"
              >
                Enviar Briefing
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">GRPM</div>

          <div className="hidden md:flex items-center gap-8 px-8 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
            <a href="#inicio" className="text-sm hover:text-[#FF6B00] transition">Início</a>
            <a href="#projetos" className="text-sm hover:text-[#FF6B00] transition">Projetos</a>
            <a href="#servicos" className="text-sm hover:text-[#FF6B00] transition">Serviços</a>
            <a href="#depoimentos" className="text-sm hover:text-[#FF6B00] transition">Depoimentos</a>
          </div>

          <button
            onClick={() => setShowBriefing(true)}
            className="px-6 py-3 bg-[#FF6B00] hover:bg-[#ff7a1a] text-white text-sm font-semibold rounded-full transition"
          >
            Iniciar Projeto
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="inicio" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
                Engenharia de Software e Marketing de{' '}
                <span className="font-serif italic font-normal text-[#FF6B00]">Performance</span>{' '}
                para Marcas Exclusivas
              </h1>
              <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                Soluções digitais desenvolvidas com precisão técnica e escala global via LLC americana. Do código à conversão, entregamos excelência.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowBriefing(true)}
                  className="px-8 py-4 bg-[#FF6B00] hover:bg-[#ff7a1a] text-white font-semibold rounded-full transition inline-flex items-center justify-center gap-2"
                >
                  Iniciar Projeto
                </button>
                <a
                  href="#projetos"
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 text-white font-semibold rounded-full transition inline-flex items-center justify-center"
                >
                  Ver Projetos
                </a>
              </div>
            </div>

            <div className="relative">
              {/* Glassmorphism Cards */}
              <div className="absolute top-0 right-0 w-48 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
                <div className="text-5xl font-black mb-2">99%</div>
                <div className="text-sm text-white/70">Taxa de Satisfação</div>
              </div>

              <div className="absolute bottom-20 left-0 w-56 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
                <div className="text-5xl font-black mb-2 text-[#FF6B00]">320+</div>
                <div className="text-sm text-white/70">Clientes no Ar</div>
              </div>

              {/* Abstract 3D Shape */}
              <div className="w-full h-[400px] flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#FF6B00]/20 to-purple-600/20 blur-3xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Intro */}
      <section className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm text-[#FF6B00] mb-4 tracking-widest font-semibold">NOSSA MISSÃO</div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Tornando a tecnologia de ponta <span className="font-serif italic font-normal text-[#FF6B00]">acessível</span> para pequenos negócios
              </h2>
            </div>
            <div>
              <p className="text-lg text-white/70 leading-relaxed">
                Acreditamos que todo negócio merece uma presença digital profissional. Combinamos design excepcional com tecnologia moderna para criar experiências que convertem visitantes em clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos - Bento Grid */}
      <section id="projetos" className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">Projetos em Destaque</h2>
            <p className="text-xl text-white/70">Trabalhos que transformaram negócios</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className={`group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#FF6B00]/50 transition-all duration-500 ${
                  item === 1 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                style={{ minHeight: item === 1 ? '500px' : '300px' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/20 to-purple-600/20 opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-black text-white/10 mb-4">PROJETO {item}</div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-4 py-2 bg-[#FF6B00] text-white text-sm font-semibold rounded-full">
                    Ver Mais
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Accordion */}
      <section id="servicos" className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">Nossos Serviços</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                number: '001',
                title: 'Desenvolvimento Web Full-Stack & UI/UX',
                description: 'Arquitetura de software robusta com React, Next.js e TypeScript. Design de interfaces que combinam estética premium com usabilidade excepcional.'
              },
              {
                number: '002',
                title: 'Ecossistemas Digitais de Alta Conversão',
                description: 'Sites, landing pages e aplicações web otimizadas para conversão. Integrações com CRM, automação de marketing e análise de dados em tempo real.'
              },
              {
                number: '003',
                title: 'Otimização de Performance e Rankeamento Orgânico',
                description: 'SEO técnico avançado, Core Web Vitals otimizados e estratégias de conteúdo para dominar os resultados de busca do Google.'
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#FF6B00]/50 transition-all"
                style={{ backdropFilter: 'blur(10px)' }}
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                  className="w-full p-8 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-4xl font-black text-[#FF6B00]">{service.number}</span>
                    <h3 className="text-2xl md:text-3xl font-black">{service.title}</h3>
                  </div>
                  <ChevronDown
                    className={`w-8 h-8 transition-transform ${
                      activeAccordion === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeAccordion === idx && (
                  <div className="px-8 pb-8">
                    <p className="text-lg text-white/70 max-w-3xl leading-relaxed">{service.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker Marquee */}
      <section className="py-12 bg-[#FF6B00] overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8 text-4xl md:text-6xl font-black text-white">
              POR QUE A GRPM •
            </span>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: 'Site em 7 dias', description: 'Entregamos seu projeto completo em uma semana' },
              { icon: Zap, title: 'Tecnologia de Ponta', description: 'As melhores ferramentas do mercado' },
              { icon: Award, title: 'Suporte Contínuo', description: 'Estamos sempre disponíveis para você' },
              { icon: Star, title: 'Resultado Real', description: 'Sites que convertem e geram vendas' }
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:border-[#FF6B00]/50 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-12 h-12 text-[#FF6B00]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">Tecnologias que Usamos</h2>
            <p className="text-xl text-white/70">Stack moderno de desenvolvimento</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'Next.js', icon: '▲' },
              { name: 'Vercel', icon: '▲' },
              { name: 'Tailwind CSS', icon: '🎨' }
            ].map((tech, idx) => (
              <div
                key={idx}
                className="group p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-[#FF6B00]/50 transition-all duration-300 text-center"
                style={{ backdropFilter: 'blur(10px)' }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{tech.icon}</div>
                <h3 className="text-lg font-bold">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">O Que Dizem</h2>
            <p className="text-xl text-white/70">Clientes que confiam na GRPM</p>
          </div>

          {/* Card Depoimento */}
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12" style={{ backdropFilter: 'blur(10px)' }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl text-[#FF6B00] mb-6 font-serif">&ldquo;</div>
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  A GRPM transformou completamente nosso negócio online. O site ficou incrível e já estamos recebendo muito mais contatos de clientes. Recomendo de olhos fechados!
                </p>
                <div>
                  <p className="text-lg font-bold">João Silva</p>
                  <p className="text-white/70">Fundador, Tech Startup</p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#FF6B00]/20 to-purple-600/20 overflow-hidden border border-white/10">
                  <div className="w-full h-full flex items-center justify-center text-white/10 text-4xl font-bold">
                    FOTO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">Perguntas Frequentes</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'Quanto tempo leva para criar um site?',
                answer: 'Entregamos seu site completo e no ar em até 7 dias úteis.'
              },
              {
                question: 'Qual é o investimento?',
                answer: 'Os valores variam conforme a complexidade do projeto. Entre em contato para um orçamento personalizado.'
              },
              {
                question: 'Vocês oferecem suporte após a entrega?',
                answer: 'Sim! Oferecemos suporte contínuo e estamos sempre disponíveis para ajustes e melhorias.'
              },
              {
                question: 'O site será responsivo?',
                answer: 'Todos nossos sites são 100% responsivos e otimizados para mobile, tablet e desktop.'
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className={`bg-white/5 backdrop-blur-xl border rounded-3xl overflow-hidden transition-all ${
                  activeFaq === idx ? 'border-[#FF6B00]' : 'border-white/10'
                }`}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform ${
                      activeFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6">
                    <p className="text-white/70">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <div className="text-8xl md:text-9xl font-black mb-4 tracking-tighter">GRPM</div>
            <p className="text-sm text-white/50 mb-8">GRPM Global Marketing — Operação internacional com base nos EUA</p>
            <div className="flex items-center justify-center gap-6 mb-8">
              <a
                href="https://instagram.com/grpmweb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-[#FF6B00] hover:bg-[#ff7a1a] flex items-center justify-center transition"
              >
                <Share2 className="w-7 h-7" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-[#FF6B00] hover:bg-[#ff7a1a] flex items-center justify-center transition"
              >
                <Share2 className="w-7 h-7" />
              </a>
              <a
                href="mailto:contato@grpm.com.br"
                className="w-16 h-16 rounded-full bg-[#FF6B00] hover:bg-[#ff7a1a] flex items-center justify-center transition"
              >
                <Mail className="w-7 h-7" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-sm text-white/70">
            <p>&copy; 2026 GRPM Web Marketing. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Privacidade</a>
              <a href="#" className="hover:text-white transition">Termos</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
