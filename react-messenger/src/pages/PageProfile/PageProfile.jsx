import {useState} from 'react'

import profileHeader from '../../components/Molecules/Header/ProfileHeader'
import profileContent from '../../components/Molecules/Content/ProfileContent'
import getUserSettings from "../../utils/GetUserSettings";


export default function PageProfile() {
    const [values, setValues] = useState(getUserSettings())

    return (
        <>
            {profileHeader({values: values})}
            {profileContent({values: values, setValues: setValues})}
        </>
    )
}
