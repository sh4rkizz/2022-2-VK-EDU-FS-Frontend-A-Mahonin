const baseMessenger = 'http://localhost:8000'
const baseVkMessenger = 'https://tt-front.vercel.app'
const baseTranslation = 'https://microsoft-translator-text.p.rapidapi.com'

const buildUrl = (baseUrl: string, url: string): string => baseUrl + url

export const messengerUrls = {
  base: baseMessenger,
  chatList: '/api/chats/',
  createChat: '/api/chats/new/',
  chatInfo: (chatId: string) => buildUrl(baseMessenger, `/api/chats/info/${chatId}`),
  messages: (chatId: string) => buildUrl(baseMessenger, `api/chats/poll/${chatId}/`),
  createMessage: (chatId: string) => buildUrl(baseMessenger, `/api/chats/poll/${chatId}/new/`),
  image: 'https://via.placeholder.com/128',
  login: buildUrl(baseMessenger, '/auth/login/google-oauth2/'),
  logout: buildUrl(baseMessenger, '/logout/')
}

export const vkMessengerUrls = {
  base: baseVkMessenger,
  messages: buildUrl(baseVkMessenger, '/messages'),
  createMessage: buildUrl(baseVkMessenger, '/message')
}

export const translationUrls = {
  base: baseTranslation,
  setLanguage: buildUrl(baseTranslation, '/languages?api-version=3.0'),

  translate: (to: string, from?: string) => {
    const implicitLanguage = from ? `from%5B0%5D=${from}` : ''

    return buildUrl(baseTranslation,
      `/translate?${implicitLanguage}&to%5B0%5D=${to}&api-version=3.0&profanityAction=NoAction&textType=plain`
    )
  }
}
