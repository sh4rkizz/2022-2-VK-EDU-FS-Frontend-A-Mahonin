import './App.css'

import React, {Component} from 'react'

import PageChat from './pages/PageChat/PageChat'
import PageProfile from './pages/PageProfile/PageProfile'
import PageChatList from './pages/PageChatList/PageChatList'


export default class App extends Component {
    constructor(props) {
        super(props)

        this.chatListPage = <PageChatList
            openProfile={() => this.setState({page: this.profilePage})}
            openChat={id => this.setState({page: this.chatPage, chatId: id})}
        />

        this.state = {
            page: this.chatListPage,
            // Mocked migration to id=5 chat
            chatId: 5
        }

        this.profilePage = <PageProfile
            goBack={() => this.setState({page: this.chatListPage})}
        />

        this.chatPage = <PageChat
            goBack={() => this.setState({page: this.chatListPage})}
            chatId={this.state.chatId}
        />
    }

    render() {
        return <>{this.state.page}</>
    }
}
