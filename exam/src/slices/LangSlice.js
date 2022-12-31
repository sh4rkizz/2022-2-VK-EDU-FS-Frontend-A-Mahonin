import { createSlice } from '@reduxjs/toolkit'

export const activeLangSlice = createSlice({
  name: 'language-slice',

  initialState: {
    translateFromLangCode: 'en',
    translateToLangCode: 'ru',
    translatedText: 'Translate Text'
  },

  reducers: {
    setTranslateToLangCode: (state, action) => {
      state.translateToLangCode = action.payload.translateToLangCode
    },
    setTranslateFromLangCode: (state, action) => {
      state.translateFromLangCode = action.payload.translateFromLangCode
    },
    setTranslatedText: (state, action) => {
      state.translatedText = action.payload.translatedText
    }
  }
})

export const { setTranslateToLangCode, setTranslateFromLangCode, setTranslatedText } = activeLangSlice.actions
export default activeLangSlice.reducer
