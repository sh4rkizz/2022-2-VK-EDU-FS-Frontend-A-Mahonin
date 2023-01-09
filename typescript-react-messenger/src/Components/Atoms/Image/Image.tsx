import './Image.scss'
import React from 'react'

interface imageProps {
  className: string
  src?: string
  alt?: string
  onClick?: any
}

export const Image = ({ className, src, alt, onClick }: imageProps): JSX.Element => {
  return <img className={ className } src={ src } alt={ alt } onClick={ onClick }/>
}
