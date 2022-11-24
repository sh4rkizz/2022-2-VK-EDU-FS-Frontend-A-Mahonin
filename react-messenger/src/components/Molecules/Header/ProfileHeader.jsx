import './Header.scss'

import {Button, Text} from '../../Atoms'
import setUserSettings from '../../../utils/SetUserSettings'


export function ProfileHeader({values}) {
    const handleClick = () => {
        setUserSettings(values)
        alert('Profile settings have been saved')
    }

    return (
        <header>
            {Button({className: 'back', name: 'arrow_back', hrefTo: '/'})}
            {Text({className: 'page-title', content: 'Edit Profile'})}
            {Button({className: 'apply', name: 'done', onClick: handleClick})}
        </header>
    )
}
