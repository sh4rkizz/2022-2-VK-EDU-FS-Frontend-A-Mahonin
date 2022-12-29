import './Content.scss'

import { Image, Input, Text } from '../../Atoms'
import React from 'react'

function Particle ({ fTagContent, sTagContent, inputName, inputHandler, inputPlaceholder, inputValue, display }) {
  return (
    <span className='particle'>
            <span className='element'>
                <Text className='profile-tag' content={ fTagContent }/>
                <Input className='profile-input' name={ inputName } value={ inputValue }
                       placeholder={ inputPlaceholder } handler={ inputHandler }/>
            </span>
            <Text className='profile-tag' content={ sTagContent } display={ display ? display : 'contents' }/>
        </span>
  )
}

export function ProfileEditContent ({ setValues, values }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <div className='profile-edit-content'>
      <Image className='profile-avatar'/>

      <Particle fTagContent='Full name' inputName='fullName' inputPlaceholder='Enter your name'
                inputValue={ values.fullName } inputHandler={ handleInputChange }
                sTagContent='Unavailable name' display='none'/>

      <Particle fTagContent='Username' inputName='username' inputPlaceholder='Enter your username'
                inputValue={ values.username } inputHandler={ handleInputChange }
                sTagContent='Minimum length is 5 characters'/>

      <Particle fTagContent='Bio' inputName='bio' inputPlaceholder='Describe yourself'
                inputValue={ values.bio } inputHandler={ handleInputChange }
                sTagContent='Any details about you'/>
    </div>
  )
}
