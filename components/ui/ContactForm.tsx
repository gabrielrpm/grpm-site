"use client";
import { useState, FormEvent } from "react";

// Uso: <ContactForm onSubmit={(data) => console.log(data)} />

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }
    if (!formData.phone.trim()) newErrors.phone = "Telefone é obrigatório";
    if (!formData.message.trim()) newErrors.message = "Mensagem é obrigatória";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit?.(formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl border border-zinc-100 shadow-lg">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Nome *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition ${
              errors.name ? "border-red-500" : "border-zinc-300"
            }`}
            placeholder="Seu nome completo"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">E-mail *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition ${
              errors.email ? "border-red-500" : "border-zinc-300"
            }`}
            placeholder="seu@email.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-zinc-700 mb-2">Telefone *</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition ${
            errors.phone ? "border-red-500" : "border-zinc-300"
          }`}
          placeholder="(11) 99999-9999"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-zinc-700 mb-2">Mensagem *</label>
        <textarea
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition resize-none ${
            errors.message ? "border-red-500" : "border-zinc-300"
          }`}
          placeholder="Como podemos ajudar você?"
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="w-full md:w-auto px-8 py-3 bg-zinc-900 text-white font-semibold rounded-lg hover:bg-zinc-800 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Enviar Mensagem
      </button>
    </form>
  );
}
