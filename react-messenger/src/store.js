import { configureStore } from '@reduxjs/toolkit'

import chatReducer from './slices/chats'
import activeChatReducer from './slices/activeChat'
import userReducer from './slices/user'
import settingReducer from './slices/settings'

export const store = configureStore({
  reducer: {
    activeChat: activeChatReducer,
    chats: chatReducer,
    user: userReducer,
    settings: settingReducer
  }
})
