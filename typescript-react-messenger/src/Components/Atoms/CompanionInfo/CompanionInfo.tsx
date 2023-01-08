import './CompanionInfo.scss'

import { Text } from '../Text/Text'
import { Image } from '../Image/Image'
import { useSelector } from 'react-redux'
import { reduxState } from '../../../types'
import React from 'react'

const TitleAndMeta = (): JSX.Element => {
  const title = useSelector((state: reduxState) => state.activeChat.chat.title)
  const onlineAt = useSelector((state: reduxState) => state.user.onlineAt)

  return (
    <span className="companion-info">
      <Text className="companion-name" content={ title }/>
      <Text className="companion-meta" content={ onlineAt }/>
    </span>
  )
}

export const CompanionInfo = (): JSX.Element => {
  return (
    <span className="companion">
            <Image className="chat-avatar" src="https://via.placeholder.com/128"/>
            <TitleAndMeta/>
        </span>
  )
}
