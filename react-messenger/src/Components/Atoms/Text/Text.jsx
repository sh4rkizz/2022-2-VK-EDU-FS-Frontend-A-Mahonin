import './Text.scss'

import React from 'react'

export function Text ({ className, content, display, status, isRead }) {
  if (status) content = isRead ? 'done_all' : 'done'

  return <span className={ className } style={ { display: display } }>{ content }</span>
}
