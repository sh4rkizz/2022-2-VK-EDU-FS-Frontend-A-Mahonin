import './Content.scss'

import {Link} from 'react-router-dom'

import {Image, Meta, Text} from '../../Atoms'
import {useDispatch} from 'react-redux'
import {setActiveChat} from '../../../slices/chats'

function ChatInfo({title, text}) {
    return (
        <div className='chat-info'>
            <Text className='chat-title' content={title}/>
            <Text className='last-message' content={text}/>
        </div>
    )
}

function ChatData({chat}) {
    const lastMessage = chat['last_message']
    //
    // if (!lastMessage) return
    const title = chat['title'] ? chat['title'] : null
    const lastMessageDate = chat.id === 0 ? lastMessage['timestamp'] : null
    const lastMessageText = lastMessage ? lastMessage.text : null

    const lastMessageStatus = null
    const lastMessageIsRead = null

    return (
        <div className='chat-data'>
            <Image className='chat-list-avatar' src='https://via.placeholder.com/128'/>
            <ChatInfo title={title} text={lastMessageText}/>
            <Meta className='chat-meta' date={lastMessageDate} is_read={lastMessageIsRead}/>
        </div>
    )
}

function VkChat({vkChat}) {
    return (
        <Link to='/chat?id=0' style={{textDecoration: 'none'}}>
            <div className='chat' id='0'>
                <ChatData chat={vkChat}/>
            </div>
        </Link>
    )
}

// TODO add onclick on this
function Chats({chats}) {
    const dispatch = useDispatch()
    return chats.map(chat => {
            return (
                <Link to={`/chat?id=${chat.id}`} style={{textDecoration: 'none'}}>
                    <div className='chat' id={chat.id} onClick={dispatch(setActiveChat(chat))}>
                        <ChatData chat={chat}/>
                    </div>
                </Link>
            )
        }
    )
}

export function ChatListContent({vkChat, chats}) {
    return <div className='content-chat-list'>
        <VkChat vkChat={vkChat}/>
        <Chats chats={chats}/>
    </div>
}
