export const buildMessage = (text, image, audio) => {
  return {
    text,
    image,
    audio
  }
}

export const buildGroupChatMessage = (text, image, audio, username) => {
  return {
    text,
    image,
    audio,
    author: username
  }
}

const buildLastMessage = ({ id, chat, lastMessage }) => {
  return {
    id,
    chat,
    lastMessage: {
      author: lastMessage.author,
      text: lastMessage.text,
      audio: id === '0' ? null : lastMessage.audio,
      image: id === '0' ? null : lastMessage.image,
      date: id === '0' ? lastMessage.timestamp : lastMessage.creation_time,
      isRead: id === '0' ? true : lastMessage.is_read
    }
  }
}

export const buildChat = response => {
  return buildLastMessage({ id: response.id, chat: response.title, lastMessage: response.last_message })
}

export const buildVkChat = lastMessage => {
  return buildLastMessage({ id: '0', chat: 'vk chat', lastMessage })
}
