import pt from '../locales/pt.json'
import en from '../locales/en.json'
import fr from '../locales/fr.json'

const translations = {
  pt,
  en,
  fr
}

export const getTranslation = (language, key) => {
  const keys = key.split('.')
  let value = translations[language] || translations['en']
  
  for (const k of keys) {
    if (value && value[k]) {
      value = value[k]
    } else {
      return key // Retorna a chave se não encontrar a tradução
    }
  }
  
  return value
}

export default translations


