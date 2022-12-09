import './Content.scss'
import {Fragment} from 'react'
import {Message} from '../../Atoms'
import {useSelector} from 'react-redux'


export function ChatContent({messages}) {
    // const messages = useSelector(state => state.messages.messages)

    return <div className='content-chat'>
        {messages.map(message => <Fragment key={message.id}>
            <Message message={message}/>
        </Fragment>)}
    </div>
}
