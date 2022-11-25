import {useSearchParams} from 'react-router-dom'
import {useEffect, useState, Fragment} from 'react'

import {ChatContent, ChatFooter, ChatHeader} from '../../components/Molecules'

import {PageNotFound} from '../'


export function PageChat() {
    const [params,] = useSearchParams(),
        chat = params.get('id')

    const apiChatUrl = '/api/chats',
        apiMessagesUrl = '/api/messages',
        vkBackendGet = 'https://tt-front.vercel.app/messages',
        vkBackendPost = 'https://tt-front.vercel.app/message'

    const [title, setTitle] = useState([]),
        [messages, setMessages] = useState([])

    const mockAuthor = 1

    const pollMessages = () => {
        if (chat === '0') {
            fetch(`${vkBackendGet}`)
                .then(resp => resp.json())
                .then(resp => setMessages(resp))
        } else {
            fetch(`${apiMessagesUrl}/${chat}/poll/`)
                .then(resp => resp.json())
                .then(resp => setMessages(resp.messages))
        }
    }

    useEffect(() => {
        if (chat === '0') {
            fetch(`${vkBackendGet}`)
                .then(resp => resp.json())
                .then(() => setTitle('vk chat'))
        } else {
            fetch(`${apiChatUrl}/${chat}`)
                .then(resp => resp.json())
                .then(resp => setTitle(resp.title ? resp.title : resp['users'][1].username))
        }

        let interval = setInterval(pollMessages, 1000)
        return () => clearInterval(interval)
    })

    if (!chat) return <PageNotFound/>

    const send = (message) => {
        console.log(message)
        fetch(`${apiMessagesUrl}/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(message)
        }).then(resp => resp.json())
        // .then(resp => resp.status === 'success' ? () => pollMessages : null)
    }

    const sendToVk = (message) => {
        fetch(`${vkBackendPost}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(message)
        }).then(resp => resp.json())
    }

    return (
        <Fragment>
            {ChatHeader({title: title})}
            {ChatContent({messages: messages})}
            {ChatFooter({send: send, sendToVk: sendToVk, chatId: chat, author: mockAuthor})}
        </Fragment>
    )
}
