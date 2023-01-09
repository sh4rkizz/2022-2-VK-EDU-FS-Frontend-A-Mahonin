import { translate } from './utils/translator'
import { translateParameters } from './types'

const testImTooTired: translateParameters = {
  text: 'My name is Khan (good movie btw)',
  from: 'en',
  to: 'ru',
  result: 'Меня зовут Хан (хороший фильм btw)'
}

const testBackTranslation: translateParameters = {
  text: 'Я так устал переписывать проект на тайпeскрипте...',
  from: 'ru',
  to: 'en',
  result: 'I\'m so tired of rewriting the project in typescript...'
}

const testDetectLanguage: translateParameters = {
  text: 'Sing with me sing for the year, Sing for the laughter, and sing for the tear',
  to: 'ru',
  result: 'Пой со мной пой в течение года, пой для смеха и пой для слезы'
}

test('translations', async () => {
  await expect(translate(testImTooTired)).toBe(testImTooTired.result)
  await expect(translate(testBackTranslation)).toBe(testImTooTired.result)
  await expect(translate(testDetectLanguage)).toBe(testImTooTired.result)
})
