"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const categories = [
  {
    name: "Fashion",
    icon: "👕",
    count: "1,240+ Products",
  },
  {
    name: "Beauty",
    icon: "💄",
    count: "860+ Products",
  },
  {
    name: "Electronics",
    icon: "📱",
    count: "1,120+ Products",
  },
  {
    name: "Home & Living",
    icon: "🏠",
    count: "940+ Products",
  },
  {
    name: "Groceries",
    icon: "🛒",
    count: "760+ Products",
  },
  {
    name: "Perfumes",
    icon: "🌸",
    count: "430+ Products",
  },
  {
    name: "Kids",
    icon: "🧸",
    count: "680+ Products",
  },
  {
    name: "Sports",
    icon: "⚽",
    count: "520+ Products",
  },
];

const products = [
  {
    id: 1,
    name: "Armaf Club De Nuit Intense Man",
    category: "Perfumes",
    price: 4900,
    oldPrice: 6500,
    rating: 4.8,
    reviews: 124,
    seller: "Almasso Store",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Afnan 9PM Eau De Parfum",
    category: "Perfumes",
    price: 3400,
    oldPrice: 5200,
    rating: 4.7,
    reviews: 98,
    seller: "Almasso Store",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Premium Wireless Headphones",
    category: "Electronics",
    price: 3499,
    oldPrice: 4999,
    rating: 4.6,
    reviews: 76,
    seller: "Tech Kenya",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Smart Watch Series",
    category: "Electronics",
    price: 2999,
    oldPrice: 3999,
    rating: 4.5,
    reviews: 64,
    seller: "Digital Hub",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    name: "Premium Women's Handbag",
    category: "Fashion",
    price: 2800,
    oldPrice: 4200,
    rating: 4.7,
    reviews: 51,
    seller: "Fashion House",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    name: "Modern Running Sneakers",
    category: "Sports",
    price: 3200,
    oldPrice: 4500,
    rating: 4.6,
    reviews: 88,
    seller: "Sport Zone",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    name: "Organic Skincare Collection",
    category: "Beauty",
    price: 2400,
    oldPrice: 3200,
    rating: 4.8,
    reviews: 73,
    seller: "Beauty Kenya",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 8,
    name: "Modern Home Decoration Set",
    category: "Home & Living",
    price: 4200,
    oldPrice: 5800,
    rating: 4.5,
    reviews: 42,
    seller: "Home Style",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85",
  },
];

const banners = [
  {
    title: "SHOP QUALITY.",
    highlight: "LIVE BETTER.",
    text: "Discover trusted products from sellers across Kenya.",
    button: "Shop Now",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=85",
  },
  {
    title: "BIG DEALS.",
    highlight: "BETTER PRICES.",
    text: "Save more on selected products every day.",
    button: "View Deals",
    image:
      "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1800&q=85",
  },
  {
    title: "SELL WITH",
    highlight: "ALMASSO.",
    text: "Grow your business and reach customers across Kenya.",
    button: "Become a Seller",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85",
  },
];

