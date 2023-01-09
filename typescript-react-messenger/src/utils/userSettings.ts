import { settings } from '../types'

export const mockSettings = (): void => {
  const username = 'sharkizz'
  const fullName = 'Aleksei Mahonin'
  const bio = 'Future frontend developer'

  if (!localStorage?.length) return

  const settings: settings = {
    username,
    fullName,
    bio
  }

  setUserSettings(settings)
}

export const getUserSettings = (): settings | undefined => {
  if (!localStorage?.userSettings) return

  // @ts-expect-error
  return JSON.parse(localStorage.getItem('userSettings'))
}

export const setUserSettings = (settings: settings): void => {
  localStorage.setItem('userSettings', JSON.stringify(settings))
}
