import './App.css'

import React, {Component} from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'

import PageChat from './pages/PageChat/PageChat'
import PageProfile from './pages/PageProfile/PageProfile'
import PageChatList from './pages/PageChatList/PageChatList'
import PageNotFound from './pages/PageNotFound/PageNotFound'


export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <Routes>
                    <Route path='/' element={<PageChatList/>}/>
                    <Route path='/chat' element={<PageChat />} />
                    <Route path='/profile' element={<PageProfile/>}/>
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
            </HashRouter>
        )
    }
}
