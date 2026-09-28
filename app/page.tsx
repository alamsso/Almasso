"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const categories = [
  { name: "Fashion", icon: "👕", count: "1,240+ Products" },
  { name: "Beauty", icon: "💄", count: "860+ Products" },
  { name: "Electronics", icon: "📱", count: "1,120+ Products" },
  { name: "Home & Living", icon: "🏠", count: "940+ Products" },
  { name: "Groceries", icon: "🛒", count: "760+ Products" },
  { name: "Perfumes", icon: "🌸", count: "430+ Products" },
  { name: "Kids", icon: "🧸", count: "680+ Products" },
  { name: "Sports", icon: "⚽", count: "520+ Products" },
];

const products = [
  { id: 1, name: "Armaf Club De Nuit Intense Man", category: "Perfumes", price: 4900, oldPrice: 6500, rating: 4.8, reviews: 124, seller: "Almasso Store", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85" },
  { id: 2, name: "Afnan 9PM Eau De Parfum", category: "Perfumes", price: 3400, oldPrice: 5200, rating: 4.7, reviews: 98, seller: "Almasso Store", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85" },
  { id: 3, name: "Premium Wireless Headphones", category: "Electronics", price: 3499, oldPrice: 4999, rating: 4.6, reviews: 76, seller: "Tech Kenya", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85" },
  { id: 4, name: "Smart Watch Series", category: "Electronics", price: 2999, oldPrice: 3999, rating: 4.5, reviews: 64, seller: "Digital Hub", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85" },
  { id: 5, name: "Premium Women's Handbag", category: "Fashion", price: 2800, oldPrice: 4200, rating: 4.7, reviews: 51, seller: "Fashion House", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85" },
  { id: 6, name: "Modern Running Sneakers", category: "Sports", price: 3200, oldPrice: 4500, rating: 4.6, reviews: 88, seller: "Sport Zone", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85" },
  { id: 7, name: "Organic Skincare Collection", category: "Beauty", price: 2400, oldPrice: 3200, rating: 4.8, reviews: 73, seller: "Beauty Kenya", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85" },
  { id: 8, name: "Modern Home Decoration Set", category: "Home & Living", price: 4200, oldPrice: 5800, rating: 4.5, reviews: 42, seller: "Home Style", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85" },
];

const banners = [
  { title: "SHOP QUALITY.", highlight: "LIVE BETTER.", text: "Discover trusted products from sellers across Kenya on ALMASSO MARKETPLACE.", button: "Shop Now", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=85" },
  { title: "BIG DEALS.", highlight: "BETTER PRICES.", text: "Save more on selected products every day on ALMASSO MARKETPLACE.", button: "View Deals", image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1800&q=85" },
  { title: "SELL WITH", highlight: "ALMASSO MARKETPLACE.", text: "Grow your business and reach customers across Kenya on ALMASSO MARKETPLACE.", button: "Become a Seller", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85" },
];

export default function AlmassoMarketplace() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrentBanner((p) => (p + 1) % banners.length), 5000);
    return () => clearInterval(t);
  }, []);

  const banner = banners[currentBanner];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="bg-[#0E4B9C] px-4 py-2 text-center text-xs font-medium text-white">🚚 Fast delivery across Kenya • Secure payments • ALMASSO MARKETPLACE</div>
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur"><div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4"><Link href="/" className="flex items-center gap-2"><div className="h-11 w-11 bg-[#0E4B9C] rounded-xl overflow-hidden"><img src="/logo.png" alt="ALMASSO MARKETPLACE" className="h-full w-full object-contain" /></div><div className="hidden sm:block"><div className="text-xl font-black text-[#0E4B9C]">ALMASSO</div><div className="text-[9px] font-bold tracking-widest text-[#FF8C1A]">MARKETPLACE</div></div></Link><div className="relative flex-1"><input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search ALMASSO MARKETPLACE..." className="h-11 w-full rounded-xl border bg-slate-50 px-11 text-sm outline-none" /><span className="absolute left-4 top-1/2 -translate-y-1/2">🔍</span></div><div className="hidden md:flex gap-2"><button className="p-3">♡</button><button className="p-3">👤</button><button className="relative p-3">🛒{cartCount>0&&<span className="absolute right-0 top-0 bg-[#FF8C1A] text-white text-[10px] rounded-full px-1">{cartCount}</span>}</button></div></div></header>
      <section className="relative bg-[#071F42] overflow-hidden"><div className="absolute inset-0 bg-cover bg-center opacity-35" style={{backgroundImage:`url(${banner.image})`}}/><div className="absolute inset-0 bg-gradient-to-r from-[#071F42] to-transparent"/><div className="relative mx-auto max-w-7xl px-5 py-16 min-h-[500px] flex items-center"><div className="text-white max-w-2xl"><div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase">ALMASSO MARKETPLACE - Kenya's trusted marketplace</div><h1 className="mt-5 text-5xl font-black leading-none sm:text-6xl lg:text-7xl">{banner.title}<br/><span className="text-[#FF8C1A]">{banner.highlight}</span></h1><p className="mt-6 text-slate-200">{banner.text}</p><button onClick={()=>setCartCount(c=>c+1)} className="mt-8 bg-[#FF8C1A] px-6 py-3.5 rounded-xl text-sm font-black">{banner.button} →</button></div></div><div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex gap-2">{banners.map((_,i)=><button key={i} onClick={()=>setCurrentBanner(i)} className={`h-2 rounded-full ${currentBanner===i?"w-8 bg-[#FF8C1A]":"w-2 bg-white/50"}`} />)}</div></section>
      <section className="mx-auto max-w-7xl px-4 py-14"><h2 className="text-3xl font-black">Shop by Category on ALMASSO MARKETPLACE</h2><div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">{categories.map(c=><div key={c.name} className="rounded-2xl border bg-slate-50 p-4"><div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center text-2xl">{c.icon}</div><div className="mt-4 text-sm font-bold">{c.name}</div><div className="text-[10px] text-slate-500">{c.count}</div></div>)}</div></section>
      <section className="bg-slate-50 py-14"><div className="mx-auto max-w-7xl px-4"><h2 className="text-3xl font-black">Today's Deals on ALMASSO MARKETPLACE</h2><div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">{products.map(p=>{const d=Math.round(((p.oldPrice-p.price)/p.oldPrice)*100);return(<article key={p.id} className="rounded-2xl border bg-white overflow-hidden"><div className="relative aspect-square bg-slate-100"><img src={p.image} alt={p.name} className="w-full h-full object-cover"/><div className="absolute left-3 top-3 bg-[#FF8C1A] text-white text-[10px] font-black px-2 py-1 rounded">-{d}%</div><button onClick={()=>setWishlist(w=>w.includes(p.id)?w.filter(x=>x!==p.id):[...w,p.id])} className="absolute right-3 top-3 h-9 w-9 bg-white rounded-full">{wishlist.includes(p.id)?"♥":"♡"}</button></div><div className="p-4"><div className="text-[10px] font-bold text-[#0E4B9C]">{p.category}</div><h3 className="mt-2 text-sm font-bold min-h-[40px] line-clamp-2">{p.name}</h3><div className="mt-3"><span className="font-black text-[#0E4B9C]">KSh {p.price.toLocaleString()}</span><span className="ml-2 line-through text-xs text-slate-400">{p.oldPrice.toLocaleString()}</span></div><button onClick={()=>setCartCount(c=>c+1)} className="mt-4 w-full bg-[#0E4B9C] text-white py-3 rounded-xl text-xs font-black">Add to Cart</button></div></article>)})}</div></div></section>
      <footer className="bg-[#061B38] text-white"><div className="mx-auto max-w-7xl px-4 py-14 lg:px-6"><div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"><div><div className="text-2xl font-black">ALMASSO</div><div className="text-[10px] font-bold tracking-[0.2em] text-[#FF8C1A]">MARKETPLACE</div><p className="mt-5 text-sm text-slate-300 leading-7">Kenya's modern multi-vendor marketplace connecting customers with trusted sellers and quality products.</p><p className="mt-5 text-xs font-bold tracking-wider text-[#FF8C1A]">GET HOOKED ON QUALITY</p></div><div><h3 className="font-bold">Quick Links</h3><div className="mt-5 space-y-3 text-sm text-slate-300"><a href="#" className="block hover:text-white">Shop</a><a href="#" className="block hover:text-white">Categories</a><a href="#" className="block hover:text-white">Deals</a><a href="#" className="block hover:text-white">Become a Seller</a></div></div><div><h3 className="font-bold">Customer Service</h3><div className="mt-5 space-y-3 text-sm text-slate-300"><a href="#" className="block hover:text-white">Help Center</a><a href="#" className="block hover:text-white">Delivery Information</a><a href="#" className="block hover:text-white">Returns & Refunds</a><a href="#" className="block hover:text-white">Terms & Privacy</a></div></div><div><h3 className="font-bold">Contact ALMASSO MARKETPLACE</h3><div className="mt-5 space-y-3 text-sm text-slate-300"><p>🇰🇪 Kenya: +254799952727</p><p>🇸🇴 Somalia: +252617465252</p><p>📍 Nairobi, Kenya</p></div><div className="mt-6 flex gap-2"><a href="https://www.tiktok.com/@almassomarketplace" target="_blank" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FF8C1A]">TT</a><a href="https://www.instagram.com/almasso_marketplace" target="_blank" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FF8C1A]">IG</a><a href="https://youtube.com/@almassomarketplace" target="_blank" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FF8C1A]">YT</a><a href="https://www.facebook.com/share/19QX5ex4um/" target="_blank" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FF8C1A]">FB</a></div></div></div><div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-400">© 2026 ALMASSO MARKETPLACE. All rights reserved.</div></div></footer>
    </main>
  );
}