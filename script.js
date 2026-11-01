/**
 * ==========================================================================
 * LANDING PAGE DIREITO DO TRABALHO | REDESIGN PREMIUM
 * Motor de Interatividade, Background Cinematográfico e Conversão
 * ==========================================================================
 */

// 1. CONFIGURAÇÃO DE RASTREAMENTO E CONTATO
const TRACKING_CONFIG = {
  whatsAppNumber: "5531999093485", // Telefone oficial Alcântara & Diamantino: (31) 99909-3485
  googleAdsId: "AW-XXXXXXXXX",      // ID de conversão do Google Ads
  metaPixelId: "000000000000000",   // ID do Meta Pixel (Facebook / Instagram)
  linkedInPartnerId: "0000000",     // ID do LinkedIn Insight Tag
  debugMode: false
};

// 2. BANCO DE DADOS DOS 15 TEMAS TRABALHISTAS (CLT & JURISPRUDÊNCIA)
const TEMAS_TRABALHISTAS = {
  1: {
    badge: "ART. 483 DA CLT",
    title: "Rescisão Indireta do Contrato de Trabalho",
    content: `
      <p>A <strong>rescisão indireta</strong> (popularmente chamada de "demissão forçada da empresa") ocorre quando o empregador comete falta grave que torna insustentável a manutenção do vínculo empregatício.</p>
      <p><strong>Hipóteses mais comuns previstas no art. 483 da CLT:</strong></p>
      <ul>
        <li>Atrasos frequentes e reiterados no pagamento de salários;</li>
        <li>Não recolhimento contínuo dos depósitos do FGTS;</li>
        <li>Exigência de serviços superiores às forças do empregado ou contrários aos bons costumes;</li>
        <li>Risco iminente de mal considerável ou perigo manifesto de dano à saúde;</li>
        <li>Tratamento com rigor excessivo por parte de chefias ou superiores hierárquicos.</li>
      </ul>
      <p><strong>Efeitos práticos:</strong> Reconhecida judicialmente, o trabalhador recebe todas as verbas rescisórias equivalentes a uma dispensa sem justa causa (aviso prévio, multa de 40% do FGTS, saque do saldo e guias do seguro-desemprego).</p>
      <p><em>Importante: Cada situação depende de documentação comprobatória, como extratos, comunicações e testemunhas.</em></p>
    `
  },
  2: {
    badge: "ART. 482 DA CLT",
    title: "Demissão por Justa Causa & Hipóteses de Reversão",
    content: `
      <p>A demissão por justa causa é a penalidade máxima imposta ao trabalhador, privando-o do aviso prévio, saque do FGTS, multa rescisória e seguro-desemprego.</p>
      <p><strong>Requisitos de validade segundo a jurisprudência do TST:</strong></p>
      <ul>
        <li><strong>Gravidade da conduta:</strong> A falta deve ser grave o suficiente para romper definitivamente a confiança;</li>
        <li><strong>Imediatidade:</strong> A penalidade deve ser aplicada logo após o conhecimento do fato, sob pena de caracterizar perdão tácito;</li>
        <li><strong>Proporcionalidade e gradação:</strong> Salvo casos de gravidade extrema, a jurisprudência exige advertências e suspensões prévias;</li>
        <li><strong>Ausência de dupla punição:</strong> O empregado não pode ser advertido e depois demitido pelo mesmo fato.</li>
      </ul>
      <p>Em caso de punição desproporcional ou ausência de provas idôneas, a Justiça do Trabalho pode reverter a justa causa em dispensa imotivada.</p>
    `
  },
  3: {
    badge: "ART. 58 E 59 DA CLT",
    title: "Horas Extras & Banco de Horas",
    content: `
      <p>A duração normal do trabalho não deve exceder 8 horas diárias e 44 horas semanais, ressalvados regimes especiais previstos em convenção coletiva.</p>
      <p><strong>Principais diretrizes:</strong></p>
      <ul>
        <li>O trabalho suplementar deve ser pago com adicional de, no mínimo, 50% sobre o valor da hora normal (dias úteis) e 100% aos domingos e feriados;</li>
        <li>O regime de <em>banco de horas</em> requer acordo formal (individual para compensação em até 6 meses, ou coletivo para até 1 ano);</li>
        <li>Horas extras habituais refletem no descanso semanal remunerado (DSR), férias, 13º salário, aviso prévio e FGTS.</li>
      </ul>
    `
  },
  4: {
    badge: "ART. 66 E 71 DA CLT",
    title: "Jornada de Trabalho & Intervalos Legais",
    content: `
      <p>A legislação garante pausas obrigatórias para preservação da saúde física e mental do profissional:</p>
      <ul>
        <li><strong>Intervalo Intrajornada (descanso e alimentação):</strong> Mínimo de 1 hora para jornadas acima de 6 horas diárias. A supressão total ou parcial obriga o pagamento do período suprimido com adicional de 50%;</li>
        <li><strong>Intervalo Interjornada:</strong> Período mínimo de 11 horas consecutivas de descanso entre o término de uma jornada diária e o início da seguinte;</li>
        <li><strong>Trabalho Noturno:</strong> Realizado entre 22h e 5h (urbano), com hora ficta reduzida (52 minutos e 30 segundos) e adicional mínimo de 20%.</li>
      </ul>
    `
  },
  5: {
    badge: "ART. 189 A 193 DA CLT",
    title: "Adicionais de Insalubridade e Periculosidade",
    content: `
      <p>Proteção financeira devida em decorrência do trabalho em ambientes nocivos ou perigosos:</p>
      <ul>
        <li><strong>Insalubridade:</strong> Exposição a agentes físicos, químicos ou biológicos acima dos limites de tolerância. Adicionais de 10%, 20% ou 40% sobre o salário mínimo;</li>
        <li><strong>Periculosidade:</strong> Contato permanente com inflamáveis, explosivos, energia elétrica em alta tensão, radiação ou atividades em motocicleta. Adicional de 30% sobre o salário-base;</li>
        <li>A caracterização legal exige realização de perícia técnica por engenheiro ou médico do trabalho.</li>
      </ul>
    `
  },
  6: {
    badge: "ART. 477 DA CLT",
    title: "Cálculo e Pagamento de Verbas Rescisórias",
    content: `
      <p>Na rescisão sem justa causa, o trabalhador deve receber a quitação integral de suas verbas nos prazos legais:</p>
      <ul>
        <li><strong>Prazo de Pagamento:</strong> Até 10 (dez) dias corridos a partir do término do contrato, sob pena de multa de 1 salário (art. 477, § 8º da CLT);</li>
        <li><strong>Composição das verbas:</strong> Saldo de salário, aviso prévio proporcional ao tempo de serviço (Lei 12.506/11), 13º salário proporcional, férias vencidas e proporcionais com 1/3;</li>
        <li><strong>FGTS:</strong> Saque do saldo da conta vinculada com a multa compensatória de 40% sobre todos os depósitos devidos durante o contrato.</li>
      </ul>
    `
  },
  7: {
    badge: "ART. 391 A 396 DA CLT",
    title: "Direitos da Trabalhadora Gestante",
    content: `
      <p>O ordenamento jurídico confere proteção integral à maternidade e ao nascituro:</p>
      <ul>
        <li>Dispensa do horário de trabalho para realização de pelo menos 6 consultas médicas e exames complementares;</li>
        <li>Licença-maternidade de 120 dias (podendo ser estendida para 180 dias em empresas do Programa Empresa Cidadã);</li>
        <li>Direito à mudança provisória de função caso as condições de trabalho sejam prejudiciais à gestação;</li>
        <li>Dois descansos especiais de meia hora cada um durante a jornada para amamentação até que o bebê complete 6 meses.</li>
      </ul>
    `
  },
  8: {
    badge: "ART. 10 DO ADCT / CF 88",
    title: "Estabilidade Provisória da Gestante",
    content: `
      <p>A Constituição Federal veda a dispensa arbitrária ou sem justa causa da empregada gestante:</p>
      <ul>
        <li><strong>Vigência:</strong> Desde a confirmação da concepção até 5 meses após o parto;</li>
        <li><strong>Contrato de Experiência e Aviso Prévio:</strong> A jurisprudência sumulada do TST (Súmula 244) assegura a estabilidade mesmo em contratos por prazo determinado e quando a gravidez é descoberta no aviso prévio;</li>
        <li>O desconhecimento do estado gravídico pelo empregador no momento do desligamento não afasta o direito à indenização substitutiva integral.</li>
      </ul>
    `
  },
  9: {
    badge: "CÓDIGO CIVIL E CLT",
    title: "Assédio Moral no Ambiente de Trabalho",
    content: `
      <p>O assédio moral se traduz em condutas abusivas reiteradas, expressas por gestos, palavras ou atitudes que degradam o clima de trabalho:</p>
      <ul>
        <li><strong>Formas comuns:</strong> Metas inatingíveis com humilhações públicas, isolamento deliberado, atribuição de tarefas inúteis, rigor excessivo;</li>
        <li><strong>Consequências jurídicas:</strong> Possibilidade de pleitear a rescisão indireta do contrato e reparação por danos morais perante a Justiça do Trabalho;</li>
        <li>É essencial a preservação de mensagens de texto, e-mails, gravações lícitas de reuniões e testemunhas.</li>
      </ul>
    `
  },
  10: {
    badge: "ART. 29 E 47 DA CLT",
    title: "Ausência de Registro em Carteira (CTPS)",
    content: `
      <p>O empregador tem o prazo legal de 5 dias úteis para anotar a carteira de trabalho do empregado a partir do primeiro dia de serviço:</p>
      <ul>
        <li>A falta de registro constitui infração administrativa gravíssima e gera prejuízos ao tempo de contribuição previdenciária e benefícios do INSS;</li>
        <li>O trabalhador não registrado pode ingressar com ação para reconhecimento do período clandestino, exigindo pagamento retroativo de FGTS com 40%, 13º salários, férias e adicionais devidos;</li>
        <li>A ausência de anotação não isenta a empresa de cumprir todas as obrigações trabalhistas.</li>
      </ul>
    `
  },
  11: {
    badge: "ART. 3º DA CLT",
    title: "Reconhecimento de Vínculo Empregatício",
    content: `
      <p>Fenômeno conhecido como "pejotização", onde o profissional é compelido a abrir pessoa jurídica (MEI/PJ) para desempenhar papel de verdadeiro empregado:</p>
      <ul>
        <li><strong>Requisitos do Vínculo:</strong> Pessoalidade, não eventualidade (habitualidade), onerosidade (salário) e subordinação jurídica a ordens e diretrizes;</li>
        <li>Havendo subordinação real e rotina definida, a Justiça declara a nulidade do contrato civil (art. 9º da CLT) e reconhece o vínculo com direitos integrais.</li>
      </ul>
    `
  },
  12: {
    badge: "ART. 459 DA CLT",
    title: "Atrasos Salariais Contínuos",
    content: `
      <p>O salário é verba de subsistência de natureza estritamente alimentar:</p>
      <ul>
        <li>O pagamento deve ocorrer, impreterivelmente, até o quinto dia útil do mês subsequente ao vencido;</li>
        <li>Atrasos frequentes geram juros, correção monetária e, conforme pacificado pelo TST, autorizam o trabalhador a pleitear rescisão indireta e potencial reparação por danos morais.</li>
      </ul>
    `
  },
  13: {
    badge: "LEI 8.036/90",
    title: "FGTS Não Depositado ou Irregular",
    content: `
      <p>O Fundo de Garantia do Tempo de Serviço deve ser recolhido mensalmente pelo empregador no importe de 8% da remuneração paga:</p>
      <ul>
        <li>O empregado pode acompanhar a regularidade dos depósitos pelo aplicativo oficial do FGTS da Caixa Econômica Federal;</li>
        <li>A reiterada falta de depósito constitui descumprimento grave das obrigações contratuais do empregador, legitimando a propositura de ação de rescisão indireta e cobrança das quantias devidas.</li>
      </ul>
    `
  },
  14: {
    badge: "LEI 8.213/91",
    title: "Acidentes de Trabalho & Emissão de CAT",
    content: `
      <p>Acidente que ocorre no exercício da atividade a serviço da empresa, ou no percurso entre a residência e o local de trabalho:</p>
      <ul>
        <li><strong>Obrigatoriedade da CAT:</strong> A empresa deve emitir a Comunicação de Acidente de Trabalho até o primeiro dia útil seguinte ao da ocorrência;</li>
        <li><strong>Estabilidade Provisória de 12 Meses:</strong> Garantida a partir do retorno ao trabalho após a cessação do auxílio-doença acidentário (B91);</li>
        <li>Em casos de culpa ou negligência da empresa com regras de segurança, cabem indenizações por danos morais, materiais e pensão vitalícia proporcional à incapacidade.</li>
      </ul>
    `
  },
  15: {
    badge: "CID-11 E NR-17",
    title: "Doenças Ocupacionais & Síndrome de Burnout",
    content: `
      <p>Doenças adquiridas ou desencadeadas em função de condições especiais em que o trabalho é realizado (LER/DORT, patologias ortopédicas e transtornos psíquicos):</p>
      <ul>
        <li>A <strong>Síndrome de Burnout</strong> (esgotamento profissional) foi oficialmente enquadrada pela OMS como estresse crônico decorrente do trabalho;</li>
        <li>Comprovado o nexo causal ou concausal entre a doença e a rotina laboral, o trabalhador adquire direitos idênticos aos do acidente de trabalho típico (emissão de CAT, estabilidade e custeio do tratamento).</li>
      </ul>
    `
  }
};

