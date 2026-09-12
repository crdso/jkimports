import { Pin, Copy } from 'lucide-react'

const INSTAGRAM_AVATAR_LOGO = '/logo-jk.png'

const STATIC_POSTS = [
  { id: 'jk01', image: '/instagram/01.jpg', permalink: 'https://www.instagram.com/jk_importds', alt: 'JK IMPORTS feed 01' },
  { id: 'jk02', image: '/instagram/02.jpg', permalink: 'https://www.instagram.com/jk_importds', alt: 'JK IMPORTS feed 02' },
  { id: 'jk03', image: '/instagram/03.jpg', permalink: 'https://www.instagram.com/jk_importds', alt: 'JK IMPORTS feed 03' },
  { id: 'jk04', image: '/instagram/04.jpg', permalink: 'https://www.instagram.com/jk_importds', alt: 'JK IMPORTS feed 04' },
  { id: 'jk05', image: '/instagram/05.jpg', permalink: 'https://www.instagram.com/jk_importds', alt: 'JK IMPORTS feed 05' },
  { id: 'jk06', image: '/instagram/06.jpg', permalink: 'https://www.instagram.com/jk_importds', alt: 'JK IMPORTS feed 06' },
]

function VerifiedBadge(){
  return (
    <span aria-label="Verificado" title="Verificado" style={{display:'inline-grid',placeItems:'center',width:18,height:18,borderRadius:999,background:'#0095f6',flexShrink:0}}>
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 12.5l4 4 8-9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export default function InstagramSection(){
  const posts = STATIC_POSTS

  return (
    <section id="instagram" className="instagram-clean-section" style={{background:'#080808', borderTop:'1px solid #ffffff14', borderBottom:'1px solid #ffffff14'}}>
      <div className="site-shell">
        <div className="reveal" style={{marginBottom:8}}>
          <p className="section-kicker" style={{color:'#9b9ba3'}}>NO INSTAGRAM</p>
          <h2 style={{fontSize:'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight:800, letterSpacing:'-.03em', marginTop:12, lineHeight:0.95, color:'#f5f5f7'}}>
            Acompanhe a<br />JK IMPORTS de perto.
          </h2>
        </div>

        <div className="ig-profile-card reveal" style={{marginTop:'2.5rem'}}>
          {/* COLUNA ESQUERDA - perfil fiel ao Instagram real */}
          <div style={{display:'grid', gap:16, alignContent:'start'}}>
            <div style={{display:'flex', gap:16, alignItems:'center'}}>
              <div style={{width:96,height:96,minWidth:96,borderRadius:999,padding:3,background:'linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)', display:'grid',placeItems:'center'}}>
                <div style={{width:'100%',height:'100%',borderRadius:999,background:'#080808',padding:3,display:'grid',placeItems:'center'}}>
                  <img
                    src={INSTAGRAM_AVATAR_LOGO}
                    alt="jk_importds"
                    style={{
                      width:'100%',
                      height:'100%',
                      borderRadius:999,
                      objectFit:'cover',
                      objectPosition:'center',
                      background:'#0a0a0a',
                      display:'block',
                      border:'2px solid #080808'
                    }}
                    loading="lazy"
                    onError={e=>{ e.currentTarget.src = INSTAGRAM_AVATAR_LOGO }}
                  />
                </div>
              </div>
              <div style={{minWidth:0, display:'grid', gap:4}}>
                <div style={{display:'flex', alignItems:'center', gap:8, flexWrap:'wrap'}}>
                  <span style={{fontWeight:800, fontSize:18, color:'#f5f5f7', lineHeight:1.1, letterSpacing:'-.01em'}}>jk_importds</span>
                  <VerifiedBadge />
                </div>
                <p style={{color:'#f5f5f7', fontSize:14, fontWeight:600, lineHeight:1.2}}>JK / IMPERATRIZ E REGIÃO 💙📲</p>
              </div>
            </div>

            <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:8, textAlign:'center', padding:'16px 0', borderTop:'1px solid #ffffff14', borderBottom:'1px solid #ffffff14'}}>
              <div>
                <strong style={{display:'block', fontSize:16, color:'#f5f5f7', fontWeight:800, lineHeight:1.1}}>1.415</strong>
                <span style={{fontSize:13, color:'#a0a0a8', fontWeight:400}}>posts</span>
              </div>
              <div>
                <strong style={{display:'block', fontSize:16, color:'#f5f5f7', fontWeight:800, lineHeight:1.1}}>30,3 mil</strong>
                <span style={{fontSize:13, color:'#a0a0a8', fontWeight:400}}>seguidores</span>
              </div>
              <div>
                <strong style={{display:'block', fontSize:16, color:'#f5f5f7', fontWeight:800, lineHeight:1.1}}>7.521</strong>
                <span style={{fontSize:13, color:'#a0a0a8', fontWeight:400}}>seguindo</span>
              </div>
            </div>

            <div style={{display:'grid', gap:3, paddingTop:2}}>
              <p style={{fontSize:14, lineHeight:1.5, color:'#f5f5f7', fontWeight:700}}>PERFIL ÚNICO 💙</p>
              <p style={{fontSize:14, lineHeight:1.5, color:'#f5f5f7'}}>• A loja que mais vende celulares💙</p>
              <p style={{fontSize:14, lineHeight:1.5, color:'#f5f5f7'}}>📍Loja física em Imperatriz</p>
              <p style={{fontSize:14, lineHeight:1.5, color:'#f5f5f7'}}>🚨OFERTAS NOS STORIES🚨</p>
              <p style={{fontSize:14, lineHeight:1.5, color:'#f5f5f7'}}>• Nosso WhatsApp:👇🏻</p>
            </div>

            <a href="https://www.instagram.com/jk_importds" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{justifyContent:'center', textDecoration:'none', marginTop:10, background:'#0095f6', borderColor:'#0095f6'}}>Seguir no Instagram</a>
          </div>

          {/* COLUNA DIREITA - grade 3x2 — 6 imagens em ordem 01-06 */}
          <div className="ig-grid" style={{alignContent:'start'}}>
            {posts.map((p, idx)=> {
              const isPinned = idx === 0 || idx === 1 || idx === 2
              const isAlbum = idx === 3 || idx === 5
              return (
                <a key={p.id} href={p.permalink} target="_blank" rel="noopener" className="ig-tile" aria-label={`Abrir post no Instagram`} style={{position:'relative', borderColor:'#ffffff14'}}>
                  <img src={p.image} alt={p.alt} loading="lazy" style={{objectPosition:'center'}} onError={e=>{e.currentTarget.style.display='none'}} />
                  {isPinned && (
                    <span aria-hidden="true" style={{position:'absolute', top:8, right:8, color:'#fff', filter:'drop-shadow(0 1px 3px rgba(0,0,0,0.7))', lineHeight:0}}>
                      <Pin size={14} strokeWidth={2} fill="white" style={{transform:'rotate(45deg)', display:'block'}} />
                    </span>
                  )}
                  {isAlbum && (
                    <span aria-hidden="true" style={{position:'absolute', top:8, right:8, color:'#fff', filter:'drop-shadow(0 1px 3px rgba(0,0,0,0.7))', lineHeight:0}}>
                      <Copy size={14} strokeWidth={2} style={{display:'block'}} />
                    </span>
                  )}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
