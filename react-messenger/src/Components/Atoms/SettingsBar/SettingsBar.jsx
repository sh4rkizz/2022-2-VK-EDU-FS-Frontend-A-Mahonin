import './SettingsBar.scss'

import { SpanIcon } from '../SpanIcon/SpanIcon'
import { Text } from '../Text/Text'
import { Input } from '../Input/Input'

import React from 'react'

export function SettingsBar ({ icon = null, text, btn = true }) {
  return (
    <div className='content-row'>
      <SpanIcon className='settings-icon' icon={ icon }/>
      <Text className='settings-text' content={ text }/>

      <div>
        <Input type='checkbox' id='toggle-button' className='toggle-button'/>
        <SpanIcon className='toggle' name='Toggle' htmlFor='toggle-button'/>
      </div>
    </div>
  )
}