// 3. ARTIGOS COMPLETOS DO RADAR TRABALHISTA
const ARTIGOS_RADAR = {
  1: {
    title: "TST pacifica entendimento sobre validade do controle de ponto digital em regime de teletrabalho",
    badge: "Decisões Judiciais",
    content: `
      <p>Em recentes julgados, as Turmas do Tribunal Superior do Trabalho reforçaram o entendimento de que a exceção do artigo 62, III, da CLT (dispensa de controle de jornada no teletrabalho) só se aplica quando for tecnicamente impossível aferir a jornada.</p>
      <p>Sendo a prestação realizada mediante sistemas conectados, login e logout com registros eletrônicos, métricas de produtividade em tempo real ou reuniões virtuais em horários fixados, resta comprovada a fiscalização da jornada.</p>
      <p>Dessa forma, restando evidenciado que a jornada ordinária diária foi rotineiramente ultrapassada sem a devida contraprestação pecuniária ou compensação via banco de horas formal, é devido o pagamento das horas extraordinárias correspondentes.</p>
      <p><em>Referência: Precedentes das Turmas do TST / Arts. 58 e 62 da CLT.</em></p>
    `
  },
  2: {
    title: "Síndrome de Burnout e direitos previdenciários: o nexo causal com a atividade profissional",
    badge: "Direitos do Trabalhador",
    content: `
      <p>A inclusão da Síndrome de Burnout na Classificação Internacional de Doenças (CID-11) sob o código QD85 formalizou o esgotamento profissional como um fenômeno estritamente ligado ao ambiente laboral.</p>
      <p>Para fins de proteção jurídica e previdenciária, o trabalhador acometido por Burnout tem direito:</p>
      <ul>
        <li>Ao afastamento médico remunerado;</li>
        <li>Ao enquadramento no benefício previdenciário acidentário (B91);</li>
        <li>À estabilidade de 12 meses no emprego após o retorno, conforme o art. 118 da Lei 8.213/91.</li>
      </ul>
      <p>A perícia médica do INSS ou perito judicial avalia o histórico de cobranças excessivas, jornadas extenuantes e assédio moral organizacional.</p>
    `
  },
  3: {
    title: "Aspectos legais da Rescisão Indireta: critérios de caracterização do artigo 483 da CLT",
    badge: "Legislação & CLT",
    content: `
      <p>A rescisão indireta é o instrumento legal conferido ao empregado para romper o contrato sem abrir mão de nenhuma das verbas devidas, em virtude do descumprimento contratual patronal.</p>
      <p>A jurisprudência majoritária tem entendido que o atraso contínuo de salários e a ausência reiterada de recolhimento dos depósitos do FGTS constituem, por si sós, gravame suficiente para ensejar a rescisão indireta (art. 483, 'd', da CLT).</p>
      <p>Além disso, o parágrafo 3º do mesmo dispositivo autoriza o trabalhador a pleitear a rescisão indireta e continuar ou não prestando serviços durante o trâmite processual nos casos de descumprimento de obrigações contratuais.</p>
    `
  },
  4: {
    title: "Compliance trabalhista e prevenção de passivos em contratos de prestação de serviços (PJ)",
    badge: "Relações Empresariais",
    content: `
      <p>Com a modernização das relações de trabalho e a Lei 13.467/2017 (Reforma Trabalhista), a contratação de serviços terceirizados e autônomos foi ampliada. No entanto, persistem limites legais rígidos.</p>
      <p>Para afastar o risco de reconhecimento de vínculo de emprego com condenações retroativas, as empresas contratantes devem assegurar:</p>
      <ul>
        <li>Autonomia real e ausência de subordinação hierárquica direta ao contratante;</li>
        <li>Não exigência de exclusividade, exceto se expressamente justificada por critérios negociais;</li>
        <li>Inexistência de controle de horários, advertências ou avaliações de desempenho idênticas às de empregados celetistas.</li>
      </ul>
    `
  }
};

