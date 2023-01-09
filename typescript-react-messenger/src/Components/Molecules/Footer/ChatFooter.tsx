import './Footer.scss'

import React, { Fragment, useState } from 'react'
import { Button, Image, Input } from '../../Atoms'
import { useSelector } from 'react-redux'
import { buildMessage, sendLocation, sendMessage } from '../../../utils'
import { AudioRecorder } from './AudioRecorder'
import { reduxState } from '../../../types'

export const ChatFooter = (): JSX.Element => {
  const chatId = useSelector((state: reduxState) => state.activeChat.chat.id)
  const [image, setImage] = useState([])
  const [audio, setAudio, isRecording, startRecording, stopRecording] = AudioRecorder()

  const fileHandler = async (event: { preventDefault: () => void, target: { files: any[] } }): Promise<void> => {
    event.preventDefault()
    const file = event.target.files[0]
    const fileReader = new FileReader()

    fileReader.onload = () => {
      // @ts-expect-error
      setImage([fileReader.result, URL.createObjectURL(file)])
    }

    if (file) await fileReader.readAsDataURL(file)
  }

  const handleEnterKeyPress = (event: { key: string, target: { value: string } }): void => {
    if (event.key !== 'Enter') return

    const text = event.target.value.trim()
    if (!text && !((image.length > 0) || audio.length)) return

    event.target.value = ''
    sendMessage(
      buildMessage({
        text,
        image: image[0],
        audio: audio[0]
      }),
      chatId
    ).then(() => {
      console.log('message-sent')
    })

    setAudio([])
    setImage([])
  }

  const ImagePreview = (): JSX.Element => (image.length > 0)
    ? <Image
      className="image-preview" src={ image[1] }
      alt="preview" onClick={ () => {
        setImage([])
      } }
    />
    : <></>

  const ImageInput = (): JSX.Element => <Input
    onChange={ fileHandler } name="image" type="file" id="image"
    onKeyDown={ handleEnterKeyPress } accept="image/*"
  />

  const RecordingView = (): JSX.Element => isRecording ? <span>Recording</span> : <></>

  return (
    <Fragment>
      <ImagePreview/>
      <ImageInput/>

      <footer>
        <RecordingView/>
        <Input className="chat-input" placeholder="Enter a message" onKeyDown={ handleEnterKeyPress }/>
        <Button className="location-button" name="location_on" onClick={ () => {
          sendLocation(chatId)
        } }/>
        <Button className="record-voice-button" name="keyboard_voice"
                onMouseDown={ startRecording } onMouseUp={ stopRecording }/>
        <label className="attach-button-label" htmlFor="image">attachment</label>
      </footer>
    </Fragment>
  )
}
