import './SpanIcon.scss'


export function SpanIcon({className, icon, htmlFor}) {
    return <label className={className} htmlFor={htmlFor}>{icon}</label>
}