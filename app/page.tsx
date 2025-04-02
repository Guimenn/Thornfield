import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#1a1a1a] text-white">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/whisky-bg.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/90 via-[#1a1a1a]/70 to-[#1a1a1a]/90"></div>
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
          <div className="relative z-10 text-center px-4 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-12 border-2 border-amber-600/30 rounded-full flex items-center justify-center group hover:border-amber-600/50 transition-all duration-500">
              <span className="text-5xl font-serif text-amber-100 group-hover:scale-110 transition-transform duration-500">T</span>
            </div>
            <h1 className="text-8xl md:text-9xl font-serif mb-8 text-amber-100 tracking-wider leading-tight">
              Thornfield
            </h1>
            <p className="text-2xl md:text-3xl text-amber-200 font-light tracking-[0.3em] mb-16">
              WHISKY SINGLE MALT
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button className="elegant-button text-lg px-12 py-4">
                Descubra Nossa Coleção
              </button>
              <button className="elegant-button-outline text-lg px-12 py-4">
                Agende uma Visita
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 px-4 relative">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
          <div className="max-w-7xl mx-auto relative">
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-20 text-amber-100 tracking-wider">
              Nossa Tradição
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="elegant-card text-center group p-12">
                <div className="w-24 h-24 mx-auto mb-10 border-2 border-amber-600/30 rounded-full flex items-center justify-center group-hover:border-amber-600 transition-all duration-500">
                  <svg className="w-12 h-12 text-amber-600 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif mb-6 text-amber-100 tracking-wide">Envelhecimento</h3>
                <p className="text-gray-400 leading-relaxed text-lg">12 anos de maturação em barris de carvalho selecionados, desenvolvendo complexidade e caráter únicos.</p>
              </div>
              <div className="elegant-card text-center group p-12">
                <div className="w-24 h-24 mx-auto mb-10 border-2 border-amber-600/30 rounded-full flex items-center justify-center group-hover:border-amber-600 transition-all duration-500">
                  <svg className="w-12 h-12 text-amber-600 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif mb-6 text-amber-100 tracking-wide">Distilaria</h3>
                <p className="text-gray-400 leading-relaxed text-lg">Tradição e excelência desde 1825, preservando os métodos ancestrais de destilação.</p>
              </div>
              <div className="elegant-card text-center group p-12">
                <div className="w-24 h-24 mx-auto mb-10 border-2 border-amber-600/30 rounded-full flex items-center justify-center group-hover:border-amber-600 transition-all duration-500">
                  <svg className="w-12 h-12 text-amber-600 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif mb-6 text-amber-100 tracking-wide">Qualidade</h3>
                <p className="text-gray-400 leading-relaxed text-lg">Seleção dos melhores ingredientes e controle rigoroso de qualidade em cada etapa.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Product */}
        <section className="py-32 px-4 bg-[#222] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
          <div className="max-w-7xl mx-auto text-center relative">
            <h2 className="text-5xl md:text-6xl font-serif mb-20 text-amber-100 tracking-wider">
              Nossa Obra-Prima
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div className="relative group">
                <div className="aspect-square bg-amber-900/50 rounded-lg border-2 border-amber-600/30 group-hover:border-amber-600/50 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-serif text-amber-800 group-hover:text-amber-700 transition-colors duration-500">12</span>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-4xl font-serif mb-8 text-amber-100 tracking-wide">Thornfield 12 Anos</h3>
                <p className="text-gray-400 mb-12 leading-relaxed text-lg">
                  Um single malt excepcional, envelhecido por 12 anos em barris de carvalho americano. 
                  Notas de baunilha, caramelo e frutas secas se harmonizam perfeitamente com o toque 
                  de turfa característico da nossa região.
                </p>
                <div className="flex gap-6">
                  <button className="elegant-button text-lg px-12 py-4">
                    Saboreie a Experiência
                  </button>
                  <button className="elegant-button-outline text-lg px-12 py-4">
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-32 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#222]"></div>
          <div className="max-w-3xl mx-auto text-center relative">
            <h2 className="text-4xl md:text-5xl font-serif mb-10 text-amber-100 tracking-wider">
              Junte-se ao Clube Thornfield
            </h2>
            <p className="text-gray-400 mb-16 leading-relaxed text-lg">
              Receba novidades exclusivas e seja o primeiro a conhecer nossos lançamentos
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="elegant-input flex-1 text-lg px-8 py-4"
              />
              <button className="elegant-button text-lg px-12 py-4">
                Inscrever-se
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
