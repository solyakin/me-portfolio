import { Arrow } from './Arrow'

export function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="about-mark" aria-hidden="true">S</div>
      <div className="about-content">
        <span className="eyebrow">04 / About me</span>
        <h2 id="about-title">I care about the<br /><em>details</em> that make<br />technology feel human.</h2>
        <p>My best work happens at the intersection of product thinking and frontend craft. I partner closely with designers, researchers, and engineers to shape systems that are as useful for the people using them as they are maintainable for the teams behind them.</p>
        <a className="text-link" href="#contact">More about my approach <Arrow /></a>
      </div>
    </section>
  )
}
