export interface lastMessage {
  text: string
  author?: string
  timestamp?: string
  isRead?: string
}

export interface message extends lastMessage {
  id?: string
  audio?: string
  image?: string
  date?: string
}

export interface messageBasic {
  text: string
  audio: string
  image: string
}

export interface builtLastMessage {
  id: string
  title: string
  lastMessage: lastMessage
}

export interface chat {
  id: string
  title: string
  lastMessage: lastMessage
}

export interface settings {
  username: string
  fullName: string
  bio: string
}

export interface translateParameters {
  text: string
  to: string
  result?: string
  from?: string
}

interface reduxActiveChatReducer {
  chat: {
    id: string
    title: string
  }
}

interface reduxChatsReducer {
  chats: chat[]
  vkChat: chat
}

interface reduxUserReducer {
  userId: string
  isUserAuthValid: boolean
  onlineAt: string
  userSettings: {
    fullName: string
    username: string
    bio: string
  }
}

interface reduxSettingsReducer {
  language: string
  preview_links: boolean
  notifications: boolean
  sound: boolean
  vibration: boolean
}

export interface reduxState {
  activeChat: reduxActiveChatReducer
  chats: reduxChatsReducer
  user: reduxUserReducer
  settings: reduxSettingsReducer
}
