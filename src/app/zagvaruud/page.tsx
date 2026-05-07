import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

const styles = [
  { id: 1, title: "Классик Элегант", description: "Уламжлалт загварын орчин үеийн тайлбар", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop", items: 12 },
  { id: 2, title: "Орчин Үеийн", description: "Дахин тодорхойлогдсон тансаг зэрэглэл", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop", items: 8 },
  { id: 3, title: "Вечерний", description: "Онцгой үдэшлэгт зориулсан", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=800&fit=crop", items: 15 },
  { id: 4, title: "Бизнес", description: "Ажлын өдөрт зориулсан", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop", items: 10 },
  { id: 5, title: "Зуны", description: "Хөнгөн, тансаг зуны загвар", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop", items: 18 },
  { id: 6, title: "Өвлийн", description: "Дулаахан бас тансаг", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop", items: 14 },
];

export default function LuxuryStylesPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Header />
      <main className="flex-1">
        <section className="relative h-[70vh] min-h-[500px] flex items-center">
          <Image src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1920&h=1080&fit=crop" alt="Luxury Styles" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12">
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.3em] uppercase text-white mb-4">Lookbook 2026</p>
              <h1 className="text-5xl md:text-7xl text-white mb-6 font-serif font-light">Тансаг Загварууд</h1>
              <p className="text-white/90 text-lg mb-10">2026 оны шилдэг загварууд, хослолууд</p>
              <Link href="#collections" className="btn-luxury inline-block">Коллекц үзэх</Link>
            </div>
          </div>
        </section>

        <section id="collections" className="py-20">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-2xl font-serif mb-2">Загварын Коллекц</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {styles.map((style) => (
                <Link key={style.id} href={`/zagvaruud/${style.id}`} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden mb-4">
                    <Image src={style.image} alt={style.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white font-medium text-xl mb-2">{style.title}</h3>
                      <p className="text-white/70 text-sm mb-2">{style.description}</p>
                      <p className="text-white/50 text-xs">{style.items} бараа</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
