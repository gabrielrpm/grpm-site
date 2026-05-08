// Uso: <Map embedUrl="https://www.google.com/maps/embed?pb=..." />
// Obter URL: Google Maps > Compartilhar > Incorporar mapa > Copiar HTML

interface MapProps {
  embedUrl: string;
}

export default function Map({ embedUrl }: MapProps) {
  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg border border-zinc-200">
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
