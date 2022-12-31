import './GlobalHeader.scss'
import React from 'react'
import { Text } from '../../Components'

export const GlobalHeader = ({ content }) => {
  return (
    <header>
      <Text className="global-header" content={content}/>
    </header>
  )
}
