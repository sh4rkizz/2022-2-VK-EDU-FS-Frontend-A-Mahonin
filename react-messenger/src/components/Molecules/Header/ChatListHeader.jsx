import title from '../../Atoms/Title/Title'
import button from '../../Atoms/Button/Button'

export default function chatListHeader() {
    return (
        <header>
            {button({buttonClass: 'menu', buttonName: 'menu', hrefMigrate: '/profile'})}
            {title({pageTitle: 'Messenger'})}
            {button({buttonClass: 'search', buttonName: 'search'})}
        </header>
    )
}
