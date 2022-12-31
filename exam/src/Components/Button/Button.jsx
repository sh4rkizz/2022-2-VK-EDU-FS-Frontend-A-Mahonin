import './Button.scss'
import { Link } from 'react-router-dom'
import { Text } from '../Text/Text'

export const OpenHistoryButton = () => {
  return <Link className="history-button material-icons" to="/history" >history</Link>
}

export const TranslateTypeButton = () => {
  return (
    <div className="translate-type-button">
      <span className="material-icons">translate</span>
      <Text className="translate-type-text" content="Text"/>
    </div>
  )
}
