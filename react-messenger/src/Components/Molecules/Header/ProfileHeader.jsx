import {Button, CompanionInfo} from '../../Atoms'


export function ProfileHeader({title, online_at}) {
    return (
        <header>
            <Button className='back' name='arrow_back' hrefTo='/chat'/>
            <CompanionInfo title={title} online_at={online_at}/>
        </header>
    )
}