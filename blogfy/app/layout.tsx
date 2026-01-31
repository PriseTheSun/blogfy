import type { Metadata, Viewport } from "next";
import "./globals.css";

// Configuração de Viewport para performance mobile
export const viewport: Viewport = {
  themeColor: "#E11D48", // Cor da EasyJur para a barra do navegador mobile
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Blogfy | Inteligência Jurídica EasyJur",
  description: "O portal de conteúdo jurídico de alta performance construído com Next.js e Tailwind CSS.",
  icons: {
    icon: "/favicon.ico",
    apple: "/brand/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className="font-sans antialiased min-h-screen bg-white text-zinc-900"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}