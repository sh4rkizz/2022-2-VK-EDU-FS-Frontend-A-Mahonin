import './Message.scss'
import { useSelector } from 'react-redux'

import { Meta } from '../Meta/Meta'
import { Text } from '../Text/Text'
import { message, reduxState } from '../../../types'
import React from 'react'

interface messageProps {
  message: message
}

export const Message = ({ message }: messageProps): JSX.Element => {
  const userId = useSelector((state: reduxState) => state.user.userId)

  return (
    <div className={ String(message.author) === userId ? 'user-message' : 'companion-message' } key={ message.id }>
      { message.text && <Text className="message-text" content={ message.text }/> }
      { message.audio && <audio className="message-audio" controls={ true } src={ message.audio }/> }
      { message.image && <img className="message-image" src={ message.image } alt=""/> }
      <Meta className="message-meta" date={ message.timestamp } isRead={ message.isRead }/>
    </div>
  )
}
