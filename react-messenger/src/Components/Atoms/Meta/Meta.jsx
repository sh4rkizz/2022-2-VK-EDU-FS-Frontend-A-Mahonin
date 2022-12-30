import './Meta.scss'

import {Text} from '../Text/Text'


function handleDate(mDate) {
    if (!mDate) return

    const [cday,] = new Date().toLocaleString().split(', '),
        [day, time] = new Date(mDate).toLocaleString().split(', ')

    if (cday === day) {
        const [h, m] = time.split(':')
        return `${h}:${m}`
    }

    const [h, min] = time.split(':'),
        [d, mon,] = day.split('.')

    return `${d}.${mon} ${h}:${min}`
}

export function Meta({className, date, status, is_read}) {
    return (
        <div className={className}>
            <Text className='chat-list-date' content={handleDate(date)}/>
            <Text className='status' is_read={is_read}/>
        </div>
    )
}
