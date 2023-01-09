import './Header.scss'

import { Button, Text } from '../../Atoms'
import React from 'react'

export const ChatListHeader = (): JSX.Element => {
  return (
    <header>
      <Button className="menu" name="menu" hrefTo="/edit_profile"/>
      <Text className="page-title" content="Messenger"/>
      <Button className="search" name="search"/>
    </header>
  )
}
