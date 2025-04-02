import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thornfield",
  description: "Thornfield Whisky",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Verifica se a página atual é a de verificação de idade
  const isAgeGatePage = typeof window !== 'undefined' && window.location.pathname === '/verificaridade';

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {!isAgeGatePage && <Navbar />} {/* Renderiza a Navbar apenas se não for a página de verificação de idade */}
        {children}
      </body>
    </html>
  );
}
