import './LangSwitchOption.scss'
import React from 'react'

export const LangSwitchOption = ({ value, language }) => {
  return <option className="language-option" value={ value }>{ language }</option>
}
