import {useSearchParams} from 'react-router-dom'
import {Fragment, useEffect, useState} from 'react'
import {ChatContent, ChatFooter, ChatHeader} from '../../Components/Molecules'

import {PageNotFound} from '../'
import {pollChatTitle, pollNotActiveChats} from '../../utils'
import {useDispatch, useSelector} from 'react-redux'
import {setActiveChat} from '../../slices/activeChat'

export const PageChat = () => {
    const dispatch = useDispatch()
    const [params,] = useSearchParams()
    const [title, setTitle] = useState('')

    const chatId = params.get('id')

    const chats = useSelector(state => state.chats.chats)
    const activeChat = useSelector(state => state.chats.activeChat)

    useEffect(() => {
        const titleHandler = async () => {
            const response = await pollChatTitle(chatId)
            if (response) setTitle(response)
        }

        let titlesInterval = setInterval(titleHandler, 10000)
        let chatsInterval = setInterval(() => pollNotActiveChats({chats: chats, activeChat: activeChat}), 2000)

        return () => {
            clearInterval(titlesInterval)
            clearInterval(chatsInterval)
        }
    })

    if (!chatId) return <PageNotFound/>
    dispatch(setActiveChat({id: chatId, title: title}))

    return (
        <Fragment>
            <ChatHeader/>
            <ChatContent/>
            <ChatFooter/>
        </Fragment>
    )
}
