'use client';
import { useState } from 'react';
import AgeGate from './Components/VerificarIdade/page';


export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);


  return (
    <>
      {!showMainContent && (
        <AgeGate/>
      )}
      {showMainContent && (
        <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-24 dark:bg-gray-900">
          <h1>teste</h1>
        </main>
      )}
    </>
  );
}
