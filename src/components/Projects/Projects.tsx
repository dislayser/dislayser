import { FC } from 'react'
import type { Project } from '../../types'
import './Projects.scss'

interface ProjectsProps {
  projects: Project[]
}

export const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="sectionTitle">
          <h2>Проекты</h2>
          <p>Лучшие работы и что я в них делал.</p>
        </div>

        <div className="grid3">
          {projects.map((p) => (
            <article className="card itemCard" key={p.title}>
              <div className="itemTop">
                <h3 className="itemTitle">{p.title}</h3>
                <div className="smallLinks">
                  {p.links?.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
              <p className="itemDesc">{p.description}</p>
              <div className="tags" aria-label="Теги">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
