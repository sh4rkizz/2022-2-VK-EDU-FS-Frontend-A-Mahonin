import { performTranslate } from './performTranslate'

export const handleSubmit = async ({ translateFrom, text, translateTo }) => {
  let translations = []
  let translated = await performTranslate({ translateFrom: translateFrom, text: text, translateTo: translateTo })

  translated = translated[0].translations[0].text

  if (localStorage?.getItem('exam__translations'))
    translations = JSON.parse(localStorage.getItem('exam__translations'))

  translations.push([translateFrom, text, translateTo, translated])

  localStorage.setItem('exam__translations', JSON.stringify(translations))

  return translated
}
