import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Button } from './Button'
const nav = [['/projetos','Projetos'],['/como-funciona','Como funciona'],['/sobre','Sobre'],['/contato','Contato']]
export default function SiteLayout() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="hd"><div className="wrap hd__in">
        <Link to="/" className="hd__logo" aria-label="Marcenaria Colômbia, início" onClick={() => setOpen(false)}><img src={logo} alt="" /></Link>
        <nav className={`hd__nav ${open ? 'is-open' : ''}`} aria-label="Principal">
          {nav.map(([to, l]) => <NavLink key={to} to={to} className="link" onClick={() => setOpen(false)}>{l}</NavLink>)}
          <Button to="/orcamento">Solicitar orçamento</Button>
        </nav>
        <button className="hd__tg" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Fechar' : 'Menu'}</button>
      </div></header>
      <Outlet />
      <footer className="ft"><div className="wrap">
        <div className="ft__top grid">
          <img src={logo} alt="Marcenaria Colômbia" className="ft__logo" />
          <nav aria-label="Rodapé" className="ft__nav">{nav.map(([to, l]) => <Link key={to} to={to} className="link">{l}</Link>)}<Link to="/orcamento" className="link">Orçamento</Link></nav>
          <address className="ft__contact"><span className="ph">[WHATSAPP]</span><span className="ph">[INSTAGRAM]</span><span className="ph">[LOCALIZAÇÃO]</span></address>
        </div>
        <div className="ft__bot"><span>© Marcenaria Colômbia</span><Link to="/login" className="link">Área restrita</Link></div>
      </div></footer>
    </>
  )
}
