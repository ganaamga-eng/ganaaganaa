import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Header />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="w-full max-w-md px-6">
          <div className="text-center mb-12">
            <h1 className="text-2xl tracking-[0.2em] uppercase font-light mb-2">MGLDFASHION</h1>
            <p className="text-sm text-gray-400">Бүртгүүлэх</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-xs tracking-[0.1em] uppercase mb-2">Овог</label><input type="text" placeholder="Овог" /></div>
              <div><label className="block text-xs tracking-[0.1em] uppercase mb-2">Нэр</label><input type="text" placeholder="Нэр" /></div>
            </div>
            <div><label className="block text-xs tracking-[0.1em] uppercase mb-2">И-мэйл</label><input type="email" placeholder="tan@example.com" /></div>
            <div><label className="block text-xs tracking-[0.1em] uppercase mb-2">Утас</label><input type="tel" placeholder="+976" /></div>
            <div><label className="block text-xs tracking-[0.1em] uppercase mb-2">Нууц үг</label><input type="password" placeholder="••••••••" /></div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-sm text-gray-500">Би{" "}
                <Link href="/terms" className="text-black border-b border-black">үйлчилгээний нөхцөл</Link>-ийг зөвшөөрч байна
              </span>
            </div>
            <button type="submit" className="btn-luxury w-full">Бүртгүүлэх</button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">Бүртгэлтэй?{" "}
              <Link href="/auth/login" className="text-black hover:opacity-60 transition-opacity border-b border-black">Нэвтрэх</Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
