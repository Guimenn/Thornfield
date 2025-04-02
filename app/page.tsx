'use client';
import { useState, useEffect } from 'react';
import AgeGate from './Components/VerificarIdade/page';
import Image from 'next/image';

export default function Home() {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Verifica se a idade foi verificada no localStorage
    // Comentado para desenvolvimento
    // const ageVerified = localStorage.getItem('ageVerified') === 'true';
    // setIsAgeVerified(ageVerified);
    setLoading(false);

    // Adiciona um listener para o evento personalizado
    const handleAgeVerified = () => {
      // Adiciona um pequeno atraso antes de transicionar para garantir uma transição suave
      setFadeOut(true);
      setTimeout(() => {
        setIsAgeVerified(true);
      }, 500); // Espera a animação de fade-out terminar
    };

    window.addEventListener('ageVerified', handleAgeVerified);

    // Cleanup
    return () => {
      window.removeEventListener('ageVerified', handleAgeVerified);
    };
  }, []);

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center bg-black">Carregando...</div>;
  }

  return (
    <div className="bg-black min-h-screen">
      {!isAgeVerified && <AgeGate />}
      {isAgeVerified && (
        <main className="bg-black text-white min-h-screen">
          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
              <h1 className="text-6xl md:text-8xl font-light mb-6">THORNFIELD</h1>
              <p className="text-xl md:text-2xl font-light mb-8">O WHISKY SINGLE MALT MAIS PREMIADO DO MUNDO</p>
              <button className="px-8 py-3 border border-white hover:bg-white hover:text-black transition duration-300">
                DESCUBRA A COLEÇÃO
              </button>
            </div>
            <div className="absolute inset-0 z-0">
              <div className="w-full h-full bg-[url('/whisky-bg.jpg')] bg-cover bg-center"></div>
            </div>
          </section>

          {/* Nossa História */}
          <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-light mb-6">NOSSA HISTÓRIA</h2>
                <p className="text-lg font-light mb-6">
                  Fundada em 1826, a destilaria Thornfield tem se dedicado a produzir o melhor whisky single malt do mundo. 
                  Situada nas terras altas da Escócia, nossa destilaria combina tradição centenária com inovação constante.
                </p>
                <p className="text-lg font-light mb-6">
                  Cada garrafa de Thornfield é resultado de um processo artesanal que respeita o tempo e a natureza, 
                  usando apenas os melhores ingredientes cultivados em nossas próprias terras.
                </p>
                <button className="underline text-xl font-light">SAIBA MAIS</button>
              </div>
              <div className="relative h-[500px]">
                <div className="w-full h-full bg-[url('/distillery.jpg')] bg-cover bg-center"></div>
              </div>
            </div>
          </section>

          {/* Nossa Coleção */}
          <section className="py-20 px-4 bg-zinc-900">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-light mb-12 text-center">NOSSA COLEÇÃO</h2>
              <div className="grid md:grid-cols-3 gap-10">
                {/* Produto 1 */}
                <div className="text-center">
                  <div className="relative h-[400px] mb-6">
                    <div className="w-full h-full bg-[url('/bottle1.jpg')] bg-cover bg-center"></div>
                  </div>
                  <h3 className="text-2xl font-light mb-2">THORNFIELD 12 ANOS</h3>
                  <p className="text-gray-400 mb-4">Single Malt Whisky</p>
                  <button className="underline text-lg font-light">VER DETALHES</button>
                </div>
                
                {/* Produto 2 */}
                <div className="text-center">
                  <div className="relative h-[400px] mb-6">
                    <div className="w-full h-full bg-[url('/bottle2.jpg')] bg-cover bg-center"></div>
                  </div>
                  <h3 className="text-2xl font-light mb-2">THORNFIELD 18 ANOS</h3>
                  <p className="text-gray-400 mb-4">Single Malt Whisky</p>
                  <button className="underline text-lg font-light">VER DETALHES</button>
                </div>
                
                {/* Produto 3 */}
                <div className="text-center">
                  <div className="relative h-[400px] mb-6">
                    <div className="w-full h-full bg-[url('/bottle3.jpg')] bg-cover bg-center"></div>
                  </div>
                  <h3 className="text-2xl font-light mb-2">THORNFIELD RESERVE</h3>
                  <p className="text-gray-400 mb-4">Single Malt Whisky</p>
                  <button className="underline text-lg font-light">VER DETALHES</button>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-10 bg-black text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Thornfield. Todos os direitos reservados.</p>
            <p className="text-gray-500 mt-2 text-sm">Beba com moderação. A venda de bebidas alcoólicas é proibida para menores de 18 anos.</p>
          </footer>
        </main>
      )}
    </div>
  );
}
