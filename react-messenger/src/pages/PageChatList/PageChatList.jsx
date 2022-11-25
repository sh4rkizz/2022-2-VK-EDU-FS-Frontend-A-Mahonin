import React, {Fragment, useEffect, useState} from 'react'

import {ChatListContent, ChatListHeader} from '../../components/Molecules'
import {Button} from '../../components/Atoms'

export function PageChatList() {
    const apiChatListUrl = '/api/chats',
        vkBackend = 'https://tt-front.vercel.app/messages'

    const [vkChat, setVkChat] = useState({}),
        [chats, setChats] = useState([]),
        [error, setError] = useState(null),
        [isLoaded, setIsLoaded] = useState(false)

    const buildVkChat = (lastMessage) => {
        return {id: 0, title: 'vk chat', last_message: lastMessage}
    }

    const pollChats = () => {
        fetch(`${vkBackend}`)
            .then(resp => resp.json())
            .then(resp => setVkChat(buildVkChat(resp[0])))

        fetch(`${apiChatListUrl}`)
            .then(resp => resp.json())
            .then(resp => setChats(resp.chats.reverse()), err => setError(err))
            .then(() => setIsLoaded(true), error => {
                setError(error)
                setIsLoaded(true)
            })
    }

    useEffect(() => {
        const interval = setInterval(pollChats, 1000)
        return () => clearInterval(interval)
    }, [])

    if (error) return <div>Error: {error.message}</div>
    else if (!isLoaded) return <div>Loading</div>

    return (
        <Fragment>
            {ChatListHeader()}
            {ChatListContent({vkChat: vkChat, chats: chats})}
            {Button({className: 'new-chat-button', name: 'edit_square'})}
        </Fragment>
    )
}