export default function AlmassoMarketplace() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const banner = banners[currentBanner];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* TOP BAR */}
      <div className="bg-[#0E4B9C] px-4 py-2 text-center text-xs font-medium text-white">
        🚚 Fast delivery across Kenya &nbsp; • &nbsp; Secure online payments
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 lg:px-6">
          {/* LOGO */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-[#0E4B9C]">
              <img
                src="/logo.png"
                alt="Almasso Marketplace"
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="hidden sm:block">
              <div className="text-xl font-black tracking-tight text-[#0E4B9C]">
                ALMASSO
              </div>
              <div className="text-[9px] font-bold tracking-[0.18em] text-[#FF8C1A]">
                MARKETPLACE
              </div>
            </div>
          </Link>

          {/* SEARCH */}
          <div className="relative flex-1">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products, brands and categories..."
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-11 pr-4 text-sm outline-none transition focus:border-[#0E4B9C] focus:bg-white"
            />

            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
              🔍
            </span>
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center gap-2 md:flex">
            <button className="rounded-xl p-3 text-xl transition hover:bg-slate-100">
              ♡
            </button>

            <button className="rounded-xl p-3 text-xl transition hover:bg-slate-100">
              👤
            </button>

            <button className="relative rounded-xl p-3 text-xl transition hover:bg-slate-100">
              🛒
              {cartCount > 0 && (
                <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#FF8C1A] px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="hidden border-t border-slate-100 md:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
            <div className="flex items-center gap-7">
              {[
                "Home",
                "Shop",
                "Categories",
                "Deals",
                "New Arrivals",
                "Become a Seller",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="py-4 text-sm font-semibold text-slate-600 transition hover:text-[#0E4B9C]"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="text-xs font-semibold text-slate-500">
              🇰🇪 Kenya • KES
            </div>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071F42]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: `url(${banner.image})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071F42] via-[#071F42]/90 to-transparent" />

        <div className="relative mx-auto flex min-h-[470px] max-w-7xl items-center px-5 py-16 lg:min-h-[560px] lg:px-6">
          <div className="max-w-2xl text-white">
            <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur">
              Kenya's trusted marketplace
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              {banner.title}
              <br />
              <span className="text-[#FF8C1A]">{banner.highlight}</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
              {banner.text}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-xl bg-[#FF8C1A] px-6 py-3.5 text-sm font-black text-white shadow-lg transition hover:scale-[1.02]">
                {banner.button} →
              </button>

              <button className="rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">
                Explore Categories
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-7 text-sm">
              <div>
                <div className="font-black text-white">10K+</div>
                <div className="text-slate-300">Products</div>
              </div>

              <div>
                <div className="font-black text-white">500+</div>
                <div className="text-slate-300">Sellers</div>
              </div>

              <div>
                <div className="font-black text-white">Kenya</div>
                <div className="text-slate-300">Nationwide</div>
              </div>
            </div>
          </div>
        </div>

        {/* DOTS */}
        <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`h-2 rounded-full transition-all ${
                currentBanner === index
                  ? "w-8 bg-[#FF8C1A]"
                  : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* TRUST FEATURES */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-100 lg:grid-cols-4">
          {[
            ["🚚", "Fast Delivery", "Across Kenya"],
            ["🔒", "Secure Payments", "Shop with confidence"],
            ["✓", "Verified Sellers", "Trusted businesses"],
            ["↩", "Easy Returns", "Simple return process"],
          ].map(([icon, title, text]) => (
            <div key={title} className="flex items-center gap-3 px-4 py-5 lg:px-7">
              <div className="text-2xl">{icon}</div>
              <div>
                <div className="text-sm font-bold">{title}</div>
                <div className="text-[11px] text-slate-500">{text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FF8C1A]">
              Explore
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">
              Shop by Category
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Find exactly what you need.
            </p>
          </div>

          <button className="hidden text-sm font-bold text-[#0E4B9C] sm:block">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {categories.map((category) => (
            <button
              key={category.name}
              className="group rounded-2xl border border-slate-100 bg-slate-50 p-4 text-left transition hover:-translate-y-1 hover:border-[#0E4B9C]/20 hover:bg-white hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
                {category.icon}
              </div>

              <div className="mt-4 text-sm font-bold">{category.name}</div>

              <div className="mt-1 text-[10px] text-slate-500">
                {category.count}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* DEALS */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FF8C1A]">
                Limited Time
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight">
                Today's Deals
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Great products. Better prices.
              </p>
            </div>

            <button className="hidden text-sm font-bold text-[#0E4B9C] sm:block">
              See All Deals →
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => {
              const discount = Math.round(
                ((product.oldPrice - product.price) / product.oldPrice) * 100
              );

              return (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* IMAGE */}
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute left-3 top-3 rounded-lg bg-[#FF8C1A] px-2.5 py-1 text-[10px] font-black text-white">
                      -{discount}%
                    </div>

                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-lg shadow-sm transition hover:scale-110"
                    >
                      {wishlist.includes(product.id) ? "♥" : "♡"}
                    </button>
                  </div>

                  {/* INFO */}
                  <div className="p-4">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#0E4B9C]">
                      {product.category}
                    </div>

                    <h3 className="mt-2 line-clamp-2 min-h-[40px] text-sm font-bold leading-5">
                      {product.name}
                    </h3>

                    <div className="mt-2 flex items-center gap-1 text-xs">
                      <span className="text-[#FF8C1A]">★</span>
                      <span className="font-bold">{product.rating}</span>
                      <span className="text-slate-400">
                        ({product.reviews})
                      </span>
                    </div>

                    <div className="mt-3 flex items-end gap-2">
                      <span className="text-lg font-black text-[#0E4B9C]">
                        KSh {product.price.toLocaleString()}
                      </span>

                      <span className="text-xs text-slate-400 line-through">
                        KSh {product.oldPrice.toLocaleString()}
                      </span>
                    </div>

                    <div className="mt-1 text-[10px] text-slate-500">
                      Sold by {product.seller}
                    </div>

                    <button
                      onClick={addToCart}
                      className="mt-4 w-full rounded-xl bg-[#0E4B9C] py-3 text-xs font-black text-white transition hover:bg-[#093b7e]"
                    >
                      Add to Cart
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SELLER CTA */}
      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-[#0E4B9C] px-6 py-12 text-white sm:px-10 lg:px-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FF8C1A]/20 blur-3xl" />
          <div className="absolute -bottom-20 left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FF8C1A]">
                Grow With Almasso
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Turn your business into an online store.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100">
                Join Almasso Marketplace and reach customers across Kenya.
                Manage your products, orders and earnings from one simple
                seller dashboard.
              </p>

              <button className="mt-7 rounded-xl bg-[#FF8C1A] px-6 py-3.5 text-sm font-black text-white transition hover:scale-[1.02]">
                Become a Seller →
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                ["01", "Create Store"],
                ["02", "Add Products"],
                ["03", "Receive Orders"],
                ["04", "Grow Sales"],
              ].map(([number, title]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur"
                >
                  <div className="text-xs font-black text-[#FF8C1A]">
                    {number}
                  </div>
                  <div className="mt-2 text-sm font-bold">{title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#061B38] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="text-2xl font-black">ALMASSO</div>
              <div className="mt-1 text-[10px] font-bold tracking-[0.2em] text-[#FF8C1A]">
                MARKETPLACE
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300">
                Kenya's modern multi-vendor marketplace connecting customers
                with