"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingBag, Search, Menu, X, User } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/products?category=women" className="text-[11px] tracking-[0.15em] uppercase text-black hover:opacity-60 transition-opacity">Эмэгтэй</Link>
            <Link href="/products?category=men" className="text-[11px] tracking-[0.15em] uppercase text-black hover:opacity-60 transition-opacity">Эрэгтэй</Link>
            <Link href="/zagvaruud" className="text-[11px] tracking-[0.15em] uppercase text-black hover:opacity-60 transition-opacity">Коллекц</Link>
          </nav>

          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-xl tracking-[0.3em] uppercase font-normal">MGLDFASHION</h1>
          </Link>

          <div className="flex items-center gap-6">
            <button className="hidden lg:block hover:opacity-60 transition-opacity"><Search className="h-4 w-4" /></button>
            <Link href="/auth/login" className="hidden lg:block hover:opacity-60 transition-opacity"><User className="h-4 w-4" /></Link>
            <Link href="/cart" className="relative hover:opacity-60 transition-opacity"><ShoppingBag className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-8 space-y-6">
            <Link href="/products" className="block text-sm tracking-[0.1em] uppercase" onClick={() => setIsMenuOpen(false)}>Бүх бараа</Link>
            <Link href="/products?category=women" className="block text-sm tracking-[0.1em] uppercase" onClick={() => setIsMenuOpen(false)}>Эмэгтэй</Link>
            <Link href="/products?category=men" className="block text-sm tracking-[0.1em] uppercase" onClick={() => setIsMenuOpen(false)}>Эрэгтэй</Link>
            <Link href="/zagvaruud" className="block text-sm tracking-[0.1em] uppercase" onClick={() => setIsMenuOpen(false)}>Коллекц</Link>
            <Link href="/products?category=accessories" className="block text-sm tracking-[0.1em] uppercase" onClick={() => setIsMenuOpen(false)}>Дагалдах</Link>
            <Link href="/products?category=shoes" className="block text-sm tracking-[0.1em] uppercase" onClick={() => setIsMenuOpen(false)}>Гутал</Link>
          </div>
        </div>
      )}
    </header>
  );
}
