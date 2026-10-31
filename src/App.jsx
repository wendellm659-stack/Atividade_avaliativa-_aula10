import React, { useState } from 'react';
import { Plane, MapPin, Tag, Mail, Compass, ShieldCheck, Hotel, Coffee, Check, Search, Star } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      {/* Cabeçalho / Navegação */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 cursor-pointer font-bold text-xl text-purple-700 hover:opacity-90 transition-opacity"
          >
            <Plane className="h-6 w-6 text-fuchsia-600" />
            <span>Connect<span className="text-fuchsia-600">Flight</span></span>
          </div>
          <nav className="flex gap-6 text-sm font-medium">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`hover:text-fuchsia-600 transition-colors ${currentPage === 'home' ? 'text-fuchsia-600 font-semibold' : 'text-slate-600'}`}
            >
              Início
            </button>
            <button 
              onClick={() => setCurrentPage('destinos')}
              className={`hover:text-fuchsia-600 transition-colors ${currentPage === 'destinos' ? 'text-fuchsia-600 font-semibold' : 'text-slate-600'}`}
            >
              Destinos
            </button>
            <button 
              onClick={() => setCurrentPage('ofertas')}
              className={`hover:text-fuchsia-600 transition-colors ${currentPage === 'ofertas' ? 'text-fuchsia-600 font-semibold' : 'text-slate-600'}`}
            >
              Ofertas
            </button>
            <button 
              onClick={() => setCurrentPage('contato')}
              className={`hover:text-fuchsia-600 transition-colors ${currentPage === 'contato' ? 'text-fuchsia-600 font-semibold' : 'text-slate-600'}`}
            >
              Contato
            </button>
          </nav>
        </div>
      </header>

      {/* Conteúdo Dinâmico com base na rota */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
        {currentPage === 'destinos' && <DestinosPage />}
        {currentPage === 'ofertas' && <OfertasPage />}
        {currentPage === 'contato' && <ContatoPage />}
      </main>

      {/* Rodapé conforme protótipo */}
      <footer className="bg-slate-900 text-slate-300 py-8 border-t border-slate-800 mt-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            © {new Date().getFullYear()} ConnectFlight. Todos os direitos reservados.
          </div>
          <nav className="flex gap-8 text-sm">
            <button 
              onClick={() => setCurrentPage('destinos')}
              className="hover:text-fuchsia-400 transition-colors"
            >
              Destinos
            </button>
            <button 
              onClick={() => setCurrentPage('ofertas')}
              className="hover:text-fuchsia-400 transition-colors"
            >
              Ofertas
            </button>
            <button 
              onClick={() => setCurrentPage('contato')}
              className="hover:text-fuchsia-400 transition-colors"
            >
              Contato
            </button>
          </nav>
        </div>
      </footer>
    </div>
  );
}

