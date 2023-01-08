import './Text.scss'
import React from 'react'

interface textProps {
  className: string
  isRead?: string
  status?: string
  content?: string
  display?: string
}

export function Text ({ className, content, display, status, isRead }: textProps): JSX.Element {
  if (status) content = isRead ? 'done_all' : 'done'

  return <span className={ className } style={ { display } }>{ content }</span>
}
