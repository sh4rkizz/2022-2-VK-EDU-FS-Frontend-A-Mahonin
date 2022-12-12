import './Content.scss'
import {Fragment, useEffect, useState} from 'react'
import {Message} from '../../Atoms'
import {useSelector} from 'react-redux'
import {pollMessages} from '../../../utils'


export const ChatContent = () => {
    const chatId = useSelector(state => state.activeChat.chat.id)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const messagesHandler = async () => {
            const response = await pollMessages(chatId)
            if (response) setMessages(response)
        }
        const interval = setInterval(messagesHandler, 3000)

        return () => clearInterval(interval)
    }, [])

    return <div className='content-chat'>
        {messages.map(message => <Fragment key={message.id}>
            <Message message={message}/>
        </Fragment>)}
    </div>
}
