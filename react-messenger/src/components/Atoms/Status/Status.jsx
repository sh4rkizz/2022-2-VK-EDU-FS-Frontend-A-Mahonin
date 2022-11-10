import './Status.scss'


export default function status(props) {
    return <span className='status'>{props.status === 'Read' ? 'done_all' : 'done'}</span>
}