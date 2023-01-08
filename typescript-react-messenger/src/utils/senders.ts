import { buildMessage } from './builders'
import { messengerUrls, vkMessengerUrls } from './urls'
import { receiveCSRF } from './getCSRF'
import { message, messageBasic } from '../types'

const send = async (message: message, chatId: string): Promise<string> => {
  const url = chatId === '0' ? vkMessengerUrls.createMessage : messengerUrls.createMessage(chatId)

  return await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-CSRFToken': receiveCSRF() },
    body: JSON.stringify(message.text)
  }).then(async resp => await resp.json())
}

export const sendMessage = async (message: message, chatId: string): Promise<string> => {
  return await send(message, chatId)
}

export const sendLocation = (chatId: string): void => {
  const message = (position: GeolocationPosition): messageBasic => {
    return {
      text: `https://www.openstreetmap.org/#map=18/${ position.coords.latitude }/${ position.coords.longitude }`,
      image: '',
      audio: ''
    }
  }

  const positionFailure = (): void => {
    alert('This browser is denying geolocation access')
  }
  const positionSuccess = async (position: GeolocationPosition): Promise<string> =>
    await send(buildMessage(message(position)), chatId)

  navigator.geolocation.getCurrentPosition(positionSuccess, positionFailure)
}

export const createNewMockChat = (userId: string): void => {
  const body = {
    creator: userId,
    areNotificationsOn: true,
    title: 'Just another mocked chat',
    isGroupChat: true
  }

  fetch(messengerUrls.createChat, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-CSRFToken': receiveCSRF() },
    body: JSON.stringify(body)
  }).then(async resp => await resp.json())
}
