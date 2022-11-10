import './Date.scss'

import dateHandle from "../../../utils/DateHandle"


export default function date(props) {
    return <span className='message-date'>{dateHandle(props.date)}</span>
}
