export default function sortChats(chatList) {
    if (!chatList) return

    chatList.sort(
        (a, b) => (
            a.messages[a.messages.length - 1].date <
            b.messages[b.messages.length - 1].date ?
                1 : -1
        )
    )

    return chatList
}
