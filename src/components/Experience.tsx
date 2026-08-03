const roles = [
  ['2023 — Now', 'Software Engineer', 'Cavista Limited', 'Maintaining and building solutions for health care providers.'],
  ['2020 — 2022', 'Senior Frontend Engineer', 'Koins Bank', 'Building and maintaining the web platform for a fast-growing fintech startup. Leading the team in design systems, performance, and developer experience.'],
  ['2018 — 2020', 'Frontend Engineer', 'SmartRob Technology', 'Shipped customer-facing workflows and a shared UI platform from the ground up.'],
]

export function Experience() {
  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-title">
      <header className="section-heading">
        <span>02 / Experience</span>
        <h2 id="experience-title">Building with<br />intent, since 2018.</h2>
      </header>
      <div className="experience-list">
        {roles.map(([date, role, company, description]) => (
          <article className="role" key={company}>
            <p className="role-date">{date}</p><div><h3>{role}<span> / {company}</span></h3><p>{description}</p></div><span className="role-mark">+</span>
          </article>
        ))}
      </div>
    </section>
  )
}
