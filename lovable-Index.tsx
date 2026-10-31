import React, { useState, useEffect } from "react";
import {
  Scale,
  ShieldCheck,
  ChevronRight,
  MessageCircle,
  Phone,
  Award,
  Building,
  CheckCircle2,
  X,
  Clock,
  HeartHandshake,
  FileCheck,
  Briefcase
} from "lucide-react";

export default function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOrigin, setModalOrigin] = useState("Botão de Contato");
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    assunto: "Rescisão Indireta"
  });

  // Gatilho: Abrir modal SOMENTE ao rolar até o final absoluto da página
  useEffect(() => {
    let triggered = false;
    const handleScroll = () => {
      if (triggered) return;
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.scrollHeight - 60;
      if (scrollPosition >= threshold && window.scrollY > 500) {
        triggered = true;
        setHasScrolledToBottom(true);
        setModalOrigin("Fim da Página");
        setModalOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = (origem: string) => {
    setModalOrigin(origem);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mensagem = encodeURIComponent(
      `Olá, meu nome é ${formData.nome}. Gostaria de atendimento com a equipe Alcântara & Diamantino sobre: ${formData.assunto}. Meu WhatsApp para contato: ${formData.whatsapp}. (Origem: ${modalOrigin})`
    );
    window.open(`https://wa.me/5531999093485?text=${mensagem}`, "_blank");
    closeModal();
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0] font-sans antialiased selection:bg-[#C6A15B] selection:text-black">
      {/* Top Bar / Conformidade OAB */}
      <div className="bg-[#111111] border-b border-[#222222] text-xs py-2 px-4 text-center text-[#888888]">
        Atendimento Jurídico Especializado &bull; OAB/MG &bull; Belo Horizonte e Todo o Brasil
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#222222]/80 px-6 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-serif text-lg tracking-wider text-[#C6A15B] font-semibold">
            ALCÂNTARA & DIAMANTINO
          </span>
          <span className="text-[10px] tracking-[0.2em] text-[#888888] uppercase">
            Advocacia Trabalhista Especializada
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm text-[#CCCCCC]">
          <a href="#equipe" className="hover:text-[#C6A15B] transition-colors">Nossa Equipe</a>
          <a href="#temas" className="hover:text-[#C6A15B] transition-colors">Temas</a>
          <a href="#etapas" className="hover:text-[#C6A15B] transition-colors">Como Funciona</a>
          <a href="#empresas" className="hover:text-[#C6A15B] transition-colors">Empresas</a>
        </div>

        <button
          onClick={() => openModal("Menu Superior")}
          className="bg-gradient-to-r from-[#C6A15B] to-[#997734] text-black font-semibold text-xs md:text-sm px-4 py-2.5 rounded-full hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(198,161,91,0.2)]"
        >
          <Phone className="w-4 h-4" />
          Falar com a Equipe
        </button>
      </nav>

      {/* Hero Section com Fundo Arquitetônico de Mármore e Ouro */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        {/* Fundo Cenográfico */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div
            className="absolute inset-0 bg-cover bg-right md:bg-center opacity-35 brightness-90 contrast-125"
            style={{
              backgroundImage: `url('assets/hero-bg-luxo.jpg')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181818]/90 backdrop-blur-md border border-[#C6A15B]/30 text-[#C6A15B] text-xs font-medium mb-6">
            <Scale className="w-3.5 h-3.5" />
            Direito do Trabalho Estratégico &bull; Defesa Ética &bull; OAB/MG
          </div>

        <h1 className="font-serif text-4xl md:text-6xl text-white font-normal leading-tight tracking-tight max-w-4xl mx-auto">
          Seus direitos merecem atenção. <br />
          <span className="italic text-[#C6A15B] font-serif">Sua história merece ser ouvida.</span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-[#A0A0A0] max-w-2xl mx-auto font-light leading-relaxed">
          Atuação jurídica estratégica, individualizada e humana em Direito do Trabalho, com foco na dignidade das suas relações profissionais e na reparação de direitos.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openModal("Hero CTA Principal")}
            className="w-full sm:w-auto bg-gradient-to-r from-[#C6A15B] to-[#997734] text-black font-bold text-sm px-8 py-3.5 rounded-full hover:brightness-110 transition-all shadow-[0_0_25px_rgba(198,161,91,0.3)] flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Análise Individualizada via WhatsApp
          </button>
          <a
            href="#temas"
            className="w-full sm:w-auto bg-[#141414] border border-[#333333] hover:border-[#C6A15B]/50 text-white text-sm px-6 py-3.5 rounded-full transition-all flex items-center justify-center gap-2"
          >
            Conhecer Temas Trabalhistas
            <ChevronRight className="w-4 h-4 text-[#C6A15B]" />
          </a>
        </div>
        </div>
      </section>

      {/* Equipe / Advogados */}
      <section id="equipe" className="py-20 px-6 max-w-6xl mx-auto border-t border-[#1C1C1C]">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-medium">Corpo Jurídico</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mt-2">Nossa Equipe de Sócios</h2>
          <p className="text-sm text-[#888888] mt-2">Atendimento técnico, combativo e com rigor ético na defesa de trabalhadores e empresas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dra. Carolina Alcântara */}
          <div className="bg-[#121212] border border-[#222222] rounded-2xl p-6 text-center hover:border-[#C6A15B]/40 transition-all">
            <div className="w-24 h-24 mx-auto rounded-full bg-[#1F1F1F] border-2 border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B] mb-4">
              <Award className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-xl text-white font-medium">Dra. Carolina Alcântara</h3>
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#181818] text-[#C6A15B] text-xs font-mono mt-1 border border-[#C6A15B]/20">
              OAB/MG 230.183
            </span>
            <p className="text-xs text-[#888888] font-medium mt-2">Sócia &bull; Fundadora da Comunidade Minerva</p>
            <p className="text-xs text-[#AAAAAA] mt-3 leading-relaxed">
              Especialista em Direito do Trabalho, defesa dos direitos fundamentais do empregado e combate a abusos contratuais.
            </p>
          </div>

          {/* Dr. Pedro Alcântara (Destaque Central) */}
          <div className="bg-gradient-to-b from-[#181612] to-[#121212] border-2 border-[#C6A15B] rounded-2xl p-6 text-center shadow-[0_0_30px_rgba(198,161,91,0.15)] relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C6A15B] text-black font-bold text-[10px] uppercase tracking-wider px-3 py-0.5 rounded-full">
              Sócio Fundador
            </div>
            <div className="w-24 h-24 mx-auto rounded-full bg-[#241F14] border-2 border-[#C6A15B] flex items-center justify-center text-[#C6A15B] mb-4 mt-2">
              <Scale className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-xl text-[#E6CA85] font-semibold">Dr. Pedro Alcântara</h3>
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#201B12] text-[#C6A15B] text-xs font-mono mt-1 border border-[#C6A15B]/40">
              OAB/MG 134.372
            </span>
            <p className="text-xs text-[#C6A15B] font-medium mt-2">Sócio Fundador &bull; Mestre em Direito</p>
            <p className="text-xs text-[#CCCCCC] mt-3 leading-relaxed">
              Mais de uma década de atuação estratégica nos Tribunais do Trabalho, com foco em causas complexas e jurisprudência avançada.
            </p>
          </div>

          {/* Dra. Carolina Diamantino */}
          <div className="bg-[#121212] border border-[#222222] rounded-2xl p-6 text-center hover:border-[#C6A15B]/40 transition-all">
            <div className="w-24 h-24 mx-auto rounded-full bg-[#1F1F1F] border-2 border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B] mb-4">
              <Briefcase className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-xl text-white font-medium">Dra. Carolina Diamantino</h3>
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#181818] text-[#C6A15B] text-xs font-mono mt-1 border border-[#C6A15B]/20">
              OAB/MG 193.828
            </span>
            <p className="text-xs text-[#888888] font-medium mt-2">Sócia &bull; Especialista Corporativa</p>
            <p className="text-xs text-[#AAAAAA] mt-3 leading-relaxed">
              Foco em relações corporativas, auditoria preventiva, rescisões de alta relevância e negociações coletivas.
            </p>
          </div>
        </div>
      </section>

      {/* Temas Trabalhistas */}
      <section id="temas" className="py-20 px-6 max-w-6xl mx-auto border-t border-[#1C1C1C]">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-medium">Áreas de Atuação</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mt-2">Temas Trabalhistas Estratégicos</h2>
          <p className="text-sm text-[#888888] mt-2">Análise precisa de cada situação profissional.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              titulo: "Rescisão Indireta",
              desc: "Quando a empresa comete falta grave (não recolhimento de FGTS, atraso salarial reiterado ou descumprimento de obrigações contratuais)."
            },
            {
              titulo: "Horas Extras & Sobrecarga",
              desc: "Jornadas não remuneradas, intervalos suprimidos, sobreaviso não pago e cargos de confiança fictícios sem autonomia real."
            },
            {
              titulo: "Assédio Moral & Burnout",
              desc: "Cobranças abusivas, humilhações sistemáticas no ambiente de trabalho e adoecimento ocupacional com nexo de causalidade."
            },
            {
              titulo: "Verbas Rescisórias Incompletas",
              desc: "Avisos prévios calculados incorretamente, não pagamento no prazo legal (art. 477 da CLT) e descontos indevidos."
            },
            {
              titulo: "Reversão de Justa Causa",
              desc: "Quando o empregador aplica a penalidade máxima de forma desproporcional, injusta ou sem comprovação robusta."
            },
            {
              titulo: "Equiparação Salarial",
              desc: "Exerceu a mesma função com igual produtividade e perfeição técnica, mas recebia salário inferior ao colega de trabalho."
            }
          ].map((tema, i) => (
            <div
              key={i}
              className="bg-[#121212] border border-[#222222] p-6 rounded-xl hover:border-[#C6A15B]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="font-serif text-lg text-white font-medium mb-2">{tema.titulo}</h3>
                <p className="text-xs text-[#888888] leading-relaxed">{tema.desc}</p>
              </div>
              <button
                onClick={() => openModal(`Tema: ${tema.titulo}`)}
                className="mt-4 text-xs text-[#C6A15B] flex items-center gap-1 hover:underline self-start font-medium"
              >
                Analisar minha situação <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Como Funciona */}
      <section id="etapas" className="py-20 px-6 max-w-5xl mx-auto border-t border-[#1C1C1C]">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-medium">Metodologia</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mt-2">Como Funciona a Análise do Seu Caso</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { passo: "01", titulo: "Contato Inicial", desc: "Você nos envia uma mensagem confidencial via WhatsApp relatando sua situação." },
            { passo: "02", titulo: "Análise Documental", desc: "Examinamos contracheques, TRCT, espelhos de ponto e comunicações corporativas." },
            { passo: "03", titulo: "Diagnóstico Jurídico", desc: "Apresentamos com clareza os direitos existentes e as possibilidades viáveis." },
            { passo: "04", titulo: "Condução Estratégica", desc: "Atuação transparente na via consensual ou perante a Justiça do Trabalho." }
          ].map((item, i) => (
            <div key={i} className="bg-[#121212] border border-[#222222] p-5 rounded-xl">
              <span className="text-2xl font-serif text-[#C6A15B] font-bold">{item.passo}</span>
              <h3 className="text-sm font-semibold text-white mt-2 mb-1">{item.titulo}</h3>
              <p className="text-xs text-[#888888] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Soluções para Empresas */}
      <section id="empresas" className="py-16 px-6 max-w-5xl mx-auto border-t border-[#1C1C1C]">
        <div className="bg-[#141414] border border-[#2A2A2A] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1C1C] text-[#C6A15B] text-xs mb-3">
              <Building className="w-3.5 h-3.5" />
              Direito Trabalhista Empresarial
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-white font-medium">
              Consultoria Preventiva e Compliance para Empresas
            </h2>
            <p className="text-xs md:text-sm text-[#888888] mt-2 max-w-xl leading-relaxed">
              Auditoria de riscos trabalhistas, adequação de contratos e defesa corporativa estratégica para mitigar passivos antes que eles virem processos.
            </p>
          </div>
          <button
            onClick={() => openModal("Empresas - Consultoria")}
            className="whitespace-nowrap bg-transparent border border-[#C6A15B] text-[#C6A15B] hover:bg-[#C6A15B] hover:text-black font-semibold text-xs md:text-sm px-6 py-3 rounded-full transition-all"
          >
            Falar sobre Minha Empresa
          </button>
        </div>
      </section>

      {/* Rodapé OAB */}
      <footer className="py-12 px-6 border-t border-[#1C1C1C] text-center text-xs text-[#666666] bg-[#080808]">
        <p className="text-[#888888] font-medium mb-2">
          Alcântara &amp; Diamantino Advocacia Trabalhista &bull; OAB/MG 134.372 &bull; OAB/MG 230.183 &bull; OAB/MG 193.828
        </p>
        <p className="max-w-2xl mx-auto text-[11px] leading-relaxed text-[#555555]">
          Aviso Legal: As informações contidas nesta página possuem caráter exclusivamente informativo e educativo, em estrita conformidade com o Provimento nº 205/2021 da OAB. Não constituem consulta jurídica formal nem promessa de resultado de qualquer espécie.
        </p>
        <p className="mt-4 text-[10px] text-[#444444]">
          &copy; {new Date().getFullYear()} Alcântara & Diamantino Advocacia. Todos os direitos reservados.
        </p>
      </footer>

      {/* Botão Flutuante do WhatsApp */}
      <a
        href="https://wa.me/5531999093485?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20equipe%20Alc%C3%A2ntara%20%26%20Diamantino%20Advocacia."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-3.5 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-105 transition-transform flex items-center gap-2 group"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        <span className="hidden md:inline-block text-xs font-bold pr-1">Falar no WhatsApp</span>
      </a>

      {/* Modal / Pop-up de Lead (Gatilho: Somente ao rolar até o fim ou clicar) */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#141414] border border-[#C6A15B]/50 rounded-2xl max-w-md w-full p-6 relative shadow-[0_0_50px_rgba(198,161,91,0.2)]">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-[#888888] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <span className="text-[10px] font-mono tracking-widest text-[#C6A15B] uppercase">Atendimento Confidencial</span>
              <h3 className="font-serif text-2xl text-white font-medium mt-1">Falar com a Equipe</h3>
              <p className="text-xs text-[#888888] mt-1">Preencha para direcionarmos sua situação diretamente aos advogados.</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-[#AAAAAA] mb-1 font-medium">Nome Completo</label>
                <input
                  type="text"
                  name="nome"
                  required
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full bg-[#1A1A1A] border border-[#333333] focus:border-[#C6A15B] rounded-lg px-3.5 py-2.5 text-sm text-white outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-[#AAAAAA] mb-1 font-medium">WhatsApp (com DDD)</label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  placeholder="(31) 99999-9999"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full bg-[#1A1A1A] border border-[#333333] focus:border-[#C6A15B] rounded-lg px-3.5 py-2.5 text-sm text-white outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-[#AAAAAA] mb-1 font-medium">Situação / Assunto</label>
                <select
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleInputChange}
                  className="w-full bg-[#1A1A1A] border border-[#333333] focus:border-[#C6A15B] rounded-lg px-3.5 py-2.5 text-sm text-white outline-none transition-colors"
                >
                  <option value="Rescisão Indireta">Rescisão Indireta (Falta grave do empregador)</option>
                  <option value="Horas Extras">Horas Extras e Sobrecarga de Trabalho</option>
                  <option value="Assédio Moral / Burnout">Assédio Moral ou Burnout</option>
                  <option value="Verbas Rescisórias">Verbas Rescisórias Incompletas</option>
                  <option value="Reversão de Justa Causa">Reversão de Justa Causa</option>
                  <option value="Equiparação Salarial">Equiparação Salarial</option>
                  <option value="Empresas / Consultoria">Consultoria Trabalhista para Empresas</option>
                  <option value="Outro Assunto">Outro Assunto</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#C6A15B] to-[#997734] text-black font-bold text-sm py-3 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 mt-2 shadow-[0_0_20px_rgba(198,161,91,0.25)]"
              >
                <MessageCircle className="w-4 h-4" />
                Continuar no WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
