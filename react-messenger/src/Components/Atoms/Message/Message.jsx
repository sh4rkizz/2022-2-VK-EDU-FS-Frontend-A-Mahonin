import './Message.scss'
import {useSelector} from 'react-redux'

import {Meta} from '../Meta/Meta'
import {Text} from '../Text/Text'

export function Message({message}) {
    const userId = useSelector(state => state.user.userId)
    message.content = message.content ? message.content : message.text
    return (
        <div className={String(message.author.id) === userId ? 'user-message' : 'companion-message'} key={message.id}>
            {message.text && <Text className='message-text' content={message.text}/>}
            {message.audio && <audio className='message-audio' controls='controls' src={message.audio}/>}
            {message.image && <img className='message-image' src={message.image} alt=''/>}
            <Meta className='message-meta' date={message.creation_time} is_read={message.is_read}/>
        </div>
    )
}
