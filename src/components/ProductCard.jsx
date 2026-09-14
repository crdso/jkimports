import { useCart } from '../context/CartContext.jsx'
import { useState } from 'react'

function formatBRL(cents){
  return (cents/100).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
}
function formatDisplayName(raw){
  if(!raw) return raw
  let n = raw.replace(/\s+/g, ' ').trim()
  n = n.replace(/\biphone\b/gi, 'iPhone')
  n = n.replace(/\bpro\s*max\b/gi, 'Pro Max')
  if(!/Pro Max/.test(n)) n = n.replace(/\bpro\b/gi, 'Pro')
  n = n.replace(/\s+B$/i, ' - Branco')
  n = n.replace(/\s+/g, ' ').trim()
  n = n.replace(/\s*-\s*Branco/i, ' - Branco')
  return n
}
function isSeminovo(product){
  return product.condition === 'Seminovo'
}
function displayCondition(cond){
  if(cond === 'Seminovo') return 'Seminovo'
  if(cond === 'Novo') return 'Novo / Lacrado'
  return cond || ''
}

export default function ProductCard({ product, onOpen }){
  const logo = '/logo-jk.png'
  const { addItem } = useCart()
  const variants = product.variants || []
  const storageVariants = variants.filter(v=> v.storage)
  const hasMultipleStorages = storageVariants.length > 1
  const pricedVariants = variants.filter(v=> v.price != null && v.price > 0)
  const minPrice = pricedVariants.length ? Math.min(...pricedVariants.map(v=>v.price)) : null
  const hasPrice = minPrice != null && minPrice > 0
  const inStock = product.available !== false && !product.sold && !product.hidden
  const compare = product.compareAt && minPrice && product.compareAt > minPrice ? product.compareAt : null
  const img = product.foto_url || product.images?.[0] || logo
  const [imageFailed, setImageFailed] = useState(false)
  const displayedImage = imageFailed ? logo : img
  const displayName = formatDisplayName(product.name)
  const showSeminovo = isSeminovo(product)

  const handleAction = () => {
    if(!hasPrice){
      const msg = `Olá, JK IMPORTS! Quero saber o preço do ${displayName}. Podem me informar?`
      window.open(`https://api.whatsapp.com/send/?phone=5599984599773&text=${encodeURIComponent(msg)}`, '_blank')
      return
    }
    if(hasMultipleStorages){
      onOpen?.(product)
      return
    }
    if(inStock){
      const singleVariant = pricedVariants[0] || variants[0]
      addItem(product, singleVariant, 1)
    }
  }

  const storageLabel = (() => {
    if(storageVariants.length === 0) return ''
    if(storageVariants.length <= 4){
      return storageVariants.map(v=> v.storage).join(' • ')
    }
    const first = storageVariants[0]?.storage
    const last = storageVariants[storageVariants.length-1]?.storage
    return `${first} a ${last}`
  })()

  const metaParts = [storageLabel, displayCondition(product.condition)].filter(Boolean)

  return (
    <article className="product-card">
      <div className="product-card-media" onClick={()=>onOpen?.(product)} style={{cursor:'pointer'}}>
        <img src={displayedImage} alt={displayName} loading="lazy" onError={()=>setImageFailed(true)} />
      </div>
      <div className="product-card-body">
        {showSeminovo ? <p className="product-status">Seminovo</p> : (product.condition === 'Novo' && <p className="product-status" style={{color:'var(--site-muted)'}}>Novo / Lacrado</p>)}
        <h3 className="product-card-title" onClick={()=>onOpen?.(product)} style={{cursor:'pointer'}}>{displayName}</h3>
        {metaParts.length > 0 && <p className="product-card-meta">{metaParts.join(' • ')}</p>}
        <div className="product-card-price">
          <div>
            {hasPrice ? (
              <>
                <p style={{fontSize:10, color:'var(--site-faint)', marginBottom:2, letterSpacing:'0.02em'}}>a partir de</p>
                <div style={{display:'flex', alignItems:'center', gap:6}}>
                  <span className="price-main">{formatBRL(minPrice)}</span>
                  {compare && <span className="price-compare" style={{marginLeft:2}}>{formatBRL(compare)}</span>}
                </div>
              </>
            ) : (
              <span className="price-main" style={{color:'var(--site-text)', fontSize:14, fontWeight:700}}>Consultar preço</span>
            )}
          </div>
          <button type="button" onClick={handleAction} disabled={hasPrice ? !inStock : false} className="store-add-button">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 2H2"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>
            {hasPrice ? (inStock ? 'Adicionar' : 'Indisponível') : 'Consultar'}
          </button>
        </div>
      </div>
    </article>
  )
}