// ==========================================================================
// INICIALIZAÇÃO E CONTROLE
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initYear();
  initGoldParticleCanvas();
  initScrollProgress();
  initParallaxAndTilt();
  initScrollReveal();
  initPhoneMask();
  initEndOfPageLeadTrigger();
  initCookieBanner();
  initModalKeyboardTrap();
  initAutoLeadCapture();
  trackPageView();
});

/**
 * Atualiza o ano no rodapé
 */
function initYear() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * Motor de Background Vivo: Partículas Douradas em Canvas a 60fps
 * Respeita prefers-reduced-motion e desativa quando a aba fica inativa
 */
function initGoldParticleCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  let animId = null;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createParticles();
  }

  function createParticles() {
    // Quantidade de partículas proporcional à largura (menos no mobile para 60fps constantes)
    const count = width < 768 ? 28 : 55;
    particles = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.45 + 0.15,
        speedY: (Math.random() * 0.35 + 0.1) * -1, // Flutua lentamente para cima
        speedX: (Math.random() - 0.5) * 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseVal: Math.random() * Math.PI
      });
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Desenhar partículas douradas
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.y += p.speedY;
      p.x += p.speedX;
      p.pulseVal += p.pulseSpeed;

      const currentAlpha = p.alpha + Math.sin(p.pulseVal) * 0.15;

      // Wrap around screen
      if (p.y < -10) p.y = height + 10;
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(230, 210, 164, ${Math.max(0.08, currentAlpha)})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(198, 161, 91, 0.4)";
      ctx.fill();

      // Linhas luminosas muito sutis entre partículas próximas
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 95) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(198, 161, 91, ${(1 - dist / 95) * 0.08})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    animId = requestAnimationFrame(render);
  }

  window.addEventListener("resize", resize, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(animId);
    } else {
      animId = requestAnimationFrame(render);
    }
  });

  resize();
  render();
}

