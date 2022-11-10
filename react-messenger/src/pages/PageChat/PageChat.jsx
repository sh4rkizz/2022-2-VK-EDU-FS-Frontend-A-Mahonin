import {useSearchParams} from 'react-router-dom'
import {useState} from 'react'

import chatHeader from '../../components/Molecules/Header/ChatHeader.jsx'
import chatContent from '../../components/Molecules/Content/ChatContent.jsx'
import chatFooter from '../../components/Molecules/Footer/ChatFooter.jsx'

import PageNotFound from '../PageNotFound/PageNotFound'
import getChat from '../../utils/GetChat'
import setChat from '../../utils/setChat'


export default function PageChat() {
    const [params,] = useSearchParams()

    const chat = getChat(params.get('id'))
    const [, setChatState] = useState(chat)

    if (!chat) return <PageNotFound/>

    return (
        <>
            {chatHeader({chat: chat})}
            {chatContent({chat: chat})}
            {chatFooter({chat: chat, updateData: setChat, hook: setChatState})}
        </>
    )
}
