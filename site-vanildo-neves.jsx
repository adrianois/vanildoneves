import React, { useState, useEffect, useMemo } from "react";
import {
  Menu, X, Phone, Download, ChevronRight, ChevronDown, MapPin, Calendar,
  Newspaper, Users, Heart, ShieldCheck, GraduationCap, Stethoscope, Home as HomeIcon,
  Wheat, Mountain, Trophy, PawPrint, Landmark, Construction, MessageCircle, Share2,
  CheckCircle2, Instagram, Youtube, Music2, Star, Vote, Delete, Quote, Briefcase,
  Zap, KeyRound, Users2, ArrowUpRight
} from "lucide-react";

/* ---------------------------------------------------------------
   DADOS DA CAMPANHA — VANILDO NEVES 70.123
--------------------------------------------------------------- */

const BANDEIRAS = [
  { id: "viaria", icon: Construction, cor: "blue", titulo: "Infraestrutura Viária", curta: "Pontes, pavimentação e escoamento da produção.", texto: "Vanildo defende um plano estadual de recuperação de estradas vicinais e pontes, integrando regiões e reduzindo o custo do transporte para quem produz e para quem depende do transporte coletivo no interior." },
  { id: "agricultura", icon: Wheat, cor: "green", titulo: "Agricultura Familiar", curta: "Assistência técnica e crédito para o pequeno produtor.", texto: "Fortalecer o produtor familiar com assistência técnica continuada, linhas de crédito acessíveis e incentivo à comercialização direta, valorizando quem sustenta a economia rural de Mato Grosso do Sul." },
  { id: "turismo", icon: Mountain, cor: "green", titulo: "Turismo Pantaneiro e de Aventura", curta: "Planejamento, estrutura e geração de renda.", texto: "Ordenar o crescimento do turismo pantaneiro e de aventura com infraestrutura básica, capacitação de guias e pousadas locais, e geração de emprego e renda para as comunidades da região." },
  { id: "esporte", icon: Trophy, cor: "blue", titulo: "Esporte e Transformação Social", curta: "Oportunidades para a juventude através do esporte.", texto: "Ampliar o acesso de crianças e jovens ao esporte comunitário como ferramenta de inclusão social, saúde e disciplina, com investimento em praças esportivas e apoio a projetos sociais existentes." },
  { id: "animal", icon: PawPrint, cor: "gold", titulo: "Causa Animal", curta: "Fortalecimento das políticas públicas de proteção animal.", texto: "Propor o aprimoramento das políticas públicas voltadas à causa animal, incluindo apoio a castrações, campanhas de adoção responsável e combate aos maus-tratos em todo o estado." },
  { id: "educacao", icon: GraduationCap, cor: "blue", titulo: "Educação Pública", curta: "Base sólida e valorização dos profissionais.", texto: "Defender a educação pública como base de um governo bem estruturado, com prioridade orçamentária, valorização salarial e de carreira dos profissionais da área e melhoria da estrutura das escolas." },
  { id: "saude", icon: Stethoscope, cor: "green", titulo: "Saúde Pública", curta: "Mais vagas, medicamentos e valorização profissional.", texto: "Trabalhar por mais vagas de atendimento hospitalar, abastecimento regular de medicamentos nas unidades de saúde e valorização dos profissionais que sustentam o sistema todos os dias." },
  { id: "indigena", icon: Landmark, cor: "gold", titulo: "Cultura Indígena", curta: "Respeito e valorização dos povos originários.", texto: "Defender políticas públicas que respeitem e valorizem a cultura dos povos indígenas de Mato Grosso do Sul, reconhecendo seu papel fundamental na identidade e na história do estado." },
  { id: "seguranca", icon: ShieldCheck, cor: "blue", titulo: "Segurança Pública", curta: "Capacitação e melhores condições de trabalho.", texto: "Defender a valorização, capacitação continuada e melhores condições de trabalho para quem faz a segurança pública de Mato Grosso do Sul todos os dias, nas cidades e no interior." },
  { id: "habitacao", icon: HomeIcon, cor: "green", titulo: "Habitação", curta: "Ampliação e construção de novas moradias.", texto: "Incentivar programas de ampliação e construção de moradias populares, aproveitando a experiência técnica de Vanildo à frente da Secretaria de Obras em três gestões." },
];

const CORES = {
  blue: { bg: "bg-azul", text: "text-azul", ring: "ring-azul", soft: "bg-azul-soft", border: "border-azul" },
  green: { bg: "bg-verde", text: "text-verde", ring: "ring-verde", soft: "bg-verde-soft", border: "border-verde" },
  gold: { bg: "bg-dourado", text: "text-dourado-dark", ring: "ring-dourado", soft: "bg-dourado-soft", border: "border-dourado" },
};

