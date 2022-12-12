export const API_CHAT_LIST = '/api/chats/'
export const API_CREATE_CHAT = 'api/chats/new/'

export const API_CHAT_INFO = chatId => `/api/chats/info/${chatId}/`
export const API_CHAT_MESSAGES = chatId => `api/chats/poll/${chatId}/`
export const API_CHAT_LAST_MESSAGE = chatId => `api/chats/poll/last/${chatId}/`
export const API_CHAT_CREATE_MESSAGE = chatId => `api/chats/poll/${chatId}/new/`

export const LOGIN = '/login/'
export const LOGOUT = '/logout/'

export const VK_BACKEND_MESSAGES = 'https://tt-front.vercel.app/messages'
export const VK_BACKEND_CREATE_MESSAGE = 'https://tt-front.vercel.app/message'

export const IMAGE_TEMPLATE = 'https://via.placeholder.com/128'
