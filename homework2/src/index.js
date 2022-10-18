import './index.css'

const form = document.querySelector('form')
const chat = document.querySelector('.chat')
const header = document.querySelector('.header')

const userName = 'sharkizz'
const companionName = 'Jennifer Wolski'

renderMessagesAfterReload()
createHeader()

form.addEventListener('key-press', handleKeyPress.bind())
form.addEventListener('submit', handleSubmit.bind())

function renderMessagesAfterReload() {
    // Get and check stored messages
    let storedMessages = JSON.parse(localStorage.getItem('messages'))
    if (!storedMessages || !storedMessages.length) return

    storedMessages.forEach(message => createMessage(message))
}

function createHeader() {
    let companion = document.createElement('div')
    let compPicture = document.createElement('img')
    let compName = document.createElement('div')
    let compInfo = document.createElement('div')
    let compLastOnline = document.createElement('span')

    let goBackButton = document.createElement('button')
    let searchButton = document.createElement('button')
    let moreButton = document.createElement('button')

    let styleGoBackButton = document.createElement('span')
    let styleSearchButton = document.createElement('span')
    let styleMoreButton = document.createElement('span')

    companion.className = 'companion'
    compInfo.className = 'companion-info'
    compPicture.className = 'companion-picture'
    compName.className = 'companion-name'
    compLastOnline.className = 'companion-online'

    goBackButton.className = 'header-button go-back'
    searchButton.className = 'header-button search'
    moreButton.className = 'header-button more'

    styleGoBackButton.className = 'material-icons go-back'
    styleSearchButton.className = 'material-icons search'
    styleMoreButton.className = 'material-icons more'

    compPicture.src = 'static/jenifer_profile_picture.jpg'
    compPicture.alt = 'profile_pic'
    compName.innerText = companionName
    compLastOnline.innerText = `Last seen ${Math.floor(Math.random() * 10) + 1} minutes ago`

    styleGoBackButton.innerText = 'arrow_back'
    styleSearchButton.innerText = 'search'
    styleMoreButton.innerText = 'more_vert'

    goBackButton.append(styleGoBackButton)
    searchButton.append(styleSearchButton)
    moreButton.append(styleMoreButton)

    compInfo.append(compName)
    compInfo.append(compLastOnline)

    companion.append(compPicture)
    companion.append(compInfo)

    header.append(goBackButton)
    header.append(companion)
    header.append(searchButton)
    header.append(moreButton)
}

function createMessage(message) {
    let messageBlock = document.createElement('div')
    let messageText = document.createElement('span')
    let messageMeta = document.createElement('div')
    let messageDate = document.createElement('div')
    let messageState = document.createElement('div')

    messageText.className = 'message-text'
    messageDate.className = 'message-date'
    messageBlock.className = message.username === companionName ? 'message companion' : 'message user'
    messageMeta.className = 'message-meta'
    messageState.className = 'message-state'
    messageDate.className = 'message-date'

    messageText.innerText = message.message
    messageDate.innerText = dateDivisor(message.date);

    messageBlock.append(messageText)
    messageMeta.append(messageDate)
    messageMeta.append(messageState)
    messageBlock.append(messageMeta)

    chat.prepend(messageBlock)
    window.scrollTo(0, document.body.scrollHeight)
}

function saveMessageToLocalStorage(message) {
    let messages = localStorage.getItem('messages')

    // Set default localStorage if it does not exist
    if (!messages) localStorage.setItem('messages', JSON.stringify([]))

    // Add message to the list
    messages = JSON.parse(localStorage.getItem('messages'))
    messages.push(message)

    // Rewrite localStorage 'messages' memory
    localStorage.setItem('messages', JSON.stringify(messages))
}

function dateDivisor(localeDate) {
    if (!localeDate) return

    let [date, time] = localeDate.split(', ')
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
        'username': companionName,
        'message': responses[Math.floor(Math.random() * responses.length)],
        'attachment': null,
        'date': new Date().toLocaleString(),
        'status': 'Read'
    }

    saveMessageToLocalStorage(message)
    createMessage(message)
}

function handleSubmit(event) {
    event.preventDefault()

    // Get and check input field
    const input = event.target.querySelector('.form-input')
    if (!input || !input.value.trim()) return

    // Get and check attachment field
    const attachment = event.target.querySelector('.attachment-button')

    // Build message
    let message = {
        'username': userName,
        'message': input.value.trim(),
        'attachment': attachment,
        'date': new Date().toLocaleString(),
        'status': 'Sent'
    }

    saveMessageToLocalStorage(message)
    createMessage(message)

    setTimeout(function () {
        mockResponse()
    }, 3000);

    // Empty the input field
    input.value = null
}

function handleKeyPress(event) {
    if (event.keyCode === 13) form.dispatchEvent(new Event('submit'))
}
