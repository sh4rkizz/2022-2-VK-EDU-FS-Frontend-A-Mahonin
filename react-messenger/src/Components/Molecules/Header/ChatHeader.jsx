import './Header.scss'

import {Button, CompanionInfo} from '../../Atoms'

let mockOnline = 'Was online some time ago'


export function ChatHeader({title}) {
    return (
        <header>
            <Button className='back' name='arrow_back' hrefTo='/'/>
            <CompanionInfo title={title} online_at={mockOnline}/>
            <Button className='search' name='search'/>
            <Button className='more' name='more_vert'/>
        </header>
    )
}
