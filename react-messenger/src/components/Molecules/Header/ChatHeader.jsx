import './Header.scss'

import {Avatar, Button, Text} from '../../Atoms'
import mockLocalStorage from '../../../utils/MockLocalStorage'

mockLocalStorage()

let mockOnline = 'Was online some time ago'


function CompanionInfo({name, meta}) {
    return (
        <span className='companion-info'>
            {Text({className: 'companion-name', content: name})}
            {Text({className: 'companion-meta', content: meta})}
        </span>
    )
}

function ChatCompanion({title}) {
    return (
        <span className='companion'>
            {Avatar({className: 'chat-avatar'})}
            {CompanionInfo({name: title, meta: mockOnline})}
        </span>
    )
}

export function ChatHeader({title}) {
    return (
        <header>
            {Button({className: 'back', hrefTo: '/', name: 'arrow_back'})}
            {ChatCompanion({title: title})}
            {Button({className: 'search', name: 'search'})}
            {Button({className: 'more', name: 'more_vert'})}
        </header>
    )
}
