import './Input.scss'
import React from 'react'

interface inputProps {
  placeholder?: string
  className?: string
  id?: string
  value?: string
  name?: string
  type?: string
  onChange?: any
  onKeyDown?: any
  accept?: string
}

export const Input = ({
  className, value, name, type, onChange,
  onKeyDown, placeholder, accept, id
}: inputProps): JSX.Element => {
  return (
    <input
      className={ className } defaultValue={ value } type={ type } id={ id }
      accept={ accept } name={ name } onChange={ onChange } onKeyDown={ onKeyDown } placeholder={ placeholder }>
    </input>
  )
}
