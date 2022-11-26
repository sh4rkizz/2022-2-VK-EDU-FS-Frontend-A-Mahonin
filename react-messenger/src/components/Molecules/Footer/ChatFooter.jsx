import './Footer.scss'

import {Button, Input} from '../../Atoms'


export function ChatFooter({send, sendToVk, chatId, author}) {
    const buildMessage = (content) => {
        return {
            'chat': chatId,
            'content': content,
            'author': author
        }
    }

    const buildVkMessage = (content) => {
        return {
            'text': content,
            'author': author
        }
    }

    const handleKeyPress = (event) => {
        if (event.key !== 'Enter') return

        const message = event.target.value.trim()
        if (!message) return

        event.target.value = ''
        console.log(chatId)
        chatId === '0' ? sendToVk(buildVkMessage(message)) : send(buildMessage(message))
    }

    return (
        <footer>
            {Input({className: 'chat-input', placeholder: 'Enter a message', onKeyDown: handleKeyPress})}
            {Button({className: 'attach-button', name: 'attachment'})}
        </footer>
    )
}
