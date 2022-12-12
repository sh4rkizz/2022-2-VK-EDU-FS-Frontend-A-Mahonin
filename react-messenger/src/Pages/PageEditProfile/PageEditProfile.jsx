import {useState, Fragment} from 'react'

import {ProfileEditContent, ProfileEditHeader} from '../../Components/Molecules'
import getUserSettings from '../../utils/GetUserSettings'
import {useSelector} from 'react-redux'


export function PageEditProfile() {
    const [values, setValues] = useState(getUserSettings())

    return (
        <Fragment>
            <ProfileEditHeader values={values}/>
            <ProfileEditContent values={values} setValues={setValues}/>
        </Fragment>
    )
}
