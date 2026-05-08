import Image from "next/image";
import { Mail, Phone, MapPin, Share2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-zinc-200 z-50">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-zinc-900">[LOGO]</div>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
            <li><a href="#sobre" className="hover:text-zinc-900 transition">Sobre</a></li>
            <li><a href="#servicos" className="hover:text-zinc-900 transition">Serviços</a></li>
            <li><a href="#depoimentos" className="hover:text-zinc-900 transition">Depoimentos</a></li>
            <li><a href="#contato" className="hover:text-zinc-900 transition">Contato</a></li>
          </ul>
          <a
            href="#contato"
            className="hidden md:block px-5 py-2 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition"
          >
            Fale Conosco
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Trocar pela URL de imagem do nicho do cliente */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Hero Background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 tracking-tight mb-6">
            Transforme Sua Visão<br />em Realidade
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 max-w-2xl mx-auto mb-10">
            Soluções personalizadas para levar [NOME DA EMPRESA] ao próximo nível
          </p>
          <a
            href="#contato"
            className="inline-block px-8 py-4 bg-zinc-900 text-white text-base font-semibold rounded-full hover:bg-zinc-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Começar Agora
          </a>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 px-6 scroll-animate">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">Sobre Nós</h2>
            <div className="w-16 h-1 bg-zinc-900 mx-auto"></div>
          </div>
          <p className="text-lg text-zinc-600 leading-relaxed text-center">
            Somos uma equipe dedicada a oferecer serviços de excelência. Com anos de experiência no mercado,
            a [NOME DA EMPRESA] se destaca pela qualidade, profissionalismo e compromisso com resultados.
            Nossa missão é transformar desafios em oportunidades e entregar soluções que superam expectativas.
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 px-6 bg-zinc-50 scroll-animate">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">Nossos Serviços</h2>
            <div className="w-16 h-1 bg-zinc-900 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Serviço 1 */}
            <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">[SERVIÇO 1]</h3>
              <p className="text-zinc-600 leading-relaxed">
                Descrição completa do primeiro serviço oferecido pela empresa.
                Destaque benefícios e diferenciais.
              </p>
            </div>

            {/* Serviço 2 */}
            <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">[SERVIÇO 2]</h3>
              <p className="text-zinc-600 leading-relaxed">
                Descrição completa do segundo serviço oferecido pela empresa.
                Destaque benefícios e diferenciais.
              </p>
            </div>

            {/* Serviço 3 */}
            <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <div className="w-6 h-6 bg-white" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}></div>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">[SERVIÇO 3]</h3>
              <p className="text-zinc-600 leading-relaxed">
                Descrição completa do terceiro serviço oferecido pela empresa.
                Destaque benefícios e diferenciais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-24 px-6 scroll-animate">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">O Que Dizem</h2>
            <div className="w-16 h-1 bg-zinc-900 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Depoimento 1 */}
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 shadow-md hover:shadow-lg transition-all duration-300">
              <p className="text-lg text-zinc-700 italic mb-6 leading-relaxed">
                "Excelente atendimento! A [NOME DA EMPRESA] superou todas as minhas expectativas.
                Profissionais dedicados e resultados incríveis. Recomendo muito!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-300 rounded-full shadow-sm"></div>
                <div>
                  <p className="font-semibold text-zinc-900">[Nome do Cliente]</p>
                  <p className="text-sm text-zinc-600">[Cargo/Empresa]</p>
                </div>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 shadow-md hover:shadow-lg transition-all duration-300">
              <p className="text-lg text-zinc-700 italic mb-6 leading-relaxed">
                "Trabalhar com a [NOME DA EMPRESA] foi transformador para o nosso negócio.
                Qualidade, prazo e atenção aos detalhes são o diferencial dessa equipe."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-300 rounded-full shadow-sm"></div>
                <div>
                  <p className="font-semibold text-zinc-900">[Nome do Cliente]</p>
                  <p className="text-sm text-zinc-600">[Cargo/Empresa]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24 px-6 bg-zinc-50 scroll-animate">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">Entre em Contato</h2>
            <div className="w-16 h-1 bg-zinc-900 mx-auto"></div>
          </div>

          {/* WhatsApp Button */}
          <div className="text-center mb-12">
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20mais%20informações."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-full hover:bg-green-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>

          {/* Formulário */}
          <form className="bg-white p-8 md:p-12 rounded-2xl border border-zinc-100 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">Nome</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">E-mail</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-zinc-700 mb-2">Telefone</label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition"
                placeholder="(11) 99999-9999"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-zinc-700 mb-2">Mensagem</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition resize-none"
                placeholder="Como podemos ajudar você?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-zinc-900 text-white font-semibold rounded-lg hover:bg-zinc-800 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Coluna 1 */}
            <div>
              <h3 className="text-xl font-bold mb-4">[NOME DA EMPRESA]</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Soluções de qualidade para o seu negócio crescer e se destacar no mercado.
              </p>
            </div>

            {/* Coluna 2 */}
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (11) 99999-9999
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  contato@empresa.com.br
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Rua Exemplo, 123 - São Paulo/SP
                </li>
              </ul>
            </div>

            {/* Coluna 3 */}
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition">
                  <Share2 className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition">
                  <Share2 className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition">
                  <Share2 className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-800 text-center text-sm text-zinc-400">
            <p>&copy; 2026 [NOME DA EMPRESA]. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
