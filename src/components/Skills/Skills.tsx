import { FC } from 'react'
import type { SkillGroup } from '../../types'
import './Skills.scss'

interface SkillsProps {
  skills: SkillGroup[]
}

export const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="sectionTitle">
          <h2>Навыки</h2>
          <p>Технологии и инструменты.</p>
        </div>

        <div className="grid2">
          {skills.map((s) => (
            <div className="card itemCard" key={s.group}>
              <div className="itemTop">
                <h3 className="itemTitle">{s.group}</h3>
              </div>
              <div className="tags" aria-label={s.group}>
                {s.items.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
