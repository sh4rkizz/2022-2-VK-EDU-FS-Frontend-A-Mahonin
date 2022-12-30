import './Header.scss'
import {Button, Text} from '../../Atoms'

export function SettingsHeader() {
    return (
        <header>
            <Button className='menu' name='menu' hrefTo='/profile'/>
            <Text className='page-title' content='Settings'/>
        </header>
    )
}