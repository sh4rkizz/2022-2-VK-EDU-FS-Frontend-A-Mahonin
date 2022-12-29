import './SpanIcon.scss'

import React from 'react'

export function SpanIcon ({ className, icon, htmlFor }) {
  return <label className={ className } htmlFor={ htmlFor }>{ icon }</label>
}
