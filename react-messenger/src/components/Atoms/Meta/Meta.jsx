import './Meta.scss'
import date from '../Date/Date'
import status from '../Status/Status'


export default function meta(props) {
    return (
        <div className={props.className}>
            {date({date: props.date})}
            {status({status: props.status})}
        </div>
    )
}