const NOTICIAS = [
  { id: 1, categoria: "Giro pelos Municípios", tag: "Agenda", cor: "blue", data: "12 de agosto de 2026", titulo: "Vanildo Neves reúne lideranças em Miranda e ouve pauta da Agricultura Familiar", lead: "Em roda de conversa com produtores rurais, candidato reforçou compromisso com assistência técnica e crédito para o pequeno produtor.", corpo: "Durante visita ao município de Miranda, Vanildo Neves participou de uma roda de conversa com produtores rurais e lideranças comunitárias. O encontro reforçou o compromisso da campanha com a Agricultura Familiar, uma das dez bandeiras prioritárias apresentadas por Vanildo aos eleitores de Mato Grosso do Sul. Vanildo ouviu relatos sobre as dificuldades de acesso a crédito e assistência técnica no interior e reafirmou que, como deputado estadual, pretende atuar como ponte entre os municípios e o governo do estado." },
  { id: 2, categoria: "As 10 Bandeiras", tag: "Infraestrutura", cor: "blue", data: "18 de agosto de 2026", titulo: "Candidato apresenta propostas para recuperação de estradas vicinais", lead: "Com histórico de três gestões à frente da Secretaria de Obras, Vanildo detalha plano para infraestrutura viária no interior do estado.", corpo: "Vanildo Neves apresentou, em evento na região de Três Lagoas, propostas concretas para a recuperação de estradas vicinais e pontes que ligam propriedades rurais aos centros urbanos. A experiência de três mandatos como Secretário de Obras em Aquidauana é citada pela campanha como lastro técnico para a bandeira de Infraestrutura Viária, uma das prioridades legislativas de Vanildo caso eleito deputado estadual." },
  { id: 3, categoria: "Imprensa & Entrevistas", tag: "Entrevista", cor: "gold", data: "22 de agosto de 2026", titulo: "Em entrevista à rádio local, Vanildo fala sobre municipalismo e Assembleia Legislativa", lead: "Candidato destacou a importância de um mandato estadual dedicado a agilizar emendas e demandas dos municípios sul-mato-grossenses.", corpo: "Em entrevista concedida a uma rádio da região de Corumbá, Vanildo Neves falou sobre sua visão de mandato caso seja eleito deputado estadual: ser a voz dos municípios dentro do governo do estado. Ele citou sua experiência como Assessor Especial da Casa Civil do Estado de MS como diferencial para dialogar com agilidade com o Executivo estadual em benefício das cidades do interior." },
  { id: 4, categoria: "Giro pelos Municípios", tag: "Agenda", cor: "green", data: "27 de agosto de 2026", titulo: "Carreata em Aquidauana reúne apoiadores do Amigo de Sempre", lead: "Base histórica de Vanildo recebeu carreata com forte presença de lideranças e voluntários da campanha.", corpo: "A cidade de Aquidauana, base histórica de Vanildo Neves, recebeu uma carreata que reuniu centenas de apoiadores. O evento reforçou a mensagem central da campanha: 'O Amigo de Sempre' que agora busca representar os municípios de Mato Grosso do Sul na Assembleia Legislativa. Vanildo agradeceu o apoio da população e reforçou o pedido de voto, número 70.123." },
  { id: 5, categoria: "As 10 Bandeiras", tag: "Educação e Saúde", cor: "green", data: "02 de setembro de 2026", titulo: "Vanildo defende valorização de profissionais da Educação e da Saúde", lead: "Em visita a unidades públicas de Dourados, candidato reforça compromisso com as bandeiras de Educação Pública e Saúde Pública.", corpo: "Durante agenda em Dourados, Vanildo Neves visitou escolas e uma unidade de saúde pública, reforçando duas das dez bandeiras da campanha: Educação Pública e Saúde Pública. O candidato defendeu prioridade orçamentária para as duas áreas e valorização dos profissionais que atuam diretamente com a população." },
  { id: 6, categoria: "Imprensa & Entrevistas", tag: "Entrevista", cor: "gold", data: "05 de setembro de 2026", titulo: "Vanildo fala sobre tradição política e trajetória própria em entrevista", lead: "Candidato comenta sobre a trajetória da família Neves em Mato Grosso do Sul e reforça que méritos próprios sustentam sua candidatura.", corpo: "Questionado sobre a tradição política da família — os irmãos Waldir Neves e Valter Neves também têm trajetória no serviço público — Vanildo Neves destacou que a experiência familiar reforça sua credibilidade, mas que sua candidatura é sustentada por méritos próprios: três mandatos como vereador, passagem pelo Executivo municipal como vice-prefeito e experiência técnica como Secretário de Obras." },
];

const REGIOES = [
  { id: "pantanal", nome: "Pantanal e Vale do Aquidauana", municipios: "Aquidauana, Anastácio, Miranda, Dois Irmãos do Buriti", texto: "Base histórica de Vanildo. Aqui a campanha reforça o vínculo pessoal de décadas e o histórico como vereador, vice-prefeito e Secretário de Obras — o Amigo de Sempre que conhece cada rua." },
  { id: "campogrande", nome: "Campo Grande (Capital)", municipios: "Campo Grande", texto: "Praça eleitoral estratégica para a estadualização da marca Vanildo Neves, com foco em propostas técnicas de Infraestrutura Viária e Educação Pública para o eleitor urbano." },
  { id: "dourados", nome: "Grande Dourados", municipios: "Dourados e região", texto: "Região de forte presença rural e urbana, com agenda voltada à Agricultura Familiar e ao diálogo com lideranças comunitárias e produtivas." },
  { id: "treslagoas", nome: "Três Lagoas / Costa Leste", municipios: "Três Lagoas e região", texto: "Polo industrial e logístico, onde a campanha reforça propostas de Infraestrutura Viária para escoamento da produção e geração de emprego." },
  { id: "corumba", nome: "Corumbá e Ladário", municipios: "Corumbá, Ladário", texto: "Região de fronteira, com pauta voltada ao Turismo Pantaneiro e de Aventura e à valorização das comunidades locais." },
  { id: "sulfronteira", nome: "Sul-Fronteira, Conesul, Bodoquena e Norte de MS", municipios: "Bodoquena e municípios vizinhos", texto: "Região agropecuária de baixa densidade populacional, atendida com visitas presenciais e rodas de conversa sobre infraestrutura rural." },
];

