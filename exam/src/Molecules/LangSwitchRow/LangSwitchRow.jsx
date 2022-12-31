import './LangSwitchRow.scss'
import React, { Fragment, useEffect, useState } from 'react'
import { getLanguageSet } from '../../util'
import { LangSwitchOption } from '../../Components'
import { useDispatch, useSelector } from 'react-redux'
import { setTranslateToLangCode, setTranslateFromLangCode } from '../../slices/LangSlice'

export const LangSwitchRow = () => {
  const activeToLanguage = useSelector(state => state.activeLanguage.translateToLangCode)
  const activeFromLanguage = useSelector(state => state.activeLanguage.translateFromLangCode)

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

  const handleChangeTo = (event) => {
    event.preventDefault()
    dispatch(setTranslateToLangCode({ translateToLangCode: event.target.value }))
  }

  const handleChangeFrom = (event) => {
    event.preventDefault()
    dispatch(setTranslateFromLangCode({ translateFromLangCode: event.target.value }))
  }

  const OptionField = ({ activeLanguage, handler }) => {
    return (
      <select className="language-set" name="Language" value={ activeLanguage } onChange={ handler }>
        { set.map(([lang, code]) => <Fragment key={ code }>
          <LangSwitchOption language={ lang } value={ code }/>
        </Fragment>) }
      </select>
    )
  }

  return (
    <Fragment>

      <label style={ { paddingLeft: '5vh' } }>
        Pick a from language
        <OptionField activeLanguage={ activeFromLanguage } handler={ handleChangeFrom }/>
      </label>

      <label style={ { paddingLeft: '5vh' } }>
        Pick a to language
        <OptionField activeLanguage={ activeToLanguage } handler={ handleChangeTo }/>
      </label>

    </Fragment>
  )
}
