"use client";

import { useEffect, useState } from "react";

export default function TrainingPage() {
  const [isLoading, setIsLoading] = useState(true);

  // We add a tiny delay to show the loading state, blending the iframe loading experience.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full relative bg-zinc-900 overflow-hidden" style={{ minHeight: 'calc(100vh - 64px)' }}>
      {isLoading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-zinc-900 text-white">
          <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <h2 className="text-xl font-bold tracking-wide">Cargando Simulador...</h2>
          <p className="text-zinc-400 mt-2">Iniciando entorno de entrenamiento TobIA</p>
        </div>
      )}
      <iframe 
        src="/training-app/index.html" 
        className={`w-full h-full border-0 absolute inset-0 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        allow="microphone; camera"
      />
    </div>
  );
}
