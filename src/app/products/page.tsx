import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SlidersHorizontal } from "lucide-react";

const products = [
  { id: 1, name: "Cashmere Coat", brand: "Max Mara", price: 4500000, category: "Эмэгтэй", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=500&fit=crop" },
  { id: 2, name: "Leather Jacket", brand: "AllSaints", price: 2800000, category: "Эрэгтэй", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop" },
  { id: 3, name: "Silk Dress", brand: "Theory", price: 1900000, category: "Эмэгтэй", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop" },
  { id: 4, name: "Wool Sweater", brand: "Vince", price: 890000, category: "Эрэгтэй", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop" },
  { id: 5, name: "Tailored Blazer", brand: "Blazé Milano", price: 3200000, category: "Эмэгтэй", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop" },
  { id: 6, name: "Linen Shirt", brand: "Loro Piana", price: 1200000, category: "Эрэгтэй", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop" },
  { id: 7, name: "Cashmere Scarf", brand: "Acne Studios", price: 650000, category: "Дагалдах", image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=500&fit=crop" },
  { id: 8, name: "Cotton Trousers", brand: "Incotex", price: 980000, category: "Эрэгтэй", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop" },
];

const filters = ["Бүгд", "Эмэгтэй", "Эрэгтэй", "Дагалдах", "Гутал"];

function formatPrice(price: number) {
  return new Intl.NumberFormat("mn-MN").format(price) + "₮";
}

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-12">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h1 className="text-3xl font-serif mb-2">Бүх Бараа</h1>
              <p className="text-sm text-gray-400">{products.length} бараа</p>
            </div>
            <button className="flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-gray-500 hover:text-black transition-colors">
              <SlidersHorizontal className="h-4 w-4" />Шүүлтүүр
            </button>
          </div>

          <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <button key={filter} className="px-4 py-2 text-xs tracking-[0.1em] uppercase border border-gray-200 hover:border-black transition-colors whitespace-nowrap">{filter}</button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 mb-4">
                  <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-gray-400">{product.brand}</p>
                  <h3 className="text-sm font-medium group-hover:opacity-60 transition-opacity">{product.name}</h3>
                  <p className="text-sm">{formatPrice(product.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
