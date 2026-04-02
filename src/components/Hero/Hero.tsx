import { FC } from 'react'
import type { Profile } from '../../types'
import './Hero.scss'

interface HeroProps {
  profile: Profile
}

export const Hero: FC<HeroProps> = ({ profile }) => {
  return (
    <section className="hero">
      <div className="container heroGrid">
        <div className="card heroCard">
          <div className="kicker">
            <span className="pill">{profile.location}</span>
            <span className="pill">Open to work</span>
          </div>
          <h1 className="h1">
            Привет, я {profile.name}. <br />
            {profile.role}.
          </h1>
          <p className="lead">{profile.tagline}</p>

          <div className="heroActions">
            <a className="btn btnPrimary" href="#projects">
              Смотреть проекты
            </a>
            <a className="btn" href={`mailto:${profile.email}`}>
              Написать на email
            </a>
            {profile.links?.[0]?.href ? (
              <a
                className="btn btnGhost"
                href={profile.links[0].href}
                target="_blank"
                rel="noreferrer"
              >
                {profile.links[0].label}
              </a>
            ) : null}
          </div>
        </div>

        <aside className="card metaCard" aria-label="Кратко обо мне">
          {profile.highlights.map((h) => (
            <div className="metaLine" key={h.label}>
              <div className="metaLabel">{h.label}</div>
              <div className="metaValue">{h.value}</div>
            </div>
          ))}
          <div className="metaLine">
            <div className="metaLabel">Контакт</div>
            <div className="metaValue">{profile.email}</div>
          </div>
        </aside>
      </div>
    </section>
  )
}
