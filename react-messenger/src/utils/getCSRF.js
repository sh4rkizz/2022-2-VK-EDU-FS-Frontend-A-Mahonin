export function receiveCSRF() {
    if (!document) return
    console.log(document.cookie)
    return document.cookie.substring(10, 42)
}