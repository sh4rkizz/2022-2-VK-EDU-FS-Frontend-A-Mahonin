import './Header.scss'

import {Button, Text} from '../../Atoms'
import setUserSettings from '../../../utils/SetUserSettings'
import {useDispatch} from 'react-redux'
import {applyUserSettingsChange} from '../../../slices/user'


export function ProfileEditHeader({values}) {
    const dispatch = useDispatch()

    //TODO rework also add redux here
    const handleApplyClick = () => {
        dispatch(applyUserSettingsChange(values))
        setUserSettings(values)
        alert('Profile settings have been saved')
    }

    return (
        <header>
            <Button className='back' name='arrow_back' hrefTo='/'/>
            <Text className='page-title' content='Edit Profile'/>
            <Button className='apply' name='done' onClick={handleApplyClick}/>
        </header>
    )
}