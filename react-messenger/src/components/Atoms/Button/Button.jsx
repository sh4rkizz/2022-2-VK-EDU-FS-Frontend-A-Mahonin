import {Link} from 'react-router-dom'
import './Button.scss'


export default function button(props) {
    if (props.hrefMigrate) return (
        <Link to={props.hrefMigrate} style={{textDecoration: 'none'}}>
            <button className={props.buttonClass}>{props.buttonName}</button>
        </Link>
    )

    return <button className={props.buttonClass} onClick={props.onClick}>{props.buttonName}</button>
}
