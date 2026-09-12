import { Link } from 'react-router-dom'
const FAQS=[
  {q:'Quais serviços a JK IMPORTS oferece?',a:'Diagnóstico e conserto de celulares, troca de peças, películas, acessórios, aparelhos novos e seminovos e assistência técnica.'},
  {q:'Como pedir orçamento?',a:'Envie o modelo e o defeito pelo WhatsApp. A confirmação depende do diagnóstico em bancada.'},
  {q:'Vocês vendem seminovos?',a:'Sim. Estoque rotativo, todos revisados e com garantia. Consulte a vitrine e confirme disponibilidade.'},
  {q:'Onde fica a loja?',a:'Veja a seção de localização no site e abra no Maps.'},
  {q:'Há garantia?',a:'Garantia informada conforme o serviço ou produto escolhido.'},
]
export default function FAQ(){
  return (
    <section className="home-faq-section">
      <div className="site-shell home-faq-grid">
        <div className="reveal">
          <p className="section-kicker">Dúvidas frequentes</p>
          <h2 style={{fontSize:'clamp(1.6rem,2.6vw,2.4rem)',fontWeight:800,letterSpacing:'-.03em',marginTop:8}}>Antes de visitar ou chamar.</h2>
          <p style={{color:'#85858b',marginTop:8}}>Respostas rápidas para entender como a JK IMPORTS pode ajudar.</p>
          <Link to="/loja" style={{display:'inline-flex',marginTop:12,fontWeight:700,color:'var(--site-orange)', textDecoration:'none'}}>Ver produtos →</Link>
        </div>
        <div className="home-faq-list reveal">
          {FAQS.map(f=> (
            <details key={f.q}><summary>{f.q} <span>＋</span></summary><p>{f.a}</p></details>
          ))}
        </div>
      </div>
    </section>
  )
}
