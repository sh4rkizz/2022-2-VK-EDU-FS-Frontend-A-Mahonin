import GoogleIcon from '@mui/icons-material/Google'
import {LoginButton} from '../../Atoms/Button/Button'


export function LoginContent() {
    return (
        <div className='login-type-container'>
            <div className='login-type-row'>
                <GoogleIcon className='login-type-icon'/>
                <LoginButton/>
            </div>
        </div>
    )
}