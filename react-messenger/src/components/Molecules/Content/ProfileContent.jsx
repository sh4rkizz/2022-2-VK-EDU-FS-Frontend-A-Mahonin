import './Content.scss'

import input from '../../Atoms/Input/Input'
import avatar from '../../Atoms/Avatar/Avatar'
import helpTag from '../../Atoms/HelpTag/HelpTag'


function particle(props) {
    return (
        <span className='content-particle'>
            <span className='content-atom'>
                {helpTag({className: 'profile-tag', tagContent: props.tagContent})}
                {input({
                    className: 'profile-input',
                    name: props.name,
                    handler: props.handler,
                    placeHolder: props.inputPlaceholder,
                    value: props.value
                })}
            </span>
            {helpTag({
                className: 'profile-tag',
                tagContent: props.secondTagContent,
                displaySecondTag: props.displaySecondTag
            })}
        </span>
    )
}

export default function profileContent(props) {
    const handleInputChange = (e) => {
        const {name, value} = e.target

        props.setValues({
            ...props.values,
            [name]: value
        })
    }

    return (
        <div className='content-profile'>
            {avatar({className: 'profile-avatar'})}

            {particle({
                tagContent: 'Full name',
                name: 'fullName',
                inputPlaceholder: 'Enter your name',
                value: props.values.fullName,
                handler: handleInputChange,
                secondTagContent: 'Unavailable name',
                displaySecondTag: 'none',
            })}

            {particle({
                tagContent: 'Username',
                name: 'username',
                inputPlaceholder: 'Enter your username',
                value: props.values.username,
                handler: handleInputChange,
                secondTagContent: 'Minimum length is 5 characters',
            })}

            {particle({
                tagContent: 'Bio',
                name: 'bio',
                inputPlaceholder: 'Describe yourself',
                value: props.values.bio,
                handler: handleInputChange,
                secondTagContent: 'Any details about you',
            })}
        </div>
    )
}