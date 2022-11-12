export default function getChat(chatId) {
    if (!localStorage.userSettings) return

    return JSON.parse(localStorage.getItem('chats')).find(chat => chat.id === chatId)
}
