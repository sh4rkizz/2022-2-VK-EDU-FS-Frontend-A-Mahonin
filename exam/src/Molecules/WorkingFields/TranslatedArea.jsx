import './WorkingFields.scss'
import { useSelector } from 'react-redux'

export const TranslatedArea = () => {
  const text = useSelector(state => state.activeLanguage.translatedText)

  return <span className="result-area">{ text }</span>
}
