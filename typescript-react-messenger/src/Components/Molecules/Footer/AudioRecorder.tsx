import { useEffect, useState } from 'react'

export const AudioRecorder = (): [[string, string], Function, boolean, Function, Function] => {
  const [audio, setAudio] = useState([])
  const [isRecording, setIsRecording] = useState(false)
  const [recorder, setRecorder] = useState(null)

  const requestRecorder = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    return new MediaRecorder(stream)
  }

  const audioControl = (audioFile: any): void => {
    const fileReader = new FileReader()

    fileReader.onload = () => {
      // @ts-expect-error
      setAudio([fileReader.result, URL.createObjectURL(audioFile)])
    }

    if (audioFile) fileReader.readAsDataURL(audioFile)
  }

  useEffect(() => {
    if (!recorder && isRecording) {
      requestRecorder().then(recorder => {
        // @ts-expect-error
        setRecorder(recorder)
      })
    }

    if (recorder) {
      // @ts-expect-error
      isRecording ? recorder.start() : recorder.stop()
      // @ts-expect-error
      recorder.ondataavailable = (event: { data: any }) => {
        audioControl(event.data)
      }
    }
  }, [recorder, isRecording])

  // @ts-expect-error
  return [audio, setAudio, isRecording, () => {
    setIsRecording(true)
  }, () => {
    setIsRecording(false)
  }]
}
