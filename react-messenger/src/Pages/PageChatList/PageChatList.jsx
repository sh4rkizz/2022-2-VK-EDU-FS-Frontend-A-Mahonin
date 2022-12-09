import React, {Fragment, useEffect, useState} from 'react'

import {ChatListContent, ChatListHeader} from '../../Components/Molecules'
import {Button} from '../../Components/Atoms'
import receiveCSRF from "../../utils/getCSRF"
import {useSelector} from 'react-redux'

export function PageChatList() {
    const userId = useSelector(state => state.user.userId)

    const apiChatListUrl = '/api/chats/',
        vkBackend = 'https://tt-front.vercel.app/messages'

    const [vkChat, setVkChat] = useState({}),
        [chats, setChats] = useState([]),
        [isLoaded, setIsLoaded] = useState(false)

    const buildVkChat = (lastMessage) => {
        return {id: 0, title: 'vk chat', last_message: lastMessage}
    }

    const pollChats = () => {
        fetch(`${vkBackend}`)
            .then(resp => resp.json())
            .then(resp => setVkChat(buildVkChat(resp.reverse()[0])))
            .then(() => setIsLoaded(true))

        fetch(`${apiChatListUrl}`)
            .then(resp => resp.json())
            .then(resp => setChats(resp.reverse()))
            .then(() => setIsLoaded(true))
    }

    useEffect(() => {
        const interval = setInterval(pollChats, 1000)
        return () => clearInterval(interval)
    })

    const createNewChatMock = () => {
        const url = 'api/chats/new/'

        const body = {
            creator: userId,
            are_notifications_on: true,
            title: 'Just another mocked chat',
            is_group_chat: true
        }

        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'X-CSRFToken': receiveCSRF()},
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    if (!isLoaded) return <div>Loading</div>

    return (
        <Fragment>
            <ChatListHeader/>
            <ChatListContent vkChat={vkChat} chats={chats}/>
            <Button className='new-chat-button' name='edit_square' onClick={createNewChatMock}/>
        </Fragment>
    )
}
