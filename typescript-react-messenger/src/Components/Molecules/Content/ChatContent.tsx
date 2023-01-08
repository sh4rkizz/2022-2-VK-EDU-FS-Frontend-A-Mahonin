import './Content.scss'
import React, { Fragment, useEffect, useState } from 'react'
import { Message } from '../../Atoms'
import { useSelector } from 'react-redux'
import { pollMessages } from '../../../utils'
import { message, reduxState } from '../../../types'

export const ChatContent = (): JSX.Element => {
  const chatId = useSelector((state: reduxState) => state.activeChat.chat.id)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const messagesHandler = async (): Promise<void> => {
      const response = await pollMessages(chatId)
      if (response) setMessages(response)
    }
    const interval = setInterval(messagesHandler, 3000)

    return () => {
      clearInterval(interval)
    }
  })

  return <div className="content-chat">
    { messages.map((message: message) => <Fragment key={ message.id }>
      <Message message={ message }/>
    </Fragment>) }
  </div>
}
