import './css/index.css'
import './css/header.css'
import './css/im.css'
import './css/new_chat.css'

const im = document.querySelector('.im')
const username = 'sharkizz'

if (!localStorage.length || localStorage.length === 1) mockLocalStorage()

renderChatList()

function openChat(id) {
    window.location.href = `./chat.html?id=${id}`
}

function renderChatList() {
    let chatList = JSON.parse(localStorage.getItem('im'))

    if (!chatList) return

    im.innerHTML = ''

    chatList = sortChats(chatList)
    chatList.forEach(chat => renderChat(chat))
}

function renderChat(chat) {
    let companion = chat.companion
    let lastMessage = chat.messages[chat.messages.length - 1]

    if (!companion || !lastMessage) return

    let chatId = chat.id
    let lastText = lastMessage.message
    let time = getDate(lastMessage.date)
    let status = lastMessage.status
    let isTagged = isTaggedInChat(chat.messages)

    let messageCounter = status === 'Sent' && lastMessage.user === 'companion' ?
        `${Math.round(Math.random() * 15)}` : '0'

    im.append(buildChat(companion, lastText, messageCounter, time, isTagged, status, chatId))
}

function buildChat(companion, lastMessage, messageCounter, time, isTagged, status, chatId) {
    let chat = document.createElement('div'),
        avatar = document.createElement('img')

    let info = document.createElement('div'),
        comp = document.createElement('span'),
        lastMess = document.createElement('span')

    let meta = document.createElement('div'),
        messTime = document.createElement('span'),
        messStatus = document.createElement('span')

    chat.addEventListener('click', function () {
        openChat(chatId);
    });

    avatar.src = 'https://via.placeholder.com/128'
    avatar.alt = 'avatar'

    chat.className = 'chat'
    avatar.className = 'chat-image'

    info.className = 'chat-info'
    meta.className = 'chat-meta'

    comp.className = 'chat-companion-name'
    lastMess.className = 'chat-last-message'
    messTime.className = 'chat-time'

    if (messageCounter !== '0') {
        // Last message was from companion and still unread
        messStatus.className = 'chat-message-count-block'
        let count = document.createElement('span')
        count.className = 'chat-message-count'
        count.innerText = messageCounter

        if (isTagged) {
            messStatus.className += ' tagged'
            count.className += ' tagged'
            count.innerText = '@'.concat(messageCounter)
        }

        messStatus.append(count)
    } else {
        // Last message was from user
        messStatus.className = 'material-icons chat-status'
        messStatus.innerText = status === 'Sent' ? 'done' : 'done_all'
    }

    comp.innerText = companion
    lastMess.innerText = lastMessage
    messTime.innerText = time

    info.append(comp, lastMess)
    meta.append(messTime, messStatus)

    chat.append(avatar, info, meta)

    return chat
}

function getDate(mils) {
    let today = new Date().toDateString()
    let dateMils = new Date(mils)

    const [h, m] = [dateMils.getHours(), dateMils.getMinutes()]

    if (dateMils.toDateString() === today)
        return `${h}:${m}`

    return `${dateMils.getDate()}.${dateMils.getMonth() + 1} ${h}:${m}`
}

function isTaggedInChat(chat) {
    return chat.some(messages => messages.message.includes(`@${username}`))
}

function sortChats(chatList) {
    if (!chatList) return

    chatList.sort(
        (a, b) => (
            a.messages[a.messages.length - 1].date <
            b.messages[b.messages.length - 1].date ?
                1 : -1
        )
    )

    return chatList
}

// This method is used to fill the localStorage as it should be
function mockLocalStorage() {
    localStorage.clear()

    if (localStorage.length) return

    localStorage.setItem('username', username)
    let chats = [
        {
            "id": "01",
            "companion": "Jennifer",
            "messages": [
                {
                    "user": "self",
                    "message": "Where's the money, Lebowski?",
                    "attachment": null,
                    "date": 1616517234741,
                    "status": "Read"
                }
            ]
        },
        {
            "id": "02",
            "companion": "F.R.I.E.N.D.S",
            "messages": [
                {
                    "user": "self",
                    "message": "If he doesn't like you, this is all a moo-point",
                    "attachment": null,
                    "date": 1666517241712,
                    "status": "Read"
                }
            ]
        },
        {
            "id": "03",
            "companion": "Suits",
            "messages": [
                {
                    "user": "companion",
                    "message": "I don't play the odds, I play the man",
                    "attachment": null,
                    "date": 1666517201712,
                    "status": "Sent"
                }
            ]
        },
        {
            "id": "04",
            "companion": "Dr. House",
            "messages": [
                {
                    "user": "companion",
                    "message": "@sharkizz is overrated.",
                    "attachment": null,
                    "date": 1666513201712,
                    "status": "Sent"
                }
            ]
        },
        {
            "id": "05",
            "companion": "Lucifer Morningstar",
            "messages": [
                {
                    "user": "self",
                    "message": "People Don't Arrive Broken",
                    "attachment": null,
                    "date": 1666517200000,
                    "status": "Read"
                }
            ]
        },
        {
            "id": "06",
            "companion": "The Good Doctor",
            "messages": [
                {
                    "user": "self",
                    "message": "If You Want To Get Anything In Life, Shaun, There's One Thing You Got To Do: Never Be Afraid.",
                    "attachment": null,
                    "date": 1666507201712,
                    "status": "Read"
                }
            ]
        },
        {
            "id": "07",
            "companion": "The Big Bang Theory",
            "messages": [
                {
                    "user": "self",
                    "message": "You think that's bad?",
                    "attachment": null,
                    "date": 1666517201712,
                    "status": "Read"
                }
            ]
        },
        {
            "id": "08",
            "companion": "Wayne",
            "messages": [
                {
                    "user": "companion",
                    "message": "Love me or hate me, i swear it won't make or break me.",
                    "attachment": null,
                    "date": 1666517201712,
                    "status": "Sent"
                }
            ]
        },
        {
            "id": "09",
            "companion": "Frank Gallagher",
            "messages": [
                {
                    "user": "self",
                    "message": "Doing things you don't want to do is how you make a relationship work.",
                    "attachment": null,
                    "date": 1666517287816,
                    "status": "Sent"
                }
            ]
        },
        {
            "id": "10",
            "companion": "Shameless",
            "messages": [
                {
                    "user": "companion",
                    "message": "“Why was the broom late for the meeting? It overswept.”",
                    "attachment": null,
                    "date": 1666517287816,
                    "status": "Sent"
                }
            ]
        }
    ]

    localStorage.setItem('im', JSON.stringify(chats))
}
