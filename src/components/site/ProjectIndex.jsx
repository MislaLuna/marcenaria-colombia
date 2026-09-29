import { useState } from 'react'
import { TextLink } from './Button'
// Lista tipográfica: selecionar (hover, foco ou toque) troca imagem e informações com crossfade.
export default function ProjectIndex({ items }) {
  const [i, setI] = useState(0); const cur = items[i]
  return (
    <div className="pidx grid">
      <ul className="pidx__list">
        {items.map((p, n) => (
          <li key={p.id}>
            <button className={n === i ? 'is-on' : ''} onMouseEnter={() => setI(n)} onFocus={() => setI(n)} onClick={() => setI(n)} aria-pressed={n === i}>
              <span className="pidx__n">0{n + 1}</span><span className="pidx__t">{p.title}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="pidx__view">
        <div className="pidx__frame">
          {items.map((p, n) => p.image
            ? <img key={p.id} src={p.image} alt={n === i ? p.alt : ''} className={n === i ? 'is-on' : ''} loading="lazy" />
            : <div key={p.id} className={`pidx__ph ${n === i ? 'is-on' : ''}`}><span className="ph">[FOTO DO PROJETO]</span></div>)}
        </div>
        <div className="pidx__info" key={cur.id}>
          <p className="eyebrow">Ambiente · {cur.ambiente}</p>
          <p>{cur.text}</p>
          <TextLink to="/projetos">Ver projetos</TextLink>
        </div>
      </div>
    </div>
  )
}
