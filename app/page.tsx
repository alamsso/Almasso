export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-[#0E4896] text-white text-center py-2 text-[13px]">Welcome to Almasso Marketplace — Get Hooked on Quality.</div>

      <header className="border-b px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">📦</div>
          <div>
            <div className="font-black text-[22px] text-[#0E4896] leading-none">ALMASSO <span className="text-[#FF8C00]">MARKETPLACE</span></div>
            <div className="text-[11px] font-bold text-orange-400 tracking-widest">GET HOOKED ON QUALITY</div>
          </div>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-semibold">
          <span>Categories</span><span>Home</span><span>Shop</span>
        </div>
      </header>

      <section className="bg-[#0E4896] text-white p-12">
        <div className="bg-white/10 inline-block px-4 py-1 rounded-full text-xs mb-4">ALMASSO MARKETPLACE</div>
        <h1 className="text-5xl font-black">Get Quality Products</h1>
        <p className="mt-3 opacity-80">Discover quality products from trusted sellers across Africa on Almasso Marketplace.</p>
      </section>

      <footer className="bg-[#0A1930] text-white p-10 mt-20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">📦</div>
          <div>
            <div className="font-black text-[22px] leading-none">ALMASSO <span className="text-[#FF8C00]">MARKETPLACE</span></div>
            <div className="text-[11px] font-bold text-orange-400 tracking-widest">GET HOOKED ON QUALITY</div>
          </div>
        </div>
        <p className="mt-4 text-sm opacity-70">Almasso Marketplace is a trusted African marketplace connecting products from verified sellers in Somalia, Kenya and across Africa.</p>
        <p className="mt-6 text-xs opacity-50">© 2026 ALMASSO MARKETPLACE - All Rights Reserved</p>
      </footer>
    </main>
  )
}