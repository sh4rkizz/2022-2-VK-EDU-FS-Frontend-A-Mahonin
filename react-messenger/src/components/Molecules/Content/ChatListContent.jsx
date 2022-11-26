import './Content.scss'

import {Link} from 'react-router-dom'

import {Avatar, Meta, Text} from '../../Atoms'


function ChatInfo({title, text}) {
    return (
        <div className='chat-info'>
            {Text({className: 'chat-title', content: title})}
            {Text({className: 'last-message', content: text})}
        </div>
    )
}

function ChatData({chat}) {
    const lastMessage = chat['last_message']

    if (!lastMessage) return

    const title = chat['title'] ? chat['title'] : chat['users'][1]['username']
    const lastMessageDate = chat.id === 0 ? lastMessage['timestamp'] : lastMessage['creation_time']

    const lastMessageStatus = lastMessage['status']
    const lastMessageIsRead = lastMessage['is_read']

    return (
        <div className='chat-data'>
            {Avatar({className: 'chat-list-avatar'})}
            {ChatInfo({title: title, text: chat.id === 0 ? lastMessage.text : lastMessage.content})}
            {Meta({
                className: 'chat-meta', date:lastMessageDate,
                status: lastMessageStatus, is_read: lastMessageIsRead
            })}
        </div>
    )
}

function VkChat({vkChat}) {
    return (
        <Link to='/chat?id=0' style={{textDecoration: 'none'}}>
            <div className='chat' id='0'>
                {ChatData({chat: vkChat})}
            </div>
        </Link>
    )
}

function Content({chats}) {
    return chats.map(chat => {
            if (!chat['last_message']) return null

            return (
                <Link to={`/chat?id=${chat.id}`} style={{textDecoration: 'none'}}>
                    <div className='chat' id={chat.id}>
                        {ChatData({chat: chat})}
                    </div>
                </Link>
            )
        }
    )
}

export function ChatListContent({vkChat, chats}) {
    return <div className='content-chat-list'>
        {VkChat({vkChat})}
        {Content({chats})}
    </div>
}
