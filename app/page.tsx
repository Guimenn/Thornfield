'use client';
import { useState } from 'react';
import AgeGate from '../components/VerificarIdade/page';
import { DarkThemeToggle } from "flowbite-react";
import Image from "next/image";

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);


  return (
    <>
      {!showMainContent && (
        <AgeGate onAgeVerified={() => setShowMainContent(true)} />
      )}
      {showMainContent && (
        <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-24 dark:bg-gray-900">
          <h1>teste</h1>
        </main>
      )}
    </>
  );
}