const VALORES = [
  { icon: Trophy, titulo: "Futebol", texto: "Praticado com amigos de longa data, reforça laços comunitários e o apreço pelo esporte amador." },
  { icon: Mountain, titulo: "Cavalgadas", texto: "Conexão íntima com a cultura pantaneira e as tradições do homem do campo." },
  { icon: Zap, titulo: "Caminhada", texto: "Rotina matinal adotada desde cedo, símbolo de energia e disposição." },
  { icon: Heart, titulo: "Família e Fé", texto: "Alicerces que sustentam sua estabilidade pessoal, com gratidão aos valores tradicionais." },
];

const TRAJETORIA = [
  { icon: Landmark, titulo: "3x Vereador de Aquidauana", texto: "Atuação direta no Poder Legislativo municipal, na elaboração de leis e fiscalização de recursos." },
  { icon: Briefcase, titulo: "Ex-Vice-Prefeito e ex-Presidente da Câmara", texto: "Vivência no Poder Executivo, entendendo por dentro os desafios da administração de uma cidade." },
  { icon: Construction, titulo: "3x Secretário de Obras", texto: "Histórico técnico direto em pavimentação, pontes, saneamento e infraestrutura urbana entregue." },
  { icon: KeyRound, titulo: "Assessor Especial da Casa Civil do Estado de MS", texto: "Experiência de articulação junto ao Executivo estadual, agilizando emendas e demandas dos municípios." },
];

const FORMACAO = [
  { titulo: "Publicidade e Propaganda", texto: "Formação superior que aproxima Vanildo da estratégia e da comunicação." },
  { titulo: "Técnico Eletricista (SENAI)", texto: "Formação técnica que aproxima Vanildo da classe trabalhadora." },
  { titulo: "Corretor de Imóveis", texto: "Conhecimento do mercado imobiliário, conectado à bandeira de Habitação." },
];

const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#quem-e-vanildo", label: "Quem é Vanildo" },
  { href: "#bandeiras", label: "As 10 Bandeiras" },
  { href: "#noticias", label: "Notícias" },
  { href: "#regioes", label: "Regiões" },
  { href: "#materiais", label: "Materiais" },
  { href: "#voluntarios", label: "Voluntários" },
];

const DATA_ELEICAO = new Date("2026-10-04T08:00:00-04:00");

/* ---------------------------------------------------------------
   COMPONENTES AUXILIARES
--------------------------------------------------------------- */

function useCountdown(target) {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);
  return { dias, horas, minutos, segundos };
}

function Assinatura({ dark, size = "text-2xl" }) {
  return (
    <div className="leading-tight">
      <p className={`font-black tracking-tight ${size} ${dark ? "text-white" : "text-azul"}`}>
        VANILDO NEVES
      </p>
      <p className={`font-black ${size === "text-2xl" ? "text-lg" : "text-sm"} text-dourado`}>
        70.123 <span className="font-semibold">— O Amigo de Sempre!</span>
      </p>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-11 h-11 rounded-md overflow-hidden shrink-0 shadow-md">
        <div className="absolute inset-0 bg-azul" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-verde" />
        <div className="absolute inset-0 flex items-center justify-center pb-1">
          <span className="text-dourado font-black text-2xl italic">V</span>
        </div>
      </div>
      <div className="hidden sm:block">
        <p className="font-black text-azul leading-none tracking-tight">VANILDO NEVES</p>
        <p className="text-[11px] font-bold text-dourado-dark leading-none mt-1">70.123 — O Amigo de Sempre!</p>
      </div>
    </div>
  );
}

