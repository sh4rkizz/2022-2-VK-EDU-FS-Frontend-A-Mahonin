import './Content.scss'

import { Link } from 'react-router-dom'

import { Image, Meta, Text } from '../../Atoms'
import { pollChats, pollVkLastMessage } from '../../../utils'
import React, { useEffect, useState } from 'react'
import { IMAGE_TEMPLATE } from '../../../utils/urls'

const ChatInfo = ({ title, text }) => {
  return (
    <div className='chat-info'>
      <Text className='chat-title' content={ title }/>
      <Text className='last-message' content={ text }/>
    </div>
  )
}

const ChatData = ({ chat }) => {
  return (
    <div className='chat-data'>
      <Image className='chat-list-avatar' src={ IMAGE_TEMPLATE }/>
      <ChatInfo title={ chat.chat } text={ chat.lastMessage.author + ': ' + chat.lastMessage.text }/>
      <Meta className='chat-meta' date={ chat.lastMessage.date } is_read={ chat.lastMessage.isRead }/>
    </div>
  )
}

const VkChat = () => {
  const [vkChatLastMessage, setVkChatLastMessage] = useState({})

  useEffect(() => {
    const vkChatHandler = async () => setVkChatLastMessage(await pollVkLastMessage())
    const interval = setInterval(vkChatHandler, 5000)

    return () => clearInterval(interval)
  })

  if (Object.keys(vkChatLastMessage).length === 0) return

  return (
    <Link to='/chat?id=0' style={ { textDecoration: 'none' } }>
      <div className='chat' id='0'>
        <ChatData isVkChat={ true } chat={ vkChatLastMessage }/>
      </div>
    </Link>
  )
}

const Chat = ({ chat }) => {
  if (Object.keys(chat).length === 0) return

  return (
    <Link to={ `/chat?id=${ chat.id }` } style={ { textDecoration: 'none' } }>
      <div className='chat' id={ chat.id }>
        <ChatData chat={ chat }/>
      </div>
    </Link>
  )
}

const Chats = () => {
  const [chatList, setChatList] = useState([])

  useEffect(() => {
    const chatListHandler = async () => setChatList(await pollChats())
    const interval = setInterval(chatListHandler, 2000)
    console.log(chatList)

    return () => clearInterval(interval)
  })
  console.log(chatList)
  return chatList.map(chat => chat ? <Chat key={chat.id} chat={ chat }/> : '')
}

export const ChatListContent = () => {
  return <div className='content-chat-list'>
    <VkChat/>
    <Chats/>
  </div>
}