// -----------------------------------------------------------------------------
// TELA PRINCIPAL (HomePage - Réplica exata do layout do Figma)
// -----------------------------------------------------------------------------
function HomePage({ onNavigate }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      {/* Ilustração Central Simulada */}
      <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
        <div className="absolute inset-0 bg-fuchsia-100 rounded-full animate-pulse"></div>
        <div className="relative z-10 flex flex-col items-center justify-center">
          <Compass className="w-24 h-24 text-fuchsia-600" />
          <div className="flex gap-2 mt-2">
            <span className="bg-purple-600 text-white p-1.5 rounded-full shadow-md"><Plane className="w-4 h-4" /></span>
            <span className="bg-fuchsia-500 text-white p-1.5 rounded-full shadow-md"><MapPin className="w-4 h-4" /></span>
          </div>
        </div>
      </div>

      {/* Título Principal */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
        O seu próximo <span className="text-fuchsia-600">destino</span> pode estar aqui...
      </h1>

      {/* Subtítulo */}
      <p className="text-slate-600 text-lg mb-6 max-w-xl mx-auto">
        Aqui você encontra uma seleção de <span className="font-semibold text-slate-800">pacotes completos</span> para as suas férias!
      </p>

      {/* Bloco de Descrição do Serviço */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 max-w-2xl mx-auto mb-8 text-slate-600 leading-relaxed">
        No <strong className="text-slate-900">ConnectFlight</strong> você encontra pacotes de viagens nacionais e internacionais que incluem 
        <span className="text-slate-800 font-medium"> passagens aéreas</span>, <span className="text-slate-800 font-medium">hotéis</span>, <span className="text-slate-800 font-medium">café da manhã</span> e até <span className="text-slate-800 font-medium">seguro viagem</span> com <strong className="text-fuchsia-600">preços arrasadores</strong>!
      </div>

      {/* Chamada para Ação */}
      <p className="text-slate-500 text-sm mb-6">
        Se você ainda não tem um destino definido, confira nossa seção de ofertas.
      </p>

      <button 
        onClick={() => onNavigate('ofertas')}
        className="inline-flex items-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
      >
        Ver Ofertas <Tag className="w-4 h-4" />
      </button>

      {/* Destaques de Benefícios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
        <div className="bg-white p-5 rounded-xl border border-slate-100 flex items-start gap-3">
          <ShieldCheck className="w-6 h-6 text-fuchsia-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-slate-900">Seguro Incluso</h3>
            <p className="text-slate-500 text-xs mt-1">Viaje tranquilo com suporte médico e de bagagem total.</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-100 flex items-start gap-3">
          <Hotel className="w-6 h-6 text-fuchsia-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-slate-900">Hotéis Selecionados</h3>
            <p className="text-slate-500 text-xs mt-1">Hospedagens avaliadas com excelente localização.</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-100 flex items-start gap-3">
          <Coffee className="w-6 h-6 text-fuchsia-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-slate-900">Café Completo</h3>
            <p className="text-slate-500 text-xs mt-1">Comece seus dias de férias sem preocupações extras.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// TELAS ADICIONAIS DO RODAPÉ (Desenvolvidas para atender a atividade)
// -----------------------------------------------------------------------------

function DestinosPage() {
  const destinos = [
    { id: 1, nome: "Porto Seguro, Bahia", imagem: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=500&auto=format&fit=crop&q=60", preco: "R$ 1.299", dias: "5 dias / 4 noites" },
    { id: 2, nome: "Cancún, México", imagem: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=500&auto=format&fit=crop&q=60", preco: "R$ 3.850", dias: "7 dias / 6 noites" },
    { id: 3, nome: "Gramado, Rio Grande do Sul", imagem: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=500&auto=format&fit=crop&q=60", preco: "R$ 1.650", dias: "4 dias / 3 noites" },
    { id: 4, nome: "Paris, França", imagem: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=60", preco: "R$ 5.990", dias: "8 dias / 7 noites" }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Destinos Populares</h2>
        <p className="text-slate-500 text-sm">Explore os lugares mais procurados por nossos clientes</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinos.map((item) => (
          <div key={item.id} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <img src={item.imagem} alt={item.nome} className="w-full h-44 object-cover" />
            <div className="p-4">
              <div className="flex items-center gap-1 text-amber-500 text-xs mb-1">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span className="font-semibold text-slate-700">4.9</span>
              </div>
              <h3 className="font-semibold text-slate-800 text-base mb-1">{item.nome}</h3>
              <p className="text-xs text-slate-500 mb-3">{item.dias}</p>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <span className="text-xs text-slate-400">A partir de</span>
                <span className="font-bold text-fuchsia-600 text-base">{item.preco}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OfertasPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-slate-900">Pacotes em Promoção</h2>
        <p className="text-slate-500 text-sm">Aproveite nossos descontos exclusivos por tempo limitado</p>
      </div>

      <div className="space-y-4">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="bg-fuchsia-100 text-fuchsia-700 text-xs font-bold px-2.5 py-1 rounded-full uppercase">SUPER OFERTA</span>
            <h3 className="text-xl font-bold text-slate-800 mt-2">Pacote Nordeste Completo</h3>
            <p className="text-slate-500 text-sm mt-1">Passagem + Hotel 4 Estrelas + Café + Transfer</p>
          </div>
          <div className="text-right flex flex-col items-end">
            <span className="text-slate-400 line-through text-sm">R$ 2.400</span>
            <span className="text-2xl font-black text-fuchsia-600">R$ 1.799</span>
            <button className="mt-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors">
              Garantir Vaga
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full uppercase">ÚLTIMAS VAGAS</span>
            <h3 className="text-xl font-bold text-slate-800 mt-2">Fim de Semana em Buenos Aires</h3>
            <p className="text-slate-500 text-sm mt-1">Voo Direto + Hotel no Centro + Tour Guiado</p>
          </div>
          <div className="text-right flex flex-col items-end">
            <span className="text-slate-400 line-through text-sm">R$ 3.100</span>
            <span className="text-2xl font-black text-fuchsia-600">R$ 2.250</span>
            <button className="mt-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors">
              Garantir Vaga
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContatoPage() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Fale Conosco</h2>
        <p className="text-slate-500 text-sm mb-6">Dúvidas sobre os pacotes? Envie uma mensagem para nossa equipe.</p>

        {enviado ? (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-center gap-3">
            <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="text-sm font-medium">Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Nome Completo</label>
              <input required type="text" placeholder="Seu nome" className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">E-mail</label>
              <input required type="email" placeholder="seu@email.com" className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Mensagem</label>
              <textarea required rows="4" placeholder="Como podemos ajudar?" className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium py-2.5 rounded-lg text-sm transition-colors">
              Enviar Mensagem
            </button>
          </form>
        )}
      </div>
    </div>
  );
}