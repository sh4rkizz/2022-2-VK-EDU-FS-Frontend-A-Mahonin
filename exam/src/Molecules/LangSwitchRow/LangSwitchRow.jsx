import './LangSwitchRow.scss'
import React, { useEffect, useState } from 'react'

const LANGUAGE_SET_URL = 'https://microsoft-translator-text.p.rapidapi.com/languages?api-version=3.0'

export const LangSwitchRow = () => {
  const [languageSet, setLanguageSet] = useState([])

  const getLanguageSet = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
        'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
        'x-rapidapi-ua': 'RapidAPI-Playground'
      }
    }

    fetch(LANGUAGE_SET_URL, options)
      .then(response => response.json())
      .then(response => setLanguageSet(response))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getLanguageSet()
  })

  return <span className="language-set">{ languageSet }</span>
}
