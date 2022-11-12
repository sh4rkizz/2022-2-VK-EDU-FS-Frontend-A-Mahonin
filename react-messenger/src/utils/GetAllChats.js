export default function getAllChats() {
    if (!localStorage.userSettings) return

    return JSON.parse(localStorage.getItem('chats'))
}
