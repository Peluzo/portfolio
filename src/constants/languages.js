/** Supported site languages (default is English; Portuguese and French remain selectable). */
export const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
]

export const SUPPORTED_LANGUAGE_CODES = LANGUAGES.map((l) => l.code)

export function isSupportedLanguage(code) {
  return SUPPORTED_LANGUAGE_CODES.includes(code)
}
