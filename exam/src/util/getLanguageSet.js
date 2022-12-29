const LANGUAGE_SET_URL = 'https://microsoft-translator-text.p.rapidapi.com/languages?api-version=3.0'

export const getLanguageSet = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
      'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
      'x-rapidapi-ua': 'RapidAPI-Playground'
    }
  }

  return await fetch(LANGUAGE_SET_URL, options)
    .then(response => response.json())
    .then(response => Object.entries(response))
    .catch(err => console.error(err))
}
