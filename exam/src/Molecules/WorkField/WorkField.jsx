import './WorkField.scss'
import { LangSwitchRow } from '../LangSwitchRow/LangSwitchRow'
import { useEffect, useState } from 'react'
import { performTranslate } from '../../util'

const langPick = 'ru'

const InsertArea = ({ translate }) => {
  const handleEnterKeyPress = (event) => {
    if (event.key !== 'Enter') return

    const text = event.target.value.trim()
    if (!text) return

    translate({ text: text })
  }

  return <input className="insert-area" placeholder="Insert your text here" onKeyDown={ handleEnterKeyPress }/>
}

const ResultArea = ({ text }) => {
  return <span className="result-area">{ text }</span>
}

export const WorkField = () => {
  const [translatedText, setTranslatedText] = useState('')

  useEffect(() => {
    const translated = performTranslate({ text: text, translateTo: langPick })
    setTranslatedText(translated)
  })

  const translate = ({ text }) => {
    let translations = []

    const storageTranslations = localStorage?.getItem('translations').text ??

    const translated = performTranslate({ text: text, translateTo: langPick })

    setTranslatedText(translated)

    if (localStorage?.length) translations = localStorage.getItem('translations')

    translations.push(`${ text } -> ${ translated }`)

    localStorage.setItem('translations', JSON.stringify(translations))
  }

  return (
    <div className="main-page-field">

      <LangSwitchRow/>

      <div className="working-area">
        <InsertArea translate={ translate }/>
        <ResultArea text={ translatedText }/>
      </div>

    </div>
  )
}
