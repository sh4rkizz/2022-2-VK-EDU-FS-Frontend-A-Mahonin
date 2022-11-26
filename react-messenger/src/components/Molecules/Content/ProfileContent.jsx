import './Content.scss'

import {Avatar, Input, Text} from '../../Atoms'


function Particle({fTagContent, sTagContent, inputName, inputHandler, inputPlaceholder, inputValue, display}) {
    return (
        <span className='particle'>
            <span className='element'>
                {Text({className: 'profile-tag', content: fTagContent})}
                {Input({
                    className: 'profile-input', value: inputValue, name: inputName,
                    handler: inputHandler, placeholder: inputPlaceholder
                })}
            </span>
            {Text({
                className: 'profile-tag', content: sTagContent,
                display: display ? display : 'contents'
            })}
        </span>
    )
}

export function ProfileContent({setValues, values}) {
    const handleInputChange = (e) => {
        const {name, value} = e.target

            setValues({
                ...values,
                [name]: value
            })
    }

    return (
        <div className='content-profile'>
            {Avatar({className: 'profile-avatar'})}

            {Particle({
                fTagContent: 'Full name', inputName: 'fullName', inputPlaceholder: 'Enter your name',
                inputValue: values.fullName, inputHandler: handleInputChange,
                sTagContent: 'Unavailable name', display: 'none'
            })}

            {Particle({
                fTagContent: 'Username', inputName: 'username', inputPlaceholder: 'Enter your username',
                inputValue: values.username, inputHandler: handleInputChange,
                sTagContent: 'Minimum length is 5 characters',
            })}

            {Particle({
                fTagContent: 'Bio', inputName: 'bio', inputPlaceholder: 'Describe yourself',
                inputValue: values.bio, inputHandler: handleInputChange, sTagContent: 'Any details about you',
            })}
        </div>
    )
}
