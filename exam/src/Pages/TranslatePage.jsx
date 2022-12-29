import React, { Fragment } from 'react'
import { GlobalHeader, WorkField } from '../Molecules'
import { OpenHistoryButton, TranslateTypeButton } from '../Components'

export const TranslatePage = () => {
  return (
    <Fragment>
      <GlobalHeader/>
      <TranslateTypeButton/>
      <WorkField/>

      <OpenHistoryButton/>
    </Fragment>
  )
}