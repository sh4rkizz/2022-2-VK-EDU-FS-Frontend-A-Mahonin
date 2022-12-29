import './LangSwitchRow.scss'
import React, { useEffect, useState } from 'react'
import { getLanguageSet } from '../../util'


export const LangSwitchRow = () => {
  const [languageSet, setLanguageSet] = useState([])

  useEffect(() => {
    getLanguageSet().then()
  })

  if (!languageSet?.translation) return

  return <span className="language-set">{ }</span>
}
