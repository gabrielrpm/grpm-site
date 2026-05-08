"use client";
import { useEffect, useRef, useState } from "react";

// Uso: <StatsCounter stats={[{number: "500", label: "Clientes", suffix: "+"}, {number: "10", label: "Anos", suffix: "+"}]} />

interface Stat {
  number: string;
  label: string;
  suffix?: string;
}

interface StatsCounterProps {
  stats: Stat[];
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <p className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2">
            {isVisible && stat.number}
            {stat.suffix}
          </p>
          <p className="text-zinc-600 font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
