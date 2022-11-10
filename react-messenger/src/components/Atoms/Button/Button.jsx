import './Button.scss'

export default function button(props) {
    return <button className={props.buttonClass} onClick={props.onClick}>{props.buttonName}</button>
}
