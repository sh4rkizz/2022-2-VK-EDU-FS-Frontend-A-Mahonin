import './SpanIcon.scss'
import React from 'react'

interface spanIconProps {
  className: string
  icon?: string
  htmlFor?: string
}

export function SpanIcon ({ className, icon, htmlFor }: spanIconProps): JSX.Element {
  return <label className={ className } htmlFor={ htmlFor }>{ icon }</label>
}
