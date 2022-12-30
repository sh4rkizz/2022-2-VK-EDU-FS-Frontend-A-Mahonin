import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user-auth',
    initialState: {
        userId: '2',
        isUserAuthValid: false,
        onlineAt: 'Was online some time ago',
        userSettings: {
            fullName: '',
            username: '',
            bio: ''
        }
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
        setUserId: (state, action) => state.userId = action.payload.userId,
        applyUserSettingsChange: (state, action) => state.userSettings = action.payload.settings
    }
})

export const {loginUser, logoutUser, setUserId, applyUserSettingsChange} = userSlice.actions
export default userSlice.reducer