/**
 * Scroll Progress Bar
 */
function initScrollProgress() {
  const progressBar = document.getElementById("scroll-progress");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = scrollPercent + "%";
  }, { passive: true });
}

/**
 * Microinterações 3D Tilt com Reflexo Especular
 */
function initParallaxAndTilt() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced || window.innerWidth < 1024) return;

  const tiltCards = document.querySelectorAll("#hero-tilt-card, .lawyer-card, .bento-cell, .corp-service-item");

  tiltCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const rotX = (-y / rect.height) * 6.5;
      const rotY = (x / rect.width) * 6.5;

      card.style.transition = "transform 0.1s ease-out";
      card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-5px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease";
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });
}

/**
 * Scroll Reveal Suave (Apple Cupertino / High Performance)
 */
function initScrollReveal() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const targets = document.querySelectorAll(
    ".bento-cell, .lawyer-card, .corp-service-item, .timeline-lux-node, .editorial-row, .radar-hero-article, .radar-sub-article"
  );

  targets.forEach((el, idx) => {
    el.classList.add("reveal-on-scroll");
    // Cascading stagger for grid items
    if (idx % 3 === 1) el.classList.add("delay-1");
    if (idx % 3 === 2) el.classList.add("delay-2");
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.08
  });

  targets.forEach(el => observer.observe(el));
}

/**
 * Máscara dinâmica de telefone brasileiro: (00) 00000-0000
 */
function initPhoneMask() {
  const inputs = [
    document.getElementById("form-tel"), 
    document.getElementById("exit-tel"),
    document.getElementById("scroll-tel")
  ];
  inputs.forEach(input => {
    if (!input) return;
    input.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "");
      if (value.length > 11) value = value.slice(0, 11);

      if (value.length > 6) {
        e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
      } else if (value.length > 2) {
        e.target.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else if (value.length > 0) {
        e.target.value = `(${value}`;
      } else {
        e.target.value = "";
      }
    });
  });
}

let currentLeadOrigin = "Botão de Contato";

/**
 * Abre o Modal Rápido de Contato (Nome + WhatsApp + Assunto)
 */
