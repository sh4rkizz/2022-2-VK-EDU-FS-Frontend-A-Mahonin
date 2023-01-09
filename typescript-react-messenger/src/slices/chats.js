import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
  name: 'chats',
  initialState: {
    chats: [],
    vkChat: {}
  },
  reducers: {
    setVkChat: (state, action) => {
      state.vkChat = action.payload.vkChat
    },
    setChats: (state, action) => {
      state.chats = action.payload.chats
    }
  }
})

export const { setChats, setVkChat } = chatSlice.actions
export default chatSlice.reducer
