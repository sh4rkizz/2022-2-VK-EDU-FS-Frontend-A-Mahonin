import {useSearchParams} from 'react-router-dom'
import {Fragment, useEffect, useState} from 'react'
import {ChatContent, ChatFooter, ChatHeader} from '../../Components/Molecules'

import {PageNotFound} from '../'
import receiveCSRF from '../../utils/getCSRF'
import {useSelector} from 'react-redux'


export function PageChat() {
    const [params,] = useSearchParams()
    const chatId = params.get('id')
    // const chatId = useSelector(state => state.chats.activeChatId)
    console.log(chatId);

    const [otherChats, setOtherChats] = useState([]),
        [messages, setMessages] = useState([]),
        [title, setTitle] = useState('')

    const apiChatInfo = '/api/chats/info',
        apiChatMessages = '/api/chats/poll',
        vkGetMessages = 'https://tt-front.vercel.app/messages',
        vkPostMessages = 'https://tt-front.vercel.app/messages'

    useEffect(() => {
        let titlesInterval = setInterval(setTitles, 2000)
        let chatsInterval = setInterval(checkOtherChats, 2000)
        let messagesInterval = setInterval(pollMessages, 2000)

        return () => {
            clearInterval(titlesInterval)
            clearInterval(messagesInterval)
            clearInterval(chatsInterval)
        }
    })

    const pollMessages = () => {
        const url = chatId === '0' ? vkGetMessages : `${apiChatMessages}/${chatId}`

        fetch(url)
            .then(resp => resp.json())
            .then(resp => setMessages(resp))
    }

    const setTitles = () => {
        const chatTitle = chatId === '0' ? 'vk chat' : null

        if (chatTitle) {
            setTitle(chatTitle)
            return
        }

        fetch(`${apiChatInfo}/${chatId}`)
            .then(resp => resp.json())
            .then(resp => setTitle(resp.title ? resp.title : resp['users'][1].username))
    }


    if (!chatId) return <PageNotFound/>

    // change-to-REDUX
    const checkOtherChats = () => {
        fetch('/api/chats/')
            .then(resp => resp.json())
            .then(resp => {
                if (JSON.stringify(otherChats) !== JSON.stringify(resp)) {
                    setOtherChats(resp)
                    alert('You have 1 new message')
                }
            })
    }

    const send = (message) => {
        const url = chatId === '0' ? vkPostMessages : `${apiChatMessages}/${chatId}/new/`

        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'X-CSRFToken': receiveCSRF()},
            body: JSON.stringify(message)
        }).then(resp => resp.json())
    }

    return (
        <Fragment>
            <ChatHeader title={title}/>
            <ChatContent messages={messages}/>
            <ChatFooter send={send} chatId={chatId}/>
        </Fragment>
    )
}
