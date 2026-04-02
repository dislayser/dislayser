import { FC } from 'react'
import type { Profile } from '../../types'
import './Contact.scss'

interface ContactProps {
  profile: Profile
}

export const Contact: FC<ContactProps> = ({ profile }) => {
  return (
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
  )
}
