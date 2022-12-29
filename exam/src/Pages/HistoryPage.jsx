import { Fragment, useEffect, useState } from 'react'

export const HistoryPage = () => {
  const [translations, setTranslations] = useState([])

  useEffect(() => {
    if (!localStorage) return

    setTranslations(JSON.parse(localStorage.getItem('translations')))
  }, [translations])

  return (
    <div className='history-book'>
      { translations.map(translation => <Fragment>{ translation }</Fragment>) }
    </div>
  )
}
