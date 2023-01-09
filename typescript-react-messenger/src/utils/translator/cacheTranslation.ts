import { translateParameters } from '../../types'

export const findCacheTranslation = ({ text, from, to }: translateParameters): string => {
  let cached = JSON.parse(localStorage.getItem('translations__cache') || '')
  if (!cached?.length) return ''

  return cached.find((elem: string[]) =>
    JSON.stringify([text, from, to]) === JSON.stringify([elem[0], elem[1], elem[2]]))?.[3]
}

export const storeTranslation = ({ text, from, to, result }: translateParameters): void => {
  const cached = JSON.parse(localStorage.getItem('translations__cache') || '')
  if (!cached?.length) { localStorage.setItem('translations__cache', JSON.stringify([text, from, to, result])); return }

  cached.push([text, from, to, result])
  localStorage.setItem('translations__cache', JSON.stringify(cached))
}
