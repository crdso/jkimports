// Netlify Function: Instagram Graph API proxy
// Nunca exponha o token no frontend. Use environment variables:
//   INSTAGRAM_ACCESS_TOKEN
//   INSTAGRAM_USER_ID
//   INSTAGRAM_GRAPH_VERSION (opcional, default v19.0)
// Esta função tenta buscar dados reais e retorna fallback em caso de erro,
// permitindo que o frontend troque de fallback manual → API sem refazer layout.

export async function handler(event, context) {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN
  const userId = process.env.INSTAGRAM_USER_ID
  const version = process.env.INSTAGRAM_GRAPH_VERSION || 'v19.0'

  // Se não houver credenciais, retorna fallback manual (o frontend já faz isso)
  if (!token || !userId) {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=300' },
      body: JSON.stringify({ fallback: true, message: 'Instagram credentials not configured - using fallback' })
    }
  }

  try {
    // Exemplo: buscar perfil + mídias recentes (ajuste fields conforme necessidade)
    const fields = 'username,name,biography,profile_picture_url,media_count,followers_count,follows_count'
    const profileRes = await fetch(`https://graph.instagram.com/${version}/${userId}?fields=${fields}&access_token=${token}`)
    const profile = await profileRes.json()

    const mediaRes = await fetch(`https://graph.instagram.com/${version}/${userId}/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption&limit=6&access_token=${token}`)
    const mediaData = await mediaRes.json()

    const posts = (mediaData.data || []).slice(0,6).map(m => ({
      id: m.id,
      image: m.media_type === 'VIDEO' ? (m.thumbnail_url || m.media_url) : m.media_url,
      permalink: m.permalink,
      type: m.media_type.toLowerCase(),
      alt: m.caption ? m.caption.slice(0,80) : 'JK IMPORTS Instagram'
    }))

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=600' },
      body: JSON.stringify({
        username: profile.username,
        fullName: profile.name || 'JK IMPORTS',
        profilePic: profile.profile_picture_url,
        postsCount: profile.media_count,
        followers: profile.followers_count,
        following: profile.follows_count,
        bio: profile.biography || '',
        profileUrl: 'https://www.instagram.com/jk_importds',
        posts
      })
    }
  } catch (e) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Instagram fetch failed', fallback: true })
    }
  }
}
