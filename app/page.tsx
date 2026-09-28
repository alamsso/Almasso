"use client";

import { useEffect, useState } from "react";

const BRAND_BLUE = "#0E4B9C";
const BRAND_ORANGE = "#FF8C1A";

const banners = [
  {
    eyebrow: "ALMASSO MARKETPLACE",
    title: "Get Hooked on Quality",
    description:
      "Discover quality products from trusted sellers in Somalia, Kenya and across Africa.",
    button: "Shop Now",
    bg: BRAND_BLUE,
    accent: BRAND_ORANGE,
    icon: "🛍️",
  },
  {
    eyebrow: "QUALITY YOU CAN TRUST",
    title: "Everything You Need in One Place",
    description:
      "Shop electronics, fashion, beauty, home essentials, groceries and more.",
    button: "Explore Products",
    bg: "#102A43",
    accent: BRAND_ORANGE,
    icon: "📦",
  },
  {
    eyebrow: "ALMASSO DELIVERY",
    title: "Shop Today. Get It Delivered.",
    description:
      "Simple shopping, secure checkout and reliable delivery built for modern Africa.",
    button: "Start Shopping",
    bg: BRAND_ORANGE,
    accent: BRAND_BLUE,
    icon: "🚚",
  },
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
  {
    name: "Premium Wireless Headphones",
    price: "KES 4,999",
    oldPrice: "KES 6,500",
    rating: "4.8",
    reviews: 126,
    category: "Electronics",
    badge: "SALE",
    icon: "🎧",
  },
  {
    name: "Classic Men's Sneakers",
    price: "KES 3,499",
    oldPrice: "KES 4,500",
    rating: "4.7",
    reviews: 89,
    category: "Fashion",
    badge: "20% OFF",
    icon: "👟",
  },
  {
    name: "Premium Eau de Parfum",
    price: "KES 4,900",
    oldPrice: "KES 6,500",
    rating: "4.9",
    reviews: 214,
    category: "Beauty",
    badge: "HOT",
    icon: "🧴",
  },
  {
    name: "Smart Watch Pro",
    price: "KES 5,999",
    oldPrice: "KES 7,500",
    rating: "4.6",
    reviews: 73,
    category: "Electronics",
    badge: "NEW",
    icon: "⌚",
  },
];

