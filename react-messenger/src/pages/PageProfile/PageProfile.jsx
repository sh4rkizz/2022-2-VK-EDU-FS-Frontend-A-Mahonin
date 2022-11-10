import {useState} from 'react'

import profileHeader from '../../components/Molecules/Header/ProfileHeader'
import profileContent from '../../components/Molecules/Content/ProfileContent'
import getUserSettings from "../../utils/GetUserSettings";


export default function PageProfile(props) {
    const [values, setValues] = useState(getUserSettings())

    return (
        <>
            {profileHeader({values: values, goBack: props.goBack})}
            {profileContent({values: values, setValues: setValues})}
        </>
    )
}
