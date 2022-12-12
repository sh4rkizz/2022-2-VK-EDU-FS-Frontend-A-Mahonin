export const buildMessage = (text, image, audio) => {
    return {
        text: text,
        image: image,
        audio: audio
    }
}

export const buildGroupChatMessage = (text, image, audio, username) => {
    return {
        text: text,
        image: image,
        audio: audio,
        author: username
    }
}

export const buildChat = response => {
    return {
        id: response.id,
        chat: response.chat,
        lastMessageAuthor: response.author,
        lastMessageText: response.text,
        lastMessageDate: response.creation_time,
        lastMessageIsRead: response.is_read
    }
}

export const buildVkChat = lastMessage => {
    return {
        id: 0,
        chat: 'vk chat',
        lastMessageAuthor: lastMessage.author,
        lastMessageText: lastMessage.text,
        lastMessageDate: lastMessage.timestamp,
        lastMessageIsRead: true
    }
}
