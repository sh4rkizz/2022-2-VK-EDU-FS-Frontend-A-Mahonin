// This method is used to fill the localStorage for testing purposes
export default function mockLocalStorage() {
    localStorage.clear()

    let username = 'sharkizz'
    let fullName = 'Aleksei Mahonin'
    let bio = 'Future frontend developer'

    if (localStorage.length) return
    let settings = {
        'username': username,
        'fullName': fullName,
        'bio': bio
    }
    let chats = [
        {
            "id": "1",
            "companion": "Jennifer",
            "messages": [
                {
                    "user": "self",
                    "message": "Where's the money, Lebowski?",
                    "attachment": null,
                    "date": 1616517234741,
                    "status": "Read"
                },
                {
                    "user": "companion",
                    "message": "Where's the money, Lebowski?",
                    "attachment": null,
                    "date": 1616517234741,
                    "status": "Read"
                },
                {
                    "user": "self",
                    "message": "Where's the money, Lebowski?",
                    "attachment": null,
                    "date": 1616517234741,
                    "status": "Read"
                },
                {
                    "user": "companion",
                    "message": "Where's the money, Lebowski?",
                    "attachment": null,
                    "date": 1616517234741,
                    "status": "Read"
                },{
                    "user": "self",
                    "message": "Where's the money, Lebowski?",
                    "attachment": null,
                    "date": 1616517234741,
                    "status": "Read"
                },
                {
                    "user": "companion",
                    "message": "Where's the money, Lebowski?",
                    "attachment": null,
                    "date": 1616517234741,
                    "status": "Read"
                },{
                    "user": "self",
                    "message": "Where's the money, Lebowski?",
                    "attachment": null,
                    "date": 1616517234741,
                    "status": "Read"
                },
                {
                    "user": "companion",
                    "message": "Where's the money, Lebowski?",
                    "attachment": null,
                    "date": 1616517234741,
                    "status": "Read"
                },{
                    "user": "self",
                    "message": "Where's the money, Lebowski?",
                    "attachment": null,
                    "date": 1616517234741,
                    "status": "Read"
                },
                {
                    "user": "companion",
                    "message": "Where's the money, Lebowski?",
                    "attachment": null,
                    "date": 1616517234741,
                    "status": "Read"
                },{
                    "user": "self",
                    "message": "Where's the money, Lebowski?",
                    "attachment": null,
                    "date": 1616517234741,
                    "status": "Read"
                },
                {
                    "user": "companion",
                    "message": "Where's the money, Lebowski?",
                    "attachment": null,
                    "date": 1616517234741,
                    "status": "Read"
                },{
                    "user": "self",
                    "message": "Where's the money, Lebowski?",
                    "attachment": null,
                    "date": 1616517234741,
                    "status": "Read"
                },
                {
                    "user": "companion",
                    "message": "Where's the money, Lebowski?",
                    "attachment": null,
                    "date": 1616517234741,
                    "status": "Read"
                },{
                    "user": "self",
                    "message": "Where's the money, Lebowski?",
                    "attachment": null,
                    "date": 1616517234741,
                    "status": "Read"
                },
                {
                    "user": "companion",
                    "message": "Where's the money, Lebowski?",
                    "attachment": null,
                    "date": 1616517234741,
                    "status": "Read"
                },{
                    "user": "self",
                    "message": "Where's the money, Lebowski?",
                    "attachment": null,
                    "date": 1616517234741,
                    "status": "Read"
                },
                {
                    "user": "companion",
                    "message": "Where's the money, Lebowski?",
                    "attachment": null,
                    "date": 1616517234741,
                    "status": "Read"
                },
            ]
        },
        {
            "id": "2",
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
            "id": "3",
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
            "id": "4",
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
            "id": "5",
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
            "id": "6",
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
            "id": "7",
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
            "id": "8",
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
            "id": "9",
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
                    "date": 1666517200000,
                    "status": "Sent"
                }
            ]
        },
        {
            "id": "11",
            "companion": "Shameless",
            "messages": [
                {
                    "user": "companion",
                    "message": "“Why was the broom late for the meeting? It overswept.”",
                    "attachment": null,
                    "date": 1666511200000,
                    "status": "Sent"
                }
            ]
        },
        {
            "id": "12",
            "companion": "Shameless",
            "messages": [
                {
                    "user": "companion",
                    "message": "“Why was the broom late for the meeting? It overswept.”",
                    "attachment": null,
                    "date": 1666517100000,
                    "status": "Sent"
                }
            ]
        }
    ]


    localStorage.setItem('userSettings', JSON.stringify(settings))
    localStorage.setItem('chats', JSON.stringify(chats))
}
