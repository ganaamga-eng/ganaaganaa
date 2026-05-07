import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MGLDFASHION - Тансаг Зэрэглэлийн Хувцас",
  description: "MGLDFASHION - Монголын тансаг зэрэглэлийн онлайн дэлгүүр",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <head>
        <style>{"html,body{background-color:#FFFFFF!important;color:#000000!important;margin:0;padding:0}"}</style>
      </head>
      <body className="min-h-full flex flex-col" style={{ backgroundColor: '#FFFFFF', color: '#000000' }}>
        {children}
      </body>
    </html>
  );
}
