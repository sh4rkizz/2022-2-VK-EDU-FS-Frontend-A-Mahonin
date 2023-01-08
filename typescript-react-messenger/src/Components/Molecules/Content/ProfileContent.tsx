import './Content.scss'
import { SettingsBar } from '../../Atoms'
import React from 'react'

interface profileContentProps {
  phoneNumber: string
}

export const ProfileContent = ({ phoneNumber }: profileContentProps): JSX.Element => {
  return (
    <div className="profile-content">
      <SettingsBar icon="call" text={ phoneNumber } btn={ false }/>
      <SettingsBar icon="notifications_active" text="Notifications"/>
      <SettingsBar icon="null" text="Block user" btn={ false }/>
    </div>
  )
}
