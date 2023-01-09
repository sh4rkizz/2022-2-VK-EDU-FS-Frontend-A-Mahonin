import './Content.scss'

import { Link } from 'react-router-dom'
import { Image, Meta, Text } from '../../Atoms'
import { pollChats, pollVkLastMessage, messengerUrls } from '../../../utils'
import React, { useEffect, useState } from 'react'

import { builtLastMessage } from '../../../types'

interface chatInfoProps {
  title: string
  text?: string
}

interface chatDataProps {
  chat: builtLastMessage
}

const ChatInfo = ({ title, text }: chatInfoProps): JSX.Element => {
  return (
    <div className="chat-info">
      <Text className="chat-title" content={ title }/>
      <Text className="last-message" content={ text }/>
    </div>
  )
}

const ChatData = ({ chat }: chatDataProps): JSX.Element => {
  return (
    <div className="chat-data">
      <Image className="chat-list-avatar" src={ messengerUrls.image }/>
      <ChatInfo title={ chat.title } text={ `${chat.lastMessage.author}: ${chat.lastMessage.text}` }/>
      <Meta className="chat-meta" date={ chat.lastMessage.timestamp } isRead={ chat.lastMessage.isRead }/>
    </div>
  )
}

const VkChat = (): JSX.Element => {
  const [vkChatLastMessage, setVkChatLastMessage] = useState({})

  useEffect(() => {
    const vkChatHandler = async () => {
      // @ts-expect-error
      setVkChatLastMessage(await pollVkLastMessage())
    }
    const interval = setInterval(vkChatHandler, 5000)

    return () => {
      clearInterval(interval)
    }
  })

  if (Object.keys(vkChatLastMessage).length === 0) return <></>

  return (
    <Link to="/chat?id=0" style={ { textDecoration: 'none' } }>
      <div className="chat" id="0">
        {/* @ts-expect-error */ }
        <ChatData chat={ vkChatLastMessage }/>
      </div>
    </Link>
  )
}

const Chat = ({ chat }: chatDataProps): JSX.Element => {
  if (Object.keys(chat).length === 0) return <></>

  return (
    <Link to={ `/chat?id=${chat.id}` } style={ { textDecoration: 'none' } }>
      <div className="chat" id={ chat.id }>
        <ChatData chat={ chat }/>
      </div>
    </Link>
  )
}

const Chats = () => {
  const [chatList, setChatList] = useState([])

  useEffect(() => {
    const chatListHandler = async () => {
      // @ts-expect-error
      setChatList(await pollChats())
    }
    const interval = setInterval(chatListHandler, 2000)

    return () => {
      clearInterval(interval)
    }
  })

  return <>{ chatList.map(chat => chat ? <Chat chat={ chat }/> : '') }</>
}

export const ChatListContent = () => {
  return <div className="content-chat-list">
    <VkChat/>
    <Chats/>
  </div>
}
