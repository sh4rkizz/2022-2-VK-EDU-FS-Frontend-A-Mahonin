import './Meta.scss'

import { Text } from '../Text/Text'
import React from 'react'

const handleDate = (mDate: string | undefined): undefined | string => {
  if (!mDate) return

  const [cday] = new Date().toLocaleString().split(', ')
  const [day, time] = new Date(mDate).toLocaleString().split(', ')

  if (!(time && day)) return

  if (cday === day) {
    const [h, m] = time.split(':')
    return `${h}:${m}`
  }

  const [h, min] = time.split(':')
  const [d, mon] = day.split('.')

  return `${d}.${mon} ${h}:${min}`
}

interface metaProps {
  className: string
  date?: string
  isRead?: string
}

export function Meta ({ className, date, isRead }: metaProps): JSX.Element {
  return (
    <div className={ className }>
      <Text className="chat-list-date" content={ handleDate(date) }/>
      <Text className="status" isRead={ isRead }/>
    </div>
  )
}
