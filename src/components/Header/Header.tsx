import { FC, useState } from 'react'
import type { Profile } from '../../types'
import './Header.scss'

interface HeaderProps {
  profile: Profile
  theme: 'light' | 'dark'
  onThemeToggle: () => void
}

export const Header: FC<HeaderProps> = ({ profile, theme, onThemeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

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

        <button
          className="menuToggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Открыть меню"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav 
          className={`nav ${isMenuOpen ? 'nav--open' : ''}`}
          aria-label="Навигация по странице"
        >
          <a href="#projects" onClick={handleNavClick}>Проекты</a>
          <a href="#skills" onClick={handleNavClick}>Навыки</a>
          <a href="#experience" onClick={handleNavClick}>Опыт</a>
          <a href="#contact" onClick={handleNavClick}>Контакты</a>
          <button
            className="btn btnGhost"
            type="button"
            onClick={() => {
              onThemeToggle()
              handleNavClick()
            }}
            aria-label="Переключить тему"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  )
}
