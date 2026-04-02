import { FC } from 'react'
import type { Profile } from '../../types'
import './Header.scss'

interface HeaderProps {
  profile: Profile
  theme: 'light' | 'dark'
  onThemeToggle: () => void
}

export const Header: FC<HeaderProps> = ({ profile, theme, onThemeToggle }) => {
  return (
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
            onClick={onThemeToggle}
            aria-label="Переключить тему"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </nav>
      </div>
    </header>
  )
}
