import React, { useState, Fragment } from 'react'

import { ProfileEditContent, ProfileEditHeader } from '../../Components/Molecules'
import { getUserSettings } from '../../utils'

export const PageEditProfile = (): JSX.Element => {
  const [values, setValues] = useState(getUserSettings())

  return (
    <Fragment>
      <ProfileEditHeader values={ values }/>
      <ProfileEditContent values={ values } setValues={ setValues }/>
    </Fragment>
  )
}
