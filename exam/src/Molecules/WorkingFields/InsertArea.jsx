import './WorkingFields.scss'
import { useDispatch, useSelector } from 'react-redux'
import { handleSubmit } from '../../util'
import { setTranslatedText } from '../../slices/LangSlice'

export const InsertArea = () => {
  const dispatch = useDispatch()
  const langPick = useSelector(state => state.activeLanguage.translationLang)

  const handleEnterKeyPress = async (event) => {
    if (event.key !== 'Enter') return

    const text = event.target.value.trim()
    if (!text) return

    dispatch(setTranslatedText({ translatedText: await handleSubmit({ text: text, langPick: langPick }) }))
  }

  return <textarea className="insert-area" placeholder="Insert your text here" onKeyDown={ handleEnterKeyPress }/>
}
