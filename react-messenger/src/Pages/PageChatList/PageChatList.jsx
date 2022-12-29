import React, { Fragment } from 'react'

import { ChatListContent, ChatListHeader } from '../../Components/Molecules'
import { Button } from '../../Components/Atoms'
import { createNewMockChat } from '../../utils'
import { useSelector } from 'react-redux'

export function PageChatList () {
  const userId = useSelector(state => state.user.userId)

  return (
    <Fragment>
      <ChatListHeader/>
      <ChatListContent/>
      <Button className='new-chat-button' name='edit_square'
              onClick={ () => createNewMockChat(userId) }/>
    </Fragment>
  )
}
