import './Content.scss'
import message from '../../Atoms/Message/Message'

import {Fragment} from 'react'


function RenderAllMessages(messages) {
    let id = 0

    return (
        <Fragment>
            {messages.map(storedMessage =>
                <Fragment key={id}>{message({message: storedMessage, id: ++id})}</Fragment>
            )}
        </Fragment>
    )
}

export default function chatContent(props) {
    return <div className='content-chat'>{RenderAllMessages(props.chat.messages)}</div>
}
