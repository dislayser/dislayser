export interface Link {
  label: string
  href: string
}

export interface Highlight {
  label: string
  value: string
}

export interface Profile {
  name: string
  role: string
  location: string
  tagline: string
  email: string
  links: Link[]
  highlights: Highlight[]
}

export interface Project {
  title: string
  description: string
  tags: string[]
  links: Link[]
}

export interface SkillGroup {
  group: string
  items: string[]
}

export interface Experience {
  title: string
  period: Date[]
  bullets: string[]
}

export interface ContentData {
  profile: Profile
  projects: Project[]
  skills: SkillGroup[]
  experience: Experience[]
}
