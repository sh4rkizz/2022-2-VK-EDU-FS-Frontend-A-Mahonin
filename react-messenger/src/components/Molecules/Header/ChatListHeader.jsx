import title from '../../Atoms/Title/Title'
import button from '../../Atoms/Button/Button'

export default function chatListHeader(props) {
    return (
        <header>
            {button({buttonClass: 'menu', buttonName: 'menu', onClick:  props.openProfile})}
            {title({pageTitle: 'Messenger'})}
            {button({buttonClass: 'search', buttonName: 'search'})}
        </header>
    )
}
