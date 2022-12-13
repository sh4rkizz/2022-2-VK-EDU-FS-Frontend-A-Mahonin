import {ProfileHeader, ProfileContent} from '../../Components/Molecules'
import {Fragment} from 'react'

export function PageProfile() {
    const user = {
        username: 'Jennifer',
        phoneNumber: '+78005553535',
    }

    return (
        <Fragment>
            <ProfileHeader title={user.username}/>
            <ProfileContent phoneNumber={user.phoneNumber}/>
        </Fragment>
    )
}
