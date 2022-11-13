import './Content.scss'

import {Link} from 'react-router-dom'

import avatar from '../../Atoms/Avatar/Avatar'
import meta from '../../Atoms/Meta/Meta'
import companionName from '../../Atoms/CompanionName/CompanionName'
import lastMessage from '../../Atoms/LastMessage/LastMessage'

import sortChats from '../../../utils/SortChatsByDate'
import getAllChats from '../../../utils/GetAllChats'


function chatInfo(props) {
    return (
        <div className='chat-info'>
            {companionName({name: props.companion, color: 'black'})}
            {lastMessage({message: props.lastMessage.message})}
        </div>
    )
}

function chatData(props) {
    let lastMessage = props.chat.messages[props.chat.messages.length - 1]

    return (
        <div className='chat-data'>
            {avatar({className: 'chat-list-avatar'})}
            {chatInfo({companion: props.chat.companion, lastMessage: lastMessage})}
            {meta({className: 'chat-meta', date: lastMessage.date, status: lastMessage.status})}
        </div>
    )
}

function content() {
    let chatList = sortChats(getAllChats())

    return chatList.map(chat => {
        return (
            <Link to={`/chat?id=${chat.id}`} style={{textDecoration: 'none'}}>
                <div className='chat' id={chat.id}>
                    {chatData({chat: chat})}
                </div>
            </Link>
        )
    })
}

export default function chatListContent() {
    return <div className='content-chat-list'>{content()}</div>
}
