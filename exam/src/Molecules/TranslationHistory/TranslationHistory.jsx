import './TranslationHistory.scss'
import React, { Fragment, useEffect, useState } from 'react'

export const TranslationHistory = () => {
  const [translations, setTranslations] = useState([])

  useEffect(() => {
    setTranslations(JSON.parse(localStorage.getItem('exam__translations')))
  }, [])

  if (!translations?.length) return <h2 style={ { marginLeft: '5vh' } }>Time to make a history</h2>

  return (
    <Fragment>
      <div className="history-book">
        { translations.map(translation => <Fragment>{ translation.join(' -> ') }<br/></Fragment>) }
      </div>
    </Fragment>
  )
}
