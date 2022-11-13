import React from 'react'

import chatListHeader from '../../components/Molecules/Header/ChatListHeader'
import chatListContent from '../../components/Molecules/Content/ChatListContent'
import button from '../../components/Atoms/Button/Button'

export default function PageChatList() {
    return (
        <>
            {chatListHeader()}
            {chatListContent()}
            {button({buttonClass: 'new-chat-button', buttonName: 'edit_square'})}
        </>
    )
}
