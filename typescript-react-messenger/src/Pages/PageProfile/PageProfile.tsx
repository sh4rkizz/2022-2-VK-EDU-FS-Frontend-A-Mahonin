import { ProfileHeader, ProfileContent } from '../../Components/Molecules'
import React, { Fragment } from 'react'

export const PageProfile = (): JSX.Element => {
  const user = {
    username: 'Jennifer',
    phoneNumber: '+78005553535'
  }

  return (
    <Fragment>
      <ProfileHeader/>
      <ProfileContent phoneNumber={ user.phoneNumber }/>
    </Fragment>
  )
}
