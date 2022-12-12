import {API_CHAT_INFO, API_CHAT_LIST, API_CHAT_MESSAGES, VK_BACKEND_MESSAGES} from './urls'
import {buildChat, buildVkChat} from './builders'


export const pollMessages = async (chatId) => {
    console.log('polling messages-of-chat:', chatId)
    const url = chatId === '0' ? VK_BACKEND_MESSAGES : API_CHAT_MESSAGES(chatId)

    return await fetch(url).then(resp => resp.json())
}

export const pollVkLastMessage = async () => {
    console.log('polling last-vk-message')

    const response = await fetch(VK_BACKEND_MESSAGES)
        .then(resp => resp.json())
        .then(resp => resp.reverse()[0])

    if (!await response) return

    return buildVkChat(await response)
}

export const pollChats = async () => {
    console.log('polling chat-list')

    const response = await fetch(API_CHAT_LIST)
        .then(resp => resp.json())
        .then(resp => resp.reverse())

    return response.map(resp => resp.last_message ? buildChat(resp) : null)
}

export const pollNotActiveChats = async (chats, activeChat) => {
    console.log('polling non-active-chats')

    const showNotification = () => {
        Notification.requestPermission(() => {
            new Notification('Notification', {body: 'You`ve got new message'})
        }).then()
    }

    const otherChats = chats.filter(chat => chat.id !== activeChat.id)

    await fetch(API_CHAT_LIST)
        .then(resp => resp.json())
        .then(resp => resp.filter(chat => chat.id !== activeChat.id))
        .then(resp => {
            if (JSON.stringify(otherChats) !== JSON.stringify(resp)) showNotification()
        })
}

export const pollChatTitle = async (chatId) => {
    console.log('polling chat-info')

    return await fetch(API_CHAT_INFO(chatId))
        .then(resp => resp.json())
        .then(resp => resp.title)
}
