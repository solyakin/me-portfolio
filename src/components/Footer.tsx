import { Arrow } from './Arrow'

export function Footer() {
  return (
    <footer id="contact" className="footer">
      <p className="eyebrow">05 / Contact</p>
      <h2>Have a thoughtful<br />problem to solve?</h2>
      <a className="email-link" href="mailto:solomon.akinlade19@gmail.com">solomon.akinlade19@gmail.com <Arrow /></a>
      <div className="footer-meta">
        <span>© 2025 Solomon Akinlade</span>
        <div>
          <a href="https://github.com/solyakin" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/akinlade-solomon/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:solomon.akinlade19@gmail.com">Email</a>
        </div>
        <span>Designed & built with care</span>
      </div>
    </footer>
  )
}
