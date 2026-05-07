import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Minus, Plus, Trash2 } from "lucide-react";

const cartItems = [
  { id: 1, name: "Cashmere Coat", brand: "Max Mara", price: 4500000, quantity: 1, image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=200&h=250&fit=crop" },
  { id: 2, name: "Leather Jacket", brand: "AllSaints", price: 2800000, quantity: 1, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&h=250&fit=crop" },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("mn-MN").format(price) + "₮";
}

export default function CartPage() {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-12">
          <h1 className="text-3xl font-serif mb-8">Сагс</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="border-t border-gray-100">
                {cartItems.map((item) => (
                  <div key={item.id} className="py-6 border-b border-gray-100 flex gap-6">
                    <div className="relative w-24 h-32 bg-gray-50 flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-[10px] tracking-[0.15em] uppercase text-gray-400 mb-1">{item.brand}</p>
                        <h3 className="text-sm font-medium">{item.name}</h3>
                        <p className="text-sm mt-1">{formatPrice(item.price)}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button className="w-8 h-8 border border-gray-200 flex items-center justify-center hover:border-black transition-colors"><Minus className="h-3 w-3" /></button>
                          <span className="text-sm w-8 text-center">{item.quantity}</span>
                          <button className="w-8 h-8 border border-gray-200 flex items-center justify-center hover:border-black transition-colors"><Plus className="h-3 w-3" /></button>
                        </div>
                        <button className="text-gray-400 hover:text-black transition-colors"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-8 sticky top-24">
                <h2 className="text-lg font-serif mb-6">Захиалгын дүн</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm"><span className="text-gray-500">Дүн</span><span>{formatPrice(total)}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-gray-500">Хүргэлт</span><span>Үнэгүй</span></div>
                  <div className="h-px bg-gray-200" />
                  <div className="flex justify-between font-medium"><span>Нийт</span><span>{formatPrice(total)}</span></div>
                </div>
                <Link href="/checkout" className="btn-luxury block text-center">Захиалах</Link>
                <Link href="/products" className="block text-center text-xs tracking-[0.1em] uppercase text-gray-500 hover:text-black transition-colors mt-4">Дэлгүүрээр зочлох</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
