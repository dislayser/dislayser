interface Link {
  label: string
  href: string
}

interface Highlight {
  label: string
  value: string
}

interface Profile {
  name: string
  role: string
  location: string
  tagline: string
  email: string
  links: Link[]
  highlights: Highlight[]
}

interface Project {
  title: string
  description: string
  tags: string[]
  links: Link[]
}

interface SkillGroup {
  group: string
  items: string[]
}

interface Experience {
  title: string
  period: string
  bullets: string[]
}

export const profile: Profile = {
  name: 'Даутов Азат',
  role: 'PHP-разработчик',
  location: 'Уфа',
  tagline:
    'Backend-разработчик с сильным бэкграундом в системном администрировании. Fullstack специалист (Bootstrap, jQuery). Отлично знаю PHP 8+, Symfony, Yii и собственный микрофреймворк.',
  email: 'dislayser@mail.ru',
  links: [
    { label: 'GitHub', href: 'https://github.com/dislayser' },
    { label: 'Telegram', href: 'https://t.me/dislayser' },
    { label: 'Phone', href: 'tel:+79178010398' },
  ],
  highlights: [
    { label: 'Специализация', value: 'PHP · Symfony · Backend · Fullstack' },
    { label: 'Опыт', value: '4 года 8 месяцев' },
    { label: 'Языки', value: 'RU (Родной) · EN (B2)' },
  ],
}

export const projects: Project[] = [
  {
    title: 'SaaS Dashboard',
    description:
      'Дашборд с ролями, таблицами, фильтрами и графиками. Оптимизация ререндеров и загрузки данных.',
    tags: ['React', 'Vite', 'Charts', 'TanStack'],
    links: [
      { label: 'Демо', href: 'https://example.com' },
      { label: 'Код', href: 'https://github.com/username/repo' },
    ],
  },
  {
    title: 'Landing для продукта',
    description:
      'Быстрый лендинг с анимациями, формой заявки и интеграцией аналитики.',
    tags: ['React', 'CSS', 'A11y'],
    links: [{ label: 'Сайт', href: 'https://example.com' }],
  },
  {
    title: 'Компонентная библиотека',
    description:
      'Набор UI-компонентов с токенами, темизацией, документацией и визуальными тестами.',
    tags: ['React', 'Design System', 'Storybook'],
    links: [{ label: 'Код', href: 'https://github.com/username/ui-kit' }],
  },
]

export const skills: SkillGroup[] = [
  { group: 'Backend', items: ['PHP 8+', 'Symfony 7.4', 'Yii', 'собственный микрофреймворк'] },
  { group: 'Frontend', items: ['JavaScript', 'jQuery', 'Bootstrap 4/5', 'HTML5', 'React', 'Node.js'] },
  { group: 'Databases', items: ['MySQL', 'PostgreSQL', 'MariaDB', 'Elasticsearch'] },
  { group: 'DevOps', items: ['Docker', 'Docker Compose', 'Linux', 'Apache', 'Nginx', 'Mikrotik'] },
  { group: 'Tools', items: ['Git', 'API', 'WebSocket', 'Chart.js', 'Ajax', 'Python'] },
]

export const experience: Experience[] = [
  {
    title: 'PHP-разработчик · ООО "Содериз"',
    period: 'Март 2025 — сейчас (1 год 2 месяца)',
    bullets: [
      'Разработал административную панель с нуля, что сократило время обработки данных менеджерами на 30%.',
      'Провел миграцию легаси-проекта с PHP 7 на PHP 8.4, Symfony 5.4 → 7.4, обновил 40+ зависимостей (+40% производительности).',
      'Оптимизировал SQL-запросы (через индексы и рефакторинг), снизив время ответа API с 3 сек до 200 мс.',
      'Перенес сборку фронтенда с webpack на vite, структурирую отделение фронта и бэка (API).',
      'Обновил все зависимости composer и npm. Fullstack разработка, тестирование, проверка уязвимостей.',
    ],
  },
  {
    title: 'Главный системный администратор · Фобос',
    period: 'Март 2021 — Август 2024 (3 года 6 месяцев)',
    bullets: [
      'Администрирование Windows, Linux, 1C, сетей и Mikrotik (3 точки по городам в единую ЛВС).',
      'Автоматизировал рутинные задачи на Python/Batch/Bash, сэкономив 10 часов в неделю.',
      'Диагностирование, монтаж ЛВС, настройка серверов (FTP, HTTP), обслуживание кассовых аппаратов.',
      'Единственный системный администратор: поддержка ПК/серверов/сетевого оборудования, обучение пользователей.',
      'Настройка бэкапов, мониторинг работоспособности, реагирование на заявки пользователей.',
    ],
  },
]
