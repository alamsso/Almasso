export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* HEADER - KOR */}
      <header className="w-full bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#0E4896] w-11 h-11 rounded-xl flex items-center justify-center text-white font-black text-xl">A</div>
            <div className="leading-none">
              <div className="font-black text-[19px] text-[#0E4896]">ALMASSO <span className="text-[#FF8C00]">MARKETPLACE</span></div>
              <div className="text-[9px] font-bold text-[#FF8C00] tracking-[0.2em]">GET HOOKED ON QUALITY</div>
            </div>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-bold text-[#0E4896]">
            <span>Almasso Marketplace</span>
            <span>Become a Seller</span>
            <span>Deals</span>
          </div>
        </div>
        <div className="bg-[#FF8C00] text-white text-center py-2 text-[13px] font-bold tracking-wide">
          🎉 Welcome to Almasso Marketplace — Get Hooked on Quality! Fast Delivery Across Kenya 🎉
        </div>
      </header>

      {/* HERO - ALMASSO MARKETPLACE */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="inline-block bg-[#0E4896]/10 text-[#0E4896] text-xs font-black px-4 py-1.5 rounded-full mb-4 tracking-widest">ALMASSO MARKETPLACE</div>
        <h1 className="text-5xl md:text-7xl font-black text-[#0E4896] tracking-tighter">
          ALMASSO <span className="text-[#FF8C00]">MARKETPLACE</span>
        </h1>
        <p className="mt-4 text-xl font-bold text-gray-800">Almasso Marketplace - Get Hooked on Quality</p>
        <p className="mt-2 text-gray-500">Kenya's #1 Online Shopping Destination — Almasso Marketplace</p>
        <button className="mt-8 bg-[#0E4896] hover:bg-[#0a3570] text-white px-10 py-4 rounded-full font-black text-lg shadow-lg">
          Shop on Almasso Marketplace
        </button>
      </section>

      {/* SOCIAL MEDIA + INFO */}
      <section className="max-w-7xl mx-auto px-4 py-8 text-center border-y bg-gray-50">
        <p className="font-bold text-[#0E4896]">Follow Almasso Marketplace</p>
        <div className="flex justify-center gap-4 mt-3 text-sm font-semibold">
          <span>Facebook: @AlmassoMarketplace</span>
          <span>Instagram: @AlmassoMarketplace</span>
          <span>TikTok: @AlmassoMarketplace</span>
          <span>X: @AlmassoMarketplace</span>
        </div>
      </section>

      {/* FOOTER - DHAMMAAN ALMASSO MARKETPLACE */}
      <footer className="bg-[#0A1930] text-white mt-0">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center text-[#0E4896] font-black">A</div>
              <div className="leading-none">
                <div className="font-black text-[18px]">ALMASSO <span className="text-[#FF8C00]">MARKETPLACE</span></div>
                <div className="text-[9px] font-bold text-[#FF8C00] tracking-widest">GET HOOKED ON QUALITY</div>
              </div>
            </div>
            <p className="text-sm mt-4 opacity-70">Almasso Marketplace is Kenya's trusted marketplace. Get Hooked on Quality with Almasso Marketplace.</p>
          </div>
          <div>
            <h4 className="font-black text-[#FF8C00]">Almasso Marketplace</h4>
            <p className="text-sm opacity-80 mt-2 leading-6">About Almasso Marketplace<br/>Sell on Almasso Marketplace<br/>Almasso Marketplace Careers<br/>Almasso Marketplace Blog</p>
          </div>
          <div>
            <h4 className="font-black text-[#FF8C00]">Almasso Marketplace Help</h4>
            <p className="text-sm opacity-80 mt-2 leading-6">Almasso Marketplace Support<br/>Contact Almasso Marketplace<br/>Shipping - Almasso Marketplace<br/>Returns - Almasso Marketplace</p>
          </div>
        </div>
        <div className="bg-black/30 text-center py-4 text-[11px] tracking-wide opacity-80">
          © 2026 ALMASSO MARKETPLACE - All Rights Reserved - Almasso Marketplace - Get Hooked on Quality - www.almasso.com
        </div>
      </footer>
    </main>
  );
}