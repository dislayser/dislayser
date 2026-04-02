import { FC } from 'react'
import type { Experience as ExperienceType } from '../../types'
import './Experience.scss'

interface ExperienceProps {
  experience: ExperienceType[]
}

const formatDateRange = (from: Date, to: Date): string => {
  const today = new Date()
  const isCurrentDate = to.toDateString() === today.toDateString()
  const endDate = isCurrentDate ? 'сейчас' : to.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' })
  return `${from.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' })} — ${endDate}`
}

export const Experience: FC<ExperienceProps> = ({ experience }) => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="sectionTitle">
          <h2>Опыт</h2>
          <p>Где работал и что улучшал.</p>
        </div>

        <div className="grid2">
          {experience.map((e) => (
            <article className="card itemCard" key={e.title}>
              <div className="itemTop">
                <h3 className="itemTitle">{e.title}</h3>
                <span className="pill">
                  {Array.isArray(e.period) ? formatDateRange(e.period[0], e.period[1]) : e.period}
                </span>
              </div>
              <ul className="itemDesc" style={{ marginTop: 12 }}>
                {e.bullets.map((b) => (
                  <li key={b} style={{ marginBottom: 8 }}>
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
