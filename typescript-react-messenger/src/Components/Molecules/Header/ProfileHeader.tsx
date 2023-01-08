import { Button, CompanionInfo } from '../../Atoms'
import React from 'react'

export const ProfileHeader = (): JSX.Element => {
  return (
    <header>
      <Button className="back" name="arrow_back" hrefTo="/chat"/>
      <CompanionInfo/>
    </header>
  )
}
