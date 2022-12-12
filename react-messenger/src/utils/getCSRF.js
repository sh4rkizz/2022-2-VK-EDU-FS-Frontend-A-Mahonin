export function receiveCSRF() {
    if (!document) return

    return document.cookie.substring(10)
}