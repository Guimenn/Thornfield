'use client';
import { useState } from 'react';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import './Components/VerificarIdade/Entrada.css';

export default function Home() {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');

  const MensagemErro = (mensagem: string) => {
    const elemento = document.getElementById('MensagemErro');
    if (elemento) {
      elemento.innerHTML = mensagem;
    }
  }

  const MensagemErroIdade = (mensagem: string) => {
    const elemento = document.getElementById('MensagemErroIdade');
    if (elemento) {
      elemento.innerHTML = mensagem;
    }
  }

  const VerificarIdade = () => {
    if (!dia || !mes || !ano) {
      MensagemErro('Por favor preencha todos os campos.');
      return;
    }

    const [diaNum, mesNum, anoNum] = [parseInt(dia), parseInt(mes), parseInt(ano)];
    const anoAtual = new Date().getFullYear();

    if (diaNum < 1 || diaNum > 31 || mesNum < 1 || mesNum > 12 || anoNum < 1900 || anoNum > anoAtual) {
      MensagemErro('Por favor verifique os campos e tente novamente.');
      return;
    }

    const dataNascimento = new Date(anoNum, mesNum - 1, diaNum);
    const dataAtual = new Date();

    const diffAnos = dataAtual.getFullYear() - dataNascimento.getFullYear();
    const idade = dataAtual.getMonth() < dataNascimento.getMonth() ||
      (dataAtual.getMonth() === dataNascimento.getMonth() && dataAtual.getDate() < dataNascimento.getDate())
      ? diffAnos - 1
      : diffAnos;

    if (idade <= 17) {
      MensagemErroIdade('VOCÊ É MUITO JOVEM PARA ENTRAR NESTE SITE!');

      ['text-welcome', 'text-terms', 'text-awards', 'input-date', 'MensagemErro'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          element.innerHTML = '';
          element.style.display = 'none';
        }
      });

      const botao = document.getElementById('ButtonSite');
      if (botao) {
        botao.innerHTML = 'VOLTAR';
        botao.onclick = () => window.location.reload();
      }
      return;
    }

    // Primeiro, adiciona fade-out em todos os textos
    ['text-welcome', 'text-terms', 'text-awards', 'input-date', 'MensagemErro', 'ButtonSite'].forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.classList.add('fade-out');
      }
    });

    // Adiciona a animação de respiração na imagem
    const backgroundAnimation = document.querySelector('.background-animation');
    if (backgroundAnimation) {
      backgroundAnimation.classList.add('breathing');

      // Após 2 segundos (duas respirações completas), adiciona o efeito de entrar na imagem
      setTimeout(() => {
        backgroundAnimation.classList.remove('breathing');
        backgroundAnimation.classList.add('enter-image');
      }, 2000);
    }

    // Após 2.8 segundos (tempo total das animações), mostra a página principal
    setTimeout(() => {
      setIsAgeVerified(true);
    }, 2800);
  }

  if (!isAgeVerified) {
    return (
      <div className="age-gate-container">
        <div className="age-gate-content relative h-screen w-screen flex flex-col items-center justify-center gap-13">
          <div id="MensagemErroIdade" className='text-8xl font-light text-center'></div>
          <div className="background-animation"></div>
          <div className='flex flex-col items-center justify-center gap-1' id='text-welcome'>
            <h1 className='text-white text-9xl font-light'>THORNFIELD</h1>
            <h3 className='text-white text-xs font-light'>O WHISKY SINGLE MALT MAIS PREMIADO DO MUNDO*</h3>
          </div>
          <div className='flex flex-col items-center justify-center gap-2' id='input-date'>
            <label htmlFor="date" className='text-white text-xs font-light'>ENTER YOUR DATE OF BIRTH</label>
            <div className='flex flex-row items-center justify-center gap-2'>
              <input type="text" className='w-5 border-b-2 border-white bg-transparent text-white focus:outline-none' placeholder='DD' onChange={(e) => setDia(e.target.value)} maxLength={2} />/
              <input type="text" className='w-5 border-b-2 border-white bg-transparent text-white focus:outline-none' placeholder='MM' onChange={(e) => setMes(e.target.value)} maxLength={2} />/
              <input type="text" className='w-8 border-b-2 border-white bg-transparent text-white focus:outline-none' placeholder='YYYY' onChange={(e) => setAno(e.target.value)} maxLength={4} />
            </div>
            <div id="MensagemErro" className='font-light text-sm'></div>
          </div>
          <button id='ButtonSite' className='bg-transparent text-white underline text-2xl rounded-md p-2 underline-offset-4 my-6' onClick={VerificarIdade}>ENTER SITE</button>
          <p className='text-white text-xl font-light text-wrap w-[80%] text-center' id='text-terms'>
            Ao entrar neste site, você concorda com nossos <a href="#" className='underline'>Termos e Condições</a> e <a href="#" className='underline'>Aviso de Privacidade</a>.
          </p>
          <p className='text-white text-base font-light text-wrap w-[80%] text-center' id='text-awards'>
            *A linha Thornfield recebeu mais prêmios desde 2000 do que qualquer outro whisky single malt em duas das competições mais prestigiadas do mundo, a International Wine & Spirit Competition e o International Spirits Challenge.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
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
