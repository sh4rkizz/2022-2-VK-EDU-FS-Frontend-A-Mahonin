import './Content.scss'

import { Image, Input, Text } from '../../Atoms'
import { settings } from '../../../types'
import React from 'react'

interface particleProps {
  fTagContent: string
  sTagContent: string
  inputName: string
  onKeyDown: any
  inputPlaceholder: string
  display?: string
  inputValue?: string
}

interface profileEditContentProps {
  setValues: any
  values?: settings
}

const Particle = ({
  fTagContent, sTagContent, inputName, onKeyDown,
  inputPlaceholder, inputValue, display
}: particleProps): JSX.Element => {
  return (
    <span className="particle">
      <span className="element">
        <Text className="profile-tag" content={ fTagContent }/>
        <Input className="profile-input" name={ inputName } value={ inputValue }
               placeholder={ inputPlaceholder } onKeyDown={ onKeyDown }/>
      </span>
      <Text className="profile-tag" content={ sTagContent } display={ display || 'contents' }/>
    </span>
  )
}

export const ProfileEditContent = ({ setValues, values }: profileEditContentProps): JSX.Element => {
  const handleInputChange = (event: any): void => {
    const { name, value } = event.target

    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <div className="profile-edit-content">
      <Image className="profile-avatar"/>

      <Particle fTagContent="Full name" inputName="fullName" inputPlaceholder="Enter your name"
                inputValue={ values?.fullName } onKeyDown={ handleInputChange }
                sTagContent="Unavailable name" display="none"/>

      <Particle fTagContent="Username" inputName="username" inputPlaceholder="Enter your username"
                inputValue={ values?.username } onKeyDown={ handleInputChange }
                sTagContent="Minimum length is 5 characters"/>

      <Particle fTagContent="Bio" inputName="bio" inputPlaceholder="Describe yourself"
                inputValue={ values?.bio } onKeyDown={ handleInputChange }
                sTagContent="Any details about you"/>
    </div>
  )
}
