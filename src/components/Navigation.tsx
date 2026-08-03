import { Arrow } from './Arrow'

export function Navigation() {
  return (
    <nav className="nav" aria-label="Primary navigation">
      <a className="wordmark" href="#top" aria-label="Solomon Akinlade home">SA<span>.</span></a>
      <div className="nav-links">
        <a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a>
      </div>
      <a className="nav-contact" href="#contact">Let&apos;s talk <Arrow /></a>
    </nav>
  )
}
