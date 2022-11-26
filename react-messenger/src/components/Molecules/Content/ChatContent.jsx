import './Content.scss'
import {Fragment} from 'react'
import {Message} from '../../Atoms'


export function ChatContent({messages}) {
    return <div className='content-chat'>
        {messages.map(message => <Fragment key={message.id}>{Message({message})}</Fragment>)}
    </div>
}
