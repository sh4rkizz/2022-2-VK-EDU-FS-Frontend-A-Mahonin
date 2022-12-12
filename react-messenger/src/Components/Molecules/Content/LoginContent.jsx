import GoogleIcon from '@mui/icons-material/Google'
import {Text, SpanIcon, Button} from '../../Atoms'
import {LOGIN} from '../../../utils/urls'


export function LoginContent() {
    const googleLoginUrl = LOGIN

    const login = () => console.log('it didnt work..again')

    return (
        <div className='login-type-container'>
            <div className='login-type-row'>
                <div className='icon-box'>
                    <GoogleIcon className='login-type-icon'></GoogleIcon>
                </div>
                <Button className='login-type-button' onClick={() => login} name='Login with Google'/>
            </div>
        </div>
    )
}