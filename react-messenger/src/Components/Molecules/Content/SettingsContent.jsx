import './Content.scss'

import {SettingsBar} from '../../Atoms'


export function SettingsContent() {
    return (
        <div className='content-settings'>
            <SettingsBar icon='link' text='Preview Links'/>
            <SettingsBar icon='notifications_active' text='Notifications'/>
            <SettingsBar icon='volume_up' text='Sound'/>
            <SettingsBar icon='vibration' text='Vibration'/>
        </div>
    )
}