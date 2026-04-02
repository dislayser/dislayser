import { FC } from 'react'
import type { Profile } from '../../types'
import './Footer.scss'

interface FooterProps {
  profile: Profile
}

export const Footer: FC<FooterProps> = ({ profile }) => {
  const year = new Date().getFullYear()

  return (
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
  )
}
