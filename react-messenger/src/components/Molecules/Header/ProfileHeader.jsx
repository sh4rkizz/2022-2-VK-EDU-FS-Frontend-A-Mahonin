import './Header.scss'
import button from '../../Atoms/Button/Button'
import title from '../../Atoms/Title/Title'
import setUserSettings from '../../../utils/SetUserSettings'


export default function profileHeader(props) {
    const handleClickSave = () => {
        setUserSettings(props.values)
        alert('Profile settings have been saved')
    }

    const handleClickGoBack = p => p.goBack()

    return (
        <header>
            {button({buttonClass: 'back', buttonName: 'arrow_back', onClick: () => handleClickGoBack(props)})}
            {title({pageTitle: 'Edit Profile'})}
            {button({buttonClass: 'apply', buttonName: 'done', onClick: handleClickSave})}
        </header>
    )
}
