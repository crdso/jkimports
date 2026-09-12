export default function PoliticaPrivacidade(){
  return (
    <main style={{paddingTop:96, background:'var(--site-bg)', minHeight:'100vh'}}>
      <section style={{padding:'32px 0 64px'}}>
        <div style={{maxWidth:760, margin:'0 auto', padding:'0 clamp(1rem,3vw,1.5rem)'}}>
          <p style={{fontSize:11, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--site-muted)', marginBottom:12}}>Política de Privacidade</p>
          <h1 style={{fontSize:'clamp(1.8rem,4vw,2.6rem)', fontWeight:800, letterSpacing:'-.03em', lineHeight:1.05, color:'var(--site-text)'}}>Como cuidamos dos seus dados</h1>
          <p style={{marginTop:12, fontSize:14, color:'var(--site-muted)', lineHeight:1.6}}>Texto curto e direto sobre o que o site da JK IMPORTS realmente faz hoje. Sem juridiquês.</p>

          <div style={{marginTop:36, display:'grid', gap:36}}>
            <section>
              <h2 style={{fontSize:17, fontWeight:700, color:'var(--site-text)', marginBottom:8}}>1. Resumo direto</h2>
              <p style={{color:'var(--site-muted)', fontSize:14, lineHeight:1.7}}>A JK IMPORTS usa este site apenas para mostrar produtos, serviços e formas de contato. Você navega, vê o catálogo e, se quiser, fala com a gente pelo WhatsApp. Não vendemos com pagamento online por aqui.</p>
            </section>

            <section>
              <h2 style={{fontSize:17, fontWeight:700, color:'var(--site-text)', marginBottom:8}}>2. Dados utilizados pelo site</h2>
              <p style={{color:'var(--site-muted)', fontSize:14, lineHeight:1.7}}>O site não pede cadastro ou login para navegar. Só usamos dados quando você decide nos enviar — por exemplo, ao preencher o formulário de contato com nome, telefone, assunto e mensagem.</p>
            </section>

            <section>
              <h2 style={{fontSize:17, fontWeight:700, color:'var(--site-text)', marginBottom:8}}>3. Carrinho e armazenamento local</h2>
              <p style={{color:'var(--site-muted)', fontSize:14, lineHeight:1.7}}>Quando você adiciona algo ao carrinho, os itens ficam salvos apenas no seu navegador (localStorage: <code style={{background:'var(--site-panel-soft)', border:'1px solid var(--site-border)', padding:'1px 6px', borderRadius:6, fontSize:12}}>jkimports_cart_v1</code>). É só para lembrar o que você escolheu. Fica salvo até você limpar ou remover os itens. Nada vai para um banco de dados da JK IMPORTS até você nos chamar.</p>
            </section>

            <section>
              <h2 style={{fontSize:17, fontWeight:700, color:'var(--site-text)', marginBottom:8}}>4. Contato pelo WhatsApp</h2>
              <p style={{color:'var(--site-muted)', fontSize:14, lineHeight:1.7}}>O formulário de contato não salva nada sozinho. Ao clicar em enviar, o site só abre o seu WhatsApp com a mensagem pronta para o número da JK IMPORTS. O que você escreveu só chega até nós se você enviar a mensagem por lá.</p>
            </section>

            <section>
              <h2 style={{fontSize:17, fontWeight:700, color:'var(--site-text)', marginBottom:8}}>5. Google Maps, Instagram e links externos</h2>
              <p style={{color:'var(--site-muted)', fontSize:14, lineHeight:1.7}}>Links para Google Maps, Instagram (<code style={{background:'var(--site-panel-soft)', border:'1px solid var(--site-border)', padding:'1px 6px', borderRadius:6, fontSize:12}}>@jk_importds</code>) e WhatsApp te levam para fora do nosso site. Cada serviço tem suas próprias regras. O Instagram pode ser carregado via função do servidor (<code style={{background:'var(--site-panel-soft)', border:'1px solid var(--site-border)', padding:'1px 6px', borderRadius:6, fontSize:12}}>/.netlify/functions/instagram</code>), sem expor senhas no navegador.</p>
            </section>

            <section>
              <h2 style={{fontSize:17, fontWeight:700, color:'var(--site-text)', marginBottom:8}}>6. Cookies e preferências do site</h2>
              <p style={{color:'var(--site-muted)', fontSize:14, lineHeight:1.7}}>Hoje o site usa apenas armazenamento local essencial:</p>
              <ul style={{marginTop:8, paddingLeft:18, color:'var(--site-muted)', fontSize:14, lineHeight:1.7, display:'grid', gap:4}}>
                <li><code style={{background:'var(--site-panel-soft)', border:'1px solid var(--site-border)', padding:'1px 6px', borderRadius:6, fontSize:12}}>jkimports_theme</code> — lembra se você prefere tema claro ou escuro;</li>
                <li><code style={{background:'var(--site-panel-soft)', border:'1px solid var(--site-border)', padding:'1px 6px', borderRadius:6, fontSize:12}}>jkimports_cart_v1</code> — lembra seu carrinho;</li>
                <li><code style={{background:'var(--site-panel-soft)', border:'1px solid var(--site-border)', padding:'1px 6px', borderRadius:6, fontSize:12}}>jkimports_cookie_consent</code> — lembra sua escolha no aviso de cookies.</li>
              </ul>
              <p style={{marginTop:8, color:'var(--site-muted)', fontSize:14, lineHeight:1.7}}>Não usamos cookies de rastreamento ou publicidade. O aviso que aparece no canto serve só para te informar. Aceitar ou recusar não muda o funcionamento do carrinho ou do tema.</p>
            </section>

            <section>
              <h2 style={{fontSize:17, fontWeight:700, color:'var(--site-text)', marginBottom:8}}>7. Direitos do usuário pela LGPD</h2>
              <p style={{color:'var(--site-muted)', fontSize:14, lineHeight:1.7}}>Você pode pedir para ver, corrigir ou excluir os dados que nos enviou, além de tirar dúvidas sobre como usamos suas informações. É só chamar a gente e faremos o possível dentro do prazo legal.</p>
            </section>

            <section>
              <h2 style={{fontSize:17, fontWeight:700, color:'var(--site-text)', marginBottom:8}}>8. Contato</h2>
              <p style={{color:'var(--site-muted)', fontSize:14, lineHeight:1.7}}>Para qualquer assunto sobre privacidade, fale com a JK IMPORTS pelo WhatsApp: <a href="https://api.whatsapp.com/send/?phone=5599984599773" target="_blank" rel="noopener" style={{color:'var(--site-orange)', fontWeight:700, textDecoration:'none'}}>+55 99 98459-9773</a>.</p>
            </section>

            <section>
              <h2 style={{fontSize:17, fontWeight:700, color:'var(--site-text)', marginBottom:8}}>9. Última atualização</h2>
              <p style={{color:'var(--site-muted)', fontSize:14, lineHeight:1.7}}>Agosto de 2026. Se algo no site mudar, atualizamos a data aqui em cima.</p>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
