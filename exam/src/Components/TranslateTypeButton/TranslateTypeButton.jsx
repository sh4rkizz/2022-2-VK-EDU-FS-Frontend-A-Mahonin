import './TranslateTypeButton.scss'
import { Text } from '../Text/Text'

export const TranslateTypeButton = () => {
  return (
    <div className="translate-type-button">
      <span className="material-icons">
        translate
      </span>
      <Text className="translate-type-text" content="Text"/>
    </div>
  )
}
