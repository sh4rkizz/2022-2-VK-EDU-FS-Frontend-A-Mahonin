const TRANSLATION_URL = ({ code }) => `https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=${ code }&api-version=3.0&profanityAction=NoAction&textType=plain`

export const performTranslate = async ({ text, translateTo }) => {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
      'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
    },
    body: `[{"Text":"${ text }"}]`
  }

  return await fetch(TRANSLATION_URL({ code: translateTo }), options)
    .then(response => response.json())
    .catch(err => console.error(err))
}
