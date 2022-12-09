import './CompanionInfo.scss'

import {Text} from '../Text/Text'
import {Image} from '../Image/Image'

function TitleAndMeta({title, meta}) {
    return (
        <span className='companion-info'>
            <Text className='companion-name' content={title}/>
            <Text className='companion-meta' content={meta}/>
        </span>
    )
}

export function CompanionInfo({title, online_at}) {
    return (
        <span className='companion'>
            <Image className='chat-avatar' src='https://via.placeholder.com/128'/>
            <TitleAndMeta title={title} meta={online_at}/>
        </span>
    )
}