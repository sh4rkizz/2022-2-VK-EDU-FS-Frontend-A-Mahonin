import './Input.scss'


export function Input({className, value, name, onChange, onKeyDown, placeholder}) {
    return (
        <input className={className}
               defaultValue={value}
               name={name}
               onChange={onChange}
               onKeyDown={onKeyDown}
               placeholder={placeholder}>
        </input>
    )

}
