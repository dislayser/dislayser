# ContentService - Руководство

## Структура

```
src/
├── types/index.ts              # Типы данных
├── services/contentService.ts  # Сервис для получения данных
├── locales/
│   ├── ru/index.ts             # Данные на русском
│   └── en/index.ts             # Данные на английском (в будущем)
└── App.tsx                     # Компонент с загрузкой данных
```

## Использование

### В компонентах (React)

```typescript
import { useEffect, useState } from 'react'
import { contentService } from './services/contentService'
import type { Profile } from './types'

function MyComponent() {
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    contentService.getProfile().then(setProfile)
  }, [])

  return profile ? <h1>{profile.name}</h1> : <p>Загрузка...</p>
}
```

### Использование сервиса

```typescript
import { contentService } from './services/contentService'

// Получить профиль на текущей локали
const profile = await contentService.getProfile()

// Получить данные на конкретной локали
const profileEn = await contentService.getProfile('en')

// Получить все данные сразу
const allContent = await contentService.getAllContent()

// Установить текущую локаль
contentService.setLocale('en')

// Очистить кэш
contentService.clearCache()
```

## Расширение для API

Чтобы подключить API вместо локальных данных, отредактируйте `src/services/contentService.ts`:

```typescript
private async loadLocaleData(locale: Locale): Promise<ContentData> {
  if (this.cache[locale]) {
    return this.cache[locale] as ContentData
  }

  // Вместо этого:
  // const localeModule = await import(`../locales/${locale}`)

  // Делайте это:
  const response = await fetch(`/api/content/${locale}`)
  const data: ContentData = await response.json()

  this.cache[locale] = data
  return data
}
```

## Добавление новой локали

1. Создте файл `src/locales/en/index.ts`
2. Экспортируйте данные аналогично `ru/index.ts`:

```typescript
export const profile: Profile = { ... }
export const projects: Project[] = [ ... ]
export const skills: SkillGroup[] = [ ... ]
export const experience: Experience[] = [ ... ]
```

3. Используйте через сервис:

```typescript
const profileEn = await contentService.getProfile('en')
```

## Особенности

- **Singleton паттерн**: используется один экземпляр сервиса
- **Кэширование**: данные локали кэшируются в памяти после первой загрузки
- **Динамический импорт**: локали загружаются по требованию
- **TypeScript**: полная типизация для всех данных
- **Асинхронность**: готово к работе с API
