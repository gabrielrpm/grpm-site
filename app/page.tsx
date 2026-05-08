'use client';

import { useState } from 'react';
import { Phone, Share2, Mail, ChevronDown, Star, Award, Zap, Clock } from 'lucide-react';

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-x-hidden">
      {/* Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">GRPM</div>

          <div className="hidden md:flex items-center gap-8 px-8 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
            <a href="#inicio" className="text-sm hover:text-[#FF6B00] transition">Início</a>
            <a href="#projetos" className="text-sm hover:text-[#FF6B00] transition">Projetos</a>
            <a href="#servicos" className="text-sm hover:text-[#FF6B00] transition">Serviços</a>
            <a href="#depoimentos" className="text-sm hover:text-[#FF6B00] transition">Depoimentos</a>
          </div>

          <a
            href={`https://wa.me/5535999222073?text=Olá!%20Quero%20iniciar%20meu%20projeto`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#FF6B00] hover:bg-[#ff7a1a] text-white text-sm font-semibold rounded-full transition"
          >
            Iniciar Projeto
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="inicio" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                Transformando Ideias em{' '}
                <span className="font-serif italic text-[#FF6B00]">Experiências</span>{' '}
                Digitais
              </h1>
              <p className="text-xl text-zinc-400 max-w-xl">
                Criamos sites profissionais que aumentam sua presença digital e geram resultados reais para seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/5535999222073?text=Olá!%20Quero%20criar%20meu%20site`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#FF6B00] hover:bg-[#ff7a1a] text-white font-semibold rounded-full transition inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Começar Agora
                </a>
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
              <div className="absolute top-0 right-0 w-48 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
                <div className="text-5xl font-bold mb-2">99%</div>
                <div className="text-sm text-zinc-400">Taxa de Satisfação</div>
              </div>

              <div className="absolute bottom-20 left-0 w-56 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
                <div className="text-5xl font-bold mb-2 text-[#FF6B00]">320+</div>
                <div className="text-sm text-zinc-400">Clientes no Ar</div>
              </div>

              {/* Abstract 3D Shape Placeholder */}
              <div className="w-full h-[400px] flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#FF6B00]/20 to-purple-600/20 blur-3xl"></div>
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
              <div className="text-sm text-[#FF6B00] mb-4 tracking-widest">NOSSA MISSÃO</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Tornando a tecnologia de ponta <span className="font-serif italic text-[#FF6B00]">acessível</span> para pequenos negócios
              </h2>
            </div>
            <div>
              <p className="text-lg text-zinc-400 leading-relaxed">
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
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Projetos em Destaque</h2>
            <p className="text-xl text-zinc-400">Trabalhos que transformaram negócios</p>
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
                    <div className="text-6xl font-bold text-white/10 mb-4">PROJETO {item}</div>
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
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Nossos Serviços</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                number: '001',
                title: 'Criação de Sites Profissionais',
                description: 'Sites modernos, rápidos e responsivos que convertem visitantes em clientes. Design exclusivo e otimizado para SEO.'
              },
              {
                number: '002',
                title: 'Aumento de Presença Digital',
                description: 'Estratégias completas para fortalecer sua marca online. Gestão de redes sociais, conteúdo e engajamento.'
              },
              {
                number: '003',
                title: 'SEO e Google',
                description: 'Posicionamento no Google com técnicas avançadas de SEO. Mais visibilidade, mais clientes, mais vendas.'
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#FF6B00]/50 transition-all"
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                  className="w-full p-8 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-4xl font-bold text-[#FF6B00]">{service.number}</span>
                    <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
                  </div>
                  <ChevronDown
                    className={`w-8 h-8 transition-transform ${
                      activeAccordion === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeAccordion === idx && (
                  <div className="px-8 pb-8">
                    <p className="text-lg text-zinc-400 max-w-3xl">{service.description}</p>
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
            <span key={i} className="mx-8 text-4xl md:text-6xl font-bold text-white">
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
                <p className="text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">O Que Dizem</h2>
            <p className="text-xl text-zinc-400">Clientes que confiam na GRPM</p>
          </div>

          {/* Logos Parceiros */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-20 opacity-40">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-16 bg-white/5 rounded-xl flex items-center justify-center">
                <span className="text-xs font-bold">LOGO</span>
              </div>
            ))}
          </div>

          {/* Card Depoimento */}
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl text-[#FF6B00] mb-6">&ldquo;</div>
                <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                  A GRPM transformou completamente nosso negócio online. O site ficou incrível e já estamos recebendo muito mais contatos de clientes. Recomendo de olhos fechados!
                </p>
                <div>
                  <p className="text-lg font-bold">Maria Silva</p>
                  <p className="text-zinc-400">CEO, Empresa XYZ</p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#FF6B00]/20 to-purple-600/20 overflow-hidden">
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
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Perguntas Frequentes</h2>
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
                    <p className="text-zinc-400">{faq.answer}</p>
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
            <div className="text-8xl md:text-9xl font-bold mb-8">GRPM</div>
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

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-sm text-zinc-400">
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
