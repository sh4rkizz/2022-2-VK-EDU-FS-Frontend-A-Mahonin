import {createSlice} from '@reduxjs/toolkit'

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        preview_links: true,
        notifications: true,
        sound: true,
        vibration: true
    },
    reducers: {
        changePreviewLinks: (state) => state.preview_links = !state.preview_links,
        changeNotifications: (state) => state.notifications = !state.notifications,
        changeSound: (state) => state.sound = !state.sound,
        changeVibration: (state) => state.vibration = !state.vibration
    }
})

export const {changePreviewLinks, changeNotifications, changeSound, changeVibration} = settingsSlice.actions
export default settingsSlice.reducer