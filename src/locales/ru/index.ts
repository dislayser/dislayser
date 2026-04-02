import type { Profile, Project, SkillGroup, Experience } from '../../types'

const username: string = 'dislayser'

export const experience: Experience[] = [
  {
    title: 'PHP-разработчик · ООО "Содериз"',
    period: [new Date('2025-03-01'), new Date()],
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
    period: [new Date('2021-03-01'), new Date('2024-08-31')],
    bullets: [
      'Администрирование Windows, Linux, 1C, сетей и Mikrotik (3 точки по городам в единую ЛВС).',
      'Автоматизировал рутинные задачи на Python/Batch/Bash, сэкономив 10 часов в неделю.',
      'Диагностирование, монтаж ЛВС, настройка серверов (FTP, HTTP), обслуживание кассовых аппаратов.',
      'Единственный системный администратор: поддержка ПК/серверов/сетевого оборудования, обучение пользователей.',
      'Настройка бэкапов, мониторинг работоспособности, реагирование на заявки пользователей.',
    ],
  },
]

export const profile: Profile = {
  name: 'Даутов Азат',
  role: 'Fullstack Developer',
  location: 'Уфа',
  tagline:
    'Backend-разработчик с сильным бэкграундом в системном администрировании. Fullstack специалист (Bootstrap, jQuery). Отлично знаю PHP 8+, Symfony, Yii и собственный микрофреймворк.',
  email: `${username}@mail.ru`,
  links: [
    { label: 'GitHub', href: `https://github.com/${username}` },
    { label: 'Telegram', href: `https://t.me/${username}` },
    { label: 'HeadHunter', href: 'https://ufa.hh.ru/resume/4a2de60aff0cd3df380039ed1f7633785a4f43' },
    { label: 'Phone', href: 'tel:+79178010398' },
  ],
  highlights: [
    { label: 'Специализация', value: 'PHP · Symfony · Backend' },
    {
      label: 'Опыт',
      value: ((from: Date, to: Date): string => {
        const diffInSeconds = Math.floor((from.getTime() - to.getTime()) / 1000)

        const years = Math.trunc(diffInSeconds / (365 * 24 * 60 * 60))
        const mounths = Math.trunc((diffInSeconds % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60))

        return `${years} ${years === 1 ? 'год' : years >= 2 && years <= 4 ? 'года' : 'лет'}${mounths > 0 ? ` ${mounths} ${mounths === 1 ? 'месяц' : mounths >= 2 && mounths <= 4 ? 'месяца' : 'месяцев'}` : ''}`
      })(experience[0].period[1], experience[1].period[0]),
    },
    { label: 'Языки', value: 'RU · EN' },
  ],
}

export const projects: Project[] = [
  {
    title: 'ToDo - корпоративная CRM',
    description:
      'Внутренная корпоративная система управления заказами. Реализована на собственном микрофреймворке. Гибкая архитектура с REST API.',
    tags: ['PHP', 'Realtime', 'SPA', 'Собственный микрофреймворк'],
    links: [{ label: 'Code', href: profile.links[0].href + '/fobos-todo' }],
  },
  {
    title: 'TenderGPT',
    description:
      'Электронная торговая площадка. В проекте реализованы: генерация тендеров, автоматическое создание документов, API интеграция, чат-бот для поддержки клиентов.',
    tags: ['PHP', 'React', 'Symfony', 'Bootstrap', 'Redis'],
    links: [{ label: 'Сайт', href: 'https://tendergpt.uz' }],
  },
  {
    title: 'Рендер/Редактор форм',
    description:
      'Редактор форм для генерации динамических форм с валидацией и обработкой данных.',
    tags: ['JS', 'Bootstrap', 'jQuery', 'JSON Schema'],
    links: [
      { label: 'Code', href: profile.links[0].href + '/todo-form' },
      { label: 'NPM', href: 'https://www.npmjs.com/package/todo-form' },
    ],
  },
]

export const skills: SkillGroup[] = [
  { group: 'Backend', items: ['PHP', 'Symfony', 'Yii', 'Собственный микрофреймворк'] },
  { group: 'Frontend', items: ['JavaScript', 'jQuery', 'Bootstrap', 'React', 'Node.js'] },
  { group: 'Storage', items: ['MySQL', 'PostgreSQL', 'MariaDB', 'Elasticsearch', 'Redis'] },
  { group: 'DevOps', items: ['Docker', 'Docker Compose', 'Linux', 'Apache', 'Nginx', 'Mikrotik'] },
  { group: 'Tools', items: ['Git', 'API', 'WebSocket', 'NPM', 'Vite', 'Python'] },
]
