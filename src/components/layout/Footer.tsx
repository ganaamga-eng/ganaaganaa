import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h2 className="text-lg tracking-[0.2em] uppercase font-light">MGLDFASHION</h2>
            <p className="text-gray-400 text-sm leading-relaxed">Монголын тансаг зэрэглэлийн онлайн дэлгүүр</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs tracking-wider">IG</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs tracking-wider">FB</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs tracking-wider">YT</a>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.2em] uppercase mb-6 text-gray-400">Холбоосууд</h3>
            <ul className="space-y-3">
              {["Бүх бараа", "Эмэгтэй", "Эрэгтэй", "Дагалдах", "Гутал"].map((item) => (
                <li key={item}><Link href="/products" className="text-sm text-gray-300 hover:text-white transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.2em] uppercase mb-6 text-gray-400">Үйлчилгээ</h3>
            <ul className="space-y-3">
              {["Хүргэлт", "Буцаах", "Тусламж", "Хэмжээ"].map((item) => (
                <li key={item}><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.2em] uppercase mb-6 text-gray-400">Холбоо барих</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-300"><Phone className="h-3 w-3" /> +976 9911-2233</li>
              <li className="flex items-center gap-2 text-sm text-gray-300"><Mail className="h-3 w-3" /> info@mgldfashion.mn</li>
              <li className="flex items-start gap-2 text-sm text-gray-300"><MapPin className="h-3 w-3 mt-0.5" /> Улаанбаатар</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 2026 MGLDFASHION. Бүх эрх хуулиар хамгаалагдсан.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Нууцлал</Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Үйлчилгээний нөхцөл</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
