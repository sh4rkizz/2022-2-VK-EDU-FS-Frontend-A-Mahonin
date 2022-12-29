import './WorkField.scss'
import { LangSwitchRow } from '../LangSwitchRow/LangSwitchRow'
import { useState } from 'react'

const TRANSLATION_URL = ({ code }) => `https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=${ code }&api-version=3.0&profanityAction=NoAction&textType=plain`

const InsertArea = ({ translate }) => {
  const handleEnterKeyPress = (event) => {
    if (event.key !== 'Enter') return

    const text = event.target.value.trim()
    if (!text) return

    translate({ text })
  }

  return <input className="insert-area" placeholder="Insert your text here" onKeyDown={ handleEnterKeyPress }/>
}

const ResultArea = ({ text }) => {
  return <span className="result-area">text</span>
}

export const WorkField = () => {
  const [translatedText, setTranslatedText] = useState('')

  const translate = ({ text }) => {
    let translated = localStorage?.getItem(text) ?? performTranslate({ text: text, translateTo: 'ru' })

    // if (!localStorage) return
    // localStorage.setItem(text, JSON.stringify(translated))
    //
    setTranslatedText(text)
  }

  const performTranslate = ({ text, translateTo }) => {
    text = 'Hello world'
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
        'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
      },
      body: `[{"Text":"${ text }"}]`
    }

    fetch(TRANSLATION_URL({ code: translateTo }), options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err))
  }

  return (
    <div className="main-page-field">

      <LangSwitchRow/>

      <div className="working-area">
        <InsertArea translate={ translate }/>
        <ResultArea translatedText={ translatedText }/>
      </div>

    </div>
  )
}
