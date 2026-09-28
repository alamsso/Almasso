export default function Home(){
  const categories = [
    {name:'Electronics', icon:'📱', count:'2,500+ items'},
    {name:'Fashion', icon:'👕', count:'5,000+ items'},
    {name:'Beauty', icon:'💄', count:'1,200+ items'},
    {name:'Home', icon:'🏠', count:'800+ items'},
    {name:'Watches', icon:'⌚', count:'300+ items'},
    {name:'Gaming', icon:'🎮', count:'600+ items'},
  ];
  const products = [
    {name:'Wireless Headphones', price:'KSh 3,500', img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400'},
    {name:'Smart Watch', price:'KSh 4,200', img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400'},
    {name:'Running Shoes', price:'KSh 2,800', img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400'},
    {name:'Backpack', price:'KSh 1,500', img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400'},
  ];

  return (
    <div style={{background:'#F5F7FA', minHeight:'100vh'}}>
      {/* HEADER */}
      <div style={{background:'#0E4B9C', color:'white', padding:'12px 15px', display:'flex', alignItems:'center', gap:'12px', position:'sticky', top:0, zIndex:50}}>
        <div style={{background:'white', padding:'5px 10px', borderRadius:'20px', display:'flex', alignItems:'center', gap:'6px'}}>
          <img src="/logo.png" style={{height:'28px'}} alt="logo" />
          <div style={{lineHeight:'1'}}><div style={{fontWeight:'900', color:'#FF8C1A', fontSize:'16px'}}>Almasso</div><div style={{fontSize:'6px', color:'#0E4B9C', fontWeight:'bold'}}>Get Hooked on Quality</div></div>
        </div>
        <input placeholder="Search quality products..." style={{flex:1, padding:'10px 15px', borderRadius:'20px', color:'black', border:'none', maxWidth:'600px'}} />
        <button style={{background:'#FF8C1A', color:'white', padding:'10px 18px', borderRadius:'20px', border:'none', fontWeight:'900'}}>🔍</button>
        <span style={{fontSize:'20px'}}>🛒</span>
      </div>
      <div style={{background:'#0A3A7A', color:'white', padding:'8px 15px', display:'flex', gap:'20px', fontSize:'13px'}}>
        <span>☰ All</span><span>Home</span><span>Categories</span><span>Shops</span><span style={{color:'#FF8C1A', fontWeight:'bold'}}>Deals 🔥</span>
      </div>

      {/* HERO */}
      <div style={{background:'linear-gradient(135deg, #0E4B9C, #102A43)', margin:'15px', borderRadius:'20px', padding:'40px 20px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white', textAlign:'center'}}>
        <h1 style={{fontSize:'36px', fontWeight:'900', lineHeight:'1.1'}}>SHOP QUALITY.<br/>SHOP WITH CONFIDENCE.</h1>
        <p style={{marginTop:'10px', color:'#FF8C1A', fontWeight:'bold'}}>Get Hooked on Quality - Somalia → Kenya → Africa → World 🌍</p>
        <button style={{background:'#FF8C1A', color:'white', padding:'14px 35px', borderRadius:'30px', border:'none', fontWeight:'900', marginTop:'20px', fontSize:'16px', cursor:'pointer'}}>SHOP NOW</button>
      </div>

      {/* POPULAR CATEGORIES - 1/10 NEW */}
      <div style={{maxWidth:'1200px', margin:'0 auto', padding:'0 15px'}}>
        <h2 style={{fontWeight:'900', color:'#0E4B9C', fontSize:'20px', marginTop:'25px'}}>Popular Categories</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'12px', marginTop:'15px'}}>
          {categories.map(c=>(
            <div key={c.name} style={{background:'white', padding:'18px', borderRadius:'14px', boxShadow:'0 2px 8px rgba(0,0,0,0.05)', cursor:'pointer', border:'1px solid #eee'}}>
              <div style={{fontSize:'28px'}}>{c.icon}</div>
              <div style={{fontWeight:'900', marginTop:'8px', color:'#102A43'}}>{c.name}</div>
              <div style={{fontSize:'11px', color:'#888', marginTop:'2px'}}>{c.count}</div>
            </div>
          ))}
        </div>

        {/* FEATURED PRODUCTS - 1/10 NEW */}
        <h2 style={{fontWeight:'900', color:'#0E4B9C', fontSize:'20px', marginTop:'30px'}}>Featured Products</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'12px', marginTop:'15px'}}>
          {products.map(p=>(
            <div key={p.name} style={{background:'white', borderRadius:'14px', overflow:'hidden', boxShadow:'0 2px 8px rgba(0,0,0,0.05)', border:'1px solid #eee'}}>
              <img src={p.img} style={{width:'100%', height:'140px', objectFit:'cover'}} alt={p.name} />
              <div style={{padding:'12px'}}>
                <div style={{fontWeight:'700', fontSize:'14px', color:'#102A43'}}>{p.name}</div>
                <div style={{fontWeight:'900', color:'#0E4B9C', marginTop:'5px'}}>{p.price}</div>
                <button style={{background:'#FF8C1A', color:'white', border:'none', padding:'7px 15px', borderRadius:'20px', fontSize:'12px', fontWeight:'900', marginTop:'8px', width:'100%'}}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

        {/* VISION CARD */}
        <div style={{background:'white', marginTop:'25px', padding:'18px', borderRadius:'14px', textAlign:'center', border:'2px solid #0E4B9C'}}>
          <h3 style={{fontWeight:'900', color:'#0E4B9C'}}>🚀 Almasso Vision</h3>
          <p style={{fontSize:'13px', marginTop:'5px'}}>Multi-Vendor Marketplace • 3 User Types: Customer, Seller, Admin</p>
          <p style={{fontSize:'12px', color:'#FF8C1A', fontWeight:'bold', marginTop:'5px'}}>Somalia → Kenya → Ethiopia → Tanzania → Africa → World</p>
          <p style={{fontSize:'11px', color:'#888', marginTop:'8px'}}>1/10 UI System ✅ • Next: 2/10 Homepage + Database</p>
        </div>
      </div>

      <div style={{background:'#0E4B9C', color:'white', textAlign:'center', padding:'25px', marginTop:'25px'}}>
        <img src="/logo.png" style={{height:'45px', background:'white', borderRadius:'50%', padding:'6px', margin:'0 auto'}} alt="logo" />
        <p style={{fontWeight:'900', marginTop:'10px'}}>ALMASSO</p><p style={{color:'#FF8C1A', fontSize:'12px', fontWeight:'bold'}}>Get Hooked on Quality</p>
        <p style={{fontSize:'11px', marginTop:'12px', opacity:0.8}}>Professional Marketplace Platform • VS Code + Next.js + Supabase</p>
        <p style={{fontSize:'10px', marginTop:'10px', opacity:0.5}}>© 2026 Almasso - Made in Kenya 🇰🇪</p>
      </div>
    </div>
  )
}