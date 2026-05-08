import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GRPM Global Marketing | High-End Digital Solutions",
  description: "Engenharia de software e marketing de performance para marcas exclusivas. Desenvolvimento full-stack, ecossistemas digitais de alta conversão e otimização de performance.",
  keywords: "desenvolvimento web, marketing digital, sites profissionais, SEO, UI/UX design, Next.js, React",
  authors: [{ name: "GRPM Global Marketing" }],
  openGraph: {
    title: "GRPM Global Marketing | High-End Digital Solutions",
    description: "Soluções digitais desenvolvidas com precisão técnica e escala global via LLC americana.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