function SectionEyebrow({ children, cor = "gold" }) {
  const map = { gold: "text-dourado-dark bg-dourado-soft", green: "text-verde bg-verde-soft", blue: "text-azul bg-azul-soft" };
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${map[cor]}`}>
      {children}
    </span>
  );
}

function RodapeFaixa() {
  return (
    <div className="bg-dourado text-azul text-center py-2.5 px-4 text-xs sm:text-sm font-black tracking-wide">
      ⭐ TRABALHO, DIÁLOGO E RESPEITO POR MATO GROSSO DO SUL, VOTE 70.123. ⭐
    </div>
  );
}

/* ---------------------------------------------------------------
   HEADER
--------------------------------------------------------------- */

function Header({ menuOpen, setMenuOpen }) {
  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <RodapeFaixa />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("#inicio")} className="flex-shrink-0">
          <Logo />
        </button>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-azul hover:bg-azul-soft rounded-md transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <a
            href="https://wa.me/5567900000000"
            target="_blank" rel="noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-verde text-white text-sm font-bold hover:bg-verde-dark transition-colors"
          >
            <Phone size={16} /> WhatsApp Oficial
          </a>
          <button
            onClick={() => scrollTo("#materiais")}
            className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-dourado text-azul text-sm font-bold hover:bg-dourado-light transition-colors"
          >
            <Download size={16} /> Baixar Santinho
          </button>
        </div>
        <button className="lg:hidden p-2 text-azul" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-left px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-azul-soft rounded-md"
            >
              {l.label}
            </button>
          ))}
          <div className="flex gap-2 pt-2">
            <a href="https://wa.me/5567900000000" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md bg-verde text-white text-sm font-bold">
              <Phone size={16} /> WhatsApp
            </a>
            <button onClick={() => scrollTo("#materiais")} className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md bg-dourado text-azul text-sm font-bold">
              <Download size={16} /> Santinho
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------------------------------------------------------
   HERO
--------------------------------------------------------------- */

function Hero() {
  const { dias, horas, minutos, segundos } = useCountdown(DATA_ELEICAO);
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="inicio" className="relative bg-azul overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
        backgroundSize: "28px 28px",
      }} />
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-verde/20 blur-3xl" />
      <div className="absolute -left-24 bottom-0 w-96 h-96 rounded-full bg-dourado/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-16 sm:pt-20 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-dourado-light text-xs font-bold tracking-widest uppercase mb-6">
              <Star size={13} className="fill-dourado-light" /> Candidato a Deputado Estadual — Mato Grosso do Sul
            </span>
            <h1 className="font-black text-white leading-[0.95] tracking-tight text-5xl sm:text-6xl xl:text-7xl">
              VANILDO<br />NEVES
            </h1>
            <p className="mt-3 text-dourado font-black text-3xl sm:text-4xl tracking-tight">
              70.123
            </p>
            <p className="text-slate-300 font-semibold text-lg sm:text-xl mt-1">
              O Amigo de Sempre! <span className="text-slate-400 font-normal">— Deputado Estadual, servindo a nossa gente.</span>
            </p>

            <div className="mt-7 border-l-4 border-dourado pl-4 py-1 max-w-xl">
              <Quote size={18} className="text-dourado mb-1" />
              <p className="text-slate-200 italic text-base sm:text-lg leading-relaxed">
                Mais do que falar sobre política, quero ouvir as pessoas, valorizar os municípios e representar Mato Grosso do Sul.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => scrollTo("#materiais")} className="flex items-center gap-2 px-5 py-3 rounded-md bg-dourado text-azul font-bold hover:bg-dourado-light hover:scale-105 transition-all shadow-xl">
                <Download size={18} /> Baixar Santinho Digital
              </button>
              <a href="https://wa.me/5567900000000" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-md bg-verde text-white font-bold hover:bg-verde-light hover:scale-105 transition-all shadow-xl">
                <MessageCircle size={18} /> Entrar no Grupo de WhatsApp
              </a>
              <button onClick={() => scrollTo("#bandeiras")} className="flex items-center gap-2 px-5 py-3 rounded-md bg-white/10 border border-white/30 text-white font-bold hover:bg-white/20 transition-all">
                Conhecer Propostas <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="lg:pl-6">
            <div className="bg-white/95 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <p className="text-center text-azul font-black text-sm tracking-widest uppercase mb-1">
                <Vote size={16} className="inline -mt-1 mr-1.5" /> No dia 4 de outubro de 2026, vote 70.123
              </p>
              <p className="text-center text-slate-500 text-xs mb-5">Faltam para o dia da eleição:</p>
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {[["Dias", dias], ["Horas", horas], ["Min", minutos], ["Seg", segundos]].map(([label, val]) => (
                  <div key={label} className="bg-azul rounded-lg py-3 text-center">
                    <p className="text-2xl sm:text-3xl font-black text-dourado tabular-nums">{String(val).padStart(2, "0")}</p>
                    <p className="text-[10px] sm:text-xs text-slate-300 font-semibold uppercase tracking-wide">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-slate-200 flex items-center justify-between text-sm">
                <span className="text-slate-500 font-medium">Partido AVANTE</span>
                <span className="flex items-center gap-1.5 font-bold text-verde">
                  <CheckCircle2 size={16} /> Registro confirmado no TRE-MS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   QUEM É VANILDO
--------------------------------------------------------------- */

function QuemEVanildo() {
  return (
    <section id="quem-e-vanildo" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <SectionEyebrow cor="blue">Trajetória e experiência</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-azul tracking-tight">Quem é Vanildo Neves</h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Uma trajetória de serviço público construída em Mato Grosso do Sul — no Legislativo, no Executivo e na articulação com o Governo do Estado — somada ao lado humano de quem sempre esteve perto das pessoas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {TRAJETORIA.map((t) => (
            <div key={t.titulo} className="flex gap-4 p-6 rounded-xl border border-slate-200 hover:border-azul hover:shadow-lg transition-all">
              <div className="shrink-0 w-12 h-12 rounded-lg bg-azul flex items-center justify-center">
                <t.icon size={22} className="text-dourado" />
              </div>
              <div>
                <h3 className="font-bold text-azul text-lg">{t.titulo}</h3>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">{t.texto}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <h3 className="font-black text-azul text-xl mb-1">Formação multifacetada</h3>
            <p className="text-slate-500 text-sm mb-5">Três formações, três públicos, uma mesma trajetória de proximidade.</p>
            <div className="space-y-3">
              {FORMACAO.map((f) => (
                <div key={f.titulo} className="p-4 rounded-lg bg-verde-soft border border-verde-soft-border">
                  <p className="font-bold text-verde-dark text-sm">{f.titulo}</p>
                  <p className="text-verde-ink70 text-xs mt-1">{f.texto}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3">
            <h3 className="font-black text-azul text-xl mb-1">Tradição familiar de serviço público</h3>
            <p className="text-slate-600 text-sm leading-relaxed mt-3">
              Vanildo integra uma família com trajetória consolidada de serviço público em Mato Grosso do Sul. Seu irmão <strong>Waldir Neves</strong> foi vereador e presidente da Câmara de Miranda/MS, cumpriu quatro mandatos como Deputado Estadual e um como Deputado Federal, e atualmente é conselheiro do TCE/MS, tendo presidido a Corte por quatro anos. Seu outro irmão, <strong>Valter Neves</strong>, atuou como eletricista na antiga Enersul/Energisa e está em seu quarto mandato como vereador de Aquidauana/MS.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed mt-3 italic">
              A tradição familiar reforça a credibilidade de Vanildo — mas nunca substitui os méritos e a trajetória construída por ele mesmo.
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-black text-azul text-xl mb-1">Valores pessoais e estilo de vida</h3>
          <p className="text-slate-500 text-sm mb-5">Quem é Vanildo fora da agenda política.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALORES.map((v) => (
              <div key={v.titulo} className="p-5 rounded-xl bg-slate-50 hover:bg-dourado-soft border border-slate-100 hover:border-dourado-light2 transition-all group">
                <v.icon size={24} className="text-azul group-hover:text-dourado-dark transition-colors" />
                <p className="font-bold text-azul mt-3">{v.titulo}</p>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">{v.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   AS 10 BANDEIRAS
--------------------------------------------------------------- */

function Bandeiras() {
  const [ativo, setAtivo] = useState(null);
  const [filtro, setFiltro] = useState("todas");
  const cores = ["todas", "blue", "green", "gold"];
  const label = { todas: "Todas", blue: "Institucional", green: "Regional", gold: "Prioridade" };
  const lista = filtro === "todas" ? BANDEIRAS : BANDEIRAS.filter((b) => b.cor === filtro);

  return (
    <section id="bandeiras" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <SectionEyebrow cor="green">Propostas legislativas</SectionEyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black text-azul tracking-tight">As 10 Bandeiras de Mato Grosso do Sul</h2>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Dez frentes de atuação que Vanildo pretende levar como propostas legislativas concretas à Assembleia Legislativa.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {cores.map((c) => (
              <button
                key={c}
                onClick={() => setFiltro(c)}
                className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                  filtro === c ? "bg-azul text-white border-azul" : "bg-white text-slate-600 border-slate-200 hover:border-azul"
                }`}
              >
                {label[c]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {lista.map((b, i) => {
            const c = CORES[b.cor];
            return (
              <button
                key={b.id}
                onClick={() => setAtivo(b)}
                className="text-left bg-white rounded-xl p-6 border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-lg ${c.bg} flex items-center justify-center`}>
                    <b.icon size={22} className="text-white" />
                  </div>
                  <span className="text-xs font-black text-slate-300 group-hover:text-dourado transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-bold text-azul mt-4 text-base">{b.titulo}</h3>
                <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">{b.curta}</p>
                <span className={`inline-flex items-center gap-1 text-xs font-bold mt-4 ${c.text}`}>
                  Ver proposta <ArrowUpRight size={14} />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {ativo && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-azul/70 backdrop-blur-sm" onClick={() => setAtivo(null)}>
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between">
              <div className={`w-14 h-14 rounded-xl ${CORES[ativo.cor].bg} flex items-center justify-center`}>
                <ativo.icon size={26} className="text-white" />
              </div>
              <button onClick={() => setAtivo(null)} className="p-1 text-slate-400 hover:text-azul">
                <X size={22} />
              </button>
            </div>
            <h3 className="font-black text-azul text-2xl mt-5">{ativo.titulo}</h3>
            <p className="text-slate-600 mt-3 leading-relaxed">{ativo.texto}</p>
            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">Proposta da campanha Vanildo Neves 70.123</span>
              <a href="https://wa.me/5567900000000" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-verde hover:text-verde-dark">
                <Share2 size={15} /> Compartilhar
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------------------------------------------------------------
   NOTÍCIAS / SALA DE IMPRENSA
--------------------------------------------------------------- */

function Noticias() {
  const categorias = ["Todas", "Giro pelos Municípios", "As 10 Bandeiras", "Imprensa & Entrevistas"];
  const [filtro, setFiltro] = useState("Todas");
  const [aberta, setAberta] = useState(null);
  const lista = filtro === "Todas" ? NOTICIAS : NOTICIAS.filter((n) => n.categoria === filtro);

  return (
    <section id="noticias" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <SectionEyebrow cor="gold">Sala de imprensa</SectionEyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black text-azul tracking-tight">Notícias da Campanha</h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {categorias.map((c) => (
              <button
                key={c}
                onClick={() => setFiltro(c)}
                className={`px-4 py-2 rounded-full text-xs font-bold border transition-all whitespace-nowrap ${
                  filtro === c ? "bg-azul text-white border-azul" : "bg-white text-slate-600 border-slate-200 hover:border-azul"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lista.map((n) => {
            const c = CORES[n.cor];
            return (
              <article key={n.id} className="rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all flex flex-col">
                <div className={`h-32 ${c.bg} flex items-center justify-center relative`}>
                  <Newspaper size={36} className="text-white/30" />
                  <span className="absolute top-3 left-3 bg-white/95 text-azul text-[11px] font-bold px-2.5 py-1 rounded-full">
                    {n.tag}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                    <Calendar size={13} /> {n.data}
                  </p>
                  <h3 className="font-bold text-azul mt-2 leading-snug">{n.titulo}</h3>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed flex-1">{n.lead}</p>
                  <button
                    onClick={() => setAberta(n)}
                    className={`mt-4 inline-flex items-center gap-1.5 text-sm font-bold ${c.text} hover:underline self-start`}
                  >
                    Ler Matéria <ChevronRight size={15} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {aberta && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-azul/70 backdrop-blur-sm" onClick={() => setAberta(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <span className="text-xs font-bold text-dourado-dark bg-dourado-soft px-2.5 py-1 rounded-full">{aberta.tag}</span>
              <button onClick={() => setAberta(null)} className="p-1 text-slate-400 hover:text-azul shrink-0">
                <X size={22} />
              </button>
            </div>
            <p className="text-xs text-slate-400 font-medium flex items-center gap-1.5 mt-4">
              <Calendar size={13} /> {aberta.data}
            </p>
            <h3 className="font-black text-azul text-2xl mt-2 leading-snug">{aberta.titulo}</h3>
            <p className="text-slate-700 mt-4 leading-relaxed">{aberta.corpo}</p>
            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(aberta.titulo + " — Vanildo Neves 70.123")}`}
                target="_blank" rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-verde text-white text-sm font-bold hover:bg-verde-dark"
              >
                <MessageCircle size={16} /> Compartilhar no WhatsApp
              </a>
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-azul text-white text-sm font-bold hover:bg-azul-dark">
                <Download size={16} /> Kit Mídia (Release)
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------------------------------------------------------------
   REGIÕES
--------------------------------------------------------------- */

function Regioes() {
  const [ativa, setAtiva] = useState(REGIOES[0].id);
  const regiao = REGIOES.find((r) => r.id === ativa);
  return (
    <section id="regioes" className="py-20 sm:py-28 bg-azul">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <SectionEyebrow cor="gold">Presença estadual</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white tracking-tight">As 11 Microrregiões de Mato Grosso do Sul</h2>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            De Aquidauana para todo o estado: o compromisso de Vanildo com cada região de Mato Grosso do Sul.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 flex flex-col gap-2">
            {REGIOES.map((r) => (
              <button
                key={r.id}
                onClick={() => setAtiva(r.id)}
                className={`text-left px-5 py-4 rounded-lg border transition-all ${
                  ativa === r.id ? "bg-white border-white" : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <p className={`font-bold text-sm ${ativa === r.id ? "text-azul" : "text-white"}`}>{r.nome}</p>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl p-8">
            <div className="flex items-center gap-2 text-verde font-bold text-sm">
              <MapPin size={18} /> {regiao.municipios}
            </div>
            <h3 className="font-black text-azul text-2xl mt-3">{regiao.nome}</h3>
            <p className="text-slate-600 mt-4 leading-relaxed text-lg">{regiao.texto}</p>
            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-2 text-dourado-dark font-bold text-sm">
              <Users2 size={16} /> Coordenação de campo ativa nesta microrregião
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   MATERIAIS / URNA SIMULATOR
--------------------------------------------------------------- */

function UrnaSimulador() {
  const [digitos, setDigitos] = useState("");
  const alvo = "70123";

  const digitar = (n) => {
    if (digitos.length >= 5) return;
    setDigitos((d) => d + n);
  };
  const corrigir = () => setDigitos((d) => d.slice(0, -1));
  const limpar = () => setDigitos("");

  const confirmado = digitos === alvo;

  return (
    <div className="bg-azul rounded-2xl p-6 sm:p-8 max-w-sm mx-auto shadow-2xl">
      <p className="text-center text-dourado font-black text-xs tracking-widest uppercase mb-4">Simulador da Urna Eletrônica</p>
      <div className="bg-slate-950 rounded-lg p-5 mb-5 border-2 border-slate-700">
        <div className="flex justify-center gap-2 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="w-9 h-11 sm:w-10 sm:h-12 flex items-center justify-center rounded bg-black text-2xl font-mono text-verde-bright border border-slate-700">
              {digitos[i] || ""}
            </span>
          ))}
        </div>
        {confirmado ? (
          <div className="text-center py-3 animate-pulse">
            <p className="text-verde-bright font-bold text-sm">VANILDO NEVES</p>
            <p className="text-white font-black text-lg">70.123</p>
            <p className="text-dourado-light text-xs font-bold mt-1">O AMIGO DE SEMPRE! ✓ CONFIRMADO</p>
          </div>
        ) : (
          <p className="text-center text-slate-500 text-xs py-3">Digite 70123 para confirmar o voto</p>
        )}
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <button
            key={n}
            onClick={() => digitar(String(n))}
            className="py-3.5 rounded-md bg-white/10 hover:bg-white/20 text-white font-bold text-lg transition-colors active:scale-95"
          >
            {n}
          </button>
        ))}
        <button onClick={limpar} className="py-3.5 rounded-md bg-red-900/40 hover:bg-red-900/60 text-red-200 font-bold text-xs transition-colors">
          CORRIGE
        </button>
        <button onClick={() => digitar("0")} className="py-3.5 rounded-md bg-white/10 hover:bg-white/20 text-white font-bold text-lg transition-colors active:scale-95">
          0
        </button>
        <button onClick={corrigir} className="py-3.5 rounded-md bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
          <Delete size={18} />
        </button>
      </div>
    </div>
  );
}

function Materiais() {
  return (
    <section id="materiais" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <SectionEyebrow cor="blue">Central de mobilização</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-azul tracking-tight">Materiais de Campanha</h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Baixe o santinho digital, teste a urna e ajude a espalhar a candidatura de Vanildo Neves 70.123 nas suas redes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 max-w-sm mx-auto">
              <div className="bg-azul rounded-xl p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-dourado mx-auto flex items-center justify-center">
                  <span className="text-dourado font-black text-3xl italic">V</span>
                </div>
                <p className="text-white font-black text-xl mt-4 tracking-tight">VANILDO NEVES</p>
                <p className="text-dourado font-black text-2xl">70.123</p>
                <p className="text-slate-300 text-sm font-semibold mt-1">O Amigo de Sempre!</p>
                <p className="text-slate-400 text-xs italic mt-1">Deputado Estadual — Servindo a nossa gente.</p>
                <div className="mt-4 bg-dourado text-azul text-[10px] font-black py-1.5 rounded tracking-widest">
                  TRABALHO, DIÁLOGO E RESPEITO POR MS
                </div>
              </div>
              <button className="mt-5 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-azul text-white font-bold hover:bg-azul-dark hover:scale-105 transition-all">
                <Download size={18} /> Baixar Santinho Digital (HD)
              </button>
              <div className="grid grid-cols-2 gap-3 mt-3">
                <button className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md border border-slate-200 text-slate-600 font-semibold text-sm hover:border-azul hover:text-azul transition-colors">
                  Adesivo
                </button>
                <button className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md border border-slate-200 text-slate-600 font-semibold text-sm hover:border-azul hover:text-azul transition-colors">
                  Avatar de Rede
                </button>
              </div>
            </div>
          </div>
          <UrnaSimulador />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   VOLUNTÁRIOS
--------------------------------------------------------------- */

function Voluntarios() {
  const [form, setForm] = useState({ nome: "", whatsapp: "", municipio: "", bairro: "", apoio: "" });
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState("");

  const opcoes = ["Distribuir material", "Organizar grupo de WhatsApp", "Participar de carreatas", "Divulgar nas redes sociais", "Apoio de rua / bandeiraço"];

  const atualizar = (campo, valor) => setForm((f) => ({ ...f, [campo]: valor }));

  const enviar = (e) => {
    e.preventDefault();
    if (!form.nome || !form.whatsapp || !form.municipio || !form.apoio) {
      setErro("Preencha nome, WhatsApp, município e como deseja apoiar.");
      return;
    }
    setErro("");
    setEnviado(true);
  };

  if (enviado) {
    return (
      <section id="voluntarios" className="py-20 sm:py-28 bg-verde">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <CheckCircle2 size={56} className="text-white mx-auto" />
          <h2 className="text-3xl font-black text-white mt-5">Cadastro recebido, {form.nome.split(" ")[0]}!</h2>
          <p className="text-verde-soft mt-3 text-lg">
            Obrigado por apoiar Vanildo Neves 70.123 em {form.municipio}. Nossa coordenação de campo vai entrar em contato pelo WhatsApp em breve.
          </p>
          <a
            href="https://wa.me/5567900000000"
            target="_blank" rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-verde font-bold hover:bg-verde-soft hover:scale-105 transition-all"
          >
            <MessageCircle size={18} /> Entrar no Canal Oficial do WhatsApp
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="voluntarios" className="py-20 sm:py-28 bg-verde">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <SectionEyebrow cor="gold">GOTV — Mobilização</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white tracking-tight">Seja um Voluntário Multiplicador</h2>
          <p className="mt-4 text-verde-soft text-lg">
            Cadastre-se e ajude a levar a mensagem de Vanildo Neves 70.123 ao seu município.
          </p>
        </div>

        <form onSubmit={enviar} className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-bold text-azul mb-1.5">Nome completo</label>
              <input
                value={form.nome}
                onChange={(e) => atualizar("nome", e.target.value)}
                className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:border-azul focus:ring-2 focus:ring-azul/20 outline-none transition-all"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-azul mb-1.5">WhatsApp</label>
              <input
                value={form.whatsapp}
                onChange={(e) => atualizar("whatsapp", e.target.value)}
                className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:border-azul focus:ring-2 focus:ring-azul/20 outline-none transition-all"
                placeholder="(67) 9 9999-9999"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-bold text-azul mb-1.5">Município</label>
              <input
                value={form.municipio}
                onChange={(e) => atualizar("municipio", e.target.value)}
                className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:border-azul focus:ring-2 focus:ring-azul/20 outline-none transition-all"
                placeholder="Ex: Aquidauana"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-azul mb-1.5">Bairro <span className="text-slate-400 font-normal">(opcional)</span></label>
              <input
                value={form.bairro}
                onChange={(e) => atualizar("bairro", e.target.value)}
                className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:border-azul focus:ring-2 focus:ring-azul/20 outline-none transition-all"
                placeholder="Seu bairro"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-azul mb-2">Como deseja apoiar?</label>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {opcoes.map((op) => (
                <button
                  type="button"
                  key={op}
                  onClick={() => atualizar("apoio", op)}
                  className={`text-left px-4 py-2.5 rounded-md border text-sm font-semibold transition-all ${
                    form.apoio === op ? "bg-azul text-white border-azul" : "bg-white text-slate-600 border-slate-300 hover:border-azul"
                  }`}
                >
                  {op}
                </button>
              ))}
            </div>
          </div>
          {erro && <p className="text-red-600 text-sm font-semibold">{erro}</p>}
          <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-dourado text-azul font-black hover:bg-dourado-light hover:scale-[1.02] transition-all shadow-lg">
            <Users size={19} /> Confirmar Cadastro de Voluntário
          </button>
        </form>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   FOOTER
--------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="bg-azul">
      <RodapeFaixa />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Assinatura dark size="text-xl" />
          <p className="text-slate-400 text-sm mt-4 leading-relaxed">
            Candidato a Deputado Estadual por Mato Grosso do Sul — Partido AVANTE, número 70.
          </p>
          <div className="flex gap-3 mt-5">
            {[Instagram, Youtube, Music2].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-dourado hover:text-azul text-white transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-dourado font-bold text-sm uppercase tracking-wide mb-4">Navegação</p>
          <ul className="space-y-2 text-sm text-slate-300">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-dourado font-bold text-sm uppercase tracking-wide mb-4">Informações Jurídicas</p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>CNPJ da Campanha: 00.000.000/0001-00</li>
            <li>Partido: AVANTE — Nº 70</li>
            <li>Cargo: Deputado Estadual — MS</li>
            <li>Eleições Gerais 2026</li>
          </ul>
        </div>
        <div>
          <p className="text-dourado font-bold text-sm uppercase tracking-wide mb-4">Transparência</p>
          <p className="text-sm text-slate-300 leading-relaxed">
            Este site pode utilizar tecnologias de inteligência artificial para organização e personalização de conteúdo, sempre sob supervisão da Coordenação de Comunicação da campanha, em conformidade com a legislação eleitoral vigente.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400 px-4">
        © 2026 Campanha Vanildo Neves 70.123. Material de campanha eleitoral — Deputado Estadual por Mato Grosso do Sul.
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------------
   APP
--------------------------------------------------------------- */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="font-sans antialiased text-slate-800">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .font-sans { font-family: 'Inter', system-ui, sans-serif; }

        /* ===== Identidade Visual Oficial — Vanildo Neves 70.123 ===== */
        :root {
          --azul: #1B2A4A;        /* Azul Institucional */
          --azul-dark: #121d36;
          --azul-soft: rgba(27,42,74,.06);

          --verde: #3A7D44;       /* Verde Pantanal */
          --verde-dark: #2c6136;
          --verde-light: #4b9457;
          --verde-bright: #5fbf6a;
          --verde-soft: rgba(58,125,68,.08);
          --verde-soft-border: rgba(58,125,68,.25);

          --dourado: #C9A227;     /* Amarelo Ouro */
          --dourado-dark: #a3821d;
          --dourado-light: #ddbd52;
          --dourado-light2: #e9d489;
          --dourado-soft: rgba(201,162,39,.12);

          --laranja: #F26522;     /* AVANTE — uso reservado */
          --ciano: #0EA5C9;       /* AVANTE — uso reservado */
        }

        /* Azul Institucional */
        .bg-azul{background-color:var(--azul)}
        .bg-azul-soft{background-color:var(--azul-soft)}
        .bg-azul\\/70{background-color:rgba(27,42,74,.7)}
        .text-azul{color:var(--azul)}
        .border-azul{border-color:var(--azul)}
        .ring-azul{--tw-ring-color:var(--azul)}
        .focus\\:border-azul:focus{border-color:var(--azul)}
        .focus\\:ring-azul\\/20:focus{box-shadow:0 0 0 3px rgba(27,42,74,.2)}
        .hover\\:bg-azul-dark:hover{background-color:var(--azul-dark)}
        .hover\\:bg-azul-soft:hover{background-color:var(--azul-soft)}
        .hover\\:border-azul:hover{border-color:var(--azul)}
        .hover\\:text-azul:hover{color:var(--azul)}

        /* Verde Pantanal */
        .bg-verde{background-color:var(--verde)}
        .bg-verde-soft{background-color:var(--verde-soft)}
        .bg-verde\\/20{background-color:rgba(58,125,68,.2)}
        .text-verde{color:var(--verde)}
        .text-verde-dark{color:var(--verde-dark)}
        .text-verde-bright{color:var(--verde-bright)}
        .text-verde-soft{color:#eafaec}
        .text-verde-ink70{color:rgba(22,48,27,.75)}
        .border-verde{border-color:var(--verde)}
        .border-verde-soft-border{border-color:var(--verde-soft-border)}
        .ring-verde{--tw-ring-color:var(--verde)}
        .hover\\:bg-verde-dark:hover{background-color:var(--verde-dark)}
        .hover\\:bg-verde-light:hover{background-color:var(--verde-light)}
        .hover\\:bg-verde-soft:hover{background-color:var(--verde-soft)}
        .hover\\:text-verde-dark:hover{color:var(--verde-dark)}

        /* Amarelo Ouro */
        .bg-dourado{background-color:var(--dourado)}
        .bg-dourado-soft{background-color:var(--dourado-soft)}
        .bg-dourado\\/10{background-color:rgba(201,162,39,.1)}
        .text-dourado{color:var(--dourado)}
        .text-dourado-dark{color:var(--dourado-dark)}
        .text-dourado-light{color:var(--dourado-light)}
        .fill-dourado-light{fill:var(--dourado-light)}
        .border-dourado{border-color:var(--dourado)}
        .ring-dourado{--tw-ring-color:var(--dourado)}
        .hover\\:bg-dourado:hover{background-color:var(--dourado)}
        .hover\\:bg-dourado-light:hover{background-color:var(--dourado-light)}
        .hover\\:bg-dourado-soft:hover{background-color:var(--dourado-soft)}
        .hover\\:border-dourado-light2:hover{border-color:var(--dourado-light2)}
        .group:hover .group-hover\\:text-dourado{color:var(--dourado)}
        .group:hover .group-hover\\:text-dourado-dark{color:var(--dourado-dark)}

        /* Cores do partido AVANTE — uso reservado (selo/rodapé) */
        .bg-laranja{background-color:var(--laranja)}
        .bg-ciano{background-color:var(--ciano)}
        .text-laranja{color:var(--laranja)}
        .text-ciano{color:var(--ciano)}
      `}</style>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <QuemEVanildo />
      <Bandeiras />
      <Noticias />
      <Regioes />
      <Materiais />
      <Voluntarios />
      <Footer />
    </div>
  );
}
