import './App.css'
import { GlobalHeader, WorkField } from './Molecules'
import { TranslateTypeButton } from './Components'
import { Fragment } from 'react'

export const App = () => {
  return (
    <Fragment>
      <GlobalHeader/>
      <TranslateTypeButton/>
      <WorkField/>
    </Fragment>
  )
}
