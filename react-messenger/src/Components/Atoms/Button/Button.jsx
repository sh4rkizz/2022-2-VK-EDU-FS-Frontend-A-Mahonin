import './Button.scss'

import {Link} from 'react-router-dom'


export function Button({hrefTo, className, name, onClick}) {
    if (hrefTo) return (
        <Link to={hrefTo} style={{textDecoration: 'none'}}>
            <button className={className}>{name}</button>
        </Link>
    )

    return <button className={className} onClick={onClick}>{name}</button>
}
