import './Pages.scss'
import React from 'react'
import { GlobalHeader, LangSwitchRow, MainField } from '../Molecules'
import { OpenHistoryButton, TranslateTypeButton } from '../Components'

export const TranslatePage = () => {
  return (
    <div className='page-layout'>
      <GlobalHeader content="VK translate"/>
      <TranslateTypeButton/>
      <LangSwitchRow/>

      <MainField/>

      <OpenHistoryButton/>
    </div>
  )
}