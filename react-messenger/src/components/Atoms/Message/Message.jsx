import './Message.scss'

import {Meta} from '../Meta'
import {Text} from '../Text'

export function Message({message}) {
    message.content = message.content ? message.content : message.text

    return (
        <div className={String(message.author) === '1' ? 'user-message' : 'companion-message'} key={message.id}>
            {Text({className: 'message-text', content: message.content})}
            {Meta({
                className: 'message-meta', date: message['creation_time'],
                status: message.status, is_read: message.is_read
            })}
        </div>
    )
}
