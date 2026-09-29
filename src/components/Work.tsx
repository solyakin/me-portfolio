import { Arrow } from './Arrow'

const projects = [
  { number: '01', name: 'Admission Hub', type: 'Academic planning', description: 'A simplified application to guide admission processes for students to any institution.', impact: '30% less time spent on admission', stack: ['React', 'TypeScript', 'TanStack Query'], tone: 'coral', url: "https://admissionhub.education" },
  { number: '02', name: '10mg Health', type: 'Healthcare credit', description: 'A collateral-free financing for clinics, pharmacies, and hospitals. with approval in minutes.', impact: 'access healthcare credit in minutes', stack: ['React', 'TypeScript', 'Playwright'], tone: 'blue', url: "https://www.10mg.ai/" },
  { number: '03', name: 'Koins App', type: 'Financial app product', description: 'A guided planning experience that turns complex investment data into confident next steps.', impact: '2.4x increase in user engagement',  stack: ['Next.js', 'D3', 'TypeScript'], tone: 'lime', url: "https://www.koinsbank.com" },
]

export function Work() {
  return (
    <section id="work" className="work-section" aria-labelledby="work-title">
      <header className="section-heading">
        <span>01 / Selected work</span>
        <h2 id="work-title">A few things<br />I&apos;m proud of.</h2>
      </header>
      <div className="project-list">
        {projects.map((project) => 
        <article className={`project project-${project.tone}`} key={project.name}>
          <div className="project-visual" aria-hidden="true">
            <span>{project.number}</span><div className="visual-shape" />
          </div>
          <div className="project-content">
            <p className="project-type">{project.type}</p>
            <h3>{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-impact">{project.impact}</p>
            <div className="project-footer">
              <ul aria-label="Technology stack">
                {project.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <a className="circle-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.name} case study`}><Arrow /></a>
            </div>
          </div>
        </article>)}
        </div>
      <a className="outlined-link" href="#contact">View all projects <Arrow /></a>
    </section>
  )
}
