import './Header.scss'
import { Button, Text } from '../../Atoms'
import React from 'react'

export const SettingsHeader = (): JSX.Element => {
  return (
    <header>
      <Button className="menu" name="menu" hrefTo="/profile"/>
      <Text className="page-title" content="Settings"/>
    </header>
  )
}
