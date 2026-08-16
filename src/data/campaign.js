/**
 * Dados das bandeiras da campanha de Vanildo Neves
 */

import {
  Construction, Wheat, Mountain, Trophy, PawPrint, GraduationCap,
  Stethoscope, Landmark, ShieldCheck, Home as HomeIcon
} from "lucide-react";

export const BANDEIRAS = [
  {
    id: "viaria",
    icon: Construction,
    cor: "blue",
    titulo: "Infraestrutura Viária",
    curta: "Pontes, pavimentação e escoamento da produção.",
    texto: "Vanildo defende um plano estadual de recuperação de estradas vicinais e pontes, integrando regiões e reduzindo o custo do transporte para quem produz e para quem depende do transporte coletivo no interior."
  },
  {
    id: "agricultura",
    icon: Wheat,
    cor: "green",
    titulo: "Agricultura Familiar",
    curta: "Assistência técnica e crédito para o pequeno produtor.",
    texto: "Fortalecer o produtor familiar com assistência técnica continuada, linhas de crédito acessíveis e incentivo à comercialização direta, valorizando quem sustenta a economia rural de Mato Grosso do Sul."
  },
  {
    id: "turismo",
    icon: Mountain,
    cor: "green",
    titulo: "Turismo Pantaneiro e de Aventura",
    curta: "Planejamento, estrutura e geração de renda.",
    texto: "Ordenar o crescimento do turismo pantaneiro e de aventura com infraestrutura básica, capacitação de guias e pousadas locais, e geração de emprego e renda para as comunidades da região."
  },
  {
    id: "esporte",
    icon: Trophy,
    cor: "blue",
    titulo: "Esporte e Transformação Social",
    curta: "Oportunidades para a juventude através do esporte.",
    texto: "Ampliar o acesso de crianças e jovens ao esporte comunitário como ferramenta de inclusão social, saúde e disciplina, com investimento em praças esportivas e apoio a projetos sociais existentes."
  },
  {
    id: "animal",
    icon: PawPrint,
    cor: "gold",
    titulo: "Causa Animal",
    curta: "Fortalecimento das políticas públicas de proteção animal.",
    texto: "Propor o aprimoramento das políticas públicas voltadas à causa animal, incluindo apoio a castrações, campanhas de adoção responsável e combate aos maus-tratos em todo o estado."
  },
  {
    id: "educacao",
    icon: GraduationCap,
    cor: "blue",
    titulo: "Educação Pública",
    curta: "Base sólida e valorização dos profissionais.",
    texto: "Defender a educação pública como base de um governo bem estruturado, com prioridade orçamentária, valorização salarial e de carreira dos profissionais da área e melhoria da estrutura das escolas."
  },
  {
    id: "saude",
    icon: Stethoscope,
    cor: "green",
    titulo: "Saúde Pública",
    curta: "Mais vagas, medicamentos e valorização profissional.",
    texto: "Trabalhar por mais vagas de atendimento hospitalar, abastecimento regular de medicamentos nas unidades de saúde e valorização dos profissionais que sustentam o sistema todos os dias."
  },
  {
    id: "indigena",
    icon: Landmark,
    cor: "gold",
    titulo: "Cultura Indígena",
    curta: "Respeito e valorização dos povos originários.",
    texto: "Defender políticas públicas que respeitem e valorizem a cultura dos povos indígenas de Mato Grosso do Sul, reconhecendo seu papel fundamental na identidade e na história do estado."
  },
  {
    id: "seguranca",
    icon: ShieldCheck,
    cor: "blue",
    titulo: "Segurança Pública",
    curta: "Capacitação e melhores condições de trabalho.",
    texto: "Defender a valorização, capacitação continuada e melhores condições de trabalho para quem faz a segurança pública de Mato Grosso do Sul todos os dias, nas cidades e no interior."
  },
  {
    id: "habitacao",
    icon: HomeIcon,
    cor: "green",
    titulo: "Habitação",
    curta: "Ampliação e construção de novas moradias.",
    texto: "Incentivar programas de ampliação e construção de moradias populares, aproveitando a experiência técnica de Vanildo à frente da Secretaria de Obras em três gestões."
  }
];
