import './CompanionName.scss'

export default function companionName(props) {
    if (props && props.color) return (
        <span className='companion-name' style={{color: props.color}}>
            {props.name}
        </span>
    )

    return <span className='companion-name'>{props.name}</span>
}