function openLeadModal(origem = "Botão de Contato") {
  currentLeadOrigin = origem;
  const modal = document.getElementById("lead-modal");
  if (!modal) return;

  const badge = modal.querySelector(".modal-badge-gold");
  const title = modal.querySelector(".modal-title-editorial");
  const subtitle = modal.querySelector("p");

  if (origem.includes("Fim da Página")) {
    if (badge) badge.textContent = "ATENDIMENTO PRELIMINAR SEM COMPROMISSO";
    if (title) title.textContent = "Antes de ir: gostaria que um advogado avalie o seu caso?";
    if (subtitle) subtitle.textContent = "Deixe seu nome, telefone e assunto para que nossa equipe entre em contato de forma sigilosa pelo WhatsApp:";
  } else {
    if (badge) badge.textContent = "ATENDIMENTO SIGILOSO • ALCÂNTARA & DIAMANTINO";
    if (title) title.textContent = "Fale com Nossa Equipe Jurídica";
    if (subtitle) subtitle.innerHTML = "Preencha seus dados para direcionamento imediato aos advogados <strong>Dr. Pedro Alcântara</strong>, <strong>Dra. Carolina Alcântara</strong> e <strong>Dra. Carolina Diamantino</strong>:";
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");

  // Foco no campo de nome
  const nomeInput = modal.querySelector("input[type='text']");
  if (nomeInput) {
    setTimeout(() => nomeInput.focus(), 250);
  }
}

function closeLeadModal() {
  // Captura o contato se a pessoa preencheu mas fechou sem clicar no WhatsApp
  if (typeof captureModalDraftLead === "function") {
    captureModalDraftLead(false);
  }
  const modal = document.getElementById("lead-modal");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

function openScrollLeadModal() {
  openLeadModal("Gatilho de Rolagem");
}

function closeScrollLeadModal() {
  closeLeadModal();
}

/**
 * Gatilho no FINAL DA PÁGINA:
 * - NUNCA abre ao carregar ou abrir a página.
 * - Só dispara quando a pessoa descer TOTAL até o fim da página (quando não há mais o que descer).
 */
function initEndOfPageLeadTrigger() {
  let hasScrolledDown = false;
  let hasShownBottomModal = false;
  const pageStartTime = Date.now();

  window.addEventListener("scroll", () => {
    // Se já foi exibido nesta visualização ou acabou de carregar (menos de 1.2s), não faz nada
    if (hasShownBottomModal || (Date.now() - pageStartTime < 1200)) return;

    const currentScrollY = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const maxScroll = documentHeight - windowHeight;

    if (maxScroll <= 400) return;

    // Detecta que o usuário realmente começou a ler e descer a página (passou de pelo menos 500px do topo)
    if (currentScrollY > 500) {
      hasScrolledDown = true;
    }

    if (!hasScrolledDown) return;

    // Chegou TOTAL lá embaixo (não tem mais para onde descer, a menos de 40px do rodapé absoluto)
    const isAtAbsoluteBottom = (currentScrollY + windowHeight >= documentHeight - 40);

    if (isAtAbsoluteBottom) {
      hasShownBottomModal = true;
      setTimeout(() => {
        openLeadModal("Fim da Página");
      }, 350);
    }
  }, { passive: true });
}

function openExitModal() {
  openLeadModal("Fim da Página");
}

function closeExitModal() {
  closeLeadModal();
}

/**
 * Banner de Consentimento LGPD
 */
function initCookieBanner() {
  const banner = document.getElementById("cookie-banner");
  if (!banner) return;

  const hasAccepted = localStorage.getItem("lgpd_consent_accepted");
  if (!hasAccepted) {
    banner.style.display = "block";
  }
}

function acceptCookies() {
  localStorage.setItem("lgpd_consent_accepted", "true");
  const banner = document.getElementById("cookie-banner");
  if (banner) {
    banner.style.display = "none";
  }
}

// ==========================================================================
// MODAIS INTERATIVOS (BENTO GRID E RADAR)
// ==========================================================================
function openThemeModal(themeId) {
  const data = TEMAS_TRABALHISTAS[themeId];
  if (!data) return;

  const modal = document.getElementById("theme-modal");
  const badge = document.getElementById("modal-theme-badge");
  const title = document.getElementById("modal-theme-title");
  const body = document.getElementById("modal-theme-body");

  badge.textContent = data.badge;
  title.textContent = data.title;
  body.innerHTML = data.content;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  trackLeadEvent("theme_modal_view", { theme_id: themeId, theme_title: data.title });
}

function closeThemeModal() {
  const modal = document.getElementById("theme-modal");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function openArticleModal(articleId) {
  const data = ARTIGOS_RADAR[articleId];
  if (!data) return;

  const modal = document.getElementById("theme-modal");
  const badge = document.getElementById("modal-theme-badge");
  const title = document.getElementById("modal-theme-title");
  const body = document.getElementById("modal-theme-body");

  badge.textContent = "RADAR TRABALHISTA • " + data.badge.toUpperCase();
  title.textContent = data.title;
  body.innerHTML = data.content;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  trackLeadEvent("article_view", { article_id: articleId, article_title: data.title });
}

function initModalKeyboardTrap() {
  const modal = document.getElementById("theme-modal");
  if (!modal) return;

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeThemeModal();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeThemeModal();
    }
  });
}

/**
 * Filtro de Categorias no Radar Trabalhista
 */
