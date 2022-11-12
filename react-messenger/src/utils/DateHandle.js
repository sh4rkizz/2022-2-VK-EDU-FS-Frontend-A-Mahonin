export default function dateHandle(mils) {
    if (!mils) return

    let [date, time] = new Date(mils).toLocaleString().split(', ')
    const [h, m] = time.split(':')

    const [day, month] = date.split('.')

    if (date === new Date().toLocaleDateString())
        return `${h}:${m}`

    return `${day}.${month} ${h}:${m}`
}
