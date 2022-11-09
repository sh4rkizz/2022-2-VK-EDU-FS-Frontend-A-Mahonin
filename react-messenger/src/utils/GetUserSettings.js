export default function getUserSettings() {
    if (!localStorage.userSettings) return

    return JSON.parse(localStorage.getItem('userSettings'))
}
