import React, { Fragment } from 'react'

import { ChatListContent, ChatListHeader } from '../../Components/Molecules'
import { Button } from '../../Components/Atoms'
import { createNewMockChat } from '../../utils'
import { useSelector } from 'react-redux'
import { reduxState } from '../../types'

export const PageChatList = (): JSX.Element => {
  const userId = useSelector((state: reduxState) => state.user.userId)

  return (
    <Fragment>
      <ChatListHeader/>
      <ChatListContent/>
      <Button className="new-chat-button" name="edit_square"
              onClick={ () => { createNewMockChat(userId) } }/>
    </Fragment>
  )
}
