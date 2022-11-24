import './Content.scss'

import {Link} from 'react-router-dom'

import {Avatar, Meta, Text} from '../../Atoms'


function ChatInfo({title, lastMessage}) {
    return (
        <div className='chat-info'>
            {Text({className: 'chat-title', content: title})}
            {Text({className: 'last-message', content: lastMessage.content})}
        </div>
    )
}

function ChatData({chat}) {
    const lastMessage = chat['last_message']

    if (!lastMessage) return

    const title = chat['title'] ? chat['title'] : chat['users'][1]['username'],
        lastMessageDate = lastMessage['creation_time'],
        lastMessageStatus = lastMessage['status'],
        lastMessageIsRead = lastMessage['is_read']

    return (
        <div className='chat-data'>
            {Avatar({className: 'chat-list-avatar'})}
            {ChatInfo({title: title, lastMessage: lastMessage})}
            {Meta({className: 'chat-meta', date:lastMessageDate,
                status: lastMessageStatus, is_read: lastMessageIsRead})}
        </div>
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
    })
}

export function ChatListContent({chats}) {
    return <div className='content-chat-list'>{Content({chats})}</div>
}
