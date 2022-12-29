import './Header.scss'

import { Button, CompanionInfo } from '../../Atoms'
import React from 'react'

let mockOnline = 'Was online some time ago'

export const ChatHeader = () => {
  return (
    <header>
      <Button className='back' name='arrow_back' hrefTo='/'/>
      <CompanionInfo online_at={ mockOnline }/>
      <Button className='search' name='search'/>
      <Button className='more' name='more_vert'/>
    </header>
  )
}
