import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Star, Truck, Shield, RotateCcw } from "lucide-react";

function formatPrice(price: number) {
  return new Intl.NumberFormat("mn-MN").format(price) + "₮";
}

export default function ProductDetailPage() {
  const product = {
    id: 1, name: "Cashmere Coat", brand: "Max Mara", price: 4500000,
    description: "Жинхэнэ кашемир материалаар хийсэн, тансаг зэрэглэлийн пальто.",
    images: ["https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop"],
    sizes: ["S", "M", "L", "XL"], inStock: true,
  };

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-12">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-black transition-colors">Нүүр</Link><span>/</span>
            <Link href="/products" className="hover:text-black transition-colors">Бүх бараа</Link><span>/</span>
            <span className="text-black">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative aspect-[3/4] bg-gray-50">
              <Image src={product.images[0]} alt={product.name} fill className="object-cover" priority />
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2">{product.brand}</p>
                <h1 className="text-3xl font-serif mb-4">{product.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="h-4 w-4 fill-black text-black" />)}
                  <span className="text-sm text-gray-500">(12)</span>
                </div>
                <p className="text-2xl">{formatPrice(product.price)}</p>
              </div>

              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              <div>
                <p className="text-xs tracking-[0.1em] uppercase mb-3">Хэмжээ</p>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button key={size} className="w-12 h-12 border border-gray-200 hover:border-black transition-colors text-sm">{size}</button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="btn-luxury flex-1">Сагсанд нэмэх</button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
                {[
                  { icon: Truck, text: "Үнэгүй хүргэлт" },
                  { icon: Shield, text: "Баталгаат" },
                  { icon: RotateCcw, text: "30 хоног" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-2">
                    <item.icon className="h-5 w-5 text-gray-400" />
                    <span className="text-xs text-gray-500">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
