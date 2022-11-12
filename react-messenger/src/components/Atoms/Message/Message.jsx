import './Message.scss'
import meta from "../Meta/Meta"


export default function message(props) {
    return (
        <div className={props.message.user === 'self' ? 'user-message' : 'companion-message'} id={props.id}>
            <span className='message-text'>{props.message.message}</span>
            {meta({className: 'message-meta', date: props.message.date, status: props.message.status})}
        </div>
    )
}
