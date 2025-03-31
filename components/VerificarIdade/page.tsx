'use client';
import { useState, useEffect } from 'react';
import './Entrada.css';

interface AgeGateProps {
    onAgeVerified: () => void;
}

export default function AgeGate({ onAgeVerified }: AgeGateProps) {
    const [dia, setDia] = useState('');
    const [mes, setMes] = useState('');
    const [ano, setAno] = useState('');

    // Verifica se já existe idade salva nos cookies
    useEffect(() => {
        const idadeVerificada = document.cookie.split('; ').find(row => row.startsWith('idadeVerificada='));
        if (idadeVerificada) {
            onAgeVerified();
        }
    }, [onAgeVerified]);

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

        // Salva a idade nos cookies (expira em 1 minuto)
        const dataExpiracao = new Date();
        dataExpiracao.setMinutes(dataExpiracao.getMinutes() + 1);
        document.cookie = `idadeVerificada=true; expires=${dataExpiracao.toUTCString()}; path=/`;

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
            const container = document.querySelector('.age-gate-container');
            if (container) {
                container.classList.add('fade-out');
                // Espera o fade-out terminar antes de mostrar a página principal
                setTimeout(() => {
                    onAgeVerified();
                }, 500);
            }
        }, 2800);
    }

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
                    Você deve ter cookies habilitados para usar este site. Para mais informações sobre como excluir ou controlar cookies, visite www.aboutcookies.org. Ao entrar neste site, você concorda <br />com nossos <a href="#" className='underline'>Termos e Condições</a> e <a href="#" className='underline'>Aviso de Privacidade e Cookies.</a>
                </p>
                <p className='text-white text-base font-light text-wrap w-[80%] text-center' id='text-awards'>
                    *A linha Thornfield recebeu mais prêmios desde 2000 do que qualquer outro whisky single malt em duas das competições mais prestigiadas do mundo, a International Wine & Spirit Competition e o International Spirits Challenge.
                </p>
            </div>
        </div>
    )
} 