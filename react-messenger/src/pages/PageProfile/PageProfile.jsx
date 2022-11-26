import {useState, Fragment} from 'react'

import {ProfileContent, ProfileHeader} from '../../components/Molecules'
import getUserSettings from '../../utils/GetUserSettings'


export function PageProfile() {
    const [values, setValues] = useState(getUserSettings())

    return (
        <Fragment>
            {ProfileHeader({values: values})}
            {ProfileContent({values: values, setValues: setValues})}
        </Fragment>
    )
}
