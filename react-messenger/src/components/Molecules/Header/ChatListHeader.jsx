import './Header.scss'

import {Button, Text} from '../../Atoms'

export function ChatListHeader() {
    return (
        <header>
            {Button({className: 'menu', name: 'menu', hrefTo: '/profile'})}
            {Text({className: 'page-title', content: 'Messenger'})}
            {Button({className: 'search', name: 'search'})}
        </header>
    )
}
