import { useSearchParams } from 'react-router-dom'
import React, { Fragment, useEffect, useState } from 'react'
import { ChatContent, ChatFooter, ChatHeader } from '../../Components/Molecules'

import { PageNotFound } from '../'
import { pollChatTitle } from '../../utils'
import { useDispatch } from 'react-redux'
import { setActiveChat } from '../../slices/activeChat'

export const PageChat = (): JSX.Element => {
  const dispatch = useDispatch()
  const [params] = useSearchParams()
  const [title, setTitle] = useState('')

  const chatId: string = params.get('id') ?? ''

  useEffect(() => {
    const titleHandler = async (): Promise<void> => {
      const response = await pollChatTitle(chatId)
      if (response) setTitle(response)
    }

    const titlesInterval = setInterval(titleHandler, 10000)

    return () => {
      clearInterval(titlesInterval)
    }
  })

  if (!chatId) return <PageNotFound/>
  dispatch(setActiveChat({ id: chatId, title }))

  return (
    <Fragment>
      <ChatHeader/>
      <ChatContent/>
      <ChatFooter/>
    </Fragment>
  )
}
