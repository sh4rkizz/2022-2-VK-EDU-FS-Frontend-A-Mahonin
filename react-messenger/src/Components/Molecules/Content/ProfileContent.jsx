import './Content.scss'
import {SettingsBar} from '../../Atoms'

export function ProfileContent({phoneNumber}) {
    return (
        <div className='profile-content'>
            <SettingsBar icon='call' text={phoneNumber} btn={false}/>
            <SettingsBar icon='notifications_active' text='Notifications'/>
            <SettingsBar icon='null' text='Block user' btn={false}/>
        </div>
    )
}
