import './MainField.scss'
import { TranslatedArea } from '../WorkingFields/TranslatedArea'
import { InsertArea } from '../WorkingFields/InsertArea'

export const MainField = () => {
  return (
    <div className="main-page-field">
      <div className="working-area">
        <InsertArea/>
        <TranslatedArea/>
      </div>
    </div>
  )
}
