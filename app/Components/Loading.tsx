'use client';
import React, { useEffect, useState } from 'react';

interface LoadingProps {
  message?: string;
}

export default function Loading({ message = 'Carregando' }: LoadingProps) {
  const [dots, setDots] = useState('');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return '';
        return prev + '.';
      });
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      <div className="relative w-32 h-32 mb-8">
        {/* Logo animado */}
        <div className="absolute inset-0 bg-[url('/cabra.png')] bg-contain bg-center bg-no-repeat animate-pulse"></div>
      </div>
      
      <div className="relative">
        <h2 className="text-2xl font-light text-white">{message}{dots}</h2>
        <div className="mt-4 h-1 w-48 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-amber-600 animate-progress"></div>
        </div>
      </div>
    </div>
  );
}

// Adicione esta animação ao seu globals.css
// @keyframes progress {
//   0% { width: 0; }
//   50% { width: 100%; }
//   100% { width: 0; }
// }
// 
// .animate-progress {
//   animation: progress 2s ease-in-out infinite;
// } 