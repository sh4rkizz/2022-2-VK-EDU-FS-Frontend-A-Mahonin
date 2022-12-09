import './Text.scss'


export function Text({className, content, display,status, is_read}) {
    if (status) content = is_read ? 'done_all' : 'done'

    return <span className={className} style={{display: display}}>{content}</span>
}
