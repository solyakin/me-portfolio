import { Arrow } from './Arrow'
import photo from '../assets/myphoto.png';

export function Hero() {
  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="hero-intro">
          <span className="hero-index">00 / 05</span>
          <div className="eyebrow"><span className="status-dot" /> Available for select collaborations</div>
        </div>

        <h1 id="hero-title" className="hero-title">
          <span className="hero-name">Solomon Akinlade</span>
          Building <em>better</em><br />web experiences.
        </h1>

        <div className="hero-bottom">
          <p>Senior frontend engineer with 6+ years of experience creating fast, accessible, and thoughtful digital products.</p>
          <a className="hero-cta" href="#work">View my work <Arrow /></a>
        </div>
      </div>

      <figure className="hero-portrait">
        <img src={photo} alt="Professional portrait of Solomon Akinlade" />
        {/* <figcaption><span>Portrait / 2025</span><span>Lagos, NG</span></figcaption> */}
      </figure>

      <div className="hero-meta">
        <div><span>Discipline</span><strong>Frontend engineering</strong></div>
        <div><span>Specialism</span><strong>React & design systems</strong></div>
        <div><span>Experience</span><strong>6+ years</strong></div>
      </div>
    </section>
  )
}
