import {createSlice} from '@reduxjs/toolkit'

export const messageSlice = createSlice({
    name: 'messages',
    initialState: {
        messages: {}
    },
    reducers: {
        addMessageToChat: (state, chat, messages) => {
            state.messages[chat] = messages
        }
    }
})

export const {addMessageToChat} = messageSlice.actions
export default messageSlice.reducer