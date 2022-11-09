import './Header.scss'

import companionLastOnline from '../../Atoms/CompanionLastOnline/CompanionLastOnline'
import companionName from '../../Atoms/CompanionName/CompanionName'
import avatar from '../../Atoms/Avatar/Avatar'
import button from '../../Atoms/Button/Button'
import mockLocalStorage from '../../../utils/MockLocalStorage'


mockLocalStorage()

let mockOnline = 'Was online some time ago'


function companionMeta(props) {
    return (
        <span className='companion-info'>
            {companionName({name: props.name})}
            {companionLastOnline({metaData: props.metaData})}
        </span>
    )
}

function ChatCompanion(chat) {
    return (
        <span className='companion'>
            {avatar({className: 'chat-avatar'})}
            {companionMeta({name: chat.companion, metaData: mockOnline})}
        </span>
    )
}

export default function chatHeader(props) {
    return (
        <header>
            {button({buttonClass: 'back', buttonName: 'arrow_back', hrefMigrate: '/'})}
            {ChatCompanion(props.chat)}
            {button({buttonClass: 'search', buttonName: 'search'})}
            {button({buttonClass: 'more', buttonName: 'more_vert'})}
        </header>
    )
}
