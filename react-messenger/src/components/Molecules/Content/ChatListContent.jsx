import './Content.scss'

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

function content(props) {
    let chatList = sortChats(getAllChats())

    const handleClick = (p, id) => p.openChat(id)

    return chatList.map(chat => {
        return (
            <div className='chat' key={chat.id} onClick={() => handleClick(props, chat.id)}>
                {chatData({chat: chat})}
            </div>
        )
    })
}

export default function chatListContent(props) {
    return <div className='content-chat-list'>{content(props)}</div>
}
