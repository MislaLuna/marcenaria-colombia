import hero from '../../assets/cozinha-verde.jpg'
import equipe from '../../assets/profissional-horizontal.jpg'
import { featured, steps, diferenciais } from '../../data/projects'
import Reveal from '../../components/site/Reveal'
import ProjectIndex from '../../components/site/ProjectIndex'
import { Button, TextLink } from '../../components/site/Button'

export default function Home() {
  return (
    <main>
      <section className="hero"><div className="wrap hero__in grid">
        <div className="hero__text">
          <Reveal as="p" className="eyebrow">Móveis planejados e projetos sob medida</Reveal>
          <Reveal as="h1" delay={80}>Móveis planejados com qualidade e confiança</Reveal>
          <Reveal as="p" delay={160} className="lead">Cada móvel é desenvolvido de acordo com o espaço e a necessidade de cada cliente.</Reveal>
          <Reveal delay={240} className="hero__cta"><Button to="/orcamento">Solicitar orçamento</Button><TextLink to="/projetos">Conhecer projetos</TextLink></Reveal>
        </div>
        <Reveal as="figure" delay={120} className="hero__fig">
          <img src={hero} alt="Cozinha planejada em verde com bancada de mármore e gavetas abertas" />
          <figcaption className="ph">Cozinha planejada · [PROJETO A CONFIRMAR]</figcaption>
        </Reveal>
      </div></section>

      <section className="intro wrap grid">
        <Reveal as="h2" className="intro__h">Cada projeto nasce do espaço, da necessidade e da preferência de quem vai viver nele.</Reveal>
        <Reveal delay={120} className="intro__p">
          <p>Na Marcenaria Colômbia o desenho é conversado com o cliente e ajustado até chegar à solução desejada. Cozinhas, guarda-roupas, painéis de TV e móveis sob medida, feitos por quem conhece a madeira.</p>
          <TextLink to="/sobre">Conheça a marcenaria</TextLink>
        </Reveal>
      </section>

      <section className="proj wrap">
        <Reveal className="sec-head"><p className="eyebrow">Projetos</p><h2>O que fazemos</h2></Reveal>
        <ProjectIndex items={featured} />
      </section>

      <section className="flow"><div className="wrap">
        <Reveal className="sec-head"><p className="eyebrow">Como funciona</p><h2>Do primeiro contato à montagem</h2></Reveal>
        <ol className="flow__list grid">
          {steps.map(([n, t, d], k) => (
            <Reveal as="li" key={n} delay={k * 120} className="flow__step"><span className="flow__n">{n}</span><h3>{t}</h3><p>{d}</p></Reveal>
          ))}
        </ol>
      </div></section>

      <section className="dif wrap grid">
        <Reveal as="figure" className="dif__fig"><img src={equipe} alt="Marceneiro da Marcenaria Colômbia trabalhando com uma tupia na oficina" loading="lazy" /></Reveal>
        <div className="dif__body">
          <Reveal className="sec-head"><p className="eyebrow">Diferenciais</p><h2>Feito por quem conhece o trabalho</h2></Reveal>
          <dl className="dif__list">{diferenciais.map(([t, d], k) => <Reveal key={t} delay={k * 60} className="dif__row"><dt>{t}</dt><dd>{d}</dd></Reveal>)}</dl>
        </div>
      </section>

      <section className="cta"><div className="wrap cta__in">
        <Reveal as="h2">Vamos transformar seu espaço?</Reveal>
        <Reveal delay={120}><Button to="/orcamento">Solicitar orçamento</Button></Reveal>
      </div></section>
    </main>
  )
}