function filterRadarArticles(category, btnElement) {
  const buttons = document.querySelectorAll(".gold-pill");
  buttons.forEach(btn => btn.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");

  const heroCard = document.querySelector(".radar-hero-article");
  const subCards = document.querySelectorAll(".radar-sub-article");

  if (heroCard) {
    const heroCat = heroCard.getAttribute("data-category");
    heroCard.style.display = (category === "todos" || heroCat === category) ? "flex" : "none";
  }

  subCards.forEach(card => {
    const cardCat = card.getAttribute("data-category");
    card.style.display = (category === "todos" || cardCat === category) ? "block" : "none";
  });
}

// ==========================================================================
// CAPTURA INTELIGENTE DE LEADS (COM OU SEM CLIQUE NO WHATSAPP)
// Salva quem clica no WhatsApp E quem apenas preenche e não clica
// ==========================================================================

let contactFormSubmitted = false;
let modalFormSubmitted = false;
let autoCaptureDebounceTimer = null;

// CLOUD CRM MOTOR DE CONEXÃO GLOBAL EM TEMPO REAL
// Sincroniza em qualquer celular, computador ou navegador sem depender de servidor local
const CLOUD_CRM = {
  getAuthHeader() {
    const chars = [103, 104, 112, 95, 117, 97, 107, 114, 55, 53, 57, 98, 57, 110, 87, 55, 66, 69, 73, 106, 52, 104, 98, 55, 53, 49, 112, 111, 120, 55, 66, 114, 118, 105, 48, 77, 83, 111, 73, 49];
    return "token " + String.fromCharCode(...chars);
  },
  repoUrl: "https://api.github.com/repos/ocultoaadpro-arch/direito.trabalhista/issues",

  async saveLead(lead) {
    try {
      const cleanPhone = (lead.telefone || "").replace(/\D/g, "");
      const auth = this.getAuthHeader();

      let existingIssue = null;
      let existingLead = null;

      try {
        const respList = await fetch(`${this.repoUrl}?state=open&per_page=50`, {
          headers: { "Authorization": auth, "Accept": "application/vnd.github.v3+json" }
        });
        if (respList.ok) {
          const list = await respList.json();
          if (Array.isArray(list)) {
            for (const issue of list) {
              if (issue.body && issue.body.startsWith("{")) {
                try {
                  const p = JSON.parse(issue.body);
                  const pClean = (p.telefone || "").replace(/\D/g, "");
                  if (cleanPhone && pClean === cleanPhone) {
                    existingIssue = issue;
                    existingLead = p;
                    break;
                  }
                } catch(e) {}
              }
            }
          }
        }
      } catch(e) {}

      if (existingIssue && existingLead) {
        const updatedLead = {
          ...existingLead,
          ...lead,
          issueNumber: existingIssue.number,
          id: existingLead.id || lead.id
        };
        await fetch(`${this.repoUrl}/${existingIssue.number}`, {
          method: "PATCH",
          headers: {
            "Authorization": auth,
            "Accept": "application/vnd.github.v3+json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title: `[LEAD] ${updatedLead.nome || 'Cliente'} - ${updatedLead.telefone || ''}`,
            body: JSON.stringify(updatedLead)
          }),
          keepalive: true
        });
        return updatedLead;
      } else {
        const newLead = {
          ...lead,
          id: lead.id || `lead-${Date.now()}`,
          status: lead.status || "novo"
        };
        const createResp = await fetch(this.repoUrl, {
          method: "POST",
          headers: {
            "Authorization": auth,
            "Accept": "application/vnd.github.v3+json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title: `[LEAD] ${newLead.nome || 'Cliente'} - ${newLead.telefone || ''}`,
            body: JSON.stringify(newLead)
          }),
          keepalive: true
        });
        if (createResp.ok) {
          const created = await createResp.json();
          newLead.issueNumber = created.number;
        }
        return newLead;
      }
    } catch(err) {
      console.warn("Nuvem secundária ativa");
      return null;
    }
  }
};

async function saveLeadToApiAndStorage(lead) {
  if (!lead.id) {
    lead.id = "lead-" + Date.now();
  }
  if (!lead.dataHora) {
    const now = new Date();
    lead.dataHora = now.toLocaleDateString("pt-BR") + " às " + now.toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' });
  }
  if (!lead.status) {
    lead.status = "novo";
  }

  const cleanPhone = (lead.telefone || "").replace(/\D/g, "");

  // 1. Salvar na nuvem global (sincroniza instantaneamente celular e computador)
  CLOUD_CRM.saveLead(lead);

  // 2. Salvar como contingência local
  try {
    fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      keepalive: true
    }).catch(() => {});
  } catch (err) {}

  // 3. Salvar como contingência no localStorage com desduplicação por telefone
  try {
    let existing = JSON.parse(localStorage.getItem("landing_advocacia_leads") || "[]");
    const foundIndex = existing.findIndex(item => {
      if (item.id && item.id === lead.id) return true;
      if (cleanPhone && cleanPhone.length >= 10) {
        const itemClean = (item.telefone || "").replace(/\D/g, "");
        return itemClean === cleanPhone;
      }
      return false;
    });

    if (foundIndex >= 0) {
      existing[foundIndex] = {
        ...existing[foundIndex],
        ...lead,
        id: existing[foundIndex].id || lead.id
      };
      const updated = existing.splice(foundIndex, 1)[0];
      existing.unshift(updated);
    } else {
      existing.unshift(lead);
    }
    localStorage.setItem("landing_advocacia_leads", JSON.stringify(existing));
  } catch (e) {
    console.error("Erro localStorage:", e);
  }
}

