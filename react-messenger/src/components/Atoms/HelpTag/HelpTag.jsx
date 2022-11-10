import './HelpTag.scss'


export default function helpTag(props) {
    return (
        <span className={props.className} style={{display: props.displaySecondTag}}>{props.tagContent}</span>
    )
}
