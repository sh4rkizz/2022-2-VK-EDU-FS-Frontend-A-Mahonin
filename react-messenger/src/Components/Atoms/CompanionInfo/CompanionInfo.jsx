import './CompanionInfo.scss'

import {Text} from '../Text/Text'
import {Image} from '../Image/Image'
import {useSelector} from 'react-redux'

// TODO rework User-online system
function TitleAndMeta() {
    const title = useSelector(state => state.activeChat.chat.title)
    const onlineAt = useSelector(state => state.user.onlineAt)

    return (
        <span className='companion-info'>
            <Text className='companion-name' content={title}/>
            <Text className='companion-meta' content={onlineAt}/>
        </span>
    )
}

export function CompanionInfo() {
    return (
        <span className='companion'>
            <Image className='chat-avatar' src='https://via.placeholder.com/128'/>
            <TitleAndMeta/>
        </span>
    )
}