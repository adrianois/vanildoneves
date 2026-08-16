import React, { useState } from "react";
import { Menu, X, Phone, Download, ChevronRight, ChevronDown, MessageCircle, Share2, CheckCircle2, Instagram, Youtube, Music2, Star, Vote } from "lucide-react";

// Importar dados
import { BANDEIRAS } from "./data/campaign";
import { NOTICIAS } from "./data/news";
import { REGIOES } from "./data/regions";
import { VALORES, TRAJETORIA, FORMACAO } from "./data/about";
import { CORES } from "./data/colors";
import { NAV_LINKS } from "./data/navigation";
import { ELECTION_DATE } from "./data/constants";

// Importar hooks
import { useCountdown } from "./hooks/useCountdown";

// Importar estilos
import "./styles/globals.css";

/* ---------------------------------------------------------------
   APP PRINCIPAL
--------------------------------------------------------------- */

export default function App() {
  const [menuAberto, setMenuAberto] = useState(false);
  const countdown = useCountdown(ELECTION_DATE);

  return (
    <div className="bg-white text-gray-900">
      {/* HEADER COM NAVEGAÇÃO */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="font-bold text-2xl text-azul">Vanildo Neves</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-azul transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            {menuAberto ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuAberto && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200">
            <div className="flex flex-col gap-4 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-azul transition"
                  onClick={() => setMenuAberto(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="bg-gradient-to-br from-azul to-azul-soft py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Vanildo Neves</h1>
          <p className="text-2xl mb-4">O Amigo de Sempre</p>
          <p className="text-xl mb-8 opacity-90">Deputado Estadual - 70.123</p>

          {/* COUNTDOWN */}
          <div className="bg-white bg-opacity-20 rounded-lg p-8 max-w-2xl mx-auto mb-8">
            <p className="mb-4 text-lg">Faltam</p>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-4xl font-bold">{countdown.dias}</div>
                <div className="text-sm opacity-75">Dias</div>
              </div>
              <div>
                <div className="text-4xl font-bold">{countdown.horas}</div>
                <div className="text-sm opacity-75">Horas</div>
              </div>
              <div>
                <div className="text-4xl font-bold">{countdown.minutos}</div>
                <div className="text-sm opacity-75">Minutos</div>
              </div>
              <div>
                <div className="text-4xl font-bold">{countdown.segundos}</div>
                <div className="text-sm opacity-75">Segundos</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-azul px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2">
              <Vote size={20} /> Voto 70.123
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-azul transition flex items-center justify-center gap-2">
              <Download size={20} /> Materiais
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO: QUEM É VANILDO */}
      <section id="quem-e-vanildo" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-azul">Quem é Vanildo Neves</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Trajetória */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-verde">Trajetória</h3>
              <div className="space-y-4">
                {TRAJETORIA.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <Icon size={24} className="text-azul flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">{item.titulo}</h4>
                        <p className="text-gray-600 text-sm">{item.texto}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Valores */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-verde">Valores Pessoais</h3>
              <div className="space-y-4">
                {VALORES.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <Icon size={24} className="text-dourado flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">{item.titulo}</h4>
                        <p className="text-gray-600 text-sm">{item.texto}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Formação */}
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-azul">Formação</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {FORMACAO.map((item, i) => (
                <div key={i} className="text-center">
                  <CheckCircle2 size={32} className="text-verde mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">{item.titulo}</h4>
                  <p className="text-gray-600 text-sm">{item.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: AS 10 BANDEIRAS */}
      <section id="bandeiras" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-azul">As 10 Bandeiras</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {BANDEIRAS.map((bandeira) => {
              const Icon = bandeira.icon;
              const corClasses = CORES[bandeira.cor];

              return (
                <div
                  key={bandeira.id}
                  className={`${corClasses.soft} p-6 rounded-lg border-l-4 ${corClasses.border} hover:shadow-lg transition`}
                >
                  <Icon size={28} className={`${corClasses.text} mb-3`} />
                  <h3 className="font-bold text-gray-900 mb-2">{bandeira.titulo}</h3>
                  <p className="text-sm text-gray-700">{bandeira.curta}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEÇÃO: NOTÍCIAS */}
      <section id="noticias" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-azul">Notícias e Agenda</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {NOTICIAS.map((noticia) => {
              const corClasses = CORES[noticia.cor];

              return (
                <article
                  key={noticia.id}
                  className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`${corClasses.bg} ${corClasses.text === 'text-dourado-dark' ? 'text-gray-900' : 'text-white'} text-xs font-bold px-3 py-1 rounded-full`}>
                      {noticia.tag}
                    </span>
                    <span className="text-xs text-gray-500">{noticia.data}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{noticia.titulo}</h3>
                  <p className="text-gray-600 text-sm mb-3">{noticia.lead}</p>

                  <button className={`${corClasses.text} font-semibold text-sm flex items-center gap-2 hover:gap-3 transition`}>
                    Ler mais <ChevronRight size={16} />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEÇÃO: REGIÕES */}
      <section id="regioes" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-azul">Regiões de Atuação</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {REGIOES.map((regiao) => (
              <div
                key={regiao.id}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-azul mb-2">{regiao.nome}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Municípios:</strong> {regiao.municipios}
                </p>
                <p className="text-gray-700">{regiao.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO: MATERIAIS & CTA */}
      <section id="materiais" className="py-16 bg-gradient-to-br from-azul to-azul-soft text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Materiais da Campanha</h2>
          <p className="text-lg mb-8 opacity-90">
            Baixe cartazes, vídeos, áudios e outros materiais para compartilhar
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <button className="bg-white bg-opacity-20 border-2 border-white p-6 rounded-lg hover:bg-opacity-30 transition">
              <Download size={32} className="mx-auto mb-3" />
              <h3 className="font-bold mb-2">Cartazes</h3>
              <p className="text-sm opacity-75">Modelos em PDF e JPG</p>
            </button>

            <button className="bg-white bg-opacity-20 border-2 border-white p-6 rounded-lg hover:bg-opacity-30 transition">
              <Music2 size={32} className="mx-auto mb-3" />
              <h3 className="font-bold mb-2">Áudios</h3>
              <p className="text-sm opacity-75">Spots para rádio</p>
            </button>

            <button className="bg-white bg-opacity-20 border-2 border-white p-6 rounded-lg hover:bg-opacity-30 transition">
              <Star size={32} className="mx-auto mb-3" />
              <h3 className="font-bold mb-2">Vídeos</h3>
              <p className="text-sm opacity-75">Campanhas e depoimentos</p>
            </button>
          </div>

          <button className="bg-white text-azul px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Acessar Banco de Materiais
          </button>
        </div>
      </section>

      {/* SEÇÃO: VOLUNTÁRIOS */}
      <section id="voluntarios" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-azul">Quer ser Voluntário?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Toda ajuda é importante! Junte-se a nós nessa campanha pelo melhor de Mato Grosso do Sul.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-azul text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2">
              <MessageCircle size={20} /> Entrar em Contato
            </button>

            <button className="border-2 border-azul text-azul px-8 py-3 rounded-lg font-bold hover:bg-azul hover:text-white transition flex items-center justify-center gap-2">
              <Phone size={20} /> (67) 9999-9999
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Vanildo Neves</h3>
              <p className="text-gray-400 text-sm">O Amigo de Sempre - Deputado Estadual 70.123</p>
            </div>

            <div>
              <h4 className="font-bold mb-3">Menu</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-white transition">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Youtube size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Music2 size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3">Contato</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>(67) 9999-9999</p>
                <p>contato@vanildoneves.com.br</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Vanildo Neves. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
