import { useEffect, useMemo, useState, FC } from 'react'
import './App.scss'
import { experience, profile, projects, skills } from './content'

type Theme = 'light' | 'dark'

const App: FC = () => {
  const initialTheme = useMemo((): Theme => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia?.('(prefers-color-scheme: light)')?.matches
      ? 'light'
      : 'dark'
  }, [])

  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') root.dataset.theme = 'light'
    else delete root.dataset.theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const year = new Date().getFullYear()

  return (
    <div className="app">
      <header className="topbar">
        <div className="container topbarInner">
          <a className="brand" href="#top" aria-label="На верх страницы">
            <div className="brandMark" />
            <div className="brandTitle">
              {profile.name} <span><br />
              {profile.role}</span>
            </div>
          </a>

          <nav className="nav" aria-label="Навигация по странице">
            <a href="#projects">Проекты</a>
            <a href="#skills">Навыки</a>
            <a href="#experience">Опыт</a>
            <a href="#contact">Контакты</a>
            <button
              className="btn btnGhost"
              type="button"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              aria-label="Переключить тему"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </nav>
        </div>
      </header>

      <main id="top">
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
                    <span className="pill">{e.period}</span>
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

        <section className="section" id="contact">
          <div className="container">
            <div className="sectionTitle">
              <h2>Контакты</h2>
              <p>Давайте обсудим задачу или сотрудничество.</p>
            </div>

            <div className="card itemCard">
              <div className="grid2" style={{ gap: 12 }}>
                <div className="metaLine">
                  <div className="metaLabel">Email</div>
                  <div className="metaValue">
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </div>
                </div>
                <div className="metaLine">
                  <div className="metaLabel">Ссылки</div>
                  <div className="metaValue smallLinks">
                    {profile.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <div>
            © {year} {profile.name}. Сделано на React.
          </div>
          <div className="smallLinks">
            <a href="#top">Наверх</a>
            <a href="#projects">Проекты</a>
            <a href="#contact">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
