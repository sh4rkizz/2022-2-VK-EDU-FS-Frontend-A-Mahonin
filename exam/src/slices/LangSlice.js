import { createSlice } from '@reduxjs/toolkit'

export const activeLangSlice = createSlice({
  name: 'language-slice',

  initialState: {
    translationLang: 'ru',
    translatedText: 'Translate Text'
  },

  reducers: {
    setTranslationLang: (state, action) => {
      state.translationLang = action.payload.translationLang
    },
    setTranslatedText: (state, action) => {
      state.translatedText = action.payload.translatedText
    }
  }
})

export const { setTranslationLang, setTranslatedText } = activeLangSlice.actions
export default activeLangSlice.reducer
