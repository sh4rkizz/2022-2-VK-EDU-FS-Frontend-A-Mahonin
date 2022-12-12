import {API_CHAT_INFO, API_CHAT_LAST_MESSAGE, API_CHAT_LIST, API_CHAT_MESSAGES, VK_BACKEND_MESSAGES} from './urls'
import {buildChat, buildVkChat} from './builders'


export const pollMessages = async (chatId) => {
    console.log('polling', chatId)
    const url = chatId === '0' ? VK_BACKEND_MESSAGES : API_CHAT_MESSAGES(chatId)

    return await fetch(url).then(resp => resp.json())
}

export const pollChatLastMessage = async chatId => {
    console.log('polling last-message from chat', chatId)

    const response = await fetch(API_CHAT_LAST_MESSAGE(chatId))
        .then(resp => resp.json())

    if (!await response.id) return
    return buildChat(response)
}

export const pollVkLastMessage = async () => {
    console.log('polling last-vk-message')

    const response = await fetch(VK_BACKEND_MESSAGES)
        .then(resp => resp.json())
        .then(resp => resp.reverse()[0])

    if (!await response) return

    return buildVkChat(await response)
}

// TODO async + return to list
export const pollChats = async () => {
    console.log('polling chat-list')

    return await fetch(API_CHAT_LIST)
        .then(resp => resp.json())
        .then(resp => resp.reverse())
}

export const pollNotActiveChats = async (chats, activeChat) => {
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
    return await fetch(API_CHAT_INFO(chatId))
        .then(resp => resp.json())
        .then(resp => resp.title)
}