const vendors = [
  { name: "Almasso Electronics", category: "Electronics & Gadgets", rating: "4.9", products: "320+ Products", icon: "⚡" },
  { name: "Almasso Fashion", category: "Fashion & Accessories", rating: "4.8", products: "580+ Products", icon: "👗" },
  { name: "Almasso Beauty", category: "Beauty & Perfumes", rating: "4.9", products: "240+ Products", icon: "✨" },
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
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const banner = banners[current];

  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#102A43]">
      <div className="bg-[#0E4B9C] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
          <p className="hidden sm:block">Welcome to Almasso Marketplace — Get Hooked on Quality.</p>
          <p className="sm:hidden">Get Hooked on Quality</p>
          <div className="flex items-center gap-4">
            <button>🇰🇪 Kenya</button>
            <button>English</button>
            <button className="hidden sm:block">Help Center</button>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-20 items-center gap-4 py-3">
            {/* LOGO - WAXAA HALKAN LOGO-GA LAGU BEDELAAY */}
            <a href="/" className="flex shrink-0 items-center gap-2">
              <img src="/logo.png" alt="Almasso Logo" className="h-11 w-11 rounded-xl object-contain shadow-sm bg-white" />
              <div className="hidden sm:block">
                <div className="text-xl font-black tracking-tight text-[#0E4B9C]">ALMASSO</div>
                <div className="text-[9px] font-semibold tracking-widest text-[#FF8C1A]">GET HOOKED ON QUALITY</div>
              </div>
            </a>

            <div className="relative flex-1">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search products, brands and categories..."
                className="h-12 w-full rounded-xl border border-gray-200 bg-[#F7F9FC] pl-12 pr-24 text-sm outline-none transition focus:border-[#0E4B9C] focus:bg-white"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400">⌕</span>
              <button className="absolute right-1 top-1 h-10 rounded-lg bg-[#FF8C1A] px-5 text-sm font-bold text-white transition hover:bg-[#E97805]">Search</button>
            </div>

            <div className="hidden items-center gap-5 lg:flex">
              <button className="text-sm font-semibold hover:text-[#0E4B9C]">♡ <span className="ml-1">Wishlist</span></button>
              <button className="text-sm font-semibold hover:text-[#0E4B9C]">👤 <span className="ml-1">Account</span></button>
              <button className="relative text-xl">🛒<span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF8C1A] text-[10px] font-bold text-white">0</span></button>
            </div>
          </div>

          <nav className="hidden h-12 items-center gap-8 md:flex">
            <button className="flex items-center gap-2 font-bold text-[#0E4B9C]">☰ Categories</button>
            <a href="#" className="font-medium hover:text-[#0E4B9C]">Home</a>
            <a href="#" className="font-medium hover:text-[#0E4B9C]">Shop</a>
            <a href="#" className="font-medium hover:text-[#0E4B9C]">Deals</a>
            <a href="#" className="font-medium hover:text-[#0E4B9C]">New Arrivals</a>
            <a href="#" className="font-medium hover:text-[#0E4B9C]">Stores</a>
            <a href="#become-seller" className="ml-auto font-bold text-[#FF8C1A]">Become a Seller →</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="relative min-h-[440px] transition-colors duration-700" style={{ backgroundColor: banner.bg }}>
          <div className="mx-auto grid min-h-[440px] max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:px-8">
            <div className="relative z-10 text-white">
              <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-widest">{banner.eyebrow}</div>
              <h1 className="max-w-2xl text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">{banner.title}</h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">{banner.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-xl px-7 py-3.5 font-bold text-white shadow-lg transition hover:-translate-y-0.5" style={{ backgroundColor: banner.accent }}>{banner.button} →</button>
                <button className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur transition hover:bg-white/20">View Categories</button>
              </div>
              <div className="mt-9 flex flex-wrap gap-6 text-sm text-white/80">
                <span>✓ Trusted Sellers</span><span>✓ Secure Shopping</span><span>✓ Reliable Delivery</span>
              </div>
            </div>
            <div className="hidden justify-center lg:flex">
              <div className="relative flex h-80 w-80 items-center justify-center rounded-[40px] bg-white/10 shadow-2xl backdrop-blur-sm">
                <div className="absolute -right-5 -top-5 rounded-2xl bg-white px-5 py-3 text-sm font-black text-[#0E4B9C] shadow-xl">QUALITY</div>
                <div className="text-[150px] drop-shadow-2xl">{banner.icon}</div>
                <div className="absolute -bottom-5 -left-5 rounded-2xl bg-[#FF8C1A] px-5 py-3 text-sm font-black text-white shadow-xl">ALMASSO</div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-2">
            {banners.map((_, index) => (
              <button key={index} onClick={() => setCurrent(index)} className={`h-2.5 rounded-full transition-all ${current === index? "w-9 bg-white" : "w-2.5 bg-white/40"}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gray-200 sm:grid-cols-4">
          {[ ["🚚", "Reliable Delivery", "Across our markets"], ["🔒", "Secure Shopping", "Protected checkout"], ["✓", "Trusted Sellers", "Quality marketplace"], ["↩", "Customer Support", "We are here to help"] ].map(([icon, title, text]) => (
            <div key={title} className="flex items-center gap-3 px-5 py-5">
              <div className="text-2xl">{icon}</div>
              <div><div className="text-sm font-bold">{title}</div><div className="text-xs text-gray-500">{text}</div></div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-7 flex items-end justify-between">
          <div><p className="text-sm font-bold uppercase tracking-widest text-[#FF8C1A]">Explore</p><h2 className="mt-1 text-2xl font-black sm:text-3xl">Shop by Category</h2></div>
          <button className="hidden text-sm font-bold text-[#0E4B9C] sm:block">View All →</button>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {categories.map((category) => (
            <button key={category.name} className="group rounded-2xl border border-gray-200 bg-white p-4 text-left transition hover:-translate-y-1 hover:border-[#0E4B9C] hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F0F5FC] text-3xl">{category.icon}</div>
              <h3 className="mt-4 text-sm font-bold leading-5">{category.name}</h3>
              <p className="mt-1 text-[11px] text-gray-500">{category.count}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7 flex items-end justify-between">
            <div><p className="text-sm font-bold uppercase tracking-widest text-[#FF8C1A]">Limited Offers</p><h2 className="mt-1 text-2xl font-black sm:text-3xl">Deals You’ll Love</h2></div>
            <button className="text-sm font-bold text-[#0E4B9C]">View All →</button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article key={product.name} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative flex h-56 items-center justify-center bg-[#F5F7FA]">
                  <span className="text-8xl transition duration-300 group-hover:scale-110">{product.icon}</span>
                  <span className="absolute left-3 top-3 rounded-md bg-[#FF8C1A] px-2.5 py-1 text-[10px] font-black text-white">{product.badge}</span>
                  <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">♡</button>
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium text-gray-500">{product.category}</p>
                  <h3 className="mt-1 min-h-[40px] text-sm font-bold">{product.name}</h3>
                  <div className="mt-2 flex items-center gap-1 text-xs"><span className="font-bold text-[#FF8C1A]">★ {product.rating}</span><span className="text-gray-400">({product.reviews})</span></div>
                  <div className="mt-3 flex items-center gap-2"><span className="text-lg font-black text-[#0E4B9C]">{product.price}</span><span className="text-xs text-gray-400 line-through">{product.oldPrice}</span></div>
                  <button className="mt-4 w-full rounded-xl bg-[#0E4B9C] py-3 text-sm font-bold text-white transition hover:bg-[#093B7C]">Add to Cart</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-[#0E4B9C] p-8 text-white shadow-xl sm:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-2xl">🌍</div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#FF8C1A]">Our Vision</p>
              <h2 className="mt-3 text-2xl font-black sm:text-3xl">Building a trusted African marketplace for the world.</h2>
              <p className="mt-5 leading-7 text-white/75">To build a trusted African marketplace that connects people and businesses with quality products, reliable sellers and convenient digital commerce — starting in Somalia and Kenya, expanding across Africa and ultimately the world.</p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-100 sm:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF8C1A]/10 text-2xl">🎯</div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#FF8C1A]">Our Mission</p>
              <h2 className="mt-3 text-2xl font-black sm:text-3xl">Making online shopping simple and trustworthy.</h2>
              <p className="mt-5 leading-7 text-gray-600">To make online shopping and selling simple, accessible, secure and trustworthy by connecting customers with sellers and quality products through technology.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#FF8C1A]">What We Stand For</p>
            <h2 className="mt-2 text-3xl font-black">Our Core Values</h2>
            <p className="mt-3 text-gray-500">The principles that guide Almasso as we grow across Africa and beyond.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0F5FC] text-xl font-black text-[#0E4B9C]">{value.icon}</div>
                <h3 className="mt-4 font-black">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}