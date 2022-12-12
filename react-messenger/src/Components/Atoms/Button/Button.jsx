import './Button.scss'

import {Link} from 'react-router-dom'


export function Button({hrefTo, className, name, onClick, onMouseDown, onMouseUp}) {
    if (hrefTo) return (
        <Link to={hrefTo} style={{textDecoration: 'none'}}>
            <button className={className}>{name}</button>
        </Link>
    )

    return <button className={className} onMouseDown={onMouseDown}
                   onMouseUp={onMouseUp} onClick={onClick}>{name}</button>
}