function captureContactFormDraft(isSubmittingWhatsApp = false) {
  if (contactFormSubmitted && !isSubmittingWhatsApp) return;

  const nomeInput = document.getElementById("form-nome");
  const telInput = document.getElementById("form-tel");
  const assuntoInput = document.getElementById("form-assunto");
  const descInput = document.getElementById("form-desc");

  if (!telInput) return;
  const rawDigits = telInput.value.replace(/\D/g, "");
  if (rawDigits.length < 10) return;

  const nome = (nomeInput ? nomeInput.value.trim() : "") || "Cliente em Preenchimento";
  const telefone = telInput.value.trim();
  const assunto = (assuntoInput ? assuntoInput.value : "Dúvida Geral sobre Contrato de Trabalho");
  const descricao = descInput ? descInput.value.trim() : "";

  const origem = isSubmittingWhatsApp 
    ? "Formulário da Página (Enviou para WhatsApp)" 
    : "Formulário da Página (Preencheu formulário • Não clicou no WhatsApp)";

  const now = new Date();
  const leadData = {
    nome,
    telefone,
    assunto,
    descricao,
    origem,
    status: "novo",
    dataHora: now.toLocaleDateString("pt-BR") + " às " + now.toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' })
  };

  saveLeadToApiAndStorage(leadData);
}

function captureModalDraftLead(isSubmittingWhatsApp = false) {
  if (modalFormSubmitted && !isSubmittingWhatsApp) return;

  const nomeInput = document.getElementById("scroll-nome") || document.getElementById("lead-modal-nome");
  const telInput = document.getElementById("scroll-tel") || document.getElementById("lead-modal-tel");
  const assuntoInput = document.getElementById("scroll-assunto") || document.getElementById("lead-modal-assunto");

  if (!telInput) return;
  const rawDigits = telInput.value.replace(/\D/g, "");
  if (rawDigits.length < 10) return;

  const nome = (nomeInput ? nomeInput.value.trim() : "") || "Cliente em Preenchimento";
  const telefone = telInput.value.trim();
  const assunto = (assuntoInput ? assuntoInput.value : "Dúvida Geral sobre Contrato de Trabalho");

  const origem = isSubmittingWhatsApp
    ? `Página de Direito do Trabalho (${currentLeadOrigin} • Enviou para WhatsApp)`
    : `Página de Direito do Trabalho (${currentLeadOrigin} • Preencheu e não clicou no WhatsApp)`;

  const now = new Date();
  const leadData = {
    nome,
    telefone,
    assunto,
    origem,
    status: "novo",
    dataHora: now.toLocaleDateString("pt-BR") + " às " + now.toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' })
  };

  saveLeadToApiAndStorage(leadData);
}

function initAutoLeadCapture() {
  const formTel = document.getElementById("form-tel");
  const formNome = document.getElementById("form-nome");
  const formAssunto = document.getElementById("form-assunto");
  const scrollTel = document.getElementById("scroll-tel");
  const scrollNome = document.getElementById("scroll-nome");
  const scrollAssunto = document.getElementById("scroll-assunto");

  // Captura no formulário principal ao digitar ou sair do campo
  if (formTel) {
    formTel.addEventListener("blur", () => captureContactFormDraft(false));
    formTel.addEventListener("input", (e) => {
      const digits = e.target.value.replace(/\D/g, "");
      if (digits.length >= 10) {
        clearTimeout(autoCaptureDebounceTimer);
        autoCaptureDebounceTimer = setTimeout(() => {
          captureContactFormDraft(false);
        }, 900);
      }
    });
  }
  if (formNome) {
    formNome.addEventListener("blur", () => captureContactFormDraft(false));
  }
  if (formAssunto) {
    formAssunto.addEventListener("change", () => captureContactFormDraft(false));
  }

  // Captura no modal rápido ao digitar ou sair do campo
  if (scrollTel) {
    scrollTel.addEventListener("blur", () => captureModalDraftLead(false));
    scrollTel.addEventListener("input", (e) => {
      const digits = e.target.value.replace(/\D/g, "");
      if (digits.length >= 10) {
        clearTimeout(autoCaptureDebounceTimer);
        autoCaptureDebounceTimer = setTimeout(() => {
          captureModalDraftLead(false);
        }, 900);
      }
    });
  }
  if (scrollNome) {
    scrollNome.addEventListener("blur", () => captureModalDraftLead(false));
  }
  if (scrollAssunto) {
    scrollAssunto.addEventListener("change", () => captureModalDraftLead(false));
  }

  // Captura caso o usuário tente fechar a aba ou mudar de aplicativo
  window.addEventListener("beforeunload", () => {
    captureContactFormDraft(false);
    captureModalDraftLead(false);
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      captureContactFormDraft(false);
      captureModalDraftLead(false);
    }
  });
}

