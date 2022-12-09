import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user-auth',
    initialState: {
        userId: '2',
        isUserAuthValid: false,
    },
    reducers: {
        loginUser: (state, action) => {
            state.isUserAuthValid = true
            state.userId = action.payload.userId
        },
        logoutUser: (state) => {
            state.isUserAuthValid = false
            state.userId = '2'
        },
        setUserId: (state, action) => state.userId = action.payload.userId
    }
})

export const {loginUser, logoutUser} = userSlice.actions
export default userSlice.reducer