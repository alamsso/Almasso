"use client";
import { useEffect, useState } from "react";

const BRAND_BLUE = "#0E4B9C";
const BRAND_ORANGE = "#FF8C1A";

const banners = [
  { eyebrow: "ALMASSO MARKETPLACE", title: "Get Hooked on Quality", description: "Discover quality products from trusted sellers in Somalia, Kenya and across Africa.", button: "Shop Now", bg: BRAND_BLUE, accent: BRAND_ORANGE, icon: "🛍️" },
  { eyebrow: "QUALITY YOU CAN TRUST", title: "Everything You Need in One Place", description: "Shop electronics, fashion, beauty, home essentials, groceries and more.", button: "Explore Products", bg: "#102A43", accent: BRAND_ORANGE, icon: "📦" },
  { eyebrow: "ALMASSO DELIVERY", title: "Shop Today. Get It Delivered.", description: "Simple shopping, secure checkout and reliable delivery built for modern Africa.", button: "Start Shopping", bg: BRAND_ORANGE, accent: BRAND_BLUE, icon: "🚚" },
];

const categories = [
  { name: "Phones & Tablets", icon: "📱", count: "1,240+ items" },
  { name: "Electronics", icon: "💻", count: "980+ items" },
  { name: "Fashion", icon: "👕", count: "2,400+ items" },
  { name: "Beauty & Perfumes", icon: "✨", count: "850+ items" },
  { name: "Home & Kitchen", icon: "🏠", count: "1,100+ items" },
  { name: "Food & Groceries", icon: "🛒", count: "760+ items" },
  { name: "Sports & Fitness", icon: "⚽", count: "540+ items" },
  { name: "Automotive", icon: "🚗", count: "430+ items" },
];

const products = [
  { name: "Premium Wireless Headphones", price: "KES 4,999", oldPrice: "KES 6,500", rating: "4.8", reviews: 126, category: "Electronics", badge: "SALE", icon: "🎧" },
  { name: "Classic Men's Sneakers", price: "KES 3,499", oldPrice: "KES 4,500", rating: "4.7", reviews: 89, category: "Fashion", badge: "20% OFF", icon: "👟" },
  { name: "Premium Eau de Parfum", price: "KES 4,900", oldPrice: "KES 6,500", rating: "4.9", reviews: 214, category: "Beauty", badge: "HOT", icon: "🧴" },
  { name: "Smart Watch Pro", price: "KES 5,999", oldPrice: "KES 7,500", rating: "4.6", reviews: 73, category: "Electronics", badge: "NEW", icon: "⌚" },
];

