import './Header.scss'

import { Button, Text } from '../../Atoms'
import { setUserSettings } from '../../../utils'
import { useDispatch } from 'react-redux'
import { applyUserSettingsChange } from '../../../slices/user'
import { settings } from '../../../types'
import React from 'react'

interface profileEditHeaderProps {
  values?: settings
}

export const ProfileEditHeader = ({ values }: profileEditHeaderProps): JSX.Element => {
  const dispatch = useDispatch()

  const handleApplyClick = (): undefined => {
    if (values == null) return

    dispatch(applyUserSettingsChange(values))
    setUserSettings(values)
    alert('Profile settings have been saved')
  }

  return (
    <header>
      <Button className="back" name="arrow_back" hrefTo="/"/>
      <Text className="page-title" content="Edit Profile"/>
      <Button className="apply" name="done" onClick={ handleApplyClick }/>
    </header>
  )
}
