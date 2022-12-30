import {createSlice} from '@reduxjs/toolkit'

export const activeChatSlice = createSlice({
    name: 'active-chat',
    initialState: {
        chat: {
            id: 0,
            title: '',
        }
    },
    reducers: {
        setChatId: (state, action) => state.chat.id = action.payload.id,
        setChatTitle: (state, action) => {
            if (action.payload.title) state.chat.title = action.payload.title
        },
        setActiveChat: (state, action) => {
            state.chat.id = action.payload.id
            state.chat.title = action.payload.title
        }
    }
})

export const {setChatId, setChatTitle, setActiveChat} = activeChatSlice.actions
export default activeChatSlice.reducer