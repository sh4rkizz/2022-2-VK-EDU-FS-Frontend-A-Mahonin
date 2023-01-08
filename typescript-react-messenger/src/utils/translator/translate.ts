import { translationUrls } from '../urls'
import { translateParameters } from '../../types'
import { findCacheTranslation, storeTranslation } from './cacheTranslation'

export const translate = async (insertion: translateParameters): Promise<string> => {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
      'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
    },
    body: `[{"Text":"${insertion.text}"}]`
  }

  const cachedTranslation = findCacheTranslation({
    text: insertion.text,
    to: insertion.to,
    from: insertion.from
  })

  if (cachedTranslation) return cachedTranslation

  const translation = await fetch(translationUrls.translate(insertion.to, insertion.from), options)
    .then(async response => await response.json())
    .catch(err => {
      console.error(err)
    })

  const translated = await translation?.[0]?.translations?.[0].text

  storeTranslation({
    text: insertion.text,
    from: insertion.from,
    to: insertion.to,
    result: translated
  })

  return translated
}
