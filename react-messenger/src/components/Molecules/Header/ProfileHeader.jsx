import './Header.scss'
import button from '../../Atoms/Button/Button'
import title from '../../Atoms/Title/Title'
import setUserSettings from '../../../utils/SetUserSettings'


export default function profileHeader(props) {
    const handleClick = () => {
        setUserSettings(props.values)
        alert('Profile settings have been saved')
    }

    return (
        <header>
            {button({buttonClass: 'back', buttonName: 'arrow_back', hrefMigrate: '/'})}
            {title({pageTitle: 'Edit Profile'})}
            {button({buttonClass: 'apply', buttonName: 'done', onClick: handleClick})}
        </header>
    )
}
