import './Content.scss'
import message from '../../Atoms/Message/Message'


function RenderAllMessages(messages) {
    let id = 0

    return <>{messages.map(storedMessage => <>{message({message: storedMessage, id: ++id})}</>)}</>
}

export default function chatContent(props) {
    return <div className='content-chat'>{RenderAllMessages(props.chat.messages)}</div>
}
