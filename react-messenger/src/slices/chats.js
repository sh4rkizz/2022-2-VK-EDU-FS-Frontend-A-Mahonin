import {createSlice} from '@reduxjs/toolkit'

export const chatSlice = createSlice({
    name: 'chats',
    initialState: {
        activeChatId: 0,
        chats: []
    },
    reducers: {
        setActiveChat: (state, action) => {
            state.activeChatId = action.payload.id
        },
        addMessageToChat: (state, action) => {
            state.messages[state.activeChatId] = action.payload.messages
        }
    }
})

export const {addMessageToChat, setActiveChat} = chatSlice.actions
export default chatSlice.reducer