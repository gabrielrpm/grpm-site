import Image from "next/image";

// Uso: <Partners logos={[{src: "url", alt: "Nome da empresa"}, ...]} title="Nossos Parceiros" />

interface Logo {
  src: string;
  alt: string;
}

interface PartnersProps {
  logos: Logo[];
  title?: string;
}

export default function Partners({ logos, title = "Nossos Parceiros" }: PartnersProps) {
  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold text-zinc-900 text-center mb-12">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="relative h-16 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition duration-300"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
