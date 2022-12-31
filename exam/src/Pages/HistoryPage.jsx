import React, { Fragment } from 'react'
import { GlobalHeader } from '../Molecules'
import { TranslationHistory } from '../Molecules/TranslationHistory/TranslationHistory'

export const HistoryPage = () => {
  return (
    <Fragment>
      <GlobalHeader content="History"/>
      <TranslationHistory/>
    </Fragment>
  )
}
