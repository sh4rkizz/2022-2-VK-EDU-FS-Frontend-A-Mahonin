import './Header.scss'

import { Button, Text } from '../../Atoms'
import React from 'react'

const token = 'y0_AgAAAAAU5DGuAATuwQAAAADYGXy64buZpEbbTDCrmmTRdEZ4dNDj7Ew'

const folder = 'b1gpa4t2lt6kg5tua4a4'

const body = {
  yandexPassportOauthToken: token,
  folderId: folder,
  texts: ['Hello', 'World'],
  'targetLanguageCode': 'ru'
}

const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${token}&text=my name is john cena&lang=en-ru&format=plain`;

function translate() {
  console.log('text')
  fetch(url).then(response => response.json()).then(data => console.log(data));
  // return fetch('https://translate.api.cloud.yandex.net/translate/v2/translate', {
  //   method: 'POST',
  //   // headers: {
  //   //   'Content-Type': 'application/json',
  //   //   'Authorization': `Bearer ${token}`
  //   // },
  //   mode: 'no-cors',
  //   body: JSON.stringify(body)
  // }).then(resp => console.log(resp))
}

export function ChatListHeader () {
  return (
    <header>
      {/*<Button className='menu' name='menu' hrefTo='/edit_profile'/>*/ }
      <Button className="menu" name="menu" onClick={ translate }/>
      <Text className="page-title" content="Messenger"/>
      <Button className="search" name="search"/>
    </header>
  )
}
