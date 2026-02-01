import type { Metadata, Viewport } from "next";
import localFont from "next/font/local"; // Importação necessária para fontes locais
import "./globals.css";

const plusJakartaSans = localFont({
  src: [
    {
      path: "./fonts/PlusJakartaSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PlusJakartaSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-plus-jakarta",
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: "#E11D48",
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
    <html lang="pt-br" className={plusJakartaSans.variable} suppressHydrationWarning>
      <body suppressHydrationWarning className="font-sans antialiased min-h-screen bg-white text-zinc-900">
        {children}
      </body>
    </html>
  );
}