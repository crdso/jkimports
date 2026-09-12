import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

const TITLES = {
  '/': 'JK IMPORTS | Tecnologia e assistência técnica',
  '/loja': 'Loja | JK IMPORTS',
  '/assistencia': 'Assistência Técnica | JK IMPORTS',
  '/contato': 'Contato | JK IMPORTS',
  '/politica-de-privacidade': 'Política de Privacidade | JK IMPORTS',
}

function getTitle(pathname){
  const p = pathname.replace(/\/+$/, '') || '/'
  if(TITLES[p]) return TITLES[p]
  return '404 | JK IMPORTS'
}

export default function PageTitle(){
  const { pathname } = useLocation()
  const title = getTitle(pathname)
  useLayoutEffect(()=>{
    document.title = title
  },[title])
  useEffect(()=>{
    document.title = title
  },[title])
  return null
}
