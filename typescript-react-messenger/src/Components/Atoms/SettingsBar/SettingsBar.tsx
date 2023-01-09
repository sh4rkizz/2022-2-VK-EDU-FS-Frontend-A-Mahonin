import './SettingsBar.scss'

import { SpanIcon } from '../SpanIcon/SpanIcon'
import { Text } from '../Text/Text'
import React from 'react'

interface settingsBarProps {
  text: string
  icon?: string
}

export function SettingsBar({ icon = '', text }: settingsBarProps): JSX.Element {
  return (
    <div className="content-row">
      <SpanIcon className="settings-icon" icon={ icon }/>
      <Text className="settings-text" content={ text }/>
    </div>
  )
}
