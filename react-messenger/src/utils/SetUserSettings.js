export default function setUserSettings(settings) {
    if (!localStorage.userSettings) return

    localStorage.setItem('userSettings', JSON.stringify(settings))
}
