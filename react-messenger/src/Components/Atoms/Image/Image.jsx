import './Image.scss'

import React from 'react'

export function Image ({ className, src, alt, onClick }) {
  return <img className={ className } src={ src } alt={ alt } onClick={ onClick }/>
}
