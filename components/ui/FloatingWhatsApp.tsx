"use client";
import { MessageCircle } from "lucide-react";

// Uso: <FloatingWhatsApp phone="5511999999999" message="Olá! Gostaria de mais informações." />

interface FloatingWhatsAppProps {
  phone: string;
  message?: string;
}

export default function FloatingWhatsApp({
  phone,
  message = "Olá! Gostaria de mais informações.",
}: FloatingWhatsAppProps) {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
