export const receiveCSRF = (): string => {
  return document.cookie.substring(10, 42)
}
