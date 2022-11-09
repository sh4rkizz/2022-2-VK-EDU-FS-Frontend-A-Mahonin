import './Footer.scss'

import button from "../../Atoms/Button/Button"
import input from "../../Atoms/Input/Input"


export default function chatFooter(props) {
    const formMessage = (message) => {
        return {
            "user": "self",
            "message": message,
            "attachment": null,
            "date": new Date().getTime(),
            "status": "Sent"
        }
    }

    const handleKeyPress = (event) => {
        if (event.key !== 'Enter') return

        let message = event.target.value.trim()

        event.target.value = ''
        if (message) props.hook(props.updateData(props.chat.id, formMessage(message)))
    }

    return (
        <footer>
            {input({className: 'chat-input', placeHolder: 'Enter a message', onKeyDown: handleKeyPress})}
            {button({buttonClass: 'attach-button', buttonName: 'attachment'})}
        </footer>
    )
}
