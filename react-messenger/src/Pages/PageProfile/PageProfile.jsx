import {ProfileHeader, ProfileContent} from '../../Components/Molecules'
import {useSearchParams} from 'react-router-dom'
import {Fragment} from 'react'

export function PageProfile() {
    const [params,] = useSearchParams()

    const user = {
        username: 'Jennifer',
        online_at: 'Was online 2 minutes ago',
        phoneNumber: '+78005553535',
    }

    return (
        <Fragment>
            <ProfileHeader title={user.username} online_at={user.online_at}/>
            <ProfileContent phoneNumber={user.phoneNumber}/>
        </Fragment>
    )
}