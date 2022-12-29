import { configureStore } from '@reduxjs/toolkit'

import langReducer from './slices/LangSlice'

export const store = configureStore({
  reducer: {
    activeLanguage: langReducer,

  }
})
