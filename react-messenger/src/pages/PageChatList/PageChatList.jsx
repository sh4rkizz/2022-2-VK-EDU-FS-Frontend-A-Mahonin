import React, {useState, useEffect, Fragment} from 'react'

import {ChatListContent, ChatListHeader} from '../../components/Molecules'
import {Button} from '../../components/Atoms'

export function PageChatList() {
    const apiChatListUrl = '/api/chats'

    const [chats, setChats] = useState([])
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const pollChats = () => {
        fetch(`${apiChatListUrl}/`)
            .then(resp => resp.json())
            .then(resp => {
                    setIsLoaded(true)
                    setChats(resp.chats.reverse())
                }, err => {
                    setIsLoaded(true)
                    setError(err)
                }
            )
    }

    useEffect(() => {
        const interval = setInterval(pollChats, 2000)
        return () => clearInterval(interval)
    }, [])


    if (error) return <div>Error: {error.message}</div>
    else if (!isLoaded) return <div>Loading</div>

    return (
        <Fragment>
            {ChatListHeader()}
            {ChatListContent({chats: chats})}
            {Button({className: 'new-chat-button', name: 'edit_square'})}
        </Fragment>
    )
}
