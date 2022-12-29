import { createSlice } from '@reduxjs/toolkit'

export const activeLangSlice = createSlice({
  name: 'language-slice',

  initialState: {
    startLanguage: '',
    translationLanguage: ''
  },

  reducers: {
    setTranslationLanguage: (state, action) => {
      state.translationLanguage = action.payload.translationLanguage
    }
  }
})

export const { setTranslationLanguage } = activeLangSlice.actions
export default activeLangSlice.reducer
