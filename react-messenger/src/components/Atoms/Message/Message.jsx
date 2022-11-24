import './Message.scss'

import {Meta} from '../Meta'
import {Text} from '../Text'

export function Message({message}) {
    return (
        <div className={message.author === 1 ? 'user-message' : 'companion-message'} key={message.id}>
            {Text({className: 'message-text', content: message.content})}
            {Meta({
                className: 'message-meta', date: message.creation_time,
                status: message.status, is_read: message.is_read
            })}
        </div>
    )
}
