'use client';
import Link from 'next/link';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    const limparCookies = () => {
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
    };

    // Limpa os cookies imediatamente
    limparCookies();

    // Configura um intervalo para limpar os cookies a cada 1 minuto
    const intervalo = setInterval(limparCookies, 60000);

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(intervalo);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-4 py-24">
      <div className="text-center">
        <h1 className="text-white text-9xl font-light mb-4">404</h1>
        <h2 className="text-white text-2xl font-light mb-8">Página não encontrada</h2>
        <p className="text-white text-base font-light mb-8">
          Desculpe, a página que você está procurando não existe.
        </p>
        <Link 
          href="/" 
          className="bg-transparent text-white underline text-2xl rounded-md p-2 underline-offset-4 hover:opacity-80 transition-opacity"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </main>
  );
} 