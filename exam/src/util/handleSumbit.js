import { performTranslate } from './performTranslate'

export const handleSubmit = async ({ text, langPick }) => {
  let translations = []

  let translated = await performTranslate({ text: text, translateTo: langPick })

  translated = translated[0].translations[0].text

  if (localStorage.length) translations = JSON.parse(localStorage.getItem('translations'))
  translations.push([text, langPick, translated])

  localStorage.setItem('translations', JSON.stringify(translations))

  return translated
}
