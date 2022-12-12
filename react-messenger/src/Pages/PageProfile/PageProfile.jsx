import {ProfileHeader, ProfileContent} from '../../Components/Molecules'
import {useSearchParams} from 'react-router-dom'
import {Fragment} from 'react'

export function PageProfile() {
    const [params,] = useSearchParams()

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