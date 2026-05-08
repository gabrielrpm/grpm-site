"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Uso: <Testimonials testimonials={[{name: "Nome", role: "Cargo", company: "Empresa", text: "Depoimento", photo: "url"}, ...]} />

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  photo: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-zinc-50 p-8 md:p-12 rounded-2xl border border-zinc-100 shadow-md">
        <p className="text-lg md:text-xl text-zinc-700 italic mb-8 leading-relaxed">
          "{testimonials[current].text}"
        </p>
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              src={testimonials[current].photo}
              alt={testimonials[current].name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-bold text-zinc-900">{testimonials[current].name}</p>
            <p className="text-sm text-zinc-600">
              {testimonials[current].role} • {testimonials[current].company}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center hover:bg-zinc-800 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === current ? "bg-zinc-900 w-8" : "bg-zinc-300"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center hover:bg-zinc-800 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
