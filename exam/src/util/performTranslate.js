import { performTranslateUrl } from './urls'

export const performTranslate = async ({ translateFrom, text, translateTo }) => {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
      'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
    },
    body: `[{"Text":"${ text }"}]`
  }

  return await fetch(performTranslateUrl({ from: translateFrom, to: translateTo }), options)
    .then(response => response.json())
    .catch(err => console.error(err))
}
