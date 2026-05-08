"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Uso: <FAQ items={[{question: "Pergunta?", answer: "Resposta"}, ...]} />

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-50 transition"
          >
            <span className="font-semibold text-zinc-900">{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-zinc-600 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-zinc-600 leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
