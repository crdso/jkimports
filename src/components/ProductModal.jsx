import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext.jsx'
import { useTheme } from '../context/ThemeContext.jsx'
function fmt(c){ if(c==null||c===0) return 'Consultar preço'; return (c/100).toLocaleString('pt-BR',{style:'currency',currency:'BRL'}) }
export default function ProductModal({ product, onClose }){
  const logo = '/logo-jk.png'
  const { addItem } = useCart()
  const [idx,setIdx]=useState(0)
  const [qty,setQty]=useState(1)
  const [mainFailed, setMainFailed] = useState(false)
  const variant=product?.variants?.[0]
  const images=product ? (product.images?.length?product.images:[product.foto_url].filter(Boolean)) : []
  const main=images[idx]||images[0] || logo
  useEffect(()=>{
    setMainFailed(false)
  }, [main])
  if(!product) return null
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e=>e.stopPropagation()}>
        <div className="modal-media">
          <div style={{width:'100%'}}>
            <img src={mainFailed ? logo : main} alt={product.name} onError={()=>setMainFailed(true)} />
            <div style={{display:'flex',gap:8,marginTop:12,overflowX:'auto'}}>
              {images.map((src,i)=> (
                <button key={i} onClick={()=>setIdx(i)} style={{border: idx===i?'2px solid var(--site-orange)':'1px solid var(--site-border)',borderRadius:10,padding:4,background:'var(--site-panel-soft)',cursor:'pointer',flex:'0 0 64px',height:64,overflow:'hidden'}}>
                  <img src={src} alt="" style={{width:'100%',height:'100%',objectFit:'contain'}} />
                </button>
              ))}
            </div>
          </div>
        </div>
        <div style={{padding:20,display:'grid',gap:12,alignContent:'start'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'start',gap:12}}>
            <div><p style={{fontSize:11,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--site-muted)',fontWeight:700}}>{product.category}{product.condition ? ` • ${product.condition === 'Novo' ? 'Novo / Lacrado' : product.condition}` : ''}</p><h3 style={{fontSize:22,fontWeight:800,letterSpacing:'-.02em'}}>{product.name}</h3><p style={{fontSize:13,color:'var(--site-muted)'}}>{[product.armazenamento, product.cor, product.bateria? `Bateria ${product.bateria}`:''].filter(Boolean).join(' • ') || 'Consulte disponibilidade'}</p></div>
            <button onClick={onClose} style={{width:34,height:34,borderRadius:999,border:'1px solid var(--site-border)',background:'transparent',color:'var(--site-text)',cursor:'pointer'}}>✕</button>
          </div>
          <p style={{fontSize:13,lineHeight:1.6,color:'var(--site-muted)'}}>{product.description || product.short || 'Consulte disponibilidade, cores e condições com a JK IMPORTS via WhatsApp.'}</p>
          <div style={{background:'var(--site-panel-soft)',border:'1px solid var(--site-border)',borderRadius:12,padding:12}}>
            <p style={{fontWeight:700,fontSize:12,letterSpacing:'.08em',textTransform:'uppercase',color:'var(--site-muted)',marginBottom:6}}>Especificações</p>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,fontSize:13}}>
              {product.armazenamento && <span>Armazenamento: <strong>{product.armazenamento}</strong></span>}
              {product.cor && <span>Cor: <strong>{product.cor}</strong></span>}
              <span>Condição: <strong>{product.condition === 'Novo' ? 'Novo / Lacrado' : product.condition || 'Consultar'}</strong></span>
              {product.garantia && <span>Garantia: <strong>{product.garantia}</strong></span>}
              {product.bateria && <span>Bateria: <strong>{product.bateria}</strong></span>}
            </div>
          </div>
          <div style={{display:'flex',alignItems:'end',gap:12,flexWrap:'wrap'}}>
            <div><p style={{fontSize:22,fontWeight:800}}>{fmt(product.price)}</p>{product.price ? <p style={{fontSize:12,color:'var(--site-muted)'}}>em até 12x • pix com desconto</p> : <p style={{fontSize:12,color:'var(--site-muted)'}}>Consulte condições de pagamento</p>}</div>
            <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:8}}>
              {product.price ? (<><div className="cart-qty"><button onClick={()=>setQty(q=>Math.max(1,q-1))}>−</button><span style={{minWidth:18,textAlign:'center',fontWeight:700}}>{qty}</span><button onClick={()=>setQty(q=>Math.min(99,q+1))}>＋</button></div><button className="btn-primary" onClick={()=>{ addItem(product, variant, qty); onClose() }}>Adicionar ao carrinho</button></>) : (<a href={`https://api.whatsapp.com/send/?phone=5599984599773&text=${encodeURIComponent(`Olá, JK IMPORTS! Quero saber o preço do ${product.name}. Podem me informar?`)}`} target="_blank" rel="noopener" className="btn-primary" style={{textDecoration:'none'}}>Consultar no WhatsApp</a>)}
            </div>
          </div>
          <a href="https://api.whatsapp.com/send/?phone=5599984599773" target="_blank" rel="noopener" className="btn-ghost" style={{textAlign:'center'}}>Tirar dúvida no WhatsApp</a>
        </div>
      </div>
    </div>
  )
}
