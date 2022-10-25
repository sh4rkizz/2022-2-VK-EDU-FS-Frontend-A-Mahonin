import './css/index.css'
import './css/header.css'
import './css/chat.css'
import './css/footer.css'

const form = document.querySelector('form')
const chat = document.querySelector('.chat')

form.addEventListener('keypress', handleKeyPress.bind())
form.addEventListener('submit', handleSubmit.bind())

let id = new URLSearchParams(window.location.search).get('id')

const thisChat = getChatById(id)

renderMessages()
createHeader()

function goBack() {
    window.location.href = `./index.html`
}

function getChatById(chatId) {
    let chats = JSON.parse(localStorage.getItem('im'))

    return chats.find(chat => chat.id === chatId)
}

function renderMessages() {
    // Get and check stored messages
    let storedMessages = thisChat.messages
    if (!storedMessages || !storedMessages.length) return

    storedMessages.forEach(message => createMessage(message))
}

function createHeader() {
    let companionInfo = document.querySelector('.companion-info'),
        companionMeta = document.createElement('div'),
        companionAvatar = document.createElement('img'),
        companionName = document.createElement('span'),
        companionLastOnline = document.createElement('span')

    let goBackButton = document.querySelector("header").querySelector('.header-button:first-child')

    goBackButton.onclick = goBack

    companionAvatar.src = 'https://via.placeholder.com/128'
    companionAvatar.alt = 'profile_pic'

    companionInfo.className = 'companion-info'
    companionAvatar.className = 'companion-avatar'
    companionMeta.className = 'companion-meta'
    companionName.className = 'companion-name'
    companionLastOnline.className = 'companion-online'

    companionName.innerText = thisChat.companion
    companionLastOnline.innerText = 'Last seen 10 minutes ago'

    companionMeta.append(companionName, companionLastOnline)
    companionInfo.append(companionAvatar, companionMeta)
}

function createMessage(message) {
    let messageBlock = document.createElement('div'),
        messageText = document.createElement('span'),
        messageMeta = document.createElement('div'),
        messageDate = document.createElement('div'),
        messageStatus = document.createElement('div'),
        messageStatusTick = document.createElement('span')

    messageText.className = 'message-text'
    messageDate.className = 'message-date'
    messageMeta.className = 'message-meta'
    messageStatus.className = 'message-status'
    messageDate.className = 'message-date'
    messageStatusTick.className = 'material-icons message-status'

    messageBlock.className = message.user === 'companion' ?
        'message-block message-companion' :
        'message-block message-user'

    messageText.innerText = message.message
    messageDate.innerText = renderDate(message.date);
    messageStatusTick.innerText = message.status === 'Sent' ?
        'done' : 'done_all'

    messageStatus.append(messageStatusTick)
    messageMeta.append(messageDate, messageStatus)
    messageBlock.append(messageText, messageMeta)

    chat.prepend(messageBlock)
    window.scrollTo(0, document.body.scrollHeight)
}

function saveMessageToLocalStorage(message) {
    let chats = JSON.parse(localStorage.getItem('im'))

    // Set default localStorage if it does not exist
    if (!chats) localStorage.setItem('im', JSON.stringify([]))

    // Modify certain chat messages
    chats.map(chat => {
        if (chat.id === thisChat.id) chat.messages.push(message)
    })

    // Rewrite localStorage 'messages' memory
    localStorage.setItem('im', JSON.stringify(chats))
}

function renderDate(mils) {
    if (!mils) return

    let [date, time] = new Date(mils).toLocaleString().split(', ')
    const [h, m] = time.split(':')

    time = `${h}:${m}`

    if (date === new Date().toLocaleDateString())
        return time

    return `${date} ${time}`
}

function mockResponse() {
    // Build message for companion
    let responses = [
        'London is the capital of GB',
        'When you have a dream, you\'ve got to grab it and never let go.',
        'Keep your face always toward the sunshine, and shadows will fall behind you.',
        'Success is Not Final, Failure is Not Fatal: it is the Courage to Continue that Counts.'
    ]

    let message = {
        'user': 'companion',
        'message': responses[Math.floor(Math.random() * responses.length)],
        'attachment': null,
        'date': new Date().getTime(),
        'status': 'Read'
    }

    saveMessageToLocalStorage(message)
    createMessage(message)
}

function handleSubmit(event) {
    event.preventDefault()

    // Get and check input field
    const input = event.target.querySelector('.footer-input-field')
    if (!input || !input.value.trim()) return

    // Get and check attachment field
    const attachment = event.target.querySelector('.footer-button')

    // Build message
    let message = {
        'user': 'self',
        'message': input.value.trim(),
        'attachment': attachment,
        'date': new Date().getTime(),
        'status': 'Sent'
    }

    saveMessageToLocalStorage(message)
    createMessage(message)

    setTimeout(function () {
        mockResponse()
    }, 2500);

    // Empty the input field
    input.value = null
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        form.dispatchEvent(new Event('submit'))
    }
}
