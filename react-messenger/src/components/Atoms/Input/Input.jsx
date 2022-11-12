import './Input.scss'


export default function input(props) {
    return (
        <input className={props.className}
               defaultValue={props.value}
               name={props.name}
               onChange={props.handler}
               onKeyDown={props.onKeyDown}
               placeholder={props.placeHolder}>
        </input>
    )

}
