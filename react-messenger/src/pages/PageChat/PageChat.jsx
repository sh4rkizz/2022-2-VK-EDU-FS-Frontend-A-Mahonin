import {useState} from 'react'

import chatHeader from '../../components/Molecules/Header/ChatHeader.jsx'
import chatContent from '../../components/Molecules/Content/ChatContent.jsx'
import chatFooter from '../../components/Molecules/Footer/ChatFooter.jsx'

import PageNotFound from '../PageNotFound/PageNotFound'
import getChat from '../../utils/GetChat'
import setChat from '../../utils/setChat'


export default function PageChat(props) {
    const chat = getChat(String(props.chatId))
    const [, setChatState] = useState(chat)

    if (!chat) return <PageNotFound/>

    return (
        <>
            {chatHeader({chat: chat, goBack: props.goBack})}
            {chatContent({chat: chat})}
            {chatFooter({chat: chat, updateData: setChat, hook: setChatState})}
        </>
    )
}
