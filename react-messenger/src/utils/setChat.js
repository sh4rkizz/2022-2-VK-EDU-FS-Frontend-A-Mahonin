export default function setChat(chatId, message) {
    if (!localStorage.userSettings) return

    let chats = JSON.parse(localStorage.getItem('chats'))

    chats.forEach(chat => {
        if (chat.id === chatId) chat.messages.push(message)
    })

    localStorage.setItem('chats', JSON.stringify(chats))

    return chats
}