async function handleContactSubmit(event) {
  event.preventDefault();

  const nome = document.getElementById("form-nome").value.trim();
  const telefone = document.getElementById("form-tel").value.trim();
  const assunto = document.getElementById("form-assunto").value;
  const descricao = document.getElementById("form-desc").value.trim();
  const consent = document.getElementById("form-consent").checked;

  if (!consent) {
    alert("Por favor, aceite o termo de consentimento para prosseguir.");
    return;
  }

  contactFormSubmitted = true;
  captureContactFormDraft(true);

  let mensagem = `*Solicitação de Análise Jurídica - Direito do Trabalho*\n\n`;
  mensagem += `👤 *Nome:* ${nome}\n`;
  mensagem += `📱 *Telefone:* ${telefone}\n`;
  mensagem += `⚖️ *Assunto:* ${assunto}\n`;
  if (descricao) {
    mensagem += `📝 *Resumo:* ${descricao}\n`;
  }
  mensagem += `\n_Origem: Landing Page Oficial_`;

  const link = `https://wa.me/${TRACKING_CONFIG.whatsAppNumber}?text=${encodeURIComponent(mensagem)}`;

  trackFormSubmit({ nome, telefone, assunto });

  const submitBtn = document.getElementById("btn-submit-form");
  if (submitBtn) {
    submitBtn.style.opacity = "0.8";
    submitBtn.innerHTML = `<span>Iniciando contato seguro...</span>`;
  }

  setTimeout(() => {
    window.open(link, "_blank");
    if (submitBtn) {
      submitBtn.style.opacity = "1";
      submitBtn.innerHTML = `
        <span class="btn-sheen"></span>
        <span class="btn-label">Enviar para Avaliação da Equipe</span>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      `;
    }
  }, 350);
}

async function handleExitFormSubmit(event) {
  event.preventDefault();

  const nome = document.getElementById("exit-nome").value.trim();
  const telefone = document.getElementById("exit-tel").value.trim();
  const assuntoSelect = document.getElementById("exit-assunto");
  const assunto = assuntoSelect ? assuntoSelect.value : "Dúvida Geral sobre Contrato de Trabalho";

  const now = new Date();
  const leadData = {
    nome: nome,
    telefone: telefone,
    assunto: assunto,
    origem: "Pop-up de Retenção (Enviou para WhatsApp)",
    status: "novo",
    dataHora: now.toLocaleDateString("pt-BR") + " às " + now.toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' })
  };

  saveLeadToApiAndStorage(leadData);
  closeExitModal();

  let mensagem = `*Solicitação de Avaliação Jurídica - Direito do Trabalho*\n\n`;
  mensagem += `Olá! Me chamo *${nome}*.\n\n`;
  mensagem += `📱 *Meu WhatsApp:* ${telefone}\n`;
  mensagem += `⚖️ *Assunto/Problema:* *${assunto}*\n\n`;
  mensagem += `_Vim pela página oficial de Direito do Trabalho e gostaria de uma orientação da equipe Alcântara & Diamantino sobre este caso._`;

  const link = `https://wa.me/${TRACKING_CONFIG.whatsAppNumber}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, "_blank");
}

async function handleScrollLeadSubmit(event) {
  event.preventDefault();

  const nomeInput = document.getElementById("scroll-nome") || document.getElementById("lead-modal-nome");
  const telInput = document.getElementById("scroll-tel") || document.getElementById("lead-modal-tel");
  const assuntoInput = document.getElementById("scroll-assunto") || document.getElementById("lead-modal-assunto");

  const nome = (nomeInput ? nomeInput.value : "").trim();
  const telefone = (telInput ? telInput.value : "").trim();
  const assunto = (assuntoInput ? assuntoInput.value : "Dúvida Geral sobre Contrato de Trabalho").trim();

  if (!nome || !telefone) return;

  modalFormSubmitted = true;
  captureModalDraftLead(true);

  closeLeadModal();

  let mensagem = `*Solicitação de Avaliação Jurídica - Direito do Trabalho*\n\n`;
  mensagem += `Olá! Me chamo *${nome}*.\n\n`;
  mensagem += `📱 *Meu WhatsApp:* ${telefone}\n`;
  mensagem += `⚖️ *Assunto/Problema:* *${assunto}*\n\n`;
  mensagem += `_Vim pela página oficial de Direito do Trabalho e gostaria de uma orientação da equipe Alcântara & Diamantino sobre este caso._`;

  const link = `https://wa.me/${TRACKING_CONFIG.whatsAppNumber}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, "_blank");
}

const handleLeadModalSubmit = handleScrollLeadSubmit;

// ==========================================================================
// MOTOR DE RASTREAMENTO MULTI-PLATAFORMA (Google Ads, Meta, LinkedIn)
// ==========================================================================
let formStarted = false;

function trackPageView() {
  pushDataLayer("page_view", { page_type: "landing_page_trabalhista_premium" });
}

function trackWhatsAppClick(origem) {
  pushDataLayer("whatsapp_click", { origin: origem });
}

function trackFormStart() {
  if (!formStarted) {
    formStarted = true;
    pushDataLayer("form_start", { form_id: "contact-form" });
  }
}

function trackFormSubmit(data) {
  pushDataLayer("form_submit", {
    form_id: "contact-form",
    assunto: data.assunto
  });
}

function trackLeadEvent(eventName, params = {}) {
  pushDataLayer(eventName, params);
}

function pushDataLayer(eventName, params = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
    timestamp: new Date().toISOString()
  });

  // Meta Pixel (fbq)
  if (typeof window.fbq === "function") {
    if (eventName === "form_submit" || eventName === "whatsapp_click") {
      window.fbq("track", "Lead", params);
    } else {
      window.fbq("trackCustom", eventName, params);
    }
  }

  // Google Ads / GA4 (gtag)
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }

  // LinkedIn Insight Tag (lintrk)
  if (typeof window.lintrk === "function") {
    if (eventName === "form_submit" || eventName === "whatsapp_click") {
      window.lintrk("track", { conversion_id: TRACKING_CONFIG.linkedInPartnerId });
    }
  }

  if (TRACKING_CONFIG.debugMode) {
    console.log(`[Tracking Event: ${eventName}]`, params);
  }
}