const values = [
  { icon: "✓", title: "Quality", text: "We focus on quality products and better shopping experiences." },
  { icon: "🔒", title: "Trust", text: "We work to create a safe and transparent marketplace." },
  { icon: "🤝", title: "Integrity", text: "We value honesty, fairness and responsible business." },
  { icon: "🚀", title: "Innovation", text: "We use technology to make African commerce easier." },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const timer = setInterval(() => { setCurrent((prev) => (prev + 1) % banners.length); }, 5000);
    return () => clearInterval(timer);
  }, []);
  const banner = banners[current];

  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#102A43]">
      <div className="bg-[#0E4B9C] text-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8"><p>Welcome to Almasso Marketplace — Get Hooked on Quality.</p><div className="flex items-center gap-4"><button>🇰🇪 Kenya</button><button>English</button></div></div></div>

      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-20 items-center gap-4 py-3">
            <a href="/" className="flex shrink-0 items-center gap-2"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0E4B9C] text-xl font-black text-white">A</div><div className="hidden sm:block"><div className="text-xl font-black tracking-tight text-[#0E4B9C]">ALMASSO</div><div className="text-[9px] font-semibold tracking-widest text-[#FF8C1A]">GET HOOKED ON QUALITY</div></div></a>
            <div className="relative flex-1"><input value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search products, brands and categories..." className="h-12 w-full rounded-xl border border-gray-200 bg-[#F7F9FC] pl-12 pr-24 text-sm outline-none focus:border-[#0E4B9C] focus:bg-white" /><span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400">⌕</span><button className="absolute right-1 top-1 h-10 rounded-lg bg-[#FF8C1A] px-5 text-sm font-bold text-white">Search</button></div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="relative min-h-[440px] transition-colors duration-700" style={{ backgroundColor: banner.bg }}>
          <div className="mx-auto grid min-h-[440px] max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:px-8">
            <div className="relative z-10 text-white">
              <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-widest">{banner.eyebrow}</div>
              <h1 className="max-w-2xl text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">{banner.title}</h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">{banner.description}</p>
              <div className="mt-8 flex flex-wrap gap-3"><button className="rounded-xl px-7 py-3.5 font-bold text-white shadow-lg" style={{ backgroundColor: banner.accent }}>{banner.button} →</button><button className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-bold text-white">View Categories</button></div>
            </div>
            <div className="hidden justify-center lg:flex"><div className="relative flex h-80 w-80 items-center justify-center rounded-[40px] bg-white/10 shadow-2xl"><div className="text-[150px]">{banner.icon}</div></div></div>
          </div>
          <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-2">{banners.map((_, index) => (<button key={index} onClick={() => setCurrent(index)} className={`h-2.5 rounded-full transition-all ${current === index? "w-9 bg-white" : "w-2.5 bg-white/40"}`} />))}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black">Shop by Category</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">{categories.map((c) => (<button key={c.name} className="rounded-2xl border border-gray-200 bg-white p-4 text-left hover:border-[#0E4B9C]"><div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F0F5FC] text-3xl">{c.icon}</div><h3 className="mt-4 text-sm font-bold">{c.name}</h3><p className="mt-1 text-[11px] text-gray-500">{c.count}</p></button>))}</div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black">Deals You'll Love</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.map((p) => (<article key={p.name} className="overflow-hidden rounded-2xl border border-gray-200 bg-white"><div className="relative flex h-56 items-center justify-center bg-[#F5F7FA]"><span className="text-8xl">{p.icon}</span><span className="absolute left-3 top-3 rounded-md bg-[#FF8C1A] px-2.5 py-1 text-[10px] font-black text-white">{p.badge}</span></div><div className="p-4"><p className="text-xs text-gray-500">{p.category}</p><h3 className="mt-1 text-sm font-bold">{p.name}</h3><div className="mt-3 flex gap-2"><span className="font-black text-[#0E4B9C]">{p.price}</span><span className="text-xs line-through text-gray-400">{p.oldPrice}</span></div><button className="mt-4 w-full rounded-xl bg-[#0E4B9C] py-3 text-sm font-bold text-white">Add to Cart</button></div></article>))}</div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-black">Our Core Values</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{values.map((v) => (<div key={v.title} className="rounded-2xl border border-gray-200 bg-white p-6"><div className="text-2xl">{v.icon}</div><h3 className="mt-3 font-bold">{v.title}</h3><p className="mt-2 text-sm text-gray-500">{v.text}</p></div>))}</div>
        </div>
      </section>

      {/* SOCIAL MEDIA FOOTER */}
      <footer className="bg-[#102A43] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-black text-[#0E4B9C]">A</div><div className="text-xl font-black">ALMASSO</div></div>
              <p className="mt-4 text-sm text-white/60">Get Hooked on Quality. Trusted across Somalia, Kenya & Africa.</p>
              <div className="mt-6 flex gap-3">
                <a href="https://facebook.com/almasso" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-[#1877F2]">f</a>
                <a href="https://instagram.com/almasso" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-pink-500">IG</a>
                <a href="https://tiktok.com/@almasso" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-black">♪</a>
                <a href="https://wa.me/252610000000" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]">W</a>
              </div>
            </div>
            <div><h4 className="font-bold mb-4">Quick Links</h4><ul className="space-y-2 text-sm text-white/60"><li>Shop All</li><li>Categories</li><li>Deals</li><li>Become Seller</li></ul></div>
            <div><h4 className="font-bold mb-4">Follow Us</h4><ul className="space-y-2 text-sm text-white/60"><li>Facebook: /almasso</li><li>Instagram: @almasso</li><li>TikTok: @almasso</li><li>WhatsApp: +252 61 0000000</li></ul></div>
            <div><h4 className="font-bold mb-4">Contact</h4><p className="text-sm text-white/60">Nairobi, Kenya<br/>Mogadishu, Somalia<br/>support@almasso.com</p><a href="https://wa.me/252610000000" target="_blank" className="mt-4 inline-block bg-[#FF8C1A] px-6 py-2.5 rounded-xl font-bold text-white">Chat on WhatsApp</a></div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">© 2026 ALMASSO Marketplace. All rights reserved.</div>
        </div>
      </footer>
      <a href="https://wa.me/252610000000" target="_blank" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl shadow-2xl">💬</a>
    </main>
  );
}