"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

// Uso: <CookieBanner /> - adicionar no layout.tsx

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 text-white p-4 md:p-6 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm md:text-base text-zinc-300">
          Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
          <a href="#" className="underline hover:text-white">
            Política de Privacidade
          </a>
          .
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={accept}
            className="px-6 py-2 bg-white text-zinc-900 font-semibold rounded-lg hover:bg-zinc-100 transition whitespace-nowrap"
          >
            Aceitar
          </button>
          <button
            onClick={accept}
            className="w-8 h-8 flex items-center justify-center hover:bg-zinc-800 rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
