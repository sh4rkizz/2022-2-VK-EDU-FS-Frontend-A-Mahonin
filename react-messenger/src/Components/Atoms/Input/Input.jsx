import './Input.scss'

import React from 'react'

export function Input ({ className, value, name, type, onChange, onKeyDown, placeholder, accept, id }) {
  return (
    <input
      className={ className }
      defaultValue={ value }
      type={ type }
      id={ id }
      accept={ accept }
      name={ name }
      onChange={ onChange }
      onKeyDown={ onKeyDown }
      placeholder={ placeholder }>
    </input>
  )

}
