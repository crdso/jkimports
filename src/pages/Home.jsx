import { useState } from 'react'
import { Link } from 'react-router-dom'
import CineHero from '../components/CineHero.jsx'
import RepairProcessSection from '../components/RepairProcessSection.jsx'
import Services from '../components/Services.jsx'
import InstagramSection from '../components/InstagramSection.jsx'
import Units from '../components/Units.jsx'
import FAQ from '../components/FAQ.jsx'
import ProductModal from '../components/ProductModal.jsx'
import ProductCard from '../components/ProductCard.jsx'
import GlintDivider from '../components/GlintDivider.jsx'
import products from '../data/products.json'

const HOME_FEATURED_SLUGS = [
  'iphone-17-pro-max',
  'iphone-17-pro',
  'iphone-16-pro-max',
  'iphone-15-pro-max',
]

function FeaturedHomeProducts({ onOpen }){
  const featured = HOME_FEATURED_SLUGS.map(slug => products.find(p => p.slug === slug)).filter(Boolean)
  return (
    <section id="produtos" className="products-apple-section">
      <div className="site-shell">
        <div style={{display:'flex', flexWrap:'wrap', alignItems:'end', justifyContent:'space-between', gap:12, marginBottom:18}}>
          <div>
            <p className="section-kicker">LOJA JK IMPORTS</p>
            <h2 style={{fontSize:'clamp(1.7rem,3vw,2.4rem)', fontWeight:800, letterSpacing:'-.03em', marginTop:8}}>Celulares, acessórios e assistência técnica.</h2>
          </div>
          <Link to="/loja" style={{display:'inline-flex', alignItems:'center', gap:6, height:36, padding:'0 14px', borderRadius:999, border:'1px solid var(--site-border)', background:'color-mix(in srgb,var(--site-panel) 86%, transparent)', fontSize:13, fontWeight:700, textDecoration:'none'}}>Abrir loja completa →</Link>
        </div>
        <div className="product-grid">
          {featured.map(p=> <ProductCard key={p.slug} product={p} onOpen={onOpen} />)}
        </div>
      </div>
    </section>
  )
}

export default function Home(){
  const [selected,setSelected]=useState(null)
  return (
    <main>
      <CineHero />
      <div className="home-content-after-cinema">
        <FeaturedHomeProducts onOpen={setSelected} />
        <RepairProcessSection />
        <Services />
        <InstagramSection />
        <GlintDivider />
        <Units />
        <GlintDivider />
        <FAQ />
        <GlintDivider />
        <section className="cta-section" style={{background:'transparent', borderTop:'none'}}>
          <div className="site-shell" style={{textAlign:'center', padding:'clamp(2.5rem,6vw,4rem) 0'}}>
            <p style={{fontSize:11,letterSpacing:'.22em',textTransform:'uppercase',color:'#85858b',fontWeight:700}}>Fale com a JK IMPORTS</p>
            <h2 style={{fontSize:'clamp(1.8rem,3.2vw,2.8rem)',fontWeight:800,letterSpacing:'-.03em',marginTop:8}}>Seu celular está com<br/>problema?</h2>
            <p style={{color:'#85858b',marginTop:10,maxWidth:'56ch',marginInline:'auto',lineHeight:1.6}}>Antes de trocar de aparelho, fale com a JK IMPORTS. Nossa equipe avalia e indica a melhor solução — economizando seu dinheiro.</p>
            <div style={{display:'flex',gap:10,justifyContent:'center',marginTop:18,flexWrap:'wrap'}}>
              <a href="https://api.whatsapp.com/send/?phone=5599984599773" target="_blank" rel="noopener" className="btn-primary" style={{background:'#25D366'}}>Falar no WhatsApp</a>
              <a href="https://maps.app.goo.gl/duLv1AeUvQWb81oD8" target="_blank" rel="noopener" className="btn-ghost">Como chegar</a>
            </div>
          </div>
        </section>
      </div>
      {selected && <ProductModal product={selected} onClose={()=>setSelected(null)} />}
    </main>
  )
}
