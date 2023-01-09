import './Header.scss'

import { Button, CompanionInfo } from '../../Atoms'
import React from 'react'

export const ChatHeader = (): JSX.Element => {
  return (
    <header>
      <Button className="back" name="arrow_back" hrefTo="/"/>
      <CompanionInfo/>
      <Button className="search" name="search"/>
      <Button className="more" name="more_vert"/>
    </header>
  )
}
