import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function formatPrice(price: number) {
  return new Intl.NumberFormat("mn-MN").format(price) + "₮";
}

export default function CheckoutPage() {
  const total = 7300000;

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-12">
          <h1 className="text-3xl font-serif mb-12">Тооцоо хийх</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <section>
                <h2 className="text-sm tracking-[0.1em] uppercase mb-6">Холбоо барих</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Овог" />
                  <input type="text" placeholder="Нэр" />
                  <input type="email" placeholder="И-мэйл" className="col-span-2" />
                  <input type="tel" placeholder="Утас" className="col-span-2" />
                </div>
              </section>

              <section>
                <h2 className="text-sm tracking-[0.1em] uppercase mb-6">Хүргэлтийн хаяг</h2>
                <div className="space-y-4">
                  <input type="text" placeholder="Хот" />
                  <input type="text" placeholder="Дүүрэг" />
                  <input type="text" placeholder="Хороо" />
                  <textarea placeholder="Дэлгэрэнгүй хаяг" rows={3} className="resize-none" />
                </div>
              </section>

              <section>
                <h2 className="text-sm tracking-[0.1em] uppercase mb-6">Төлбөр</h2>
                <div className="grid grid-cols-2 gap-3">
                  {["QPay", "Social Pay", "Голомт", "Хаан", "Төрийн", "Visa"].map((method) => (
                    <button key={method} className="py-3 border border-gray-200 text-xs tracking-[0.1em] uppercase hover:border-black transition-colors">{method}</button>
                  ))}
                </div>
              </section>
            </div>

            <div>
              <div className="bg-gray-50 p-8 sticky top-24">
                <h2 className="text-lg font-serif mb-6">Захиалга</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm"><span className="text-gray-500">Cashmere Coat x1</span><span>{formatPrice(4500000)}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-gray-500">Leather Jacket x1</span><span>{formatPrice(2800000)}</span></div>
                  <div className="h-px bg-gray-200" />
                  <div className="flex justify-between text-sm"><span className="text-gray-500">Хүргэлт</span><span>Үнэгүй</span></div>
                  <div className="h-px bg-gray-200" />
                  <div className="flex justify-between font-medium"><span>Нийт</span><span>{formatPrice(total)}</span></div>
                </div>
                <button className="btn-luxury w-full">Төлөх</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
