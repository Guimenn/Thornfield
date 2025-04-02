'use client';
import { useState, useEffect } from 'react';
import Navbar from "./Navbar/Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Comentado para desenvolvimento
    // const ageVerified = localStorage.getItem('ageVerified') === 'true';
    // setIsAgeVerified(ageVerified);

    // Adiciona um listener para o evento personalizado
    const handleAgeVerified = () => {
      setIsAgeVerified(true);
    };

    window.addEventListener('ageVerified', handleAgeVerified);

    // Cleanup
    return () => {
      window.removeEventListener('ageVerified', handleAgeVerified);
    };
  }, []);

  return (
    <>
      {isClient && isAgeVerified && <Navbar />}
      {children}
    </>
  );
} 