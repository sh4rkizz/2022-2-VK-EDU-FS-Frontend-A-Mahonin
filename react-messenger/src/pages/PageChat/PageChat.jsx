import {useSearchParams} from 'react-router-dom'
import {useEffect, useState, Fragment} from 'react'

import {ChatContent, ChatFooter, ChatHeader} from '../../components/Molecules'

import {PageNotFound} from '../'


export function PageChat() {
    const [params,] = useSearchParams()
    const apiChatUrl = '/api/chats'
    const apiMessagesUrl = '/api/messages'
    const mockAuthor = 1

    const [title, setTitle] = useState([])
    const [messages, setMessages] = useState([])

    let chat = params.get('id')

    const pollMessages = () => {
        fetch(`${apiMessagesUrl}/${chat}/poll/`)
            .then(resp => resp.json())
            .then(resp => setMessages(resp.messages))
    }

    useEffect(() => {
        fetch(`${apiChatUrl}/${chat}`)
            .then(res => res.json())
            .then(resp => setTitle(resp.title ? resp.title : resp['users'][1].username))

        let interval = setInterval(pollMessages, 1000)
        return () => clearInterval(interval)
    })

    if (!chat) return <PageNotFound/>

    const send = (message) => {
        fetch(`${apiMessagesUrl}/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(message)
        })
            .then(resp => resp.json())
            // .then(resp => resp.status === 'success' ? () => pollMessages : null)
    }

    return (
        <Fragment>
            {ChatHeader({title: title})}
            {ChatContent({messages: messages})}
            {ChatFooter({send: send, chatId: chat, author: mockAuthor})}
        </Fragment>
    )
}
