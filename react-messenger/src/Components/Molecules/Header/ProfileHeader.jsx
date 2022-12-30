import {Button, CompanionInfo} from '../../Atoms'


export function ProfileHeader() {
    return (
        <header>
            <Button className='back' name='arrow_back' hrefTo='/chat'/>
            <CompanionInfo/>
        </header>
    )
}