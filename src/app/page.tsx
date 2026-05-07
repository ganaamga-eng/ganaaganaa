import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Truck, Shield, RotateCcw, Star } from "lucide-react";

const heroProducts = [
  { id: 1, name: "Cashmere Coat", brand: "Max Mara", price: 4500000, image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop" },
  { id: 2, name: "Leather Jacket", brand: "AllSaints", price: 2800000, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop" },
  { id: 3, name: "Silk Dress", brand: "Theory", price: 1900000, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop" },
  { id: 4, name: "Wool Sweater", brand: "Vince", price: 890000, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop" },
];

const newArrivals = [
  { id: 5, name: "Tailored Blazer", brand: "Blazé Milano", price: 3200000, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop" },
  { id: 6, name: "Pleated Skirt", brand: "Jil Sander", price: 1500000, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj4?w=400&h=500&fit=crop" },
  { id: 7, name: "Linen Shirt", brand: "Loro Piana", price: 1200000, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop" },
  { id: 8, name: "Cashmere Scarf", brand: "Acne Studios", price: 650000, image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=500&fit=crop" },
  { id: 9, name: "Cotton Trousers", brand: "Incotex", price: 980000, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop" },
  { id: 10, name: "Merino Polo", brand: "John Smedley", price: 750000, image: "https://images.unsplash.com/photo-1625910513413-5fc4e5e6727b?w=400&h=500&fit=crop" },
];

const brands = ["Max Mara", "Theory", "Vince", "Jil Sander", "Loro Piana", "Acne Studios", "Blazé Milano", "Incotex"];

function formatPrice(price: number) {
  return new Intl.NumberFormat("mn-MN").format(price) + "₮";
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#FFFFFF', color: '#000000' }}>
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[85vh] min-h-[700px]">
          <Image src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&h=1080&fit=crop" alt="New Collection" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-2xl px-6">
              <p className="text-xs tracking-[0.3em] uppercase text-white mb-4">Шинэ Коллекц 2026</p>
              <h1 className="text-5xl md:text-7xl text-white mb-6 font-serif font-light tracking-wide">Тансаг Хавар</h1>
              <p className="text-white/90 text-lg mb-10 font-light">Шинэ сезоны шилдэг брэндүүд</p>
              <Link href="/products" className="btn-luxury inline-block">Дэлгүүрээр зочлох</Link>
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="py-12 border-b border-gray-100">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
              {brands.map((brand) => (
                <span key={brand} className="text-[11px] tracking-[0.2em] uppercase text-gray-400 hover:text-black transition-colors cursor-pointer">{brand}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className="py-16">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-serif mb-2">Онцлох Бараа</h2>
              <Link href="/products" className="text-xs tracking-[0.15em] uppercase text-gray-500 hover:text-black transition-colors border-b border-transparent hover:border-black pb-0.5">Бүгдийг харах</Link>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {heroProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 mb-4">
                    <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] tracking-[0.15em] uppercase text-gray-400">{product.brand}</p>
                    <h3 className="text-sm font-medium text-black group-hover:opacity-60 transition-opacity">{product.name}</h3>
                    <p className="text-sm text-black">{formatPrice(product.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Promo */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-[500px] overflow-hidden group">
                <Image src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=1000&fit=crop" alt="Women" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-white mb-2">Шинэ Ирсэн</p>
                  <h3 className="text-2xl text-white font-serif mb-4">Эмэгтэй Коллекц</h3>
                  <Link href="/products?category=women" className="text-xs tracking-[0.15em] uppercase text-white border-b border-white pb-1 hover:opacity-70 transition-opacity">Харах</Link>
                </div>
              </div>
              <div className="relative h-[500px] overflow-hidden group">
                <Image src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&h=1000&fit=crop" alt="Men" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-white mb-2">Шинэ Ирсэн</p>
                  <h3 className="text-2xl text-white font-serif mb-4">Эрэгтэй Коллекц</h3>
                  <Link href="/products?category=men" className="text-xs tracking-[0.15em] uppercase text-white border-b border-white pb-1 hover:opacity-70 transition-opacity">Харах</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-16">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-2xl font-serif mb-2">Шинэ Ирсэн</h2>
                <p className="text-sm text-gray-500">Энэ долоо хоногийн шинэ бараа</p>
              </div>
              <Link href="/products?sort=new" className="hidden md:block text-xs tracking-[0.15em] uppercase text-gray-500 hover:text-black transition-colors border-b border-transparent hover:border-black pb-0.5">Бүгдийг харах</Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {newArrivals.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 mb-3">
                    <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] tracking-[0.15em] uppercase text-gray-400">{product.brand}</p>
                    <h3 className="text-xs font-medium text-black group-hover:opacity-60 transition-opacity line-clamp-1">{product.name}</h3>
                    <p className="text-xs text-black">{formatPrice(product.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 border-t border-gray-100">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Truck, title: "Үнэгүй Хүргэлт", desc: "₮500,000+" },
                { icon: RotateCcw, title: "Амархан Буцаах", desc: "30 хоног" },
                { icon: Shield, title: "Баталгаат", desc: "100% жинхэнэ" },
                { icon: Star, title: "VIP Үйлчилгээ", desc: "Онцгой санал" },
              ].map((benefit, i) => (
                <div key={i} className="text-center">
                  <benefit.icon className="h-6 w-6 mx-auto mb-3 text-gray-400" />
                  <h3 className="text-xs tracking-[0.1em] uppercase mb-1">{benefit.title}</h3>
                  <p className="text-xs text-gray-400">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
