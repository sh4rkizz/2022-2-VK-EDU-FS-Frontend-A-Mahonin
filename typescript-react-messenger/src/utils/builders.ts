import { message, chat, lastMessage, builtLastMessage, messageBasic } from '../types'

export const buildMessage = (message: message): messageBasic => {
  return {
    text: message.text,
    image: message.image ?? '',
    audio: message.audio ?? ''
  }
}

export const buildLastMessage = (response: chat): builtLastMessage => {
  const lastMessage: lastMessage = response.lastMessage

  return {
    id: response.id,
    title: response.title,
    lastMessage: {
      author: lastMessage.author,
      text: lastMessage.text,
      timestamp: lastMessage.timestamp,
      isRead: lastMessage.isRead
    }
  }
}

export const buildVkChat = (lastMessage: lastMessage): builtLastMessage => {
  const chat: chat = {
    id: '0',
    title: 'vk chat',
    lastMessage
  }

  return buildLastMessage(chat)
}
