import {buildMessage} from './builders'
import {API_CHAT_CREATE_MESSAGE, API_CHAT_MESSAGES, API_CREATE_CHAT, VK_BACKEND_CREATE_MESSAGE} from './urls'
import {receiveCSRF} from './getCSRF'

const send = ({message, chatId}) => {
    const url = chatId === '0' ? VK_BACKEND_CREATE_MESSAGE : API_CHAT_CREATE_MESSAGE(chatId)

    return fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'X-CSRFToken': receiveCSRF()},
        body: JSON.stringify(message.text)
    }).then(resp => resp.json())
}

export const sendMessage = async ({message, chatId}) => {
    return await send({message, chatId})
}

export const sendLocation = (chatId) => {
    const positionFailure = () => alert('This browser is denying geolocation access')
    const positionSuccess = (pos) => send({
            message: buildMessage({
                text: `https://www.openstreetmap.org/#map=18/ ${pos.coords.latitude}/${pos.coords.longitude}`
            }),
            chatId: chatId
        }
    )

    return navigator.geolocation.getCurrentPosition(positionSuccess, positionFailure)
}

export const createNewMockChat = (userId) => {
    const body = {
        creator: userId,
        are_notifications_on: true,
        title: 'Just another mocked chat',
        is_group_chat: true
    }

    fetch(API_CREATE_CHAT, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'X-CSRFToken': receiveCSRF()},
        body: JSON.stringify(body)
    }).then(resp => resp.json())
}
