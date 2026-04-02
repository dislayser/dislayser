import { useEffect, useMemo, useState, FC } from 'react'
import './App.scss'
import { contentService } from './services/contentService'
import { Header, Hero, Projects, Skills, Experience, Contact, Footer } from './components'
import type { Profile, Project, SkillGroup, Experience as ExperienceType } from './types'

type Theme = 'light' | 'dark'

const App: FC = () => {
  // Контент
  const [profile, setProfile] = useState<Profile | null>(null)
  const [projects, setProjects] = useState<Project[]>([])
  const [skills, setSkills] = useState<SkillGroup[]>([])
  const [experience, setExperience] = useState<ExperienceType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Загружаем контент при монтировании компонента
  useEffect(() => {
    const loadContent = async () => {
      try {
        setIsLoading(true)
        const [profileData, projectsData, skillsData, experienceData] = await Promise.all([
          contentService.getProfile(),
          contentService.getProjects(),
          contentService.getSkills(),
          contentService.getExperience(),
        ])

        setProfile(profileData)
        setProjects(projectsData)
        setSkills(skillsData)
        setExperience(experienceData)
      } catch (error) {
        console.error('Ошибка при загрузке контента:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadContent()
  }, [])

  // Тема
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

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  // Показываем лоадер пока загружаются данные
  if (isLoading || !profile) {
    return <div className="app"><div style={{ padding: '2rem', textAlign: 'center' }}>Загрузка...</div></div>
  }

  return (
    <div className="app">
      <Header profile={profile} theme={theme} onThemeToggle={toggleTheme} />

      <main id="top">
        <Hero profile={profile} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Contact profile={profile} />
      </main>

      <Footer profile={profile} />
    </div>
  )
}

export default App
