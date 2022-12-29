import './Button.scss'

import {Link} from 'react-router-dom'


export function Button({hrefTo, className, name, onClick, onMouseDown, onMouseUp}) {
    if (hrefTo) return (
        <Link to={hrefTo} style={{textDecoration: 'none'}}>
            <button className={className}>{name}</button>
        </Link>
    )

    return <button className={className} onMouseDown={onMouseDown} onMouseUp={onMouseUp}
                   onClick={onClick}>{name}</button>
}

export const LoginButton = () => {
    // const handleCallback = (response) => {
    //     let user = jwtDecode(response.credential)
    //     console.log(user.email)
    // }
    //
    // useEffect(() => {
    //     /* global google */
    //     google.accounts.id.initialize({
    //         client_id: '852169726556-11ubfhtu1bgkfimlsof7i555h1i46v6t.apps.googleusercontent.com',
    //         callback: handleCallback
    //     })
    //
    //     google.accounts.id.renderButton(
    //         document.getElementById('login-button'),
    //         {theme: 'outline', size: 'big'}
    //     )
    // }, [])

    return (
        <a href='http://localhost:8000/auth/login/google-oauth2/' style={{textDecoration: 'none'}}>
            <button className='login-button'>Login with google</button>
        </a>
    )
}

export const LogoutButton = () => {
    return (
        <a href='http://localhost:8000/logout/' style={{textDecoration: 'none'}}>
            <button className='logout-button'>Logout</button>
        </a>
    )
}