import './Content.scss'

import {Link} from 'react-router-dom'

import {Image, Meta, Text} from '../../Atoms'
import {pollChatLastMessage, pollChats, pollVkLastMessage} from '../../../utils'
import {useEffect, useState} from 'react'
import {IMAGE_TEMPLATE} from '../../../utils/urls'
import {useDispatch} from 'react-redux'

const ChatInfo = ({title, text}) => {
    return (
        <div className='chat-info'>
            <Text className='chat-title' content={title}/>
            <Text className='last-message' content={text}/>
        </div>
    )
}

const ChatData = ({isVkChat, vkChatLastMessage, chatLastMessage}) => {
    const chat = !isVkChat ? chatLastMessage : vkChatLastMessage
    if (!chat) return

    return (
        <div className='chat-data'>
            <Image className='chat-list-avatar' src={IMAGE_TEMPLATE}/>
            <ChatInfo title={chat.chat} text={chat.lastMessageAuthor + ': ' + chat.lastMessageText}/>
            <Meta className='chat-meta' date={chat.lastMessageDate} is_read={chat.lastMessageIsRead}/>
        </div>
    )
}

const VkChat = () => {
    const [vkChatLastMessage, setVkChatLastMessage] = useState({})
    const dispatch = useDispatch()

    // TODO record to vkChatDispatch, also add active chat
    useEffect(() => {
        const vkChatHandler = async () => setVkChatLastMessage(await pollVkLastMessage())
        const interval = setInterval(vkChatHandler, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <Link to='/chat?id=0' style={{textDecoration: 'none'}}>
            <div className='chat' id='0'>
                <ChatData isVkChat={true} vkChatLastMessage={vkChatLastMessage}/>
            </div>
        </Link>
    )
}

const Chat = ({chatId}) => {
    const [chatLastMessage, setChatLastMessage] = useState({})
    const dispatch = useDispatch()

    // TODO record to chatDispatch, also add active chat
    useEffect(() => {
        const chatHandler = async () => {
            const response = await pollChatLastMessage(chatId)
            if (response) setChatLastMessage(response)
        }
        const interval = setInterval(chatHandler, 5000)

        return () => clearInterval(interval)
    }, [])

    if (!chatLastMessage.id) return

    return (
        <Link to={`/chat?id=${chatId}`} style={{textDecoration: 'none'}}>
            <div className='chat' id={chatId}>
                <ChatData isVkChat={false} chatLastMessage={chatLastMessage}/>
            </div>
        </Link>
    )
}

const Chats = () => {
    const [chatList, setChatList] = useState([])

    useEffect(() => {
        const chatListHandler = async () => setChatList(await pollChats())
        const interval = setInterval(chatListHandler, 10000)

        return () => clearInterval(interval)
    }, [])

    return chatList.map(chat => <Chat chatId={chat.id}/>)
}

export const ChatListContent = () => {
    return <div className='content-chat-list'>
        <VkChat/>
        <Chats/>
    </div>
}
