export const baseUrl = ({ url }) => `https://microsoft-translator-text.p.rapidapi.com${ url }`
export const langSetUrl = baseUrl({ url: '/languages?api-version=3.0' })
export const performTranslateUrl = ({ from, to }) => baseUrl({
  url: `/translate?from%5B0%5D=${ from }&to%5B0%5D=${ to }&api-version=3.0&profanityAction=NoAction&textType=plain`
})
