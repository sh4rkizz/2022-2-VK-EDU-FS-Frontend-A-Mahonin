import './LangSwitchRow.scss'
import React, { Fragment, useEffect, useState } from 'react'
import { getLanguageSet } from '../../util'
import { LangSwitch } from '../../Components'
import { useDispatch, useSelector } from 'react-redux'
import { setTranslationLang } from '../../slices/LangSlice'

export const LangSwitchRow = () => {
  const activeLanguage = useSelector(state => state.activeLanguage.translationLang)
  const dispatch = useDispatch()

  const [languageSet, setLanguageSet] = useState([])

  useEffect(() => {
    const languages = async () => {
      const response = await getLanguageSet()
      if (response) setLanguageSet(response)
    }

    languages().then()
  }, [])

  if (!languageSet?.[0]) return

  const set = []
  Object.entries(languageSet[0][1]).forEach(rep => set.push([rep[1].name, rep[0]]))

  const handleChange = (event) => {
    event.preventDefault()
    dispatch(setTranslationLang({translationLang: event.target.value}))
  }

  return (
    <label style={ { paddingLeft: '5vh' } }>
      Pick a language
      <select className="language-set" name="Language" value={ activeLanguage } onChange={ handleChange }>
        { set.map(([lang, code]) => <Fragment key={ code }>
          <LangSwitch language={ lang } value={ code }/>
        </Fragment>) }
      </select>
    </label>
  )
}
