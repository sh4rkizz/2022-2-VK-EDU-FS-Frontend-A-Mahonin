import React, { useEffect, useState } from 'react'

export const AudioRecorder = () => {
  const [audio, setAudio] = useState([]),
    [isRecording, setIsRecording] = useState(false),
    [recorder, setRecorder] = useState(null)

  const requestRecorder = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    return new MediaRecorder(stream)
  }

  const audioControl = (audioFile) => {
    const fileReader = new FileReader()
    fileReader.onload = () => setAudio([fileReader.result, URL.createObjectURL(audioFile)])

    if (audioFile) fileReader.readAsDataURL(audioFile)
  }

  useEffect(() => {
    if (!recorder && isRecording) requestRecorder().then(recorder => setRecorder(recorder))

    if (recorder) {
      isRecording ? recorder.start() : recorder.stop()
      recorder.ondataavailable = (event) => audioControl(event.data)
    }
  }, [recorder, isRecording])

  return [audio, setAudio, isRecording, () => setIsRecording(true), () => setIsRecording(false)]
}
