import {configureStore} from '@reduxjs/toolkit'

import messageReducer from './slices/messages'
import chatReducer from './slices/chats'
import userReducer from './slices/user'

export const store = configureStore({
    reducer: {
        chats: chatReducer,
        messages: messageReducer,
        user: userReducer,
    }
})
