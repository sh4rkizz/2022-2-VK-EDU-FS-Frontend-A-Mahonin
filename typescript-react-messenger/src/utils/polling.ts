import { buildLastMessage, buildVkChat } from './builders'
import { messengerUrls, vkMessengerUrls } from './urls'
import { builtLastMessage, chat } from '../types'

export const pollMessages = async (chatId: string): Promise<[]> => {
  const url = chatId === '0' ? vkMessengerUrls.messages : messengerUrls.messages(chatId)

  return await fetch(url).then(async resp => await resp.json())
}

export const pollVkLastMessage = async (): Promise<undefined | builtLastMessage> => {
  const response = await fetch(vkMessengerUrls.messages)
    .then(async resp => await resp.json())
    .then(resp => resp.reverse()[0])

  if (!await response) return

  return buildVkChat(await response)
}

export const pollChats = async () => {
  const response = await fetch(messengerUrls.chatList)
    .then(async response => await response.json())
    .then((response: chat[]) => response.reverse())

  return response.map(response => response.lastMessage ? buildLastMessage(response) : null)
}

export const pollNotActiveChats = async (chats: chat[], activeChat: chat) => {
  const showNotification = () => {
    Notification.requestPermission(() => {
      new Notification('Notification', { body: 'You`ve got new message' })
    }).then()
  }

  const otherChats = chats.filter(chat => chat.id !== activeChat.id)

  await fetch(messengerUrls.chatList)
    .then(async resp => await resp.json())
    .then(resp => resp.filter((chat: chat) => chat.id !== activeChat.id))
    .then(resp => {
      if (JSON.stringify(otherChats) !== JSON.stringify(resp)) showNotification()
    })
}

export const pollChatTitle = async (chatId: string) => {
  return await fetch(messengerUrls.chatInfo(chatId))
    .then(async resp => await resp.json())
    .then(resp => resp.title)
}
