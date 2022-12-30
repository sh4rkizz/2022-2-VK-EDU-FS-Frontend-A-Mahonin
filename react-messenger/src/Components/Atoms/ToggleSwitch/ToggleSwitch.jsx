export function ToggleSwitch() {
    return (
        <div className='container'>
            <input type='checkbox' id='toggle-button' className='toggle-button'/>
            <label htmlFor='toggle-button' className='text'>Toggle Button</label>
        </div>
    )
}