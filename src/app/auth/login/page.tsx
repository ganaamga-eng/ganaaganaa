import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Header />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="w-full max-w-md px-6">
          <div className="text-center mb-12">
            <h1 className="text-2xl tracking-[0.2em] uppercase font-light mb-2">MGLDFASHION</h1>
            <p className="text-sm text-gray-400">Нэвтрэх</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-xs tracking-[0.1em] uppercase mb-2">И-мэйл</label>
              <input type="email" placeholder="tan@example.com" />
            </div>
            <div>
              <label className="block text-xs tracking-[0.1em] uppercase mb-2">Нууц үг</label>
              <input type="password" placeholder="••••••••" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-500"><input type="checkbox" />Сануулах</label>
              <Link href="/auth/forgot-password" className="text-gray-500 hover:text-black transition-colors">Нууц үгээ мартсан?</Link>
            </div>
            <button type="submit" className="btn-luxury w-full">Нэвтрэх</button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">Бүртгэлгүй?{" "}
              <Link href="/auth/register" className="text-black hover:opacity-60 transition-opacity border-b border-black">Бүртгүүлэх</Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
