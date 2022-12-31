import './WorkingFields.scss'
import { useDispatch, useSelector } from 'react-redux'
import { handleSubmit } from '../../util'
import { setTranslatedText } from '../../slices/LangSlice'

export const InsertArea = () => {
  const dispatch = useDispatch()
  const translateFrom = useSelector(state => state.activeLanguage.translateFromLangCode)
  const translateTo = useSelector(state => state.activeLanguage.translateToLangCode)

  const handleEnterKeyPress = async (event) => {
    if (event.key !== 'Enter') return

    const text = event.target.value.trim()
    if (!text) return

    dispatch(setTranslatedText({
      translatedText: await handleSubmit({
        translateFrom: translateFrom, text: text, translateTo: translateTo
      })
    }))
  }

  return <textarea className="insert-area" placeholder="Insert your text here" onKeyDown={ handleEnterKeyPress }/>
}
