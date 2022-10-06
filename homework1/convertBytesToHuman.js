/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
    const type = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    if (!Number.isInteger(bytes) || bytes < 0) return false

    let log_index = Math.log(bytes) / Math.log(1024)
    log_index = log_index === -Infinity ? 0 : log_index

    const index = log_index < type.length ? Math.floor(log_index) : 8

    let ans = bytes % 1024 === 0 || bytes < 1024 ?
        Math.round(bytes / 1024 ** index) :
        (bytes / 1024 ** index).toFixed(2)

    return `${ans} ${type[index]}`
}
