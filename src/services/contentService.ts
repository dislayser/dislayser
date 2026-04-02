import type { ContentData, Profile, Project, SkillGroup, Experience } from '../types/index'

type Locale = 'ru' | 'en'

/**
 * ContentService - сервис для получения контента.
 * 
 * Текущая реализация:
 * - Использует локальные данные из locales/{locale}
 * 
 * Будущая реализация:
 * - Подключение API вместо локальных данных
 * - Кэширование результатов
 * - Обработка ошибок и loading состояний
 * - Автоматическое переключение языков
 */

class ContentService {
  private currentLocale: Locale = 'ru'
  private cache: Partial<Record<Locale, ContentData>> = {}

  /**
   * Устанавливает текущую локаль
   */
  setLocale(locale: Locale): void {
    this.currentLocale = locale
  }

  /**
   * Получает текущую локаль
   */
  getLocale(): Locale {
    return this.currentLocale
  }

  /**
   * Загружает данные локали
   */
  private async loadLocaleData(locale: Locale): Promise<ContentData> {
    // Проверяем кэш
    if (this.cache[locale]) {
      return this.cache[locale] as ContentData
    }

    // Динамический импорт локали
    const localeModule = await import(`../locales/${locale}`)
    const data: ContentData = {
      profile: localeModule.profile,
      projects: localeModule.projects,
      skills: localeModule.skills,
      experience: localeModule.experience,
    }

    // Сохраняем в кэш
    this.cache[locale] = data

    return data
  }

  /**
   * Получает профиль
   */
  async getProfile(locale?: Locale): Promise<Profile> {
    const data = await this.loadLocaleData(locale || this.currentLocale)
    return data.profile
  }

  /**
   * Получает проекты
   */
  async getProjects(locale?: Locale): Promise<Project[]> {
    const data = await this.loadLocaleData(locale || this.currentLocale)
    return data.projects
  }

  /**
   * Получает навыки
   */
  async getSkills(locale?: Locale): Promise<SkillGroup[]> {
    const data = await this.loadLocaleData(locale || this.currentLocale)
    return data.skills
  }

  /**
   * Получает опыт работы
   */
  async getExperience(locale?: Locale): Promise<Experience[]> {
    const data = await this.loadLocaleData(locale || this.currentLocale)
    return data.experience
  }

  /**
   * Получает все данные сразу
   */
  async getAllContent(locale?: Locale): Promise<ContentData> {
    return this.loadLocaleData(locale || this.currentLocale)
  }

  /**
   * Очищает кэш
   */
  clearCache(locale?: Locale): void {
    if (locale) {
      delete this.cache[locale]
    } else {
      this.cache = {}
    }
  }
}

// Экспортируем единственный экземпляр (singleton)
export const contentService = new ContentService()
