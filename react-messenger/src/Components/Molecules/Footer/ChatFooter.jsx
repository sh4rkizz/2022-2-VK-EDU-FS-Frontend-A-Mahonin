import './Footer.scss'

import {Fragment, useState} from 'react'

import {Button, Input, Image} from '../../Atoms'

export function ChatFooter({send, chatId}) {
    const [audio, setAudio] = useState([])
    const [image, setImage] = useState([])

    const buildMessage = ({text, image, audio}) => {
        return {
            chat: chatId,
            text: text,
            image: image,
            audio: audio
        }
    }

    const handleEnterKeyPress = (event) => {
        if (event.key !== 'Enter') return

        const text = event.target.value.trim()
        if (!text && !(image.length ^ audio.length)) return

        event.target.value = ''
        //, image: getImageSource(), audio: getAudioSource()
        send(buildMessage({text: text}))

        setAudio([])
        setImage([])
    }

    // const sendImage = image => {
    //     const data = new FormData()
    //     data.append('image', image)
    //
    //     const response = fetch('https://tt-front.vercel.app/upload', {
    //         method: 'POST',
    //         body: data,
    //     })
    //
    //     return response.json()
    // }

    const sendAudio = audio => {
        const data = new FormData()
        data.append('audio', audio)

        const response = fetch('https://tt-front.vercel.app/upload', {
            method: 'POST',
            body: data,
        })

        return response.json()
    }

    // const getImageSource = () => sendImage(image[0]).then(resp => resp['imgSrc'])
    // const getAudioSource = () => sendAudio(audio).then(resp => resp["audioSrc"]);

    const fileHandler = (event) => {
        const file = event.target.files[0]
        const fileReader = new FileReader()

        fileReader.onload = () => setImage([fileReader.result, URL.createObjectURL(event.target.files[0])])

        if (file) fileReader.readAsDataURL(file)
    }

    const positionFailure = () => alert('This browser is denying geolocation access')
    const positionSuccess = (pos) => send(buildMessage({
            text: `https://www.openstreetmap.org/#map=18/${pos.coords.latitude}/${pos.coords.longitude}`,
        })
    )

    const getLocation = () => navigator.geolocation.getCurrentPosition(positionSuccess, positionFailure)

    return (
        <Fragment>
            {image.length && <Image
                className='image-preview' src={image[1]}
                alt='preview' onClick={() => setImage([])}/>}

            <Input onChange={fileHandler}
                   name='image'
                   type='file' id='image'
                   onKeyDown={handleEnterKeyPress}
                   accept='image/*'/>

            <footer>
                <Input className='chat-input' placeholder='Enter a message' onKeyDown={handleEnterKeyPress}/>
                <Button className='location-button' name='location_on' onClick={getLocation}/>
                <Button className='record-voice-button' name='keyboard_voice'/>
                <label className='attach-button-label' htmlFor='image'>attachment</label>
            </footer>
        </Fragment>
    )
}
